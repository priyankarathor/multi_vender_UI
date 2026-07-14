(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/component/AddressModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddressModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2d$fixed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LocateFixed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/locate-fixed.mjs [app-client] (ecmascript) <export default as LocateFixed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const INDIAN_STATES = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Jammu & Kashmir",
    "Ladakh"
];
const fieldClass = "w-full h-9 border rounded px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-[#FF9900]";
function AddressModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(132);
    if ($[0] !== "06c12aefd15ff08d081d48108ad524dc3b04cd4a215b95375e2022c368ceb10a") {
        for(let $i = 0; $i < 132; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06c12aefd15ff08d081d48108ad524dc3b04cd4a215b95375e2022c368ceb10a";
    }
    const { isOpen, onClose, onSave } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            fullName: "",
            mobile: "",
            pincode: "",
            flat: "",
            area: "",
            landmark: "",
            city: "",
            state: "",
            isDefault: false
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {};
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] !== errors) {
        t3 = ({
            "AddressModal[handleChange]": (e)=>{
                const { name, value, type, checked } = e.target;
                setForm({
                    "AddressModal[handleChange > setForm()]": (prev)=>({
                            ...prev,
                            [name]: type === "checkbox" ? checked : value
                        })
                }["AddressModal[handleChange > setForm()]"]);
                if (errors[name]) {
                    setErrors({
                        "AddressModal[handleChange > setErrors()]": (prev_0)=>({
                                ...prev_0,
                                [name]: ""
                            })
                    }["AddressModal[handleChange > setErrors()]"]);
                }
            }
        })["AddressModal[handleChange]"];
        $[3] = errors;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleChange = t3;
    let t4;
    if ($[5] !== form.area || $[6] !== form.city || $[7] !== form.flat || $[8] !== form.fullName || $[9] !== form.mobile || $[10] !== form.pincode || $[11] !== form.state) {
        t4 = ({
            "AddressModal[validate]": ()=>{
                const newErrors = {};
                if (!form.fullName.trim()) {
                    newErrors.fullName = "Full name is required";
                }
                if (!form.mobile.trim() || !/^\d{10}$/.test(form.mobile)) {
                    newErrors.mobile = "Enter a valid 10-digit mobile number";
                }
                if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode)) {
                    newErrors.pincode = "Enter a valid 6-digit pincode";
                }
                if (!form.flat.trim()) {
                    newErrors.flat = "This field is required";
                }
                if (!form.area.trim()) {
                    newErrors.area = "This field is required";
                }
                if (!form.city.trim()) {
                    newErrors.city = "City is required";
                }
                if (!form.state) {
                    newErrors.state = "Please select a state";
                }
                return newErrors;
            }
        })["AddressModal[validate]"];
        $[5] = form.area;
        $[6] = form.city;
        $[7] = form.flat;
        $[8] = form.fullName;
        $[9] = form.mobile;
        $[10] = form.pincode;
        $[11] = form.state;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const validate = t4;
    let t5;
    if ($[13] !== form || $[14] !== onClose || $[15] !== onSave || $[16] !== validate) {
        t5 = ({
            "AddressModal[handleSubmit]": ()=>{
                const newErrors_0 = validate();
                if (Object.keys(newErrors_0).length > 0) {
                    setErrors(newErrors_0);
                    return;
                }
                onSave(form);
                onClose();
            }
        })["AddressModal[handleSubmit]"];
        $[13] = form;
        $[14] = onClose;
        $[15] = onSave;
        $[16] = validate;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    const handleSubmit = t5;
    if (!isOpen) {
        return null;
    }
    let t6;
    if ($[18] !== onClose) {
        t6 = ({
            "AddressModal[<div>.onClick]": (e_0)=>e_0.target === e_0.currentTarget && onClose()
        })["AddressModal[<div>.onClick]"];
        $[18] = onClose;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    let t7;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-medium text-gray-900 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "h-5 w-5 text-[#FF9900]"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 157,
                    columnNumber: 84
                }, this),
                "Enter a new delivery address"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== onClose) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-5 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl z-10",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-gray-400 hover:text-gray-700 transition-colors p-1",
                    "aria-label": "Close",
                    children: t8
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 171,
                    columnNumber: 134
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 171,
            columnNumber: 10
        }, this);
        $[22] = onClose;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-orange-50 border border-orange-200 rounded-md px-4 py-3 flex items-center justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-800 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2d$fixed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LocateFixed$3e$__["LocateFixed"], {
                            className: "h-4 w-4 text-[#FF9900] shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/AddressModal.js",
                            lineNumber: 180,
                            columnNumber: 191
                        }, this),
                        "Save time. Autofill your current location."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 180,
                    columnNumber: 127
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-sm bg-white border border-orange-200 rounded px-3 py-1.5 hover:bg-orange-100 transition-colors",
                    children: "Autofill"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 180,
                    columnNumber: 299
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-800 mb-1",
            children: "Country/Region"
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t11;
    } else {
        t10 = $[24];
        t11 = $[25];
    }
    let t12;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: `${fieldClass} border-gray-400 bg-white`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        children: "India"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/AddressModal.js",
                        lineNumber: 190,
                        columnNumber: 82
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 190,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-800 mb-1",
            children: [
                "Full name ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-600",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 197,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    const t14 = `${fieldClass} ${errors.fullName ? "border-red-500" : "border-gray-400"}`;
    let t15;
    if ($[28] !== form.fullName || $[29] !== handleChange || $[30] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "fullName",
            value: form.fullName,
            onChange: handleChange,
            placeholder: "First and Last name",
            className: t14
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[28] = form.fullName;
        $[29] = handleChange;
        $[30] = t14;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== errors.fullName) {
        t16 = errors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-600 mt-1",
            children: errors.fullName
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 215,
            columnNumber: 30
        }, this);
        $[32] = errors.fullName;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] !== t15 || $[35] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = t16;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-800 mb-1",
            children: [
                "Mobile number ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-600",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 232,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    const t19 = `${fieldClass} ${errors.mobile ? "border-red-500" : "border-gray-400"}`;
    let t20;
    if ($[38] !== form.mobile || $[39] !== handleChange || $[40] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "tel",
            name: "mobile",
            value: form.mobile,
            onChange: handleChange,
            placeholder: "10-digit number",
            maxLength: 10,
            className: t19
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[38] = form.mobile;
        $[39] = handleChange;
        $[40] = t19;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== errors.mobile) {
        t21 = errors.mobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-600 mt-1",
            children: errors.mobile
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 250,
            columnNumber: 27
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "May be used to assist delivery"
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 250,
            columnNumber: 90
        }, this);
        $[42] = errors.mobile;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t20 || $[45] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[44] = t20;
        $[45] = t21;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== t17 || $[48] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
                t17,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[47] = t17;
        $[48] = t22;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-800 mb-1",
            children: [
                "Pincode ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-600",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 276,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    const t25 = `${fieldClass} ${errors.pincode ? "border-red-500" : "border-gray-400"}`;
    let t26;
    if ($[51] !== form.pincode || $[52] !== handleChange || $[53] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "pincode",
            value: form.pincode,
            onChange: handleChange,
            placeholder: "6 digits [0-9] PIN code",
            maxLength: 6,
            className: t25
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[51] = form.pincode;
        $[52] = handleChange;
        $[53] = t25;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    let t27;
    if ($[55] !== errors.pincode) {
        t27 = errors.pincode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-600 mt-1",
            children: errors.pincode
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 294,
            columnNumber: 29
        }, this);
        $[55] = errors.pincode;
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    let t28;
    if ($[57] !== t26 || $[58] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[57] = t26;
        $[58] = t27;
        $[59] = t28;
    } else {
        t28 = $[59];
    }
    let t29;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-800 mb-1",
            children: [
                "Flat, House no., Building, Company, Apartment",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-600",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 311,
                    columnNumber: 125
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[60] = t29;
    } else {
        t29 = $[60];
    }
    const t30 = `${fieldClass} ${errors.flat ? "border-red-500" : "border-gray-400"}`;
    let t31;
    if ($[61] !== form.flat || $[62] !== handleChange || $[63] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "flat",
            value: form.flat,
            onChange: handleChange,
            className: t30
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[61] = form.flat;
        $[62] = handleChange;
        $[63] = t30;
        $[64] = t31;
    } else {
        t31 = $[64];
    }
    let t32;
    if ($[65] !== errors.flat) {
        t32 = errors.flat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-600 mt-1",
            children: errors.flat
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 329,
            columnNumber: 26
        }, this);
        $[65] = errors.flat;
        $[66] = t32;
    } else {
        t32 = $[66];
    }
    let t33;
    if ($[67] !== t31 || $[68] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t29,
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[67] = t31;
        $[68] = t32;
        $[69] = t33;
    } else {
        t33 = $[69];
    }
    let t34;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-800 mb-1",
            children: [
                "Area, Street, Sector, Village",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-600",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 346,
                    columnNumber: 109
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[70] = t34;
    } else {
        t34 = $[70];
    }
    const t35 = `${fieldClass} ${errors.area ? "border-red-500" : "border-gray-400"}`;
    let t36;
    if ($[71] !== form.area || $[72] !== handleChange || $[73] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "area",
            value: form.area,
            onChange: handleChange,
            className: t35
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[71] = form.area;
        $[72] = handleChange;
        $[73] = t35;
        $[74] = t36;
    } else {
        t36 = $[74];
    }
    let t37;
    if ($[75] !== errors.area) {
        t37 = errors.area && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-600 mt-1",
            children: errors.area
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 364,
            columnNumber: 26
        }, this);
        $[75] = errors.area;
        $[76] = t37;
    } else {
        t37 = $[76];
    }
    let t38;
    if ($[77] !== t36 || $[78] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t34,
                t36,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[77] = t36;
        $[78] = t37;
        $[79] = t38;
    } else {
        t38 = $[79];
    }
    let t39;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-800 mb-1",
            children: "Landmark"
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[80] = t39;
    } else {
        t39 = $[80];
    }
    let t40;
    if ($[81] !== form.landmark || $[82] !== handleChange) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "landmark",
                    value: form.landmark,
                    onChange: handleChange,
                    placeholder: "E.g. near apollo hospital",
                    className: `${fieldClass} border-gray-400`
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 388,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[81] = form.landmark;
        $[82] = handleChange;
        $[83] = t40;
    } else {
        t40 = $[83];
    }
    let t41;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-800 mb-1",
            children: [
                "Town/City ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-600",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 397,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[84] = t41;
    } else {
        t41 = $[84];
    }
    const t42 = `${fieldClass} ${errors.city ? "border-red-500" : "border-gray-400"}`;
    let t43;
    if ($[85] !== form.city || $[86] !== handleChange || $[87] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "city",
            value: form.city,
            onChange: handleChange,
            className: t42
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[85] = form.city;
        $[86] = handleChange;
        $[87] = t42;
        $[88] = t43;
    } else {
        t43 = $[88];
    }
    let t44;
    if ($[89] !== errors.city) {
        t44 = errors.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-600 mt-1",
            children: errors.city
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 415,
            columnNumber: 26
        }, this);
        $[89] = errors.city;
        $[90] = t44;
    } else {
        t44 = $[90];
    }
    let t45;
    if ($[91] !== t43 || $[92] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t41,
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[91] = t43;
        $[92] = t44;
        $[93] = t45;
    } else {
        t45 = $[93];
    }
    let t46;
    if ($[94] !== t40 || $[95] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
                t40,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[94] = t40;
        $[95] = t45;
        $[96] = t46;
    } else {
        t46 = $[96];
    }
    let t47;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-800 mb-1",
            children: [
                "State ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-600",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/AddressModal.js",
                    lineNumber: 441,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 441,
            columnNumber: 11
        }, this);
        $[97] = t47;
    } else {
        t47 = $[97];
    }
    const t48 = form.state;
    const t49 = `${fieldClass} bg-white ${errors.state ? "border-red-500" : "border-gray-400"}`;
    let t50;
    let t51;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Choose a state"
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 451,
            columnNumber: 11
        }, this);
        t51 = INDIAN_STATES.map(_AddressModalINDIAN_STATESMap);
        $[98] = t50;
        $[99] = t51;
    } else {
        t50 = $[98];
        t51 = $[99];
    }
    let t52;
    if ($[100] !== form.state || $[101] !== handleChange || $[102] !== t49) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            name: "state",
            value: t48,
            onChange: handleChange,
            className: t49,
            children: [
                t50,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[100] = form.state;
        $[101] = handleChange;
        $[102] = t49;
        $[103] = t52;
    } else {
        t52 = $[103];
    }
    let t53;
    if ($[104] !== errors.state) {
        t53 = errors.state && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-600 mt-1",
            children: errors.state
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 471,
            columnNumber: 27
        }, this);
        $[104] = errors.state;
        $[105] = t53;
    } else {
        t53 = $[105];
    }
    let t54;
    if ($[106] !== t52 || $[107] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t47,
                t52,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[106] = t52;
        $[107] = t53;
        $[108] = t54;
    } else {
        t54 = $[108];
    }
    let t55;
    if ($[109] !== form.isDefault || $[110] !== handleChange) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            name: "isDefault",
            checked: form.isDefault,
            onChange: handleChange,
            className: "w-4 h-4 accent-[#FF9900]"
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[109] = form.isDefault;
        $[110] = handleChange;
        $[111] = t55;
    } else {
        t55 = $[111];
    }
    let t56;
    if ($[112] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-800",
            children: "Make this my default address"
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 497,
            columnNumber: 11
        }, this);
        $[112] = t56;
    } else {
        t56 = $[112];
    }
    let t57;
    if ($[113] !== t55) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex items-center gap-2 cursor-pointer",
            children: [
                t55,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        $[113] = t55;
        $[114] = t57;
    } else {
        t57 = $[114];
    }
    let t58;
    if ($[115] !== handleSubmit) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSubmit,
            className: "w-full bg-[#FF9900] hover:bg-[#e68a00] text-black font-medium py-2.5 rounded-lg transition-colors text-sm mt-2",
            children: "Use this address"
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[115] = handleSubmit;
        $[116] = t58;
    } else {
        t58 = $[116];
    }
    let t59;
    if ($[117] !== t23 || $[118] !== t28 || $[119] !== t33 || $[120] !== t38 || $[121] !== t46 || $[122] !== t54 || $[123] !== t57 || $[124] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 space-y-4",
            children: [
                t10,
                t12,
                t23,
                t28,
                t33,
                t38,
                t46,
                t54,
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 520,
            columnNumber: 11
        }, this);
        $[117] = t23;
        $[118] = t28;
        $[119] = t33;
        $[120] = t38;
        $[121] = t46;
        $[122] = t54;
        $[123] = t57;
        $[124] = t58;
        $[125] = t59;
    } else {
        t59 = $[125];
    }
    let t60;
    if ($[126] !== t59 || $[127] !== t9) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-xl",
            children: [
                t9,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 535,
            columnNumber: 11
        }, this);
        $[126] = t59;
        $[127] = t9;
        $[128] = t60;
    } else {
        t60 = $[128];
    }
    let t61;
    if ($[129] !== t6 || $[130] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
            onClick: t6,
            children: t60
        }, void 0, false, {
            fileName: "[project]/src/app/component/AddressModal.js",
            lineNumber: 544,
            columnNumber: 11
        }, this);
        $[129] = t6;
        $[130] = t60;
        $[131] = t61;
    } else {
        t61 = $[131];
    }
    return t61;
}
_s(AddressModal, "T1iIzqviMNLqvm2XQDkuXK+X8o8=");
_c = AddressModal;
function _AddressModalINDIAN_STATESMap(state) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: state,
        children: state
    }, state, false, {
        fileName: "[project]/src/app/component/AddressModal.js",
        lineNumber: 554,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AddressModal");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "9e128fe610e54389b63605fc232a22290117d30d33fc6163d3d5048dcfd237bf") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9e128fe610e54389b63605fc232a22290117d30d33fc6163d3d5048dcfd237bf";
    }
    const { items: t1, onProceed } = t0;
    let t10;
    let t11;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== onProceed || $[2] !== t1) {
        const items = t1 === undefined ? [] : t1;
        const subtotal = items.reduce(_OrderSummaryItemsReduce, 0);
        t10 = "bg-white border border-gray-200 rounded-xl p-5 sticky top-4";
        if ($[13] !== onProceed) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onProceed,
                className: "w-full bg-[#FF9900] hover:bg-[#e68a00] text-black font-medium py-3 rounded-lg transition-colors text-sm mb-4",
                children: "Deliver to this address"
            }, void 0, false, {
                fileName: "[project]/src/app/component/OrderSummary.js",
                lineNumber: 30,
                columnNumber: 13
            }, this);
            $[13] = onProceed;
            $[14] = t11;
        } else {
            t11 = $[14];
        }
        t6 = "space-y-2 text-sm";
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 37,
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
                    lineNumber: 37,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Delivery:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 39,
                        columnNumber: 64
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-green-700 font-medium",
                        children: "FREE"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 39,
                        columnNumber: 86
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/OrderSummary.js",
                lineNumber: 39,
                columnNumber: 12
            }, this);
            $[15] = t8;
        } else {
            t8 = $[15];
        }
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Marketplace fee:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 45,
                        columnNumber: 64
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "--"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/OrderSummary.js",
                        lineNumber: 45,
                        columnNumber: 93
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/OrderSummary.js",
                lineNumber: 45,
                columnNumber: 12
            }, this);
            $[16] = t9;
        } else {
            t9 = $[16];
        }
        t4 = "flex justify-between pt-2 mt-2 border-t border-gray-200 text-base font-medium text-gray-900";
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Order Total:"
            }, void 0, false, {
                fileName: "[project]/src/app/component/OrderSummary.js",
                lineNumber: 52,
                columnNumber: 12
            }, this);
            $[17] = t5;
        } else {
            t5 = $[17];
        }
        t2 = "\u20B9";
        t3 = subtotal.toLocaleString("en-IN");
        $[1] = onProceed;
        $[2] = t1;
        $[3] = t10;
        $[4] = t11;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
        $[12] = t9;
    } else {
        t10 = $[3];
        t11 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
        t7 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    let t12;
    if ($[18] !== t2 || $[19] !== t3) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t2,
                t3,
                ".00"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 85,
            columnNumber: 11
        }, this);
        $[18] = t2;
        $[19] = t3;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t12 || $[22] !== t4 || $[23] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t4;
        $[23] = t5;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t13 || $[26] !== t6 || $[27] !== t7 || $[28] !== t8 || $[29] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t6;
        $[27] = t7;
        $[28] = t8;
        $[29] = t9;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-xs text-gray-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                    className: "h-4 w-4 text-[#FF9900]"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/OrderSummary.js",
                    lineNumber: 116,
                    columnNumber: 74
                }, this),
                "Secure payments"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 space-y-2",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                            className: "h-4 w-4 text-[#FF9900]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/OrderSummary.js",
                            lineNumber: 123,
                            columnNumber: 111
                        }, this),
                        "Fast delivery"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/OrderSummary.js",
                    lineNumber: 123,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== t10 || $[34] !== t11 || $[35] !== t14) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/OrderSummary.js",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[33] = t10;
        $[34] = t11;
        $[35] = t14;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    return t17;
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
"[project]/src/app/apis/order/order.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "placeOrder",
    ()=>placeOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const BASE_URL = "http://localhost:5000/api/orders";
