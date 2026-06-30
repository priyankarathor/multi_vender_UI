import axios from "axios";

const BASE_URL = "https://amazon-multi-vendor-3.onrender.com/api/wishlist";

// create new wishlist item
// data: { cid, pid, divid, qty, variantId, venderid, offerDiscount }
export const createWishlistItem = (data) => {
  return axios.post(`${BASE_URL}/create`, data);
};

// get all wishlist items
export const getWishlistItems = () => {
  return axios.get(`${BASE_URL}/`);
};

// get single wishlist item by its _id
export const getWishlistItem = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

// get all wishlist items for a guest device (divid)
export const getWishlistByDevice = (divid) => {
  return axios.get(`${BASE_URL}/device/${divid}`);
};

// update wishlist item (e.g. qty change)
export const updateWishlistItem = (id, data) => {
  return axios.put(`${BASE_URL}/update/${id}`, data);
};

// remove wishlist item
export const deleteWishlistItem = (id) => {
  return axios.delete(`${BASE_URL}/delete/${id}`);
};