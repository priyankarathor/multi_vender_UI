module.exports = [
"[project]/src/app/ProductDetailpage/CartSidebar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.mjs [app-ssr] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/cart/cart.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CartSidebar({ isOpen, onClose }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        let active = true;
        setLoading(true);
        // cid/divid manually decide karne ki zaroorat nahi -- fetchNormalizedCartItems()
        // (aur uske andar getCartItems()) khud hi cid = getLoggedInCid() try karta hai,
        // jo sirf tabhi value deta hai jab user login ho. Agar cid nahi mila
        // (matlab login nahi hai) tabhi divid = getCartDeviceId() fallback use hota hai.
        // Yehi if-else pattern add-to-cart (createCartItem/updateCartItem) mein bhi hai.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchNormalizedCartItems"])().then((items)=>{
            if (active) setCartItems(items);
        }).catch((err)=>console.error("CartSidebar: fetch failed", err)).finally(()=>active && setLoading(false));
        return ()=>{
            active = false;
        };
    }, [
        isOpen
    ]);
    const getQuantity = (item)=>item.qty || item.quantity || 1;
    const getTitle = (item)=>item.title || item.name || item.pid?.productName || item.pid?.itemName || item.variantId?.sku || "Untitled Product";
    const getImage = (item)=>item.image || item.variantId?.images?.[0] || item.pid?.images?.[0] || "https://via.placeholder.com/150";
    const getPrice = (item)=>Number(item.price || item.variantId?.offer?.salePrice || item.variantId?.offer?.sellingPrice || 0);
    const getVariantText = (item)=>[
            item.storage || item.sku || item.variantId?.sku,
            item.color
        ].filter(Boolean).join(" - ");
    const subtotal = cartItems.reduce((acc, item)=>acc + getPrice(item) * getQuantity(item), 0);
    // 🆕 FIX: pehle "resolvedvendorid" (lowercase) padha ja raha tha jabki
    // fetchNormalizedCartItems() "resolvedVendorId" (camelCase) set karta hai —
    // isliye grouping hamesha "unknown" mein chali jaati thi.
    const groupedByVendor = cartItems.reduce((acc, item)=>{
        const vendorKey = item.resolvedVendorId || "unknown";
        if (!acc[vendorKey]) acc[vendorKey] = [];
        acc[vendorKey].push(item);
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: `fixed inset-0 bg-black/30 z-[100] transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 right-0 h-full w-full sm:w-[340px] bg-white z-[110] shadow-2xl transition-all duration-300 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[64px] px-4 border-b border-gray-100 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-lg bg-[#FFD814] flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-[15px] font-semibold leading-none",
                                                children: "Cart Added"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-gray-500 mt-1",
                                                children: [
                                                    cartItems.length,
                                                    " item",
                                                    cartItems.length !== 1 ? "s" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto bg-[#fafafa] p-3 space-y-4",
                        children: [
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[12px] text-gray-500 mt-4",
                                children: "Loading cart..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                lineNumber: 90,
                                columnNumber: 23
                            }, this),
                            !loading && cartItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[12px] text-gray-500 mt-4",
                                children: "Cart is empty"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            !loading && Object.entries(groupedByVendor).map(([vendorKey, vendorItems])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-[11px] font-medium text-gray-500 px-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this),
                                                vendorKey === "unknown" ? "Vendor" : `Sold by #${vendorKey.slice(-6)}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        vendorItems.map((item, index)=>{
                                            const quantity = getQuantity(item);
                                            const title = getTitle(item);
                                            const image = getImage(item);
                                            const price = getPrice(item);
                                            const variantText = getVariantText(item);
                                            const lineTotal = price * quantity;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white border border-gray-100 rounded-xl p-2.5 flex gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[64px] h-[64px] bg-[#f5f5f5] rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: image,
                                                            alt: title,
                                                            className: "w-full h-full object-contain p-1.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                            lineNumber: 118,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                        lineNumber: 117,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-[12.5px] font-medium text-gray-800 line-clamp-2 leading-[17px]",
                                                                children: title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                                lineNumber: 122,
                                                                columnNumber: 25
                                                            }, this),
                                                            variantText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-gray-500 mt-1 truncate",
                                                                children: variantText
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                                lineNumber: 126,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[15px] font-bold text-gray-900",
                                                                                children: [
                                                                                    "Rs.",
                                                                                    lineTotal.toLocaleString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                                                lineNumber: 130,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] text-gray-500",
                                                                                children: [
                                                                                    "Rs.",
                                                                                    price.toLocaleString(),
                                                                                    " x ",
                                                                                    quantity
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                                                lineNumber: 133,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                                        lineNumber: 129,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "px-2 py-[3px] rounded-md bg-gray-100 text-[10px] font-medium text-gray-700",
                                                                        children: [
                                                                            "Qty ",
                                                                            quantity
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                                        lineNumber: 137,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                                lineNumber: 128,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                        lineNumber: 121,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, item._id || index, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    ]
                                }, vendorKey, true, {
                                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-100 bg-white p-3 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] text-gray-500",
                                        children: "Subtotal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[20px] font-bold",
                                        children: [
                                            "Rs.",
                                            subtotal.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/Addtocard"),
                                className: "w-full h-11 rounded-xl bg-[#FFD814] hover:bg-[#F7CA00] transition text-[13px] font-semibold flex items-center justify-center gap-2",
                                children: [
                                    "View Cart ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                        lineNumber: 158,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-full h-10 rounded-xl border border-gray-200 hover:bg-gray-50 transition text-[13px] font-medium",
                                children: "Continue Shopping"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/apis/products/products.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FALLBACK_PRODUCT_IMAGE",
    ()=>FALLBACK_PRODUCT_IMAGE,
    "PRODUCT_API_URL",
    ()=>PRODUCT_API_URL,
    "fetchProductById",
    ()=>fetchProductById,
    "fetchProducts",
    ()=>fetchProducts,
    "getDefaultVariant",
    ()=>getDefaultVariant,
    "getProductBulletPoints",
    ()=>getProductBulletPoints,
    "getProductDescription",
    ()=>getProductDescription,
    "getProductFromPayload",
    ()=>getProductFromPayload,
    "getProductImage",
    ()=>getProductImage,
    "getProductMrp",
    ()=>getProductMrp,
    "getProductPrice",
    ()=>getProductPrice,
    "getProductsFromPayload",
    ()=>getProductsFromPayload,
    "isValidProductImageUrl",
    ()=>isValidProductImageUrl,
    "normalizeProduct",
    ()=>normalizeProduct,
    "normalizeVariant",
    ()=>normalizeVariant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/baseurl/baseurl.js [app-ssr] (ecmascript)");
;
const PRODUCT_API_URL = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}/products`;
const FALLBACK_PRODUCT_IMAGE = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop";
function getProductsFromPayload(payload) {
    const products = Array.isArray(payload) ? payload : Array.isArray(payload?.products) ? payload.products : Array.isArray(payload?.data) ? payload.data : [];
    if (!Array.isArray(payload?.variants) || payload.variants.length === 0) {
        return products;
    }
    return products.map((product)=>{
        const productId = product?._id || product?.id;
        const productVariants = payload.variants.filter((variant)=>String(variant?.productId) === String(productId));
        if (productVariants.length === 0) return product;
        return {
            ...product,
            variants: Array.isArray(product?.variants) && product.variants.length > 0 ? product.variants : productVariants
        };
    });
}
function getProductFromPayload(payload) {
    if (payload?.product) {
        return {
            ...payload.product,
            variants: Array.isArray(payload.product?.variants) && payload.product.variants.length > 0 ? payload.product.variants : payload.variants || []
        };
    }
    if (payload?.data && !Array.isArray(payload.data)) return payload.data;
    return payload;
}
function getProductDescription(product) {
    const description = product?.description;
    if (typeof description === "string") return description;
    if (typeof description?.productDescription === "string") {
        return description.productDescription;
    }
    return "";
}
function getProductBulletPoints(product) {
    const bulletPoints = product?.description?.bulletPoints;
    return Array.isArray(bulletPoints) ? bulletPoints.filter((point)=>typeof point === "string" && point.trim()) : [];
}
function getProductImage(product, variant) {
    const images = [
        variant?.images?.[0],
        product?.thumbnailImage,
        product?.images?.[0]
    ].filter(Boolean);
    return images.find(isValidProductImageUrl) || FALLBACK_PRODUCT_IMAGE;
}
function isValidProductImageUrl(image) {
    if (/^data:image\/(png|jpe?g|webp|gif);base64,/i.test(image)) return true;
    if (!/^https?:\/\//i.test(image)) return false;
    try {
        const url = new URL(image);
        return url.hostname !== "example.com";
    } catch  {
        return false;
    }
}
function getVariantAttribute(variant, names) {
    const normalizedNames = Array.isArray(names) ? names : [
        names
    ];
    const attribute = variant?.attributes?.find((item)=>normalizedNames.includes(String(item?.name || "").toLowerCase()));
    return attribute?.value || "";
}
function formatAttributeLabel(key) {
    return String(key || "").replace(/([A-Z])/g, " $1").replace(/^./, (char)=>char.toUpperCase()).trim();
}
function getDetailAttributes(product) {
    const attributeMeta = Array.isArray(product?.attributesMeta) ? product.attributesMeta.map((attribute)=>({
            _id: attribute?._id || attribute?.name,
            name: attribute?.name,
            value: attribute?.values
        })) : [];
    const detailGroups = [
        product?.productDetails,
        product?.dimensions,
        product?.packaging,
        product?.safetyCompliance,
        product?.giftOptions
    ].filter(Boolean);
    const productDetails = detailGroups.flatMap((group)=>Object.entries(group).filter(([, value])=>{
            if (value == null || value === "") return false;
            if (Array.isArray(value)) return value.length > 0;
            return typeof value !== "object";
        }).map(([key, value])=>({
                _id: key,
                name: formatAttributeLabel(key),
                value
            })));
    return [
        ...attributeMeta,
        ...productDetails
    ].filter((attribute)=>attribute.name && attribute.value != null);
}
function normalizeVariant(variant) {
    if (!variant) return null;
    const sellingPrice = variant.sellingPrice || variant.offer?.sellingPrice || variant.offer?.salePrice || variant.salePrice || variant.price || 0;
    const mrp = variant.mrp || variant.offer?.mrp || variant.offer?.price || variant.price || 0;
    return {
        ...variant,
        color: variant.color || getVariantAttribute(variant, [
            "color",
            "colour"
        ]),
        size: variant.size || getVariantAttribute(variant, [
            "size",
            "storage"
        ]),
        mrp,
        sellingPrice,
        salePrice: variant.salePrice || variant.offer?.salePrice || sellingPrice,
        stock: variant.stock ?? variant.inventory?.stock ?? variant.inventory?.quantity ?? 0,
        maxQuantity: variant.maxQuantity || variant.maximumOrderQuantity || variant.offer?.maximumOrderQuantity
    };
}
function getDefaultVariant(product) {
    return Array.isArray(product?.variants) && product.variants.length > 0 ? normalizeVariant(product.variants[0]) : null;
}
function getProductPrice(product, variant = getDefaultVariant(product)) {
    return Number(variant?.salePrice || variant?.offer?.salePrice || variant?.sellingPrice || variant?.offer?.sellingPrice || variant?.price || product?.salePrice || product?.price || 0);
}
function getProductMrp(product, variant = getDefaultVariant(product)) {
    return Number(variant?.mrp || variant?.offer?.mrp || variant?.offer?.price || variant?.price || product?.price || product?.salePrice || 0);
}
function normalizeProduct(product) {
    const normalizedVariants = Array.isArray(product?.variants) ? product.variants.map(normalizeVariant).filter(Boolean) : [];
    const variant = normalizedVariants[0] || null;
    const price = getProductPrice(product, variant);
    const mrp = getProductMrp(product, variant);
    const attributes = Array.isArray(product?.attributes) && product.attributes.length > 0 ? product.attributes : getDetailAttributes(product);
    return {
        ...product,
        variants: normalizedVariants,
        id: product?._id || product?.id || product?.sku,
        name: product?.productName || product?.name || "Product",
        description: getProductDescription(product),
        bulletPoints: getProductBulletPoints(product),
        brand: product?.brand || product?.brandName,
        sku: product?.sku || product?.externalProductId || product?.modelNumber,
        category: product?.category?.name || product?.categoryName || product?.categoryId || "Products",
        subcategory: product?.subcategory?.name || product?.subCategory?.name || product?.subcategoryId?.name || product?.subCategoryId?.name || product?.subcategoryName || product?.subCategoryName || product?.subcategory?._id || product?.subCategory?._id || product?.subcategoryId?._id || product?.subCategoryId?._id || product?.subcategoryId || product?.subCategoryId || "",
        attributes,
        price,
        mrp,
        discount: product?.discount || (mrp > price && price > 0 ? Math.round((mrp - price) / mrp * 100) : 0),
        rating: product?.rating || 4.5,
        stock: variant?.stock ?? product?.stock ?? product?.inventory?.stock ?? product?.quantity ?? null,
        image: getProductImage(product, variant),
        defaultVariant: variant
    };
}
async function fetchFirstOk(urls) {
    let lastError = null;
    for (const url of urls){
        try {
            const response = await fetch(url, {
                cache: "no-store"
            });
            if (response.ok) return response;
            lastError = new Error("Failed to load products");
        } catch (error) {
            lastError = error;
        }
    }
    throw lastError || new Error("Failed to load products");
}
async function fetchProducts(filters = {}) {
    const urls = [
        PRODUCT_API_URL
    ];
    const params = new URLSearchParams();
    if (filters.category && filters.category !== "All") {
        params.set("category", filters.category);
    }
    if (filters.subcategory && filters.subcategory !== "All") {
        params.set("subcategory", filters.subcategory);
    }
    if (filters.subcategoryId) {
        params.set("subcategoryId", filters.subcategoryId);
    }
    if (params.toString()) {
        urls.unshift(`${PRODUCT_API_URL}?${params.toString()}`);
    }
    if (filters.subcategoryId) {
        urls.unshift(`${PRODUCT_API_URL}/subcategory/${filters.subcategoryId}`);
    }
    const response = await fetchFirstOk(urls);
    const payload = await response.json();
    const products = getProductsFromPayload(payload);
    const enrichedProducts = await Promise.all(products.map(async (product)=>{
        if (Array.isArray(product?.variants) && product.variants.length > 0) {
            return product;
        }
        const productId = product?._id || product?.id;
        if (!productId) return product;
        try {
            const detailResponse = await fetch(`${PRODUCT_API_URL}/${productId}`, {
                cache: "no-store"
            });
            if (!detailResponse.ok) return product;
            const detailPayload = await detailResponse.json();
            const detailedProduct = getProductFromPayload(detailPayload);
            return detailedProduct || product;
        } catch  {
            return product;
        }
    }));
    return enrichedProducts.map(normalizeProduct).filter((p)=>p.id);
}
async function fetchProductById(id) {
    if (!id) return null;
    const response = await fetch(`${PRODUCT_API_URL}/${id}`, {
        cache: "no-store"
    });
    if (!response.ok) {
        throw new Error("Failed to load product");
    }
    const payload = await response.json();
    const product = getProductFromPayload(payload);
    if (!product) return null;
    return normalizeProduct(product);
}
}),
"[project]/src/app/component/PageSkeleton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartSkeleton",
    ()=>CartSkeleton,
    "ProductDetailSkeleton",
    ()=>ProductDetailSkeleton,
    "ProductGridSkeleton",
    ()=>ProductGridSkeleton,
    "default",
    ()=>PageSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const skeletonClass = "animate-skeleton rounded bg-gray-200";
function SkeletonBlock({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${skeletonClass} ${className}`
    }, void 0, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
function ProductCardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-gray-200 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                className: "aspect-square w-full rounded-none"
            }, void 0, false, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                        className: "h-4 w-11/12"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/PageSkeleton.js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                        className: "h-4 w-8/12"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/PageSkeleton.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                        className: "h-3 w-20"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/PageSkeleton.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                        className: "h-5 w-24"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/PageSkeleton.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                        className: "h-9 w-full rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/PageSkeleton.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function ProductGridSkeleton({ count = 8 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-5 p-4 md:grid-cols-3 lg:grid-cols-4",
        children: Array.from({
            length: count
        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCardSkeleton, {}, index, false, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 26,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function ProductDetailSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white pb-28 lg:pb-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1550px] px-3 py-4 sm:px-4 lg:py-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-[52px_minmax(480px,5fr)_minmax(360px,4fr)_minmax(280px,3fr)] lg:gap-2 xl:gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: Array.from({
                                length: 5
                            }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                    className: "h-12 w-12 rounded"
                                }, index, false, {
                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/PageSkeleton.js",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-[360px] w-full sm:h-[460px] lg:h-[560px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex gap-2 lg:hidden",
                                children: Array.from({
                                    length: 5
                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-14 w-14 min-w-14 rounded"
                                    }, index, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/PageSkeleton.js",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-4 w-44"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-7 w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-7 w-10/12"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-4 w-40"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-y border-gray-200 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-8 w-36"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "mt-3 h-4 w-52"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-3 border-b border-gray-200 pb-5",
                                children: Array.from({
                                    length: 4
                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                                className: "mx-auto h-8 w-8 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                                className: "h-3 w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-5 w-32"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: Array.from({
                                    length: 4
                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-10 w-20 rounded-md"
                                    }, index, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-5 w-40"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: Array.from({
                                    length: 5
                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-4 w-full"
                                    }, index, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/PageSkeleton.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 rounded-lg border border-gray-300 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                    className: "h-8 w-32"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                    className: "h-4 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                    className: "h-6 w-24"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                    className: "h-9 w-28 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                    className: "h-10 w-full rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                    className: "h-10 w-full rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                    className: "h-10 w-full rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/PageSkeleton.js",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function CartSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f5f5f5] px-3 py-6 md:px-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_340px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-gray-200 bg-white p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                    className: "h-7 w-48"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                    className: "mt-3 h-4 w-24"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        Array.from({
                            length: 3
                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-200 bg-white p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                            className: "h-28 w-28 flex-shrink-0 rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/PageSkeleton.js",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                                    className: "h-5 w-10/12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                                    className: "h-3 w-24"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                                    className: "h-4 w-40"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                                    className: "h-6 w-32"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/PageSkeleton.js",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/PageSkeleton.js",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-28 w-full rounded-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-80 w-full rounded-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 105,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
function PageSkeleton({ type = "home" }) {
    if (type === "product") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductDetailSkeleton, {}, void 0, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 135,
        columnNumber: 34
    }, this);
    if (type === "cart") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartSkeleton, {}, void 0, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 136,
        columnNumber: 31
    }, this);
    if (type === "grid") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-zinc-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductGridSkeleton, {}, void 0, false, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 139,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-zinc-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1450px] px-4 py-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                    className: "h-[260px] w-full rounded-2xl sm:h-[360px]"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid grid-cols-2 gap-4 md:grid-cols-4",
                    children: Array.from({
                        length: 4
                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-32 rounded-2xl"
                        }, index, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-7 w-48"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductGridSkeleton, {
                            count: 8
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/ProductDetailpage/productdetails.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ProductDetailpage$2f$CartSidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ProductDetailpage/CartSidebar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/products/products.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/cart/cart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/customer/customer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/wishlist/wishlist.js [app-ssr] (ecmascript)"); // <-- ADDED
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$PageSkeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/PageSkeleton.js [app-ssr] (ecmascript)");
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
const fieldLabel = {
    sku: "SKU",
    brand: "Brand"
};
function uniqueValues(items, key) {
    return [
        ...new Set(items.map((item)=>item?.[key]).filter(Boolean))
    ];
}
function getDisplayValue(value) {
    if (value == null) return "";
    if (typeof value === "string" || typeof value === "number") return value;
    if (Array.isArray(value)) return value.filter(Boolean).join(", ");
    if (typeof value === "object") {
        return value.name || value.value || value.productDescription || "";
    }
    return String(value);
}
// FIXED: ab "Size Options", "Color Options" jaise names bhi match honge
// (pehle sirf exact "size"/"color" match hota tha, isliye Jajot ke
// attribute names pe selector nahi dikh raha tha)
function getOptionValues(product, names) {
    const option = product?.attributesMeta?.find((attribute)=>{
        const attrName = String(attribute?.name || "").toLowerCase();
        return names.some((name)=>attrName.includes(name));
    });
    return Array.isArray(option?.values) ? option.values.filter(Boolean) : [];
}
function getTextDescription(item) {
    const description = item?.description;
    if (typeof description === "string") return description;
    if (typeof description?.productDescription === "string") {
        return description.productDescription;
    }
    return "";
}
function getBulletPoints(item) {
    const bulletPoints = item?.description?.bulletPoints;
    return Array.isArray(bulletPoints) ? bulletPoints.filter((point)=>typeof point === "string" && point.trim()) : [];
}
function ProductDetailsPage({ initialProduct = null, initialProductId = "" }) {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const routeId = params?.id || initialProductId;
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialProduct);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!initialProduct);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedVariantId, setSelectedVariantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedOptions, setSelectedOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [brokenImageUrls, setBrokenImageUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [cartOpen, setCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cartPreviewItems, setCartPreviewItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [addingToCart, setAddingToCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wishlistItems, setWishlistItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [storageReady, setStorageReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [togglingWishlist, setTogglingWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // <-- ADDED
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        const loadProduct = async ()=>{
            if (!routeId) {
                setProduct(null);
                setError("Product not found.");
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const apiProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchProductById"])(routeId);
                if (!active) return;
                setProduct(apiProduct);
                setError(apiProduct ? "" : "Product not found.");
            } catch (err) {
                if (!active) return;
                if (initialProduct) {
                    setProduct(initialProduct);
                    setError("");
                } else {
                    setProduct(null);
                    setError("Product detail could not load. Please try again.");
                }
            } finally{
                if (active) setLoading(false);
            }
        };
        if (initialProduct && initialProduct.id === routeId && initialProduct.variants?.length > 0) {
            return;
        }
        loadProduct();
        return ()=>{
            active = false;
        };
    }, [
        initialProduct,
        routeId
    ]);
    const variants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>product?.variants || [], [
        product
    ]);
    const selectedVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!product) return null;
        return variants.find((variant)=>variant._id === selectedVariantId) || variants[0] || product.defaultVariant || null;
    }, [
        product,
        selectedVariantId,
        variants
    ]);
    const galleryImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!product) return [];
        const rawImages = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductImage"])(product, selectedVariant),
            ...selectedVariant?.images || [],
            product.thumbnailImage,
            ...product.images || []
        ].filter(Boolean);
        const resolved = rawImages.filter(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidProductImageUrl"]);
        return [
            ...new Set(resolved)
        ].filter((image)=>image && !brokenImageUrls.includes(image));
    }, [
        brokenImageUrls,
        product,
        selectedVariant
    ]);
    const activeImage = galleryImages.includes(selectedImage) ? selectedImage : galleryImages[0] || "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = window.setTimeout(()=>{
            const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
            setCartItems(Array.isArray(savedCartItems) ? savedCartItems : []);
            setStorageReady(true);
        }, 0);
        return ()=>window.clearTimeout(timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        const loadWishlistFromBackend = async ()=>{
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWishlistByCidOrDevice"])({
                    cid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCid"])()
                });
                const items = Array.isArray(res?.data?.data) ? res.data.data : [];
                if (active) setWishlistItems(items);
            } catch (err) {
                if (active) setWishlistItems([]);
            }
        };
        loadWishlistFromBackend();
        window.addEventListener("wishlistUpdated", loadWishlistFromBackend);
        return ()=>{
            active = false;
            window.removeEventListener("wishlistUpdated", loadWishlistFromBackend);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!storageReady) return;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        window.dispatchEvent(new Event("cartUpdated"));
    }, [
        cartItems,
        storageReady
    ]);
    const price = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductPrice"])(product, selectedVariant);
    const mrp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductMrp"])(product, selectedVariant);
    const hasPrice = price > 0;
    const discount = mrp > price && price > 0 ? Math.round((mrp - price) / mrp * 100) : 0;
    const stock = selectedVariant?.stock ?? product?.stock ?? product?.inventory?.stock ?? product?.quantity ?? null;
    const isOutOfStock = stock === 0;
    const canPurchase = hasPrice && !isOutOfStock;
    const maxQuantity = selectedVariant?.maxQuantity || product?.maxQuantity;
    const stockLimit = typeof stock === "number" && stock > 0 ? stock : null;
    const effectiveMaxQuantity = maxQuantity && stockLimit ? Math.min(maxQuantity, stockLimit) : maxQuantity || stockLimit;
    const safeQuantity = effectiveMaxQuantity ? Math.min(quantity, effectiveMaxQuantity) : quantity;
    const colors = uniqueValues(variants, "color").length > 0 ? uniqueValues(variants, "color") : getOptionValues(product, [
        "color",
        "colour"
    ]);
    const selectedColor = selectedVariant?.color || selectedOptions.color || colors[0] || "";
    const availableSizes = uniqueValues(selectedColor ? variants.filter((variant)=>variant.color === selectedColor) : variants, "size");
    const sizes = availableSizes.length > 0 ? availableSizes : getOptionValues(product, [
        "storage",
        "size"
    ]);
    const selectedSize = selectedVariant?.size || selectedOptions.size || sizes[0] || "";
    const selectedDescription = getTextDescription(selectedVariant) || product?.description || "";
    const selectedBulletPoints = getBulletPoints(selectedVariant).length > 0 ? getBulletPoints(selectedVariant) : product?.bulletPoints || [];
    const liked = product ? wishlistItems.some((item)=>{
        const itemProductId = item.pid && typeof item.pid === "object" ? item.pid._id : item.pid;
        return itemProductId === product.id;
    }) : false;
    const chooseVariant = (matcher)=>{
        const nextVariant = variants.find(matcher);
        if (nextVariant) {
            setSelectedVariantId(nextVariant._id);
            setQuantity(1);
        }
    };
    const chooseOption = (name, value)=>{
        setSelectedOptions((current)=>({
                ...current,
                [name]: value
            }));
        setQuantity(1);
    };
    const decreaseQuantity = ()=>{
        setQuantity((prev)=>{
            if (prev <= 1) return 1;
            return prev - 1;
        });
    };
    const increaseQuantity = ()=>{
        setQuantity((prev)=>{
            if (effectiveMaxQuantity && prev >= effectiveMaxQuantity) {
                return effectiveMaxQuantity;
            }
            return prev + 1;
        });
    };
    const handleAddToCart = async (openCart = true)=>{
        if (!product || !canPurchase || addingToCart) return false;
        const variantKey = selectedVariant?._id || `${selectedColor || "default"}-${selectedSize || "default"}`;
        const cartId = `${product.id}-${variantKey}`;
        const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartDeviceId"])();
        const cartProduct = {
            id: cartId,
            productId: product.id,
            variantId: selectedVariant?._id,
            deviceId,
            title: product.name,
            name: product.name,
            image: activeImage,
            storage: selectedSize || product.sku || "",
            size: selectedSize || "",
            color: selectedColor || "",
            quantity: safeQuantity,
            qty: safeQuantity,
            price,
            mrp,
            sku: product.sku,
            attributes: product.attributes || [],
            variant: selectedVariant || selectedOptions,
            delivery: "Tomorrow"
        };
        setAddingToCart(true);
        setCartItems((prev)=>{
            const existing = prev.find((item)=>item.id === cartId);
            if (existing) {
                return prev.map((item)=>item.id === cartId ? {
                        ...item,
                        quantity: (item.quantity || 1) + safeQuantity,
                        qty: (item.qty || item.quantity || 1) + safeQuantity
                    } : item);
            }
            return [
                ...prev,
                cartProduct
            ];
        });
        try {
            let deviceCartItems = [];
            try {
                const deviceCartRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDeviceCartItems"])();
                deviceCartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiCartList"])(deviceCartRes.data);
            } catch (deviceCartError) {
                console.warn("Device cart fetch failed before add", deviceCartError.response?.data?.message || deviceCartError.message);
            }
            const existingApiItem = [
                ...deviceCartItems
            ].reverse().find((item)=>{
                const itemProductId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartProductId"])(item);
                const itemVariantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartVariantId"])(item);
                const sameProduct = String(itemProductId) === String(product.id);
                const sameVariant = !selectedVariant?._id || !itemVariantId || String(itemVariantId) === String(selectedVariant._id);
                return sameProduct && sameVariant;
            });
            const resolvedVendorId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartVendorId"])(existingApiItem) || product.vendorId || product.venderid || null;
            if (existingApiItem?._id) {
                const nextQty = (existingApiItem.qty || existingApiItem.quantity || 1) + safeQuantity;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCartItem"])(existingApiItem._id, {
                    cid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCid"])(),
                    pid: product.id,
                    divid: existingApiItem.divid || existingApiItem.deviceId || deviceId,
                    qty: nextQty,
                    variantId: selectedVariant?._id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartVariantId"])(existingApiItem),
                    offerDiscount: discount || product.discount || 0,
                    vendorId: resolvedVendorId
                });
                setCartPreviewItems([
                    {
                        ...existingApiItem,
                        qty: nextQty,
                        quantity: nextQty
                    }
                ]);
                if (openCart) setCartOpen(true);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCartItem"])({
                    cid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCid"])(),
                    pid: product.id,
                    divid: deviceId,
                    vendorId: resolvedVendorId,
                    qty: safeQuantity,
                    variantId: selectedVariant?._id || null,
                    offerDiscount: discount || product.discount || 0
                });
                try {
                    const refreshedCartRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDeviceCartItems"])();
                    const refreshedCartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiCartList"])(refreshedCartRes.data);
                    const addedApiItem = [
                        ...refreshedCartItems
                    ].reverse().find((item)=>{
                        const itemProductId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartProductId"])(item);
                        const itemVariantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartVariantId"])(item);
                        const sameProduct = String(itemProductId) === String(product.id);
                        const sameVariant = !selectedVariant?._id || !itemVariantId || String(itemVariantId) === String(selectedVariant._id);
                        return sameProduct && sameVariant;
                    });
                    setCartPreviewItems([
                        addedApiItem || cartProduct
                    ]);
                } catch (deviceCartError) {
                    console.error("Device cart fetch failed", deviceCartError.response?.data?.message || deviceCartError.message);
                    setCartPreviewItems([
                        cartProduct
                    ]);
                }
                if (openCart) setCartOpen(true);
            }
            window.dispatchEvent(new Event("cartUpdated"));
            window.dispatchEvent(new CustomEvent("shopToast", {
                detail: {
                    title: "Added to cart",
                    message: "Your product is ready in the cart."
                }
            }));
            return true;
        } catch (err) {
            setCartPreviewItems([
                cartProduct
            ]);
            console.error("Cart API failed", err.response?.data?.message || err.message);
            return false;
        } finally{
            setAddingToCart(false);
        }
    };
    const handleBuyNow = async ()=>{
        const added = await handleAddToCart(false);
        if (added) router.push("/Addtocard");
    };
    const handleToggleWishlist = async ()=>{
        if (!product || togglingWishlist) return;
        const existingItem = wishlistItems.find((item)=>{
            const itemProductId = item.pid && typeof item.pid === "object" ? item.pid._id : item.pid;
            return itemProductId === product.id;
        });
        const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartDeviceId"])();
        setTogglingWishlist(true);
        try {
            if (existingItem) {
                setWishlistItems((prev)=>prev.filter((item)=>item._id !== existingItem._id));
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteWishlistItem"])(existingItem._id);
                window.dispatchEvent(new Event("wishlistUpdated"));
            } else {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWishlistItem"])({
                    cid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCid"])(),
                    pid: product.id,
                    divid: deviceId,
                    qty: 1,
                    variantId: selectedVariant?._id || null,
                    vendorId: product.vendorId || product.venderid || null,
                    productData: {
                        ...product,
                        _id: product._id || product.id,
                        name: product.name || product.productName || product.itemName,
                        price,
                        image: activeImage,
                        category: product.category,
                        categoryId: product.categoryId || product.category
                    }
                });
                const created = res?.data?.data;
                if (created) {
                    setWishlistItems((prev)=>[
                            ...prev,
                            created
                        ]);
                }
                window.dispatchEvent(new Event("wishlistUpdated"));
                window.dispatchEvent(new CustomEvent("shopToast", {
                    detail: {
                        title: "Added to wishlist",
                        message: "Saved for later in your wishlist."
                    }
                }));
            }
        } catch (err) {
            console.error("Wishlist API failed", err.response?.data?.message || err.message);
        } finally{
            setTogglingWishlist(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$PageSkeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductDetailSkeleton"], {}, void 0, false, {
            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
            lineNumber: 542,
            columnNumber: 12
        }, this);
    }
    if (error || !product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-[70vh] bg-white px-4 py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[1300px] text-center text-sm text-red-600",
                children: error || "Product not found."
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                lineNumber: 548,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
            lineNumber: 547,
            columnNumber: 7
        }, this);
    }
    const footerBadges = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
            label: "7 Days Replacement"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
            label: "Amazon Delivered"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
            label: "Secure Transaction"
        },
        ...product.brand ? [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                label: "Top Brand"
            }
        ] : []
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-white pb-28 lg:pb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-[1550px] px-3 py-4 sm:px-4 lg:py-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-6 lg:grid-cols-[52px_minmax(420px,4fr)_minmax(360px,4fr)_minmax(280px,3fr)] lg:gap-3 xl:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-1 lg:contents",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-2 h-fit lg:sticky lg:top-[11.5rem] lg:order-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden flex-col gap-2 lg:flex",
                                                children: galleryImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedImage(img),
                                                        className: `h-12 w-12 overflow-hidden rounded border bg-white transition ${activeImage === img ? "border-[#E47911] ring-1 ring-[#E47911]" : "border-gray-300 hover:border-[#E47911]"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: img,
                                                            alt: "",
                                                            className: "h-full w-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 580,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, img, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 571,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 569,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-1 h-fit lg:sticky lg:top-[11.5rem] lg:order-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex w-full items-start justify-start overflow-hidden",
                                                        children: activeImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: activeImage,
                                                            alt: product.name,
                                                            onError: ()=>setBrokenImageUrls((current)=>current.includes(activeImage) ? current : [
                                                                        ...current,
                                                                        activeImage
                                                                    ]),
                                                            className: "block h-auto max-h-[620px] w-full max-w-[560px] object-contain object-left-top"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 590,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex min-h-[360px] w-full max-w-[560px] items-center justify-center rounded bg-gray-50 text-sm text-gray-400",
                                                            children: "No image available"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 603,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 588,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-1 pb-2 lg:hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 overflow-x-auto",
                                                            children: galleryImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setSelectedImage(img),
                                                                    className: `h-14 w-14 min-w-[56px] overflow-hidden rounded border bg-white ${activeImage === img ? "border-[#E47911] ring-1 ring-[#E47911]" : "border-gray-300"}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: img,
                                                                        alt: "",
                                                                        className: "h-full w-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                        lineNumber: 621,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, img, false, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 612,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 610,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 609,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 587,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 586,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-3 lg:pl-4 xl:pl-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-[#007185] hover:text-[#C7511F] hover:underline",
                                            children: product.brand ? `Visit the ${product.brand} Store` : product.sku
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 631,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-1 text-[20px] font-semibold leading-7 text-[#0F1111] sm:text-[24px] sm:leading-8",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 635,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-0.5 text-[#FFA41C]",
                                                    children: [
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5
                                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 14,
                                                            fill: "currentColor"
                                                        }, item, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 642,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 640,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-[#007185] hover:underline",
                                                    children: "4.5 ratings"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 645,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 639,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                            className: "my-4 border-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 648,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 pb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-baseline gap-2",
                                                    children: [
                                                        discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-medium text-[#CC0C39]",
                                                            children: [
                                                                "-",
                                                                discount,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 653,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[28px] font-medium text-[#0F1111]",
                                                            children: hasPrice ? `Rs.${price.toLocaleString()}` : "Price unavailable"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 657,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 651,
                                                    columnNumber: 17
                                                }, this),
                                                hasPrice && mrp > price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-[#565959]",
                                                    children: [
                                                        "M.R.P:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "line-through",
                                                            children: [
                                                                "Rs.",
                                                                mrp.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 665,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 663,
                                                    columnNumber: 19
                                                }, this),
                                                hasPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-[#565959]",
                                                    children: "Inclusive of all taxes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 670,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 650,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2 border-b border-gray-200 py-5 sm:grid-cols-4",
                                            children: footerBadges.map(({ icon: Icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 20,
                                                            className: "text-[#565959]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 679,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-1 text-[11px] leading-tight text-[#565959]",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 680,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 678,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 676,
                                            columnNumber: 15
                                        }, this),
                                        colors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 py-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-3 text-sm font-semibold text-[#0F1111]",
                                                    children: [
                                                        "Colour:",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 font-normal text-[#565959]",
                                                            children: selectedColor
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 692,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 690,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>variants.length > 0 ? chooseVariant((variant)=>variant.color === color) : chooseOption("color", color),
                                                            className: `relative rounded-md border px-4 py-2 text-sm font-medium transition ${selectedColor === color ? "border-2 border-[#E47911] bg-[#FFF8F0]" : "border-gray-300 hover:border-[#E47911]"}`,
                                                            children: [
                                                                color,
                                                                selectedColor === color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 14,
                                                                    className: "absolute -right-1.5 -top-1.5 rounded-full bg-[#E47911] p-0.5 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 713,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, color, true, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 698,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 696,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 689,
                                            columnNumber: 17
                                        }, this),
                                        sizes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 py-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-3 text-sm font-semibold text-[#0F1111]",
                                                    children: [
                                                        availableSizes.length > 0 ? "Size:" : "Storage:",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 font-normal text-[#565959]",
                                                            children: selectedSize
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 729,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 727,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: sizes.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>variants.length > 0 ? chooseVariant((variant)=>variant.size === size && (!selectedVariant?.color || variant.color === selectedVariant.color)) : chooseOption("size", size),
                                                            className: `min-w-[56px] rounded-md border px-3 py-2 text-sm font-medium transition ${selectedSize === size ? "border-2 border-[#E47911] bg-[#FFF8F0]" : "border-gray-300 hover:border-[#E47911]"}`,
                                                            children: size
                                                        }, size, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 735,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 733,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 726,
                                            columnNumber: 17
                                        }, this),
                                        variants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 py-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-3 text-base font-semibold text-[#0F1111]",
                                                    children: "All variants"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 763,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 overflow-x-auto pb-2 scrollbar-hide",
                                                    children: variants.map((variant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedVariantId(variant._id),
                                                            className: `min-w-[150px] max-w-[170px] flex-shrink-0 rounded-md border p-3 text-left text-sm transition ${selectedVariant?._id === variant._id ? "border-[#E47911] bg-[#FFF8F0]" : "border-gray-200 hover:border-[#E47911]"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-[#0F1111]",
                                                                    children: [
                                                                        variant.color || "Default",
                                                                        " ",
                                                                        variant.size || ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 777,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#0F1111]",
                                                                    children: [
                                                                        "Price: Rs.",
                                                                        Number(variant.sellingPrice || 0).toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 780,
                                                                    columnNumber: 25
                                                                }, this),
                                                                variant.mrp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#565959] line-through",
                                                                    children: [
                                                                        "MRP: Rs.",
                                                                        Number(variant.mrp).toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 784,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#565959]",
                                                                    children: [
                                                                        "Stock: ",
                                                                        variant.stock ?? 0
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 788,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, variant._id, true, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 768,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 766,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 762,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 py-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-3 text-base font-semibold text-[#0F1111]",
                                                    children: "Product information"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 796,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 text-sm",
                                                    children: [
                                                        (product.attributes || []).map((attribute)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-[140px_1fr] gap-3 border-b border-gray-100 py-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#565959]",
                                                                        children: attribute.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                        lineNumber: 806,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#0F1111]",
                                                                        children: getDisplayValue(attribute.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                        lineNumber: 807,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, attribute._id || attribute.name, true, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 802,
                                                                columnNumber: 21
                                                            }, this)),
                                                        Object.entries(fieldLabel).map(([key, label])=>product[key] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-[140px_1fr] gap-3 border-b border-gray-100 py-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#565959]",
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                        lineNumber: 819,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#0F1111]",
                                                                        children: getDisplayValue(product[key])
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                        lineNumber: 820,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, key, true, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 815,
                                                                columnNumber: 23
                                                            }, this) : null)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 800,
                                                    columnNumber: 17
                                                }, this),
                                                (selectedDescription || selectedBulletPoints.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "mb-2 text-sm font-semibold text-[#0F1111]",
                                                            children: "About this item"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 830,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm leading-6 text-[#0F1111]",
                                                            children: selectedDescription
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 834,
                                                            columnNumber: 23
                                                        }, this),
                                                        selectedBulletPoints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-[#0F1111]",
                                                            children: selectedBulletPoints.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: point
                                                                }, point, false, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 841,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 839,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 829,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 795,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                    lineNumber: 630,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-4 h-fit lg:sticky lg:top-[11.5rem]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border border-gray-300 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-baseline gap-2",
                                                children: [
                                                    discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-base font-medium text-[#CC0C39]",
                                                        children: [
                                                            "-",
                                                            discount,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 854,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[26px] font-medium text-[#0F1111]",
                                                        children: hasPrice ? `Rs.${price.toLocaleString()}` : "Price unavailable"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 858,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 852,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-[#0F1111]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[#007600]",
                                                        children: "FREE delivery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 864,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    "Tomorrow"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 863,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `mt-4 text-lg font-medium ${stock == null ? "text-[#565959]" : stock > 0 ? "text-[#007600]" : "text-red-600"}`,
                                                children: stock == null ? "Availability not listed" : stock > 0 ? "In Stock" : "Out of Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 868,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-1.5 text-sm text-[#0F1111]",
                                                        children: "Quantity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 885,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-9 w-fit items-center justify-between rounded border border-gray-300 bg-[#F0F2F2] px-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: decreaseQuantity,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 888,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 887,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-4 text-sm font-medium",
                                                                children: safeQuantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 890,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: increaseQuantity,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 892,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 891,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 886,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 884,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleAddToCart(),
                                                        disabled: !canPurchase || addingToCart,
                                                        className: "h-10 w-full rounded-full bg-[#FFD814] text-sm font-medium text-[#0F1111] transition hover:bg-[#F7CA00] disabled:cursor-not-allowed disabled:opacity-60",
                                                        children: addingToCart ? "Adding..." : "Add to Cart"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 898,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleBuyNow,
                                                        disabled: !canPurchase || addingToCart,
                                                        className: "h-10 w-full rounded-full bg-[#FFA41C] text-sm font-medium text-[#0F1111] transition hover:bg-[#FA8900] disabled:cursor-not-allowed disabled:opacity-60",
                                                        children: addingToCart ? "Adding..." : "Buy Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 905,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleToggleWishlist,
                                                        disabled: togglingWishlist,
                                                        className: `flex h-10 w-full items-center justify-center gap-1.5 rounded-full border text-sm font-medium transition disabled:opacity-60 ${liked ? "border-[#E47911] bg-[#FFF8F0] text-[#E47911]" : "border-gray-300 text-[#0F1111] hover:bg-gray-50"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                size: 14,
                                                                fill: liked ? "currentColor" : "none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 921,
                                                                columnNumber: 21
                                                            }, this),
                                                            togglingWishlist ? "Please wait..." : liked ? "Added to Wish List" : "Add to Wish List"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 912,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 897,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                                className: "my-4 border-gray-200"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 930,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#565959]",
                                                        children: [
                                                            "Delivered by",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#0F1111]",
                                                                children: "Amazon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 935,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 933,
                                                        columnNumber: 19
                                                    }, this),
                                                    product.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#565959]",
                                                        children: [
                                                            "Sold by ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#007185]",
                                                                children: product.brand
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 939,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 938,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#565959]",
                                                        children: [
                                                            "Payment",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#007185]",
                                                                children: "Secure transaction"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 944,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 942,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 932,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                        lineNumber: 851,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                    lineNumber: 850,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                            lineNumber: 566,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-0 left-0 z-50 flex w-full gap-3 border-t border-gray-200 bg-white p-3 backdrop-blur-md lg:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleAddToCart(),
                                disabled: !canPurchase || addingToCart,
                                className: "flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-black text-sm font-medium text-white transition hover:bg-zinc-800 disabled:opacity-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                        lineNumber: 958,
                                        columnNumber: 13
                                    }, this),
                                    addingToCart ? "Adding..." : "Add to Cart"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                lineNumber: 953,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleBuyNow,
                                disabled: !canPurchase || addingToCart,
                                className: "h-12 flex-1 rounded-xl bg-[#FF9900] text-sm font-medium text-black transition hover:bg-[#e68a00] disabled:opacity-60",
                                children: addingToCart ? "Adding..." : "Buy Now"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                lineNumber: 961,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                        lineNumber: 952,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                lineNumber: 564,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ProductDetailpage$2f$CartSidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: cartOpen,
                onClose: ()=>setCartOpen(false),
                cartItems: cartPreviewItems
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                lineNumber: 971,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/demyProductDetails/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DummyVariantTestPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ProductDetailpage$2f$productdetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ProductDetailpage/productdetails.js [app-ssr] (ecmascript)");
"use client";
;
;
const rawDummyProduct = {
    productName: "Titan Neo Analog Watch",
    itemName: "Titan Neo Analog Watch for Men",
    productUrl: "titan-neo-analog-watch-men",
    categoryId: "6a509c70a781e80ab7911079",
    vendorId: "6a462754c6c08add7b774f63",
    brandName: "Titan",
    sku: "TITAN-NEO",
    description: {
        productDescription: "Titan Neo Analog Watch for Men with premium stainless steel strap, quartz movement, mineral glass protection, and water resistance. Perfect for formal and casual occasions.",
        bulletPoints: [
            "Quartz Analog Movement",
            "Premium Stainless Steel Strap",
            "Round Dial",
            "Mineral Glass Protection",
            "30M Water Resistant",
            "Date Display",
            "2 Years Manufacturer Warranty",
            "Suitable for Daily Wear"
        ]
    },
    images: [
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1200&auto=format&fit=crop"
    ],
    isActive: true,
    status: "draft",
    tags: [
        "watch",
        "titan",
        "analog",
        "men",
        "fashion"
    ],
    attributes: [
        {
            name: "Brand",
            code: "brand",
            value: "Titan",
            type: "dropdown",
            unit: ""
        },
        {
            name: "Model",
            code: "model",
            value: "Neo",
            type: "text",
            unit: ""
        },
        {
            name: "Gender",
            code: "gender",
            value: "Men",
            type: "dropdown",
            unit: ""
        },
        {
            name: "Display Type",
            code: "display_type",
            value: "Analog",
            type: "dropdown",
            unit: ""
        },
        {
            name: "Movement",
            code: "movement",
            value: "Quartz",
            type: "dropdown",
            unit: ""
        },
        {
            name: "Case Material",
            code: "case_material",
            value: "Stainless Steel",
            type: "dropdown",
            unit: ""
        },
        {
            name: "Strap Material",
            code: "strap_material",
            value: "Stainless Steel",
            type: "dropdown",
            unit: ""
        },
        {
            name: "Dial Shape",
            code: "dial_shape",
            value: "Round",
            type: "dropdown",
            unit: ""
        },
        {
            name: "Dial Size",
            code: "dial_size",
            value: "42",
            type: "number",
            unit: "mm"
        },
        {
            name: "Water Resistance",
            code: "water_resistance",
            value: "30",
            type: "number",
            unit: "m"
        },
        {
            name: "Warranty",
            code: "warranty",
            value: "2 Years",
            type: "text",
            unit: ""
        }
    ],
    variants: [
        {
            sku: "TITAN-NEO-SLV",
            productUrl: "titan-neo-analog-watch-silver",
            mrp: 4999,
            sellingPrice: 4499,
            salePrice: 3999,
            handlingTime: 2,
            itemCondition: "New",
            images: [
                "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop"
            ],
            attributes: [
                {
                    name: "Color",
                    code: "color",
                    value: "Silver"
                }
            ],
            description: {
                productDescription: "Silver variant classic stainless steel finish ke saath aata hai, jo formal aur office wear ke liye perfect hai.",
                bulletPoints: [
                    "Silver Stainless Steel Finish",
                    "Quartz Analog Movement",
                    "Round Dial with Mineral Glass",
                    "30M Water Resistant",
                    "Best suited for Formal Wear"
                ]
            },
            inventory: {
                stock: 20,
                maxQty: 3,
                isActive: true
            }
        },
        {
            sku: "TITAN-NEO-GLD",
            productUrl: "titan-neo-analog-watch-gold",
            mrp: 5499,
            sellingPrice: 4999,
            salePrice: 4699,
            handlingTime: 2,
            itemCondition: "New",
            images: [
                "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop"
            ],
            attributes: [
                {
                    name: "Color",
                    code: "color",
                    value: "Gold"
                }
            ],
            description: {
                productDescription: "Gold variant ek premium aur royal look deta hai, jo festive aur special occasions ke liye ideal hai.",
                bulletPoints: [
                    "Premium Gold-Tone Finish",
                    "Quartz Analog Movement",
                    "Round Dial with Mineral Glass",
                    "30M Water Resistant",
                    "Great for Festive and Special Occasions"
                ]
            },
            inventory: {
                stock: 15,
                maxQty: 3,
                isActive: true
            }
        },
        {
            sku: "TITAN-NEO-RGD",
            productUrl: "titan-neo-analog-watch-rose-gold",
            mrp: 5999,
            sellingPrice: 5499,
            salePrice: 5199,
            handlingTime: 3,
            itemCondition: "New",
            images: [
                "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop"
            ],
            attributes: [
                {
                    name: "Color",
                    code: "color",
                    value: "Rose Gold"
                }
            ],
            description: {
                productDescription: "Rose Gold variant modern aur trendy look ke liye best hai, jo casual aur party wear dono mein achha lagta hai.",
                bulletPoints: [
                    "Trendy Rose Gold Finish",
                    "Quartz Analog Movement",
                    "Round Dial with Mineral Glass",
                    "30M Water Resistant",
                    "Perfect for Casual and Party Wear"
                ]
            },
            inventory: {
                stock: 10,
                maxQty: 3,
                isActive: true
            }
        }
    ]
};
function getAttributeValue(attributes, code) {
    if (!Array.isArray(attributes)) {
        return "";
    }
    const normalizedCode = String(code || "").trim().toLowerCase();
    const matchedAttribute = attributes.find((attribute)=>{
        const attributeCode = String(attribute?.code || "").trim().toLowerCase();
        const attributeName = String(attribute?.name || "").trim().toLowerCase();
        return attributeCode === normalizedCode || attributeName === normalizedCode;
    });
    return matchedAttribute?.value || "";
}
function normalizeDummyProduct(raw) {
    if (!raw) {
        return null;
    }
    const variants = Array.isArray(raw.variants) ? raw.variants.map((variant, index)=>{
        const variantId = variant?._id || variant?.id || variant?.sku || `dummy-variant-${index}`;
        const color = getAttributeValue(variant?.attributes, "color");
        const size = getAttributeValue(variant?.attributes, "size");
        const finalPrice = variant?.salePrice ?? variant?.sellingPrice ?? variant?.price ?? variant?.mrp ?? 0;
        const stock = Number(variant?.inventory?.stock ?? 0);
        const maxQuantity = variant?.inventory?.maxQty ?? variant?.maxQuantity ?? null;
        return {
            ...variant,
            _id: variantId,
            id: variantId,
            color,
            size,
            price: Number(finalPrice),
            sellingPrice: Number(variant?.sellingPrice ?? variant?.salePrice ?? finalPrice),
            salePrice: Number(variant?.salePrice ?? finalPrice),
            mrp: Number(variant?.mrp ?? 0),
            stock,
            maxQuantity,
            images: Array.isArray(variant?.images) ? variant.images : [],
            attributes: Array.isArray(variant?.attributes) ? variant.attributes : [],
            description: variant?.description || {
                productDescription: "",
                bulletPoints: []
            },
            inventory: {
                stock,
                maxQty: maxQuantity,
                isActive: variant?.inventory?.isActive ?? true
            },
            vendorId: variant?.vendorId || raw?.vendorId || null
        };
    }) : [];
    const firstVariant = variants[0] || null;
    const productId = raw?._id || raw?.id || raw?.productUrl || raw?.sku || "dummy-titan-neo";
    const productName = raw?.productName || raw?.itemName || raw?.name || "Product";
    const brandName = raw?.brandName || raw?.brand || getAttributeValue(raw?.attributes, "brand");
    return {
        ...raw,
        _id: productId,
        id: productId,
        productName,
        itemName: raw?.itemName || productName,
        name: productName,
        brand: brandName,
        brandName,
        vendorId: raw?.vendorId || null,
        images: Array.isArray(raw?.images) ? raw.images : [],
        thumbnailImage: raw?.thumbnailImage || raw?.images?.[0] || firstVariant?.images?.[0] || "",
        attributes: Array.isArray(raw?.attributes) ? raw.attributes : [],
        description: raw?.description || {
            productDescription: "",
            bulletPoints: []
        },
        variants,
        defaultVariant: firstVariant,
        price: Number(firstVariant?.price ?? 0),
        sellingPrice: Number(firstVariant?.sellingPrice ?? 0),
        salePrice: Number(firstVariant?.salePrice ?? firstVariant?.price ?? 0),
        mrp: Number(firstVariant?.mrp ?? 0),
        stock: Number(firstVariant?.stock ?? 0),
        maxQuantity: firstVariant?.maxQuantity ?? null
    };
}
const dummyProduct = normalizeDummyProduct(rawDummyProduct);
function DummyVariantTestPage() {
    if (!dummyProduct) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "40px",
                textAlign: "center"
            },
            children: "Product data not found"
        }, void 0, false, {
            fileName: "[project]/src/app/demyProductDetails/page.js",
            lineNumber: 465,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ProductDetailpage$2f$productdetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        initialProduct: dummyProduct,
        initialProductId: dummyProduct.id
    }, void 0, false, {
        fileName: "[project]/src/app/demyProductDetails/page.js",
        lineNumber: 477,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_13kk931._.js.map