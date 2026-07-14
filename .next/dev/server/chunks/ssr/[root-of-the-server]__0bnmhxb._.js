module.exports = [
"[project]/src/app/apis/customer/customer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const savedCid = undefined;
};
const saveCustomerSession = (data)=>{
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const token = undefined;
    const cid = undefined;
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
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
};
}),
"[project]/src/app/Checkout/address.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddressForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/customer/customer.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const emptyForm = {
    fullName: "",
    mobile: "",
    pincode: "",
    houseNumber: "",
    area: "",
    locality: "",
    city: "",
    state: "",
    landmark: ""
};
function AddressForm({ onSave, saving }) {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyForm);
    // Login hone par jo bhi customer details mil sakein (name, mobile,
    // saved address) unse form ko auto-fill karo. Jo field backend se
    // nahi milti wo empty hi rahegi -- user usko khud bhar sakta hai.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCid"])();
        if (!cid) return;
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCustomerInfo"])();
        if (!info) return;
        setForm((prev)=>({
                ...prev,
                fullName: info.fullName || prev.fullName,
                mobile: info.mobile || prev.mobile,
                pincode: info.pincode || prev.pincode,
                houseNumber: info.houseNumber || prev.houseNumber,
                area: info.area || prev.area,
                locality: info.locality || prev.locality,
                city: info.city || prev.city,
                state: info.state || prev.state,
                landmark: info.landmark || prev.landmark
            }));
    }, []);
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await onSave(form);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "bg-white border border-gray-200 rounded-xl p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 max-w-[440px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-bold tracking-wide text-gray-500",
                    children: "CONTACT DETAILS"
                }, void 0, false, {
                    fileName: "[project]/src/app/Checkout/address.js",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "fullName",
                    value: form.fullName,
                    onChange: handleChange,
                    placeholder: "Name*",
                    required: true,
                    className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
                }, void 0, false, {
                    fileName: "[project]/src/app/Checkout/address.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "tel",
                    name: "mobile",
                    value: form.mobile,
                    onChange: handleChange,
                    placeholder: "Mobile No*",
                    required: true,
                    pattern: "[0-9]{10}",
                    className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
                }, void 0, false, {
                    fileName: "[project]/src/app/Checkout/address.js",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-bold tracking-wide text-gray-500 pt-3",
                    children: "ADDRESS"
                }, void 0, false, {
                    fileName: "[project]/src/app/Checkout/address.js",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "pincode",
                    value: form.pincode,
                    onChange: handleChange,
                    placeholder: "Pin Code*",
                    required: true,
                    className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
                }, void 0, false, {
                    fileName: "[project]/src/app/Checkout/address.js",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "houseNumber",
                            value: form.houseNumber,
                            onChange: handleChange,
                            placeholder: "House Number/Tower/Block*",
                            required: true,
                            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Checkout/address.js",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-[#FF9900] mt-1",
                            children: "*House Number will allow a doorstep delivery"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Checkout/address.js",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Checkout/address.js",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "area",
                            value: form.area,
                            onChange: handleChange,
                            placeholder: "Address (locality, building, street)*",
                            required: true,
                            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Checkout/address.js",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-[#FF9900] mt-1",
                            children: "*Please update society/apartment details"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Checkout/address.js",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Checkout/address.js",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "locality",
                    value: form.locality,
                    onChange: handleChange,
                    placeholder: "Locality / Town*",
                    required: true,
                    className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
                }, void 0, false, {
                    fileName: "[project]/src/app/Checkout/address.js",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "city",
                            value: form.city,
                            onChange: handleChange,
                            placeholder: "City / District*",
                            required: true,
                            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Checkout/address.js",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "state",
                            value: form.state,
                            onChange: handleChange,
                            placeholder: "State*",
                            required: true,
                            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Checkout/address.js",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Checkout/address.js",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "landmark",
                    value: form.landmark,
                    onChange: handleChange,
                    placeholder: "Landmark (optional)",
                    className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
                }, void 0, false, {
                    fileName: "[project]/src/app/Checkout/address.js",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: saving,
                    className: "w-full sm:w-auto px-8 h-12 rounded-md bg-[#FF9900] hover:bg-[#e68a00] text-black text-sm font-bold tracking-wide transition disabled:opacity-60",
                    children: saving ? "PLACING ORDER..." : "DELIVER HERE & PLACE ORDER"
                }, void 0, false, {
                    fileName: "[project]/src/app/Checkout/address.js",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/Checkout/address.js",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/component/CartItems.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-ssr] (ecmascript) <export default as Truck>");
