import { api } from "../baseurl/baseurl";
import { getLoggedInCid } from "../customer/customer";

export function getCartDeviceId() {
  if (typeof window === "undefined") return "";

  try {
    let deviceId = localStorage.getItem("deviceId");

    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem("deviceId", deviceId);
    }

    return deviceId;
  } catch (err) {
    console.warn("getCartDeviceId failed:", err?.message);
    return "";
  }
}

export function getApiCartList(payload) {
  try {
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.data)) return payload.data;
    if (Array.isArray(payload?.cart)) return payload.cart;
    if (Array.isArray(payload?.items)) return payload.items;
    if (Array.isArray(payload?.data?.data)) return payload.data.data;
    if (Array.isArray(payload?.data?.cart)) return payload.data.cart;
    if (Array.isArray(payload?.data?.items)) return payload.data.items;
    return [];
  } catch {
    return [];
  }
}

const makeEmptyCartResponse = () => ({
  data: {
    success: true,
    data: [],
  },
});

const makeCartResponse = (items = []) => ({
  data: {
    success: true,
    data: items,
  },
});

const is404 = (err) => err?.response?.status === 404;

export function getCartProductId(item) {
  const product =
    item?.pid ||
    item?.productId ||
    item?.product_id ||
    item?.product ||
    item?.id;

  return typeof product === "object" ? product?._id || null : product || null;
}

export function getCartVariantId(item) {
  const variant =
    item?.variantId ||
    item?.variant_id ||
    item?.variant;

  return typeof variant === "object" ? variant?._id || null : variant || null;
}

export function getCartVendorId(item) {
  const vendor =
    item?.vendorId ||
    item?.venderid ||
    item?.vendor_id ||
    item?.vendor ||
    (item?.pid && typeof item.pid === "object" ? item.pid.vendorId : null) ||
    (item?.productId && typeof item.productId === "object"
      ? item.productId.vendorId
      : null) ||
    (item?.variantId && typeof item.variantId === "object"
      ? item.variantId.vendorId
      : null);

  return typeof vendor === "object" ? vendor?._id || null : vendor || null;
}

export function getCartProductKey(item) {
  return getCartProductId(item) || getCartVariantId(item) || item?._id || null;
}

