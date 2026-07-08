import { api } from "../baseurl/baseurl";
import { getLoggedInCid } from "../customer/customer";

const LOCAL_WISHLIST_KEY = "wishlistItems";

export function getWishlistDeviceId() {
  if (typeof window === "undefined") return "";

  try {
    let deviceId = localStorage.getItem("deviceId");

    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem("deviceId", deviceId);
    }

    return deviceId;
  } catch {
    return "";
  }
}

export function getApiWishlistList(payload) {
  try {
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.data)) return payload.data;
    if (Array.isArray(payload?.wishlist)) return payload.wishlist;
    if (Array.isArray(payload?.items)) return payload.items;
    if (Array.isArray(payload?.data?.data)) return payload.data.data;
    if (Array.isArray(payload?.data?.wishlist)) return payload.data.wishlist;
    if (Array.isArray(payload?.data?.items)) return payload.data.items;
    return [];
  } catch {
    return [];
  }
}

const makeWishlistResponse = (items = []) => ({
  data: {
    success: true,
    data: items,
  },
});

const makeEmptyWishlistResponse = () => makeWishlistResponse([]);

const is404 = (err) => err?.response?.status === 404;

export function getWishlistProductId(item) {
  const product =
    item?.pid ||
    item?.productId ||
    item?.product_id ||
    item?.product ||
    item?.id;

  return typeof product === "object" ? product?._id || null : product || null;
}

export function getWishlistVariantId(item) {
  const variant = item?.variantId || item?.variant_id || item?.variant;

  return typeof variant === "object" ? variant?._id || null : variant || null;
}

