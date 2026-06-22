"use client";

import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

const brands = ["Apple", "Samsung", "Nike", "Sony", "Adidas", "Puma"];

export default function CategorySidebar({}) {
  const [openSections, setOpenSections] = useState({
    brand: true,
    rating: true,
    price: true,
    prime: true,
    delivery: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="hidden lg:block w-[270px] shrink-0">
      <div className="bg-white border border-zinc-200 rounded-md overflow-hidden sticky top-30 h-[calc(100vh-100px)] overflow-y-auto">

        {/* Header */}
        <div className="px-4 py-4 border-b bg-white sticky top-0 z-10">
          <h2 className="text-lg font-bold text-black">Filters</h2>
        </div>

        {/* BRAND */}
        <div className="border-b">
          <button
            onClick={() => toggleSection("brand")}
            className="w-full flex items-center justify-between px-4 py-3"
          >
            <h3 className="text-sm font-bold text-black">Brand</h3>
            <ChevronDown
              className={`w-4 h-4 transition ${
                openSections.brand ? "rotate-180" : ""
              }`}
            />
          </button>

          {openSections.brand && (
            <div className="px-4 pb-4 space-y-3">
              {brands.map((brand, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-zinc-700">{brand}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* CUSTOMER REVIEWS */}
        <div className="border-b">
          <button
            onClick={() => toggleSection("rating")}
            className="w-full flex items-center justify-between px-4 py-3"
          >
            <h3 className="text-sm font-bold text-black">Customer Reviews</h3>
            <ChevronDown
              className={`w-4 h-4 transition ${
                openSections.rating ? "rotate-180" : ""
              }`}
            />
          </button>

          {openSections.rating && (
            <div className="px-4 pb-4 space-y-3">
              {[4, 3, 2].map((rating) => (
                <button
                  key={rating}
                  className="flex items-center gap-2 hover:text-[#C7511F]"
                >
                  <div className="flex items-center">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < rating
                              ? "fill-[#FFA41C] text-[#FFA41C]"
                              : "text-zinc-300"
                          }`}
                        />
                      ))}
                  </div>
                  <span className="text-sm">& Up</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* PRICE */}
        <div className="border-b">
          <button
            onClick={() => toggleSection("price")}
            className="w-full flex items-center justify-between px-4 py-3"
          >
            <h3 className="text-sm font-bold text-black">Price</h3>
            <ChevronDown
              className={`w-4 h-4 transition ${
                openSections.price ? "rotate-180" : ""
              }`}
            />
          </button>

          {openSections.price && (
            <div className="px-4 pb-5 space-y-2">
              {[
                "Under ₹500",
                "₹500 - ₹1,000",
                "₹1,000 - ₹5,000",
                "₹5,000 - ₹10,000",
                "Over ₹10,000",
              ].map((price, index) => (
                <button key={index} className="block text-sm hover:text-[#C7511F]">
                  {price}
                </button>
              ))}

              <div className="flex items-center gap-2 pt-3">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full h-9 border rounded px-2 text-sm"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full h-9 border rounded px-2 text-sm"
                />
                <button className="px-3 h-9 border rounded bg-zinc-100 hover:bg-zinc-200 text-sm">
                  Go
                </button>
              </div>
            </div>
          )}
        </div>

        {/* PRIME */}
        <div className="border-b px-4 py-4">
          <h3 className="text-sm font-bold mb-3">Prime</h3>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4" />
            <div className="flex items-center gap-1">
              <span className="text-[#00A8E1] font-bold text-sm">Prime</span>
              <span className="text-xs text-zinc-500">Eligible</span>
            </div>
          </label>
        </div>

        {/* DELIVERY */}
        <div className="px-4 py-4">
          <h3 className="text-sm font-bold mb-3">Delivery Day</h3>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Get It Today</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Get It Tomorrow</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}