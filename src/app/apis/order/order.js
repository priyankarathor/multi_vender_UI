import axios from "axios";

const BASE_URL = "https://amazon-multi-vendor-3.onrender.com/api/orders";

// data shape: { user_id, payment_method, billing_address, shipping_address, customer_details, items }
export const placeOrder = (data) => {
  return axios.post(`${BASE_URL}/place-order`, data);
};