;
;
function CartItems({ items = [] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-200 rounded-xl p-5 mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-medium text-gray-900 pb-3 border-b border-gray-200 mb-2",
                children: "Review items and shipping"
            }, void 0, false, {
                fileName: "[project]/src/app/component/CartItems.js",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            items.map((item, index)=>{
                const quantity = item.qty || item.quantity || 1;
                const price = typeof item.price === "number" ? item.price : Number(String(item.price).replace(/[^\d]/g, "")) || 0;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex gap-3 py-4 ${index < items.length - 1 ? "border-b border-gray-100" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 flex-shrink-0 rounded bg-gray-100 overflow-hidden",
                            children: item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.image,
                                alt: item.name,
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/CartItems.js",
                                lineNumber: 26,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                    className: "h-7 w-7 text-[#FF9900]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/CartItems.js",
                                    lineNumber: 33,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/CartItems.js",
                                lineNumber: 32,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/CartItems.js",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-[#007185] hover:underline cursor-pointer line-clamp-2 mb-1",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/CartItems.js",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mb-1",
                                    children: [
                                        "In Stock · Qty: ",
                                        quantity
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/CartItems.js",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-gray-900",
                                    children: [
                                        "₹",
                                        (price * quantity).toLocaleString("en-IN"),
                                        item.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("s", {
                                            className: "text-xs text-gray-400 font-normal ml-2",
                                            children: [
                                                "₹",
                                                item.originalPrice.toLocaleString("en-IN")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/CartItems.js",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/CartItems.js",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-green-700 mt-1 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                            className: "h-3.5 w-3.5 text-[#FF9900]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/CartItems.js",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        "FREE Delivery Tomorrow"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/CartItems.js",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/CartItems.js",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    ]
                }, item.id || index, true, {
                    fileName: "[project]/src/app/component/CartItems.js",
                    lineNumber: 18,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/CartItems.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/component/OrderSummary.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-ssr] (ecmascript) <export default as Truck>");
;
;
function OrderSummary({ items = [], onProceed, disabled = false }) {
    const subtotal = items.reduce((sum, item)=>sum + (Number(item.price) || 0) * (item.qty || item.quantity || 1), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-200 rounded-xl p-5 sticky top-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onProceed,
                disabled: disabled,
                className: `w-full font-medium py-3 rounded-lg transition-colors text-sm mb-4 ${disabled ? "cursor-not-allowed bg-gray-200 text-gray-500" : "bg-[#FF9900] hover:bg-[#e68a00] text-black"}`,
                children: "Deliver to this address"
            }, void 0, false, {
                fileName: "[project]/src/app/component/OrderSummary.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Items (",
                                    items.length,
                                    "):"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/OrderSummary.js",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "₹",
                                    subtotal.toLocaleString("en-IN"),
                                    ".00"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/OrderSummary.js",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Delivery:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/OrderSummary.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-700 font-medium",
                                children: "FREE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/OrderSummary.js",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Marketplace fee:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/OrderSummary.js",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "--"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/OrderSummary.js",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between pt-2 mt-2 border-t border-gray-200 text-base font-medium text-gray-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Order Total:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/OrderSummary.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "₹",
                                    subtotal.toLocaleString("en-IN"),
                                    ".00"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/OrderSummary.js",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/OrderSummary.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                className: "h-4 w-4 text-[#FF9900]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/OrderSummary.js",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            "Secure payments"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                className: "h-4 w-4 text-[#FF9900]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/OrderSummary.js",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            "Fast delivery"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/OrderSummary.js",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/OrderSummary.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/app/apis/orders/orders.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserOrders",
    ()=>getUserOrders,
    "placeOrder",
    ()=>placeOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://amazon-multi-vendor-3.onrender.com/api";
const getUserOrders = (userId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${BASE_URL}/orders/user/${userId}`);
};
const placeOrder = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/orders/place-order`, data);
};
}),
"[project]/src/app/apis/baseurl/baseurl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const BASE_URL = "https://amazon-multi-vendor-3.onrender.com/api";
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL
});
}),
"[project]/src/app/apis/cart/cart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/baseurl/baseurl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/customer/customer.js [app-ssr] (ecmascript)");
;
;
function getCartDeviceId() {
    if ("TURBOPACK compile-time truthy", 1) return "";
    //TURBOPACK unreachable
    ;
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
const makeEmptyCartResponse = ()=>({
        data: {
            success: true,
            data: []
        }
    });
const makeCartResponse = (items = [])=>({
        data: {
            success: true,
            data: items
        }
    });
const is404 = (err)=>err?.response?.status === 404;
function getCartProductId(item) {
    const product = item?.pid || item?.productId || item?.product_id || item?.product || item?.id;
    return typeof product === "object" ? product?._id || null : product || null;
}
function getCartVariantId(item) {
    const variant = item?.variantId || item?.variant_id || item?.variant;
    return typeof variant === "object" ? variant?._id || null : variant || null;
}
function getCartVendorId(item) {
    const vendor = item?.vendorId || item?.venderid || item?.vendor_id || item?.vendor || (item?.pid && typeof item.pid === "object" ? item.pid.vendorId : null) || (item?.productId && typeof item.productId === "object" ? item.productId.vendorId : null) || (item?.variantId && typeof item.variantId === "object" ? item.variantId.vendorId : null);
    return typeof vendor === "object" ? vendor?._id || null : vendor || null;
}
function getCartProductKey(item) {
    return getCartProductId(item) || getCartVariantId(item) || item?._id || null;
}
function buildCartUpdatePayload(item, cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCid"])(), qty = item?.qty || item?.quantity || 1) {
    return {
        cid,
        pid: getCartProductId(item),
        divid: item?.divid || item?.deviceId || getCartDeviceId(),
        qty,
        variantId: getCartVariantId(item),
        offerDiscount: item?.offerDiscount || item?.discount || 0,
        vendorId: getCartVendorId(item)
    };
}
async function createCartItem({ cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCid"])(), pid = null, qty = 1, variantId = null, offerDiscount = 0, vendorId = null, divid } = {}) {
    const finalDivid = divid || getCartDeviceId();
    const payload = {
        cid,
        pid,
        divid: finalDivid,
        qty,
        variantId,
        offerDiscount,
        venderid: vendorId
    };
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/cart/create", payload);
}
async function updateCartItem(id, data = {}) {
    if (!id) {
        return makeEmptyCartResponse();
    }
    const payload = {
        cid: data.cid ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCid"])(),
        pid: data.pid ?? getCartProductId(data),
        divid: data.divid || data.deviceId || getCartDeviceId(),
        qty: data.qty ?? data.quantity ?? 1,
        variantId: data.variantId ?? getCartVariantId(data),
        offerDiscount: data.offerDiscount ?? data.discount ?? 0,
        venderid: data.vendorId ?? getCartVendorId(data)
    };
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/cart/update/${id}`, payload);
    } catch (err) {
        if (is404(err)) {
            return makeEmptyCartResponse();
        }
        console.error("updateCartItem failed:", id, err?.message);
        throw err;
    }
}
async function deleteCartItem(id) {
    if (!id) {
        return makeEmptyCartResponse();
    }
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/cart/delete/${id}`);
    } catch (err) {
        if (is404(err)) {
            return makeEmptyCartResponse();
        }
        console.error("deleteCartItem failed:", id, err?.message);
        throw err;
    }
}
function removeCartItemLocally(items = [], id) {
    if (!Array.isArray(items) || !id) return items;
    return items.filter((item)=>item?._id !== id);
}
async function getAllCartItems() {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/cart/");
    } catch (err) {
        if (is404(err)) {
            return makeEmptyCartResponse();
        }
        return makeEmptyCartResponse();
    }
}
async function getCustomerCartItems(cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCid"])()) {
    if (!cid) {
        return makeEmptyCartResponse();
    }
    try {
        // cache-busting: same URL baar baar GET hoti hai, isliye kabhi kabhi
        // browser/axios purana (empty/404) response cache karke serve kar deta
        // tha - isliye add karne ke turant baad bhi purana khali cart dikhta tha.
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/cart/customer/${cid}`, {
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
            return makeEmptyCartResponse();
        }
        return makeEmptyCartResponse();
    }
}
async function getDeviceCartItems(divid = getCartDeviceId()) {
    if (!divid) {
        return makeEmptyCartResponse();
    }
    try {
        // cache-busting yahan bhi, same reason
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$baseurl$2f$baseurl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/cart/device/${divid}`, {
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
            return makeEmptyCartResponse();
        }
        return makeEmptyCartResponse();
    }
}
async function getCartItems({ cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCid"])(), divid = getCartDeviceId() } = {}) {
    try {
        if (cid) {
            const customerRes = await getCustomerCartItems(cid);
            const customerItems = getApiCartList(customerRes.data);
            return makeCartResponse(customerItems);
        }
        if (divid) {
            const deviceRes = await getDeviceCartItems(divid);
            const deviceItems = getApiCartList(deviceRes.data);
            return makeCartResponse(deviceItems);
        }
        return makeEmptyCartResponse();
    } catch  {
        return makeEmptyCartResponse();
    }
}
async function fetchNormalizedCartItems({ cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLoggedInCid"])(), divid = getCartDeviceId() } = {}) {
    try {
        const res = await getCartItems({
            cid,
            divid
        });
        const items = getApiCartList(res.data);
        return items.map((item)=>({
                ...item,
                resolvedVendorId: getCartVendorId(item)
            }));
    } catch  {
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
        const deviceItems = getApiCartList(deviceRes.data);
        if (deviceItems.length === 0) {
            return {
                success: true,
                migrated: 0
            };
        }
        const customerRes = await getCustomerCartItems(cid);
        const customerItems = getApiCartList(customerRes.data);
        const findMatchingCustomerItem = (item)=>{
            const pid = getCartProductId(item);
            const variantId = getCartVariantId(item);
            return customerItems.find((ci)=>String(getCartProductId(ci)) === String(pid) && String(getCartVariantId(ci)) === String(variantId));
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
                migratedCount++;
            } catch (itemErr) {
                console.warn("Cart item migrate failed:", item?._id, itemErr?.message);
            }
        }
        return {
            success: true,
            migrated: migratedCount
        };
    } catch (err) {
        console.warn("syncDeviceCartToCustomer failed:", err?.message);
        return {
            success: false,
            message: err?.message || "sync failed"
        };
    }
}
}),
"[project]/src/app/Checkout/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Checkout$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Checkout/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CartItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/CartItems.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$OrderSummary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/OrderSummary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$orders$2f$orders$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/orders/orders.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/cart/cart.js [app-ssr] (ecmascript)");
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
function getCheckoutItemPrice(item) {
    return Number(item?.price ?? item?.variantId?.offer?.salePrice ?? item?.variantId?.offer?.sellingPrice ?? 0);
}
function getCheckoutItemMrp(item) {
    return Number(item?.mrp ?? item?.variantId?.offer?.mrp ?? 0);
}
function normalizeCheckoutItem(item) {
    const qty = item?.qty || item?.quantity || 1;
    const price = getCheckoutItemPrice(item);
    const mrp = getCheckoutItemMrp(item);
    return {
        ...item,
        id: item?._id || item?.id || item?.cartId,
        name: item?.name || item?.title || item?.pid?.productName || item?.pid?.itemName || "Untitled Product",
        image: item?.image || item?.variantId?.images?.[0] || item?.pid?.images?.[0],
        qty,
        quantity: qty,
        price,
        originalPrice: mrp > price ? mrp : item?.originalPrice
    };
}
function getCheckoutItemVendorId(item) {
    return item?.resolvedVendorId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartVendorId"])(item) || "";
}
function toOrderItem(item) {
    const vendorId = getCheckoutItemVendorId(item);
    return {
        product_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartProductId"])(item) || "",
        variant_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCartVariantId"])(item) || "",
        vendor_id: vendorId,
        product_name: item?.pid?.productName || item?.pid?.itemName || item?.name || "Untitled Product",
        quantity: item?.qty || item?.quantity || 1,
        unit_price: getCheckoutItemPrice(item)
    };
}
function isValidObjectId(val) {
    return typeof val === "string" && /^[0-9a-fA-F]{24}$/.test(val);
}
function getLoggedInUserId(cartItems) {
    let user = {};
    try {
        user = JSON.parse(localStorage.getItem("user") || "{}");
    } catch (e) {
        user = {};
    }
    const candidates = [
        cartItems?.[0]?.cid,
        user?._id,
        user?.id,
        user?.userId,
        localStorage.getItem("cid"),
        localStorage.getItem("userId")
    ];
    return candidates.find(isValidObjectId) || "";
}
const steps = [
    "BAG",
    "ADDRESS",
    "PAYMENT"
];
function CheckoutPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cartReady, setCartReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("BAG");
    const [placingOrder, setPlacingOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = window.setTimeout(()=>{
            let checkoutData = {};
            let savedCartItems = [];
            try {
                checkoutData = JSON.parse(localStorage.getItem("checkoutData") || "{}");
            } catch (e) {
                checkoutData = {};
            }
            try {
                savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
            } catch (e) {
                savedCartItems = [];
            }
            const items = Array.isArray(checkoutData.items) ? checkoutData.items : savedCartItems;
            setCartItems(Array.isArray(items) ? items.map(normalizeCheckoutItem) : []);
            setCartReady(true);
        }, 0);
        return ()=>window.clearTimeout(timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const isLoggedIn = localStorage.getItem("userToken") || localStorage.getItem("user");
        if (!isLoggedIn) {
            router.replace("/Addtocard");
        }
    }, [
        router
    ]);
    const canProceedFromBag = cartItems.length > 0;
    const handleProceedFromBag = ()=>{
        if (!canProceedFromBag) {
            alert("Your cart is empty. Please add an item before checkout.");
            router.replace("/Addtocard");
            return;
        }
        setCurrentStep("ADDRESS");
    };
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
        const missingVendor = orderItems.find((item)=>!item.vendor_id);
        if (missingVendor) {
            console.warn("vendor_id missing for item:", missingVendor);
            alert("Kuch products ke liye vendor information nahi mil paayi. Cart me wapas jaakar item remove/add karke dobara try karo.");
            return;
        }
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$orders$2f$orders$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeOrder"])(payload);
            const orderedCartIds = cartItems.map((item)=>item?._id || item?.cartId || item?.id).filter(isValidObjectId);
            const deleteResults = await Promise.allSettled(orderedCartIds.map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCartItem"])(id)));
            deleteResults.forEach((result, index)=>{
                if (result.status === "rejected") {
                    console.error("Failed to remove ordered cart item", orderedCartIds[index], result.reason?.response?.data || result.reason?.message || result.reason);
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
    if (!cartReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-100 py-6 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-500",
                children: "Loading checkout..."
            }, void 0, false, {
                fileName: "[project]/src/app/Checkout/page.js",
                lineNumber: 289,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/page.js",
            lineNumber: 288,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200 px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                if (step === "BAG") setCurrentStep("BAG");
                                                if (step === "ADDRESS" && canProceedFromBag) {
                                                    setCurrentStep("ADDRESS");
                                                }
                                            },
                                            className: `text-xs font-bold tracking-widest ${currentStep === step ? "text-[#FF9900]" : "text-gray-400"}`,
                                            children: step
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Checkout/page.js",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this),
                                        index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300",
                                            children: "- - - - - -"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Checkout/page.js",
                                            lineNumber: 321,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, step, true, {
                                    fileName: "[project]/src/app/Checkout/page.js",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Checkout/page.js",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 text-xs font-semibold text-green-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Checkout/page.js",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this),
                                "100% SECURE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Checkout/page.js",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Checkout/page.js",
                    lineNumber: 299,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Checkout/page.js",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                currentStep === "BAG" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CartItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            items: cartItems
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Checkout/page.js",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleProceedFromBag,
                                            disabled: !canProceedFromBag,
                                            className: `mt-4 w-full sm:w-auto px-8 h-12 rounded-md text-sm font-bold tracking-wide transition ${canProceedFromBag ? "bg-[#FF9900] hover:bg-[#e68a00] text-black" : "cursor-not-allowed bg-gray-200 text-gray-500"}`,
                                            children: "PLACE ORDER"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Checkout/page.js",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                currentStep === "ADDRESS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Checkout$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onSave: handleSaveAddress,
                                    saving: placingOrder
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Checkout/page.js",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Checkout/page.js",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:sticky lg:top-44 self-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$OrderSummary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                items: cartItems,
                                onProceed: handleProceedFromBag,
                                disabled: !canProceedFromBag
                            }, void 0, false, {
                                fileName: "[project]/src/app/Checkout/page.js",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Checkout/page.js",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Checkout/page.js",
                    lineNumber: 335,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Checkout/page.js",
                lineNumber: 334,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Checkout/page.js",
        lineNumber: 297,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0bnmhxb._.js.map