(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/Home/BestSellersSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BestSellersSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "e09920c8e00f93c00a52461860045a9692a9dbf2689559e090920a15ef06d9d8") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e09920c8e00f93c00a52461860045a9692a9dbf2689559e090920a15ef06d9d8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[5px] text-red-500 font-semibold mb-3",
                            children: "Top Products"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/BestSellersSection.js",
                            lineNumber: 50,
                            columnNumber: 102
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-extrabold text-black leading-tight",
                            children: "Best Sellers"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/BestSellersSection.js",
                            lineNumber: 50,
                            columnNumber: 198
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                    lineNumber: 50,
                    columnNumber: 97
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 max-w-xl text-sm md:text-base leading-relaxed",
                    children: "Explore our most loved and highest-rated products picked by thousands of customers worldwide."
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/BestSellersSection.js",
                    lineNumber: 50,
                    columnNumber: 298
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/BestSellersSection.js",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full bg-[#f8f8f8] py-20 px-4 md:px-10 lg:px-16 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1500px] mx-auto",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-6",
                        children: bestSellers.map(_BestSellersSectionBestSellersMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/BestSellersSection.js",
                        lineNumber: 57,
                        columnNumber: 140
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/BestSellersSection.js",
                lineNumber: 57,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/BestSellersSection.js",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = BestSellersSection;
function _BestSellersSectionBestSellersMap(product, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
        className: "group cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative pb-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 top-0 bottom-0 rounded-[26px] bg-gradient-to-b from-orange-300 to-orange-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/BestSellersSection.js",
                        lineNumber: 76,
                        columnNumber: 72
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[190px] w-full rounded-[26px] overflow-hidden bg-[#f2f2f2] shadow-[0_4px_14px_rgba(0,0,0,0.06)] group-hover:shadow-[0_10px_28px_rgba(0,0,0,0.1)] transition-all duration-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: product.image,
                                alt: product.title,
                                fill: true,
                                sizes: "(max-width: 639px) 50vw, (max-width: 1279px) 50vw, 25vw",
                                className: "object-cover group-hover:scale-105 transition-transform duration-700"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Home/BestSellersSection.js",
                                lineNumber: 76,
                                columnNumber: 388
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        size: 12,
                                        className: "fill-orange-500 text-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/BestSellersSection.js",
                                        lineNumber: 76,
                                        columnNumber: 705
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-gray-800",
                                        children: product.rating
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/BestSellersSection.js",
                                        lineNumber: 76,
                                        columnNumber: 767
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Home/BestSellersSection.js",
                                lineNumber: 76,
                                columnNumber: 594
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Home/BestSellersSection.js",
                        lineNumber: 76,
                        columnNumber: 187
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/BestSellersSection.js",
                lineNumber: 76,
                columnNumber: 39
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[15px] font-bold text-gray-900 truncate",
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/BestSellersSection.js",
                        lineNumber: 76,
                        columnNumber: 889
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-sm text-gray-500 truncate",
                        children: product.tag
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/BestSellersSection.js",
                        lineNumber: 76,
                        columnNumber: 970
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1.5 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-bold text-gray-900",
                                children: product.price
                            }, void 0, false, {
                                fileName: "[project]/src/app/Home/BestSellersSection.js",
                                lineNumber: 76,
                                columnNumber: 1088
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-400 line-through",
                                children: product.oldPrice
                            }, void 0, false, {
                                fileName: "[project]/src/app/Home/BestSellersSection.js",
                                lineNumber: 76,
                                columnNumber: 1162
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Home/BestSellersSection.js",
                        lineNumber: 76,
                        columnNumber: 1040
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/BestSellersSection.js",
                lineNumber: 76,
                columnNumber: 862
            }, this)
        ]
    }, product.id, true, {
        fileName: "[project]/src/app/Home/BestSellersSection.js",
        lineNumber: 65,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "BestSellersSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/apis/banners/banners.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchBanners",
    ()=>fetchBanners,
    "getBannersForCategory",
    ()=>getBannersForCategory,
    "getCategoryNameFromBanner",
    ()=>getCategoryNameFromBanner,
    "getVendorIdFromBanner",
    ()=>getVendorIdFromBanner
]);
const API_BASE = "https://amazon-multi-vendor-3.onrender.com/api";
async function fetchBanners() {
    const res = await fetch(`${API_BASE}/banners?session_type=home_page`, {
        cache: "no-store"
    });
    if (!res.ok) {
        throw new Error("Failed to fetch banners");
    }
    const data = await res.json();
    if (!data.success || !Array.isArray(data.data)) {
        throw new Error("Invalid banners response");
    }
    // sirf active banners hi dikhane hai
    return data.data.filter((banner)=>banner.is_active);
}
function getBannersForCategory(banners) {
    return Array.isArray(banners) ? banners : [];
}
function getCategoryNameFromBanner(banner) {
    const categoryName = banner?.categoryId?.name || banner?.categoryName || banner?.category;
    return typeof categoryName === "string" ? categoryName.trim() : "";
}
function getVendorIdFromBanner(banner) {
    const vendorId = banner?.vendorId?._id || banner?.vendorId;
    return typeof vendorId === "string" ? vendorId.trim() : "";
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/banners/banners.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HeroSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "066e3e7da307a97a02182e2ce539f49f6bd27589edd461b6a3f6e74d440c5609") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "066e3e7da307a97a02182e2ce539f49f6bd27589edd461b6a3f6e74d440c5609";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [banners, setBanners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "HeroSection[useEffect()]": ()=>{
                let isMounted = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBanners"])().then({
                    "HeroSection[useEffect() > (anonymous)()]": (data)=>{
                        if (!isMounted) {
                            return;
                        }
                        setBanners((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBannersForCategory"])(data));
                    }
                }["HeroSection[useEffect() > (anonymous)()]"]).catch({
                    "HeroSection[useEffect() > (anonymous)()]": ()=>{
                        if (!isMounted) {
                            return;
                        }
                        setBanners([]);
                    }
                }["HeroSection[useEffect() > (anonymous)()]"]);
                return ()=>{
                    isMounted = false;
                };
            }
        })["HeroSection[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== banners.length) {
        t3 = ({
            "HeroSection[useEffect()]": ()=>{
                if (banners.length <= 1) {
                    return;
                }
                timerRef.current = setInterval({
                    "HeroSection[useEffect() > setInterval()]": ()=>{
                        setCurrent({
                            "HeroSection[useEffect() > setInterval() > setCurrent()]": (prev)=>(prev + 1) % banners.length
                        }["HeroSection[useEffect() > setInterval() > setCurrent()]"]);
                    }
                }["HeroSection[useEffect() > setInterval()]"], 4000);
                return ()=>clearInterval(timerRef.current);
            }
        })["HeroSection[useEffect()]"];
        t4 = [
            banners.length
        ];
        $[4] = banners.length;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[7] !== banners.length || $[8] !== current) {
        t5 = ({
            "HeroSection[useEffect()]": ()=>{
                if (current >= banners.length) {
                    setCurrent(0);
                }
            }
        })["HeroSection[useEffect()]"];
        t6 = [
            banners.length,
            current
        ];
        $[7] = banners.length;
        $[8] = current;
        $[9] = t5;
        $[10] = t6;
    } else {
        t5 = $[9];
        t6 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t10;
    let t11;
    let t12;
    let t7;
    let t8;
    let t9;
    if ($[11] !== banners || $[12] !== current || $[13] !== router) {
        t12 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const goTo = {
                "HeroSection[goTo]": (index)=>{
                    clearInterval(timerRef.current);
                    setCurrent(index);
                }
            }["HeroSection[goTo]"];
            let t13;
            if ($[20] !== banners.length) {
                t13 = ({
                    "HeroSection[goPrev]": ()=>{
                        clearInterval(timerRef.current);
                        setCurrent({
                            "HeroSection[goPrev > setCurrent()]": (prev_0)=>(prev_0 - 1 + banners.length) % banners.length
                        }["HeroSection[goPrev > setCurrent()]"]);
                    }
                })["HeroSection[goPrev]"];
                $[20] = banners.length;
                $[21] = t13;
            } else {
                t13 = $[21];
            }
            const goPrev = t13;
            let t14;
            if ($[22] !== banners.length) {
                t14 = ({
                    "HeroSection[goNext]": ()=>{
                        clearInterval(timerRef.current);
                        setCurrent({
                            "HeroSection[goNext > setCurrent()]": (prev_1)=>(prev_1 + 1) % banners.length
                        }["HeroSection[goNext > setCurrent()]"]);
                    }
                })["HeroSection[goNext]"];
                $[22] = banners.length;
                $[23] = t14;
            } else {
                t14 = $[23];
            }
            const goNext = t14;
            let t15;
            if ($[24] !== router) {
                t15 = ({
                    "HeroSection[handleBannerClick]": (banner)=>{
                        const categoryName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryNameFromBanner"])(banner);
                        const vendorId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVendorIdFromBanner"])(banner);
                        const params = new URLSearchParams();
                        if (categoryName) {
                            params.set("category", categoryName);
                        }
                        if (vendorId) {
                            params.set("vendorId", vendorId);
                        }
                        const queryString = params.toString();
                        router.push(queryString ? `/shop?${queryString}` : "/shop");
                    }
                })["HeroSection[handleBannerClick]"];
                $[24] = router;
                $[25] = t15;
            } else {
                t15 = $[25];
            }
            const handleBannerClick = t15;
            if (banners.length === 0) {
                t12 = null;
                break bb0;
            }
            t11 = "w-full";
            t10 = "max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 pt-4";
            t7 = "relative w-full h-[240px] sm:h-[340px] rounded-2xl overflow-hidden shadow-md";
            const t16 = `translateX(-${current * 100}%)`;
            let t17;
            if ($[26] !== t16) {
                t17 = {
                    transform: t16
                };
                $[26] = t16;
                $[27] = t17;
            } else {
                t17 = $[27];
            }
            let t18;
            if ($[28] !== banners || $[29] !== handleBannerClick) {
                let t19;
                if ($[31] !== handleBannerClick) {
                    t19 = ({
                        "HeroSection[banners.map()]": (banner_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "button",
                                tabIndex: 0,
                                onClick: {
                                    "HeroSection[banners.map() > <div>.onClick]": ()=>handleBannerClick(banner_0)
                                }["HeroSection[banners.map() > <div>.onClick]"],
                                onKeyDown: {
                                    "HeroSection[banners.map() > <div>.onKeyDown]": (e)=>{
                                        if (e.key === "Enter" || e.key === " ") {
                                            handleBannerClick(banner_0);
                                        }
                                    }
                                }["HeroSection[banners.map() > <div>.onKeyDown]"],
                                className: "relative w-full h-full flex-shrink-0 cursor-pointer overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: banner_0.image_url,
                                        alt: banner_0.title || "banner",
                                        className: "absolute inset-0 w-full h-full object-cover scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/Herosection.js",
                                        lineNumber: 208,
                                        columnNumber: 144
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/Herosection.js",
                                        lineNumber: 208,
                                        columnNumber: 275
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 z-10 h-full flex flex-col justify-center max-w-[70%] sm:max-w-[55%] px-6 sm:px-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-white font-extrabold text-2xl sm:text-4xl leading-tight drop-shadow-md",
                                                children: banner_0.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 208,
                                                columnNumber: 486
                                            }, this),
                                            banner_0.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/90 font-medium text-sm sm:text-base mt-2 drop-shadow-sm",
                                                children: banner_0.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 208,
                                                columnNumber: 624
                                            }, this),
                                            banner_0.discount_percentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-yellow-300 font-semibold text-sm sm:text-base mt-1",
                                                children: [
                                                    "Flat ",
                                                    banner_0.discount_percentage,
                                                    "% OFF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 208,
                                                columnNumber: 770
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "HeroSection[banners.map() > <button>.onClick]": (e_0)=>{
                                                        e_0.stopPropagation();
                                                        handleBannerClick(banner_0);
                                                    }
                                                }["HeroSection[banners.map() > <button>.onClick]"],
                                                className: "mt-4 w-fit bg-white text-black font-semibold text-sm sm:text-base px-5 py-2 rounded-full hover:bg-gray-100 transition",
                                                children: "Explore Now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Home/Herosection.js",
                                                lineNumber: 208,
                                                columnNumber: 886
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Home/Herosection.js",
                                        lineNumber: 208,
                                        columnNumber: 370
                                    }, this)
                                ]
                            }, banner_0._id, true, {
                                fileName: "[project]/src/app/Home/Herosection.js",
                                lineNumber: 200,
                                columnNumber: 55
                            }, this)
                    })["HeroSection[banners.map()]"];
                    $[31] = handleBannerClick;
                    $[32] = t19;
                } else {
                    t19 = $[32];
                }
                t18 = banners.map(t19);
                $[28] = banners;
                $[29] = handleBannerClick;
                $[30] = t18;
            } else {
                t18 = $[30];
            }
            if ($[33] !== t17 || $[34] !== t18) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full h-full transition-transform duration-700 ease-in-out",
                    style: t17,
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Herosection.js",
                    lineNumber: 228,
                    columnNumber: 14
                }, this);
                $[33] = t17;
                $[34] = t18;
                $[35] = t8;
            } else {
                t8 = $[35];
            }
            t9 = banners.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goPrev,
                        "aria-label": "Previous banner",
                        className: "absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black w-9 h-9 rounded-full flex items-center justify-center shadow",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/Herosection.js",
                        lineNumber: 235,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goNext,
                        "aria-label": "Next banner",
                        className: "absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black w-9 h-9 rounded-full flex items-center justify-center shadow",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/Herosection.js",
                        lineNumber: 235,
                        columnNumber: 257
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2",
                        children: banners.map({
                            "HeroSection[banners.map()]": (banner_1, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "HeroSection[banners.map() > <button>.onClick]": ()=>goTo(index_0)
                                    }["HeroSection[banners.map() > <button>.onClick]"],
                                    "aria-label": `Go to slide ${index_0 + 1}`,
                                    className: `h-2 rounded-full transition-all ${index_0 === current ? "w-6 bg-white" : "w-2 bg-white/50"}`
                                }, banner_1._id, false, {
                                    fileName: "[project]/src/app/Home/Herosection.js",
                                    lineNumber: 236,
                                    columnNumber: 66
                                }, this)
                        }["HeroSection[banners.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/Herosection.js",
                        lineNumber: 235,
                        columnNumber: 475
                    }, this)
                ]
            }, void 0, true);
        }
        $[11] = banners;
        $[12] = current;
        $[13] = router;
        $[14] = t10;
        $[15] = t11;
        $[16] = t12;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t10 = $[14];
        t11 = $[15];
        t12 = $[16];
        t7 = $[17];
        t8 = $[18];
        t9 = $[19];
    }
    if (t12 !== Symbol.for("react.early_return_sentinel")) {
        return t12;
    }
    let t13;
    if ($[36] !== t7 || $[37] !== t8 || $[38] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Herosection.js",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[36] = t7;
        $[37] = t8;
        $[38] = t9;
        $[39] = t13;
    } else {
        t13 = $[39];
    }
    let t14;
    if ($[40] !== t10 || $[41] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Herosection.js",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t13;
        $[42] = t14;
    } else {
        t14 = $[42];
    }
    let t15;
    if ($[43] !== t11 || $[44] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t11,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Herosection.js",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[43] = t11;
        $[44] = t14;
        $[45] = t15;
    } else {
        t15 = $[45];
    }
    return t15;
}
_s(HeroSection, "yy/pZmFPx9onDhoYEkvam44ss+Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HeroSection;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
"use client";
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "005495c62af813e9000167e74031051ec0b83e7a5373cf042abba670c5b1c6c9") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "005495c62af813e9000167e74031051ec0b83e7a5373cf042abba670c5b1c6c9";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500",
                    children: "Premium Collections"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Productgrid.js",
                    lineNumber: 134,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-2 text-[28px] lg:text-[42px] leading-none font-extrabold text-black",
                    children: "Discover Categories"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/Productgrid.js",
                    lineNumber: 134,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Productgrid.js",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-end justify-between mb-5",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "hidden lg:flex items-center gap-2 h-10 px-4 rounded-xl bg-black text-white text-[12px] font-semibold hover:bg-orange-500 transition-all duration-300",
                    children: [
                        "View All",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/Productgrid.js",
                            lineNumber: 141,
                            columnNumber: 244
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/Productgrid.js",
                    lineNumber: 141,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Productgrid.js",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#eceff1] py-6 lg:py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1500px] mx-auto px-4 lg:px-5",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4",
                        children: sections.map(_PremiumCategorySectionsSectionsMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/Productgrid.js",
                        lineNumber: 148,
                        columnNumber: 110
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/Productgrid.js",
                lineNumber: 148,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/Productgrid.js",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = PremiumCategorySections;
function _PremiumCategorySectionsSectionsMap(section, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 157,
                                        columnNumber: 305
                                    }, this),
                                    section.badge
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Home/Productgrid.js",
                                lineNumber: 157,
                                columnNumber: 164
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-2.5 text-[22px] leading-none font-extrabold text-black",
                                children: section.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/Home/Productgrid.js",
                                lineNumber: 157,
                                columnNumber: 348
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[11px] text-gray-500",
                                children: section.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/Home/Productgrid.js",
                                lineNumber: 157,
                                columnNumber: 442
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Home/Productgrid.js",
                        lineNumber: 157,
                        columnNumber: 159
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/Productgrid.js",
                            lineNumber: 157,
                            columnNumber: 607
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/Productgrid.js",
                        lineNumber: 157,
                        columnNumber: 516
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/Productgrid.js",
                lineNumber: 157,
                columnNumber: 104
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2.5",
                children: section.items.map(_PremiumCategorySectionsSectionsMapSectionItemsMap)
            }, void 0, false, {
                fileName: "[project]/src/app/Home/Productgrid.js",
                lineNumber: 157,
                columnNumber: 641
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
                        lineNumber: 157,
                        columnNumber: 962
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/Productgrid.js",
                lineNumber: 157,
                columnNumber: 760
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/Home/Productgrid.js",
        lineNumber: 156,
        columnNumber: 10
    }, this);
}
function _PremiumCategorySectionsSectionsMapSectionItemsMap(item, idx) {
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
                            lineNumber: 160,
                            columnNumber: 183
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                size: 10
                            }, void 0, false, {
                                fileName: "[project]/src/app/Home/Productgrid.js",
                                lineNumber: 160,
                                columnNumber: 430
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/Productgrid.js",
                            lineNumber: 160,
                            columnNumber: 317
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute bottom-1.5 right-1.5 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center opacity-0 translate-y-2 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-300 hover:bg-orange-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                size: 11
                            }, void 0, false, {
                                fileName: "[project]/src/app/Home/Productgrid.js",
                                lineNumber: 160,
                                columnNumber: 714
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/Productgrid.js",
                            lineNumber: 160,
                            columnNumber: 458
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/Productgrid.js",
                    lineNumber: 160,
                    columnNumber: 127
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-[11px] font-semibold text-black line-clamp-1",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/Productgrid.js",
                            lineNumber: 160,
                            columnNumber: 775
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
                            lineNumber: 160,
                            columnNumber: 857
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1.5 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[13px] font-extrabold text-black",
                                    children: item.price
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/Productgrid.js",
                                    lineNumber: 160,
                                    columnNumber: 1053
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] font-bold text-green-600",
                                    children: "Stock"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Home/Productgrid.js",
                                    lineNumber: 160,
                                    columnNumber: 1128
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Home/Productgrid.js",
                            lineNumber: 160,
                            columnNumber: 995
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/Productgrid.js",
                    lineNumber: 160,
                    columnNumber: 754
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/Productgrid.js",
            lineNumber: 160,
            columnNumber: 48
        }, this)
    }, idx, false, {
        fileName: "[project]/src/app/Home/Productgrid.js",
        lineNumber: 160,
        columnNumber: 10
    }, this);
}
function _PremiumCategorySectionsSectionsMapSectionItemsMapAnonymous(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
        size: 7,
        className: "fill-orange-400 text-orange-400"
    }, i, false, {
        fileName: "[project]/src/app/Home/Productgrid.js",
        lineNumber: 163,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "2be495f559c7c9dfa9b12a4a37aa169ab0f84f3918cc8e9a00ad3ba0e92773fe") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2be495f559c7c9dfa9b12a4a37aa169ab0f84f3918cc8e9a00ad3ba0e92773fe";
    }
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ProductSlider[updateArrows]": ()=>{
                const el = sliderRef.current;
                if (!el) {
                    return;
                }
                setCanScrollLeft(el.scrollLeft > 5);
                setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
            }
        })["ProductSlider[updateArrows]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const updateArrows = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ProductSlider[useEffect()]": ()=>{
                updateArrows();
                const el_0 = sliderRef.current;
                if (!el_0) {
                    return;
                }
                el_0.addEventListener("scroll", updateArrows);
                window.addEventListener("resize", updateArrows);
                return ()=>{
                    el_0.removeEventListener("scroll", updateArrows);
                    window.removeEventListener("resize", updateArrows);
                };
            }
        })["ProductSlider[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ProductSlider[scroll]": (direction)=>{
                if (!sliderRef.current) {
                    return;
                }
                sliderRef.current.scrollBy({
                    left: direction === "left" ? -440 : 440,
                    behavior: "smooth"
                });
            }
        })["ProductSlider[scroll]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const scroll = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mt-2 text-[28px] lg:text-[42px] leading-none font-extrabold text-black",
            children: "Trending Collection"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 210,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ProductSlider[<button>.onClick]": ()=>scroll("left")
        })["ProductSlider[<button>.onClick]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = !canScrollLeft;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 227,
            columnNumber: 10
        }, this);
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t5,
            disabled: t6,
            className: "hidden sm:flex w-9 h-9 rounded-full bg-white border border-orange-200 items-center justify-center hover:bg-orange-50 disabled:opacity-30 disabled:cursor-not-allowed transition",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 234,
            columnNumber: 10
        }, this);
        $[8] = t6;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "ProductSlider[<button>.onClick]": ()=>scroll("right")
        })["ProductSlider[<button>.onClick]"];
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    const t10 = !canScrollRight;
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    let t12;
    if ($[12] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            disabled: t10,
            className: "hidden sm:flex w-9 h-9 rounded-full bg-white border border-orange-200 items-center justify-center hover:bg-orange-50 disabled:opacity-30 disabled:cursor-not-allowed transition",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "aria-label": "See all",
            className: "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF7A1A] text-white flex items-center justify-center hover:bg-[#e86c0f] transition-colors duration-200 active:scale-95",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ProductSlider.js",
                lineNumber: 267,
                columnNumber: 212
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] !== t12 || $[16] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-6 sm:mb-8",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5",
                    children: [
                        t8,
                        t12,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/ProductSlider.js",
                    lineNumber: 274,
                    columnNumber: 79
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[15] = t12;
        $[16] = t8;
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: sliderRef,
            className: "flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2",
            children: products.map(_ProductSliderProductsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "my-8 sm:my-12 bg-[#FDEDE0] rounded-3xl px-5 py-7 sm:px-8 sm:py-9",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/ProductSlider.js",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[19] = t14;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    return t16;
}
_s(ProductSlider, "1QHW2u/xZvO2D9hoEj2yoa/hzTU=");
_c = ProductSlider;
function _ProductSliderProductsMap(product) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "text-left group flex-shrink-0 w-[42%] sm:w-[170px] snap-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-square rounded-xl overflow-hidden bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: product.image,
                    alt: product.title,
                    fill: true,
                    sizes: "(max-width: 639px) 42vw, 170px",
                    className: "object-cover group-hover:scale-105 transition-transform duration-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/ProductSlider.js",
                    lineNumber: 299,
                    columnNumber: 192
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ProductSlider.js",
                lineNumber: 299,
                columnNumber: 109
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-sm text-[#8a6a55] truncate",
                children: product.category
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ProductSlider.js",
                lineNumber: 299,
                columnNumber: 379
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-0.5 text-sm font-bold text-[#3d2a1e] truncate",
                children: product.title
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ProductSlider.js",
                lineNumber: 299,
                columnNumber: 453
            }, this)
        ]
    }, product.id, true, {
        fileName: "[project]/src/app/Home/ProductSlider.js",
        lineNumber: 299,
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
    }
];
/* Yeh teeno cards alag row mein hain, taaki 4-column grid ke bajaye
   full-width 3-column grid mile aur koi khaali jagah na bache */ const bottomCategories = [
    {
        id: 5,
        title: "Gaming",
        items: "95+ Products",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1400&auto=format&fit=crop",
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
function CategoryCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "e4eb8379346dfd7bd37d91c39fec54b9e9551fdb101c2ec27592714974c00079") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4eb8379346dfd7bd37d91c39fec54b9e9551fdb101c2ec27592714974c00079";
    }
    const { item, index } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            y: 25
        };
        t2 = {
            opacity: 1,
            y: 0
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    const t3 = index * 0.05;
    let t4;
    if ($[3] !== t3) {
        t4 = {
            duration: 0.45,
            delay: t3
        };
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            once: true
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const t6 = `group relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] cursor-pointer ${item.className || ""}`;
    let t7;
    if ($[6] !== item.image || $[7] !== item.title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: item.image,
                alt: item.title,
                fill: true,
                sizes: "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw",
                className: "object-cover group-hover:scale-105 transition-all duration-700"
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                lineNumber: 104,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[6] = item.image;
        $[7] = item.title;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] uppercase tracking-[2px] font-semibold text-[#111]",
                children: "Trending"
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                lineNumber: 120,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== item.items) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/70 text-xs font-medium",
            children: item.items
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[11] = item.items;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== item.title) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mt-1 text-2xl font-extrabold tracking-[-1px] text-white",
            children: item.title
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[13] = item.title;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== t10 || $[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-11 h-11 rounded-xl bg-white text-[#111] flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                lineNumber: 152,
                columnNumber: 190
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 w-full p-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end justify-between gap-3",
                children: [
                    t12,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                lineNumber: 159,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[19] = t12;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-16 -right-16 w-[140px] h-[140px] rounded-full bg-orange-500/20 blur-[70px] opacity-0 group-hover:opacity-100 transition-all duration-500"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== t14 || $[23] !== t4 || $[24] !== t6 || $[25] !== t7) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t1,
            whileInView: t2,
            transition: t4,
            viewport: t5,
            className: t6,
            children: [
                t7,
                t8,
                t9,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[22] = t14;
        $[23] = t4;
        $[24] = t6;
        $[25] = t7;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    return t16;
}
_c = CategoryCard;
function ShopByCategory() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "e4eb8379346dfd7bd37d91c39fec54b9e9551fdb101c2ec27592714974c00079") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4eb8379346dfd7bd37d91c39fec54b9e9551fdb101c2ec27592714974c00079";
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
                    lineNumber: 195,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-2 text-2xl md:text-4xl font-extrabold tracking-[-2px] text-[#111]",
                    children: "Shop By Category"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                    lineNumber: 195,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 195,
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
                            lineNumber: 202,
                            columnNumber: 200
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                    lineNumber: 202,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 202,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 auto-rows-[260px] gap-4",
            children: categories.map(_ShopByCategoryCategoriesMap)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 209,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full py-8 bg-[#f5f5f5]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1450px] mx-auto px-4 md:px-6",
                children: [
                    t1,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] gap-4 mt-4",
                        children: bottomCategories.map(_ShopByCategoryBottomCategoriesMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                        lineNumber: 216,
                        columnNumber: 117
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
                lineNumber: 216,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
            lineNumber: 216,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c1 = ShopByCategory;
function _ShopByCategoryBottomCategoriesMap(item_0, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryCard, {
        item: item_0,
        index: categories.length + index_0
    }, item_0.id, false, {
        fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
        lineNumber: 224,
        columnNumber: 10
    }, this);
}
function _ShopByCategoryCategoriesMap(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryCard, {
        item: item,
        index: index
    }, item.id, false, {
        fileName: "[project]/src/app/Home/ShopByCategoryCards.js",
        lineNumber: 227,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "CategoryCard");
__turbopack_context__.k.register(_c1, "ShopByCategory");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
"use client";
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "0837cc50885e105c7e7a22d3c328552b56c32166e33c9162955ceb768d6ea418") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0837cc50885e105c7e7a22d3c328552b56c32166e33c9162955ceb768d6ea418";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 w-[300px] h-[300px] bg-orange-200/30 blur-[120px] rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-100/40 blur-[120px] rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 49,
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
            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                    size: 15,
                    className: "text-orange-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                    lineNumber: 58,
                    columnNumber: 125
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs tracking-[3px] text-orange-500 uppercase font-bold",
                    children: "Trending Products"
                }, void 0, false, {
                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                    lineNumber: 58,
                    columnNumber: 172
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-2 text-[28px] lg:text-[42px] leading-none font-extrabold text-black",
                    children: [
                        "Explore Trending ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                            lineNumber: 65,
                            columnNumber: 123
                        }, this),
                        "Collections"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                    lineNumber: 65,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/shop",
                    className: "group flex items-center gap-2 text-gray-800 hover:text-orange-500 transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold tracking-wide",
                            children: "View All Products"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                            lineNumber: 72,
                            columnNumber: 226
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            size: 18,
                            className: "group-hover:translate-x-1 transition-all duration-300"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                            lineNumber: 72,
                            columnNumber: 304
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                    lineNumber: 72,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative py-20 bg-[#faf7f2] overflow-hidden",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full px-4 md:px-8 xl:px-14 relative z-10",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-6",
                            children: trendingProducts.map(_TrendingProductsSectionTrendingProductsMap)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                            lineNumber: 79,
                            columnNumber: 147
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                    lineNumber: 79,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Home/TrendingProductSlider.js",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = TrendingProductsSection;
function _TrendingProductsSectionTrendingProductsMap(product, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
        className: "group cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative pb-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 top-0 bottom-0 rounded-[26px] bg-gradient-to-b from-sky-300 to-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                        lineNumber: 98,
                        columnNumber: 72
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[190px] w-full rounded-[26px] overflow-hidden bg-[#f2f2f2] shadow-[0_4px_14px_rgba(0,0,0,0.06)] group-hover:shadow-[0_10px_28px_rgba(0,0,0,0.1)] transition-all duration-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: product.image,
                                alt: product.title,
                                fill: true,
                                sizes: "(max-width: 639px) 50vw, (max-width: 1279px) 50vw, 25vw",
                                className: "object-cover group-hover:scale-105 transition-transform duration-700"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                lineNumber: 98,
                                columnNumber: 383
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        size: 12,
                                        className: "fill-blue-500 text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                        lineNumber: 98,
                                        columnNumber: 700
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-gray-800",
                                        children: product.rating || "4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                        lineNumber: 98,
                                        columnNumber: 758
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                                lineNumber: 98,
                                columnNumber: 589
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                        lineNumber: 98,
                        columnNumber: 182
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                lineNumber: 98,
                columnNumber: 39
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[15px] font-bold text-gray-900 truncate",
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                        lineNumber: 98,
                        columnNumber: 889
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-sm text-gray-500 truncate",
                        children: product.category
                    }, void 0, false, {
                        fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                        lineNumber: 98,
                        columnNumber: 970
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-base font-bold text-gray-900",
                        children: [
                            "From ",
                            product.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                        lineNumber: 98,
                        columnNumber: 1045
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Home/TrendingProductSlider.js",
                lineNumber: 98,
                columnNumber: 862
            }, this)
        ]
    }, product.id, true, {
        fileName: "[project]/src/app/Home/TrendingProductSlider.js",
        lineNumber: 87,
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

//# sourceMappingURL=src_app_087mjom._.js.map