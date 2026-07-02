import axios from "axios";
import { getLoggedInCid } from "../customer/customer";
import { getCartDeviceId } from "../cart/cart";

const BASE_URL = "https://amazon-multi-vendor-3.onrender.com/api/wishlist";

// helper: kisi bhi response shape se array nikaal leta hai (cart.js ke getApiCartList jaisa)
const getWishlistList = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.wishlist)) return payload.wishlist;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.data?.data)) return payload.data.data;
  return [];
};

// create new wishlist item
// data: { cid, pid, divid, qty, variantId, venderid, offerDiscount }
export const createWishlistItem = (data) => {
  return axios.post(`${BASE_URL}/create`, data);
};

// get ALL wishlist items (admin/raw list, unrelated to a specific user)
export const getWishlistItems = () => {
  return axios.get(`${BASE_URL}/`);
};

export const getAllWishlistItems = getWishlistItems;

// get single wishlist item by its _id
export const getWishlistItem = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

// get all wishlist items for a guest device (divid) -- unchanged, still used directly in a few places
export const getWishlistByDevice = (divid) => {
  return axios.get(`${BASE_URL}/device/${divid}`);
};

const getWishlistProductId = (item) =>
  item?.pid && typeof item.pid === "object" ? item.pid._id : item?.pid || item?.productId || null;

const getWishlistVariantId = (item) =>
  item?.variantId && typeof item.variantId === "object" ? item.variantId._id : item?.variantId || null;

const buildWishlistUpdatePayload = (
  item,
  cid = getLoggedInCid(),
  qty = item?.qty || item?.quantity || 1
) => ({
  cid,
  pid: getWishlistProductId(item),
  divid: item?.divid || item?.deviceId || getCartDeviceId(),
  qty,
  variantId: getWishlistVariantId(item),
  venderid: item?.venderid || item?.vendorId || null,
  offerDiscount: item?.offerDiscount || item?.discount || 0,
});

export const syncWishlistItemsToCustomer = async (items = [], cid = getLoggedInCid()) => {
  if (!cid) {
    console.warn("syncWishlistItemsToCustomer: cid missing, skipping sync");
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

  console.log("syncWishlistItemsToCustomer: items to sync ->", uniqueItems.length, "cid ->", cid);

  const results = await Promise.allSettled(
    uniqueItems.map((item) => updateWishlistItem(item._id, buildWishlistUpdatePayload(item, cid)))
  );

  results.forEach((result, idx) => {
    if (result.status === "rejected") {
      console.error(
        "syncWishlistItemsToCustomer: FAILED for item",
        uniqueItems[idx]?._id,
        result.reason?.response?.data || result.reason?.message || result.reason
      );
    } else {
      console.log(
        "syncWishlistItemsToCustomer: SUCCESS for item",
        uniqueItems[idx]?._id,
        result.value?.data
      );
    }
  });

  return results;
};

export const syncDeviceWishlistToCustomer = async (cid = getLoggedInCid()) => {
  if (!cid) {
    console.warn("syncDeviceWishlistToCustomer: cid missing, aborting");
    return [];
  }

  const deviceId = getCartDeviceId();
  let items = [];

  try {
    const deviceWishlistRes = await getWishlistByDevice(deviceId);
    items = getWishlistList(deviceWishlistRes.data);
    console.log("syncDeviceWishlistToCustomer: fetched via /wishlist/device ->", items.length, "items");
  } catch (err) {
    console.warn(
      "syncDeviceWishlistToCustomer: /wishlist/device failed, falling back to /wishlist/",
      err?.response?.data || err?.message
    );
    const allWishlistRes = await getAllWishlistItems();
    items = getWishlistList(allWishlistRes.data).filter(
      (item) => item?.divid === deviceId || item?.deviceId === deviceId
    );
    console.log("syncDeviceWishlistToCustomer: fetched via fallback ->", items.length, "items");
  }

  return syncWishlistItemsToCustomer(items, cid);
};

// 👇 NAYA: cart.js ke getCartItems jaisa hi pattern.
// cid ho tho /wishlist/customer/:cid try karo; agar wo fail ho ya 0 items de,
// automatically /wishlist/device/:divid pe fallback ho jata hai.
export const getWishlistByCidOrDevice = async ({
  cid = getLoggedInCid(),
  divid = getCartDeviceId(),
} = {}) => {
  if (cid) {
    try {
      const res = await axios.get(`${BASE_URL}/customer/${cid}`);
      const items = getWishlistList(res.data);

      if (items.length > 0) {
        console.log("getWishlistByCidOrDevice: fetched via cid ->", items.length, "items");
        return res;
      }

      console.log("getWishlistByCidOrDevice: cid fetch returned 0 items, falling back to divid");
    } catch (err) {
      console.warn(
        "getWishlistByCidOrDevice: /wishlist/customer failed, falling back to divid ->",
        err?.response?.data || err?.message
      );
    }
  }

  const deviceRes = await axios.get(`${BASE_URL}/device/${divid}`);
  console.log(
    "getWishlistByCidOrDevice: fetched via divid ->",
    getWishlistList(deviceRes.data).length,
    "items"
  );
  return deviceRes;
};

// update wishlist item (e.g. qty change)
export const updateWishlistItem = (id, data) => {
  return axios.put(`${BASE_URL}/update/${id}`, data);
};

// remove wishlist item
export const deleteWishlistItem = (id) => {
  return axios.delete(`${BASE_URL}/delete/${id}`);
};
