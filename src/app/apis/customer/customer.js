const idKeys = ["cid", "customerId", "userId", "_id", "id"];
const userObjectKeys = [
  "data",
  "user",
  "customer",
  "enduser",
  "endUser",
  "finduser",
  "findUser",
  "result",
];

const findIdInObject = (value, visited = new Set()) => {
  if (!value || typeof value !== "object" || visited.has(value)) return null;
  visited.add(value);

  for (const key of idKeys) {
    if (value[key]) return value[key];
  }

  for (const key of userObjectKeys) {
    const nestedId = findIdInObject(value[key], visited);
    if (nestedId) return nestedId;
  }

  return null;
};

export const extractCustomerId = (data) => findIdInObject(data);

export const getLoggedInCid = () => {
  if (typeof window === "undefined") return null;

  const savedCid = localStorage.getItem("cid");
  if (savedCid) return savedCid;

  try {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    return extractCustomerId(user);
  } catch {
    return null;
  }
};

export const saveCustomerSession = (data) => {
  if (typeof window === "undefined") return null;

  localStorage.setItem("user", JSON.stringify(data));

  const token = data?.token || data?.data?.token || data?.user?.token;
  if (token) localStorage.setItem("userToken", token);

  const cid = extractCustomerId(data);
  if (cid) {
    localStorage.setItem("cid", cid);
    localStorage.setItem("userId", cid);
  }

  return cid;
};