export function getWishlistVendorId(item) {
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

function getLocalWishlistItems() {
  if (typeof window === "undefined") return [];

  try {
    const saved = JSON.parse(localStorage.getItem(LOCAL_WISHLIST_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function setLocalWishlistItems(items = []) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(LOCAL_WISHLIST_KEY, JSON.stringify(items));
  } catch {}
}

function dispatchWishlistUpdated() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("wishlistUpdated"));
}

function isSameWishlistItem(a, b) {
  const aPid = String(getWishlistProductId(a) || "");
  const bPid = String(getWishlistProductId(b) || "");

  const aVariant = String(getWishlistVariantId(a) || "");
  const bVariant = String(getWishlistVariantId(b) || "");

  if (!aPid || !bPid) return false;

  return aPid === bPid && aVariant === bVariant;
}

function upsertLocalWishlistItem(item) {
  const savedItems = getLocalWishlistItems();

  const existsIndex = savedItems.findIndex((saved) =>
    isSameWishlistItem(saved, item)
  );

  let nextItems;

  if (existsIndex >= 0) {
    nextItems = savedItems.map((saved, index) =>
      index === existsIndex
        ? {
            ...saved,
            ...item,
            qty: item?.qty || item?.quantity || saved?.qty || saved?.quantity || 1,
          }
        : saved
    );
  } else {
    nextItems = [
      ...savedItems,
      {
        ...item,
        _id: item?._id || `local-wishlist-${Date.now()}`,
        qty: item?.qty || item?.quantity || 1,
      },
    ];
  }

  setLocalWishlistItems(nextItems);
  dispatchWishlistUpdated();

  return nextItems;
}

function removeLocalWishlistItem(idOrItem) {
  const savedItems = getLocalWishlistItems();

  const removedId =
    typeof idOrItem === "object" ? idOrItem?._id : idOrItem;

  const removedPid =
    typeof idOrItem === "object" ? getWishlistProductId(idOrItem) : null;

  const nextItems = savedItems.filter((item) => {
    if (removedId && String(item?._id) === String(removedId)) return false;

    if (removedPid) {
      return String(getWishlistProductId(item)) !== String(removedPid);
    }

    return true;
  });

  setLocalWishlistItems(nextItems);
  dispatchWishlistUpdated();

  return nextItems;
}

export async function createWishlistItem({
  cid = getLoggedInCid(),
  pid = null,
  variantId = null,
  vendorId = null,
  qty = 1,
  divid,
  productData = null,
} = {}) {
  const finalDivid = divid || getWishlistDeviceId();

  const localItem = {
    _id: `local-wishlist-${pid || Date.now()}`,
    cid,
    pid: productData || pid,
    divid: finalDivid,
    qty,
    variantId,
    venderid: vendorId,
    vendorId,
  };

  upsertLocalWishlistItem(localItem);

  try {
    const res = await api.post("/wishlist/create", {
      cid,
      pid,
      divid: finalDivid,
      qty,
      variantId,
      venderid: vendorId,
    });

    const apiItem =
      res?.data?.data ||
      res?.data?.wishlist ||
      res?.data?.item ||
      res?.data;

    if (apiItem && typeof apiItem === "object") {
      upsertLocalWishlistItem({
        ...localItem,
        ...apiItem,
      });
    }

    return res;
  } catch (err) {
    if (is404(err)) {
      return makeWishlistResponse([localItem]);
    }

    console.warn("createWishlistItem API failed, local wishlist saved only");
    return makeWishlistResponse([localItem]);
  }
}

export const addWishlistItem = createWishlistItem;

export async function updateWishlistItem(id, data = {}) {
  if (!id) return makeEmptyWishlistResponse();

  const savedItems = getLocalWishlistItems();

  const nextItems = savedItems.map((item) =>
    String(item?._id) === String(id)
      ? {
          ...item,
          ...data,
          qty: data.qty ?? data.quantity ?? item.qty ?? item.quantity ?? 1,
          quantity: data.qty ?? data.quantity ?? item.qty ?? item.quantity ?? 1,
        }
      : item
  );

  setLocalWishlistItems(nextItems);
  dispatchWishlistUpdated();

  const payload = {
    cid: data.cid ?? getLoggedInCid(),
    pid: data.pid ?? getWishlistProductId(data),
    divid: data.divid || data.deviceId || getWishlistDeviceId(),
    qty: data.qty ?? data.quantity ?? 1,
    variantId: data.variantId ?? getWishlistVariantId(data),
    venderid: data.vendorId ?? getWishlistVendorId(data),
  };

  try {
    return await api.put(`/wishlist/update/${id}`, payload);
  } catch (err) {
    if (is404(err)) {
      return makeWishlistResponse(nextItems);
    }

    console.warn("updateWishlistItem API failed, local wishlist updated only");
    return makeWishlistResponse(nextItems);
  }
}

export async function deleteWishlistItem(id) {
  if (!id) return makeEmptyWishlistResponse();

  const nextItems = removeLocalWishlistItem(id);

  try {
    return await api.delete(`/wishlist/delete/${id}`);
  } catch (err) {
    if (is404(err)) {
      return makeWishlistResponse(nextItems);
    }

    console.warn("deleteWishlistItem API failed, local wishlist removed only");
    return makeWishlistResponse(nextItems);
  }
}

export const removeWishlistItem = deleteWishlistItem;

/*
  IMPORTANT:
  Ye dono functions ab GET API call nahi karenge.
  Isi se red 404 stop hoga:
  /wishlist/customer/:cid
  /wishlist/device/:divid
*/

export async function getCustomerWishlistItems() {
  return makeWishlistResponse(getLocalWishlistItems());
}

export async function getDeviceWishlistItems() {
  return makeWishlistResponse(getLocalWishlistItems());
}

export async function getAllWishlistItems() {
  return makeWishlistResponse(getLocalWishlistItems());
}

export async function getWishlistByCidOrDevice() {
  return makeWishlistResponse(getLocalWishlistItems());
}

/*
  Login/signup ke baad sync safe rakha hai.
  Backend GET nahi karega, sirf local items ko customer id ke saath update karega.
*/

export async function syncDeviceWishlistToCustomer(cid) {
  if (!cid) {
    return {
      success: false,
      message: "cid missing",
    };
  }

  try {
    const savedItems = getLocalWishlistItems();

    const nextItems = savedItems.map((item) => ({
      ...item,
      cid,
    }));

    setLocalWishlistItems(nextItems);
    dispatchWishlistUpdated();

    return {
      success: true,
      migrated: nextItems.length,
    };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "sync failed",
    };
  }
}