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
"[project]/src/app/Checkout/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const handleSaveAddress = async (address)=>{
    if (cartItems.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    const userId = getLoggedInUserId(cartItems);
    if (!userId) {
        alert("Could not find a valid user id. Please log in again.");
        return;
    }
    let user = {};
    try {
        user = JSON.parse(localStorage.getItem("user") || "{}");
    } catch (e) {
        user = {};
    }
    const [firstName, ...rest] = (address.fullName || "").trim().split(" ");
    const lastName = rest.join(" ");
    const orderItems = cartItems.map(toOrderItem);
    const missingVendor = orderItems.find((it)=>!it.vendor_id);
    if (missingVendor) {
        console.warn("vendor_id missing for item:", missingVendor);
        alert("Kuch products ke liye vendor jaankari nahi mil paayi. Kripya cart mein wapas jaakar item hata/add karke dobara try karein.");
        return;
    }
    // First item ka vendor_id root level par bhej rahe hain
    const rootVendorId = orderItems[0]?.vendor_id || "";
    const payload = {
        user_id: userId,
        vendor_id: rootVendorId,
        payment_method: "COD",
        items: orderItems,
        billing_address: {
            line1: address.houseNumber || "",
            line2: address.area || address.locality || "",
            city: address.city || "",
            state: address.state || "",
            pincode: address.pincode || "",
            country: "India"
        },
        shipping_address: {
            line1: address.houseNumber || "",
            line2: address.area || address.locality || "",
            city: address.city || "",
            state: address.state || "",
            pincode: address.pincode || "",
            country: "India"
        },
        customer_details: {
            first_name: firstName || "",
            last_name: lastName || "",
            phone: address.mobile || "",
            email: user?.email || ""
        }
    };
    try {
        setPlacingOrder(true);
        console.log("ORDER PAYLOAD:", JSON.stringify(payload, null, 2));
        await placeOrder(payload);
        const orderedCartIds = cartItems.map((item)=>item?._id || item?.cartId || item?.id).filter(isValidObjectId);
        const deleteResults = await Promise.allSettled(orderedCartIds.map((id)=>deleteCartItem(id)));
        deleteResults.forEach((result, idx)=>{
            if (result.status === "rejected") {
                console.error("Failed to remove ordered cart item", orderedCartIds[idx], result.reason?.response?.data || result.reason?.message || result.reason);
            }
        });
        localStorage.removeItem("checkoutData");
        localStorage.removeItem("cartItems");
        window.dispatchEvent(new Event("cartUpdated"));
        alert("Order placed successfully!");
        router.push("/");
    } catch (error) {
        console.log("FULL ERROR RESPONSE:", JSON.stringify(error.response?.data, null, 2));
        alert(error.response?.data?.message || "Failed to place order. Please try again.");
    } finally{
        setPlacingOrder(false);
    }
};
}),
"[project]/src/app/Checkout/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/Checkout/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0lsnrjh._.js.map