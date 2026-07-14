(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/apis/wishlist/clientWishlist.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWishlistProductId",
    ()=>getWishlistProductId,
    "loadWishlistItems",
    ()=>loadWishlistItems,
    "toggleWishlistProduct",
    ()=>toggleWishlistProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/cart/cart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$auth$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/auth/session.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/wishlist/wishlist.js [app-client] (ecmascript)");
;
;
;
function getWishlistProductId(item) {
    if (item?.pid && typeof item.pid === "object") return item.pid._id || item.pid.id;
    return item?.pid || item?.productId || item?.id || null;
}
function getCreatedWishlistItem(payload) {
    if (!payload) return null;
    return payload?.data?.data || payload?.data?.wishlist || payload?.data?.item || payload?.data?.wishlistItem || payload?.wishlist || payload?.item || payload?.wishlistItem || null;
}
async function loadWishlistItems() {
    const cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$auth$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])();
    const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartDeviceId"])();
    if (!cid && !deviceId) return [];
    const res = cid ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWishlistByCustomer"])(cid) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWishlistByDevice"])(deviceId);
    return Array.isArray(res?.data?.data) ? res.data.data : Array.isArray(res?.data) ? res.data : [];
}
async function toggleWishlistProduct(product, wishlistItems) {
    const productId = product?._id || product?.id || product?.productId;
    if (!productId) return {
        items: wishlistItems,
        changed: false
    };
    const existingItem = wishlistItems.find((item)=>String(getWishlistProductId(item)) === String(productId));
    if (existingItem) {
        let itemToDelete = existingItem;
        if (!itemToDelete._id || String(itemToDelete._id).startsWith("pending-")) {
            const latestItems = await loadWishlistItems();
            itemToDelete = latestItems.find((item)=>String(getWishlistProductId(item)) === String(productId));
        }
        if (!itemToDelete?._id || String(itemToDelete._id).startsWith("pending-")) {
            return {
                items: wishlistItems.filter((item)=>String(getWishlistProductId(item)) !== String(productId)),
                changed: true
            };
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteWishlistItem"])(itemToDelete._id);
        return {
            items: wishlistItems.filter((item)=>item._id !== itemToDelete._id),
            changed: true
        };
    }
    const cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$auth$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])();
    const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartDeviceId"])();
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWishlistItem"])({
        cid: cid || null,
        pid: productId,
        divid: deviceId,
        qty: 1,
        variantId: product.defaultVariant?._id || product.variantId || null,
        venderid: product.vendorId || product.venderid || null,
        offerDiscount: product.discount || 0
    });
    const created = getCreatedWishlistItem(res);
    if (!created) {
        try {
            const latestItems = await loadWishlistItems();
            const latestItem = latestItems.find((item)=>String(getWishlistProductId(item)) === String(productId));
            return {
                items: latestItem ? latestItems : [
                    ...wishlistItems,
                    {
                        _id: `pending-${productId}`,
                        pid: productId,
                        productId
                    }
                ],
                changed: true
            };
        } catch  {
            return {
                items: [
                    ...wishlistItems,
                    {
                        _id: `pending-${productId}`,
                        pid: productId,
                        productId
                    }
                ],
                changed: true
            };
        }
    }
    return {
        items: [
            ...wishlistItems,
            created
        ],
        changed: true
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Home/BestSellersSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BestSellersSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/wishlist/clientWishlist.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const bestSellers = [
    {
        id: 1,
        title: "Premium Running Shoes",
        price: "$129",
        oldPrice: "$169",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
        tag: "Best Seller"
    },
    {
        id: 2,
        title: "Wireless Headphones",
        price: "$89",
        oldPrice: "$120",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
        tag: "Trending"
    },
    {
        id: 3,
        title: "Luxury Smart Watch",
        price: "$199",
        oldPrice: "$249",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
        tag: "Hot Deal"
    },
    {
        id: 4,
        title: "Modern Sunglasses",
        price: "$59",
        oldPrice: "$89",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
        tag: "Popular"
    }
];
function BestSellersSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "3e578baa257b7691ad55adb2a1413dd6912fe7b3aca9b05d9e7f0ab9faa3dd9f") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e578baa257b7691ad55adb2a1413dd6912fe7b3aca9b05d9e7f0ab9faa3dd9f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [wishlistItems, setWishlistItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "BestSellersSection[useEffect()]": ()=>{
                let active = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadWishlistItems"])().then({
                    "BestSellersSection[useEffect() > (anonymous)()]": (items)=>{
                        if (active) {
                            setWishlistItems(items);
                        }
                    }
                }["BestSellersSection[useEffect() > (anonymous)()]"]).catch({
                    "BestSellersSection[useEffect() > (anonymous)()]": ()=>{
                        if (active) {
                            setWishlistItems([]);
                        }
                    }
                }["BestSellersSection[useEffect() > (anonymous)()]"]);
                return ()=>{
                    active = false;
                };
            }
        })["BestSellersSection[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== wishlistItems) {
        t3 = ({
            "BestSellersSection[handleWishlist]": async (product)=>{
                ;
                try {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleWishlistProduct"])(product, wishlistItems);
                    if (result.changed) {
                        setWishlistItems(result.items);
                        window.dispatchEvent(new Event("wishlistUpdated"));
                    }
                } catch (t4) {
                    const error = t4;
                    console.error("Wishlist API failed", error);
                }
            }
        })["BestSellersSection[handleWishlist]"];
        $[4] = wishlistItems;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleWishlist = t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[5px] text-red-500 font-semibold mb-3",
                            children: "Top Products"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/BestSellersSection.js",
                            lineNumber: 115,
                            columnNumber: 102
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-extrabold text-black leading-tight",
                            children: "Best Sellers"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/BestSellersSection.js",
                            lineNumber: 115,
                            columnNumber: 198
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                    lineNumber: 115,
                    columnNumber: 97
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 max-w-xl text-sm md:text-base leading-relaxed",
                    children: "Explore our most loved and highest-rated products picked by thousands of customers worldwide."
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                    lineNumber: 115,
                    columnNumber: 298
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/BestSellersSection.js",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== handleWishlist || $[8] !== wishlistItems) {
        t5 = bestSellers.map({
            "BestSellersSection[bestSellers.map()]": (product_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 60
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: index * 0.1
                    },
                    viewport: {
                        once: true
                    },
                    className: "group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[340px] overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: product_0.image,
                                    alt: product_0.title,
                                    fill: true,
                                    sizes: "(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw",
                                    className: "object-cover group-hover:scale-110 transition duration-700"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                                    lineNumber: 134,
                                    columnNumber: 175
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                                    lineNumber: 134,
                                    columnNumber: 376
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-4 left-4 bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow-md",
                                    children: product_0.tag
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                                    lineNumber: 134,
                                    columnNumber: 472
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "BestSellersSection[bestSellers.map() > <button>.onClick]": ()=>handleWishlist(product_0)
                                    }["BestSellersSection[bestSellers.map() > <button>.onClick]"],
                                    className: "absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center hover:bg-black hover:text-white transition duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        size: 18,
                                        fill: wishlistItems.some({
                                            "BestSellersSection[bestSellers.map() > wishlistItems.some()]": (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWishlistProductId"])(item) === product_0.id
                                        }["BestSellersSection[bestSellers.map() > wishlistItems.some()]"]) ? "currentColor" : "none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/BestSellersSection.js",
                                        lineNumber: 136,
                                        columnNumber: 250
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                                    lineNumber: 134,
                                    columnNumber: 603
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 w-[85%]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full h-12 rounded-full bg-black text-white font-semibold flex items-center justify-center gap-2 hover:bg-red-500 transition duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/BestSellersSection.js",
                                                lineNumber: 138,
                                                columnNumber: 449
                                            }, this),
                                            "Add To Cart"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Home/BestSellersSection.js",
                                        lineNumber: 138,
                                        columnNumber: 290
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                                    lineNumber: 138,
                                    columnNumber: 118
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Home/BestSellersSection.js",
                            lineNumber: 134,
                            columnNumber: 123
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            size: 16,
                                            className: "fill-yellow-400 text-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Home/BestSellersSection.js",
                                            lineNumber: 138,
                                            columnNumber: 574
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: product_0.rating
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Home/BestSellersSection.js",
                                            lineNumber: 138,
                                            columnNumber: 636
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                                    lineNumber: 138,
                                    columnNumber: 528
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-black mb-3 group-hover:text-red-500 transition duration-300",
                                    children: product_0.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                                    lineNumber: 138,
                                    columnNumber: 719
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-extrabold text-black",
                                            children: product_0.price
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Home/BestSellersSection.js",
                                            lineNumber: 138,
                                            columnNumber: 885
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 line-through text-sm",
                                            children: product_0.oldPrice
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Home/BestSellersSection.js",
                                            lineNumber: 138,
                                            columnNumber: 962
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                                    lineNumber: 138,
                                    columnNumber: 844
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Home/BestSellersSection.js",
                            lineNumber: 138,
                            columnNumber: 507
                        }, this)
                    ]
                }, product_0.id, true, {
                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                    lineNumber: 123,
                    columnNumber: 70
                }, this)
        }["BestSellersSection[bestSellers.map()]"]);
        $[7] = handleWishlist;
        $[8] = wishlistItems;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full bg-[#f8f8f8] py-20 px-4 md:px-10 lg:px-16 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1500px] mx-auto",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7",
                        children: t5
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/BestSellersSection.js",
                        lineNumber: 148,
                        columnNumber: 140
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/BestSellersSection.js",
                lineNumber: 148,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/BestSellersSection.js",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
}
_s(BestSellersSection, "LWCt+FS/fbZ0NYVmSdV1NvexBks=");
_c = BestSellersSection;
var _c;
__turbopack_context__.k.register(_c, "BestSellersSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/apis/banners/banners.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BANNERS_API_URL",
    ()=>BANNERS_API_URL,
    "EXTERNAL_BANNERS_API_URL",
    ()=>EXTERNAL_BANNERS_API_URL,
    "FALLBACK_BANNER_IMAGE",
    ()=>FALLBACK_BANNER_IMAGE,
    "fallbackBanner",
    ()=>fallbackBanner,
    "fetchBanners",
    ()=>fetchBanners,
    "getBannersForCategory",
    ()=>getBannersForCategory,
    "getBannersFromPayload",
    ()=>getBannersFromPayload,
    "getDefaultBannerForCategory",
    ()=>getDefaultBannerForCategory,
    "hasBannerForCategory",
    ()=>hasBannerForCategory,
    "normalizeBanner",
    ()=>normalizeBanner,
    "normalizeBannerCategory",
    ()=>normalizeBannerCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/baseurl/baseurl.js [app-client] (ecmascript)");
;
const EXTERNAL_BANNERS_API_URL = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}/banners`;
const BANNERS_API_URL = EXTERNAL_BANNERS_API_URL;
const FALLBACK_BANNER_IMAGE = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop";
const fallbackBanner = {
    id: "fallback-banner",
    title: "Nike T-Shirts - 40% OFF",
    image: FALLBACK_BANNER_IMAGE,
    discountPercentage: 40,
    categoryName: "Fashion",
    vendorName: "Priyanka Sharma",
    companyName: "ABC Pvt Ltd",
    isActive: true
};
function getSafeBannerImage(image) {
    if (!image || !/^https?:\/\//i.test(image)) return FALLBACK_BANNER_IMAGE;
    try {
        const url = new URL(image);
        if (url.hostname === "yourcdn.com") {
            return FALLBACK_BANNER_IMAGE;
        }
        return image;
    } catch  {
        return FALLBACK_BANNER_IMAGE;
    }
}
function normalizeBannerCategory(category) {
    return String(category || "").trim().toLowerCase();
}
function getDefaultBannerForCategory(categoryName) {
    const safeCategory = String(categoryName || "").trim();
    if (!safeCategory || safeCategory.toLowerCase() === "all") {
        return fallbackBanner;
    }
    return {
        ...fallbackBanner,
        id: `default-${safeCategory.toLowerCase().replace(/\s+/g, "-")}-banner`,
        title: `${safeCategory} Deals`,
        categoryName: safeCategory
    };
}
function getBannersForCategory(banners, categoryName) {
    const selectedCategory = normalizeBannerCategory(categoryName);
    if (!selectedCategory || selectedCategory === "all") {
        return [
            fallbackBanner
        ];
    }
    const matchingBanners = banners.filter((banner)=>normalizeBannerCategory(banner?.categoryName) === selectedCategory);
    return matchingBanners.length > 0 ? matchingBanners : [
        getDefaultBannerForCategory(categoryName)
    ];
}
function hasBannerForCategory(banners, categoryName) {
    const selectedCategory = normalizeBannerCategory(categoryName);
    if (!selectedCategory || selectedCategory === "all") {
        return false;
    }
    return banners.some((banner)=>normalizeBannerCategory(banner?.categoryName) === selectedCategory);
}
function getBannersFromPayload(payload) {
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.data)) return payload.data;
    if (Array.isArray(payload?.banners)) return payload.banners;
    return [];
}
function normalizeBanner(banner) {
    return {
        ...banner,
        id: banner?._id || banner?.id,
        title: banner?.title || "Special Offer",
        image: getSafeBannerImage(banner?.image_url || banner?.image),
        discountPercentage: Number(banner?.discount_percentage || banner?.discountPercentage || 0),
        categoryName: banner?.categoryId?.name || banner?.category?.name || banner?.categoryName || "Deals",
        vendorName: banner?.vendorId?.name || banner?.vendor?.name || banner?.vendorName || "Amazon Store",
        companyName: banner?.vendorId?.companyname || banner?.vendor?.companyname || banner?.companyName,
        isActive: banner?.is_active !== false
    };
}
async function fetchBanners() {
    const response = await fetch(BANNERS_API_URL, {
        cache: "no-store"
    });
    if (!response.ok) {
        throw new Error("Failed to load banners");
    }
    const payload = await response.json();
    const banners = getBannersFromPayload(payload).map(normalizeBanner).filter((banner)=>banner.id && banner.isActive);
    return banners.length > 0 ? banners : [
        fallbackBanner
    ];
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Home/DealsOfferBanner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DealsOfferBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/banners/banners.js [app-client] (ecmascript)");
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
function DealsOfferBanner() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(80);
    if ($[0] !== "c46d314a66023c97937e6597ebce92f741d2b82197847c83501cea2410a5238a") {
        for(let $i = 0; $i < 80; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c46d314a66023c97937e6597ebce92f741d2b82197847c83501cea2410a5238a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackBanner"]
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [banners, setBanners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [brokenBannerIds, setBrokenBannerIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "DealsOfferBanner[useEffect()]": ()=>{
                let isMounted = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBanners"])().then({
                    "DealsOfferBanner[useEffect() > (anonymous)()]": (items)=>{
                        if (!isMounted) {
                            return;
                        }
                        setBanners((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBannersForCategory"])(items, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackBanner"].categoryName));
                        setActiveIndex(0);
                    }
                }["DealsOfferBanner[useEffect() > (anonymous)()]"]).catch({
                    "DealsOfferBanner[useEffect() > (anonymous)()]": ()=>{
                        if (!isMounted) {
                            return;
                        }
                        setBanners([
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackBanner"]
                        ]);
                        setActiveIndex(0);
                    }
                }["DealsOfferBanner[useEffect() > (anonymous)()]"]);
                return ()=>{
                    isMounted = false;
                };
            }
        })["DealsOfferBanner[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] !== banners.length) {
        t4 = ({
            "DealsOfferBanner[useEffect()]": ()=>{
                if (banners.length <= 1) {
                    return;
                }
                const timer = window.setInterval({
                    "DealsOfferBanner[useEffect() > window.setInterval()]": ()=>{
                        setActiveIndex({
                            "DealsOfferBanner[useEffect() > window.setInterval() > setActiveIndex()]": (current)=>(current + 1) % banners.length
                        }["DealsOfferBanner[useEffect() > window.setInterval() > setActiveIndex()]"]);
                    }
                }["DealsOfferBanner[useEffect() > window.setInterval()]"], 5000);
                return ()=>window.clearInterval(timer);
            }
        })["DealsOfferBanner[useEffect()]"];
        t5 = [
            banners.length
        ];
        $[5] = banners.length;
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const activeBanner = banners[activeIndex] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackBanner"];
    const isBrokenImage = brokenBannerIds.includes(activeBanner.id);
    const imageSrc = isBrokenImage ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FALLBACK_BANNER_IMAGE"] : activeBanner.image || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FALLBACK_BANNER_IMAGE"];
    const discountText = activeBanner.discountPercentage > 0 ? `${activeBanner.discountPercentage}%` : "Big";
    const categoryQuery = encodeURIComponent(activeBanner.categoryName || "All");
    const shopHref = `/shop?category=${categoryQuery}`;
    let t6;
    let t7;
    if ($[8] !== activeBanner.title) {
        const words = activeBanner.title.split(" ");
        const middle = Math.ceil(words.length / 2);
        t6 = words.slice(0, middle).join(" ");
        t7 = words.slice(middle).join(" ");
        $[8] = activeBanner.title;
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6 || $[12] !== t7) {
        t8 = [
            t6,
            t7
        ];
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const titleParts = t8;
    let t9;
    if ($[14] !== activeBanner.id) {
        t9 = ({
            "DealsOfferBanner[handleImageError]": ()=>{
                setBrokenBannerIds({
                    "DealsOfferBanner[handleImageError > setBrokenBannerIds()]": (current_0)=>current_0.includes(activeBanner.id) ? current_0 : [
                            ...current_0,
                            activeBanner.id
                        ]
                }["DealsOfferBanner[handleImageError > setBrokenBannerIds()]"]);
            }
        })["DealsOfferBanner[handleImageError]"];
        $[14] = activeBanner.id;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const handleImageError = t9;
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n        .deal-image-clip {\n          clip-path: none;\n        }\n\n        @media (min-width: 1024px) {\n          .deal-image-clip {\n            clip-path: polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%);\n          }\n        }\n      "
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-2 h-2 rounded-full bg-orange-500"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== activeBanner.categoryName) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex w-fit items-center gap-2 rounded-full border border-black/5 bg-white px-5 py-2.5 shadow-sm",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[11px] uppercase tracking-[3px] font-semibold text-gray-600",
                    children: [
                        activeBanner.categoryName,
                        " Sale"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/DealsOfferBanner.js",
                    lineNumber: 159,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[18] = activeBanner.categoryName;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    let t14;
    let t15;
    let t16;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            opacity: 0,
            y: 15
        };
        t14 = {
            opacity: 1,
            y: 0
        };
        t15 = {
            duration: 0.6
        };
        t16 = {
            once: true
        };
        $[20] = t13;
        $[21] = t14;
        $[22] = t15;
        $[23] = t16;
    } else {
        t13 = $[20];
        t14 = $[21];
        t15 = $[22];
        t16 = $[23];
    }
    let t17;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    const t18 = titleParts[1] || "Collection";
    let t19;
    if ($[25] !== t18 || $[26] !== titleParts[0]) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
            initial: t13,
            whileInView: t14,
            transition: t15,
            viewport: t16,
            className: "mt-4 text-[36px] md:text-[52px] leading-[0.9] tracking-[-3px] font-extrabold text-[#111]",
            children: [
                titleParts[0],
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[25] = t18;
        $[26] = titleParts[0];
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-14 h-[2px] rounded-full bg-orange-500"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== discountText) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex items-center gap-4",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-orange-500 font-bold text-xl",
                    children: [
                        "Up To ",
                        discountText,
                        " Off"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/DealsOfferBanner.js",
                    lineNumber: 220,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[29] = discountText;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== activeBanner.categoryName) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 max-w-[520px] text-[15px] leading-relaxed text-gray-500",
            children: [
                "Limited-time offer on the latest ",
                activeBanner.categoryName,
                "collection. Explore the best deals and add your favourite products to the cart."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[31] = activeBanner.categoryName;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            size: 18,
            className: "group-hover:translate-x-1 transition-all duration-300"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    let t24;
    if ($[34] !== shopHref) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: shopHref,
            className: "group h-[58px] px-8 rounded-2xl bg-[#111] hover:bg-orange-500 transition-all duration-300 text-white font-semibold text-[15px] flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.12)]",
            children: [
                "Shop Collection",
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[34] = shopHref;
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    let t25;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] uppercase tracking-[3px] text-gray-400 font-medium",
            children: "Category"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[36] = t25;
    } else {
        t25 = $[36];
    }
    let t26;
    if ($[37] !== activeBanner.categoryName) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[58px] px-6 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t25,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-[18px] font-extrabold text-[#111] mt-0.5",
                        children: activeBanner.categoryName
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/DealsOfferBanner.js",
                        lineNumber: 258,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/DealsOfferBanner.js",
                lineNumber: 258,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[37] = activeBanner.categoryName;
        $[38] = t26;
    } else {
        t26 = $[38];
    }
    let t27;
    if ($[39] !== t24 || $[40] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 flex flex-wrap items-center gap-4",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[39] = t24;
        $[40] = t26;
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    let t28;
    if ($[42] !== t12 || $[43] !== t19 || $[44] !== t21 || $[45] !== t22 || $[46] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-20 flex flex-col justify-center px-7 md:px-12 py-7",
            children: [
                t12,
                t19,
                t21,
                t22,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[42] = t12;
        $[43] = t19;
        $[44] = t21;
        $[45] = t22;
        $[46] = t27;
        $[47] = t28;
    } else {
        t28 = $[47];
    }
    let t29;
    let t30;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            scale: [
                1,
                1.04,
                1
            ]
        };
        t30 = {
            duration: 7,
            repeat: Infinity
        };
        $[48] = t29;
        $[49] = t30;
    } else {
        t29 = $[48];
        t30 = $[49];
    }
    let t31;
    if ($[50] !== activeBanner.title || $[51] !== handleImageError || $[52] !== imageSrc) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: t29,
            transition: t30,
            className: "relative w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: imageSrc,
                alt: activeBanner.title,
                fill: true,
                sizes: "(max-width: 767px) 100vw, 50vw",
                priority: true,
                onError: handleImageError,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/src/app/Home/DealsOfferBanner.js",
                lineNumber: 303,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[50] = activeBanner.title;
        $[51] = handleImageError;
        $[52] = imageSrc;
        $[53] = t31;
    } else {
        t31 = $[53];
    }
    let t32;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-l from-black/15 via-black/5 to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[54] = t32;
    } else {
        t32 = $[54];
    }
    let t33;
    if ($[55] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "deal-image-clip absolute inset-0",
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[55] = t31;
        $[56] = t33;
    } else {
        t33 = $[56];
    }
    let t34;
    let t35;
    let t36;
    let t37;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            opacity: 0,
            y: 20
        };
        t35 = {
            opacity: 1,
            y: 0
        };
        t36 = {
            delay: 0.2
        };
        t37 = {
            once: true
        };
        $[57] = t34;
        $[58] = t35;
        $[59] = t36;
        $[60] = t37;
    } else {
        t34 = $[57];
        t35 = $[58];
        t36 = $[59];
        t37 = $[60];
    }
    let t38;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] uppercase tracking-[3px] text-gray-400 font-semibold",
            children: "Limited Deal"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[61] = t38;
    } else {
        t38 = $[61];
    }
    let t39;
    if ($[62] !== discountText) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-4xl leading-none font-extrabold text-[#111]",
            children: discountText
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[62] = discountText;
        $[63] = t39;
    } else {
        t39 = $[63];
    }
    let t40;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-orange-500 font-bold text-lg mb-1",
            children: "OFF"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[64] = t40;
    } else {
        t40 = $[64];
    }
    let t41;
    if ($[65] !== t39) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t34,
            whileInView: t35,
            transition: t36,
            viewport: t37,
            className: "absolute bottom-7 right-7 rounded-[26px] bg-white/90 backdrop-blur-xl px-7 py-5 border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.12)]",
            children: [
                t38,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 flex items-end gap-2",
                    children: [
                        t39,
                        t40
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/DealsOfferBanner.js",
                    lineNumber: 379,
                    columnNumber: 245
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[65] = t39;
        $[66] = t41;
    } else {
        t41 = $[66];
    }
    let t42;
    if ($[67] !== t33 || $[68] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-[260px] overflow-hidden",
            children: [
                t33,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[67] = t33;
        $[68] = t41;
        $[69] = t42;
    } else {
        t42 = $[69];
    }
    let t43;
    if ($[70] !== t28 || $[71] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid lg:grid-cols-[1.05fr_0.95fr] h-full",
            children: [
                t28,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[70] = t28;
        $[71] = t42;
        $[72] = t43;
    } else {
        t43 = $[72];
    }
    let t44;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-[-120px] right-[-120px] w-[280px] h-[280px] rounded-full bg-orange-100 blur-[100px]"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[73] = t44;
    } else {
        t44 = $[73];
    }
    let t45;
    if ($[74] !== activeIndex || $[75] !== banners) {
        t45 = banners.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2",
            children: banners.map({
                "DealsOfferBanner[banners.map()]": (banner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": `Show banner ${index + 1}`,
                        onClick: {
                            "DealsOfferBanner[banners.map() > <button>.onClick]": ()=>setActiveIndex(index)
                        }["DealsOfferBanner[banners.map() > <button>.onClick]"],
                        className: `h-2 rounded-full transition-all duration-300 ${activeIndex === index ? "w-8 bg-orange-500" : "w-2 bg-white/80"}`
                    }, banner.id, false, {
                        fileName: "[project]/src/app/Home/DealsOfferBanner.js",
                        lineNumber: 413,
                        columnNumber: 63
                    }, this)
            }["DealsOfferBanner[banners.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 412,
            columnNumber: 33
        }, this);
        $[74] = activeIndex;
        $[75] = banners;
        $[76] = t45;
    } else {
        t45 = $[76];
    }
    let t46;
    if ($[77] !== t43 || $[78] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full bg-[#f5f5f5] py-6",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1450px] mx-auto px-4 md:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden rounded-[32px] bg-[#f8f8f8] border border-black/5 shadow-[0_15px_60px_rgba(0,0,0,0.06)] min-h-[260px]",
                        children: [
                            t43,
                            t44,
                            t45
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Home/DealsOfferBanner.js",
                        lineNumber: 425,
                        columnNumber: 115
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/DealsOfferBanner.js",
                    lineNumber: 425,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/DealsOfferBanner.js",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[77] = t43;
        $[78] = t45;
        $[79] = t46;
    } else {
        t46 = $[79];
    }
    return t46;
}
_s(DealsOfferBanner, "I5Q8RWXE5XxhlB3vQTegNHerp4M=");
_c = DealsOfferBanner;
var _c;
__turbopack_context__.k.register(_c, "DealsOfferBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Home/Herosection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/banners/banners.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const fallbackSlides = [
    {
        id: 1,
        title: "Next Gen Shopping Experience",
        highlight: "Premium",
        description: "Discover fashion, electronics, gadgets, and lifestyle products with lightning-fast delivery and exclusive offers.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
        badge: "Best Seller",
        offer: "50% OFF",
        product: "Smart Watch Pro",
        price: "₹4,999"
    },
    {
        id: 2,
        title: "Upgrade Your Daily Lifestyle",
        highlight: "Modern",
        description: "Shop premium accessories and trending collections designed for your everyday comfort and style.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop",
        badge: "Trending",
        offer: "New Launch",
        product: "Wireless Headphones",
        price: "₹2,499"
    },
    {
        id: 3,
        title: "Exclusive Deals Every Day",
        highlight: "Amazing",
        description: "Enjoy unbeatable discounts on premium products with secure payments and fast nationwide delivery.",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop",
        badge: "Hot Deals",
        offer: "70% OFF",
        product: "iPhone Collection",
        price: "₹59,999"
    }
];
function getOfferText(discountPercentage) {
    return discountPercentage > 0 ? `${discountPercentage}% OFF` : "Hot Deal";
}
function createSlidesFromBanners(banners) {
    return banners.map((banner)=>({
            id: banner.id,
            title: banner.title,
            highlight: banner.categoryName,
            description: `Special offers are available on the latest ${banner.categoryName} collection.`,
            image: banner.image,
            badge: banner.categoryName,
            offer: getOfferText(banner.discountPercentage),
            product: banner.title,
            price: getOfferText(banner.discountPercentage)
        }));
}
function HeroSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "6765220a9711fb1566d920389af8e16868ae9d006d359f962023d928dc2ab0eb") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6765220a9711fb1566d920389af8e16868ae9d006d359f962023d928dc2ab0eb";
    }
    const [heroSlides, setHeroSlides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_HeroSectionUseState);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const slides = heroSlides.length > 0 ? heroSlides : fallbackSlides;
    let t0;
    if ($[1] !== slides.length) {
        t0 = ({
            "HeroSection[nextSlide]": ()=>setCurrent({
                    "HeroSection[nextSlide > setCurrent()]": (prev)=>(prev + 1) % slides.length
                }["HeroSection[nextSlide > setCurrent()]"])
        })["HeroSection[nextSlide]"];
        $[1] = slides.length;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const nextSlide = t0;
    let t1;
    if ($[3] !== slides.length) {
        t1 = ({
            "HeroSection[prevSlide]": ()=>setCurrent({
                    "HeroSection[prevSlide > setCurrent()]": (prev_0)=>(prev_0 - 1 + slides.length) % slides.length
                }["HeroSection[prevSlide > setCurrent()]"])
        })["HeroSection[prevSlide]"];
        $[3] = slides.length;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const prevSlide = t1;
    let t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "HeroSection[useEffect()]": ()=>{
                let isMounted = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBanners"])().then({
                    "HeroSection[useEffect() > (anonymous)()]": (banners)=>{
                        if (!isMounted) {
                            return;
                        }
                        setHeroSlides(createSlidesFromBanners((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBannersForCategory"])(banners, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackBanner"].categoryName)));
                        setCurrent(0);
                    }
                }["HeroSection[useEffect() > (anonymous)()]"]).catch({
                    "HeroSection[useEffect() > (anonymous)()]": ()=>{
                        if (!isMounted) {
                            return;
                        }
                        setHeroSlides(createSlidesFromBanners([
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackBanner"]
                        ]));
                        setCurrent(0);
                    }
                }["HeroSection[useEffect() > (anonymous)()]"]);
                return ()=>{
                    isMounted = false;
                };
            }
        })["HeroSection[useEffect()]"];
        t3 = [];
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[7] !== slides.length) {
        t4 = ({
            "HeroSection[useEffect()]": ()=>{
                const interval = setInterval({
                    "HeroSection[useEffect() > setInterval()]": ()=>{
                        setCurrent({
                            "HeroSection[useEffect() > setInterval() > setCurrent()]": (prev_1)=>(prev_1 + 1) % slides.length
                        }["HeroSection[useEffect() > setInterval() > setCurrent()]"]);
                    }
                }["HeroSection[useEffect() > setInterval()]"], 5000);
                return ()=>clearInterval(interval);
            }
        })["HeroSection[useEffect()]"];
        t5 = [
            slides.length
        ];
        $[7] = slides.length;
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-b from-[#f8f8f8] via-[#f3f3f3] to-[#eaeded]"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Herosection.js",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:80px_80px]"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Herosection.js",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t7;
    } else {
        t6 = $[10];
        t7 = $[11];
    }
    let t8;
    if ($[12] !== current || $[13] !== slides) {
        let t9;
        if ($[15] !== current) {
            t9 = ({
                "HeroSection[slides.map()]": (slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-all duration-700 ease-in-out ${current === index ? "opacity-100 relative z-10" : "opacity-0 absolute inset-0 z-0 pointer-events-none"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-[190px] sm:h-[240px] overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: slide.image,
                                                alt: slide.product,
                                                fill: true,
                                                sizes: "100vw",
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 169,
                                                columnNumber: 342
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 169,
                                                columnNumber: 454
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-3 right-3 bg-black text-white px-3 py-2 rounded-2xl shadow-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] text-gray-300 uppercase tracking-wide",
                                                        children: "Limited Offer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 641
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[22px] leading-none font-extrabold mt-1",
                                                        children: slide.offer
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 722
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 169,
                                                columnNumber: 549
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        size: 11,
                                                        className: "fill-[#ff9900] text-[#ff9900]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 940
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-semibold text-gray-700",
                                                        children: slide.badge
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 1000
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 169,
                                                columnNumber: 807
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Home/Herosection.js",
                                        lineNumber: 169,
                                        columnNumber: 277
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 sm:px-6 pt-4 pb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-[26px] sm:text-[32px] leading-[0.95] font-extrabold tracking-tight text-black",
                                                children: [
                                                    slide.title.split(" ")[0],
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#ff9900]",
                                                        children: slide.highlight
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 1261
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 1318
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-black",
                                                        children: slide.title.split(" ").slice(1).join(" ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 1324
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 169,
                                                columnNumber: 1130
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[12px] sm:text-[13px] leading-5 text-gray-500 max-w-[520px]",
                                                children: slide.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 169,
                                                columnNumber: 1408
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/shop",
                                                        className: "h-[46px] px-5 rounded-xl bg-black text-white flex items-center gap-2 text-sm font-semibold hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg",
                                                        children: [
                                                            "Shop Now ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 169,
                                                                columnNumber: 1737
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 1549
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "h-[46px] px-5 rounded-xl border border-black/10 bg-[#f8f8f8] text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300",
                                                        children: "Explore"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 1768
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 169,
                                                columnNumber: 1516
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 bg-[#fafafa] border border-black/5 rounded-2xl p-3 flex items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400",
                                                                children: "Featured"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 169,
                                                                columnNumber: 2091
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "mt-1 text-[16px] font-semibold text-black truncate",
                                                                children: slide.product
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 169,
                                                                columnNumber: 2180
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 2066
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shrink-0 text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] text-gray-400 uppercase",
                                                                children: "From"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 169,
                                                                columnNumber: 2310
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-[20px] font-extrabold text-black leading-none mt-1",
                                                                children: slide.price
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 169,
                                                                columnNumber: 2368
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 2273
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "shrink-0 h-[38px] px-4 rounded-xl bg-black text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-[#1a1a1a] transition-all",
                                                        children: [
                                                            "Buy ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 169,
                                                                columnNumber: 2624
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 169,
                                                        columnNumber: 2464
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 169,
                                                columnNumber: 1953
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-hide",
                                                children: [
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Herosection.js",
                                                            lineNumber: 170,
                                                            columnNumber: 25
                                                        }, this),
                                                        title: "Fast Delivery",
                                                        sub: "Across India"
                                                    },
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Herosection.js",
                                                            lineNumber: 174,
                                                            columnNumber: 25
                                                        }, this),
                                                        title: "Secure Pay",
                                                        sub: "100% Safe"
                                                    },
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Herosection.js",
                                                            lineNumber: 178,
                                                            columnNumber: 25
                                                        }, this),
                                                        title: "Top Brands",
                                                        sub: "Premium"
                                                    }
                                                ].map(_HeroSectionSlidesMapAnonymous)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 169,
                                                columnNumber: 2663
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Home/Herosection.js",
                                        lineNumber: 169,
                                        columnNumber: 1090
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Home/Herosection.js",
                                lineNumber: 169,
                                columnNumber: 236
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:grid lg:grid-cols-2 h-[470px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center px-8 xl:px-12 py-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f8f8] border border-black/5 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 14,
                                                            className: "fill-[#ff9900] text-[#ff9900]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Herosection.js",
                                                            lineNumber: 181,
                                                            columnNumber: 325
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[12px] font-semibold text-gray-700",
                                                            children: slide.badge
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Herosection.js",
                                                            lineNumber: 181,
                                                            columnNumber: 385
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Home/Herosection.js",
                                                    lineNumber: 181,
                                                    columnNumber: 209
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "mt-4 text-[36px] xl:text-[44px] leading-[0.95] font-extrabold tracking-tight text-black max-w-[620px]",
                                                    children: [
                                                        slide.title.split(" ")[0],
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#ff9900]",
                                                            children: slide.highlight
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Herosection.js",
                                                            lineNumber: 181,
                                                            columnNumber: 619
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Herosection.js",
                                                            lineNumber: 181,
                                                            columnNumber: 676
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-black",
                                                            children: slide.title.split(" ").slice(1).join(" ")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Herosection.js",
                                                            lineNumber: 181,
                                                            columnNumber: 682
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Home/Herosection.js",
                                                    lineNumber: 181,
                                                    columnNumber: 469
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-[14px] leading-6 text-gray-600 max-w-[540px]",
                                                    children: slide.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Home/Herosection.js",
                                                    lineNumber: 181,
                                                    columnNumber: 766
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-4 mt-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/shop",
                                                            className: "h-[54px] px-7 rounded-2xl bg-black text-white flex items-center gap-3 text-sm font-semibold hover:bg-[#1a1a1a] transition-all duration-300 shadow-xl hover:scale-[1.02]",
                                                            children: [
                                                                "Shop Now ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    size: 17
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Home/Herosection.js",
                                                                    lineNumber: 181,
                                                                    columnNumber: 1110
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Home/Herosection.js",
                                                            lineNumber: 181,
                                                            columnNumber: 902
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "h-[54px] px-7 rounded-2xl border border-black/5 bg-[#f8f8f8] text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300",
                                                            children: "Explore Deals"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Herosection.js",
                                                            lineNumber: 181,
                                                            columnNumber: 1141
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Home/Herosection.js",
                                                    lineNumber: 181,
                                                    columnNumber: 859
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-3 mt-6",
                                                    children: [
                                                        {
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 182,
                                                                columnNumber: 27
                                                            }, this),
                                                            title: "Fast Delivery",
                                                            sub: "Across India"
                                                        },
                                                        {
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 186,
                                                                columnNumber: 27
                                                            }, this),
                                                            title: "Secure Payments",
                                                            sub: "100% Protected"
                                                        },
                                                        {
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 190,
                                                                columnNumber: 27
                                                            }, this),
                                                            title: "Premium Brands",
                                                            sub: "Top Collections"
                                                        }
                                                    ].map(_HeroSectionSlidesMapAnonymous2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Home/Herosection.js",
                                                    lineNumber: 181,
                                                    columnNumber: 1332
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Home/Herosection.js",
                                            lineNumber: 181,
                                            columnNumber: 185
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/Herosection.js",
                                        lineNumber: 181,
                                        columnNumber: 131
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-full overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: slide.image,
                                                alt: slide.product,
                                                fill: true,
                                                sizes: "50vw",
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 193,
                                                columnNumber: 126
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/25"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 193,
                                                columnNumber: 237
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-6 right-6 bg-black text-white px-5 py-4 rounded-[24px] shadow-2xl backdrop-blur-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-gray-300 uppercase tracking-wide",
                                                        children: "Limited Offer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 193,
                                                        columnNumber: 444
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[30px] leading-none font-extrabold mt-2",
                                                        children: slide.offer
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 193,
                                                        columnNumber: 526
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 193,
                                                columnNumber: 331
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-2xl rounded-[24px] p-4 border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.18)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-end justify-between gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500",
                                                                        children: "Featured Product"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                                        lineNumber: 193,
                                                                        columnNumber: 857
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "mt-1 text-[19px] leading-[1.1] font-semibold text-black truncate",
                                                                        children: slide.product
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                                        lineNumber: 193,
                                                                        columnNumber: 956
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-[12px] text-gray-500 line-clamp-1",
                                                                        children: "Premium quality with elegant modern design."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                                        lineNumber: 193,
                                                                        columnNumber: 1057
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 193,
                                                                columnNumber: 825
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "shrink-0 text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] text-gray-400 uppercase",
                                                                        children: "Starting From"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                                        lineNumber: 193,
                                                                        columnNumber: 1206
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "mt-1 text-[24px] leading-none font-extrabold text-black",
                                                                        children: slide.price
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                                        lineNumber: 193,
                                                                        columnNumber: 1274
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 193,
                                                                columnNumber: 1169
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 193,
                                                        columnNumber: 771
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "mt-3 w-full h-[44px] rounded-2xl bg-black text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.01]",
                                                        children: [
                                                            "Buy Now ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                                lineNumber: 193,
                                                                columnNumber: 1584
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Home/Herosection.js",
                                                        lineNumber: 193,
                                                        columnNumber: 1376
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 193,
                                                columnNumber: 611
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Home/Herosection.js",
                                        lineNumber: 193,
                                        columnNumber: 77
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Home/Herosection.js",
                                lineNumber: 181,
                                columnNumber: 74
                            }, this)
                        ]
                    }, slide.id, true, {
                        fileName: "[project]/src/app/Home/Herosection.js",
                        lineNumber: 169,
                        columnNumber: 56
                    }, this)
            })["HeroSection[slides.map()]"];
            $[15] = current;
            $[16] = t9;
        } else {
            t9 = $[16];
        }
        t8 = slides.map(t9);
        $[12] = current;
        $[13] = slides;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Herosection.js",
            lineNumber: 209,
            columnNumber: 10
        }, this);
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== prevSlide) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: prevSlide,
            className: "absolute left-3 sm:left-5 top-[110px] lg:top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-xl border border-black/10 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Herosection.js",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[18] = prevSlide;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Herosection.js",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== nextSlide) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: nextSlide,
            className: "absolute right-3 sm:right-5 top-[110px] lg:top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-xl border border-black/10 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Herosection.js",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[21] = nextSlide;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== current || $[24] !== slides) {
        let t14;
        if ($[26] !== current) {
            t14 = ({
                "HeroSection[slides.map()]": (_, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "HeroSection[slides.map() > <button>.onClick]": ()=>setCurrent(index_0)
                        }["HeroSection[slides.map() > <button>.onClick]"],
                        className: `transition-all duration-300 ${current === index_0 ? "w-7 h-[8px] sm:w-8 sm:h-[10px] rounded-full bg-black" : "w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-full bg-black/25"}`
                    }, index_0, false, {
                        fileName: "[project]/src/app/Home/Herosection.js",
                        lineNumber: 242,
                        columnNumber: 54
                    }, this)
            })["HeroSection[slides.map()]"];
            $[26] = current;
            $[27] = t14;
        } else {
            t14 = $[27];
        }
        t13 = slides.map(t14);
        $[23] = current;
        $[24] = slides;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[28] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Herosection.js",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== t10 || $[31] !== t12 || $[32] !== t14 || $[33] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative overflow-hidden bg-[#eaeded]",
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-[1550px] mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden rounded-2xl sm:rounded-[28px] lg:rounded-[34px] bg-white border border-black/5 shadow-[0_15px_60px_rgba(0,0,0,0.08)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                t8,
                                t10,
                                t12,
                                t14
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Home/Herosection.js",
                            lineNumber: 268,
                            columnNumber: 327
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/Herosection.js",
                        lineNumber: 268,
                        columnNumber: 168
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Herosection.js",
                    lineNumber: 268,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Herosection.js",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[30] = t10;
        $[31] = t12;
        $[32] = t14;
        $[33] = t8;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    return t15;
}
_s(HeroSection, "utRmXCEIFl+SLFAz4wx8ODnbOcc=");
_c = HeroSection;
function _HeroSectionSlidesMapAnonymous2(item_0, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 bg-[#fafafa] border border-black/5 rounded-2xl p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0",
                children: item_0.icon
            }, void 0, false, {
                fileName: "[project]/src/app/Home/Herosection.js",
                lineNumber: 280,
                columnNumber: 112
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] font-bold text-black",
                        children: item_0.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/Herosection.js",
                        lineNumber: 280,
                        columnNumber: 235
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-gray-500",
                        children: item_0.sub
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/Herosection.js",
                        lineNumber: 280,
                        columnNumber: 301
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/Herosection.js",
                lineNumber: 280,
                columnNumber: 230
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/src/app/Home/Herosection.js",
        lineNumber: 280,
        columnNumber: 10
    }, this);
}
function _HeroSectionSlidesMapAnonymous(item, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 bg-white border border-black/5 rounded-xl p-3 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-lg bg-[#fafafa] shadow-sm flex items-center justify-center",
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/src/app/Home/Herosection.js",
                lineNumber: 283,
                columnNumber: 114
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-bold text-black whitespace-nowrap",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/Herosection.js",
                        lineNumber: 283,
                        columnNumber: 228
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-gray-400",
                        children: item.sub
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/Herosection.js",
                        lineNumber: 283,
                        columnNumber: 310
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/Herosection.js",
                lineNumber: 283,
                columnNumber: 223
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/Home/Herosection.js",
        lineNumber: 283,
        columnNumber: 10
    }, this);
}
function _HeroSectionUseState() {
    return createSlidesFromBanners([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackBanner"]
    ]);
}
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Home/Newsletter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsletterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
"use client";
;
;
;
;
function NewsletterSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "12176c59df66955d0b662cbc8086f1f4e286d8c9ce38a7b36c43c4db5c85a66c") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12176c59df66955d0b662cbc8086f1f4e286d8c9ce38a7b36c43c4db5c85a66c";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-0 top-0 h-72 w-72 rounded-full bg-gray-200/40 blur-3xl"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 right-0 h-96 w-96 rounded-full bg-zinc-200/40 blur-3xl"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 70
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        t4 = {
            duration: 0.7
        };
        t5 = {
            once: true
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.04),transparent_35%)]"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Newsletter.js",
                    lineNumber: 63,
                    columnNumber: 136
                }, this),
                "Weekly Exclusive Updates"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "max-w-xl text-4xl font-semibold leading-tight text-black md:text-5xl lg:text-6xl",
            children: [
                "Subscribe To Our",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mt-2 block text-gray-500",
                    children: "Newsletter"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Newsletter.js",
                    lineNumber: 71,
                    columnNumber: 123
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 max-w-lg text-lg leading-relaxed text-gray-600",
            children: "Get the latest product launches, exclusive discounts, fashion trends, and premium offers directly in your inbox."
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-2xl font-semibold text-black",
                    children: "25K+"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Newsletter.js",
                    lineNumber: 81,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-gray-500",
                    children: "Happy Subscribers"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Newsletter.js",
                    lineNumber: 81,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 81,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10",
            children: [
                t7,
                t8,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 flex flex-wrap gap-4",
                    children: [
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-2xl font-semibold text-black",
                                    children: "100%"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/Newsletter.js",
                                    lineNumber: 88,
                                    columnNumber: 176
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-gray-500",
                                    children: "Free Newsletter"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/Newsletter.js",
                                    lineNumber: 88,
                                    columnNumber: 235
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Home/Newsletter.js",
                            lineNumber: 88,
                            columnNumber: 103
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/Newsletter.js",
                    lineNumber: 88,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    let t14;
    let t15;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            opacity: 0,
            scale: 0.92
        };
        t13 = {
            opacity: 1,
            scale: 1
        };
        t14 = {
            duration: 0.6
        };
        t15 = {
            once: true
        };
        $[13] = t12;
        $[14] = t13;
        $[15] = t14;
        $[16] = t15;
    } else {
        t12 = $[13];
        t13 = $[14];
        t14 = $[15];
        t15 = $[16];
    }
    let t16;
    let t17;
    let t18;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                className: "h-8 w-8"
            }, void 0, false, {
                fileName: "[project]/src/app/Home/Newsletter.js",
                lineNumber: 126,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-3xl font-semibold text-black",
            children: "Join Our Community"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-gray-600",
            children: "Subscribe today and receive premium updates every week."
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[17] = t16;
        $[18] = t17;
        $[19] = t18;
    } else {
        t16 = $[17];
        t17 = $[18];
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    placeholder: "Enter your email",
                    className: "h-14 w-full rounded-2xl border border-gray-200 bg-white px-5 pr-14 text-black outline-none transition-all placeholder:text-gray-400 focus:border-black focus:ring-4 focus:ring-black/5"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Newsletter.js",
                    lineNumber: 139,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                    className: "absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Newsletter.js",
                    lineNumber: 139,
                    columnNumber: 285
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto max-w-7xl px-6 lg:px-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: t2,
                        whileInView: t3,
                        transition: t4,
                        viewport: t5,
                        className: "relative overflow-hidden rounded-[40px] border border-gray-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]",
                        children: [
                            t6,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid items-center gap-16 px-6 py-14 md:px-12 lg:grid-cols-2 lg:px-20 lg:py-20",
                                children: [
                                    t11,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: t12,
                                        whileInView: t13,
                                        transition: t14,
                                        viewport: t15,
                                        className: "relative z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[32px] border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-8 shadow-xl",
                                            children: [
                                                t16,
                                                t17,
                                                t18,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    className: "mt-8 space-y-5",
                                                    children: [
                                                        t19,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            className: "group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-black text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900",
                                                            children: [
                                                                "Subscribe Now",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Home/Newsletter.js",
                                                                    lineNumber: 146,
                                                                    columnNumber: 954
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Home/Newsletter.js",
                                                            lineNumber: 146,
                                                            columnNumber: 739
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Home/Newsletter.js",
                                                    lineNumber: 146,
                                                    columnNumber: 701
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-5 text-center text-sm text-gray-500",
                                                    children: "No spam • Unsubscribe anytime"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Home/Newsletter.js",
                                                    lineNumber: 146,
                                                    columnNumber: 1064
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Home/Newsletter.js",
                                            lineNumber: 146,
                                            columnNumber: 578
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/Newsletter.js",
                                        lineNumber: 146,
                                        columnNumber: 476
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Home/Newsletter.js",
                                lineNumber: 146,
                                columnNumber: 376
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Home/Newsletter.js",
                        lineNumber: 146,
                        columnNumber: 178
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Newsletter.js",
                    lineNumber: 146,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Newsletter.js",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    return t20;
}
_c = NewsletterSection;
var _c;
__turbopack_context__.k.register(_c, "NewsletterSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Home/Productgrid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PremiumCategorySections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/wishlist/clientWishlist.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const sections = [
    {
        badge: "Trending",
        title: "Gaming Setup",
        subtitle: "Premium accessories collection",
        button: "Shop Now",
        bg: "bg-[#f4f7ff]",
        items: [
            {
                name: "Gaming Chair",
                image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1000&auto=format&fit=crop",
                price: "$299"
            },
            {
                name: "RGB Keyboard",
                image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000&auto=format&fit=crop",
                price: "$149"
            },
            {
                name: "Gaming Mouse",
                image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1000&auto=format&fit=crop",
                price: "$89"
            },
            {
                name: "4K Monitor",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
                price: "$499"
            }
        ]
    },
    {
        badge: "Luxury",
        title: "Modern Decor",
        subtitle: "Minimal premium interiors",
        button: "Explore",
        bg: "bg-[#fff6ef]",
        items: [
            {
                name: "Luxury Sofa",
                image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop",
                price: "$799"
            },
            {
                name: "Designer Lamp",
                image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop",
                price: "$199"
            },
            {
                name: "Wood Table",
                image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1000&auto=format&fit=crop",
                price: "$259"
            },
            {
                name: "Modern Interior",
                image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
                price: "$399"
            }
        ]
    },
    {
        badge: "Hot Deals",
        title: "Smart Home",
        subtitle: "Upgrade your home setup",
        button: "View Deals",
        bg: "bg-[#f4fff8]",
        items: [
            {
                name: "Air Conditioner",
                image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop",
                price: "$599"
            },
            {
                name: "Microwave",
                image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=1000&auto=format&fit=crop",
                price: "$129"
            },
            {
                name: "Washing Machine",
                image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1000&auto=format&fit=crop",
                price: "$349"
            },
            {
                name: "Refrigerator",
                image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1000&auto=format&fit=crop",
                price: "$899"
            }
        ]
    },
    {
        badge: "New Arrival",
        title: "Fashion Wear",
        subtitle: "Trending styles collection",
        button: "Discover",
        bg: "bg-[#fff4fb]",
        items: [
            {
                name: "Luxury Watch",
                image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop",
                price: "$499"
            },
            {
                name: "Sneakers",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
                price: "$179"
            },
            {
                name: "Perfume",
                image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
                price: "$89"
            },
            {
                name: "Fashion Wear",
                image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop",
                price: "$129"
            }
        ]
    }
];
const trendingProducts = [
    {
        title: "Gaming Mouse",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1000&auto=format&fit=crop",
        price: "$89",
        bg: "bg-[#f4f7ff]"
    },
    {
        title: "Sneakers",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
        price: "$179",
        bg: "bg-[#fff6ef]"
    },
    {
        title: "Luxury Lamp",
        category: "Decor",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop",
        price: "$149",
        bg: "bg-[#f4fff8]"
    },
    {
        title: "Smart Watch",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
        price: "$249",
        bg: "bg-[#fff4fb]"
    }
];
function PremiumCategorySections() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "198bde0985a1c1a99abc9745b3e4508e7885880d38e657357ac3f799c20b1bb0") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "198bde0985a1c1a99abc9745b3e4508e7885880d38e657357ac3f799c20b1bb0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [wishlistItems, setWishlistItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "PremiumCategorySections[useEffect()]": ()=>{
                let active = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadWishlistItems"])().then({
                    "PremiumCategorySections[useEffect() > (anonymous)()]": (items)=>{
                        if (active) {
                            setWishlistItems(items);
                        }
                    }
                }["PremiumCategorySections[useEffect() > (anonymous)()]"]).catch({
                    "PremiumCategorySections[useEffect() > (anonymous)()]": ()=>{
                        if (active) {
                            setWishlistItems([]);
                        }
                    }
                }["PremiumCategorySections[useEffect() > (anonymous)()]"]);
                return ()=>{
                    active = false;
                };
            }
        })["PremiumCategorySections[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== wishlistItems) {
        t3 = ({
            "PremiumCategorySections[handleWishlist]": async (product)=>{
                ;
                try {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleWishlistProduct"])(product, wishlistItems);
                    if (result.changed) {
                        setWishlistItems(result.items);
                        window.dispatchEvent(new Event("wishlistUpdated"));
                    }
                } catch (t4) {
                    const error = t4;
                    console.error("Wishlist API failed", error);
                }
            }
        })["PremiumCategorySections[handleWishlist]"];
        $[4] = wishlistItems;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleWishlist = t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500",
                    children: "Premium Collections"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Productgrid.js",
                    lineNumber: 199,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-2 text-[28px] lg:text-[42px] leading-none font-extrabold text-black",
                    children: "Discover Categories"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Productgrid.js",
                    lineNumber: 199,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Productgrid.js",
            lineNumber: 199,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-end justify-between mb-5",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "hidden lg:flex items-center gap-2 h-10 px-4 rounded-xl bg-black text-white text-[12px] font-semibold hover:bg-orange-500 transition-all duration-300",
                    children: [
                        "View All",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/Productgrid.js",
                            lineNumber: 206,
                            columnNumber: 244
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/Productgrid.js",
                    lineNumber: 206,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Productgrid.js",
            lineNumber: 206,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== handleWishlist || $[9] !== wishlistItems) {
        t6 = sections.map({
            "PremiumCategorySections[sections.map()]": (section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `group relative overflow-hidden rounded-[28px] p-3.5 border border-black/5 ${section.bg}
              shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1 bg-white text-black text-[8px] font-bold uppercase tracking-[0.14em] px-2 py-1 rounded-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    size: 8
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Home/Productgrid.js",
                                                    lineNumber: 215,
                                                    columnNumber: 305
                                                }, this),
                                                section.badge
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Home/Productgrid.js",
                                            lineNumber: 215,
                                            columnNumber: 164
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-2.5 text-[22px] leading-none font-extrabold text-black",
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Home/Productgrid.js",
                                            lineNumber: 215,
                                            columnNumber: 348
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[11px] text-gray-500",
                                            children: section.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Home/Productgrid.js",
                                            lineNumber: 215,
                                            columnNumber: 442
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Home/Productgrid.js",
                                    lineNumber: 215,
                                    columnNumber: 159
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "PremiumCategorySections[sections.map() > <button>.onClick]": ()=>handleWishlist({
                                                id: section.title,
                                                title: section.title,
                                                name: section.title
                                            })
                                    }["PremiumCategorySections[sections.map() > <button>.onClick]"],
                                    className: "w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        size: 12,
                                        fill: wishlistItems.some({
                                            "PremiumCategorySections[sections.map() > wishlistItems.some()]": (wishlistItem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWishlistProductId"])(wishlistItem) === section.title
                                        }["PremiumCategorySections[sections.map() > wishlistItems.some()]"]) ? "currentColor" : "none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/Productgrid.js",
                                        lineNumber: 221,
                                        columnNumber: 159
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/Productgrid.js",
                                    lineNumber: 215,
                                    columnNumber: 516
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Home/Productgrid.js",
                            lineNumber: 215,
                            columnNumber: 104
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2.5",
                            children: section.items.map({
                                "PremiumCategorySections[sections.map() > section.items.map()]": (item, idx)=>{
                                    const productId = `${section.title}-${idx}`;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group/item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden rounded-[18px] bg-white border border-black/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-square overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: item.image,
                                                            alt: item.name,
                                                            className: "w-full h-full object-cover group-hover/item:scale-105 transition-all duration-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Productgrid.js",
                                                            lineNumber: 226,
                                                            columnNumber: 195
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: {
                                                                "PremiumCategorySections[sections.map() > section.items.map() > <button>.onClick]": ()=>handleWishlist({
                                                                        ...item,
                                                                        id: productId,
                                                                        title: item.name
                                                                    })
                                                            }["PremiumCategorySections[sections.map() > section.items.map() > <button>.onClick]"],
                                                            className: "absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                size: 10,
                                                                fill: wishlistItems.some({
                                                                    "PremiumCategorySections[sections.map() > section.items.map() > wishlistItems.some()]": (wishlistItem_0)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWishlistProductId"])(wishlistItem_0) === productId
                                                                }["PremiumCategorySections[sections.map() > section.items.map() > wishlistItems.some()]"]) ? "currentColor" : "none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Productgrid.js",
                                                                lineNumber: 232,
                                                                columnNumber: 213
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Productgrid.js",
                                                            lineNumber: 226,
                                                            columnNumber: 329
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "absolute bottom-1.5 right-1.5 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center opacity-0 translate-y-2 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-300 hover:bg-orange-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Home/Productgrid.js",
                                                                lineNumber: 234,
                                                                columnNumber: 408
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Productgrid.js",
                                                            lineNumber: 234,
                                                            columnNumber: 152
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Home/Productgrid.js",
                                                    lineNumber: 226,
                                                    columnNumber: 139
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[11px] font-semibold text-black line-clamp-1",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Productgrid.js",
                                                            lineNumber: 234,
                                                            columnNumber: 469
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-[1px] mt-1",
                                                            children: [
                                                                1,
                                                                2,
                                                                3,
                                                                4,
                                                                5
                                                            ].map(_PremiumCategorySectionsSectionsMapSectionItemsMapAnonymous)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Home/Productgrid.js",
                                                            lineNumber: 234,
                                                            columnNumber: 551
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1.5 flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[13px] font-extrabold text-black",
                                                                    children: item.price
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Home/Productgrid.js",
                                                                    lineNumber: 234,
                                                                    columnNumber: 747
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[8px] font-bold text-green-600",
                                                                    children: "Stock"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Home/Productgrid.js",
                                                                    lineNumber: 234,
                                                                    columnNumber: 822
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Home/Productgrid.js",
                                                            lineNumber: 234,
                                                            columnNumber: 689
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Home/Productgrid.js",
                                                    lineNumber: 234,
                                                    columnNumber: 448
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Home/Productgrid.js",
                                            lineNumber: 226,
                                            columnNumber: 60
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/src/app/Home/Productgrid.js",
                                        lineNumber: 226,
                                        columnNumber: 22
                                    }, this);
                                }
                            }["PremiumCategorySections[sections.map() > section.items.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/Productgrid.js",
                            lineNumber: 223,
                            columnNumber: 126
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/shop",
                            className: "mt-3 h-9 rounded-[14px] bg-black text-white flex items-center justify-between px-3.5 text-[11px] font-bold hover:bg-orange-500 transition-all duration-300",
                            children: [
                                section.button,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/Productgrid.js",
                                    lineNumber: 236,
                                    columnNumber: 287
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Home/Productgrid.js",
                            lineNumber: 236,
                            columnNumber: 85
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/app/Home/Productgrid.js",
                    lineNumber: 214,
                    columnNumber: 70
                }, this)
        }["PremiumCategorySections[sections.map()]"]);
        $[8] = handleWishlist;
        $[9] = wishlistItems;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#eceff1] py-6 lg:py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1500px] mx-auto px-4 lg:px-5",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4",
                        children: t6
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/Productgrid.js",
                        lineNumber: 246,
                        columnNumber: 110
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/Productgrid.js",
                lineNumber: 246,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Productgrid.js",
            lineNumber: 246,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    return t7;
}
_s(PremiumCategorySections, "LWCt+FS/fbZ0NYVmSdV1NvexBks=");
_c = PremiumCategorySections;
function _PremiumCategorySectionsSectionsMapSectionItemsMapAnonymous(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
        size: 7,
        className: "fill-orange-400 text-orange-400"
    }, i, false, {
        fileName: "[project]/src/app/Home/Productgrid.js",
        lineNumber: 255,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "PremiumCategorySections");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Home/ProductSlider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/wishlist/clientWishlist.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const products = [
    {
        id: 1,
        title: "Premium Headphones",
        category: "Audio",
        price: "₹2,499",
        oldPrice: "₹3,999",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Luxury Smart Watch",
        category: "Wearables",
        price: "₹4,999",
        oldPrice: "₹6,999",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Gaming Mouse",
        category: "Gaming",
        price: "₹1,299",
        oldPrice: "₹2,199",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Laptop Stand",
        category: "Accessories",
        price: "₹999",
        oldPrice: "₹1,499",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Bluetooth Speaker",
        category: "Speaker",
        price: "₹3,499",
        oldPrice: "₹4,499",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Wireless Keyboard",
        category: "Accessories",
        price: "₹2,199",
        oldPrice: "₹3,099",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "DSLR Camera",
        category: "Photography",
        price: "₹52,999",
        oldPrice: "₹59,999",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "VR Headset",
        category: "Gaming",
        price: "₹12,499",
        oldPrice: "₹15,999",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 9,
        title: "Premium Headphones",
        category: "Audio",
        price: "₹2,499",
        oldPrice: "₹3,999",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 10,
        title: "Luxury Smart Watch",
        category: "Wearables",
        price: "₹4,999",
        oldPrice: "₹6,999",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 11,
        title: "Gaming Mouse",
        category: "Gaming",
        price: "₹1,299",
        oldPrice: "₹2,199",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 12,
        title: "Laptop Stand",
        category: "Accessories",
        price: "₹999",
        oldPrice: "₹1,499",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 13,
        title: "Bluetooth Speaker",
        category: "Speaker",
        price: "₹3,499",
        oldPrice: "₹4,499",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 14,
        title: "Wireless Keyboard",
        category: "Accessories",
        price: "₹2,199",
        oldPrice: "₹3,099",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 15,
        title: "DSLR Camera",
        category: "Photography",
        price: "₹52,999",
        oldPrice: "₹59,999",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 16,
        title: "VR Headset",
        category: "Gaming",
        price: "₹12,499",
        oldPrice: "₹15,999",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop"
    }
];
function ProductSlider() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "0ab161d9dd1c6a880d94f10edb59cb5f80935e4ba8deab1844fc69f7bd50984d") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0ab161d9dd1c6a880d94f10edb59cb5f80935e4ba8deab1844fc69f7bd50984d";
    }
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [wishlistItems, setWishlistItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ProductSlider[scroll]": (direction)=>{
                if (!sliderRef.current) {
                    return;
                }
                sliderRef.current.scrollBy({
                    left: direction === "left" ? -320 : 320,
                    behavior: "smooth"
                });
            }
        })["ProductSlider[scroll]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const scroll = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ProductSlider[useEffect()]": ()=>{
                const slider = sliderRef.current;
                if (!slider) {
                    return;
                }
                const handleScroll = {
                    "ProductSlider[useEffect() > handleScroll]": ()=>{
                        const index = Math.round(slider.scrollLeft / 320);
                        setActive(index);
                    }
                }["ProductSlider[useEffect() > handleScroll]"];
                slider.addEventListener("scroll", handleScroll);
                return ()=>{
                    slider.removeEventListener("scroll", handleScroll);
                };
            }
        })["ProductSlider[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ProductSlider[useEffect()]": ()=>{
                let activeRequest = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadWishlistItems"])().then({
                    "ProductSlider[useEffect() > (anonymous)()]": (items)=>{
                        if (activeRequest) {
                            setWishlistItems(items);
                        }
                    }
                }["ProductSlider[useEffect() > (anonymous)()]"]).catch({
                    "ProductSlider[useEffect() > (anonymous)()]": ()=>{
                        if (activeRequest) {
                            setWishlistItems([]);
                        }
                    }
                }["ProductSlider[useEffect() > (anonymous)()]"]);
                return ()=>{
                    activeRequest = false;
                };
            }
        })["ProductSlider[useEffect()]"];
        t5 = [];
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[7] !== wishlistItems) {
        t6 = ({
            "ProductSlider[handleWishlist]": async (product)=>{
                ;
                try {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleWishlistProduct"])(product, wishlistItems);
                    if (result.changed) {
                        setWishlistItems(result.items);
                        window.dispatchEvent(new Event("wishlistUpdated"));
                    }
                } catch (t7) {
                    const error = t7;
                    console.error("Wishlist API failed", error);
                }
            }
        })["ProductSlider[handleWishlist]"];
        $[7] = wishlistItems;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const handleWishlist = t6;
    let t10;
    let t11;
    let t12;
    let t7;
    let t8;
    let t9;
    if ($[9] !== active || $[10] !== handleWishlist || $[11] !== wishlistItems) {
        const goToSlide = {
            "ProductSlider[goToSlide]": (index_0)=>{
                if (!sliderRef.current) {
                    return;
                }
                sliderRef.current.scrollTo({
                    left: index_0 * 320,
                    behavior: "smooth"
                });
                setActive(index_0);
            }
        }["ProductSlider[goToSlide]"];
        t12 = "relative py-16 bg-[#f8f5f0] overflow-hidden";
        t9 = "w-full px-4 md:px-8 xl:px-12";
        let t13;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-4 py-2 rounded-full bg-black text-white text-[11px] tracking-[3px] font-semibold",
                        children: "FEATURED PRODUCTS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/ProductSlider.js",
                        lineNumber: 280,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight",
                        children: "Trending Collection"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/ProductSlider.js",
                        lineNumber: 280,
                        columnNumber: 144
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/ProductSlider.js",
                lineNumber: 280,
                columnNumber: 13
            }, this);
            $[18] = t13;
        } else {
            t13 = $[18];
        }
        let t14;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = ({
                "ProductSlider[<button>.onClick]": ()=>scroll("left")
            })["ProductSlider[<button>.onClick]"];
            $[19] = t14;
        } else {
            t14 = $[19];
        }
        let t15;
        let t16;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t14,
                className: "w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-all duration-300 active:scale-95",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/ProductSlider.js",
                    lineNumber: 297,
                    columnNumber: 221
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ProductSlider.js",
                lineNumber: 297,
                columnNumber: 13
            }, this);
            t16 = ({
                "ProductSlider[<button>.onClick]": ()=>scroll("right")
            })["ProductSlider[<button>.onClick]"];
            $[20] = t15;
            $[21] = t16;
        } else {
            t15 = $[20];
            t16 = $[21];
        }
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-10",
                children: [
                    t13,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-3",
                        children: [
                            t15,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: t16,
                                className: "w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300 active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/ProductSlider.js",
                                    lineNumber: 308,
                                    columnNumber: 311
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Home/ProductSlider.js",
                                lineNumber: 308,
                                columnNumber: 131
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Home/ProductSlider.js",
                        lineNumber: 308,
                        columnNumber: 75
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/ProductSlider.js",
                lineNumber: 308,
                columnNumber: 13
            }, this);
            $[22] = t10;
        } else {
            t10 = $[22];
        }
        const t17 = products.map({
            "ProductSlider[products.map()]": (product_0, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `group relative flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] snap-start transition-all duration-500 ${active === index_1 ? "scale-100 opacity-100" : "scale-[0.97] opacity-80"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[430px] rounded-[28px] overflow-hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-full overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: product_0.image,
                                        alt: product_0.title,
                                        fill: true,
                                        sizes: "(max-width: 639px) 280px, (max-width: 767px) 300px, 320px",
                                        priority: true,
                                        className: "object-cover group-hover:scale-110 transition-transform duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/ProductSlider.js",
                                        lineNumber: 314,
                                        columnNumber: 452
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/ProductSlider.js",
                                        lineNumber: 314,
                                        columnNumber: 680
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Home/ProductSlider.js",
                                lineNumber: 314,
                                columnNumber: 396
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 flex flex-col gap-2 z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ProductSlider[products.map() > <button>.onClick]": ()=>handleWishlist(product_0)
                                        }["ProductSlider[products.map() > <button>.onClick]"],
                                        className: "w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            size: 16,
                                            fill: wishlistItems.some({
                                                "ProductSlider[products.map() > wishlistItems.some()]": (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWishlistProductId"])(item) === product_0.id
                                            }["ProductSlider[products.map() > wishlistItems.some()]"]) ? "currentColor" : "none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Home/ProductSlider.js",
                                            lineNumber: 316,
                                            columnNumber: 259
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/ProductSlider.js",
                                        lineNumber: 314,
                                        columnNumber: 846
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Home/ProductSlider.js",
                                            lineNumber: 318,
                                            columnNumber: 311
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/ProductSlider.js",
                                        lineNumber: 318,
                                        columnNumber: 112
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Home/ProductSlider.js",
                                lineNumber: 314,
                                columnNumber: 781
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-full p-5 z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-orange-300 uppercase tracking-[3px] text-[11px] font-semibold",
                                        children: product_0.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/ProductSlider.js",
                                        lineNumber: 318,
                                        columnNumber: 401
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[26px] font-semibold text-white mt-2 line-clamp-1",
                                        children: product_0.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/ProductSlider.js",
                                        lineNumber: 318,
                                        columnNumber: 507
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 mt-3",
                                        children: [
                                            [
                                                ...Array(5)
                                            ].map(_ProductSliderProductsMapAnonymous),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/80 text-sm ml-2",
                                                children: product_0.rating
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/ProductSlider.js",
                                                lineNumber: 318,
                                                columnNumber: 701
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Home/ProductSlider.js",
                                        lineNumber: 318,
                                        columnNumber: 600
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 flex items-end justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-2xl font-extrabold text-white",
                                                        children: product_0.price
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Home/ProductSlider.js",
                                                        lineNumber: 318,
                                                        columnNumber: 835
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white/50 line-through",
                                                        children: product_0.oldPrice
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Home/ProductSlider.js",
                                                        lineNumber: 318,
                                                        columnNumber: 908
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Home/ProductSlider.js",
                                                lineNumber: 318,
                                                columnNumber: 830
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 hover:rotate-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Home/ProductSlider.js",
                                                    lineNumber: 318,
                                                    columnNumber: 1163
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/ProductSlider.js",
                                                lineNumber: 318,
                                                columnNumber: 988
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Home/ProductSlider.js",
                                        lineNumber: 318,
                                        columnNumber: 777
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Home/ProductSlider.js",
                                lineNumber: 318,
                                columnNumber: 343
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-[28px] border border-white/10 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Home/ProductSlider.js",
                                lineNumber: 318,
                                columnNumber: 1209
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Home/ProductSlider.js",
                        lineNumber: 314,
                        columnNumber: 282
                    }, this)
                }, product_0.id, false, {
                    fileName: "[project]/src/app/Home/ProductSlider.js",
                    lineNumber: 314,
                    columnNumber: 64
                }, this)
        }["ProductSlider[products.map()]"]);
        if ($[23] !== t17) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sliderRef,
                className: "flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4",
                children: t17
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ProductSlider.js",
                lineNumber: 321,
                columnNumber: 13
            }, this);
            $[23] = t17;
            $[24] = t11;
        } else {
            t11 = $[24];
        }
        t7 = "flex justify-center items-center gap-2 mt-8";
        t8 = products.map({
            "ProductSlider[products.map()]": (__0, index_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProductSlider[products.map() > <button>.onClick]": ()=>goToSlide(index_2)
                    }["ProductSlider[products.map() > <button>.onClick]"],
                    className: `rounded-full transition-all duration-300 ${active === index_2 ? "w-8 h-2 bg-black" : "w-2 h-2 bg-gray-400 hover:bg-gray-600"}`
                }, index_2, false, {
                    fileName: "[project]/src/app/Home/ProductSlider.js",
                    lineNumber: 329,
                    columnNumber: 58
                }, this)
        }["ProductSlider[products.map()]"]);
        $[9] = active;
        $[10] = handleWishlist;
        $[11] = wishlistItems;
        $[12] = t10;
        $[13] = t11;
        $[14] = t12;
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        t10 = $[12];
        t11 = $[13];
        t12 = $[14];
        t7 = $[15];
        t8 = $[16];
        t9 = $[17];
    }
    let t13;
    if ($[25] !== t7 || $[26] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[25] = t7;
        $[26] = t8;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== t10 || $[29] !== t11 || $[30] !== t13 || $[31] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t11;
        $[30] = t13;
        $[31] = t9;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t12 || $[34] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t12,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[33] = t12;
        $[34] = t14;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    return t15;
}
_s(ProductSlider, "Syshd9S2X43rPf7a1a7azE0+uJ8=");
_c = ProductSlider;
function _ProductSliderProductsMapAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
        size: 14,
        className: "fill-yellow-400 text-yellow-400"
    }, i, false, {
        fileName: "[project]/src/app/Home/ProductSlider.js",
        lineNumber: 382,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProductSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Home/ShopByCategoryCards.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopByCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
"use client";
;
;
;
;
;
const categories = [
    {
        id: 1,
        title: "Sneakers",
        items: "120+ Products",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop",
        className: "xl:col-span-2 xl:row-span-2"
    },
    {
        id: 2,
        title: "Watches",
        items: "80+ Products",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1400&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Headphones",
        items: "60+ Products",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Fashion",
        items: "200+ Products",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
        className: "xl:col-span-2"
    },
    {
        id: 5,
        title: "Gaming",
        items: "95+ Products",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1400&auto=format&fit=crop",
        className: "xl:col-span-2 relative overflow-hidden",
        special: true
    },
    {
        id: 6,
        title: "Perfumes",
        items: "40+ Products",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1400&auto=format&fit=crop"
    },
    /* DIFFERENT BIG MODERN CARD */ {
        id: 7,
        title: "Luxury Collection",
        items: "500+ Premium Products",
        image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1400&auto=format&fit=crop"
    }
];
function ShopByCategory() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "1337da7269b4731dd5d50ee8c65ee41556440af2ca76ebd7da740d781fd0f030") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1337da7269b4731dd5d50ee8c65ee41556440af2ca76ebd7da740d781fd0f030";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[11px] uppercase tracking-[3px] font-semibold text-orange-500",
                    children: "Categories"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                    lineNumber: 58,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-2 text-2xl md:text-4xl font-extrabold tracking-[-2px] text-[#111]",
                    children: "Shop By Category"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                    lineNumber: 58,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-end justify-between mb-6",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "hidden md:flex items-center gap-2 text-sm font-semibold text-[#111] hover:text-orange-500 transition-all",
                    children: [
                        "View All",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                            lineNumber: 65,
                            columnNumber: 200
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                    lineNumber: 65,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full py-8 bg-[#f5f5f5]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1450px] mx-auto px-4 md:px-6",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 auto-rows-[260px] gap-4",
                        children: categories.map(_ShopByCategoryCategoriesMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                        lineNumber: 72,
                        columnNumber: 113
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                lineNumber: 72,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = ShopByCategory;
function _ShopByCategoryCategoriesMap(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 25
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.45,
            delay: index * 0.05
        },
        viewport: {
            once: true
        },
        className: `group relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] cursor-pointer ${item.className || ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: item.image,
                    alt: item.title,
                    fill: true,
                    sizes: "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw",
                    className: "object-cover group-hover:scale-105 transition-all duration-700"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                    lineNumber: 91,
                    columnNumber: 223
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                lineNumber: 91,
                columnNumber: 173
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                lineNumber: 91,
                columnNumber: 424
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] uppercase tracking-[2px] font-semibold text-[#111]",
                    children: "Trending"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                    lineNumber: 91,
                    columnNumber: 612
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                lineNumber: 91,
                columnNumber: 519
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/70 text-xs font-medium",
                                    children: item.items
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                                    lineNumber: 91,
                                    columnNumber: 826
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-1 text-2xl font-extrabold tracking-[-1px] text-white",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                                    lineNumber: 91,
                                    columnNumber: 891
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                            lineNumber: 91,
                            columnNumber: 821
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-11 h-11 rounded-xl bg-white text-[#111] flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                                lineNumber: 91,
                                columnNumber: 1165
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                            lineNumber: 91,
                            columnNumber: 986
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                    lineNumber: 91,
                    columnNumber: 767
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                lineNumber: 91,
                columnNumber: 714
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-16 -right-16 w-[140px] h-[140px] rounded-full bg-orange-500/20 blur-[70px] opacity-0 group-hover:opacity-100 transition-all duration-500"
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                lineNumber: 91,
                columnNumber: 1209
            }, this)
        ]
    }, item.id, true, {
        fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
        lineNumber: 80,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ShopByCategory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Home/TrendingProductSlider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrendingProductsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/wishlist/clientWishlist.js [app-client] (ecmascript)");
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
const trendingProducts = [
    {
        id: 1,
        title: "Nike Air Max",
        category: "Sneakers",
        price: "₹5,999",
        oldPrice: "₹8,999",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Apple Watch Ultra",
        category: "Smart Watch",
        price: "₹79,999",
        oldPrice: "₹92,999",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Gaming Headset",
        category: "Gaming",
        price: "₹2,499",
        oldPrice: "₹4,499",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Sony Camera",
        category: "Photography",
        price: "₹54,999",
        oldPrice: "₹68,999",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    }
];
function TrendingProductsSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "f34cdbade5dee815ed10b72e27366c23222162cf797f0119ec79257bd46db600") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f34cdbade5dee815ed10b72e27366c23222162cf797f0119ec79257bd46db600";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [wishlistItems, setWishlistItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "TrendingProductsSection[useEffect()]": ()=>{
                let active = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadWishlistItems"])().then({
                    "TrendingProductsSection[useEffect() > (anonymous)()]": (items)=>{
                        if (active) {
                            setWishlistItems(items);
                        }
                    }
                }["TrendingProductsSection[useEffect() > (anonymous)()]"]).catch({
                    "TrendingProductsSection[useEffect() > (anonymous)()]": ()=>{
                        if (active) {
                            setWishlistItems([]);
                        }
                    }
                }["TrendingProductsSection[useEffect() > (anonymous)()]"]);
                return ()=>{
                    active = false;
                };
            }
        })["TrendingProductsSection[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== wishlistItems) {
        t3 = ({
            "TrendingProductsSection[handleWishlist]": async (product)=>{
                ;
                try {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleWishlistProduct"])(product, wishlistItems);
                    if (result.changed) {
                        setWishlistItems(result.items);
                        window.dispatchEvent(new Event("wishlistUpdated"));
                    }
                } catch (t4) {
                    const error = t4;
                    console.error("Wishlist API failed", error);
                }
            }
        })["TrendingProductsSection[handleWishlist]"];
        $[4] = wishlistItems;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleWishlist = t3;
    let t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 w-[300px] h-[300px] bg-orange-200/30 blur-[120px] rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-100/40 blur-[120px] rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                    size: 15,
                    className: "text-orange-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                    lineNumber: 123,
                    columnNumber: 125
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs tracking-[3px] text-orange-500 uppercase font-bold",
                    children: "Trending Products"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                    lineNumber: 123,
                    columnNumber: 172
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-5 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight",
                    children: [
                        "Explore Trending ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                            lineNumber: 130,
                            columnNumber: 121
                        }, this),
                        "Collections"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                    lineNumber: 130,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/shop",
                    className: "group flex items-center gap-2 text-gray-800 hover:text-orange-500 transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold tracking-wide",
                            children: "View All Products"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                            lineNumber: 137,
                            columnNumber: 226
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            size: 18,
                            className: "group-hover:translate-x-1 transition-all duration-300"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                            lineNumber: 137,
                            columnNumber: 304
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                    lineNumber: 137,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== handleWishlist || $[12] !== wishlistItems) {
        t9 = trendingProducts.map({
            "TrendingProductsSection[trendingProducts.map()]": (product_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 60
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6,
                        delay: index * 0.1
                    },
                    viewport: {
                        once: true
                    },
                    className: "group relative bg-white rounded-[34px] overflow-hidden border border-[#f1ede7] hover:border-orange-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)] transition-all duration-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[320px] overflow-hidden bg-[#f8f8f8]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: product_0.image,
                                    alt: product_0.title,
                                    fill: true,
                                    sizes: "(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw",
                                    className: "object-cover group-hover:scale-110 transition-transform duration-700"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                    lineNumber: 156,
                                    columnNumber: 305
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                    lineNumber: 156,
                                    columnNumber: 516
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-4 left-4 px-4 py-2 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg",
                                    children: "30% OFF"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                    lineNumber: 156,
                                    columnNumber: 614
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "TrendingProductsSection[trendingProducts.map() > <button>.onClick]": ()=>handleWishlist(product_0)
                                    }["TrendingProductsSection[trendingProducts.map() > <button>.onClick]"],
                                    className: "absolute top-4 right-4 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        size: 18,
                                        fill: wishlistItems.some({
                                            "TrendingProductsSection[trendingProducts.map() > wishlistItems.some()]": (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$clientWishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWishlistProductId"])(item) === product_0.id
                                        }["TrendingProductsSection[trendingProducts.map() > wishlistItems.some()]"]) ? "currentColor" : "none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                        lineNumber: 158,
                                        columnNumber: 293
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                    lineNumber: 156,
                                    columnNumber: 742
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-xl",
                                        children: "Quick View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                        lineNumber: 160,
                                        columnNumber: 292
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                    lineNumber: 160,
                                    columnNumber: 128
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                            lineNumber: 156,
                            columnNumber: 240
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-h-[236px] flex-col p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-orange-500 uppercase tracking-[3px] text-[11px] font-bold",
                                    children: product_0.category
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                    lineNumber: 160,
                                    columnNumber: 532
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-2 truncate text-[26px] font-extrabold leading-snug text-gray-900",
                                    title: product_0.title,
                                    children: product_0.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                    lineNumber: 160,
                                    columnNumber: 634
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex min-w-0 items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex shrink-0 items-center gap-0.5",
                                            children: [
                                                ...Array(5)
                                            ].map(_TrendingProductsSectionTrendingProductsMapAnonymous)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                            lineNumber: 160,
                                            columnNumber: 818
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 truncate text-sm font-medium text-gray-500",
                                            children: "(4.9 Reviews)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                            lineNumber: 160,
                                            columnNumber: 949
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                    lineNumber: 160,
                                    columnNumber: 764
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-auto flex items-end justify-between gap-4 border-t border-gray-100 pt-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-3xl font-extrabold text-gray-900",
                                                    children: product_0.price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                                    lineNumber: 160,
                                                    columnNumber: 1158
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-400 line-through mt-1",
                                                    children: product_0.oldPrice
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                                    lineNumber: 160,
                                                    columnNumber: 1234
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                            lineNumber: 160,
                                            columnNumber: 1133
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "group/cart flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500",
                                            "aria-label": `View ${product_0.title}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                size: 20,
                                                className: "group-hover/cart:scale-110 transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                                lineNumber: 160,
                                                columnNumber: 1555
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                            lineNumber: 160,
                                            columnNumber: 1319
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                    lineNumber: 160,
                                    columnNumber: 1041
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                            lineNumber: 160,
                            columnNumber: 483
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none bg-gradient-to-t from-orange-100/20 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                            lineNumber: 160,
                            columnNumber: 1668
                        }, this)
                    ]
                }, product_0.id, true, {
                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                    lineNumber: 145,
                    columnNumber: 80
                }, this)
        }["TrendingProductsSection[trendingProducts.map()]"]);
        $[11] = handleWishlist;
        $[12] = wishlistItems;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative py-20 bg-[#faf7f2] overflow-hidden",
            children: [
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full px-4 md:px-8 xl:px-14 relative z-10",
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7",
                            children: t9
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                            lineNumber: 170,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                    lineNumber: 170,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    return t10;
}
_s(TrendingProductsSection, "LWCt+FS/fbZ0NYVmSdV1NvexBks=");
_c = TrendingProductsSection;
function _TrendingProductsSectionTrendingProductsMapAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
        size: 15,
        className: "fill-yellow-400 text-yellow-400"
    }, i, false, {
        fileName: "[project]/src/app/Home/TrendingProductSlider.js",
        lineNumber: 179,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TrendingProductsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_0~222dx._.js.map