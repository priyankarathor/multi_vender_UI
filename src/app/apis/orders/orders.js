import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://amazon-multi-vendor-3.onrender.com/api";

export const getUserOrders = (userId) => {
  return axios.get(`${BASE_URL}/orders/user/${userId}`);
};

// data shape: { user_id, payment_method, billing_address, shipping_address, customer_details, items }
export const placeOrder = (data) => {
  return axios.post(`${BASE_URL}/orders/place-order`, data);
};
