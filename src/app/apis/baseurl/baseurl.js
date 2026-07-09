import axios from "axios";

export const BASE_URL = "https://amazon-multi-vendor-3.onrender.com/api";

export const api = axios.create({
  baseURL: BASE_URL,
});
