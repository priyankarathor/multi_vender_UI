"use client";

import { Star } from "lucide-react";

export default function ProductGrid({ filters }) {
  const filtered = ALL_PRODUCTS.filter((p) => {
    const matchCategory =
      filters.category === "All" || p.category === filters.category;

    return matchCategory;
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
      {filtered.map((product) => {
        const mrp = product.mrp || product.oldPrice || null;
        const hasDiscount = mrp && mrp > product.price;
        const discountPercent = hasDiscount
          ? Math.round(((mrp - product.price) / mrp) * 100)
          : 0;

        return (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group border border-gray-200"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden bg-gray-50">
              {product.isNew && (
                <span className="absolute top-2 left-2 z-10 bg-[#CC0C39] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-sm">
                  New
                </span>
              )}

              {product.isSponsored && (
                <span className="absolute top-2 right-2 z-10 bg-gray-200/90 text-gray-600 text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-sm">
                  AD
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-[140px]
                  sm:h-[180px]
                  md:h-[220px]
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-300
                "
              />

              {product.reviews ? (
                <span className="absolute bottom-2 left-2 z-10 flex items-center gap-1 bg-white/95 text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-sm">
                  <span className="text-[#0F1111]">{product.rating}</span>
                  <Star size={11} className="fill-[#00A99D] text-[#00A99D]" />
                  <span className="text-gray-400 font-normal">
                    | {product.reviews >= 1000
                      ? `${(product.reviews / 1000).toFixed(1)}k`
                      : product.reviews}
                  </span>
                </span>
              ) : null}
            </div>

            {/* CONTENT */}
            <div className="p-3 sm:p-4">
              {product.brand && (
                <p className="text-[12px] sm:text-[13px] font-bold text-[#0F1111] uppercase tracking-tight">
                  {product.brand}
                </p>
              )}

              <h3 className="text-[12px] sm:text-[13px] text-gray-600 line-clamp-2 min-h-[32px] sm:min-h-[36px] mt-0.5">
                {product.name}
              </h3>

              {!product.reviews && (
                <div className="flex items-center gap-1 text-yellow-500 text-[11px] sm:text-xs mt-1">
                  <Star size={13} fill="currentColor" />
                  <span>{product.rating}</span>
                </div>
              )}

              {/* PRICE */}
              <div className="flex items-baseline gap-2 mt-2 flex-wrap">
                <span className="text-base sm:text-lg font-bold text-[#0F1111]">
                  Rs. {product.price.toLocaleString()}
                </span>

                {hasDiscount && (
                  <>
                    <span className="text-[12px] sm:text-sm text-gray-400 line-through">
                      Rs. {mrp.toLocaleString()}
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#CC0C39]">
                      ({discountPercent}% OFF)
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}