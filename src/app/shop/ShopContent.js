"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import CategorySidebar from "./CategorySidebar";
import MobileFilters from "./MobileFilters";
import ProductGrid from "./ProductGrid";
import ShopHero from "./ShopHero";
import SortBar from "./SortBar";
import CategoryOfferStrip from "./CategoryOfferStrip";

export default function ShopContent() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") || "All";

  const [filters, setFilters] = useState({
    category: urlCategory,
    price: null,
    sort: "Popularity",
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: urlCategory,
    }));
  }, [urlCategory]);

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <section className="mx-auto max-w-[1600px] px-4 py-5">

        <ShopHero />

        <div className="mt-8 flex gap-6">

          {/* SIDEBAR */}
          <CategorySidebar
            onSelectCategory={(category) =>
              setFilters((prev) => ({
                ...prev,
                category,
              }))
            }
          />

          {/* RIGHT */}
          <div className="flex-1">

            <div className="mb-5 flex justify-between">

              <SortBar
                onSortChange={(sort) =>
                  setFilters((prev) => ({ ...prev, sort }))
                }
                onFilterChange={(data) =>
                  setFilters((prev) => ({
                    ...prev,
                    category: data.category,
                    price: data.price,
                  }))
                }
              />

              <div className="lg:hidden">
                <MobileFilters />
              </div>
            </div>

            <ProductGrid filters={filters} />

          </div>
        </div>
      </section>
    </main>
  );
}