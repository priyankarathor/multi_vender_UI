(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/ProductDetailpage/CartSidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.mjs [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/cart/cart.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CartSidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(73);
    if ($[0] !== "5ac86f1897926ea32144bbcfe51b0fe05d32181e7d9ca974d20c7c0a9c02e1ae") {
        for(let $i = 0; $i < 73; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5ac86f1897926ea32144bbcfe51b0fe05d32181e7d9ca974d20c7c0a9c02e1ae";
    }
    const { isOpen, onClose } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[2] !== isOpen) {
        t2 = ({
            "CartSidebar[useEffect()]": ()=>{
                if (!isOpen) {
                    return;
                }
                let active = true;
                setLoading(true);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNormalizedCartItems"])().then({
                    "CartSidebar[useEffect() > (anonymous)()]": (items)=>{
                        if (active) {
                            setCartItems(items);
                        }
                    }
                }["CartSidebar[useEffect() > (anonymous)()]"]).catch(_CartSidebarUseEffectAnonymous).finally({
                    "CartSidebar[useEffect() > (anonymous)()]": ()=>active && setLoading(false)
                }["CartSidebar[useEffect() > (anonymous)()]"]);
                return ()=>{
                    active = false;
                };
            }
        })["CartSidebar[useEffect()]"];
        t3 = [
            isOpen
        ];
        $[2] = isOpen;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const getQuantity = _CartSidebarGetQuantity;
    const getTitle = _CartSidebarGetTitle;
    const getImage = _CartSidebarGetImage;
    const getPrice = _CartSidebarGetPrice;
    const getVariantText = _CartSidebarGetVariantText;
    let t10;
    let t11;
    let t12;
    let t13;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== cartItems || $[6] !== isOpen || $[7] !== loading || $[8] !== onClose) {
        let t14;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = ({
                "CartSidebar[cartItems.reduce()]": (acc, item_4)=>acc + getPrice(item_4) * getQuantity(item_4)
            })["CartSidebar[cartItems.reduce()]"];
            $[19] = t14;
        } else {
            t14 = $[19];
        }
        const subtotal = cartItems.reduce(t14, 0);
        const groupedByVendor = cartItems.reduce(_CartSidebarCartItemsReduce, {});
        const t15 = `fixed inset-0 bg-black/30 z-[100] transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`;
        if ($[20] !== onClose || $[21] !== t15) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: t15
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 92,
                columnNumber: 13
            }, this);
            $[20] = onClose;
            $[21] = t15;
            $[22] = t13;
        } else {
            t13 = $[22];
        }
        t10 = `fixed top-0 right-0 h-full w-full sm:w-[340px] bg-white z-[110] shadow-2xl transition-all duration-300 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`;
        let t16;
        let t17;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-9 h-9 rounded-lg bg-[#FFD814] flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                    size: 17
                }, void 0, false, {
                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                    lineNumber: 103,
                    columnNumber: 95
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 103,
                columnNumber: 13
            }, this);
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[15px] font-semibold leading-none",
                children: "Cart Added"
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 104,
                columnNumber: 13
            }, this);
            $[23] = t16;
            $[24] = t17;
        } else {
            t16 = $[23];
            t17 = $[24];
        }
        const t18 = cartItems.length !== 1 ? "s" : "";
        let t19;
        if ($[25] !== cartItems.length || $[26] !== t18) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5",
                children: [
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            t17,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-gray-500 mt-1",
                                children: [
                                    cartItems.length,
                                    " item",
                                    t18
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                lineNumber: 114,
                                columnNumber: 71
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                        lineNumber: 114,
                        columnNumber: 61
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 114,
                columnNumber: 13
            }, this);
            $[25] = cartItems.length;
            $[26] = t18;
            $[27] = t19;
        } else {
            t19 = $[27];
        }
        let t20;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                size: 17
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 123,
                columnNumber: 13
            }, this);
            $[28] = t20;
        } else {
            t20 = $[28];
        }
        let t21;
        if ($[29] !== onClose) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center",
                children: t20
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 130,
                columnNumber: 13
            }, this);
            $[29] = onClose;
            $[30] = t21;
        } else {
            t21 = $[30];
        }
        if ($[31] !== t19 || $[32] !== t21) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[64px] px-4 border-b border-gray-100 flex items-center justify-between",
                children: [
                    t19,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 137,
                columnNumber: 13
            }, this);
            $[31] = t19;
            $[32] = t21;
            $[33] = t11;
        } else {
            t11 = $[33];
        }
        const t22 = "flex-1 overflow-y-auto bg-[#fafafa] p-3 space-y-4";
        let t23;
        if ($[34] !== loading) {
            t23 = loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-[12px] text-gray-500 mt-4",
                children: "Loading cart..."
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 147,
                columnNumber: 24
            }, this);
            $[34] = loading;
            $[35] = t23;
        } else {
            t23 = $[35];
        }
        let t24;
        if ($[36] !== cartItems.length || $[37] !== loading) {
            t24 = !loading && cartItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-[12px] text-gray-500 mt-4",
                children: "Cart is empty"
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 155,
                columnNumber: 51
            }, this);
            $[36] = cartItems.length;
            $[37] = loading;
            $[38] = t24;
        } else {
            t24 = $[38];
        }
        const t25 = !loading && Object.entries(groupedByVendor).map({
            "CartSidebar[(anonymous)()]": (t26)=>{
                const [vendorKey_0, vendorItems] = t26;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 text-[11px] font-medium text-gray-500 px-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                    lineNumber: 165,
                                    columnNumber: 149
                                }, this),
                                vendorKey_0 === "unknown" ? "Vendor" : `Sold by #${vendorKey_0.slice(-6)}`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                            lineNumber: 165,
                            columnNumber: 63
                        }, this),
                        vendorItems.map({
                            "CartSidebar[(anonymous)() > vendorItems.map()]": (item_6, index)=>{
                                const quantity = getQuantity(item_6);
                                const title = getTitle(item_6);
                                const image = getImage(item_6);
                                const price = getPrice(item_6);
                                const variantText = getVariantText(item_6);
                                const lineTotal = price * quantity;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-gray-100 rounded-xl p-2.5 flex gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[64px] h-[64px] bg-[#f5f5f5] rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: image,
                                                alt: title,
                                                className: "w-full h-full object-contain p-1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                lineNumber: 173,
                                                columnNumber: 249
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                            lineNumber: 173,
                                            columnNumber: 127
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[12.5px] font-medium text-gray-800 line-clamp-2 leading-[17px]",
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                    lineNumber: 173,
                                                    columnNumber: 365
                                                }, this),
                                                variantText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-gray-500 mt-1 truncate",
                                                    children: variantText
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                    lineNumber: 173,
                                                    columnNumber: 477
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[15px] font-bold text-gray-900",
                                                                    children: [
                                                                        "Rs.",
                                                                        lineTotal.toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                                    lineNumber: 173,
                                                                    columnNumber: 611
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-gray-500",
                                                                    children: [
                                                                        "Rs.",
                                                                        price.toLocaleString(),
                                                                        " x ",
                                                                        quantity
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                                    lineNumber: 173,
                                                                    columnNumber: 697
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                            lineNumber: 173,
                                                            columnNumber: 606
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-2 py-[3px] rounded-md bg-gray-100 text-[10px] font-medium text-gray-700",
                                                            children: [
                                                                "Qty ",
                                                                quantity
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                            lineNumber: 173,
                                                            columnNumber: 788
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                                    lineNumber: 173,
                                                    columnNumber: 550
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                            lineNumber: 173,
                                            columnNumber: 333
                                        }, this)
                                    ]
                                }, item_6._id || index, true, {
                                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                                    lineNumber: 173,
                                    columnNumber: 22
                                }, this);
                            }
                        }["CartSidebar[(anonymous)() > vendorItems.map()]"])
                    ]
                }, vendorKey_0, true, {
                    fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                    lineNumber: 165,
                    columnNumber: 16
                }, this);
            }
        }["CartSidebar[(anonymous)()]"]);
        if ($[39] !== t22 || $[40] !== t23 || $[41] !== t24 || $[42] !== t25) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t22,
                children: [
                    t23,
                    t24,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 179,
                columnNumber: 13
            }, this);
            $[39] = t22;
            $[40] = t23;
            $[41] = t24;
            $[42] = t25;
            $[43] = t12;
        } else {
            t12 = $[43];
        }
        t9 = "border-t border-gray-100 bg-white p-3 space-y-3";
        t7 = "flex items-center justify-between";
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[12px] text-gray-500",
                children: "Subtotal"
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
                lineNumber: 191,
                columnNumber: 12
            }, this);
            $[44] = t8;
        } else {
            t8 = $[44];
        }
        t4 = "text-[20px] font-bold";
        t5 = "Rs.";
        t6 = subtotal.toLocaleString();
        $[5] = cartItems;
        $[6] = isOpen;
        $[7] = loading;
        $[8] = onClose;
        $[9] = t10;
        $[10] = t11;
        $[11] = t12;
        $[12] = t13;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
        $[18] = t9;
    } else {
        t10 = $[9];
        t11 = $[10];
        t12 = $[11];
        t13 = $[12];
        t4 = $[13];
        t5 = $[14];
        t6 = $[15];
        t7 = $[16];
        t8 = $[17];
        t9 = $[18];
    }
    let t14;
    if ($[45] !== t4 || $[46] !== t5 || $[47] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t4,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[45] = t4;
        $[46] = t5;
        $[47] = t6;
        $[48] = t14;
    } else {
        t14 = $[48];
    }
    let t15;
    if ($[49] !== t14 || $[50] !== t7 || $[51] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[49] = t14;
        $[50] = t7;
        $[51] = t8;
        $[52] = t15;
    } else {
        t15 = $[52];
    }
    let t16;
    if ($[53] !== router) {
        t16 = ({
            "CartSidebar[<button>.onClick]": ()=>router.push("/Addtocard")
        })["CartSidebar[<button>.onClick]"];
        $[53] = router;
        $[54] = t16;
    } else {
        t16 = $[54];
    }
    let t17;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[55] = t17;
    } else {
        t17 = $[55];
    }
    let t18;
    if ($[56] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t16,
            className: "w-full h-11 rounded-xl bg-[#FFD814] hover:bg-[#F7CA00] transition text-[13px] font-semibold flex items-center justify-center gap-2",
            children: [
                "View Cart ",
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[56] = t16;
        $[57] = t18;
    } else {
        t18 = $[57];
    }
    let t19;
    if ($[58] !== onClose) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "w-full h-10 rounded-xl border border-gray-200 hover:bg-gray-50 transition text-[13px] font-medium",
            children: "Continue Shopping"
        }, void 0, false, {
            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[58] = onClose;
        $[59] = t19;
    } else {
        t19 = $[59];
    }
    let t20;
    if ($[60] !== t15 || $[61] !== t18 || $[62] !== t19 || $[63] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t15,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[60] = t15;
        $[61] = t18;
        $[62] = t19;
        $[63] = t9;
        $[64] = t20;
    } else {
        t20 = $[64];
    }
    let t21;
    if ($[65] !== t10 || $[66] !== t11 || $[67] !== t12 || $[68] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t12,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ProductDetailpage/CartSidebar.js",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[65] = t10;
        $[66] = t11;
        $[67] = t12;
        $[68] = t20;
        $[69] = t21;
    } else {
        t21 = $[69];
    }
    let t22;
    if ($[70] !== t13 || $[71] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t13,
                t21
            ]
        }, void 0, true);
        $[70] = t13;
        $[71] = t21;
        $[72] = t22;
    } else {
        t22 = $[72];
    }
    return t22;
}
_s(CartSidebar, "R22qm2IR36y7mEHZuBV/HSoS/+E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CartSidebar;
function _CartSidebarCartItemsReduce(acc_0, item_5) {
    const vendorKey = item_5.resolvedVendorId || "unknown";
    if (!acc_0[vendorKey]) {
        acc_0[vendorKey] = [];
    }
    acc_0[vendorKey].push(item_5);
    return acc_0;
}
function _CartSidebarGetVariantText(item_3) {
    return [
        item_3.storage || item_3.sku || item_3.variantId?.sku,
        item_3.color
    ].filter(Boolean).join(" - ");
}
function _CartSidebarGetPrice(item_2) {
    return Number(item_2.price || item_2.variantId?.offer?.salePrice || item_2.variantId?.offer?.sellingPrice || 0);
}
function _CartSidebarGetImage(item_1) {
    return item_1.image || item_1.variantId?.images?.[0] || item_1.pid?.images?.[0] || "https://via.placeholder.com/150";
}
function _CartSidebarGetTitle(item_0) {
    return item_0.title || item_0.name || item_0.pid?.productName || item_0.pid?.itemName || item_0.variantId?.sku || "Untitled Product";
}
function _CartSidebarGetQuantity(item) {
    return item.qty || item.quantity || 1;
}
function _CartSidebarUseEffectAnonymous(err) {
    return console.error("CartSidebar: fetch failed", err);
}
var _c;
__turbopack_context__.k.register(_c, "CartSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/apis/products/products.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/baseurl/baseurl.js [app-client] (ecmascript)");
;
const PRODUCT_API_URL = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}/products`;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/PageSkeleton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const skeletonClass = "animate-skeleton rounded bg-gray-200";
function SkeletonBlock(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `${skeletonClass} ${className}`;
    let t3;
    if ($[1] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    return t3;
}
_c = SkeletonBlock;
function ProductCardSkeleton() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
            className: "aspect-square w-full rounded-none"
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden rounded-2xl border border-gray-200 bg-white",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-4 w-11/12"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 43,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-4 w-8/12"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 43,
                            columnNumber: 163
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-3 w-20"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 43,
                            columnNumber: 203
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-5 w-24"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 43,
                            columnNumber: 241
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-9 w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 43,
                            columnNumber: 279
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 43,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c1 = ProductCardSkeleton;
function ProductGridSkeleton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01";
    }
    const { count: t1 } = t0;
    const count = t1 === undefined ? 8 : t1;
    let t2;
    if ($[1] !== count) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-5 p-4 md:grid-cols-3 lg:grid-cols-4",
            children: Array.from({
                length: count
            }).map(_ProductGridSkeletonAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[1] = count;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    return t2;
}
_c2 = ProductGridSkeleton;
function _ProductGridSkeletonAnonymous(_, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCardSkeleton, {}, index, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 75,
        columnNumber: 10
    }, this);
}
function ProductDetailSkeleton() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: Array.from({
                    length: 5
                }).map(_ProductDetailSkeletonAnonymous)
            }, void 0, false, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 88,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
            className: "h-[360px] w-full sm:h-[460px] lg:h-[560px]"
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex gap-2 lg:hidden",
                    children: Array.from({
                        length: 5
                    }).map(_ProductDetailSkeletonAnonymous2)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 100,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
            className: "h-4 w-44"
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
            className: "h-7 w-full"
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
            className: "h-7 w-10/12"
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
            className: "h-4 w-40"
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-y border-gray-200 py-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                    className: "h-8 w-36"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 128,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                    className: "mt-3 h-4 w-52"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 128,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-4 gap-3 border-b border-gray-200 pb-5",
            children: Array.from({
                length: 4
            }).map(_ProductDetailSkeletonAnonymous3)
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
            className: "h-5 w-32"
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 139,
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
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: Array.from({
                length: 4
            }).map(_ProductDetailSkeletonAnonymous4)
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
            className: "h-5 w-40"
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t11;
    } else {
        t10 = $[11];
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t9,
                t10,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: Array.from({
                        length: 5
                    }).map(_ProductDetailSkeletonAnonymous5)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 161,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-white pb-28 lg:pb-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[1550px] px-3 py-4 sm:px-4 lg:py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-6 lg:grid-cols-[52px_minmax(480px,5fr)_minmax(360px,4fr)_minmax(280px,3fr)] lg:gap-2 xl:gap-3",
                    children: [
                        t0,
                        t2,
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 rounded-lg border border-gray-300 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-8 w-32"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 170,
                                        columnNumber: 347
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-4 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 170,
                                        columnNumber: 385
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-6 w-24"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 170,
                                        columnNumber: 425
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-9 w-28 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 170,
                                        columnNumber: 463
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-10 w-full rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 170,
                                        columnNumber: 509
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-10 w-full rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 170,
                                        columnNumber: 563
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                        className: "h-10 w-full rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/PageSkeleton.js",
                                        lineNumber: 170,
                                        columnNumber: 617
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 170,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 170,
                            columnNumber: 277
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 170,
                    columnNumber: 132
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 170,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    return t13;
}
_c3 = ProductDetailSkeleton;
function _ProductDetailSkeletonAnonymous5(__3, index_3) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
        className: "h-4 w-full"
    }, index_3, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 178,
        columnNumber: 10
    }, this);
}
function _ProductDetailSkeletonAnonymous4(__2, index_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
        className: "h-10 w-20 rounded-md"
    }, index_2, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 181,
        columnNumber: 10
    }, this);
}
function _ProductDetailSkeletonAnonymous3(__1, index_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                className: "mx-auto h-8 w-8 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 184,
                columnNumber: 51
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                className: "h-3 w-full"
            }, void 0, false, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 184,
                columnNumber: 109
            }, this)
        ]
    }, index_1, true, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 184,
        columnNumber: 10
    }, this);
}
function _ProductDetailSkeletonAnonymous2(__0, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
        className: "h-14 w-14 min-w-14 rounded"
    }, index_0, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 187,
        columnNumber: 10
    }, this);
}
function _ProductDetailSkeletonAnonymous(_, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
        className: "h-12 w-12 rounded"
    }, index, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 190,
        columnNumber: 10
    }, this);
}
function CartSkeleton() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-gray-200 bg-white p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-7 w-48"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 202,
                            columnNumber: 102
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "mt-3 h-4 w-24"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 202,
                            columnNumber: 140
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 202,
                    columnNumber: 37
                }, this),
                Array.from({
                    length: 3
                }).map(_CartSkeletonAnonymous)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 202,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#f5f5f5] px-3 py-6 md:px-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_340px]",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-28 w-full rounded-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 211,
                                columnNumber: 173
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                                className: "h-80 w-full rounded-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/PageSkeleton.js",
                                lineNumber: 211,
                                columnNumber: 226
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/PageSkeleton.js",
                        lineNumber: 211,
                        columnNumber: 146
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 211,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 211,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c4 = CartSkeleton;
function _CartSkeletonAnonymous(_, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-gray-200 bg-white p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                    className: "h-28 w-28 flex-shrink-0 rounded-xl"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 219,
                    columnNumber: 115
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-5 w-10/12"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 219,
                            columnNumber: 213
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-3 w-24"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 219,
                            columnNumber: 254
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-4 w-40"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 219,
                            columnNumber: 292
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                            className: "h-6 w-32"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/PageSkeleton.js",
                            lineNumber: 219,
                            columnNumber: 330
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 219,
                    columnNumber: 179
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 219,
            columnNumber: 87
        }, this)
    }, index, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 219,
        columnNumber: 10
    }, this);
}
function PageSkeleton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0bf288cd7da093ca58f1235cdb7470daf7a6556d181573dd53c7bc717c444d01";
    }
    const { type: t1 } = t0;
    const type = t1 === undefined ? "home" : t1;
    if (type === "product") {
        let t2;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductDetailSkeleton, {}, void 0, false, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 236,
                columnNumber: 12
            }, this);
            $[1] = t2;
        } else {
            t2 = $[1];
        }
        return t2;
    }
    if (type === "cart") {
        let t2;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartSkeleton, {}, void 0, false, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 246,
                columnNumber: 12
            }, this);
            $[2] = t2;
        } else {
            t2 = $[2];
        }
        return t2;
    }
    if (type === "grid") {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-zinc-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductGridSkeleton, {}, void 0, false, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 256,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 256,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
            className: "h-[260px] w-full rounded-2xl sm:h-[360px]"
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 265,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 grid grid-cols-2 gap-4 md:grid-cols-4",
            children: Array.from({
                length: 4
            }).map(_PageSkeletonAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 272,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
                    className: "h-7 w-48"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 281,
                    columnNumber: 32
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductGridSkeleton, {
                    count: 8
                }, void 0, false, {
                    fileName: "[project]/src/app/component/PageSkeleton.js",
                    lineNumber: 281,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 281,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-zinc-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[1450px] px-4 py-6",
                children: [
                    t2,
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/PageSkeleton.js",
                lineNumber: 288,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/component/PageSkeleton.js",
            lineNumber: 288,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_c5 = PageSkeleton;
function _PageSkeletonAnonymous(_, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBlock, {
        className: "h-32 rounded-2xl"
    }, index, false, {
        fileName: "[project]/src/app/component/PageSkeleton.js",
        lineNumber: 297,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "SkeletonBlock");
__turbopack_context__.k.register(_c1, "ProductCardSkeleton");
__turbopack_context__.k.register(_c2, "ProductGridSkeleton");
__turbopack_context__.k.register(_c3, "ProductDetailSkeleton");
__turbopack_context__.k.register(_c4, "CartSkeleton");
__turbopack_context__.k.register(_c5, "PageSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ProductDetailpage/productdetails.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ProductDetailpage$2f$CartSidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ProductDetailpage/CartSidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/products/products.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/cart/cart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/customer/customer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/wishlist/wishlist.js [app-client] (ecmascript)"); // <-- ADDED
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$PageSkeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/PageSkeleton.js [app-client] (ecmascript)");
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
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const routeId = params?.id || initialProductId;
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProduct);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!initialProduct);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedVariantId, setSelectedVariantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedOptions, setSelectedOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [brokenImageUrls, setBrokenImageUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [cartOpen, setCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cartPreviewItems, setCartPreviewItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [addingToCart, setAddingToCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wishlistItems, setWishlistItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [storageReady, setStorageReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [togglingWishlist, setTogglingWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // <-- ADDED
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailsPage.useEffect": ()=>{
            let active = true;
            const loadProduct = {
                "ProductDetailsPage.useEffect.loadProduct": async ()=>{
                    if (!routeId) {
                        setProduct(null);
                        setError("Product not found.");
                        setLoading(false);
                        return;
                    }
                    try {
                        setLoading(true);
                        const apiProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProductById"])(routeId);
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
                }
            }["ProductDetailsPage.useEffect.loadProduct"];
            if (initialProduct && initialProduct.id === routeId && initialProduct.variants?.length > 0) {
                return;
            }
            loadProduct();
            return ({
                "ProductDetailsPage.useEffect": ()=>{
                    active = false;
                }
            })["ProductDetailsPage.useEffect"];
        }
    }["ProductDetailsPage.useEffect"], [
        initialProduct,
        routeId
    ]);
    const variants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailsPage.useMemo[variants]": ()=>product?.variants || []
    }["ProductDetailsPage.useMemo[variants]"], [
        product
    ]);
    const selectedVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailsPage.useMemo[selectedVariant]": ()=>{
            if (!product) return null;
            return variants.find({
                "ProductDetailsPage.useMemo[selectedVariant]": (variant)=>variant._id === selectedVariantId
            }["ProductDetailsPage.useMemo[selectedVariant]"]) || variants[0] || product.defaultVariant || null;
        }
    }["ProductDetailsPage.useMemo[selectedVariant]"], [
        product,
        selectedVariantId,
        variants
    ]);
    const galleryImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailsPage.useMemo[galleryImages]": ()=>{
            if (!product) return [];
            const rawImages = [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImage"])(product, selectedVariant),
                ...selectedVariant?.images || [],
                product.thumbnailImage,
                ...product.images || []
            ].filter(Boolean);
            const resolved = rawImages.filter(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidProductImageUrl"]);
            return [
                ...new Set(resolved)
            ].filter({
                "ProductDetailsPage.useMemo[galleryImages]": (image)=>image && !brokenImageUrls.includes(image)
            }["ProductDetailsPage.useMemo[galleryImages]"]);
        }
    }["ProductDetailsPage.useMemo[galleryImages]"], [
        brokenImageUrls,
        product,
        selectedVariant
    ]);
    const activeImage = galleryImages.includes(selectedImage) ? selectedImage : galleryImages[0] || "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailsPage.useEffect": ()=>{
            const timer = window.setTimeout({
                "ProductDetailsPage.useEffect.timer": ()=>{
                    const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
                    setCartItems(Array.isArray(savedCartItems) ? savedCartItems : []);
                    setStorageReady(true);
                }
            }["ProductDetailsPage.useEffect.timer"], 0);
            return ({
                "ProductDetailsPage.useEffect": ()=>window.clearTimeout(timer)
            })["ProductDetailsPage.useEffect"];
        }
    }["ProductDetailsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailsPage.useEffect": ()=>{
            let active_0 = true;
            const loadWishlistFromBackend = {
                "ProductDetailsPage.useEffect.loadWishlistFromBackend": async ()=>{
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWishlistByCidOrDevice"])({
                            cid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])()
                        });
                        const items = Array.isArray(res?.data?.data) ? res.data.data : [];
                        if (active_0) setWishlistItems(items);
                    } catch (err_0) {
                        if (active_0) setWishlistItems([]);
                    }
                }
            }["ProductDetailsPage.useEffect.loadWishlistFromBackend"];
            loadWishlistFromBackend();
            window.addEventListener("wishlistUpdated", loadWishlistFromBackend);
            return ({
                "ProductDetailsPage.useEffect": ()=>{
                    active_0 = false;
                    window.removeEventListener("wishlistUpdated", loadWishlistFromBackend);
                }
            })["ProductDetailsPage.useEffect"];
        }
    }["ProductDetailsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailsPage.useEffect": ()=>{
            if (!storageReady) return;
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            window.dispatchEvent(new Event("cartUpdated"));
        }
    }["ProductDetailsPage.useEffect"], [
        cartItems,
        storageReady
    ]);
    const price = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductPrice"])(product, selectedVariant);
    const mrp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductMrp"])(product, selectedVariant);
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
    const availableSizes = uniqueValues(selectedColor ? variants.filter((variant_0)=>variant_0.color === selectedColor) : variants, "size");
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
        setQuantity((prev_0)=>{
            if (effectiveMaxQuantity && prev_0 >= effectiveMaxQuantity) {
                return effectiveMaxQuantity;
            }
            return prev_0 + 1;
        });
    };
    const handleAddToCart = async (openCart = true)=>{
        if (!product || !canPurchase || addingToCart) return false;
        const variantKey = selectedVariant?._id || `${selectedColor || "default"}-${selectedSize || "default"}`;
        const cartId = `${product.id}-${variantKey}`;
        const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartDeviceId"])();
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
        setCartItems((prev_1)=>{
            const existing = prev_1.find((item_0)=>item_0.id === cartId);
            if (existing) {
                return prev_1.map((item_1)=>item_1.id === cartId ? {
                        ...item_1,
                        quantity: (item_1.quantity || 1) + safeQuantity,
                        qty: (item_1.qty || item_1.quantity || 1) + safeQuantity
                    } : item_1);
            }
            return [
                ...prev_1,
                cartProduct
            ];
        });
        try {
            let deviceCartItems = [];
            try {
                const deviceCartRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceCartItems"])();
                deviceCartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiCartList"])(deviceCartRes.data);
            } catch (deviceCartError) {
                console.warn("Device cart fetch failed before add", deviceCartError.response?.data?.message || deviceCartError.message);
            }
            const existingApiItem = [
                ...deviceCartItems
            ].reverse().find((item_2)=>{
                const itemProductId_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartProductId"])(item_2);
                const itemVariantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartVariantId"])(item_2);
                const sameProduct = String(itemProductId_0) === String(product.id);
                const sameVariant = !selectedVariant?._id || !itemVariantId || String(itemVariantId) === String(selectedVariant._id);
                return sameProduct && sameVariant;
            });
            const resolvedVendorId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartVendorId"])(existingApiItem) || product.vendorId || product.venderid || null;
            if (existingApiItem?._id) {
                const nextQty = (existingApiItem.qty || existingApiItem.quantity || 1) + safeQuantity;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCartItem"])(existingApiItem._id, {
                    cid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(),
                    pid: product.id,
                    divid: existingApiItem.divid || existingApiItem.deviceId || deviceId,
                    qty: nextQty,
                    variantId: selectedVariant?._id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartVariantId"])(existingApiItem),
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCartItem"])({
                    cid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(),
                    pid: product.id,
                    divid: deviceId,
                    vendorId: resolvedVendorId,
                    qty: safeQuantity,
                    variantId: selectedVariant?._id || null,
                    offerDiscount: discount || product.discount || 0
                });
                try {
                    const refreshedCartRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceCartItems"])();
                    const refreshedCartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiCartList"])(refreshedCartRes.data);
                    const addedApiItem = [
                        ...refreshedCartItems
                    ].reverse().find((item_3)=>{
                        const itemProductId_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartProductId"])(item_3);
                        const itemVariantId_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartVariantId"])(item_3);
                        const sameProduct_0 = String(itemProductId_1) === String(product.id);
                        const sameVariant_0 = !selectedVariant?._id || !itemVariantId_0 || String(itemVariantId_0) === String(selectedVariant._id);
                        return sameProduct_0 && sameVariant_0;
                    });
                    setCartPreviewItems([
                        addedApiItem || cartProduct
                    ]);
                } catch (deviceCartError_0) {
                    console.error("Device cart fetch failed", deviceCartError_0.response?.data?.message || deviceCartError_0.message);
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
        } catch (err_1) {
            setCartPreviewItems([
                cartProduct
            ]);
            console.error("Cart API failed", err_1.response?.data?.message || err_1.message);
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
        const existingItem = wishlistItems.find((item_4)=>{
            const itemProductId_2 = item_4.pid && typeof item_4.pid === "object" ? item_4.pid._id : item_4.pid;
            return itemProductId_2 === product.id;
        });
        const deviceId_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartDeviceId"])();
        setTogglingWishlist(true);
        try {
            if (existingItem) {
                setWishlistItems((prev_2)=>prev_2.filter((item_5)=>item_5._id !== existingItem._id));
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteWishlistItem"])(existingItem._id);
                window.dispatchEvent(new Event("wishlistUpdated"));
            } else {
                const res_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWishlistItem"])({
                    cid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(),
                    pid: product.id,
                    divid: deviceId_0,
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
                const created = res_0?.data?.data;
                if (created) {
                    setWishlistItems((prev_3)=>[
                            ...prev_3,
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
        } catch (err_2) {
            console.error("Wishlist API failed", err_2.response?.data?.message || err_2.message);
        } finally{
            setTogglingWishlist(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$PageSkeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductDetailSkeleton"], {}, void 0, false, {
            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
            lineNumber: 372,
            columnNumber: 12
        }, this);
    }
    if (error || !product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-[70vh] bg-white px-4 py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[1300px] text-center text-sm text-red-600",
                children: error || "Product not found."
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                lineNumber: 376,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
            lineNumber: 375,
            columnNumber: 12
        }, this);
    }
    const footerBadges = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
            label: "7 Days Replacement"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
            label: "Amazon Delivered"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
            label: "Secure Transaction"
        },
        ...product.brand ? [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                label: "Top Brand"
            }
        ] : []
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-white pb-28 lg:pb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-[1550px] px-3 py-4 sm:px-4 lg:py-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-6 lg:grid-cols-[52px_minmax(420px,4fr)_minmax(360px,4fr)_minmax(280px,3fr)] lg:gap-3 xl:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-1 lg:contents",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-2 h-fit lg:sticky lg:top-[11.5rem] lg:order-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden flex-col gap-2 lg:flex",
                                                children: galleryImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedImage(img),
                                                        className: `h-12 w-12 overflow-hidden rounded border bg-white transition ${activeImage === img ? "border-[#E47911] ring-1 ring-[#E47911]" : "border-gray-300 hover:border-[#E47911]"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: img,
                                                            alt: "",
                                                            className: "h-full w-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 402,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, img, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 401,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-1 h-fit lg:sticky lg:top-[11.5rem] lg:order-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex w-full items-start justify-start overflow-hidden",
                                                        children: activeImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: activeImage,
                                                            alt: product.name,
                                                            onError: ()=>setBrokenImageUrls((current_0)=>current_0.includes(activeImage) ? current_0 : [
                                                                        ...current_0,
                                                                        activeImage
                                                                    ]),
                                                            className: "block h-auto max-h-[620px] w-full max-w-[560px] object-contain object-left-top"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 410,
                                                            columnNumber: 36
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex min-h-[360px] w-full max-w-[560px] items-center justify-center rounded bg-gray-50 text-sm text-gray-400",
                                                            children: "No image available"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 410,
                                                            columnNumber: 297
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 409,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-1 pb-2 lg:hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 overflow-x-auto",
                                                            children: galleryImages.map((img_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setSelectedImage(img_0),
                                                                    className: `h-14 w-14 min-w-[56px] overflow-hidden rounded border bg-white ${activeImage === img_0 ? "border-[#E47911] ring-1 ring-[#E47911]" : "border-gray-300"}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: img_0,
                                                                        alt: "",
                                                                        className: "h-full w-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                        lineNumber: 418,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, img_0, false, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 417,
                                                                    columnNumber: 51
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 416,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 415,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 407,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-3 lg:pl-4 xl:pl-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-[#007185] hover:text-[#C7511F] hover:underline",
                                            children: product.brand ? `Visit the ${product.brand} Store` : product.sku
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-1 text-[20px] font-semibold leading-7 text-[#0F1111] sm:text-[24px] sm:leading-8",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 431,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-0.5 text-[#FFA41C]",
                                                    children: [
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5
                                                    ].map((item_6)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 14,
                                                            fill: "currentColor"
                                                        }, item_6, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 437,
                                                            columnNumber: 50
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 436,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-[#007185] hover:underline",
                                                    children: "4.5 ratings"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 439,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 435,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                            className: "my-4 border-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 pb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-baseline gap-2",
                                                    children: [
                                                        discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-medium text-[#CC0C39]",
                                                            children: [
                                                                "-",
                                                                discount,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 446,
                                                            columnNumber: 36
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[28px] font-medium text-[#0F1111]",
                                                            children: hasPrice ? `Rs.${price.toLocaleString()}` : "Price unavailable"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 449,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 445,
                                                    columnNumber: 17
                                                }, this),
                                                hasPrice && mrp > price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-[#565959]",
                                                    children: [
                                                        "M.R.P:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "line-through",
                                                            children: [
                                                                "Rs.",
                                                                mrp.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 456,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 454,
                                                    columnNumber: 45
                                                }, this),
                                                hasPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-[#565959]",
                                                    children: "Inclusive of all taxes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 459,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2 border-b border-gray-200 py-5 sm:grid-cols-4",
                                            children: footerBadges.map(({ icon: Icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 20,
                                                            className: "text-[#565959]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 469,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-1 text-[11px] leading-tight text-[#565959]",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 470,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 468,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 464,
                                            columnNumber: 15
                                        }, this),
                                        colors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 py-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-3 text-sm font-semibold text-[#0F1111]",
                                                    children: [
                                                        "Colour:",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 font-normal text-[#565959]",
                                                            children: selectedColor
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 480,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 478,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>variants.length > 0 ? chooseVariant((variant_1)=>variant_1.color === color) : chooseOption("color", color),
                                                            className: `relative rounded-md border px-4 py-2 text-sm font-medium transition ${selectedColor === color ? "border-2 border-[#E47911] bg-[#FFF8F0]" : "border-gray-300 hover:border-[#E47911]"}`,
                                                            children: [
                                                                color,
                                                                selectedColor === color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 14,
                                                                    className: "absolute -right-1.5 -top-1.5 rounded-full bg-[#E47911] p-0.5 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 487,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, color, true, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 485,
                                                            columnNumber: 42
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 484,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 477,
                                            columnNumber: 37
                                        }, this),
                                        sizes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 py-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-3 text-sm font-semibold text-[#0F1111]",
                                                    children: [
                                                        availableSizes.length > 0 ? "Size:" : "Storage:",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 font-normal text-[#565959]",
                                                            children: selectedSize
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 496,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 494,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: sizes.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>variants.length > 0 ? chooseVariant((variant_2)=>variant_2.size === size && (!selectedVariant?.color || variant_2.color === selectedVariant.color)) : chooseOption("size", size),
                                                            className: `min-w-[56px] rounded-md border px-3 py-2 text-sm font-medium transition ${selectedSize === size ? "border-2 border-[#E47911] bg-[#FFF8F0]" : "border-gray-300 hover:border-[#E47911]"}`,
                                                            children: size
                                                        }, size, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 501,
                                                            columnNumber: 40
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 500,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 493,
                                            columnNumber: 36
                                        }, this),
                                        variants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 py-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-3 text-base font-semibold text-[#0F1111]",
                                                    children: "All variants"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 509,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 overflow-x-auto pb-2 scrollbar-hide",
                                                    children: variants.map((variant_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedVariantId(variant_3._id),
                                                            className: `min-w-[150px] max-w-[170px] flex-shrink-0 rounded-md border p-3 text-left text-sm transition ${selectedVariant?._id === variant_3._id ? "border-[#E47911] bg-[#FFF8F0]" : "border-gray-200 hover:border-[#E47911]"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-[#0F1111]",
                                                                    children: [
                                                                        variant_3.color || "Default",
                                                                        " ",
                                                                        variant_3.size || ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 514,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#0F1111]",
                                                                    children: [
                                                                        "Price: Rs.",
                                                                        Number(variant_3.sellingPrice || 0).toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 517,
                                                                    columnNumber: 25
                                                                }, this),
                                                                variant_3.mrp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#565959] line-through",
                                                                    children: [
                                                                        "MRP: Rs.",
                                                                        Number(variant_3.mrp).toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 520,
                                                                    columnNumber: 43
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#565959]",
                                                                    children: [
                                                                        "Stock: ",
                                                                        variant_3.stock ?? 0
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 523,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, variant_3._id, true, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 513,
                                                            columnNumber: 48
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 512,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 508,
                                            columnNumber: 39
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 py-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-3 text-base font-semibold text-[#0F1111]",
                                                    children: "Product information"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 529,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 text-sm",
                                                    children: [
                                                        (product.attributes || []).map((attribute)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-[140px_1fr] gap-3 border-b border-gray-100 py-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#565959]",
                                                                        children: attribute.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                        lineNumber: 535,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#0F1111]",
                                                                        children: getDisplayValue(attribute.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                        lineNumber: 536,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, attribute._id || attribute.name, true, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 534,
                                                                columnNumber: 64
                                                            }, this)),
                                                        Object.entries(fieldLabel).map(([key, label_0])=>product[key] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-[140px_1fr] gap-3 border-b border-gray-100 py-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#565959]",
                                                                        children: label_0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                        lineNumber: 542,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#0F1111]",
                                                                        children: getDisplayValue(product[key])
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                        lineNumber: 543,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, key, true, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 541,
                                                                columnNumber: 86
                                                            }, this) : null)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 533,
                                                    columnNumber: 17
                                                }, this),
                                                (selectedDescription || selectedBulletPoints.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "mb-2 text-sm font-semibold text-[#0F1111]",
                                                            children: "About this item"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 550,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm leading-6 text-[#0F1111]",
                                                            children: selectedDescription
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 553,
                                                            columnNumber: 45
                                                        }, this),
                                                        selectedBulletPoints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-[#0F1111]",
                                                            children: selectedBulletPoints.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: point
                                                                }, point, false, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 557,
                                                                    columnNumber: 60
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                            lineNumber: 556,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                    lineNumber: 549,
                                                    columnNumber: 78
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                            lineNumber: 528,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-4 h-fit lg:sticky lg:top-[11.5rem]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border border-gray-300 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-baseline gap-2",
                                                children: [
                                                    discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-base font-medium text-[#CC0C39]",
                                                        children: [
                                                            "-",
                                                            discount,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 566,
                                                        columnNumber: 36
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[26px] font-medium text-[#0F1111]",
                                                        children: hasPrice ? `Rs.${price.toLocaleString()}` : "Price unavailable"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 569,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 565,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-[#0F1111]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[#007600]",
                                                        children: "FREE delivery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 575,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    "Tomorrow"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 574,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `mt-4 text-lg font-medium ${stock == null ? "text-[#565959]" : stock > 0 ? "text-[#007600]" : "text-red-600"}`,
                                                children: stock == null ? "Availability not listed" : stock > 0 ? "In Stock" : "Out of Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 579,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-1.5 text-sm text-[#0F1111]",
                                                        children: "Quantity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 584,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-9 w-fit items-center justify-between rounded border border-gray-300 bg-[#F0F2F2] px-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: decreaseQuantity,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 587,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 586,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-4 text-sm font-medium",
                                                                children: safeQuantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 589,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: increaseQuantity,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                    lineNumber: 591,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 590,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 585,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 583,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleAddToCart(),
                                                        disabled: !canPurchase || addingToCart,
                                                        className: "h-10 w-full rounded-full bg-[#FFD814] text-sm font-medium text-[#0F1111] transition hover:bg-[#F7CA00] disabled:cursor-not-allowed disabled:opacity-60",
                                                        children: addingToCart ? "Adding..." : "Add to Cart"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 597,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleBuyNow,
                                                        disabled: !canPurchase || addingToCart,
                                                        className: "h-10 w-full rounded-full bg-[#FFA41C] text-sm font-medium text-[#0F1111] transition hover:bg-[#FA8900] disabled:cursor-not-allowed disabled:opacity-60",
                                                        children: addingToCart ? "Adding..." : "Buy Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 600,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleToggleWishlist,
                                                        disabled: togglingWishlist,
                                                        className: `flex h-10 w-full items-center justify-center gap-1.5 rounded-full border text-sm font-medium transition disabled:opacity-60 ${liked ? "border-[#E47911] bg-[#FFF8F0] text-[#E47911]" : "border-gray-300 text-[#0F1111] hover:bg-gray-50"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                size: 14,
                                                                fill: liked ? "currentColor" : "none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 604,
                                                                columnNumber: 21
                                                            }, this),
                                                            togglingWishlist ? "Please wait..." : liked ? "Added to Wish List" : "Add to Wish List"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 603,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 596,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                                className: "my-4 border-gray-200"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 609,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#565959]",
                                                        children: [
                                                            "Delivered by",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#0F1111]",
                                                                children: "Amazon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 614,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 612,
                                                        columnNumber: 19
                                                    }, this),
                                                    product.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#565959]",
                                                        children: [
                                                            "Sold by ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#007185]",
                                                                children: product.brand
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 617,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 616,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#565959]",
                                                        children: [
                                                            "Payment",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#007185]",
                                                                children: "Secure transaction"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                                lineNumber: 621,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                        lineNumber: 619,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                                lineNumber: 611,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-0 left-0 z-50 flex w-full gap-3 border-t border-gray-200 bg-white p-3 backdrop-blur-md lg:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleAddToCart(),
                                disabled: !canPurchase || addingToCart,
                                className: "flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-black text-sm font-medium text-white transition hover:bg-zinc-800 disabled:opacity-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                        lineNumber: 631,
                                        columnNumber: 13
                                    }, this),
                                    addingToCart ? "Adding..." : "Add to Cart"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                lineNumber: 630,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleBuyNow,
                                disabled: !canPurchase || addingToCart,
                                className: "h-12 flex-1 rounded-xl bg-[#FF9900] text-sm font-medium text-black transition hover:bg-[#e68a00] disabled:opacity-60",
                                children: addingToCart ? "Adding..." : "Buy Now"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                                lineNumber: 634,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                        lineNumber: 629,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ProductDetailpage$2f$CartSidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: cartOpen,
                onClose: ()=>setCartOpen(false),
                cartItems: cartPreviewItems
            }, void 0, false, {
                fileName: "[project]/src/app/ProductDetailpage/productdetails.js",
                lineNumber: 640,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ProductDetailsPage, "9wjTH6/SZ1U6A2o4doLhrM003fI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProductDetailsPage;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/demyProductDetails/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DummyVariantTestPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ProductDetailpage$2f$productdetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ProductDetailpage/productdetails.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '..demy/demyProduct'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
function DummyVariantTestPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e46ecfa1c1cf6689942512800452d985f23d19f179826ed811285887745379f8") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e46ecfa1c1cf6689942512800452d985f23d19f179826ed811285887745379f8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        const dummyProduct = normalizeDummyProduct(rawDummyProduct);
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ProductDetailpage$2f$productdetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            initialProduct: dummyProduct,
            initialProductId: dummyProduct.id
        }, void 0, false, {
            fileName: "[project]/src/app/demyProductDetails/page.js",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = DummyVariantTestPage;
var _c;
__turbopack_context__.k.register(_c, "DummyVariantTestPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_06bfubu._.js.map