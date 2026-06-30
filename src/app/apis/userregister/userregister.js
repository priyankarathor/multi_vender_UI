import axios from "axios";
 
const BASE_URL = "https://amazon-multi-vendor-3.onrender.com/api/endusers";
 
const extractUserId = (data) =>
  data?._id || data?.id || data?.user?._id || data?.user?.id || null;
 
export const userRegister = async (data) => {
  const res = await axios.post(`${BASE_URL}/endregister`, data);
 
  const userId = extractUserId(res.data);
  if (typeof window !== "undefined" && userId) {
    localStorage.setItem("cid", userId);
  }
 
  return res;
};
 