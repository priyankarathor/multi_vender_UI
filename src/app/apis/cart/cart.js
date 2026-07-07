import { api } from "../baseurl/baseurl";
import { getLoggedInCid } from "../customer/customer";

export function getCartDeviceId() {
  if (typeof window === "undefined") return "";
  const deviceId = localStorage.getItem("deviceId") || crypto.randomUUID();
  localStorage.setItem("deviceId", deviceId);
  return deviceId;
}

export function createCartItem({
  cid = getLoggedInCid(),
  pid = null,
  qty = 1,
  variantId = null,
  offerDiscount = 0,
  vendorId = null,
  divid,
} = {}) {
  const finalDivid = divid || getCartDeviceId();

  return api.post("/cart/create", {
    cid,
    pid,
    divid: finalDivid,
    qty,
    variantId,
    offerDiscount,
    venderid: vendorId, // 👈 backend schema field ka naam "venderid" hai (typo), "vendorId" nahi
  });
}

export function updateCartItem(id, data = {}) {
  const resolvedVendorId = data.vendorId ?? getCartVendorId(data) ?? null;
  const payload = {
    cid: data.cid ?? getLoggedInCid(),
    pid: data.pid ?? null,
    divid: data.divid || getCartDeviceId(),
    qty: data.qty ?? 1,
    variantId: data.variantId ?? null,
    offerDiscount: data.offerDiscount ?? 0,
    venderid: resolvedVendorId, // 👈 yahan bhi backend field name match karna zaroori hai
  };
  return api.put(`/cart/update/${id}`, payload);
}
export function getDeviceCartItems() {
  return api.get(`/cart/device/${getCartDeviceId()}`);
}

export function getAllCartItems() {
  return api.get("/cart/");
}
export function deleteCartItem(id) {
  return api.delete(`/cart/delete/${id}`);
}



export function getApiCartList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.cart)) return payload.cart;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.data?.data)) return payload.data.data;
  if (Array.isArray(payload?.data?.cart)) return payload.data.cart;
  if (Array.isArray(payload?.data?.items)) return payload.data.items;
  return [];
}

export function getCartProductId(item) {
  return item?.pid && typeof item.pid === "object" ? item.pid._id : item?.pid || item?.productId || null;
}

export function getCartVariantId(item) {
  return item?.variantId && typeof item.variantId === "object" ? item.variantId._id : item?.variantId || null;
}

export function getCartProductKey(item) {
  return getCartProductId(item) || getCartVariantId(item) || item?._id;
}

// 🆕 Ab vendorId seedha backend se populate hui product/variant object se
// nikalte hain (product document mein "vendorId" field already hai),
// koi localStorage mapping ki zaroorat nahi.
export function getCartVendorId(item) {
  const vendor =
    item?.vendorId ||
    item?.venderid ||
    (item?.pid && typeof item.pid === "object" ? item.pid.vendorId : null) ||
    (item?.variantId && typeof item.variantId === "object" ? item.variantId.vendorId : null) ||
    null;

  return typeof vendor === "object" ? vendor?._id || null : vendor;
}

export function buildCartUpdatePayload(item, cid = getLoggedInCid(), qty = item?.qty || item?.quantity || 1) {
  return {
    cid,
    pid: getCartProductId(item),
    divid: item?.divid || item?.deviceId || getCartDeviceId(),
    qty,
    variantId: getCartVariantId(item),
    offerDiscount: item?.offerDiscount || item?.discount || 0,
    vendorId: getCartVendorId(item),
  };
}

export async function getCartItems({ cid = getLoggedInCid(), divid = getCartDeviceId() } = {}) {
  if (cid) {
    try {
      const res = await api.get(`/cart/customer/${cid}`);
      const items = getApiCartList(res.data);
      if (items.length > 0) return res;
    } catch (err) {
      console.warn("getCartItems: cid fetch failed, falling back to divid", err?.message);
    }
  }
  return api.get(`/cart/device/${divid}`);
}

export async function fetchNormalizedCartItems({ cid = getLoggedInCid(), divid = getCartDeviceId() } = {}) {
  let items = [];
  try {
    const res = await getCartItems({ cid, divid });
    items = getApiCartList(res.data);
  } catch (err) {
    console.warn("fetchNormalizedCartItems: getCartItems failed, trying /cart/ directly", err?.message);
    const allRes = await getAllCartItems();
    items = getApiCartList(allRes.data).filter(
      (item) => item?.divid === divid || item?.deviceId === divid || item?.cid === cid
    );
  }

  return items.map((item) => ({
    ...item,
    resolvedVendorId: getCartVendorId(item),
  }));
}

// Login/signup ke baad device (divid) wala cart customer (cid) ke naam kar do.
// Backend mein alag se koi "/cart/sync" route nahi hai, isliye existing
// create/update/delete APIs se hi migrate karte hain.
export async function syncDeviceCartToCustomer(cid, divid = getCartDeviceId()) {
  if (!cid || !divid) return { success: false, message: "cid/divid missing" };

  try {
    // 1. Device wala cart uthao
    const deviceRes = await api.get(`/cart/device/${divid}`);
    const deviceItems = getApiCartList(deviceRes.data);

    if (deviceItems.length === 0) {
      return { success: true, migrated: 0 };
    }

    // 2. Customer ka existing cart bhi uthao, taaki duplicate items merge ho sakein
    let customerItems = [];
    try {
      const customerRes = await api.get(`/cart/customer/${cid}`);
      customerItems = getApiCartList(customerRes.data);
    } catch (err) {
      console.warn("syncDeviceCartToCustomer: customer cart fetch failed", err?.message);
    }

    const findMatchingCustomerItem = (item) => {
      const pid = getCartProductId(item);
      const variantId = getCartVariantId(item);
      return customerItems.find(
        (ci) => getCartProductId(ci) === pid && getCartVariantId(ci) === variantId
      );
    };

    // 3. Har device item ko customer ke naam kar do
    for (const item of deviceItems) {
      const existing = findMatchingCustomerItem(item);
      const qty = item?.qty || item?.quantity || 1;
      const vendorId = getCartVendorId(item);

      try {
        if (existing) {
          // Already customer cart mein hai -> qty add kar do
          await updateCartItem(existing._id, {
            cid,
            pid: getCartProductId(existing),
            variantId: getCartVariantId(existing),
            divid,
            qty: (existing?.qty || existing?.quantity || 0) + qty,
            offerDiscount: existing?.offerDiscount || existing?.discount || 0,
            vendorId: getCartVendorId(existing) || vendorId,
          });
        } else {
          // Naya item customer ke naam bana do
          await createCartItem({
            cid,
            pid: getCartProductId(item),
            variantId: getCartVariantId(item),
            divid,
            qty,
            offerDiscount: item?.offerDiscount || item?.discount || 0,
            vendorId,
          });
        }

        // 4. Purana device item delete kar do
        if (item?._id) {
          await deleteCartItem(item._id);
        }
      } catch (err) {
        console.warn("syncDeviceCartToCustomer: item migrate failed", item?._id, err?.message);
      }
    }

    return { success: true, migrated: deviceItems.length };
  } catch (err) {
    console.error("syncDeviceCartToCustomer error:", err?.message);
    return { success: false, message: err?.message || "sync failed" };
  }
}