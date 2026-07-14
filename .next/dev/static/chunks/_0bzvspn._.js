(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/Checkout/address.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddressForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/customer/customer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function AddressForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "066133c3b8f8bef4319047dad155780fcd815e63667a094795ffdff980ef526b") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "066133c3b8f8bef4319047dad155780fcd815e63667a094795ffdff980ef526b";
    }
    const { onSave, saving } = t0;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyForm);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AddressForm[useEffect()]": ()=>{
                const cid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCid"])();
                if (!cid) {
                    return;
                }
                const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$customer$2f$customer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLoggedInCustomerInfo"])();
                if (!info) {
                    return;
                }
                setForm({
                    "AddressForm[useEffect() > setForm()]": (prev)=>({
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
                        })
                }["AddressForm[useEffect() > setForm()]"]);
            }
        })["AddressForm[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] !== form) {
        t3 = ({
            "AddressForm[handleChange]": (e)=>{
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                });
            }
        })["AddressForm[handleChange]"];
        $[3] = form;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleChange = t3;
    let t4;
    if ($[5] !== form || $[6] !== onSave) {
        t4 = ({
            "AddressForm[handleSubmit]": async (e_0)=>{
                e_0.preventDefault();
                await onSave(form);
            }
        })["AddressForm[handleSubmit]"];
        $[5] = form;
        $[6] = onSave;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleSubmit = t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-bold tracking-wide text-gray-500",
            children: "CONTACT DETAILS"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== form.fullName || $[10] !== handleChange) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "fullName",
            value: form.fullName,
            onChange: handleChange,
            placeholder: "Name*",
            required: true,
            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[9] = form.fullName;
        $[10] = handleChange;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== form.mobile || $[13] !== handleChange) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[12] = form.mobile;
        $[13] = handleChange;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-bold tracking-wide text-gray-500 pt-3",
            children: "ADDRESS"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== form.pincode || $[17] !== handleChange) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "pincode",
            value: form.pincode,
            onChange: handleChange,
            placeholder: "Pin Code*",
            required: true,
            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[16] = form.pincode;
        $[17] = handleChange;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== form.houseNumber || $[20] !== handleChange) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "houseNumber",
            value: form.houseNumber,
            onChange: handleChange,
            placeholder: "House Number/Tower/Block*",
            required: true,
            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[19] = form.houseNumber;
        $[20] = handleChange;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] text-[#FF9900] mt-1",
            children: "*House Number will allow a doorstep delivery"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== form.area || $[26] !== handleChange) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "area",
            value: form.area,
            onChange: handleChange,
            placeholder: "Address (locality, building, street)*",
            required: true,
            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[25] = form.area;
        $[26] = handleChange;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] text-[#FF9900] mt-1",
            children: "*Please update society/apartment details"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== form.locality || $[32] !== handleChange) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "locality",
            value: form.locality,
            onChange: handleChange,
            placeholder: "Locality / Town*",
            required: true,
            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[31] = form.locality;
        $[32] = handleChange;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] !== form.city || $[35] !== handleChange) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "city",
            value: form.city,
            onChange: handleChange,
            placeholder: "City / District*",
            required: true,
            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[34] = form.city;
        $[35] = handleChange;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== form.state || $[38] !== handleChange) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "state",
            value: form.state,
            onChange: handleChange,
            placeholder: "State*",
            required: true,
            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[37] = form.state;
        $[38] = handleChange;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] !== t17 || $[41] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[40] = t17;
        $[41] = t18;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] !== form.landmark || $[44] !== handleChange) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "landmark",
            value: form.landmark,
            onChange: handleChange,
            placeholder: "Landmark (optional)",
            className: "w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[43] = form.landmark;
        $[44] = handleChange;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    const t21 = saving ? "PLACING ORDER..." : "DELIVER HERE & PLACE ORDER";
    let t22;
    if ($[46] !== saving || $[47] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: saving,
            className: "w-full sm:w-auto px-8 h-12 rounded-md bg-[#FF9900] hover:bg-[#e68a00] text-black text-sm font-bold tracking-wide transition disabled:opacity-60",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[46] = saving;
        $[47] = t21;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] !== t12 || $[50] !== t15 || $[51] !== t16 || $[52] !== t19 || $[53] !== t20 || $[54] !== t22 || $[55] !== t6 || $[56] !== t7 || $[57] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 max-w-[440px]",
            children: [
                t5,
                t6,
                t7,
                t8,
                t9,
                t12,
                t15,
                t16,
                t19,
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[49] = t12;
        $[50] = t15;
        $[51] = t16;
        $[52] = t19;
        $[53] = t20;
        $[54] = t22;
        $[55] = t6;
        $[56] = t7;
        $[57] = t9;
        $[58] = t23;
    } else {
        t23 = $[58];
    }
    let t24;
    if ($[59] !== handleSubmit || $[60] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "bg-white border border-gray-200 rounded-xl p-6",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/address.js",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[59] = handleSubmit;
        $[60] = t23;
        $[61] = t24;
    } else {
        t24 = $[61];
    }
    return t24;
}
_s(AddressForm, "l14dxiZhv69Urakwxd98gcDSJV8=");
_c = AddressForm;
var _c;
__turbopack_context__.k.register(_c, "AddressForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/CartItems.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-client] (ecmascript) <export default as Truck>");
;
;
;
function CartItems(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "b8ab946ca3b622fc60bb9d5ed68a015d728b5d9272d30b4f0e9318746f60bf59") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b8ab946ca3b622fc60bb9d5ed68a015d728b5d9272d30b4f0e9318746f60bf59";
    }
    const { items: t1 } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const items = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-medium text-gray-900 pb-3 border-b border-gray-200 mb-2",
            children: "Review items and shipping"
        }, void 0, false, {
            fileName: "[project]/src/app/component/CartItems.js",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== items) {
        let t5;
        if ($[6] !== items.length) {
            t5 = ({
                "CartItems[items.map()]": (item, index)=>{
                    const quantity = item.qty || item.quantity || 1;
                    const price = typeof item.price === "number" ? item.price : Number(String(item.price).replace(/[^\d]/g, "")) || 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex gap-3 py-4 ${index < items.length - 1 ? "border-b border-gray-100" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 flex-shrink-0 rounded bg-gray-100 overflow-hidden",
                                children: item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.image,
                                    alt: item.name,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/CartItems.js",
                                    lineNumber: 38,
                                    columnNumber: 229
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: "h-7 w-7 text-[#FF9900]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/CartItems.js",
                                        lineNumber: 38,
                                        columnNumber: 375
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/CartItems.js",
                                    lineNumber: 38,
                                    columnNumber: 311
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/CartItems.js",
                                lineNumber: 38,
                                columnNumber: 138
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-[#007185] hover:underline cursor-pointer line-clamp-2 mb-1",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/CartItems.js",
                                        lineNumber: 38,
                                        columnNumber: 466
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mb-1",
                                        children: [
                                            "In Stock · Qty: ",
                                            quantity
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/CartItems.js",
                                        lineNumber: 38,
                                        columnNumber: 580
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-900",
                                        children: [
                                            "₹",
                                            (price * quantity).toLocaleString("en-IN"),
                                            item.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("s", {
                                                className: "text-xs text-gray-400 font-normal ml-2",
                                                children: [
                                                    "₹",
                                                    item.originalPrice.toLocaleString("en-IN")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/CartItems.js",
                                                lineNumber: 38,
                                                columnNumber: 769
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/CartItems.js",
                                        lineNumber: 38,
                                        columnNumber: 652
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-green-700 mt-1 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                className: "h-3.5 w-3.5 text-[#FF9900]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/CartItems.js",
                                                lineNumber: 38,
                                                columnNumber: 946
                                            }, this),
                                            "FREE Delivery Tomorrow"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/CartItems.js",
                                        lineNumber: 38,
                                        columnNumber: 877
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/CartItems.js",
                                lineNumber: 38,
                                columnNumber: 434
                            }, this)
                        ]
                    }, item.id || index, true, {
                        fileName: "[project]/src/app/component/CartItems.js",
                        lineNumber: 38,
                        columnNumber: 18
                    }, this);
                }
            })["CartItems[items.map()]"];
            $[6] = items.length;
            $[7] = t5;
        } else {
            t5 = $[7];
        }
        t4 = items.map(t5);
        $[4] = items;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border border-gray-200 rounded-xl p-5 mt-4",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/CartItems.js",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_c = CartItems;
var _c;
__turbopack_context__.k.register(_c, "CartItems");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/OrderSummary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-client] (ecmascript) <export default as Truck>");
;
;
;
function OrderSummary(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "52d9ed980ec0512644ebc72070ff6fab793235e9b87c3b968daa81b9ae5ff7d2") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "52d9ed980ec0512644ebc72070ff6fab793235e9b87c3b968daa81b9ae5ff7d2";
    }
    const { items: t1, onProceed, disabled: t2 } = t0;
    let t10;
    let t11;
    let t12;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== onProceed || $[2] !== t1 || $[3] !== t2) {
        const items = t1 === undefined ? [] : t1;
        const disabled = t2 === undefined ? false : t2;
        const subtotal = items.reduce(_OrderSummaryItemsReduce, 0);
        t11 = "bg-white border border-gray-200 rounded-xl p-5 sticky top-4";
        const t13 = `w-full font-medium py-3 rounded-lg transition-colors text-sm mb-4 ${disabled ? "cursor-not-allowed bg-gray-200 text-gray-500" : "bg-[#FF9900] hover:bg-[#e68a00] text-black"}`;
        if ($[14] !== disabled || $[15] !== onProceed || $[16] !== t13) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onProceed,
                disabled: disabled,
                className: t13,
                children: "Deliver to this address"
            }, void 0, false, {
                fileName: "[project]/src/app/component/OrderSummary.js",
                lineNumber: 33,
                columnNumber: 13
            }, this);
            $[14] = disabled;
            $[15] = onProceed;
            $[16] = t13;
            $[17] = t12;
        } else {
            t12 = $[17];
        }
        t7 = "space-y-2 text-sm";
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-gray-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "Items (",
                        items.length,
                        "):"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/OrderSummary.js",
                    lineNumber: 42,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "₹",
                        subtotal.toLocaleString("en-IN"),
                        ".00"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/OrderSummary.js",
                    lineNumber: 42,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Delivery:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 44,
                        columnNumber: 64
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-green-700 font-medium",
                        children: "FREE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 44,
                        columnNumber: 86
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/OrderSummary.js",
                lineNumber: 44,
                columnNumber: 12
            }, this);
            $[18] = t9;
        } else {
            t9 = $[18];
        }
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Marketplace fee:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 50,
                        columnNumber: 65
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "--"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 50,
                        columnNumber: 94
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/OrderSummary.js",
                lineNumber: 50,
                columnNumber: 13
            }, this);
            $[19] = t10;
        } else {
            t10 = $[19];
        }
        t5 = "flex justify-between pt-2 mt-2 border-t border-gray-200 text-base font-medium text-gray-900";
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Order Total:"
            }, void 0, false, {
                fileName: "[project]/src/app/component/OrderSummary.js",
                lineNumber: 57,
                columnNumber: 12
            }, this);
            $[20] = t6;
        } else {
            t6 = $[20];
        }
        t3 = "\u20B9";
        t4 = subtotal.toLocaleString("en-IN");
        $[1] = onProceed;
        $[2] = t1;
        $[3] = t2;
        $[4] = t10;
        $[5] = t11;
        $[6] = t12;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
        $[13] = t9;
    } else {
        t10 = $[4];
        t11 = $[5];
        t12 = $[6];
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
        t7 = $[11];
        t8 = $[12];
        t9 = $[13];
    }
    let t13;
    if ($[21] !== t3 || $[22] !== t4) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t3,
                t4,
                ".00"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 91,
            columnNumber: 11
        }, this);
        $[21] = t3;
        $[22] = t4;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t13 || $[25] !== t5 || $[26] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 100,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t5;
        $[26] = t6;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t10 || $[29] !== t14 || $[30] !== t7 || $[31] !== t8 || $[32] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t9,
                t10,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t14;
        $[30] = t7;
        $[31] = t8;
        $[32] = t9;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-xs text-gray-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                    className: "h-4 w-4 text-[#FF9900]"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/OrderSummary.js",
                    lineNumber: 122,
                    columnNumber: 74
                }, this),
                "Secure payments"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 space-y-2",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                            className: "h-4 w-4 text-[#FF9900]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/OrderSummary.js",
                            lineNumber: 129,
                            columnNumber: 111
                        }, this),
                        "Fast delivery"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/OrderSummary.js",
                    lineNumber: 129,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== t11 || $[37] !== t12 || $[38] !== t15) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[36] = t11;
        $[37] = t12;
        $[38] = t15;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    return t18;
}
_c = OrderSummary;
function _OrderSummaryItemsReduce(sum, item) {
    return sum + (Number(item.price) || 0) * (item.qty || item.quantity || 1);
}
var _c;
__turbopack_context__.k.register(_c, "OrderSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/apis/orders/orders.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserOrders",
    ()=>getUserOrders,
    "placeOrder",
    ()=>placeOrder,
    "returnOrder",
    ()=>returnOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || "https://amazon-multi-vendor-3.onrender.com/api";
const getUserOrders = (userId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${BASE_URL}/orders/user/${userId}`);
};
const placeOrder = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/orders/place-order`, data);
};
const returnOrder = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/orders/return`, data);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Checkout/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Checkout$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Checkout/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CartItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/CartItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$OrderSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/OrderSummary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$orders$2f$orders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/orders/orders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/cart/cart.js [app-client] (ecmascript)");
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
    return item?.resolvedVendorId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartVendorId"])(item) || "";
}
function toOrderItem(item) {
    const vendorId = getCheckoutItemVendorId(item);
    return {
        product_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartProductId"])(item) || "",
        variant_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCartVariantId"])(item) || "",
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cartReady, setCartReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("BAG");
    const [placingOrder, setPlacingOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPage.useEffect": ()=>{
            const timer = window.setTimeout({
                "CheckoutPage.useEffect.timer": ()=>{
                    let checkoutData = {};
                    let savedCartItems = [];
                    try {
                        checkoutData = JSON.parse(localStorage.getItem("checkoutData") || "{}");
                    } catch (e) {
                        checkoutData = {};
                    }
                    try {
                        savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
                    } catch (e_0) {
                        savedCartItems = [];
                    }
                    const items = Array.isArray(checkoutData.items) ? checkoutData.items : savedCartItems;
                    setCartItems(Array.isArray(items) ? items.map(normalizeCheckoutItem) : []);
                    setCartReady(true);
                }
            }["CheckoutPage.useEffect.timer"], 0);
            return ({
                "CheckoutPage.useEffect": ()=>window.clearTimeout(timer)
            })["CheckoutPage.useEffect"];
        }
    }["CheckoutPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPage.useEffect": ()=>{
            const isLoggedIn = localStorage.getItem("userToken") || localStorage.getItem("user");
            if (!isLoggedIn) {
                router.replace("/Addtocard");
            }
        }
    }["CheckoutPage.useEffect"], [
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
        } catch (e_1) {
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$orders$2f$orders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placeOrder"])(payload);
            const orderedCartIds = cartItems.map((item_0)=>item_0?._id || item_0?.cartId || item_0?.id).filter(isValidObjectId);
            const deleteResults = await Promise.allSettled(orderedCartIds.map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$cart$2f$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCartItem"])(id)));
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-100 py-6 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-500",
                children: "Loading checkout..."
            }, void 0, false, {
                fileName: "[project]/src/app/Checkout/page.js",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/page.js",
            lineNumber: 179,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200 px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: steps.map((step, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this),
                                        index_0 < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300",
                                            children: "- - - - - -"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Checkout/page.js",
                                            lineNumber: 199,
                                            columnNumber: 48
                                        }, this)
                                    ]
                                }, step, true, {
                                    fileName: "[project]/src/app/Checkout/page.js",
                                    lineNumber: 189,
                                    columnNumber: 43
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Checkout/page.js",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 text-xs font-semibold text-green-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Checkout/page.js",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                "100% SECURE"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Checkout/page.js",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Checkout/page.js",
                    lineNumber: 187,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Checkout/page.js",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                currentStep === "BAG" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CartItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            items: cartItems
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Checkout/page.js",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleProceedFromBag,
                                            disabled: !canProceedFromBag,
                                            className: `mt-4 w-full sm:w-auto px-8 h-12 rounded-md text-sm font-bold tracking-wide transition ${canProceedFromBag ? "bg-[#FF9900] hover:bg-[#e68a00] text-black" : "cursor-not-allowed bg-gray-200 text-gray-500"}`,
                                            children: "PLACE ORDER"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Checkout/page.js",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                currentStep === "ADDRESS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Checkout$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onSave: handleSaveAddress,
                                    saving: placingOrder
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Checkout/page.js",
                                    lineNumber: 221,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Checkout/page.js",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:sticky lg:top-44 self-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$OrderSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: cartItems,
                                onProceed: handleProceedFromBag,
                                disabled: !canProceedFromBag
                            }, void 0, false, {
                                fileName: "[project]/src/app/Checkout/page.js",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Checkout/page.js",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Checkout/page.js",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Checkout/page.js",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Checkout/page.js",
        lineNumber: 185,
        columnNumber: 10
    }, this);
}
_s(CheckoutPage, "fxxV9d3K88EigZbocEogBfIWB9E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CheckoutPage;
var _c;
__turbopack_context__.k.register(_c, "CheckoutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Package
]);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw"
        }
    ],
    [
        "path",
        {
            d: "M12 22V12",
            key: "d0xqtd"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "path",
        {
            d: "m7.5 4.27 9 5.15",
            key: "1c824w"
        }
    ]
];
const Package = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("package", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript) <export default as Package>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Package",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0bzvspn._.js.map