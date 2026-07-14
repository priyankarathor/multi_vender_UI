(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/apis/subcategory/subcategory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSubCategories",
    ()=>getSubCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/baseurl/baseurl.js [app-client] (ecmascript)");
;
const getSubCategories = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/subcategories");
};
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
// NOTE: Products API ab public hai — koi user/auth token nahi bheja jata.
// Pehle yaha localStorage se token uthakar Authorization header me
// bheja ja raha tha, jiski wajah se token invalid/expired hone par
// backend se 401 (Unauthorized) aa raha tha, chahe product endpoint
// public ho. Ab sirf plain headers bheje jaate hain.
function getProductRequestHeaders() {
    return {
        Accept: "application/json"
    };
}
async function getResponseError(response, fallbackMessage) {
    let payload = null;
    try {
        payload = await response.clone().json();
    } catch  {
        try {
            payload = await response.clone().text();
        } catch  {
            payload = null;
        }
    }
    const backendMessage = payload?.message || payload?.error || payload?.data?.message || (typeof payload === "string" ? payload : "");
    if (response.status === 401) {
        return new Error(backendMessage || "Failed to load products (unauthorized).");
    }
    return new Error(backendMessage || `${fallbackMessage} (${response.status} ${response.statusText})`);
}
async function fetchFirstOk(urls) {
    let lastError = null;
    for (const url of urls){
        try {
            const response = await fetch(url, {
                method: "GET",
                cache: "no-store",
                headers: getProductRequestHeaders()
            });
            if (response.ok) return response;
            const responseError = await getResponseError(response, "Failed to load products");
            console.error("Products API failed:", {
                url,
                status: response.status,
                message: responseError.message
            });
            lastError = responseError;
            if (response.status === 401) {
                throw responseError;
            }
        } catch (error) {
            lastError = error;
            if (String(error?.message || "").toLowerCase().includes("token") || String(error?.message || "").toLowerCase().includes("login session")) {
                throw error;
            }
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
                method: "GET",
                cache: "no-store",
                headers: getProductRequestHeaders()
            });
            if (!detailResponse.ok) {
                console.warn("Product detail fetch failed:", detailResponse.status, productId);
                return product;
            }
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
        method: "GET",
        cache: "no-store",
        headers: getProductRequestHeaders()
    });
    if (!response.ok) {
        throw await getResponseError(response, "Failed to load product");
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
"[project]/src/app/shop/FestiveOfferBanner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FestiveOfferBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// yahan jitne offers chahiye utne add kar do - automatically slide hote rahenge
const banners = [
    {
        eventLabel: "Festive Day",
        dateRange: "4 - 6 July",
        poweredBy: "Powered by SAMSUNG Galaxy",
        discount: "Up to 65% off",
        collectionName: "Mobile Accessories",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1200&auto=format&fit=crop",
        bg: "from-[#1f3fae] via-[#2451d6] to-[#3a6cf0]"
    },
    {
        eventLabel: "Mega Sale",
        dateRange: "10 - 12 July",
        poweredBy: "Powered by Apple",
        discount: "Up to 50% off",
        collectionName: "Electronics & Gadgets",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
        bg: "from-[#7a1f3d] via-[#9c2c4f] to-[#c2436a]"
    },
    {
        eventLabel: "Style Days",
        dateRange: "15 - 18 July",
        poweredBy: "Powered by Nike",
        discount: "Up to 40% off",
        collectionName: "Fashion & Footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
        bg: "from-[#0f4c3a] via-[#13684f] to-[#1a8a68]"
    }
];
// niche dikhne wali circular category icons - apni categories daal do
const categoryIcons = [
    {
        label: "Headsets",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop",
        link: "/shop?category=Audio"
    },
    {
        label: "Charging accessories",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=300&auto=format&fit=crop",
        link: "/shop?category=Accessories"
    },
    {
        label: "Cases and covers",
        image: "https://images.unsplash.com/photo-1592286927505-1def25115558?q=80&w=300&auto=format&fit=crop",
        link: "/shop?category=Mobiles"
    },
    {
        label: "Screen protectors",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=300&auto=format&fit=crop",
        link: "/shop?category=Mobiles"
    },
    {
        label: "Mobile holders",
        image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=300&auto=format&fit=crop",
        link: "/shop?category=Accessories"
    }
];
function FestiveOfferBanner() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "321e5db8787cbc46ab907a3eb9b3d2f875e3e6ddb4ec1ab78cfa05eab41616d1") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "321e5db8787cbc46ab907a3eb9b3d2f875e3e6ddb4ec1ab78cfa05eab41616d1";
    }
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "FestiveOfferBanner[useEffect()]": ()=>{
                if (banners.length <= 1) {
                    return;
                }
                const timer = setInterval({
                    "FestiveOfferBanner[useEffect() > setInterval()]": ()=>{
                        setIndex(_FestiveOfferBannerUseEffectSetIntervalSetIndex);
                    }
                }["FestiveOfferBanner[useEffect() > setInterval()]"], 4000);
                return ()=>clearInterval(timer);
            }
        })["FestiveOfferBanner[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const banner = banners[index];
    const t2 = `relative overflow-hidden bg-gradient-to-br ${banner.bg} shadow-[0_15px_60px_rgba(0,0,0,0.12)] transition-colors duration-700`;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            x: 30
        };
        t4 = {
            opacity: 1,
            x: 0
        };
        t5 = {
            opacity: 0,
            x: -30
        };
        t6 = {
            duration: 0.5,
            ease: "easeInOut"
        };
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
    } else {
        t3 = $[3];
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    if ($[7] !== banner.eventLabel) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-base font-medium text-white/85 md:text-lg",
            children: banner.eventLabel
        }, void 0, false, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[7] = banner.eventLabel;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== banner.dateRange) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mt-1 text-[32px] font-black leading-[1.05] text-white md:text-[44px]",
            children: banner.dateRange
        }, void 0, false, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[9] = banner.dateRange;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== banner.poweredBy) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs font-medium tracking-wide text-white/70 md:text-sm",
            children: banner.poweredBy
        }, void 0, false, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[11] = banner.poweredBy;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== banner.discount) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mt-4 text-2xl font-black text-white md:text-3xl",
            children: banner.discount
        }, void 0, false, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[13] = banner.discount;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== banner.collectionName) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium text-white/85 md:text-base",
            children: banner.collectionName
        }, void 0, false, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[15] = banner.collectionName;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t10 || $[18] !== t11 || $[19] !== t7 || $[20] !== t8 || $[21] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                t8,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== banner.collectionName || $[24] !== banner.image) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[220px] w-full md:h-[260px] lg:h-[278px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: banner.image,
                alt: banner.collectionName,
                fill: true,
                className: "object-cover",
                sizes: "(max-width: 767px) 100vw, 50vw"
            }, void 0, false, {
                fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
                lineNumber: 178,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[23] = banner.collectionName;
        $[24] = banner.image;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== index || $[27] !== t12 || $[28] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t3,
                animate: t4,
                exit: t5,
                transition: t6,
                className: "relative z-10 grid items-center gap-5 px-5 py-8 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-10 lg:px-10",
                children: [
                    t12,
                    t13
                ]
            }, index, true, {
                fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
                lineNumber: 187,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[26] = index;
        $[27] = t12;
        $[28] = t13;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== index) {
        t15 = banners.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 justify-center gap-2",
            children: banners.map({
                "FestiveOfferBanner[banners.map()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "FestiveOfferBanner[banners.map() > <button>.onClick]": ()=>setIndex(i)
                        }["FestiveOfferBanner[banners.map() > <button>.onClick]"],
                        className: `transition-all ${i === index ? "h-2 w-7 rounded-full bg-white" : "h-2 w-2 rounded-full bg-white/40"}`,
                        "aria-label": `Go to slide ${i + 1}`
                    }, i, false, {
                        fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
                        lineNumber: 198,
                        columnNumber: 56
                    }, this)
            }["FestiveOfferBanner[banners.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 197,
            columnNumber: 33
        }, this);
        $[30] = index;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t14 || $[33] !== t15 || $[34] !== t2) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[32] = t14;
        $[33] = t15;
        $[34] = t2;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 flex flex-wrap justify-start gap-x-6 gap-y-3 sm:gap-x-8",
            children: categoryIcons.map(_FestiveOfferBannerCategoryIconsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mt-6 mx-auto w-full max-w-[1040px] px-4",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[37] = t16;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    return t18;
}
_s(FestiveOfferBanner, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = FestiveOfferBanner;
function _FestiveOfferBannerCategoryIconsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: item.link,
        className: "group flex w-[72px] flex-col items-center gap-1.5 text-center sm:w-[88px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-14 w-14 overflow-hidden rounded-full border border-black/5 bg-zinc-100 shadow-sm transition group-hover:shadow-md sm:h-16 sm:w-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: item.image,
                    alt: item.label,
                    fill: true,
                    className: "object-cover transition duration-300 group-hover:scale-110",
                    sizes: "64px"
                }, void 0, false, {
                    fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
                    lineNumber: 235,
                    columnNumber: 294
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
                lineNumber: 235,
                columnNumber: 136
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-medium leading-tight text-zinc-700 group-hover:text-black sm:text-xs",
                children: item.label
            }, void 0, false, {
                fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
                lineNumber: 235,
                columnNumber: 439
            }, this)
        ]
    }, item.label, true, {
        fileName: "[project]/src/app/shop/FestiveOfferBanner.js",
        lineNumber: 235,
        columnNumber: 10
    }, this);
}
function _FestiveOfferBannerUseEffectSetIntervalSetIndex(prev) {
    return (prev + 1) % banners.length;
}
var _c;
__turbopack_context__.k.register(_c, "FestiveOfferBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/shop/Attributefilter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopFilters,
    "getSubCategoryName",
    ()=>getSubCategoryName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
(()=>{
    const e = new Error("Cannot find module '../apis/filter'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const getSubCategoryName = (subcategory)=>subcategory?.name || subcategory?.subcategory || subcategory?.title || "";
function ShopFilters(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "59bf706a09f3d94d6980c65e606b54c364fb719488e3ea0164678ace9bc72c4e") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "59bf706a09f3d94d6980c65e606b54c364fb719488e3ea0164678ace9bc72c4e";
    }
    const { categoryId, categories, selectedCategory, filters, updateFilters, visibleSubCategories, showRating: t1 } = t0;
    const showRating = t1 === undefined ? true : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const [attributes, setAttributes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [attrLoading, setAttrLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [attrError, setAttrError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t3;
    let t4;
    if ($[2] !== categoryId) {
        t3 = ({
            "ShopFilters[useEffect()]": ()=>{
                if (!categoryId) {
                    setAttributes([]);
                    return;
                }
                let cancelled = false;
                setAttrLoading(true);
                setAttrError(null);
                getCategoryAttributes(categoryId).then({
                    "ShopFilters[useEffect() > (anonymous)()]": (data)=>{
                        if (!cancelled) {
                            setAttributes(data);
                        }
                    }
                }["ShopFilters[useEffect() > (anonymous)()]"]).catch({
                    "ShopFilters[useEffect() > (anonymous)()]": (err)=>{
                        if (!cancelled) {
                            setAttrError(err.message);
                        }
                    }
                }["ShopFilters[useEffect() > (anonymous)()]"]).finally({
                    "ShopFilters[useEffect() > (anonymous)()]": ()=>{
                        if (!cancelled) {
                            setAttrLoading(false);
                        }
                    }
                }["ShopFilters[useEffect() > (anonymous)()]"]);
                return ()=>{
                    cancelled = true;
                };
            }
        })["ShopFilters[useEffect()]"];
        t4 = [
            categoryId
        ];
        $[2] = categoryId;
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[5] !== filters) {
        t5 = ({
            "ShopFilters[selectedValues]": (code)=>{
                const value = filters.attributes?.[code];
                if (Array.isArray(value)) {
                    return value;
                }
                return value ? [
                    value
                ] : [];
            }
        })["ShopFilters[selectedValues]"];
        $[5] = filters;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const selectedValues = t5;
    let t6;
    if ($[7] !== updateFilters) {
        t6 = ({
            "ShopFilters[toggleAttributeOption]": (code_0, option)=>{
                updateFilters({
                    "ShopFilters[toggleAttributeOption > updateFilters()]": (prev)=>{
                        const current = Array.isArray(prev.attributes?.[code_0]) ? prev.attributes[code_0] : [];
                        const next = current.includes(option) ? current.filter({
                            "ShopFilters[toggleAttributeOption > updateFilters() > current.filter()]": (v)=>v !== option
                        }["ShopFilters[toggleAttributeOption > updateFilters() > current.filter()]"]) : [
                            ...current,
                            option
                        ];
                        return {
                            ...prev,
                            attributes: {
                                ...prev.attributes,
                                [code_0]: next
                            }
                        };
                    }
                }["ShopFilters[toggleAttributeOption > updateFilters()]"]);
            }
        })["ShopFilters[toggleAttributeOption]"];
        $[7] = updateFilters;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const toggleAttributeOption = t6;
    let t7;
    if ($[9] !== updateFilters) {
        t7 = ({
            "ShopFilters[setAttributeText]": (code_1, value_0)=>{
                updateFilters({
                    "ShopFilters[setAttributeText > updateFilters()]": (prev_0)=>({
                            ...prev_0,
                            attributes: {
                                ...prev_0.attributes,
                                [code_1]: value_0
                            }
                        })
                }["ShopFilters[setAttributeText > updateFilters()]"]);
            }
        })["ShopFilters[setAttributeText]"];
        $[9] = updateFilters;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const setAttributeText = t7;
    let t8;
    if ($[11] !== updateFilters) {
        t8 = ({
            "ShopFilters[selectPriceRange]": (range)=>{
                updateFilters({
                    "ShopFilters[selectPriceRange > updateFilters()]": (prev_1)=>({
                            ...prev_1,
                            price: range.label,
                            minPrice: range.min,
                            maxPrice: range.max
                        })
                }["ShopFilters[selectPriceRange > updateFilters()]"]);
            }
        })["ShopFilters[selectPriceRange]"];
        $[11] = updateFilters;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const selectPriceRange = t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-zinc-500 mb-2",
            children: "Category"
        }, void 0, false, {
            fileName: "[project]/src/app/shop/Attributefilter.js",
            lineNumber: 168,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== categories || $[15] !== filters || $[16] !== selectedCategory || $[17] !== updateFilters || $[18] !== visibleSubCategories) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                selectedCategory === "All" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: categories.map({
                        "ShopFilters[categories.map()]": (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ShopFilters[categories.map() > <button>.onClick]": ()=>updateFilters({
                                            "ShopFilters[categories.map() > <button>.onClick > updateFilters()]": (p)=>({
                                                    ...p,
                                                    category: c,
                                                    subcategory: "All",
                                                    subcategoryId: ""
                                                })
                                        }["ShopFilters[categories.map() > <button>.onClick > updateFilters()]"])
                                }["ShopFilters[categories.map() > <button>.onClick]"],
                                className: `px-3 py-1 rounded-full text-xs border transition
                  ${filters.category === c ? "bg-black text-white" : "bg-white hover:bg-zinc-100"}`,
                                children: c
                            }, c, false, {
                                fileName: "[project]/src/app/shop/Attributefilter.js",
                                lineNumber: 176,
                                columnNumber: 49
                            }, this)
                    }["ShopFilters[categories.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/app/shop/Attributefilter.js",
                    lineNumber: 175,
                    columnNumber: 50
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ShopFilters[<button>.onClick]": ()=>updateFilters({
                                        "ShopFilters[<button>.onClick > updateFilters()]": (p_0)=>({
                                                ...p_0,
                                                category: selectedCategory,
                                                subcategory: "All",
                                                subcategoryId: ""
                                            })
                                    }["ShopFilters[<button>.onClick > updateFilters()]"])
                            }["ShopFilters[<button>.onClick]"],
                            className: "inline-flex items-center rounded-full border border-black bg-black px-3 py-1 text-xs font-semibold text-white",
                            children: selectedCategory
                        }, void 0, false, {
                            fileName: "[project]/src/app/shop/Attributefilter.js",
                            lineNumber: 187,
                            columnNumber: 81
                        }, this),
                        visibleSubCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-1 space-y-1",
                            children: visibleSubCategories.map({
                                "ShopFilters[visibleSubCategories.map()]": (subcategory)=>{
                                    const name = getSubCategoryName(subcategory);
                                    const id = subcategory?._id || subcategory?.id || "";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ShopFilters[visibleSubCategories.map() > <button>.onClick]": ()=>updateFilters({
                                                    "ShopFilters[visibleSubCategories.map() > <button>.onClick > updateFilters()]": (p_1)=>({
                                                            ...p_1,
                                                            subcategory: name,
                                                            subcategoryId: id
                                                        })
                                                }["ShopFilters[visibleSubCategories.map() > <button>.onClick > updateFilters()]"])
                                        }["ShopFilters[visibleSubCategories.map() > <button>.onClick]"],
                                        className: `block w-full rounded-lg px-3 py-2 text-left text-sm transition ${filters.subcategory === name ? "bg-black text-white" : "text-zinc-700 hover:bg-zinc-100"}`,
                                        children: name
                                    }, id || name, false, {
                                        fileName: "[project]/src/app/shop/Attributefilter.js",
                                        lineNumber: 200,
                                        columnNumber: 22
                                    }, this);
                                }
                            }["ShopFilters[visibleSubCategories.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/app/shop/Attributefilter.js",
                            lineNumber: 196,
                            columnNumber: 230
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/shop/Attributefilter.js",
                    lineNumber: 187,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/Attributefilter.js",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[14] = categories;
        $[15] = filters;
        $[16] = selectedCategory;
        $[17] = updateFilters;
        $[18] = visibleSubCategories;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== attrLoading) {
        t11 = attrLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 animate-pulse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-3 w-16 rounded bg-zinc-200"
                }, void 0, false, {
                    fileName: "[project]/src/app/shop/Attributefilter.js",
                    lineNumber: 222,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-3 w-24 rounded bg-zinc-200"
                }, void 0, false, {
                    fileName: "[project]/src/app/shop/Attributefilter.js",
                    lineNumber: 222,
                    columnNumber: 115
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-3 w-20 rounded bg-zinc-200"
                }, void 0, false, {
                    fileName: "[project]/src/app/shop/Attributefilter.js",
                    lineNumber: 222,
                    columnNumber: 163
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/Attributefilter.js",
            lineNumber: 222,
            columnNumber: 26
        }, this);
        $[20] = attrLoading;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== attrError) {
        t12 = attrError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500",
            children: [
                "Couldn't load filters: ",
                attrError
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/Attributefilter.js",
            lineNumber: 230,
            columnNumber: 24
        }, this);
        $[22] = attrError;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== attrLoading || $[25] !== attributes || $[26] !== filters || $[27] !== selectedValues || $[28] !== setAttributeText || $[29] !== toggleAttributeOption) {
        t13 = !attrLoading && attributes.map({
            "ShopFilters[attributes.map()]": (attr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-zinc-100 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-zinc-500 mb-2",
                            children: attr.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/shop/Attributefilter.js",
                            lineNumber: 239,
                            columnNumber: 123
                        }, this),
                        attr.type === "dropdown" && attr.options?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: attr.options.map({
                                "ShopFilters[attributes.map() > attr.options.map()]": (option_0)=>{
                                    const checked = selectedValues(attr.code).includes(option_0);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 text-sm text-zinc-700 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: checked,
                                                onChange: {
                                                    "ShopFilters[attributes.map() > attr.options.map() > <input>.onChange]": ()=>toggleAttributeOption(attr.code, option_0)
                                                }["ShopFilters[attributes.map() > attr.options.map() > <input>.onChange]"],
                                                className: "h-3.5 w-3.5 accent-black"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/Attributefilter.js",
                                                lineNumber: 242,
                                                columnNumber: 117
                                            }, this),
                                            option_0
                                        ]
                                    }, option_0, true, {
                                        fileName: "[project]/src/app/shop/Attributefilter.js",
                                        lineNumber: 242,
                                        columnNumber: 22
                                    }, this);
                                }
                            }["ShopFilters[attributes.map() > attr.options.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/app/shop/Attributefilter.js",
                            lineNumber: 239,
                            columnNumber: 236
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: filters.attributes?.[attr.code] || "",
                            onChange: {
                                "ShopFilters[attributes.map() > <input>.onChange]": (e)=>setAttributeText(attr.code, e.target.value)
                            }["ShopFilters[attributes.map() > <input>.onChange]"],
                            placeholder: `Search ${attr.name.toLowerCase()}`,
                            className: "w-full rounded-lg border border-zinc-200 px-3 py-1.5 text-sm outline-none focus:border-black"
                        }, void 0, false, {
                            fileName: "[project]/src/app/shop/Attributefilter.js",
                            lineNumber: 246,
                            columnNumber: 77
                        }, this)
                    ]
                }, attr._id || attr.code, true, {
                    fileName: "[project]/src/app/shop/Attributefilter.js",
                    lineNumber: 239,
                    columnNumber: 48
                }, this)
        }["ShopFilters[attributes.map()]"]);
        $[24] = attrLoading;
        $[25] = attributes;
        $[26] = filters;
        $[27] = selectedValues;
        $[28] = setAttributeText;
        $[29] = toggleAttributeOption;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-zinc-500 mb-2",
            children: "Price"
        }, void 0, false, {
            fileName: "[project]/src/app/shop/Attributefilter.js",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== filters || $[33] !== selectPriceRange) {
        t15 = priceRanges.map({
            "ShopFilters[priceRanges.map()]": (range_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ShopFilters[priceRanges.map() > <button>.onClick]": ()=>selectPriceRange(range_0)
                    }["ShopFilters[priceRanges.map() > <button>.onClick]"],
                    className: `w-full text-left text-sm px-3 py-2 rounded-lg transition
                ${filters.price === range_0.label ? "bg-black text-white" : "hover:bg-zinc-100"}`,
                    children: range_0.label
                }, range_0.label, false, {
                    fileName: "[project]/src/app/shop/Attributefilter.js",
                    lineNumber: 270,
                    columnNumber: 52
                }, this)
        }["ShopFilters[priceRanges.map()]"]);
        $[32] = filters;
        $[33] = selectPriceRange;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-zinc-100 pt-4",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/app/shop/Attributefilter.js",
                    lineNumber: 283,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/Attributefilter.js",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== filters || $[38] !== showRating || $[39] !== updateFilters) {
        t17 = showRating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-zinc-100 pt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-zinc-500 mb-2",
                    children: "Customer Review"
                }, void 0, false, {
                    fileName: "[project]/src/app/shop/Attributefilter.js",
                    lineNumber: 291,
                    columnNumber: 72
                }, this),
                [
                    4,
                    3,
                    2
                ].map({
                    "ShopFilters[(anonymous)()]": (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ShopFilters[(anonymous)() > <button>.onClick]": ()=>updateFilters({
                                        "ShopFilters[(anonymous)() > <button>.onClick > updateFilters()]": (p_2)=>({
                                                ...p_2,
                                                rating: r
                                            })
                                    }["ShopFilters[(anonymous)() > <button>.onClick > updateFilters()]"])
                            }["ShopFilters[(anonymous)() > <button>.onClick]"],
                            className: `flex items-center gap-1 text-sm mb-2 rounded-lg px-1 -mx-1 ${filters.rating === r ? "font-semibold" : ""}`,
                            children: [
                                Array.from({
                                    length: 5
                                }).map({
                                    "ShopFilters[(anonymous)() > (anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            size: 14,
                                            className: i < r ? "fill-yellow-400 text-yellow-400" : "text-zinc-300"
                                        }, i, false, {
                                            fileName: "[project]/src/app/shop/Attributefilter.js",
                                            lineNumber: 302,
                                            columnNumber: 69
                                        }, this)
                                }["ShopFilters[(anonymous)() > (anonymous)()]"]),
                                "& Up"
                            ]
                        }, r, true, {
                            fileName: "[project]/src/app/shop/Attributefilter.js",
                            lineNumber: 292,
                            columnNumber: 44
                        }, this)
                }["ShopFilters[(anonymous)()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/Attributefilter.js",
            lineNumber: 291,
            columnNumber: 25
        }, this);
        $[37] = filters;
        $[38] = showRating;
        $[39] = updateFilters;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== t10 || $[42] !== t11 || $[43] !== t12 || $[44] !== t13 || $[45] !== t16 || $[46] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5",
            children: [
                t10,
                t11,
                t12,
                t13,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/Attributefilter.js",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[41] = t10;
        $[42] = t11;
        $[43] = t12;
        $[44] = t13;
        $[45] = t16;
        $[46] = t17;
        $[47] = t18;
    } else {
        t18 = $[47];
    }
    return t18;
}
_s(ShopFilters, "23FFtwtyUlCOBSJGekmiV+QuG2A=");
_c = ShopFilters;
var _c;
__turbopack_context__.k.register(_c, "ShopFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/shop/porductpage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.mjs [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$2x2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid2X2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-2x2.mjs [app-client] (ecmascript) <export default as Grid2X2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$category$2f$category$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/category/category.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$subcategory$2f$subcategory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/subcategory/subcategory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/products/products.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/cart/cart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/customer/customer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/wishlist/wishlist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$PageSkeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/PageSkeleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$FestiveOfferBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shop/FestiveOfferBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$Attributefilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shop/Attributefilter.js [app-client] (ecmascript)");
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
const PRODUCTS_PER_PAGE = 20;
const getApiList = (payload)=>{
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.data)) return payload.data;
    if (Array.isArray(payload?.categories)) return payload.categories;
    if (Array.isArray(payload?.subcategories)) return payload.subcategories;
    if (Array.isArray(payload?.data?.data)) return payload.data.data;
    if (Array.isArray(payload?.data?.categories)) return payload.data.categories;
    if (Array.isArray(payload?.data?.subcategories)) return payload.data.subcategories;
    return [];
};
const getWishlistList = (payload)=>{
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.data)) return payload.data;
    if (Array.isArray(payload?.wishlist)) return payload.wishlist;
    if (Array.isArray(payload?.items)) return payload.items;
    if (Array.isArray(payload?.data?.data)) return payload.data.data;
    return [];
};
const getWishlistProductId = (item)=>item?.pid && typeof item.pid === "object" ? item.pid._id : item?.pid || item?.productId || null;
const getLocalWishlistProductId = (item)=>item?.id || getWishlistProductId(item);
const haveSameWishlistProducts = (first = [], second = [])=>{
    const firstIds = first.map((item)=>String(getLocalWishlistProductId(item))).sort();
    const secondIds = second.map((item)=>String(getLocalWishlistProductId(item))).sort();
    return firstIds.length === secondIds.length && firstIds.every((id, index)=>id === secondIds[index]);
};
/* =========================================================================
   BUG FIX #1: Normalize every product coming from the API.
   Real backends (Mongo/Mongoose especially) almost always send:
     - `_id` instead of `id`
     - `category` / `subcategory` as a POPULATED OBJECT ({ _id, name })
       instead of a plain string
     - `rating` sometimes missing entirely
     - `image` sometimes under `images[0]` or `thumbnail`
   The rest of this component was written assuming `id` (not `_id`),
   `rating` always present, and `category` always a string/id.
   Without this normalization step, products silently disappear from
   filters, links break (`/ProductDetailpage/undefined`), and React keys
   collide. This single function fixes all of that at the source.
   ========================================================================= */ const normalizeProduct = (item)=>{
    if (!item || typeof item !== "object") return item;
    const id = item.id ?? item._id ?? item.productId ?? null;
    return {
        ...item,
        id,
        rating: typeof item.rating === "number" ? item.rating : Number(item.rating) || 0,
        price: typeof item.price === "number" ? item.price : Number(item.price) || 0,
        image: item.image || item.thumbnail || (Array.isArray(item.images) ? item.images[0] : "") || ""
    };
};
/* =========================================================================
   BUG FIX #3: category / subcategory can arrive as either:
     - a string (id or name)              e.g. "Electronics" or "64f0..."
     - a populated object                 e.g. { _id: "64f0...", name: "Electronics" }
   `getCategoryName` previously assumed it was always a string/id, which
   crashed (or silently returned "[object Object]") whenever the backend
   populated the reference. This safe version handles both shapes.
   ========================================================================= */ const extractName = (value, namesById)=>{
    if (!value) return "";
    if (typeof value === "object") {
        return value.name || value.category || value.title || "";
    }
    return namesById[value] || value;
};
function ShopPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const categoryFromUrl = searchParams.get("category") || "All";
    const subcategoryFromUrl = searchParams.get("subcategory") || "All";
    const searchFromUrl = searchParams.get("search") || "";
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productsLoading, setProductsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [productsError, setProductsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "All"
    ]);
    const [categoryNamesById, setCategoryNamesById] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [categoryIdsByName, setCategoryIdsByName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [subCategoryNamesById, setSubCategoryNamesById] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [subCategories, setSubCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wishlistItems, setWishlistItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ShopPage.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const savedItems = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
            return Array.isArray(savedItems) ? savedItems : [];
        }
    }["ShopPage.useState"]);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        category: "All",
        subcategory: "All",
        subcategoryId: "",
        price: "All",
        rating: 0
    });
    const [openFilter, setOpenFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("grid");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPage.useEffect": ()=>{
            setCurrentPage(1);
            setFilters({
                "ShopPage.useEffect": (prev)=>({
                        ...prev,
                        category: categoryFromUrl,
                        subcategory: subcategoryFromUrl,
                        subcategoryId: ""
                    })
            }["ShopPage.useEffect"]);
        }
    }["ShopPage.useEffect"], [
        categoryFromUrl,
        searchFromUrl,
        subcategoryFromUrl
    ]);
    const getCategoryName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopPage.useCallback[getCategoryName]": (category)=>extractName(category, categoryNamesById)
    }["ShopPage.useCallback[getCategoryName]"], [
        categoryNamesById
    ]);
    const getSubCategoryDisplayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopPage.useCallback[getSubCategoryDisplayName]": (subcategory)=>extractName(subcategory, subCategoryNamesById)
    }["ShopPage.useCallback[getSubCategoryDisplayName]"], [
        subCategoryNamesById
    ]);
    const selectedCategory = filters.category || "All";
    const activeCategoryId = selectedCategory !== "All" ? categoryIdsByName[selectedCategory.toLowerCase()] || null : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPage.useEffect": ()=>{
            let active = true;
            const loadProducts = {
                "ShopPage.useEffect.loadProducts": async ()=>{
                    try {
                        setProductsLoading(true);
                        setProductsError("");
                        // BUGFIX: previously "All" was sent straight through as a literal
                        // filter value, which most backends can't match against any real
                        // category/subcategory name, so the API always returned an empty
                        // list and the code silently fell back to the hardcoded dummy data.
                        // Now we only include a filter key when the user actually picked one.
                        const apiFilters = {};
                        if (filters.category && filters.category !== "All") {
                            apiFilters.category = filters.category;
                            // send the id too, in case the backend expects categoryId instead of name
                            if (activeCategoryId) apiFilters.categoryId = activeCategoryId;
                        }
                        if (filters.subcategory && filters.subcategory !== "All") {
                            apiFilters.subcategory = filters.subcategory;
                        }
                        if (filters.subcategoryId) {
                            apiFilters.subcategoryId = filters.subcategoryId;
                        }
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$products$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProducts"])(apiFilters);
                        const rawProducts = getApiList(res?.data ?? res);
                        // BUGFIX #1: normalize _id -> id, missing rating -> 0, image fallback
                        const apiProducts = rawProducts.map(normalizeProduct);
                        if (!active) return;
                        if (apiProducts.length > 0) {
                            setProducts(apiProducts);
                        } else {
                            // no products matched -> show empty state, don't silently
                            // swap in fake data (that was masking the real bug)
                            setProducts([]);
                            setProductsError("No products found from the server for this filter.");
                        }
                    } catch (error) {
                        if (!active) return;
                        console.error("fetchProducts failed:", error);
                        setProducts([]);
                        setProductsError("Live products could not load.");
                    } finally{
                        if (active) setProductsLoading(false);
                    }
                }
            }["ShopPage.useEffect.loadProducts"];
            loadProducts();
            return ({
                "ShopPage.useEffect": ()=>{
                    active = false;
                }
            })["ShopPage.useEffect"];
        }
    }["ShopPage.useEffect"], [
        filters.category,
        filters.subcategory,
        filters.subcategoryId,
        activeCategoryId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPage.useEffect": ()=>{
            const loadCategories = {
                "ShopPage.useEffect.loadCategories": async ()=>{
                    try {
                        const res_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$category$2f$category$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategories"])();
                        const rawCategories = getApiList(res_0?.data ?? res_0);
                        const namesById = rawCategories.reduce({
                            "ShopPage.useEffect.loadCategories.namesById": (map, category_0)=>{
                                if (typeof category_0 === "string") return map;
                                const id = category_0?._id || category_0?.id;
                                const name = category_0?.name || category_0?.category || category_0?.title;
                                if (id && name) {
                                    map[id] = name;
                                }
                                return map;
                            }
                        }["ShopPage.useEffect.loadCategories.namesById"], {});
                        const idsByName = rawCategories.reduce({
                            "ShopPage.useEffect.loadCategories.idsByName": (map_0, category_1)=>{
                                if (typeof category_1 === "string") return map_0;
                                const id_0 = category_1?._id || category_1?.id;
                                const name_0 = category_1?.name || category_1?.category || category_1?.title;
                                if (id_0 && name_0) {
                                    map_0[name_0.toLowerCase()] = id_0;
                                }
                                return map_0;
                            }
                        }["ShopPage.useEffect.loadCategories.idsByName"], {});
                        const apiCategories = rawCategories.map({
                            "ShopPage.useEffect.loadCategories.apiCategories": (category_2)=>typeof category_2 === "string" ? category_2 : category_2?.name || category_2?.category || category_2?.title
                        }["ShopPage.useEffect.loadCategories.apiCategories"]).filter(Boolean);
                        setCategoryNamesById(namesById);
                        setCategoryIdsByName(idsByName);
                        setCategories([
                            "All",
                            ...new Set(apiCategories)
                        ]);
                    } catch (error_0) {
                        console.error("getCategories failed:", error_0);
                        setCategories([
                            "All"
                        ]);
                    }
                }
            }["ShopPage.useEffect.loadCategories"];
            loadCategories();
        }
    }["ShopPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPage.useEffect": ()=>{
            const loadSubCategories = {
                "ShopPage.useEffect.loadSubCategories": async ()=>{
                    try {
                        const res_1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$subcategory$2f$subcategory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubCategories"])();
                        const list = getApiList(res_1?.data ?? res_1);
                        const namesById_0 = list.reduce({
                            "ShopPage.useEffect.loadSubCategories.namesById_0": (map_1, subcategory_0)=>{
                                const id_1 = subcategory_0?._id || subcategory_0?.id;
                                const name_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$Attributefilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubCategoryName"])(subcategory_0);
                                if (id_1 && name_1) {
                                    map_1[id_1] = name_1;
                                }
                                return map_1;
                            }
                        }["ShopPage.useEffect.loadSubCategories.namesById_0"], {});
                        setSubCategoryNamesById(namesById_0);
                        setSubCategories(list);
                    } catch (error_1) {
                        console.error("getSubCategories failed:", error_1);
                        setSubCategoryNamesById({});
                        setSubCategories([]);
                    }
                }
            }["ShopPage.useEffect.loadSubCategories"];
            loadSubCategories();
        }
    }["ShopPage.useEffect"], []);
    const visibleSubCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShopPage.useMemo[visibleSubCategories]": ()=>{
            if (selectedCategory === "All") return [];
            return subCategories.filter({
                "ShopPage.useMemo[visibleSubCategories]": (subcategory_1)=>{
                    const parent = subcategory_1?.categoryId || subcategory_1?.category || subcategory_1?.parentCategory;
                    const parentId = typeof parent === "object" ? parent?._id || parent?.id : parent;
                    const parentName = (typeof parent === "object" ? parent?.name || parent?.category || parent?.title : "") || subcategory_1?.categoryName || categoryNamesById[parentId];
                    return activeCategoryId && parentId === activeCategoryId || parentName?.toLowerCase() === selectedCategory.toLowerCase();
                }
            }["ShopPage.useMemo[visibleSubCategories]"]);
        }
    }["ShopPage.useMemo[visibleSubCategories]"], [
        activeCategoryId,
        categoryNamesById,
        selectedCategory,
        subCategories
    ]);
    /* ================= FILTER (client-side, on top of whatever API returned) ================= */ const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShopPage.useMemo[filtered]": ()=>{
            const searchTerm = searchFromUrl.trim().toLowerCase();
            return products.filter({
                "ShopPage.useMemo[filtered]": (p)=>{
                    const productCategory = getCategoryName(p.category);
                    const productSubcategory = getSubCategoryDisplayName(p.subcategory);
                    const cat = filters.category === "All" || p.category === filters.category || productCategory === filters.category;
                    const subcat = filters.subcategory === "All" || !p.subcategory || p.subcategory === filters.subcategory || productSubcategory === filters.subcategory;
                    const search = !searchTerm || p.name?.toLowerCase().includes(searchTerm) || productCategory?.toLowerCase().includes(searchTerm);
                    const price = filters.price === "All" || filters.price === "Under ₹5000" && p.price < 5000 || filters.price === "₹5000 - ₹20000" && p.price >= 5000 && p.price <= 20000 || filters.price === "₹20000 - ₹100000" && p.price > 20000 && p.price <= 100000 || filters.price === "Above ₹100000" && p.price > 100000;
                    // BUGFIX #2: p.rating can be `undefined` for products that never had
                    // a rating set. `undefined >= filters.rating` is ALWAYS false, which
                    // was silently hiding every such product from the grid even when no
                    // rating filter was active. Default to 0 so it's compared honestly.
                    const rating = (p.rating ?? 0) >= filters.rating;
                    return cat && subcat && search && price && rating;
                }
            }["ShopPage.useMemo[filtered]"]);
        }
    }["ShopPage.useMemo[filtered]"], [
        filters,
        getCategoryName,
        getSubCategoryDisplayName,
        products,
        searchFromUrl
    ]);
    const totalPages = Math.max(1, Math.ceil(filtered.length / PRODUCTS_PER_PAGE));
    const activePage = Math.min(currentPage, totalPages);
    const paginatedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShopPage.useMemo[paginatedProducts]": ()=>{
            const start = (activePage - 1) * PRODUCTS_PER_PAGE;
            return filtered.slice(start, start + PRODUCTS_PER_PAGE);
        }
    }["ShopPage.useMemo[paginatedProducts]"], [
        activePage,
        filtered
    ]);
    const pageStart = filtered.length === 0 ? 0 : (activePage - 1) * PRODUCTS_PER_PAGE + 1;
    const pageEnd = Math.min(activePage * PRODUCTS_PER_PAGE, filtered.length);
    const visiblePages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShopPage.useMemo[visiblePages]": ()=>{
            const start_0 = Math.max(1, activePage - 2);
            const end = Math.min(totalPages, start_0 + 4);
            const adjustedStart = Math.max(1, end - 4);
            return Array.from({
                length: end - adjustedStart + 1
            }, {
                "ShopPage.useMemo[visiblePages]": (_, index)=>adjustedStart + index
            }["ShopPage.useMemo[visiblePages]"]);
        }
    }["ShopPage.useMemo[visiblePages]"], [
        activePage,
        totalPages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPage.useEffect": ()=>{
            document.body.style.overflow = openFilter ? "hidden" : "";
        }
    }["ShopPage.useEffect"], [
        openFilter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPage.useEffect": ()=>{
            localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
            window.dispatchEvent(new Event("wishlistUpdated"));
        }
    }["ShopPage.useEffect"], [
        wishlistItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPage.useEffect": ()=>{
            const syncWishlistFromStorage = {
                "ShopPage.useEffect.syncWishlistFromStorage": ()=>{
                    const savedItems_0 = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
                    const nextItems = Array.isArray(savedItems_0) ? savedItems_0 : [];
                    setWishlistItems({
                        "ShopPage.useEffect.syncWishlistFromStorage": (prev_0)=>haveSameWishlistProducts(prev_0, nextItems) ? prev_0 : nextItems
                    }["ShopPage.useEffect.syncWishlistFromStorage"]);
                }
            }["ShopPage.useEffect.syncWishlistFromStorage"];
            window.addEventListener("wishlistUpdated", syncWishlistFromStorage);
            window.addEventListener("storage", syncWishlistFromStorage);
            return ({
                "ShopPage.useEffect": ()=>{
                    window.removeEventListener("wishlistUpdated", syncWishlistFromStorage);
                    window.removeEventListener("storage", syncWishlistFromStorage);
                }
            })["ShopPage.useEffect"];
        }
    }["ShopPage.useEffect"], []);
    const toggleWishlist = (product)=>{
        setWishlistItems((prev_1)=>{
            const exists = prev_1.some((item)=>item.id === product.id);
            if (exists) {
                return prev_1.filter((item_0)=>item_0.id !== product.id);
            }
            return [
                ...prev_1,
                {
                    id: product.id,
                    name: product.name,
                    category: getCategoryName(product.category),
                    categoryId: product.category,
                    price: product.price,
                    rating: product.rating,
                    image: product.image
                }
            ];
        });
    };
    const syncWishlistWithBackend = async (product_0, shouldRemove)=>{
        const createBackendWishlistItem = (deviceId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWishlistItem"])({
                cid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(),
                pid: product_0.id,
                divid: deviceId,
                qty: 1,
                variantId: product_0.variantId || product_0.defaultVariant?._id || null,
                venderid: product_0.vendorId || product_0.venderid || null,
                offerDiscount: product_0.discount || 0
            });
        try {
            const deviceId_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartDeviceId"])();
            const res_2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWishlistByCidOrDevice"])({
                cid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])(),
                divid: deviceId_0
            });
            const backendItems = getWishlistList(res_2?.data);
            const existingItem = backendItems.find((item_1)=>String(getWishlistProductId(item_1)) === String(product_0.id));
            if (shouldRemove) {
                if (existingItem?._id) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$wishlist$2f$wishlist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteWishlistItem"])(existingItem._id);
                    window.dispatchEvent(new Event("wishlistUpdated"));
                }
                return;
            }
            if (!existingItem) {
                await createBackendWishlistItem(deviceId_0);
                window.dispatchEvent(new Event("wishlistUpdated"));
            }
        } catch (error_2) {
            if (!shouldRemove) {
                try {
                    await createBackendWishlistItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartDeviceId"])());
                    window.dispatchEvent(new Event("wishlistUpdated"));
                    return;
                } catch (createError) {
                    console.error("Wishlist API failed", createError?.response?.data?.message || createError.message);
                    return;
                }
            }
            console.error("Wishlist API failed", error_2?.response?.data?.message || error_2.message);
        }
    };
    const updateFilters = (updater)=>{
        setCurrentPage(1);
        setFilters(updater);
    };
    const goToPage = (page)=>{
        const nextPage = Math.min(Math.max(page, 1), totalPages);
        setCurrentPage(nextPage);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const rememberProduct = (product_1)=>{
        sessionStorage.setItem("selectedProduct", JSON.stringify(product_1));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-zinc-50 min-h-screen flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden lg:block w-[300px] p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-40 bg-white/70 backdrop-blur-xl border rounded-2xl p-4 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold mb-4",
                            children: "Filters"
                        }, void 0, false, {
                            fileName: "[project]/src/app/shop/porductpage.js",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$Attributefilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            categories: categories,
                            selectedCategory: selectedCategory,
                            filters: filters,
                            updateFilters: updateFilters,
                            visibleSubCategories: visibleSubCategories
                        }, void 0, false, {
                            fileName: "[project]/src/app/shop/porductpage.js",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/shop/porductpage.js",
                    lineNumber: 381,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/shop/porductpage.js",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$FestiveOfferBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/shop/porductpage.js",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 z-20 bg-white/80 backdrop-blur border-b px-4 py-3 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-bold text-lg",
                                        children: "Shop"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/porductpage.js",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-500",
                                        children: productsLoading ? "Loading products..." : `${pageStart}-${pageEnd} of ${filtered.length} products`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/porductpage.js",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/porductpage.js",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpenFilter(true),
                                        className: "lg:hidden flex items-center gap-2 bg-black text-white px-3 py-2 rounded-xl text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/porductpage.js",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, this),
                                            "Filter"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/porductpage.js",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setView("grid"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/porductpage.js",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/porductpage.js",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setView("compact"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$2x2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid2X2$3e$__["Grid2X2"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/porductpage.js",
                                            lineNumber: 411,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/porductpage.js",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/porductpage.js",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/shop/porductpage.js",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    productsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-4 mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800",
                        children: productsError
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/porductpage.js",
                        lineNumber: 416,
                        columnNumber: 27
                    }, this),
                    productsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$PageSkeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductGridSkeleton"], {
                        count: 8
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/porductpage.js",
                        lineNumber: 421,
                        columnNumber: 28
                    }, this) : paginatedProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center py-20 text-center text-zinc-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: "No products found."
                        }, void 0, false, {
                            fileName: "[project]/src/app/shop/porductpage.js",
                            lineNumber: 422,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/porductpage.js",
                        lineNumber: 421,
                        columnNumber: 97
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid auto-rows-fr gap-5 p-4 ${view === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-2 md:grid-cols-3"}`,
                        children: paginatedProducts.map((p_0)=>{
                            const isWishlisted = wishlistItems.some((item_2)=>item_2.id === p_0.id);
                            const hasDiscount = p_0.mrp > p_0.price;
                            const discountPercent = hasDiscount ? Math.round((p_0.mrp - p_0.price) / p_0.mrp * 100) : 0;
                            const handleWishlistClick = (event)=>{
                                event.preventDefault();
                                event.stopPropagation();
                                const isAlreadyLiked = wishlistItems.some((item_3)=>item_3.id === p_0.id);
                                toggleWishlist(p_0);
                                syncWishlistWithBackend(p_0, isAlreadyLiked);
                            };
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/ProductDetailpage/${p_0.id}`,
                                onClick: ()=>rememberProduct(p_0),
                                className: "h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group flex h-full min-h-[330px] flex-col overflow-hidden rounded-2xl border border-[#FF9900] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(255,153,0,0.25)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-square overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100",
                                            children: [
                                                p_0.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: p_0.image,
                                                    alt: p_0.name,
                                                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/shop/porductpage.js",
                                                    lineNumber: 440,
                                                    columnNumber: 36
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-full w-full items-center justify-center bg-gray-100 text-xs text-gray-400",
                                                    children: "No image available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/shop/porductpage.js",
                                                    lineNumber: 440,
                                                    columnNumber: 181
                                                }, this),
                                                hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute top-2 right-2 z-10 text-[10px] font-bold px-2 py-1 bg-[#CC0C39] text-white rounded-md shadow-sm",
                                                    children: [
                                                        discountPercent,
                                                        "% OFF"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/shop/porductpage.js",
                                                    lineNumber: 444,
                                                    columnNumber: 39
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute top-2 left-2 text-[10px] font-medium px-2 py-1 bg-black/80 backdrop-blur-sm text-white rounded-full",
                                                    children: getCategoryName(p_0.category)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/shop/porductpage.js",
                                                    lineNumber: 448,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleWishlistClick,
                                                    className: `absolute right-2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-300 hover:scale-110 ${hasDiscount ? "top-11" : "top-2"}`,
                                                    "aria-label": "Add to wishlist",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                        size: 15,
                                                        className: isWishlisted ? "fill-[#FF9900] text-[#FF9900]" : "text-gray-600 hover:text-[#FF9900]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/shop/porductpage.js",
                                                        lineNumber: 454,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/shop/porductpage.js",
                                                    lineNumber: 453,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>rememberProduct(p_0),
                                                    className: "absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-orange-100/95 backdrop-blur-sm border-t border-orange-200 px-2 py-2 flex items-center justify-center gap-1.5 hover:bg-orange-200/95",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            size: 13,
                                                            className: "text-[#E68A00]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/shop/porductpage.js",
                                                            lineNumber: 459,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] sm:text-[11px] font-bold tracking-wide text-[#E68A00]",
                                                            children: "VIEW"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/shop/porductpage.js",
                                                            lineNumber: 460,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/shop/porductpage.js",
                                                    lineNumber: 458,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/shop/porductpage.js",
                                            lineNumber: 439,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-1 flex-col p-2.5 bg-gradient-to-b from-orange-50/40 to-orange-50/70",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-semibold leading-5 text-gray-900 line-clamp-2",
                                                    children: p_0.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/shop/porductpage.js",
                                                    lineNumber: 468,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-0.5",
                                                            children: Array.from({
                                                                length: 5
                                                            }).map((__0, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    size: 11,
                                                                    className: i < Math.floor(p_0.rating) ? "fill-yellow-400 text-yellow-400" : "text-zinc-200"
                                                                }, i, false, {
                                                                    fileName: "[project]/src/app/shop/porductpage.js",
                                                                    lineNumber: 476,
                                                                    columnNumber: 40
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/shop/porductpage.js",
                                                            lineNumber: 473,
                                                            columnNumber: 25
                                                        }, this),
                                                        p_0.rating > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-medium text-zinc-400",
                                                            children: p_0.rating.toFixed(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/shop/porductpage.js",
                                                            lineNumber: 478,
                                                            columnNumber: 44
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/shop/porductpage.js",
                                                    lineNumber: 472,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 flex items-baseline gap-2 flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[16px] font-extrabold text-[#0F1111]",
                                                            children: [
                                                                "Rs.",
                                                                Number(p_0.price).toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/shop/porductpage.js",
                                                            lineNumber: 484,
                                                            columnNumber: 25
                                                        }, this),
                                                        hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-zinc-400 line-through",
                                                            children: [
                                                                "Rs.",
                                                                Number(p_0.mrp).toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/shop/porductpage.js",
                                                            lineNumber: 487,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/shop/porductpage.js",
                                                    lineNumber: 483,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `w-1.5 h-1.5 rounded-full ${p_0.stock == null ? "bg-zinc-400" : p_0.stock > 0 ? "bg-green-500" : "bg-red-500"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/shop/porductpage.js",
                                                            lineNumber: 493,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs font-medium ${p_0.stock == null ? "text-zinc-500" : p_0.stock > 0 ? "text-green-700" : "text-red-600"}`,
                                                            children: p_0.stock == null ? "Stock not listed" : p_0.stock > 0 ? `In stock (${p_0.stock})` : "Out of stock"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/shop/porductpage.js",
                                                            lineNumber: 494,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/shop/porductpage.js",
                                                    lineNumber: 492,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/shop/porductpage.js",
                                            lineNumber: 467,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[3px] w-full bg-gradient-to-r from-[#FF9900] to-[#FFC266] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/porductpage.js",
                                            lineNumber: 501,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/shop/porductpage.js",
                                    lineNumber: 436,
                                    columnNumber: 19
                                }, this)
                            }, p_0.id, false, {
                                fileName: "[project]/src/app/shop/porductpage.js",
                                lineNumber: 435,
                                columnNumber: 18
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/porductpage.js",
                        lineNumber: 423,
                        columnNumber: 20
                    }, this),
                    !productsLoading && totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-4 mb-8 mt-2 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-zinc-600",
                                children: [
                                    "Showing ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-black",
                                        children: [
                                            pageStart,
                                            "-",
                                            pageEnd
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/shop/porductpage.js",
                                        lineNumber: 509,
                                        columnNumber: 23
                                    }, this),
                                    " of",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-black",
                                        children: filtered.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/porductpage.js",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/porductpage.js",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>goToPage(activePage - 1),
                                        disabled: activePage === 1,
                                        className: "flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-zinc-700 transition hover:border-[#FF9900] hover:text-[#FF9900] disabled:cursor-not-allowed disabled:opacity-40",
                                        "aria-label": "Previous page",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/porductpage.js",
                                            lineNumber: 515,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/porductpage.js",
                                        lineNumber: 514,
                                        columnNumber: 15
                                    }, this),
                                    visiblePages[0] > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>goToPage(1),
                                                className: "h-10 min-w-10 rounded-full border border-gray-200 bg-white px-3 text-sm font-semibold text-zinc-700 transition hover:border-[#FF9900] hover:text-[#FF9900]",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/porductpage.js",
                                                lineNumber: 519,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-1 text-sm font-semibold text-zinc-400",
                                                children: "..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/porductpage.js",
                                                lineNumber: 522,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    visiblePages.map((page_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>goToPage(page_0),
                                            className: `h-10 min-w-10 rounded-full px-3 text-sm font-bold transition ${activePage === page_0 ? "bg-[#FF9900] text-black shadow-md shadow-orange-200" : "border border-gray-200 bg-white text-zinc-700 hover:border-[#FF9900] hover:text-[#FF9900]"}`,
                                            children: page_0
                                        }, page_0, false, {
                                            fileName: "[project]/src/app/shop/porductpage.js",
                                            lineNumber: 525,
                                            columnNumber: 43
                                        }, this)),
                                    visiblePages[visiblePages.length - 1] < totalPages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-1 text-sm font-semibold text-zinc-400",
                                                children: "..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/porductpage.js",
                                                lineNumber: 530,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>goToPage(totalPages),
                                                className: "h-10 min-w-10 rounded-full border border-gray-200 bg-white px-3 text-sm font-semibold text-zinc-700 transition hover:border-[#FF9900] hover:text-[#FF9900]",
                                                children: totalPages
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/porductpage.js",
                                                lineNumber: 531,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>goToPage(activePage + 1),
                                        disabled: activePage === totalPages,
                                        className: "flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-zinc-700 transition hover:border-[#FF9900] hover:text-[#FF9900] disabled:cursor-not-allowed disabled:opacity-40",
                                        "aria-label": "Next page",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/porductpage.js",
                                            lineNumber: 537,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/porductpage.js",
                                        lineNumber: 536,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/porductpage.js",
                                lineNumber: 513,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/shop/porductpage.js",
                        lineNumber: 507,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/shop/porductpage.js",
                lineNumber: 390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: openFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.28,
                                ease: "easeOut"
                            },
                            className: "fixed inset-0 bg-black/50 z-40",
                            onClick: ()=>setOpenFilter(false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/shop/porductpage.js",
                            lineNumber: 547,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                y: "100%"
                            },
                            animate: {
                                y: 0
                            },
                            exit: {
                                y: "100%"
                            },
                            transition: {
                                duration: 0.46,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            className: "fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl p-4 h-[75vh] overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-bold",
                                            children: "Filters"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/porductpage.js",
                                            lineNumber: 569,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            onClick: ()=>setOpenFilter(false)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/porductpage.js",
                                            lineNumber: 570,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/shop/porductpage.js",
                                    lineNumber: 568,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$Attributefilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    categories: categories,
                                    selectedCategory: selectedCategory,
                                    filters: filters,
                                    updateFilters: updateFilters,
                                    visibleSubCategories: visibleSubCategories,
                                    showRating: false
                                }, void 0, false, {
                                    fileName: "[project]/src/app/shop/porductpage.js",
                                    lineNumber: 573,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/shop/porductpage.js",
                            lineNumber: 558,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/shop/porductpage.js",
                lineNumber: 545,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/shop/porductpage.js",
        lineNumber: 377,
        columnNumber: 10
    }, this);
}
_s(ShopPage, "lgQeirm/qcPHvweqjabMwhRu5fc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ShopPage;
var _c;
__turbopack_context__.k.register(_c, "ShopPage");
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
"[project]/src/app/shop/ShopHero.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
;
function getOfferText(discountPercentage) {
    return discountPercentage > 0 ? `${discountPercentage}% OFF` : "HOT DEAL";
}
function createSlidesFromBanners(banners) {
    return banners.map((banner)=>{
        const discount = banner.discount_percentage || banner.discountPercentage || 0;
        return {
            id: banner._id || banner.id,
            img: banner.image_url || banner.image,
            title: banner.title || "Shop offer",
            desc: banner.description || "",
            price: getOfferText(discount),
            tag: getOfferText(discount),
            categoryName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryNameFromBanner"])(banner)
        };
    }).filter((slide)=>slide.id && slide.img);
}
function ShopHero() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(73);
    if ($[0] !== "97e5b04a68e36f26924a938fd48dda981561110e47c249f61229ac9c523a5aad") {
        for(let $i = 0; $i < 73; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "97e5b04a68e36f26924a938fd48dda981561110e47c249f61229ac9c523a5aad";
    }
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("category") || "All";
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const selectedCategory = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const [banners, setBanners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t2;
    if ($[4] !== banners || $[5] !== selectedCategory) {
        t2 = selectedCategory === "All" ? banners : banners.filter({
            "ShopHero[banners.filter()]": (banner)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryNameFromBanner"])(banner) === selectedCategory
        }["ShopHero[banners.filter()]"]);
        $[4] = banners;
        $[5] = selectedCategory;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const visibleBanners = t2;
    let t3;
    if ($[7] !== visibleBanners) {
        t3 = createSlidesFromBanners(visibleBanners);
        $[7] = visibleBanners;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const slides = t3;
    let t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ShopHero[useEffect()]": ()=>{
                let isMounted = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$banners$2f$banners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBanners"])().then({
                    "ShopHero[useEffect() > (anonymous)()]": (items)=>{
                        if (!isMounted) {
                            return;
                        }
                        setBanners(items);
                        setIndex(0);
                    }
                }["ShopHero[useEffect() > (anonymous)()]"]).catch({
                    "ShopHero[useEffect() > (anonymous)()]": ()=>{
                        if (!isMounted) {
                            return;
                        }
                        setBanners([]);
                        setIndex(0);
                    }
                }["ShopHero[useEffect() > (anonymous)()]"]);
                return ()=>{
                    isMounted = false;
                };
            }
        })["ShopHero[useEffect()]"];
        t5 = [];
        $[9] = t4;
        $[10] = t5;
    } else {
        t4 = $[9];
        t5 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[11] !== slides.length) {
        t6 = ({
            "ShopHero[useEffect()]": ()=>{
                if (slides.length <= 1) {
                    return;
                }
                const timer = setInterval({
                    "ShopHero[useEffect() > setInterval()]": ()=>{
                        setIndex({
                            "ShopHero[useEffect() > setInterval() > setIndex()]": (prev)=>(prev + 1) % slides.length
                        }["ShopHero[useEffect() > setInterval() > setIndex()]"]);
                    }
                }["ShopHero[useEffect() > setInterval()]"], 4000);
                return ()=>clearInterval(timer);
            }
        })["ShopHero[useEffect()]"];
        t7 = [
            slides.length
        ];
        $[11] = slides.length;
        $[12] = t6;
        $[13] = t7;
    } else {
        t6 = $[12];
        t7 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    let t9;
    if ($[14] !== index || $[15] !== slides.length) {
        t8 = ({
            "ShopHero[useEffect()]": ()=>{
                if (index >= slides.length) {
                    setIndex(0);
                }
            }
        })["ShopHero[useEffect()]"];
        t9 = [
            index,
            slides.length
        ];
        $[14] = index;
        $[15] = slides.length;
        $[16] = t8;
        $[17] = t9;
    } else {
        t8 = $[16];
        t9 = $[17];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    if (slides.length === 0) {
        return null;
    }
    const activeIndex = index % slides.length;
    const current = slides[activeIndex];
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 flex flex-wrap content-center gap-x-10 overflow-hidden opacity-[0.04]",
            children: Array.from({
                length: 12
            }).map(_ShopHeroAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 rounded-md bg-[#FF9900] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#0F1111]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/shop/ShopHero.js",
                    lineNumber: 175,
                    columnNumber: 148
                }, this),
                "Mega"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    const t12 = selectedCategory === "All" ? "Savings Sale" : selectedCategory;
    let t13;
    if ($[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#0F1111]",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-md bg-zinc-100 px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wider text-[#0F1111]",
            children: "Live now"
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex shrink-0 flex-col gap-1.5",
            children: [
                t11,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[23] = t13;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    let t17;
    let t18;
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            opacity: 0,
            scale: 1.1
        };
        t17 = {
            opacity: 1,
            scale: 1
        };
        t18 = {
            opacity: 0,
            scale: 0.95
        };
        t19 = {
            duration: 0.5
        };
        $[25] = t16;
        $[26] = t17;
        $[27] = t18;
        $[28] = t19;
    } else {
        t16 = $[25];
        t17 = $[26];
        t18 = $[27];
        t19 = $[28];
    }
    let t20;
    if ($[29] !== current.img || $[30] !== current.title) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: current.img,
            className: "object-cover",
            alt: current.title,
            fill: true,
            sizes: "200px"
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[29] = current.img;
        $[30] = current.title;
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    let t21;
    if ($[32] !== current.id || $[33] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[160px] w-[160px] shrink-0 overflow-hidden rounded-2xl border-4 border-black/10 md:h-[200px] md:w-[200px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t16,
                    animate: t17,
                    exit: t18,
                    transition: t19,
                    className: "absolute inset-0",
                    children: t20
                }, current.id, false, {
                    fileName: "[project]/src/app/shop/ShopHero.js",
                    lineNumber: 245,
                    columnNumber: 174
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/shop/ShopHero.js",
                lineNumber: 245,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[32] = current.id;
        $[33] = t20;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    const t22 = selectedCategory === "All" ? "Shop the Future Style" : `Shop ${selectedCategory}`;
    let t23;
    if ($[35] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-black uppercase leading-tight text-[#0F1111] md:text-4xl",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[35] = t22;
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] !== current.desc) {
        t24 = current.desc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 max-w-md text-sm font-medium text-zinc-700",
            children: current.desc
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 263,
            columnNumber: 27
        }, this);
        $[37] = current.desc;
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    const t25 = selectedCategory === "All" ? "Start Exploring" : `Explore ${selectedCategory}`;
    let t26;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            className: "h-4 w-4 transition group-hover:translate-x-1"
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[39] = t26;
    } else {
        t26 = $[39];
    }
    let t27;
    if ($[40] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/shop",
            className: "group inline-flex items-center gap-2 rounded-full bg-[#FF9900] px-6 py-2.5 text-sm font-black uppercase text-[#0F1111] transition-transform hover:scale-105 hover:bg-[#febd69]",
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[40] = t25;
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    let t28;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/deals",
            className: "rounded-full border-2 border-black/20 px-6 py-2.5 text-sm font-bold text-[#0F1111] transition-colors hover:bg-zinc-100",
            children: "View Deals"
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[42] = t28;
    } else {
        t28 = $[42];
    }
    let t29;
    if ($[43] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex flex-wrap justify-center gap-3 lg:justify-start",
            children: [
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[43] = t27;
        $[44] = t29;
    } else {
        t29 = $[44];
    }
    let t30;
    if ($[45] !== t23 || $[46] !== t24 || $[47] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                t24,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[45] = t23;
        $[46] = t24;
        $[47] = t29;
        $[48] = t30;
    } else {
        t30 = $[48];
    }
    let t31;
    if ($[49] !== t21 || $[50] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:gap-8 lg:text-left",
            children: [
                t21,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[49] = t21;
        $[50] = t30;
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    let t32;
    if ($[52] !== current.price) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "-rotate-3 rounded-2xl border-4 border-[#FF9900] bg-white px-6 py-3 text-center shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2xl font-black text-[#0F1111] md:text-3xl",
                children: current.price
            }, void 0, false, {
                fileName: "[project]/src/app/shop/ShopHero.js",
                lineNumber: 321,
                columnNumber: 117
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[52] = current.price;
        $[53] = t32;
    } else {
        t32 = $[53];
    }
    let t33;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-2 rounded-full bg-[#FF9900] px-5 py-1.5 text-xs font-black uppercase text-[#0F1111]",
            children: "Off"
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[54] = t33;
    } else {
        t33 = $[54];
    }
    let t34;
    if ($[55] !== current.tag) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-xs font-bold text-black/60",
            children: current.tag
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[55] = current.tag;
        $[56] = t34;
    } else {
        t34 = $[56];
    }
    let t35;
    if ($[57] !== t32 || $[58] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex shrink-0 flex-col items-center gap-2",
            children: [
                t32,
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[57] = t32;
        $[58] = t34;
        $[59] = t35;
    } else {
        t35 = $[59];
    }
    let t36;
    if ($[60] !== t15 || $[61] !== t31 || $[62] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 grid items-center gap-4 px-6 py-8 md:px-10 lg:grid-cols-[auto_1fr_auto] lg:gap-8 lg:px-12 lg:py-10",
            children: [
                t15,
                t31,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[60] = t15;
        $[61] = t31;
        $[62] = t35;
        $[63] = t36;
    } else {
        t36 = $[63];
    }
    let t37;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 overflow-hidden border-t-2 border-dashed border-white/20 bg-[#FF9900] py-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shop-hero-marquee flex gap-8 whitespace-nowrap",
                children: Array.from({
                    length: 10
                }).map(_ShopHeroAnonymous2)
            }, void 0, false, {
                fileName: "[project]/src/app/shop/ShopHero.js",
                lineNumber: 363,
                columnNumber: 117
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[64] = t37;
    } else {
        t37 = $[64];
    }
    let t38;
    if ($[65] !== activeIndex || $[66] !== slides) {
        t38 = slides.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 gap-2",
            children: slides.map({
                "ShopHero[slides.map()]": (slide, i_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ShopHero[slides.map() > <button>.onClick]": ()=>setIndex(i_1)
                        }["ShopHero[slides.map() > <button>.onClick]"],
                        "aria-label": `Go to slide ${i_1 + 1}`,
                        className: `h-1.5 rounded-full transition-all ${i_1 === activeIndex ? "w-6 bg-[#0F1111]" : "w-1.5 bg-black/25"}`
                    }, slide.id, false, {
                        fileName: "[project]/src/app/shop/ShopHero.js",
                        lineNumber: 373,
                        columnNumber: 51
                    }, this)
            }["ShopHero[slides.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 372,
            columnNumber: 32
        }, this);
        $[65] = activeIndex;
        $[66] = slides;
        $[67] = t38;
    } else {
        t38 = $[67];
    }
    let t39;
    if ($[68] !== t10 || $[69] !== t36 || $[70] !== t37 || $[71] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm",
            children: [
                t10,
                t36,
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/ShopHero.js",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[68] = t10;
        $[69] = t36;
        $[70] = t37;
        $[71] = t38;
        $[72] = t39;
    } else {
        t39 = $[72];
    }
    return t39;
}
_s(ShopHero, "NA+jr72P3Pl7fXPGVaHoG6tbXvA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ShopHero;
function _ShopHeroAnonymous2(__0, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex items-center gap-2 text-sm font-black text-[#0F1111]",
        children: [
            "Shop now ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/app/shop/ShopHero.js",
                lineNumber: 397,
                columnNumber: 105
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/src/app/shop/ShopHero.js",
        lineNumber: 397,
        columnNumber: 10
    }, this);
}
function _ShopHeroAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "whitespace-nowrap text-6xl font-black text-black",
        children: "50-80% OFF ."
    }, i, false, {
        fileName: "[project]/src/app/shop/ShopHero.js",
        lineNumber: 400,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ShopHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/shop/CategoryOfferStrip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryOfferStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
;
;
// yahan apni category ke hisab se image/discount change kar sakte ho
const offers = [
    {
        category: "Electronics",
        title: "Electronics Fest",
        discount: "Up to 60% off",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        bg: "from-orange-500/90 to-orange-700/90"
    },
    {
        category: "Fashion",
        title: "Fashion Sale",
        discount: "Up to 50% off",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
        bg: "from-pink-500/90 to-rose-700/90"
    },
    {
        category: "Mobiles",
        title: "Mobile Accessories",
        discount: "Up to 65% off",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
        bg: "from-blue-500/90 to-indigo-700/90"
    },
    {
        category: "Gaming",
        title: "Gaming Zone",
        discount: "Up to 40% off",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop",
        bg: "from-purple-500/90 to-violet-700/90"
    }
];
function CategoryOfferStrip() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "be8342d67743de71db743a5e76e964b9ca5b16389499617556d1f753536d7622") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "be8342d67743de71db743a5e76e964b9ca5b16389499617556d1f753536d7622";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mt-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4",
                children: offers.map(_CategoryOfferStripOffersMap)
            }, void 0, false, {
                fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
                lineNumber: 43,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = CategoryOfferStrip;
function _CategoryOfferStripOffersMap(offer) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/shop?category=${encodeURIComponent(offer.category)}`,
        className: "group relative h-[150px] overflow-hidden rounded-2xl shadow-sm transition hover:shadow-lg sm:h-[170px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: offer.image,
                alt: offer.title,
                className: "absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            }, void 0, false, {
                fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
                lineNumber: 51,
                columnNumber: 214
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 bg-gradient-to-t ${offer.bg} opacity-80`
            }, void 0, false, {
                fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
                lineNumber: 51,
                columnNumber: 359
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex h-full flex-col justify-between p-3 sm:p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-fit rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-black sm:text-xs",
                        children: "FESTIVE OFFER"
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
                        lineNumber: 51,
                        columnNumber: 516
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-white sm:text-base",
                                children: offer.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
                                lineNumber: 51,
                                columnNumber: 646
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-white/90 sm:text-sm",
                                children: offer.discount
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
                                lineNumber: 51,
                                columnNumber: 722
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-white/90 group-hover:gap-2 transition-all sm:text-xs",
                                children: [
                                    "Shop now",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
                                        lineNumber: 51,
                                        columnNumber: 950
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
                                lineNumber: 51,
                                columnNumber: 804
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
                        lineNumber: 51,
                        columnNumber: 641
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
                lineNumber: 51,
                columnNumber: 437
            }, this)
        ]
    }, offer.category, true, {
        fileName: "[project]/src/app/shop/CategoryOfferStrip.js",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CategoryOfferStrip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/shop/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$porductpage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shop/porductpage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$ShopHero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shop/ShopHero.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$PageSkeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/PageSkeleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$CategoryOfferStrip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shop/CategoryOfferStrip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$FestiveOfferBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shop/FestiveOfferBanner.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ShopPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "081c748dac4e18af0696cd5a67a95d6be5a6c69b000a98b459821dfb8c149cc3") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "081c748dac4e18af0696cd5a67a95d6be5a6c69b000a98b459821dfb8c149cc3";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$PageSkeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "grid"
            }, void 0, false, {
                fileName: "[project]/src/app/shop/page.js",
                lineNumber: 20,
                columnNumber: 30
            }, this),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$porductpage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/shop/page.js",
                    lineNumber: 20,
                    columnNumber: 60
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f$CategoryOfferStrip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/shop/page.js",
                    lineNumber: 20,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/shop/page.js",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = ShopPage;
var _c;
__turbopack_context__.k.register(_c, "ShopPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_13c94nn._.js.map