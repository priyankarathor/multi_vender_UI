"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Menu, ShoppingBag, Store, User, X } from "lucide-react";

const getId = (item) => item?._id || item?.id;
const getCategoryIdFromSub = (sub) => sub?.categoryId?._id || sub?.categoryId || sub?.category;
const getSubIdFromSubSub = (subSub) =>
  subSub?.subcategoryId?._id || subSub?.subcategoryId || subSub?.subcategory;

const shopHref = ({ category, subcategory, subsubcategory }) => {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (subcategory) params.set("subcategory", subcategory);
  if (subsubcategory) params.set("subsubcategory", subsubcategory);
  return `/shop?${params.toString()}`;
};

export default function AllCategoriesMenu({
  open,
  onClose,
  categories = [],
  subCategories = [],
  subToSubCategories = [],
  onVendorClick,
}) {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [selectedSubId, setSelectedSubId] = useState(null);

  if (!open) return null;

  const activeCategory = categories.find((cat) => getId(cat) === activeCategoryId);
  const selectedSub = subCategories.find((sub) => getId(sub) === selectedSubId);
  const visibleSubs = activeCategoryId
    ? subCategories.filter((sub) => getCategoryIdFromSub(sub) === activeCategoryId)
    : [];
  const selectedSubSubs = selectedSubId
    ? subToSubCategories.filter((item) => getSubIdFromSubSub(item) === selectedSubId)
    : [];

  const getSubSubs = (subId) =>
    subToSubCategories.filter((item) => getSubIdFromSubSub(item) === subId);

  const closeMenu = () => {
    setActiveCategoryId(null);
    setSelectedSubId(null);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex bg-black/60" onClick={closeMenu}>
      <aside
        className="h-full w-[min(88vw,390px)] bg-white shadow-2xl flex flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="h-[58px] bg-[#1f2937] text-white flex items-center justify-between px-5">
          <div className="flex items-center gap-3 min-w-0">
            <User size={24} className="shrink-0" />
            <span className="text-lg font-bold truncate">Hello, sign in</span>
          </div>
          <button
            type="button"
            onClick={closeMenu}
            className="w-9 h-9 border border-white/30 rounded-md flex items-center justify-center hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {selectedSub ? (
            <>
              <button
                type="button"
                onClick={() => setSelectedSubId(null)}
                className="w-full h-12 px-5 flex items-center gap-3 border-b border-gray-300 text-left text-sm font-bold text-gray-800 hover:bg-gray-100"
              >
                <ArrowLeft size={19} className="text-gray-500" />
                <span>MAIN MENU</span>
              </button>

              <div className="px-5 py-5">
                <h2 className="text-xl font-bold text-gray-950">{selectedSub.name}</h2>
                <Link
                  href={shopHref({
                    category: activeCategory?.name,
                    subcategory: selectedSub.name,
                  })}
                  onClick={closeMenu}
                  className="mt-4 block py-2 text-sm font-medium text-gray-800 hover:text-[#FF9900]"
                >
                  All {selectedSub.name}
                </Link>
              </div>

              <div className="border-t border-gray-200 py-3">
                {selectedSubSubs.map((subSub) => (
                  <Link
                    key={getId(subSub)}
                    href={shopHref({
                      category: activeCategory?.name,
                      subcategory: selectedSub.name,
                      subsubcategory: subSub.name,
                    })}
                    onClick={closeMenu}
                    className="block px-5 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-100 hover:text-[#FF9900]"
                  >
                    {subSub.name}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="px-5 py-5 border-b border-gray-200">
                <div className="flex items-center gap-2 text-xl font-bold text-gray-950">
                  <Menu size={22} />
                  <span>All Categories</span>
                </div>
              </div>

              <div className="py-3 border-b border-gray-200">
                {categories.map((cat) => {
                  const catId = getId(cat);
                  const isActive = activeCategoryId === catId;

                  return (
                    <div key={catId}>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategoryId(isActive ? null : catId);
                          setSelectedSubId(null);
                        }}
                        className={`w-full min-h-12 px-5 flex items-center justify-between gap-3 text-left text-[15px] transition-colors ${
                          isActive
                            ? "bg-orange-50 text-gray-950 font-bold"
                            : "text-gray-800 hover:bg-gray-100 font-semibold"
                        }`}
                      >
                        <span className="truncate">{cat.name}</span>
                        <ChevronRight
                          size={18}
                          className={`shrink-0 transition-transform ${isActive ? "rotate-90 text-[#FF9900]" : "text-gray-500"}`}
                        />
                      </button>

                      {isActive && (
                        <div className="bg-gray-50 py-2">
                          {visibleSubs.map((sub) => {
                              const subId = getId(sub);
                              const subSubs = getSubSubs(subId);

                              return (
                              <button
                                key={subId}
                                type="button"
                                onClick={() => setSelectedSubId(subId)}
                                className="w-full min-h-11 pl-8 pr-5 flex items-center justify-between gap-3 text-left text-sm text-gray-700 hover:bg-white hover:text-gray-950 font-medium transition-colors"
                              >
                                <span className="truncate">{sub.name}</span>
                                {subSubs.length > 0 && (
                                  <ChevronRight size={16} className="shrink-0 text-gray-500" />
                                )}
                              </button>
                              );
                            })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <div className="border-t border-gray-200 bg-white p-4">
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                closeMenu();
                onVendorClick?.();
              }}
              className="h-11 rounded-md border border-[#FF9900] text-[#FF9900] flex items-center justify-center gap-2 text-sm font-bold hover:bg-orange-50 transition-colors"
            >
              <Store size={17} />
              Vendor
            </button>
            <Link
              href="/Addtocard"
              onClick={closeMenu}
              className="h-11 rounded-md bg-[#FF9900] text-black flex items-center justify-center gap-2 text-sm font-bold hover:bg-[#e09610] transition-colors"
            >
              <ShoppingBag size={17} />
              Cart
            </Link>
          </div>
        </div>
      </aside>
    </div>,
    document.body
  );
}