const placeOrder = (data)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/place-order`, data);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$AddressModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/AddressModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CartItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/CartItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$OrderSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/OrderSummary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$order$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/apis/order/order.js [app-client] (ecmascript)");
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
// cart item se place-order API ka required item shape banata hai
function toOrderItem(item) {
    return {
        product_id: item?.pid?._id || item?.pid || item?.productId || "",
        variant_id: item?.variantId?._id || item?.variantId || "",
        vendor_id: item?.venderid || item?.vendorId || "",
        product_name: item?.name || "Untitled Product",
        quantity: item?.qty || item?.quantity || 1,
        unit_price: getCheckoutItemPrice(item)
    };
}
function CheckoutPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cartReady, setCartReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savedAddress, setSavedAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [placingOrder, setPlacingOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPage.useEffect": ()=>{
            const timer = window.setTimeout({
                "CheckoutPage.useEffect.timer": ()=>{
                    const checkoutData = JSON.parse(localStorage.getItem("checkoutData") || "{}");
                    const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
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
    // AddressModal ke "Save & Place Order" button se yahi call hota hai
    const handleSaveAddress = async (address)=>{
        if (cartItems.length === 0) {
            alert("Your cart is empty.");
            return;
        }
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const userId = user?._id || localStorage.getItem("cid") || "";
        const [firstName, ...rest] = (address.fullName || "").trim().split(" ");
        const lastName = rest.join(" ");
        const fullAddressText = [
            address.houseNumber,
            address.area,
            address.locality,
            address.city,
            address.state,
            address.pincode,
            address.landmark
        ].filter(Boolean).join(", ");
        const payload = {
            user_id: userId,
            payment_method: "COD",
            billing_address: {
                address: fullAddressText
            },
            shipping_address: {
                address: fullAddressText
            },
            customer_details: {
                first_name: firstName || "",
                last_name: lastName || "",
                phone: address.mobile,
                email: user?.email || ""
            },
            items: cartItems.map(toOrderItem)
        };
        try {
            setPlacingOrder(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$apis$2f$order$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placeOrder"])(payload);
            setSavedAddress(address);
            setIsModalOpen(false);
            localStorage.removeItem("checkoutData");
            localStorage.removeItem("cartItems");
            alert("Order placed successfully!");
            router.push("/");
        } catch (error) {
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
                lineNumber: 112,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Checkout/page.js",
            lineNumber: 111,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 py-6 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-gray-200 rounded-xl p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-medium text-gray-900 pb-3 border-b border-gray-200 mb-3 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "h-5 w-5 text-[#FF9900]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Checkout/page.js",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this),
                                                "Delivery address"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Checkout/page.js",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        savedAddress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-orange-50 border border-orange-200 rounded-lg p-4 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-900 mb-1 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            className: "h-4 w-4 text-[#FF9900]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Checkout/page.js",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Delivery address saved"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Checkout/page.js",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-700",
                                                    children: savedAddress.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Checkout/page.js",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        savedAddress.houseNumber,
                                                        ", ",
                                                        savedAddress.area
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Checkout/page.js",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        savedAddress.city,
                                                        ", ",
                                                        savedAddress.state,
                                                        " -",
                                                        " ",
                                                        savedAddress.pincode
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Checkout/page.js",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this),
                                                savedAddress.landmark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: [
                                                        "Near: ",
                                                        savedAddress.landmark
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Checkout/page.js",
                                                    lineNumber: 142,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsModalOpen(true),
                                                    className: "text-xs text-[#FF9900] hover:underline mt-2 block font-medium",
                                                    children: "Change address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Checkout/page.js",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Checkout/page.js",
                                            lineNumber: 127,
                                            columnNumber: 31
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mb-4",
                                            children: "Enter your address to see delivery options"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Checkout/page.js",
                                            lineNumber: 148,
                                            columnNumber: 26
                                        }, this),
                                        !savedAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(true),
                                            className: "bg-[#FF9900] hover:bg-[#e68a00] text-black font-medium text-sm px-5 py-2.5 rounded-full transition-colors inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Checkout/page.js",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                "Add a new delivery address"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Checkout/page.js",
                                            lineNumber: 152,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Checkout/page.js",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CartItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    items: cartItems
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Checkout/page.js",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Checkout/page.js",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:sticky lg:top-44 self-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$OrderSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: cartItems,
                                onProceed: ()=>setIsModalOpen(true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Checkout/page.js",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Checkout/page.js",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Checkout/page.js",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Checkout/page.js",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$AddressModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onSave: handleSaveAddress
            }, void 0, false, {
                fileName: "[project]/src/app/Checkout/page.js",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Checkout/page.js",
        lineNumber: 117,
        columnNumber: 10
    }, this);
}
_s(CheckoutPage, "f32KcEdnx2xKt67G/2BjmrHI350=", false, function() {
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
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheck
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
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Plus
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
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/locate-fixed.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LocateFixed
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
        "line",
        {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12",
            key: "bvdh0s"
        }
    ],
    [
        "line",
        {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12",
            key: "1tbv5k"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5",
            key: "11lu5j"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "7",
            key: "fim9np"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const LocateFixed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("locate-fixed", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/locate-fixed.mjs [app-client] (ecmascript) <export default as LocateFixed>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocateFixed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2d$fixed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2d$fixed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/locate-fixed.mjs [app-client] (ecmascript)");
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

//# sourceMappingURL=_0dpvf1t._.js.map