module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/app/Wishlist/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
(()=>{
    const e = new Error("Cannot find module '../baseurl/baseurl'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../customer/customer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function getWishlistDeviceId() {
    if ("TURBOPACK compile-time truthy", 1) return "";
    //TURBOPACK unreachable
    ;
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
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function createWishlistItem({ cid = getLoggedInCid(), pid = null, variantId = null, vendorId = null, qty = 1, divid } = {}) {
    const finalDivid = divid || getWishlistDeviceId();
    // NOTE: check with backend team - field name should be "vendorId"
    // not "venderid" unless backend explicitly expects that spelling.
    const res = await api.post("/wishlist/create", {
        cid,
        pid,
        divid: finalDivid,
        qty,
        variantId,
        vendorId
    });
    dispatchWishlistUpdated();
    return res;
}
const addWishlistItem = createWishlistItem;
async function updateWishlistItem(id, data = {}) {
    if (!id) throw new Error("updateWishlistItem: id is required");
    const payload = {
        cid: data.cid ?? getLoggedInCid(),
        pid: data.pid ?? getWishlistProductId(data),
        divid: data.divid || data.deviceId || getWishlistDeviceId(),
        qty: data.qty ?? data.quantity ?? 1,
        variantId: data.variantId ?? getWishlistVariantId(data),
        vendorId: data.vendorId ?? getWishlistVendorId(data)
    };
    const res = await api.put(`/wishlist/update/${id}`, payload);
    dispatchWishlistUpdated();
    return res;
}
async function deleteWishlistItem(id) {
    if (!id) throw new Error("deleteWishlistItem: id is required");
    const res = await api.delete(`/wishlist/delete/${id}`);
    dispatchWishlistUpdated();
    return res;
}
const removeWishlistItem = deleteWishlistItem;
async function getCustomerWishlistItems(cid = getLoggedInCid()) {
    if (!cid) throw new Error("getCustomerWishlistItems: cid is required");
    return api.get(`/wishlist/customer/${cid}`);
}
async function getDeviceWishlistItems(divid = getWishlistDeviceId()) {
    if (!divid) throw new Error("getDeviceWishlistItems: divid is required");
    return api.get(`/wishlist/device/${divid}`);
}
async function getAllWishlistItems() {
    const cid = getLoggedInCid();
    if (cid) return getCustomerWishlistItems(cid);
    return getDeviceWishlistItems();
}
const getWishlistByCidOrDevice = getAllWishlistItems;
async function syncDeviceWishlistToCustomer(cid) {
    if (!cid) throw new Error("syncDeviceWishlistToCustomer: cid is required");
    const divid = getWishlistDeviceId();
    const res = await api.post("/wishlist/sync", {
        cid,
        divid
    });
    dispatchWishlistUpdated();
    return res;
}
}),
"[project]/src/app/Wishlist/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/Wishlist/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0t7ff4-._.js.map