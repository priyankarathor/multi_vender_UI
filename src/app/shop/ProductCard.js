"use client";

import { Eye, Star } from "lucide-react";

export default function ProductGrid({ filters }) {
  const filtered = ALL_PRODUCTS.filter((p) => {
    const matchCategory =
      filters.category === "All" || p.category === filters.category;

    return matchCategory;
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
      {filtered.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
        >
          {/* IMAGE */}
          <div className="relative overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="
                w-full 
                h-[140px] 
                sm:h-[180px] 
                md:h-[220px] 
                object-cover
              "
            />

            {/* CATEGORY BADGE */}
            <span className="absolute top-2 left-2 bg-black/90 text-white text-[9px] sm:text-[10px] px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          {/* CONTENT */}
          <div className="p-3 sm:p-4">
            {/* NAME */}
            <h3 className="font-semibold text-[13px] sm:text-sm line-clamp-2 min-h-[38px] sm:min-h-[42px]">
              {product.name}
            </h3>

            {/* RATING */}
            <div className="flex items-center gap-1 text-yellow-500 text-[11px] sm:text-xs mt-1">
              <Star size={13} fill="currentColor" />
              <span>{product.rating}</span>
            </div>

            {/* PRICE */}
            <div className="text-base sm:text-lg font-bold text-black mt-2">
              ₹{product.price.toLocaleString()}
            </div>

            {/* BUTTON */}
            <button
              className="
                w-full 
                mt-3 
                flex 
                items-center 
                justify-center 
                gap-2 
                bg-black 
                text-white 
                py-2.5 
                rounded-xl 
                text-[12px] 
                sm:text-sm 
                hover:bg-gray-800 
                transition
              "
            >
              <Eye size={15} />
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
