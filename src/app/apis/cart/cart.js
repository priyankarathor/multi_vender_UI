import { api } from "../baseurl/baseurl";

export function getCartDeviceId() {
  if (typeof window === "undefined") return "";

  const deviceId = localStorage.getItem("deviceId") || crypto.randomUUID();

  localStorage.setItem("deviceId", deviceId);

  console.log(deviceId);

  return deviceId;
}

export function createCartItem({
  cid = null,
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

export function getCartItems({ cid = null } = {}) {
  const divid = getCartDeviceId();

  if (cid) {
    return api.get(`/cart/customer/${cid}`);
  }

  return api.get(`/cart/device/${divid}`);
}