import { api } from "../baseurl/baseurl";

export const registerVendor = (vendorData) => {
  return api.post("/users/register", { ...vendorData, role: "vendor" });
};

export const sendVendorOtp = (email) => {
  return api.post("/users/verify-otp", { email, role: "vendor" });
};

export const verifyVendorOtp = ({ email, otp }) => {
  return api.post("/users/verify-otp", { email, otp, role: "vendor" });
};

export const resendVendorOtp = (email) => {
  return api.post("/users/resend-otp", { email, role: "vendor" });
};
