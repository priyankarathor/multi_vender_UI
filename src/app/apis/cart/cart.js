import { api } from "../baseurl/baseurl";

const DEVICE_ID_KEY = "cartDeviceId";

function createDeviceId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `DIV-${crypto.randomUUID()}`;
  }

  return `DIV-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getCartDeviceId() {
  if (typeof window === "undefined") return "";

  const savedDeviceId = localStorage.getItem(DEVICE_ID_KEY);
  if (savedDeviceId) return savedDeviceId;

  const deviceId = createDeviceId();
  localStorage.setItem(DEVICE_ID_KEY, deviceId);
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
