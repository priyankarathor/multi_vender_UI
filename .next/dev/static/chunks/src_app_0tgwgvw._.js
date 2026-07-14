(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/apis/baseurl/baseurl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const BASE_URL = "https://amazon-multi-vendor-3.onrender.com/api";
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
api.interceptors.response.use((response)=>response, (error)=>{
    const status = error?.response?.status;
    // 401 aur 404 expected API responses hain.
    // console.error use nahi karna, warna Next.js red overlay dikhata hai.
    if (status !== 401 && status !== 404) {
        console.warn("API request failed:", {
            url: error?.config?.url || "",
            status: status || 0,
            message: error?.response?.data?.message || error?.response?.data?.error || error?.message || "Request failed"
        });
    }
    return Promise.reject(error);
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/apis/category/category.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCategories",
    ()=>getCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/baseurl/baseurl.js [app-client] (ecmascript)");
;
const getCategories = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/categories");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/apis/whatsapp/whatsapp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendWhatsAppOtp",
    ()=>sendWhatsAppOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const WHATSAPP_OTP_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WHATSAPP_OTP_API_URL || "/api/send-whatsapp-otp";
const sendWhatsAppOtp = (number)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(WHATSAPP_OTP_API_URL, {
        number
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/apis/userlogin/userlogin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userLogin",
    ()=>userLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const BASE_URL = "https://amazon-multi-vendor-3.onrender.com/api/endusers";
const userLogin = async (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/endlogin`, data);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/apis/customer/customer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractCustomerId",
    ()=>extractCustomerId,
    "getLoggedInCid",
    ()=>getLoggedInCid,
    "getLoggedInCustomerInfo",
    ()=>getLoggedInCustomerInfo,
    "saveCustomerSession",
    ()=>saveCustomerSession
]);
const idKeys = [
    "cid",
    "customerId",
    "userId",
    "_id",
    "id"
];
const userObjectKeys = [
    "data",
    "user",
    "customer",
    "enduser",
    "endUser",
    "finduser",
    "findUser",
    "result"
];
const findIdInObject = (value, visited = new Set())=>{
    if (!value || typeof value !== "object" || visited.has(value)) return null;
    visited.add(value);
    for (const key of idKeys){
        if (value[key]) return value[key];
    }
    for (const key of userObjectKeys){
        const nestedId = findIdInObject(value[key], visited);
        if (nestedId) return nestedId;
    }
    return null;
};
const extractCustomerId = (data)=>findIdInObject(data);
const getLoggedInCid = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const savedCid = localStorage.getItem("cid");
    if (savedCid) return savedCid;
    try {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        return extractCustomerId(user);
    } catch  {
        return null;
    }
};
const saveCustomerSession = (data)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
// ---------- NAYA CODE: AddressForm autofill ke liye ----------
const nameKeys = [
    "fullName",
    "name",
    "customerName",
    "userName"
];
const mobileKeys = [
    "mobile",
    "mobileNo",
    "mobileNumber",
    "phone",
    "phoneNumber",
    "contact",
    "contactNumber"
];
const emailKeys = [
    "email",
    "emailId",
    "emailAddress"
];
const addressObjectKeys = [
    "address",
    "shippingAddress",
    "defaultAddress",
    "savedAddress"
];
const findFieldInObject = (value, fieldKeys, visited = new Set())=>{
    if (!value || typeof value !== "object" || visited.has(value)) return null;
    visited.add(value);
    for (const key of fieldKeys){
        if (value[key]) return value[key];
    }
    for (const key of userObjectKeys){
        const nested = findFieldInObject(value[key], fieldKeys, visited);
        if (nested) return nested;
    }
    return null;
};
const findAddressInObject = (value, visited = new Set())=>{
    if (!value || typeof value !== "object" || visited.has(value)) return null;
    visited.add(value);
    for (const key of addressObjectKeys){
        if (value[key] && typeof value[key] === "object") return value[key];
    }
    for (const key of userObjectKeys){
        const nested = findAddressInObject(value[key], visited);
        if (nested) return nested;
    }
    return null;
};
const getLoggedInCustomerInfo = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        if (!user) return null;
        const address = findAddressInObject(user) || {};
        return {
            fullName: findFieldInObject(user, nameKeys) || "",
            mobile: findFieldInObject(user, mobileKeys) || "",
            email: findFieldInObject(user, emailKeys) || "",
            pincode: address.pincode || address.pinCode || address.zip || "",
            houseNumber: address.houseNumber || address.house || "",
            area: address.area || address.street || address.addressLine1 || "",
            locality: address.locality || address.addressLine2 || "",
            city: address.city || "",
            state: address.state || "",
            landmark: address.landmark || ""
        };
    } catch  {
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/apis/userregister/userregister.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userRegister",
    ()=>userRegister
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/customer/customer.js [app-client] (ecmascript)");
;
;
const BASE_URL = "https://amazon-multi-vendor-3.onrender.com/api/endusers";
const userRegister = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/endregister`, data);
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractCustomerId"])(res.data);
    if (("TURBOPACK compile-time value", "object") !== "undefined" && userId) {
        localStorage.setItem("cid", userId);
    }
    return res;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/apis/cart/cart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCartUpdatePayload",
    ()=>buildCartUpdatePayload,
    "createCartItem",
    ()=>createCartItem,
    "deleteCartItem",
    ()=>deleteCartItem,
    "fetchNormalizedCartItems",
    ()=>fetchNormalizedCartItems,
    "getAllCartItems",
    ()=>getAllCartItems,
    "getApiCartList",
    ()=>getApiCartList,
    "getCartDeviceId",
    ()=>getCartDeviceId,
    "getCartItems",
    ()=>getCartItems,
    "getCartProductId",
    ()=>getCartProductId,
    "getCartProductKey",
    ()=>getCartProductKey,
    "getCartVariantId",
    ()=>getCartVariantId,
    "getCartVendorId",
    ()=>getCartVendorId,
    "getCustomerCartItems",
    ()=>getCustomerCartItems,
    "getDeviceCartItems",
    ()=>getDeviceCartItems,
    "removeCartItemLocally",
    ()=>removeCartItemLocally,
    "syncDeviceCartToCustomer",
    ()=>syncDeviceCartToCustomer,
    "updateCartItem",
    ()=>updateCartItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/baseurl/baseurl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/customer/customer.js [app-client] (ecmascript)");
;
;
function getCartDeviceId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        let deviceId = localStorage.getItem("deviceId");
        if (!deviceId) {
            deviceId = crypto.randomUUID();
            localStorage.setItem("deviceId", deviceId);
        }
        return deviceId;
    } catch (err) {
        console.warn("getCartDeviceId failed:", err?.message);
        return "";
    }
}
function getApiCartList(payload) {
    try {
        if (Array.isArray(payload)) return payload;
        if (Array.isArray(payload?.data)) return payload.data;
        if (Array.isArray(payload?.cart)) return payload.cart;
        if (Array.isArray(payload?.items)) return payload.items;
        if (Array.isArray(payload?.data?.data)) return payload.data.data;
        if (Array.isArray(payload?.data?.cart)) return payload.data.cart;
        if (Array.isArray(payload?.data?.items)) return payload.data.items;
        return [];
    } catch  {
        return [];
    }
}
const makeEmptyCartResponse = (message = "")=>({
        data: {
            success: true,
            data: [],
            ...message ? {
                message
            } : {}
        }
    });
const makeCartResponse = (items = [])=>({
        data: {
            success: true,
            data: Array.isArray(items) ? items : []
        }
    });
const is404 = (err)=>err?.response?.status === 404;
const is401 = (err)=>err?.response?.status === 401;
function getApiErrorMessage(err, fallback = "Cart request failed") {
    return err?.response?.data?.message || err?.response?.data?.error || err?.message || fallback;
}
function getCartProductId(item) {
    const product = item?.pid || item?.productId || item?.product_id || item?.product || item?.id;
    return typeof product === "object" ? product?._id || product?.id || null : product || null;
}
function getCartVariantId(item) {
    const variant = item?.variantId || item?.variant_id || item?.variant;
    return typeof variant === "object" ? variant?._id || variant?.id || null : variant || null;
}
function getCartVendorId(item) {
    const vendor = item?.vendorId || item?.venderid || item?.vendor_id || item?.vendor || (item?.pid && typeof item.pid === "object" ? item.pid.vendorId : null) || (item?.productId && typeof item.productId === "object" ? item.productId.vendorId : null) || (item?.variantId && typeof item.variantId === "object" ? item.variantId.vendorId : null);
    return typeof vendor === "object" ? vendor?._id || vendor?.id || null : vendor || null;
}
function getCartProductKey(item) {
    return getCartProductId(item) || getCartVariantId(item) || item?._id || null;
}
function buildCartUpdatePayload(item, cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(), qty = item?.qty || item?.quantity || 1) {
    return {
        cid,
        pid: getCartProductId(item),
        divid: item?.divid || item?.deviceId || getCartDeviceId(),
        qty,
        variantId: getCartVariantId(item),
        offerDiscount: item?.offerDiscount || item?.discount || 0,
        venderid: getCartVendorId(item)
    };
}
async function createCartItem({ cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(), pid = null, qty = 1, variantId = null, offerDiscount = 0, vendorId = null, divid } = {}) {
    const finalDivid = divid || getCartDeviceId();
    const payload = {
        cid: cid || null,
        pid,
        divid: finalDivid,
        qty,
        variantId,
        offerDiscount,
        venderid: vendorId
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cart/create", payload);
}
async function updateCartItem(id, data = {}) {
    if (!id) {
        return makeEmptyCartResponse();
    }
    const payload = {
        cid: data.cid ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])() ?? null,
        pid: data.pid ?? getCartProductId(data),
        divid: data.divid || data.deviceId || getCartDeviceId(),
        qty: data.qty ?? data.quantity ?? 1,
        variantId: data.variantId ?? getCartVariantId(data),
        offerDiscount: data.offerDiscount ?? data.discount ?? 0,
        venderid: data.vendorId ?? data.venderid ?? getCartVendorId(data)
    };
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/cart/update/${id}`, payload);
    } catch (err) {
        if (is401(err)) {
            return makeEmptyCartResponse("Unauthorized");
        }
        if (is404(err)) {
            return makeEmptyCartResponse();
        }
        console.warn("updateCartItem failed:", id, getApiErrorMessage(err));
        throw err;
    }
}
async function deleteCartItem(id) {
    if (!id) {
        return makeEmptyCartResponse();
    }
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/cart/delete/${id}`);
    } catch (err) {
        if (is401(err)) {
            return makeEmptyCartResponse("Unauthorized");
        }
        if (is404(err)) {
            return makeEmptyCartResponse();
        }
        console.warn("deleteCartItem failed:", id, getApiErrorMessage(err));
        throw err;
    }
}
function removeCartItemLocally(items = [], id) {
    if (!Array.isArray(items) || !id) return items;
    return items.filter((item)=>String(item?._id) !== String(id));
}
async function getAllCartItems() {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/cart/");
    } catch (err) {
        if (is401(err)) {
            return makeEmptyCartResponse("Unauthorized");
        }
        return makeEmptyCartResponse();
    }
}
async function getCustomerCartItems(cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])()) {
    if (!cid) {
        return makeEmptyCartResponse();
    }
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/cart/customer/${cid}`, {
            params: {
                _t: Date.now()
            },
            headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });
    } catch (err) {
        if (is401(err)) {
            console.warn("Customer cart unauthorized. Token was rejected by backend.");
            return makeEmptyCartResponse("Unauthorized");
        }
        if (is404(err)) {
            return makeEmptyCartResponse();
        }
        console.warn("getCustomerCartItems failed:", getApiErrorMessage(err));
        return makeEmptyCartResponse();
    }
}
async function getDeviceCartItems(divid = getCartDeviceId()) {
    if (!divid) {
        return makeEmptyCartResponse();
    }
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/cart/device/${divid}`, {
            params: {
                _t: Date.now()
            },
            headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });
    } catch (err) {
        if (is401(err)) {
            console.warn("Device cart unauthorized. Token was rejected by backend.");
            return makeEmptyCartResponse("Unauthorized");
        }
        if (is404(err)) {
            return makeEmptyCartResponse();
        }
        console.warn("getDeviceCartItems failed:", getApiErrorMessage(err));
        return makeEmptyCartResponse();
    }
}
async function getCartItems({ cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(), divid = getCartDeviceId() } = {}) {
    if (cid) {
        const customerRes = await getCustomerCartItems(cid);
        const customerItems = getApiCartList(customerRes?.data);
        return makeCartResponse(customerItems);
    }
    if (divid) {
        const deviceRes = await getDeviceCartItems(divid);
        const deviceItems = getApiCartList(deviceRes?.data);
        return makeCartResponse(deviceItems);
    }
    return makeEmptyCartResponse();
}
async function fetchNormalizedCartItems({ cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(), divid = getCartDeviceId() } = {}) {
    try {
        const res = await getCartItems({
            cid,
            divid
        });
        const items = getApiCartList(res?.data);
        return items.map((item)=>({
                ...item,
                resolvedVendorId: getCartVendorId(item)
            }));
    } catch (err) {
        console.warn("fetchNormalizedCartItems failed:", getApiErrorMessage(err));
        return [];
    }
}
async function syncDeviceCartToCustomer(cid, divid = getCartDeviceId()) {
    if (!cid || !divid) {
        return {
            success: false,
            message: "cid/divid missing"
        };
    }
    try {
        const deviceRes = await getDeviceCartItems(divid);
        const deviceItems = getApiCartList(deviceRes?.data);
        if (deviceItems.length === 0) {
            return {
                success: true,
                migrated: 0
            };
        }
        const customerRes = await getCustomerCartItems(cid);
        const customerItems = getApiCartList(customerRes?.data);
        const findMatchingCustomerItem = (item)=>{
            const pid = getCartProductId(item);
            const variantId = getCartVariantId(item);
            return customerItems.find((customerItem)=>String(getCartProductId(customerItem)) === String(pid) && String(getCartVariantId(customerItem)) === String(variantId));
        };
        let migratedCount = 0;
        for (const item of deviceItems){
            try {
                const existing = findMatchingCustomerItem(item);
                const qty = item?.qty || item?.quantity || 1;
                const vendorId = getCartVendorId(item);
                if (existing) {
                    await updateCartItem(existing._id, {
                        cid,
                        pid: getCartProductId(existing),
                        variantId: getCartVariantId(existing),
                        divid,
                        qty: (existing?.qty || existing?.quantity || 0) + qty,
                        offerDiscount: existing?.offerDiscount || existing?.discount || 0,
                        vendorId: getCartVendorId(existing) || vendorId
                    });
                } else {
                    await createCartItem({
                        cid,
                        pid: getCartProductId(item),
                        variantId: getCartVariantId(item),
                        divid,
                        qty,
                        offerDiscount: item?.offerDiscount || item?.discount || 0,
                        vendorId
                    });
                }
                if (item?._id) {
                    await deleteCartItem(item._id);
                }
                migratedCount += 1;
            } catch (itemErr) {
                console.warn("Cart item migrate failed:", item?._id, getApiErrorMessage(itemErr));
            }
        }
        return {
            success: true,
            migrated: migratedCount
        };
    } catch (err) {
        console.warn("syncDeviceCartToCustomer failed:", getApiErrorMessage(err));
        return {
            success: false,
            message: getApiErrorMessage(err, "sync failed")
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/apis/wishlist/wishlist.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addWishlistItem",
    ()=>addWishlistItem,
    "createWishlistItem",
    ()=>createWishlistItem,
    "deleteWishlistItem",
    ()=>deleteWishlistItem,
    "getAllWishlistItems",
    ()=>getAllWishlistItems,
    "getApiWishlistList",
    ()=>getApiWishlistList,
    "getCustomerWishlistItems",
    ()=>getCustomerWishlistItems,
    "getDeviceWishlistItems",
    ()=>getDeviceWishlistItems,
    "getWishlistByCidOrDevice",
    ()=>getWishlistByCidOrDevice,
    "getWishlistDeviceId",
    ()=>getWishlistDeviceId,
    "getWishlistItems",
    ()=>getWishlistItems,
    "getWishlistProductId",
    ()=>getWishlistProductId,
    "getWishlistVariantId",
    ()=>getWishlistVariantId,
    "getWishlistVendorId",
    ()=>getWishlistVendorId,
    "removeWishlistItem",
    ()=>removeWishlistItem,
    "syncDeviceWishlistToCustomer",
    ()=>syncDeviceWishlistToCustomer,
    "updateWishlistItem",
    ()=>updateWishlistItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/baseurl/baseurl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/customer/customer.js [app-client] (ecmascript)");
;
;
function getWishlistDeviceId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        let deviceId = localStorage.getItem("deviceId");
        if (!deviceId) {
            deviceId = crypto.randomUUID();
            localStorage.setItem("deviceId", deviceId);
        }
        return deviceId;
    } catch (err) {
        console.warn("getWishlistDeviceId failed:", err?.message);
        return "";
    }
}
function getApiWishlistList(payload) {
    try {
        if (Array.isArray(payload)) return payload;
        if (Array.isArray(payload?.data)) return payload.data;
        if (Array.isArray(payload?.wishlist)) return payload.wishlist;
        if (Array.isArray(payload?.items)) return payload.items;
        if (Array.isArray(payload?.data?.data)) return payload.data.data;
        if (Array.isArray(payload?.data?.wishlist)) return payload.data.wishlist;
        if (Array.isArray(payload?.data?.items)) return payload.data.items;
        return [];
    } catch  {
        return [];
    }
}
const makeEmptyWishlistResponse = ()=>({
        data: {
            success: true,
            data: []
        }
    });
const makeWishlistResponse = (items = [])=>({
        data: {
            success: true,
            data: items
        }
    });
const is404 = (err)=>err?.response?.status === 404;
function getWishlistProductId(item) {
    const product = item?.pid || item?.productId || item?.product_id || item?.product || item?.id;
    return typeof product === "object" ? product?._id || null : product || null;
}
function getWishlistVariantId(item) {
    const variant = item?.variantId || item?.variant_id || item?.variant;
    return typeof variant === "object" ? variant?._id || null : variant || null;
}
function getWishlistVendorId(item) {
    const vendor = item?.vendorId || item?.venderid || item?.vendor_id || item?.vendor || (item?.pid && typeof item.pid === "object" ? item.pid.vendorId : null) || (item?.productId && typeof item.productId === "object" ? item.productId.vendorId : null) || (item?.variantId && typeof item.variantId === "object" ? item.variantId.vendorId : null);
    return typeof vendor === "object" ? vendor?._id || null : vendor || null;
}
function dispatchWishlistUpdated() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.dispatchEvent(new Event("wishlistUpdated"));
}
async function createWishlistItem({ cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(), pid = null, variantId = null, vendorId = null, qty = 1, offerDiscount = 0, divid } = {}) {
    const finalDivid = divid || getWishlistDeviceId();
    const payload = {
        cid,
        pid,
        divid: finalDivid,
        qty,
        variantId,
        offerDiscount,
        venderid: vendorId
    };
    // NOTE: backend route is genuinely spelled "wishrlist" (typo on their side),
    // confirmed via Postman - not a mistake here, matching their actual route.
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/wishrlist/create", payload);
    dispatchWishlistUpdated();
    return res;
}
const addWishlistItem = createWishlistItem;
async function updateWishlistItem(id, data = {}) {
    if (!id) {
        return makeEmptyWishlistResponse();
    }
    const payload = {
        cid: data.cid ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(),
        pid: data.pid ?? getWishlistProductId(data),
        divid: data.divid || data.deviceId || getWishlistDeviceId(),
        qty: data.qty ?? data.quantity ?? 1,
        variantId: data.variantId ?? getWishlistVariantId(data),
        offerDiscount: data.offerDiscount ?? data.discount ?? 0,
        venderid: data.vendorId ?? getWishlistVendorId(data)
    };
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/wishrlist/update/${id}`, payload);
        dispatchWishlistUpdated();
        return res;
    } catch (err) {
        if (is404(err)) {
            return makeEmptyWishlistResponse();
        }
        console.error("updateWishlistItem failed:", id, err?.message);
        throw err;
    }
}
async function deleteWishlistItem(id) {
    if (!id) {
        return makeEmptyWishlistResponse();
    }
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/wishrlist/delete/${id}`);
        dispatchWishlistUpdated();
        return res;
    } catch (err) {
        if (is404(err)) {
            return makeEmptyWishlistResponse();
        }
        console.error("deleteWishlistItem failed:", id, err?.message);
        throw err;
    }
}
const removeWishlistItem = deleteWishlistItem;
async function getCustomerWishlistItems(cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])()) {
    if (!cid) {
        return makeEmptyWishlistResponse();
    }
    try {
        // cache-busting, same reason as cart.js: avoid stale cached GETs
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/wishrlist`, {
            params: {
                cid,
                _t: Date.now()
            },
            headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });
    } catch (err) {
        if (is404(err)) {
            return makeEmptyWishlistResponse();
        }
        return makeEmptyWishlistResponse();
    }
}
async function getDeviceWishlistItems(divid = getWishlistDeviceId()) {
    if (!divid) {
        return makeEmptyWishlistResponse();
    }
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/wishrlist/device/${divid}`, {
            params: {
                _t: Date.now()
            },
            headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });
    } catch (err) {
        if (is404(err)) {
            return makeEmptyWishlistResponse();
        }
        return makeEmptyWishlistResponse();
    }
}
async function getWishlistItems({ cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(), divid = getWishlistDeviceId() } = {}) {
    try {
        if (cid) {
            const customerRes = await getCustomerWishlistItems(cid);
            const customerItems = getApiWishlistList(customerRes.data);
            return makeWishlistResponse(customerItems);
        }
        if (divid) {
            const deviceRes = await getDeviceWishlistItems(divid);
            const deviceItems = getApiWishlistList(deviceRes.data);
            return makeWishlistResponse(deviceItems);
        }
        return makeEmptyWishlistResponse();
    } catch  {
        return makeEmptyWishlistResponse();
    }
}
async function getAllWishlistItems() {
    return getWishlistItems();
}
const getWishlistByCidOrDevice = getWishlistItems;
async function syncDeviceWishlistToCustomer(cid, divid = getWishlistDeviceId()) {
    if (!cid || !divid) {
        return {
            success: false,
            message: "cid/divid missing"
        };
    }
    try {
        const deviceRes = await getDeviceWishlistItems(divid);
        const deviceItems = getApiWishlistList(deviceRes.data);
        if (deviceItems.length === 0) {
            return {
                success: true,
                migrated: 0
            };
        }
        const customerRes = await getCustomerWishlistItems(cid);
        const customerItems = getApiWishlistList(customerRes.data);
        const findMatchingCustomerItem = (item)=>{
            const pid = getWishlistProductId(item);
            const variantId = getWishlistVariantId(item);
            return customerItems.find((ci)=>String(getWishlistProductId(ci)) === String(pid) && String(getWishlistVariantId(ci)) === String(variantId));
        };
        let migratedCount = 0;
        for (const item of deviceItems){
            try {
                const existing = findMatchingCustomerItem(item);
                if (!existing) {
                    const vendorId = getWishlistVendorId(item);
                    await createWishlistItem({
                        cid,
                        pid: getWishlistProductId(item),
                        variantId: getWishlistVariantId(item),
                        divid,
                        qty: item?.qty || item?.quantity || 1,
                        offerDiscount: item?.offerDiscount || item?.discount || 0,
                        vendorId
                    });
                }
                if (item?._id) {
                    await deleteWishlistItem(item._id);
                }
                migratedCount++;
            } catch (itemErr) {
                console.warn("Wishlist item migrate failed:", item?._id, itemErr?.message);
            }
        }
        dispatchWishlistUpdated();
        return {
            success: true,
            migrated: migratedCount
        };
    } catch (err) {
        console.warn("syncDeviceWishlistToCustomer failed:", err?.message);
        return {
            success: false,
            message: err?.message || "sync failed"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-oauth/google/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.mjs [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$category$2f$category$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/category/category.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$whatsapp$2f$whatsapp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/whatsapp/whatsapp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$userlogin$2f$userlogin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/userlogin/userlogin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$userregister$2f$userregister$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/userregister/userregister.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/customer/customer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/cart/cart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/wishlist/wishlist.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const initialUserRegisterForm = {
    name: "",
    email: "",
    number: "",
    password: "",
    status: "active",
    role: "customer",
    companyname: "",
    category: "",
    city: "",
    state: "",
    pincode: ""
};
const getStoredCustomer = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem("checkoutUser") || localStorage.getItem("customer") || localStorage.getItem("customerData") || localStorage.getItem("user");
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        const cust = parsed?.data?.customer || parsed?.data?.user || parsed?.customer || parsed?.user || parsed?.data || parsed;
        if (!cust?._id && !cust?.id) return null;
        return cust;
    } catch  {
        return null;
    }
};
function Navbar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const googleClientId = ("TURBOPACK compile-time value", "434634672534-cpijh17faeoeoc10ns7l0mb8tbtcmhcp.apps.googleusercontent.com");
    const hasGoogleClientId = googleClientId && googleClientId !== "your_google_client_id_here";
    const profileDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const categoryPreviewTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchCategoryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customer, setCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profileDropdownOpen, setProfileDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userModalOpen, setUserModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userRegisterOpen, setUserRegisterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [allMenuOpen, setAllMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCategoryId, setActiveCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewCategoryId, setPreviewCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchCategory, setSearchCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [searchCategoryOpen, setSearchCategoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchCategoryWidth = Math.min(128, Math.max(74, searchCategory.length * 7 + 48));
    const [whatsappOtpLoading, setWhatsappOtpLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userForm, setUserForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        password: ""
    });
    const [userLoginLoading, setUserLoginLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userRegisterLoading, setUserRegisterLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userRegisterForm, setUserRegisterForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialUserRegisterForm);
    const isActive = (path)=>pathname === path;
    // NEW: scroll par navbar ke Part 2 (logo/search/icons) ko collapse karne
    // aur category row ko transparent/glassy banane ke liye scroll state track kiya
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 40);
                }
            }["Navbar.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            getAllCategories();
            getCustomerFromStorage();
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const syncCustomer = {
                "Navbar.useEffect.syncCustomer": ()=>{
                    setCustomer(getStoredCustomer());
                }
            }["Navbar.useEffect.syncCustomer"];
            const handleClickOutside = {
                "Navbar.useEffect.handleClickOutside": (event)=>{
                    if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                        setProfileDropdownOpen(false);
                    }
                    if (searchCategoryRef.current && !searchCategoryRef.current.contains(event.target)) {
                        setSearchCategoryOpen(false);
                    }
                }
            }["Navbar.useEffect.handleClickOutside"];
            window.addEventListener("customerUpdated", syncCustomer);
            window.addEventListener("storage", syncCustomer);
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("customerUpdated", syncCustomer);
                    window.removeEventListener("storage", syncCustomer);
                    document.removeEventListener("mousedown", handleClickOutside);
                    clearTimeout(categoryPreviewTimeoutRef.current);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const getAllCategories = async ()=>{
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$category$2f$category$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategories"])();
            const list = Array.isArray(response?.data?.data) ? response.data.data : Array.isArray(response?.data) ? response.data : Array.isArray(response) ? response : [];
            setCategories(list);
        } catch (error) {
            console.error("Category API error:", error);
            setCategories([]);
        }
    };
    const getCustomerFromStorage = ()=>{
        setCustomer(getStoredCustomer());
    };
    const handleSearchSubmit = (event_0)=>{
        event_0.preventDefault();
        const params = new URLSearchParams();
        const trimmedQuery = searchQuery.trim();
        if (searchCategory !== "All") params.set("category", searchCategory);
        if (trimmedQuery) params.set("search", trimmedQuery);
        const matchedCategory = categories.find((cat)=>cat.name?.toLowerCase() === searchCategory.toLowerCase());
        setActiveCategoryId(matchedCategory?._id || null);
        setPreviewCategoryId(null);
        router.push(`/shop${params.toString() ? `?${params.toString()}` : ""}`);
    };
    const handleSearchCategoryChange = (nextCategory)=>{
        setSearchCategory(nextCategory);
        setSearchCategoryOpen(false);
        const params_0 = new URLSearchParams();
        const trimmedQuery_0 = searchQuery.trim();
        if (nextCategory !== "All") params_0.set("category", nextCategory);
        if (trimmedQuery_0) params_0.set("search", trimmedQuery_0);
        const matchedCategory_0 = categories.find((cat_0)=>cat_0.name?.toLowerCase() === nextCategory.toLowerCase());
        setActiveCategoryId(matchedCategory_0?._id || null);
        setPreviewCategoryId(null);
        router.push(`/shop${params_0.toString() ? `?${params_0.toString()}` : ""}`);
    };
    const syncCustomerData = async (cid)=>{
        if (!cid) return;
        try {
            await Promise.allSettled([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncDeviceCartToCustomer"])(cid),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncDeviceWishlistToCustomer"])(cid)
            ]);
            window.dispatchEvent(new Event("cartUpdated"));
            window.dispatchEvent(new Event("wishlistUpdated"));
        } catch (syncError) {
            console.warn("Cart/Wishlist sync failed:", syncError?.message);
        }
    };
    const isNotRegisteredError = (message = "")=>{
        const msg = message.toLowerCase();
        return msg.includes("not found") || msg.includes("not registered") || msg.includes("does not exist") || msg.includes("no user") || msg.includes("invalid email");
    };
    const handleUserChange = (event_1)=>{
        setUserForm({
            ...userForm,
            [event_1.target.name]: event_1.target.value
        });
    };
    const handleUserRegisterChange = (event_2)=>{
        setUserRegisterForm({
            ...userRegisterForm,
            [event_2.target.name]: event_2.target.value
        });
    };
    const openUserRegister = ()=>{
        setUserRegisterForm((prev)=>({
                ...prev,
                email: userForm.email,
                password: userForm.password
            }));
        setUserModalOpen(false);
        setUserRegisterOpen(true);
    };
    const openUserLogin = ()=>{
        setUserForm((prev_0)=>({
                ...prev_0,
                email: userRegisterForm.email,
                password: userRegisterForm.password
            }));
        setUserRegisterOpen(false);
        setUserModalOpen(true);
    };
    const handleUserLogin = async (event_3)=>{
        event_3.preventDefault();
        try {
            setUserLoginLoading(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$userlogin$2f$userlogin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userLogin"])(userForm);
            const cid_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCustomerSession"])(res.data);
            localStorage.setItem("checkoutUser", JSON.stringify(res.data));
            const loggedCustomer = res?.data?.data?.customer || res?.data?.data?.user || res?.data?.customer || res?.data?.user || res?.data?.data || res?.data;
            if (loggedCustomer) {
                setCustomer(loggedCustomer);
            }
            window.dispatchEvent(new Event("customerUpdated"));
            await syncCustomerData(cid_0);
            alert("User Login Successfully!");
            setUserForm({
                email: "",
                password: ""
            });
            setUserModalOpen(false);
            setProfileDropdownOpen(false);
        } catch (error_0) {
            const message_0 = error_0.response?.data?.message || "Login failed";
            if (isNotRegisteredError(message_0)) {
                openUserRegister();
            } else {
                alert(message_0);
            }
        } finally{
            setUserLoginLoading(false);
        }
    };
    const handleUserRegister = async (event_4)=>{
        event_4.preventDefault();
        try {
            setUserRegisterLoading(true);
            const res_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$userregister$2f$userregister$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userRegister"])(userRegisterForm);
            const cid_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCustomerSession"])(res_0.data);
            localStorage.setItem("checkoutUser", JSON.stringify(res_0.data));
            const loggedCustomer_0 = res_0?.data?.data?.customer || res_0?.data?.data?.user || res_0?.data?.customer || res_0?.data?.user || res_0?.data?.data || res_0?.data;
            if (loggedCustomer_0) {
                setCustomer(loggedCustomer_0);
            }
            window.dispatchEvent(new Event("customerUpdated"));
            await syncCustomerData(cid_1);
            alert("Registration successful. You are logged in now.");
            setUserRegisterForm(initialUserRegisterForm);
            setUserRegisterOpen(false);
            setProfileDropdownOpen(false);
        } catch (error_1) {
            alert(error_1.response?.data?.message || "Registration failed");
        } finally{
            setUserRegisterLoading(false);
        }
    };
    const handleGoogleUserLoginSuccess = (credentialResponse)=>{
        try {
            const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(credentialResponse.credential);
            setUserForm((prev_1)=>({
                    ...prev_1,
                    email: decoded.email || prev_1.email
                }));
        } catch (error_2) {
            console.error("Google decode error login:", error_2);
        }
    };
    const handleGoogleUserRegisterSuccess = (credentialResponse_0)=>{
        try {
            const decoded_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(credentialResponse_0.credential);
            setUserRegisterForm((prev_2)=>({
                    ...prev_2,
                    name: decoded_0.name || prev_2.name,
                    email: decoded_0.email || prev_2.email
                }));
        } catch (error_3) {
            console.error("Google decode error register:", error_3);
        }
    };
    const handleLogout = ()=>{
        localStorage.removeItem("checkoutUser");
        localStorage.removeItem("customer");
        localStorage.removeItem("customerData");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setCustomer(null);
        setProfileDropdownOpen(false);
        window.dispatchEvent(new Event("customerUpdated"));
        window.dispatchEvent(new Event("cartUpdated"));
        window.dispatchEvent(new Event("wishlistUpdated"));
        router.push("/");
    };
    const openVendorModal = ()=>{
        router.push("/vendor-register");
    };
    const sendOtp = async ()=>{
        try {
            const number = customer?.number || customer?.phone;
            if (!number) {
                alert("Please login first.");
                setUserModalOpen(true);
                return;
            }
            setWhatsappOtpLoading(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$whatsapp$2f$whatsapp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendWhatsAppOtp"])({
                number
            });
            alert("WhatsApp OTP sent successfully.");
        } catch (error_4) {
            console.error("WhatsApp OTP error:", error_4);
            alert("WhatsApp OTP send failed.");
        } finally{
            setWhatsappOtpLoading(false);
        }
    };
    const handleCategoryPreview = (categoryId)=>{
        clearTimeout(categoryPreviewTimeoutRef.current);
        setPreviewCategoryId(categoryId);
    };
    const clearCategoryPreview = ()=>{
        categoryPreviewTimeoutRef.current = setTimeout(()=>{
            setPreviewCategoryId(null);
        }, 200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[1450px] mx-auto px-3 sm:px-6 lg:px-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex sm:hidden flex-col gap-2 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FF9900]/10 text-[#FF9900] font-black text-base tracking-tight hover:bg-[#FF9900]/20 transition-colors",
                                                    children: "Jajot"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            ref: profileDropdownRef,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>customer ? setProfileDropdownOpen((prev_3)=>!prev_3) : setUserModalOpen(true),
                                                                    className: "flex items-center justify-center w-9 h-9 rounded-lg text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                        size: 18
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/navbar.js",
                                                                        lineNumber: 330,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 329,
                                                                    columnNumber: 21
                                                                }, this),
                                                                customer && profileDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] overflow-hidden",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-4 py-3 border-b border-gray-100",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-bold text-gray-900 text-sm",
                                                                                    children: [
                                                                                        "Hello ",
                                                                                        customer.name || "there"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                                    lineNumber: 335,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                (customer.number || customer.phone) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-gray-500 mt-0.5",
                                                                                    children: customer.number || customer.phone
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                                    lineNumber: 339,
                                                                                    columnNumber: 67
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/component/navbar.js",
                                                                            lineNumber: 334,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "py-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/orders",
                                                                                    onClick: ()=>setProfileDropdownOpen(false),
                                                                                    className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                                    children: "Orders"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                                    lineNumber: 345,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/Wishlist",
                                                                                    onClick: ()=>setProfileDropdownOpen(false),
                                                                                    className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                                    children: "Wishlist"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                                    lineNumber: 349,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/profile",
                                                                                    onClick: ()=>setProfileDropdownOpen(false),
                                                                                    className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                                    children: "Profile"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                                    lineNumber: 353,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/component/navbar.js",
                                                                            lineNumber: 344,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "border-t border-gray-100 py-1",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: handleLogout,
                                                                                className: "w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50",
                                                                                children: "Logout"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                                lineNumber: 359,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/navbar.js",
                                                                            lineNumber: 358,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 333,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 328,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/Addtocard",
                                                            className: "relative flex items-center justify-center w-9 h-9 rounded-lg text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                lineNumber: 367,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 366,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setAllMenuOpen(true),
                                                            className: "flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-800 hover:border-[#FF9900] hover:text-[#FF9900]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                lineNumber: 372,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 371,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSearchSubmit,
                                            className: "flex h-9 w-full overflow-visible rounded-lg border-2 border-[#FF9900] bg-white transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF9900]/20 box-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative shrink-0 h-full",
                                                    ref: searchCategoryRef,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setSearchCategoryOpen((prev_4)=>!prev_4),
                                                            style: {
                                                                width: `${Math.min(90, searchCategoryWidth)}px`
                                                            },
                                                            className: "h-full flex items-center justify-between gap-1 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-l-[6px] pl-2 pr-1.5 text-[11px] font-semibold text-gray-800",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    children: searchCategory
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 383,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 12,
                                                                    className: `shrink-0 text-gray-600 transition-transform ${searchCategoryOpen ? "rotate-180" : ""}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 384,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 380,
                                                            columnNumber: 19
                                                        }, this),
                                                        searchCategoryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-0 top-[calc(100%+8px)] w-48 max-h-72 overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] py-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleSearchCategoryChange("All"),
                                                                    className: `w-full text-left px-4 py-2 text-sm ${searchCategory === "All" ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"}`,
                                                                    children: "All"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 388,
                                                                    columnNumber: 23
                                                                }, this),
                                                                categories.map((cat_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleSearchCategoryChange(cat_1.name),
                                                                        className: `w-full text-left px-4 py-2 text-sm ${searchCategory === cat_1.name ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"}`,
                                                                        children: cat_1.name
                                                                    }, cat_1._id || cat_1.name, false, {
                                                                        fileName: "[project]/src/app/component/navbar.js",
                                                                        lineNumber: 392,
                                                                        columnNumber: 48
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 387,
                                                            columnNumber: 42
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 379,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: searchQuery,
                                                    onChange: (event_5)=>setSearchQuery(event_5.target.value),
                                                    placeholder: "Search Products, Brands...",
                                                    className: "min-w-0 flex-1 h-full bg-white px-2 text-[13px] font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 398,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "flex h-full w-9 shrink-0 items-center justify-center bg-white text-gray-600 hover:text-[#FF9900] rounded-r-[6px]",
                                                    "aria-label": "Search",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 401,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 400,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex min-h-[64px] items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#FF9900]/10 text-[#FF9900] font-black text-xl tracking-tight hover:bg-[#FF9900]/20 transition-colors",
                                            children: "Jajot"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSearchSubmit,
                                            className: "flex h-11 w-full max-w-[560px] overflow-visible rounded-xl border-2 border-[#FF9900] bg-white transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF9900]/20 box-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative shrink-0 h-full",
                                                    ref: searchCategoryRef,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setSearchCategoryOpen((prev_5)=>!prev_5),
                                                            style: {
                                                                width: `${searchCategoryWidth}px`
                                                            },
                                                            className: "h-full flex items-center justify-between gap-1 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-l-[10px] pl-3 pr-2 text-xs font-semibold text-gray-800 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    children: searchCategory
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 417,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 14,
                                                                    className: `shrink-0 text-gray-600 transition-transform ${searchCategoryOpen ? "rotate-180" : ""}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 418,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 414,
                                                            columnNumber: 19
                                                        }, this),
                                                        searchCategoryOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-0 top-[calc(100%+8px)] w-52 max-h-72 overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] py-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleSearchCategoryChange("All"),
                                                                    className: `w-full text-left px-4 py-2.5 text-sm transition-colors ${searchCategory === "All" ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"}`,
                                                                    children: "All"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 422,
                                                                    columnNumber: 23
                                                                }, this),
                                                                categories.map((cat_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleSearchCategoryChange(cat_2.name),
                                                                        className: `w-full text-left px-4 py-2.5 text-sm transition-colors ${searchCategory === cat_2.name ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"}`,
                                                                        children: cat_2.name
                                                                    }, cat_2._id || cat_2.name, false, {
                                                                        fileName: "[project]/src/app/component/navbar.js",
                                                                        lineNumber: 426,
                                                                        columnNumber: 48
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 421,
                                                            columnNumber: 42
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 413,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: searchQuery,
                                                    onChange: (event_6)=>setSearchQuery(event_6.target.value),
                                                    placeholder: "Search for Products, Brands and More",
                                                    className: "min-w-0 flex-1 h-full bg-white px-2 text-[15px] font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 432,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "flex h-full w-12 shrink-0 items-center justify-center bg-white text-gray-600 hover:text-[#FF9900] transition rounded-r-[10px]",
                                                    "aria-label": "Search",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        size: 21
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 435,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 434,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 412,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 sm:gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    ref: profileDropdownRef,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>customer ? setProfileDropdownOpen((prev_6)=>!prev_6) : setUserModalOpen(true),
                                                            className: "flex items-center gap-1.5 h-10 px-2 sm:px-3 rounded-lg text-sm font-semibold text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    size: 20
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 442,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "hidden sm:inline",
                                                                    children: customer ? customer.name?.split(" ")[0] || "Account" : "Login"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 444,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 15,
                                                                    className: `transition-transform ${profileDropdownOpen ? "rotate-180" : ""}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 448,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 441,
                                                            columnNumber: 19
                                                        }, this),
                                                        customer && profileDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute right-0 top-full mt-2 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-4 py-3 border-b border-gray-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-bold text-gray-900 text-sm",
                                                                            children: [
                                                                                "Hello ",
                                                                                customer.name || "there"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/component/navbar.js",
                                                                            lineNumber: 453,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        (customer.number || customer.phone) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500 mt-0.5",
                                                                            children: customer.number || customer.phone
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/navbar.js",
                                                                            lineNumber: 457,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 452,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "py-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/orders",
                                                                            onClick: ()=>setProfileDropdownOpen(false),
                                                                            className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                            children: "Orders"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/navbar.js",
                                                                            lineNumber: 463,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/Wishlist",
                                                                            onClick: ()=>setProfileDropdownOpen(false),
                                                                            className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                            children: "Wishlist"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/navbar.js",
                                                                            lineNumber: 467,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/profile",
                                                                            onClick: ()=>setProfileDropdownOpen(false),
                                                                            className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                            children: "Profile"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/navbar.js",
                                                                            lineNumber: 471,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 462,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "border-t border-gray-100 py-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: handleLogout,
                                                                        className: "w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50",
                                                                        children: "Logout"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/navbar.js",
                                                                        lineNumber: 477,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 476,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 451,
                                                            columnNumber: 55
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 440,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative hidden md:block group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "flex items-center gap-1.5 h-10 px-3 rounded-lg text-sm font-semibold text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20",
                                                            children: [
                                                                "More",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 15,
                                                                    className: "group-hover:rotate-180 transition-transform"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 487,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 485,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: openVendorModal,
                                                                        className: "w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                                lineNumber: 493,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            " Become a Vendor"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/component/navbar.js",
                                                                        lineNumber: 492,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: sendOtp,
                                                                        disabled: whatsappOtpLoading,
                                                                        className: "w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-600 disabled:opacity-60",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                                lineNumber: 497,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            whatsappOtpLoading ? "Sending..." : "WhatsApp OTP"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/component/navbar.js",
                                                                        lineNumber: 496,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                lineNumber: 491,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 490,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 484,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/Addtocard",
                                                    className: "relative flex items-center gap-1.5 h-10 px-2 sm:px-3 rounded-lg text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20 font-semibold text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                            size: 21
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 505,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: "Cart"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 506,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 504,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/navbar.js",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navbar.js",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border-t border-gray-100 overflow-x-hidden transition-colors duration-300 ${scrolled ? "bg-white/30 backdrop-blur-lg" : "bg-white/95 backdrop-blur-md"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[1450px] mx-auto px-2 sm:px-6 lg:px-10 w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full min-w-0 min-h-[52px] md:min-h-[62px] items-center gap-1 overflow-x-auto scrollbar-hide",
                                onMouseEnter: ()=>clearTimeout(categoryPreviewTimeoutRef.current),
                                onMouseLeave: clearCategoryPreview,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setAllMenuOpen(true),
                                        className: "flex flex-col items-center justify-center gap-1 px-3 sm:px-4 py-1.5 shrink-0 text-gray-800 hover:text-[#FF9900]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                size: 20,
                                                className: "sm:hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                size: 22,
                                                className: "hidden sm:block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 521,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] sm:text-xs font-semibold whitespace-nowrap",
                                                children: "All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        onClick: ()=>{
                                            setActiveCategoryId(null);
                                            setPreviewCategoryId(null);
                                            setSearchCategory("All");
                                        },
                                        className: `flex flex-col items-center justify-center gap-1 px-3 sm:px-4 py-1.5 shrink-0 ${isActive("/") ? "text-[#FF9900]" : "text-gray-800 hover:text-[#FF9900]"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                size: 20,
                                                className: "sm:hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 532,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                size: 22,
                                                className: "hidden sm:block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 533,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[11px] sm:text-xs whitespace-nowrap ${isActive("/") ? "font-bold border-b-2 border-[#FF9900] pb-1" : "font-semibold"}`,
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, this),
                                    categories.slice(0, 12).map((cat_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/shop?category=${encodeURIComponent(cat_3.name)}`,
                                            onMouseEnter: ()=>handleCategoryPreview(cat_3._id),
                                            onFocus: ()=>handleCategoryPreview(cat_3._id),
                                            onClick: ()=>{
                                                setActiveCategoryId(cat_3._id);
                                                setPreviewCategoryId(cat_3._id);
                                                setSearchCategory(cat_3.name);
                                            },
                                            className: `flex flex-col items-center justify-center gap-1 px-3 sm:px-4 py-1.5 shrink-0 ${activeCategoryId === cat_3._id ? "text-[#FF9900]" : "text-gray-800 hover:text-[#FF9900]"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                    size: 20,
                                                    className: "sm:hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 545,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                    size: 22,
                                                    className: "hidden sm:block"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 546,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[11px] sm:text-xs whitespace-nowrap ${activeCategoryId === cat_3._id ? "font-bold border-b-2 border-[#FF9900] pb-1" : "font-semibold"}`,
                                                    children: cat_3.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 548,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, cat_3._id, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 540,
                                            columnNumber: 53
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/navbar.js",
                                lineNumber: 518,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/navbar.js",
                            lineNumber: 517,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navbar.js",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/navbar.js",
                lineNumber: 315,
                columnNumber: 6
            }, this),
            allMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[99999] bg-black/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[290px] max-w-[85%] h-full bg-white shadow-2xl p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-gray-900",
                                    children: "All Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 560,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setAllMenuOpen(false),
                                    className: "text-gray-500 hover:text-gray-900",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 565,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 564,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/navbar.js",
                            lineNumber: 559,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-3",
                            children: categories.map((cat_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/shop?category=${encodeURIComponent(cat_4.name)}`,
                                    onClick: ()=>{
                                        setActiveCategoryId(cat_4._id);
                                        setSearchCategory(cat_4.name);
                                        setAllMenuOpen(false);
                                    },
                                    className: "block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#FF9900]",
                                    children: cat_4.name
                                }, cat_4._id, false, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 570,
                                    columnNumber: 40
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/navbar.js",
                            lineNumber: 569,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/navbar.js",
                    lineNumber: 558,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/navbar.js",
                lineNumber: 557,
                columnNumber: 23
            }, this),
            userModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-[99999] flex items-center justify-center p-4",
                onClick: ()=>setUserModalOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl w-full max-w-[440px] shadow-2xl overflow-hidden",
                    onClick: (event_7)=>event_7.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#1e2a3a] px-7 py-5 flex items-start justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white text-xl font-bold",
                                            children: "User Login"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 586,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm mt-1",
                                            children: "Login to your user account."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 587,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 585,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setUserModalOpen(false),
                                    className: "text-gray-400 hover:text-white transition mt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 593,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 592,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/navbar.js",
                            lineNumber: 584,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleUserLogin,
                            className: "px-5 sm:px-7 py-6 sm:py-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 600,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    value: userForm.email,
                                                    onChange: handleUserChange,
                                                    placeholder: "Enter email",
                                                    className: "w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 604,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 599,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Password"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 608,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    name: "password",
                                                    value: userForm.password,
                                                    onChange: handleUserChange,
                                                    placeholder: "Enter password",
                                                    className: "w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 612,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 607,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 598,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-px flex-1 bg-gray-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 618,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400",
                                                    children: "OR"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 619,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-px flex-1 bg-gray-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 620,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 617,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center",
                                            children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleLogin"], {
                                                onSuccess: handleGoogleUserLoginSuccess,
                                                onError: ()=>console.log("Google Login Failed")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 624,
                                                columnNumber: 42
                                            }, this) : /*#__PURE__*/ "TURBOPACK unreachable"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 623,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 616,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-4",
                                    children: [
                                        "Don't have an account?",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: openUserRegister,
                                            className: "text-[#F5A623] font-semibold hover:underline",
                                            children: "Register here"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 632,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 630,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-3 mt-8 pt-6 border-t border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setUserModalOpen(false),
                                            className: "px-6 h-11 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 638,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: userLoginLoading,
                                            className: "px-6 h-11 rounded-lg bg-[#F5A623] hover:bg-[#e09610] text-white text-sm font-semibold flex items-center gap-2 transition disabled:opacity-60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 643,
                                                    columnNumber: 21
                                                }, this),
                                                userLoginLoading ? "Logging in..." : "Login"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 642,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 637,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/navbar.js",
                            lineNumber: 597,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/navbar.js",
                    lineNumber: 583,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/navbar.js",
                lineNumber: 582,
                columnNumber: 38
            }, this), document.body),
            userRegisterOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-[99999] flex items-center justify-center p-4",
                onClick: ()=>setUserRegisterOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl w-full max-w-[720px] max-h-[90vh] shadow-2xl overflow-hidden",
                    onClick: (event_8)=>event_8.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#1e2a3a] px-7 py-5 flex items-start justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white text-xl font-bold",
                                            children: "User Register"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 656,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm mt-1",
                                            children: "Create your user account."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 659,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 655,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setUserRegisterOpen(false),
                                    className: "text-gray-400 hover:text-white transition mt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 665,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 664,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/navbar.js",
                            lineNumber: 654,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleUserRegister,
                            className: "px-5 sm:px-7 py-6 sm:py-8 overflow-y-auto max-h-[calc(90vh-88px)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 672,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "name",
                                                    value: userRegisterForm.name,
                                                    onChange: handleUserRegisterChange,
                                                    placeholder: "Enter name",
                                                    className: "w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 676,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 671,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 680,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    value: userRegisterForm.email,
                                                    onChange: handleUserRegisterChange,
                                                    placeholder: "Enter email",
                                                    className: "w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 684,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 679,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Mobile Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 688,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "number",
                                                    value: userRegisterForm.number,
                                                    onChange: handleUserRegisterChange,
                                                    placeholder: "Enter mobile number",
                                                    className: "w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 692,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 687,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Password"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 696,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    name: "password",
                                                    value: userRegisterForm.password,
                                                    onChange: handleUserRegisterChange,
                                                    placeholder: "Enter password",
                                                    className: "w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 700,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 695,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "City"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 704,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "city",
                                                    value: userRegisterForm.city,
                                                    onChange: handleUserRegisterChange,
                                                    placeholder: "City",
                                                    className: "w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 708,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 703,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "State"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 712,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "state",
                                                    value: userRegisterForm.state,
                                                    onChange: handleUserRegisterChange,
                                                    placeholder: "State",
                                                    className: "w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 716,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 711,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sm:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Pincode"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 720,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "pincode",
                                                    value: userRegisterForm.pincode,
                                                    onChange: handleUserRegisterChange,
                                                    placeholder: "Pincode",
                                                    className: "w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 724,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 719,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 670,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-px flex-1 bg-gray-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 730,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400",
                                                    children: "OR"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 731,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-px flex-1 bg-gray-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 732,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 729,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center",
                                            children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleLogin"], {
                                                onSuccess: handleGoogleUserRegisterSuccess,
                                                onError: ()=>console.log("Google Login Failed")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 736,
                                                columnNumber: 42
                                            }, this) : /*#__PURE__*/ "TURBOPACK unreachable"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 735,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 728,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-4",
                                    children: [
                                        "Already have an account?",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: openUserLogin,
                                            className: "text-[#F5A623] font-semibold hover:underline",
                                            children: "Login instead"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 744,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 742,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-3 mt-8 pt-6 border-t border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: openUserLogin,
                                            className: "px-6 h-11 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 750,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: userRegisterLoading,
                                            className: "px-6 h-11 rounded-lg bg-[#F5A623] hover:bg-[#e09610] text-white text-sm font-semibold flex items-center gap-2 transition disabled:opacity-60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 755,
                                                    columnNumber: 21
                                                }, this),
                                                userRegisterLoading ? "Registering..." : "Register"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 754,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 749,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/navbar.js",
                            lineNumber: 669,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/navbar.js",
                    lineNumber: 653,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/navbar.js",
                lineNumber: 652,
                columnNumber: 41
            }, this), document.body)
        ]
    }, void 0, true);
}
_s(Navbar, "t7VUWd7GzNxQiB9YlCCW3rwO3BQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EcommerceFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.mjs [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.mjs [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function EcommerceFooter() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "21c72bad96b389c93afffbbdd0b71a8f7812dd476588aaaeec4fa2a568b64e93") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21c72bad96b389c93afffbbdd0b71a8f7812dd476588aaaeec4fa2a568b64e93";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-white/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                    children: [
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                            title: "Free Delivery",
                            desc: "Free shipping all over India"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
                            title: "Secure Payment",
                            desc: "100% secure payment"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                            title: "Easy Returns",
                            desc: "10 days return policy"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"],
                            title: "24/7 Support",
                            desc: "Dedicated support"
                        }
                    ].map(_EcommerceFooterAnonymous)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 17,
                    columnNumber: 113
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/footer.js",
                lineNumber: 17,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-xl font-bold",
                    children: "J"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 41,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Jajot Store"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/footer.js",
                            lineNumber: 41,
                            columnNumber: 166
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400",
                            children: "Premium Shopping Experience"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/footer.js",
                            lineNumber: 41,
                            columnNumber: 217
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 41,
                    columnNumber: 161
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 mt-6 text-sm leading-7 max-w-md",
            children: "Discover the best fashion, electronics, lifestyle, accessories, and trending products at unbeatable prices with fast delivery and secure shopping."
        }, void 0, false, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 text-sm text-gray-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "w-5 h-5 text-orange-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 51,
                    columnNumber: 73
                }, this),
                "Merta, Rajasthan, India"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 text-sm text-gray-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "w-5 h-5 text-orange-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 58,
                    columnNumber: 73
                }, this),
                "+91 98765 43210"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 mt-8",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 text-sm text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                            className: "w-5 h-5 text-orange-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/footer.js",
                            lineNumber: 65,
                            columnNumber: 113
                        }, this),
                        "support@jajotstore.com"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 65,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2",
            children: [
                t1,
                t2,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mt-8",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebookF"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitter"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"]
                    ].map(_EcommerceFooterAnonymous2)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 73,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold mb-6",
            children: "Quick Links"
        }, void 0, false, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4",
                    children: [
                        "Home",
                        "Shop",
                        "Categories",
                        "Deals",
                        "New Arrivals",
                        "Contact"
                    ].map(_EcommerceFooterAnonymous3)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 84,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold mb-6",
            children: "Customer Service"
        }, void 0, false, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    let t11;
    let t12;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4",
                    children: [
                        "My Account",
                        "Track Order",
                        "Wishlist",
                        "Returns",
                        "Shipping Policy",
                        "Privacy Policy"
                    ].map(_EcommerceFooterAnonymous4)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 96,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold mb-6",
            children: "Newsletter"
        }, void 0, false, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-400 leading-6 mb-5",
            children: "Subscribe to get updates on new arrivals, discounts and special offers."
        }, void 0, false, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t11;
        $[13] = t12;
    } else {
        t10 = $[11];
        t11 = $[12];
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10",
                children: [
                    t6,
                    t8,
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            t11,
                            t12,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        placeholder: "Enter your email",
                                        className: "w-full h-12 rounded-xl bg-white/10 border border-white/10 px-4 text-sm outline-none focus:border-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/footer.js",
                                        lineNumber: 109,
                                        columnNumber: 199
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 font-semibold",
                                        children: "Subscribe Now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/footer.js",
                                        lineNumber: 109,
                                        columnNumber: 372
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/footer.js",
                                lineNumber: 109,
                                columnNumber: 172
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/footer.js",
                        lineNumber: 109,
                        columnNumber: 157
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/footer.js",
                lineNumber: 109,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-400 text-center md:text-left",
            children: "© 2026 Jajot Store. All Rights Reserved."
        }, void 0, false, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-[#131921] text-white mt-20 border-t border-white/10",
            children: [
                t0,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4",
                        children: [
                            t14,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 text-sm text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "hover:text-orange-400 transition-all",
                                        children: "Terms"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/footer.js",
                                        lineNumber: 123,
                                        columnNumber: 327
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "hover:text-orange-400 transition-all",
                                        children: "Privacy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/footer.js",
                                        lineNumber: 123,
                                        columnNumber: 403
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "hover:text-orange-400 transition-all",
                                        children: "Cookies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/footer.js",
                                        lineNumber: 123,
                                        columnNumber: 481
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/footer.js",
                                lineNumber: 123,
                                columnNumber: 264
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/footer.js",
                        lineNumber: 123,
                        columnNumber: 137
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 123,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    return t15;
}
_c = EcommerceFooter;
function _EcommerceFooterAnonymous4(item_1, index_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 131,
                    columnNumber: 151
                }, this),
                item_1
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 131,
            columnNumber: 28
        }, this)
    }, index_2, false, {
        fileName: "[project]/src/app/component/footer.js",
        lineNumber: 131,
        columnNumber: 10
    }, this);
}
function _EcommerceFooterAnonymous3(item_0, index_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 134,
                    columnNumber: 151
                }, this),
                item_0
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 134,
            columnNumber: 28
        }, this)
    }, index_1, false, {
        fileName: "[project]/src/app/component/footer.js",
        lineNumber: 134,
        columnNumber: 10
    }, this);
}
function _EcommerceFooterAnonymous2(Icon_0, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 hover:scale-110 transition-all duration-300 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon_0, {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/component/footer.js",
            lineNumber: 137,
            columnNumber: 176
        }, this)
    }, index_0, false, {
        fileName: "[project]/src/app/component/footer.js",
        lineNumber: 137,
        columnNumber: 10
    }, this);
}
function _EcommerceFooterAnonymous(item, index) {
    const Icon = item.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-2xl p-5 flex items-start gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-6 h-6 text-orange-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/footer.js",
                    lineNumber: 141,
                    columnNumber: 232
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/footer.js",
                lineNumber: 141,
                columnNumber: 135
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-sm sm:text-base",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/footer.js",
                        lineNumber: 141,
                        columnNumber: 287
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-gray-400 mt-1 leading-6",
                        children: item.desc
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/footer.js",
                        lineNumber: 141,
                        columnNumber: 355
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/footer.js",
                lineNumber: 141,
                columnNumber: 282
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/component/footer.js",
        lineNumber: 141,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "EcommerceFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/provider/GoogleAuthProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoogleAuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-oauth/google/dist/index.esm.js [app-client] (ecmascript)");
"use client";
;
;
;
function GoogleAuthProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "26bb5dad91f8e84ab1c1ded40b7bcf6a479c32c2cee31c4bf1c0b90498c2b16a") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "26bb5dad91f8e84ab1c1ded40b7bcf6a479c32c2cee31c4bf1c0b90498c2b16a";
    }
    const { children } = t0;
    const googleClientId = ("TURBOPACK compile-time value", "434634672534-cpijh17faeoeoc10ns7l0mb8tbtcmhcp.apps.googleusercontent.com");
    const hasGoogleClientId = googleClientId && googleClientId !== "your_google_client_id_here";
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleOAuthProvider"], {
            clientId: googleClientId,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/provider/GoogleAuthProvider.js",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = GoogleAuthProvider;
var _c;
__turbopack_context__.k.register(_c, "GoogleAuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_0tgwgvw._.js.map