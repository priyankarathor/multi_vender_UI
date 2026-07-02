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
  divid,
} = {}) {
  return api.post("/cart/create", {
    cid,
    pid,
    divid: divid || getCartDeviceId(),
    qty,
    variantId,
    offerDiscount,
  });
}

export function updateCartItem(id, data = {}) {
  const payload = {
    cid: data.cid ?? getLoggedInCid(),
    pid: data.pid ?? null,
    divid: data.divid || getCartDeviceId(),
    qty: data.qty ?? 1,
    variantId: data.variantId ?? null,
    offerDiscount: data.offerDiscount ?? 0,
  };

  console.log("updateCartItem: PUT /cart/update/" + id, payload);

  return api.put(`/cart/update/${id}`, payload);
}

export function deleteCartItem(id) {
  return api.delete(`/cart/delete/${id}`);
}

export function getDeviceCartItems() {
  return api.get(`/cart/device/${getCartDeviceId()}`);
}

export function getAllCartItems() {
  return api.get("/cart/");
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

export function buildCartUpdatePayload(item, cid = getLoggedInCid(), qty = item?.qty || item?.quantity || 1) {
  return {
    cid,
    pid: getCartProductId(item),
    divid: item?.divid || item?.deviceId || getCartDeviceId(),
    qty,
    variantId: getCartVariantId(item),
    offerDiscount: item?.offerDiscount || item?.discount || 0,
  };
}

export async function syncCartItemsToCustomer(items = [], cid = getLoggedInCid()) {
  if (!cid) {
    console.warn("syncCartItemsToCustomer: cid missing, skipping sync");
    return [];
  }

  const deviceId = getCartDeviceId();
  const uniqueItems = Array.from(
    new Map(
      items
        .filter((item) => item?._id)
        .filter((item) => !deviceId || !item.divid || item.divid === deviceId || item.deviceId === deviceId)
        .map((item) => [item._id, item])
    ).values()
  );

  console.log("syncCartItemsToCustomer: items to sync ->", uniqueItems.length, "cid ->", cid);

  const results = await Promise.allSettled(
    uniqueItems.map((item) => {
      const payload = buildCartUpdatePayload(item, cid);
      return updateCartItem(item._id, payload);
    })
  );

  results.forEach((result, idx) => {
    if (result.status === "rejected") {
      console.error(
        "syncCartItemsToCustomer: FAILED for item",
        uniqueItems[idx]?._id,
        result.reason?.response?.data || result.reason?.message || result.reason
      );
    } else {
      console.log(
        "syncCartItemsToCustomer: SUCCESS for item",
        uniqueItems[idx]?._id,
        result.value?.data
      );
    }
  });

  return results;
}

export async function syncDeviceCartToCustomer(cid = getLoggedInCid()) {
  if (!cid) {
    console.warn("syncDeviceCartToCustomer: cid missing, aborting");
    return [];
  }

  const deviceId = getCartDeviceId();
  let items = [];

  try {
    const deviceCartRes = await getDeviceCartItems();
    items = getApiCartList(deviceCartRes.data);
    console.log("syncDeviceCartToCustomer: fetched via /cart/device ->", items.length, "items");
  } catch (err) {
    console.warn("syncDeviceCartToCustomer: /cart/device failed, falling back to /cart/", err?.response?.data || err?.message);
    const allCartRes = await getAllCartItems();
    items = getApiCartList(allCartRes.data).filter(
      (item) => item?.divid === deviceId || item?.deviceId === deviceId
    );
    console.log("syncDeviceCartToCustomer: fetched via fallback ->", items.length, "items");
  }

  return syncCartItemsToCustomer(items, cid);
}

export async function getCartItems({ cid = getLoggedInCid(), divid = getCartDeviceId() } = {}) {
  if (cid) {
    try {
      const res = await api.get(`/cart/customer/${cid}`);
      const items = getApiCartList(res.data);

      if (items.length > 0) {
        console.log("getCartItems: fetched via cid ->", items.length, "items");
        return res;
      }

      console.log("getCartItems: cid fetch returned 0 items, falling back to divid");
    } catch (err) {
      console.warn(
        "getCartItems: /cart/customer failed, falling back to divid ->",
        err?.response?.data || err?.message
      );
    }
  }

  const deviceRes = await api.get(`/cart/device/${divid}`);
  console.log("getCartItems: fetched via divid ->", getApiCartList(deviceRes.data).length, "items");
  return deviceRes;
}