export function buildCartUpdatePayload(
  item,
  cid = getLoggedInCid(),
  qty = item?.qty || item?.quantity || 1
) {
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

export async function createCartItem({
  cid = getLoggedInCid(),
  pid = null,
  qty = 1,
  variantId = null,
  offerDiscount = 0,
  vendorId = null,
  divid,
} = {}) {
  const finalDivid = divid || getCartDeviceId();

  const payload = {
    cid,
    pid,
    divid: finalDivid,
    qty,
    variantId,
    offerDiscount,
    venderid: vendorId, // backend field typo: venderid
  };

  return await api.post("/cart/create", payload);
}

export async function updateCartItem(id, data = {}) {
  if (!id) {
    return makeEmptyCartResponse();
  }

  const payload = {
    cid: data.cid ?? getLoggedInCid(),
    pid: data.pid ?? getCartProductId(data),
    divid: data.divid || data.deviceId || getCartDeviceId(),
    qty: data.qty ?? data.quantity ?? 1,
    variantId: data.variantId ?? getCartVariantId(data),
    offerDiscount: data.offerDiscount ?? data.discount ?? 0,
    venderid: data.vendorId ?? getCartVendorId(data),
  };

  try {
    return await api.put(`/cart/update/${id}`, payload);
  } catch (err) {
    if (is404(err)) {
      return makeEmptyCartResponse();
    }

    console.error("updateCartItem failed:", id, err?.message);
    throw err;
  }
}

export async function deleteCartItem(id) {
  if (!id) {
    return makeEmptyCartResponse();
  }

  try {
    return await api.delete(`/cart/delete/${id}`);
  } catch (err) {
    if (is404(err)) {
      return makeEmptyCartResponse();
    }

    console.error("deleteCartItem failed:", id, err?.message);
    throw err;
  }
}

// Delete ke baad dobara get API mat call karo - isko use karo aur
// apne local cart state (jo already fetchNormalizedCartItems se aaya tha)
// se item hata do. Ex: setCartItems(prev => removeCartItemLocally(prev, deletedId))
export function removeCartItemLocally(items = [], id) {
  if (!Array.isArray(items) || !id) return items;
  return items.filter((item) => item?._id !== id);
}

// Old function support
export async function getAllCartItems() {
  try {
    return await api.get("/cart/");
  } catch (err) {
    if (is404(err)) {
      return makeEmptyCartResponse();
    }

    return makeEmptyCartResponse();
  }
}

// Customer id se cart
export async function getCustomerCartItems(cid = getLoggedInCid()) {
  if (!cid) {
    return makeEmptyCartResponse();
  }

  try {
    // cache-busting: same URL baar baar GET hoti hai, isliye kabhi kabhi
    // browser/axios purana (empty/404) response cache karke serve kar deta
    // tha - isliye add karne ke turant baad bhi purana khali cart dikhta tha.
    return await api.get(`/cart/customer/${cid}`, {
      params: { _t: Date.now() },
      headers: { "Cache-Control": "no-cache", Pragma: "no-cache" },
    });
  } catch (err) {
    if (is404(err)) {
      return makeEmptyCartResponse();
    }

    return makeEmptyCartResponse();
  }
}

// Device id se cart
export async function getDeviceCartItems(divid = getCartDeviceId()) {
  if (!divid) {
    return makeEmptyCartResponse();
  }

  try {
    // cache-busting yahan bhi, same reason
    return await api.get(`/cart/device/${divid}`, {
      params: { _t: Date.now() },
      headers: { "Cache-Control": "no-cache", Pragma: "no-cache" },
    });
  } catch (err) {
    if (is404(err)) {
      return makeEmptyCartResponse();
    }

    return makeEmptyCartResponse();
  }
}

// Main function Navbar/cart page ke liye
// Condition: agar cid hai to SIRF cid wali API se data aayega.
// Agar cid nahi hai tabhi divid wali API se data aayega.
export async function getCartItems({
  cid = getLoggedInCid(),
  divid = getCartDeviceId(),
} = {}) {
  try {
    if (cid) {
      const customerRes = await getCustomerCartItems(cid);
      const customerItems = getApiCartList(customerRes.data);
      return makeCartResponse(customerItems);
    }

    if (divid) {
      const deviceRes = await getDeviceCartItems(divid);
      const deviceItems = getApiCartList(deviceRes.data);
      return makeCartResponse(deviceItems);
    }

    return makeEmptyCartResponse();
  } catch {
    return makeEmptyCartResponse();
  }
}

export async function fetchNormalizedCartItems({
  cid = getLoggedInCid(),
  divid = getCartDeviceId(),
} = {}) {
  try {
    const res = await getCartItems({ cid, divid });
    const items = getApiCartList(res.data);

    return items.map((item) => ({
      ...item,
      resolvedVendorId: getCartVendorId(item),
    }));
  } catch {
    return [];
  }
}

// Login/signup ke baad device cart customer ke naam sync
export async function syncDeviceCartToCustomer(
  cid,
  divid = getCartDeviceId()
) {
  if (!cid || !divid) {
    return {
      success: false,
      message: "cid/divid missing",
    };
  }

  try {
    const deviceRes = await getDeviceCartItems(divid);
    const deviceItems = getApiCartList(deviceRes.data);

    if (deviceItems.length === 0) {
      return {
        success: true,
        migrated: 0,
      };
    }

    const customerRes = await getCustomerCartItems(cid);
    const customerItems = getApiCartList(customerRes.data);

    const findMatchingCustomerItem = (item) => {
      const pid = getCartProductId(item);
      const variantId = getCartVariantId(item);

      return customerItems.find(
        (ci) =>
          String(getCartProductId(ci)) === String(pid) &&
          String(getCartVariantId(ci)) === String(variantId)
      );
    };

    let migratedCount = 0;

    for (const item of deviceItems) {
      try {
        const existing = findMatchingCustomerItem(item);
        const qty = item?.qty || item?.quantity || 1;
        const vendorId = getCartVendorId(item);

        if (existing) {
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

        if (item?._id) {
          await deleteCartItem(item._id);
        }

        migratedCount++;
      } catch (itemErr) {
        console.warn("Cart item migrate failed:", item?._id, itemErr?.message);
      }
    }

    return {
      success: true,
      migrated: migratedCount,
    };
  } catch (err) {
    console.warn("syncDeviceCartToCustomer failed:", err?.message);

    return {
      success: false,
      message: err?.message || "sync failed",
    };
  }
}