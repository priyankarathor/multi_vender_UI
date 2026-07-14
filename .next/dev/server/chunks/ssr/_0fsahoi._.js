module.exports = [
"[project]/src/app/component/navbar.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
/*#__PURE__*/ _jsxDEV("header", {
    className: "sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm overflow-x-hidden",
    children: [
        /*#__PURE__*/ _jsxDEV("div", {
            className: "bg-white",
            children: /*#__PURE__*/ _jsxDEV("div", {
                className: "max-w-[1450px] mx-auto px-3 sm:px-6 lg:px-10",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex sm:hidden flex-col gap-2 py-2",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Link, {
                                        href: "/",
                                        className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FF9900]/10 text-[#FF9900] font-black text-base tracking-tight hover:bg-[#FF9900]/20 transition-colors",
                                        children: "Jajot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 9,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "relative",
                                                ref: profileDropdownRef,
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("button", {
                                                        type: "button",
                                                        onClick: ()=>customer ? setProfileDropdownOpen((prev)=>!prev) : setUserModalOpen(true),
                                                        className: "flex items-center justify-center w-9 h-9 rounded-lg text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20",
                                                        children: /*#__PURE__*/ _jsxDEV(User, {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 27,
                                                            columnNumber: 23
                                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 18,
                                                        columnNumber: 21
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                    customer && profileDropdownOpen && /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "px-4 py-3 border-b border-gray-100",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                                        className: "font-bold text-gray-900 text-sm",
                                                                        children: [
                                                                            "Hello ",
                                                                            customer.name || "there"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/component/navbar.js",
                                                                        lineNumber: 33,
                                                                        columnNumber: 27
                                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                                    (customer.number || customer.phone) && /*#__PURE__*/ _jsxDEV("p", {
                                                                        className: "text-xs text-gray-500 mt-0.5",
                                                                        children: customer.number || customer.phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/navbar.js",
                                                                        lineNumber: 38,
                                                                        columnNumber: 29
                                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                lineNumber: 32,
                                                                columnNumber: 25
                                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "py-1",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV(Link, {
                                                                        href: "/orders",
                                                                        onClick: ()=>setProfileDropdownOpen(false),
                                                                        className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                        children: "Orders"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/navbar.js",
                                                                        lineNumber: 45,
                                                                        columnNumber: 27
                                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                                    /*#__PURE__*/ _jsxDEV(Link, {
                                                                        href: "/Wishlist",
                                                                        onClick: ()=>setProfileDropdownOpen(false),
                                                                        className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                        children: "Wishlist"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/navbar.js",
                                                                        lineNumber: 53,
                                                                        columnNumber: 27
                                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                                    /*#__PURE__*/ _jsxDEV(Link, {
                                                                        href: "/contact",
                                                                        onClick: ()=>setProfileDropdownOpen(false),
                                                                        className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                        children: "Contact Us"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/navbar.js",
                                                                        lineNumber: 61,
                                                                        columnNumber: 27
                                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                lineNumber: 44,
                                                                columnNumber: 25
                                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "border-t border-gray-100 py-1",
                                                                children: /*#__PURE__*/ _jsxDEV("button", {
                                                                    type: "button",
                                                                    onClick: handleLogout,
                                                                    className: "w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50",
                                                                    children: "Logout"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 71,
                                                                    columnNumber: 27
                                                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                lineNumber: 70,
                                                                columnNumber: 25
                                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 31,
                                                        columnNumber: 23
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 17,
                                                columnNumber: 19
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                            /*#__PURE__*/ _jsxDEV(Link, {
                                                href: "/Addtocard",
                                                className: "relative flex items-center justify-center w-9 h-9 rounded-lg text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(ShoppingBag, {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 87,
                                                        columnNumber: 21
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                    cartCount > 0 && /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FF9900] text-black text-[10px] font-bold flex items-center justify-center",
                                                        children: cartCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 90,
                                                        columnNumber: 23
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                            /*#__PURE__*/ _jsxDEV("button", {
                                                type: "button",
                                                onClick: ()=>setAllMenuOpen(true),
                                                className: "flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-800 hover:border-[#FF9900] hover:text-[#FF9900]",
                                                children: /*#__PURE__*/ _jsxDEV(Menu, {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 16,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/navbar.js",
                                lineNumber: 8,
                                columnNumber: 15
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("form", {
                                onSubmit: handleSearchSubmit,
                                className: "flex h-9 w-full overflow-visible rounded-lg border-2 border-[#FF9900] bg-white transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF9900]/20 box-border",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "relative shrink-0 h-full",
                                        ref: searchCategoryRef,
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("button", {
                                                type: "button",
                                                onClick: ()=>setSearchCategoryOpen((prev)=>!prev),
                                                style: {
                                                    width: `${Math.min(90, searchCategoryWidth)}px`
                                                },
                                                className: "h-full flex items-center justify-between gap-1 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-l-[6px] pl-2 pr-1.5 text-[11px] font-semibold text-gray-800",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "truncate",
                                                        children: searchCategory
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                    /*#__PURE__*/ _jsxDEV(ChevronDown, {
                                                        size: 12,
                                                        className: `shrink-0 text-gray-600 transition-transform ${searchCategoryOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                            searchCategoryOpen && /*#__PURE__*/ _jsxDEV("div", {
                                                className: "absolute left-0 top-[calc(100%+8px)] w-48 max-h-72 overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] py-1.5",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("button", {
                                                        type: "button",
                                                        onClick: ()=>handleSearchCategoryChange("All"),
                                                        className: `w-full text-left px-4 py-2 text-sm ${searchCategory === "All" ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"}`,
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                    categories.map((cat)=>/*#__PURE__*/ _jsxDEV("button", {
                                                            type: "button",
                                                            onClick: ()=>handleSearchCategoryChange(cat.name),
                                                            className: `w-full text-left px-4 py-2 text-sm ${searchCategory === cat.name ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"}`,
                                                            children: cat.name
                                                        }, cat._id || cat.name, false, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("input", {
                                        value: searchQuery,
                                        onChange: (event)=>setSearchQuery(event.target.value),
                                        placeholder: "Search Products, Brands...",
                                        className: "min-w-0 flex-1 h-full bg-white px-2 text-[13px] font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("button", {
                                        type: "submit",
                                        className: "flex h-full w-9 shrink-0 items-center justify-center bg-white text-gray-600 hover:text-[#FF9900] rounded-r-[6px]",
                                        "aria-label": "Search",
                                        children: /*#__PURE__*/ _jsxDEV(Search, {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/navbar.js",
                                lineNumber: 107,
                                columnNumber: 15
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/navbar.js",
                        lineNumber: 6,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "hidden sm:flex min-h-[64px] items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV(Link, {
                                href: "/",
                                className: "inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#FF9900]/10 text-[#FF9900] font-black text-xl tracking-tight hover:bg-[#FF9900]/20 transition-colors",
                                children: "Jajot"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/navbar.js",
                                lineNumber: 178,
                                columnNumber: 15
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("form", {
                                onSubmit: handleSearchSubmit,
                                className: "flex h-11 w-full max-w-[560px] overflow-visible rounded-xl border-2 border-[#FF9900] bg-white transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF9900]/20 box-border",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "relative shrink-0 h-full",
                                        ref: searchCategoryRef,
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("button", {
                                                type: "button",
                                                onClick: ()=>setSearchCategoryOpen((prev)=>!prev),
                                                style: {
                                                    width: `${searchCategoryWidth}px`
                                                },
                                                className: "h-full flex items-center justify-between gap-1 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-l-[10px] pl-3 pr-2 text-xs font-semibold text-gray-800 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "truncate",
                                                        children: searchCategory
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                    /*#__PURE__*/ _jsxDEV(ChevronDown, {
                                                        size: 14,
                                                        className: `shrink-0 text-gray-600 transition-transform ${searchCategoryOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 197,
                                                        columnNumber: 21
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                            searchCategoryOpen && /*#__PURE__*/ _jsxDEV("div", {
                                                className: "absolute left-0 top-[calc(100%+8px)] w-52 max-h-72 overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] py-1.5",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("button", {
                                                        type: "button",
                                                        onClick: ()=>handleSearchCategoryChange("All"),
                                                        className: `w-full text-left px-4 py-2.5 text-sm transition-colors ${searchCategory === "All" ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"}`,
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 207,
                                                        columnNumber: 23
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                    categories.map((cat)=>/*#__PURE__*/ _jsxDEV("button", {
                                                            type: "button",
                                                            onClick: ()=>handleSearchCategoryChange(cat.name),
                                                            className: `w-full text-left px-4 py-2.5 text-sm transition-colors ${searchCategory === cat.name ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"}`,
                                                            children: cat.name
                                                        }, cat._id || cat.name, false, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 220,
                                                            columnNumber: 25
                                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 206,
                                                columnNumber: 21
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("input", {
                                        value: searchQuery,
                                        onChange: (event)=>setSearchQuery(event.target.value),
                                        placeholder: "Search for Products, Brands and More",
                                        className: "min-w-0 flex-1 h-full bg-white px-2 text-[15px] font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("button", {
                                        type: "submit",
                                        className: "flex h-full w-12 shrink-0 items-center justify-center bg-white text-gray-600 hover:text-[#FF9900] transition rounded-r-[10px]",
                                        "aria-label": "Search",
                                        children: /*#__PURE__*/ _jsxDEV(Search, {
                                            size: 21
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/navbar.js",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/navbar.js",
                                lineNumber: 185,
                                columnNumber: 15
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center gap-2 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "relative",
                                        ref: profileDropdownRef,
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("button", {
                                                type: "button",
                                                onClick: ()=>customer ? setProfileDropdownOpen((prev)=>!prev) : setUserModalOpen(true),
                                                className: "flex items-center gap-1.5 h-10 px-2 sm:px-3 rounded-lg text-sm font-semibold text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(User, {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "hidden sm:inline",
                                                        children: customer ? customer.name?.split(" ")[0] || "Account" : "Login"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 266,
                                                        columnNumber: 21
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                    /*#__PURE__*/ _jsxDEV(ChevronDown, {
                                                        size: 15,
                                                        className: `transition-transform ${profileDropdownOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                            customer && profileDropdownOpen && /*#__PURE__*/ _jsxDEV("div", {
                                                className: "absolute right-0 top-full mt-2 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "px-4 py-3 border-b border-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "font-bold text-gray-900 text-sm",
                                                                children: [
                                                                    "Hello ",
                                                                    customer.name || "there"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                lineNumber: 283,
                                                                columnNumber: 25
                                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                            (customer.number || customer.phone) && /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-xs text-gray-500 mt-0.5",
                                                                children: customer.number || customer.phone
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                lineNumber: 288,
                                                                columnNumber: 27
                                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 282,
                                                        columnNumber: 23
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "py-1",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Link, {
                                                                href: "/orders",
                                                                onClick: ()=>setProfileDropdownOpen(false),
                                                                className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                children: "Orders"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                lineNumber: 295,
                                                                columnNumber: 25
                                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                            /*#__PURE__*/ _jsxDEV(Link, {
                                                                href: "/Wishlist",
                                                                onClick: ()=>setProfileDropdownOpen(false),
                                                                className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                children: "Wishlist"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                lineNumber: 303,
                                                                columnNumber: 25
                                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                            /*#__PURE__*/ _jsxDEV(Link, {
                                                                href: "/contact",
                                                                onClick: ()=>setProfileDropdownOpen(false),
                                                                className: "block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                                children: "Contact Us"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/navbar.js",
                                                                lineNumber: 311,
                                                                columnNumber: 25
                                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 294,
                                                        columnNumber: 23
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "border-t border-gray-100 py-1",
                                                        children: /*#__PURE__*/ _jsxDEV("button", {
                                                            type: "button",
                                                            onClick: handleLogout,
                                                            className: "w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50",
                                                            children: "Logout"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 321,
                                                            columnNumber: 25
                                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 320,
                                                        columnNumber: 23
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 281,
                                                columnNumber: 21
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "relative hidden md:block group",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("button", {
                                                type: "button",
                                                className: "flex items-center gap-1.5 h-10 px-3 rounded-lg text-sm font-semibold text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20",
                                                children: [
                                                    "More",
                                                    /*#__PURE__*/ _jsxDEV(ChevronDown, {
                                                        size: 15,
                                                        className: "group-hover:rotate-180 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/navbar.js",
                                                        lineNumber: 339,
                                                        columnNumber: 21
                                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]",
                                                children: /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-1",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("button", {
                                                            type: "button",
                                                            onClick: openVendorModal,
                                                            className: "w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(Store, {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 352,
                                                                    columnNumber: 25
                                                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                                " Become a Vendor"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 347,
                                                            columnNumber: 23
                                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                        /*#__PURE__*/ _jsxDEV("button", {
                                                            type: "button",
                                                            onClick: sendOtp,
                                                            disabled: whatsappOtpLoading,
                                                            className: "w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-600 disabled:opacity-60",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(MessageCircle, {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/navbar.js",
                                                                    lineNumber: 361,
                                                                    columnNumber: 25
                                                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                                whatsappOtpLoading ? "Sending..." : "WhatsApp OTP"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/navbar.js",
                                                            lineNumber: 355,
                                                            columnNumber: 23
                                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/navbar.js",
                                                    lineNumber: 346,
                                                    columnNumber: 21
                                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV(Link, {
                                        href: "/Addtocard",
                                        className: "relative flex items-center gap-1.5 h-10 px-2 sm:px-3 rounded-lg text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20 font-semibold text-sm",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(ShoppingBag, {
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 372,
                                                columnNumber: 19
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: "hidden sm:inline",
                                                children: "Cart"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 373,
                                                columnNumber: 19
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                            cartCount > 0 && /*#__PURE__*/ _jsxDEV("span", {
                                                className: "absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FF9900] text-black text-[10px] font-bold flex items-center justify-center",
                                                children: cartCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/navbar.js",
                                                lineNumber: 376,
                                                columnNumber: 21
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 368,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/navbar.js",
                                lineNumber: 253,
                                columnNumber: 15
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/navbar.js",
                        lineNumber: 177,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/navbar.js",
                lineNumber: 4,
                columnNumber: 11
            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
        }, void 0, false, {
            fileName: "[project]/src/app/component/navbar.js",
            lineNumber: 3,
            columnNumber: 9
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
        /*#__PURE__*/ _jsxDEV("div", {
            className: "bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-x-hidden",
            children: /*#__PURE__*/ _jsxDEV("div", {
                className: "max-w-[1450px] mx-auto px-2 sm:px-6 lg:px-10 w-full",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex w-full min-w-0 min-h-[52px] md:min-h-[62px] items-center gap-1 overflow-x-auto scrollbar-hide",
                    onMouseEnter: ()=>clearTimeout(categoryPreviewTimeoutRef.current),
                    onMouseLeave: clearCategoryPreview,
                    children: [
                        /*#__PURE__*/ _jsxDEV("button", {
                            type: "button",
                            onClick: ()=>setAllMenuOpen(true),
                            className: "flex flex-col items-center justify-center gap-1 px-3 sm:px-4 py-1.5 shrink-0 text-gray-800 hover:text-[#FF9900]",
                            children: [
                                /*#__PURE__*/ _jsxDEV(Menu, {
                                    size: 20,
                                    className: "sm:hidden"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 401,
                                    columnNumber: 17
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV(Menu, {
                                    size: 22,
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 402,
                                    columnNumber: 17
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    className: "text-[11px] sm:text-xs font-semibold whitespace-nowrap",
                                    children: "All"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 403,
                                    columnNumber: 17
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/navbar.js",
                            lineNumber: 396,
                            columnNumber: 15
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV(Link, {
                            href: "/",
                            onClick: ()=>{
                                setActiveCategoryId(null);
                                setPreviewCategoryId(null);
                                setSearchCategory("All");
                            },
                            className: `flex flex-col items-center justify-center gap-1 px-3 sm:px-4 py-1.5 shrink-0 ${isActive("/") ? "text-[#FF9900]" : "text-gray-800 hover:text-[#FF9900]"}`,
                            children: [
                                /*#__PURE__*/ _jsxDEV(Store, {
                                    size: 20,
                                    className: "sm:hidden"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV(Store, {
                                    size: 22,
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 422,
                                    columnNumber: 17
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    className: `text-[11px] sm:text-xs whitespace-nowrap ${isActive("/") ? "font-bold border-b-2 border-[#FF9900] pb-1" : "font-semibold"}`,
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar.js",
                                    lineNumber: 424,
                                    columnNumber: 17
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/navbar.js",
                            lineNumber: 408,
                            columnNumber: 15
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        categories.slice(0, 12).map((cat)=>/*#__PURE__*/ _jsxDEV(Link, {
                                href: `/shop?category=${encodeURIComponent(cat.name)}`,
                                onMouseEnter: ()=>handleCategoryPreview(cat._id),
                                onFocus: ()=>handleCategoryPreview(cat._id),
                                onClick: ()=>{
                                    setActiveCategoryId(cat._id);
                                    setPreviewCategoryId(cat._id);
                                    setSearchCategory(cat.name);
                                },
                                className: `flex flex-col items-center justify-center gap-1 px-3 sm:px-4 py-1.5 shrink-0 ${activeCategoryId === cat._id ? "text-[#FF9900]" : "text-gray-800 hover:text-[#FF9900]"}`,
                                children: [
                                    /*#__PURE__*/ _jsxDEV(ShoppingBag, {
                                        size: 20,
                                        className: "sm:hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 452,
                                        columnNumber: 19
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV(ShoppingBag, {
                                        size: 22,
                                        className: "hidden sm:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 453,
                                        columnNumber: 19
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        className: `text-[11px] sm:text-xs whitespace-nowrap ${activeCategoryId === cat._id ? "font-bold border-b-2 border-[#FF9900] pb-1" : "font-semibold"}`,
                                        children: cat.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar.js",
                                        lineNumber: 455,
                                        columnNumber: 19
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                ]
                            }, cat._id, true, {
                                fileName: "[project]/src/app/component/navbar.js",
                                lineNumber: 436,
                                columnNumber: 17
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/navbar.js",
                    lineNumber: 389,
                    columnNumber: 13
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            }, void 0, false, {
                fileName: "[project]/src/app/component/navbar.js",
                lineNumber: 388,
                columnNumber: 11
            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
        }, void 0, false, {
            fileName: "[project]/src/app/component/navbar.js",
            lineNumber: 387,
            columnNumber: 9
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
    ]
}, void 0, true, {
    fileName: "[project]/src/app/component/navbar.js",
    lineNumber: 1,
    columnNumber: 1
}, /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/src/app/component/footer.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/component/footer.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/component/footer.js <module evaluation>", "default");
}),
"[project]/src/app/component/footer.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/component/footer.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/component/footer.js", "default");
}),
"[project]/src/app/component/footer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$footer$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/component/footer.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$footer$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/component/footer.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$footer$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/provider/GoogleAuthProvider.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/provider/GoogleAuthProvider.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/provider/GoogleAuthProvider.js <module evaluation>", "default");
}),
"[project]/src/app/provider/GoogleAuthProvider.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/provider/GoogleAuthProvider.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/provider/GoogleAuthProvider.js", "default");
}),
"[project]/src/app/provider/GoogleAuthProvider.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$provider$2f$GoogleAuthProvider$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/provider/GoogleAuthProvider.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$provider$2f$GoogleAuthProvider$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/provider/GoogleAuthProvider.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$provider$2f$GoogleAuthProvider$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$navbar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/navbar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$footer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/footer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$provider$2f$GoogleAuthProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/provider/GoogleAuthProvider.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    metadataBase: new URL("https://www.yourdomain.com"),
    title: "Amazon clone",
    description: "Premium E-commerce Website"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            suppressHydrationWarning: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$provider$2f$GoogleAuthProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: null,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$navbar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.js",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.js",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.js",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$footer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/layout.js",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.js",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.js",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.js",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0fsahoi._.js.map