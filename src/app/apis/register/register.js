import { api } from "../baseurl/baseurl";

export const registerVendor = (vendorData) => {
  return api.post("/users/register", vendorData);
};
