"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import {
  ChevronDown,
  Grid2X2,
  LayoutGrid,
  ArrowUpDown,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

// ================= SORT OPTIONS =================
const sortOptions = [
  "Popularity",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
  "Top Rated",
];

// ================= CATEGORY FILTERS =================
const filters = [
  "All",
  "Electronics",
  "Fashion",
  "Mobiles",
  "Beauty",
  "Furniture",
  "Gaming",
  "Accessories",
  "Sports",
  "Books",
  "Appliances",
  "Grocery",
];

// ================= PRICE FILTERS =================
const priceFilters = [
  "Under ₹500",
  "₹500 - ₹1000",
  "₹1000 - ₹5000",
  "Above ₹5000",
];

export default function SortBar({
  onSortChange,
  onViewChange,
  onFilterChange,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ================= STATES =================
  const [selectedSort, setSelectedSort] =
    useState("Popularity");

  const [openSort, setOpenSort] =
    useState(false);

  const [gridView, setGridView] =
    useState("grid");

  const [selectedPrice, setSelectedPrice] =
    useState(null);

  const [openMore, setOpenMore] =
    useState(false);

  // ================= CATEGORY FROM URL =================
  const categoryFromUrl =
    searchParams.get("category") || "All";

  const [activeFilter, setActiveFilter] =
    useState(categoryFromUrl);

  const dropdownRef = useRef(null);

  // ================= SYNC CATEGORY =================
  useEffect(() => {
    setActiveFilter(categoryFromUrl);
  }, [categoryFromUrl]);

  // ================= CLOSE DROPDOWN =================
  useEffect(() => {
    function handleClick(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpenSort(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  // ================= SORT =================
  function handleSort(option) {
    setSelectedSort(option);
    setOpenSort(false);

    onSortChange?.(option);
  }

  // ================= CATEGORY FILTER =================
  function handleFilter(filter) {
    setActiveFilter(filter);

    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (filter === "All") {
      params.delete("category");
    } else {
      params.set("category", filter);
    }

    router.replace(
      `/shop${
        params.toString()
          ? `?${params.toString()}`
          : ""
      }`,
      {
        scroll: false,
      }
    );

    onFilterChange?.({
      category: filter,
      price: selectedPrice,
    });
  }

  // ================= PRICE FILTER =================
  function handlePrice(price) {
    setSelectedPrice(price);

    onFilterChange?.({
      category: activeFilter,
      price,
    });
  }

  // ================= VIEW =================
  function handleView(view) {
    setGridView(view);

    onViewChange?.(view);
  }

  return (
    <>
      <div
        className="
          sticky top-0 z-30
          w-full
          overflow-x-hidden
          border-b border-zinc-200
          bg-white/95
          backdrop-blur-xl
        "
      >
        {/* ================= CONTAINER ================= */}
        <div
          className="
            w-full
            overflow-x-hidden
            px-3 sm:px-5 lg:px-8
            py-3
          "
        >
          {/* ================= TOP ================= */}
          <div
            className="
              flex flex-col
              gap-4
              lg:flex-row
              lg:items-center
              lg:justify-between
              w-full
            "
          >
            {/* LEFT */}
            <div className="min-w-0 flex-1">
              <h2
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-bold
                  text-zinc-900
                  truncate
                "
              >
                Explore Products
              </h2>

              <p
                className="
                  text-xs
                  sm:text-sm
                  text-zinc-500
                  mt-1
                  truncate
                "
              >
                Discover premium products with best deals
              </p>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-auto">
              <div
                className="
                  flex
                  items-center
                  gap-2
                  w-full
                  overflow-hidden
                "
              >
                {/* SORT */}
                <div
                  className="
                    relative
                    flex-1
                    min-w-0
                  "
                  ref={dropdownRef}
                >
                  <button
                    onClick={() =>
                      setOpenSort(!openSort)
                    }
                    className="
                      w-full
                      min-w-0
                      flex
                      items-center
                      justify-between
                      gap-2
                      rounded-xl
                      border border-zinc-200
                      bg-white
                      px-3
                      py-2.5
                      text-xs sm:text-sm
                      font-medium
                      shadow-sm
                      hover:bg-zinc-50
                      transition-all
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        min-w-0
                      "
                    >
                      <ArrowUpDown className="h-4 w-4 text-zinc-500 shrink-0" />

                      <span className="truncate">
                        {selectedSort}
                      </span>
                    </div>

                    <ChevronDown className="h-4 w-4 shrink-0" />
                  </button>

                  <AnimatePresence>
                    {openSort && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                          absolute
                          left-0
                          top-full
                          mt-2
                          w-full
                          rounded-2xl
                          border border-zinc-200
                          bg-white
                          p-2
                          shadow-2xl
                          z-50
                        "
                      >
                        {sortOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() =>
                              handleSort(option)
                            }
                            className={`
                              w-full
                              text-left
                              px-4
                              py-3
                              rounded-xl
                              text-sm
                              transition-all
                              truncate
                              ${
                                selectedSort === option
                                  ? "bg-black text-white"
                                  : "hover:bg-zinc-100 text-zinc-700"
                              }
                            `}
                          >
                            {option}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* VIEW TOGGLE */}
                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    border border-zinc-200
                    rounded-xl
                    p-1
                    bg-white
                    shadow-sm
                  "
                >
                  <button
                    onClick={() =>
                      handleView("grid")
                    }
                    className={`p-2 rounded-lg transition-all ${
                      gridView === "grid"
                        ? "bg-black text-white"
                        : "text-zinc-500 hover:bg-zinc-100"
                    }`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() =>
                      handleView("compact")
                    }
                    className={`p-2 rounded-lg transition-all ${
                      gridView === "compact"
                        ? "bg-black text-white"
                        : "text-zinc-500 hover:bg-zinc-100"
                    }`}
                  >
                    <Grid2X2 className="h-4 w-4" />
                  </button>
                </div>

                {/* FILTER BUTTON */}
                <button
                  onClick={() =>
                    setOpenMore(true)
                  }
                  className="
                    shrink-0
                    rounded-xl
                    border border-zinc-200
                    bg-white
                    px-3 sm:px-4
                    py-2.5
                    text-xs sm:text-sm
                    font-medium
                    shadow-sm
                    whitespace-nowrap
                    hover:bg-zinc-50
                    transition-all
                  "
                >
                  Filters
                </button>
              </div>
            </div>
          </div>

          {/* ================= CATEGORY CHIPS ================= */}
          <div className="mt-4 w-full overflow-hidden">
            <div
              className="
                flex
                gap-2
                overflow-x-auto
                scrollbar-hide
                pb-1
                w-full

                [-ms-overflow-style:none]
                [scrollbar-width:none]

                [&::-webkit-scrollbar]:hidden
              "
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() =>
                    handleFilter(f)
                  }
                  className={`
                    shrink-0
                    whitespace-nowrap
                    px-4
                    py-2
                    rounded-full
                    text-xs sm:text-sm
                    font-medium
                    border
                    transition-all
                    duration-300
                    ${
                      activeFilter === f
                        ? "bg-black text-white border-black"
                        : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                    }
                  `}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= FILTER PANEL ================= */}
      <AnimatePresence>
        {openMore && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setOpenMore(false)
              }
              className="fixed inset-0 bg-black/40 z-40"
            />

            {/* PANEL */}
            <motion.div
              initial={{
                y: "100%",
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: "100%",
              }}
              transition={{
                type: "spring",
                damping: 24,
              }}
              className="
                fixed
                bottom-0
                right-0
                z-50

                h-[85vh]
                w-full

                rounded-t-[28px]
                bg-white
                shadow-2xl

                overflow-y-auto
                overflow-x-hidden

                p-4 sm:p-5

                md:top-0
                md:h-full
                md:w-[420px]
                md:rounded-none
              "
            >
              {/* MOBILE HANDLE */}
              <div className="w-14 h-1.5 rounded-full bg-zinc-300 mx-auto mb-6 md:hidden" />

              {/* HEADER */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold">
                  Filters
                </h3>

                <button
                  onClick={() =>
                    setOpenMore(false)
                  }
                  className="
                    p-2
                    rounded-full
                    hover:bg-zinc-100
                    transition-all
                    shrink-0
                  "
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* PRICE */}
              <div>
                <h4 className="font-semibold mb-4 text-sm">
                  Price Range
                </h4>

                <div className="flex flex-col gap-3">
                  {priceFilters.map((p) => (
                    <button
                      key={p}
                      onClick={() =>
                        handlePrice(p)
                      }
                      className={`
                        w-full
                        text-left
                        px-4
                        py-3
                        rounded-2xl
                        border
                        text-sm
                        transition-all
                        break-words
                        ${
                          selectedPrice === p
                            ? "bg-black text-white border-black"
                            : "hover:bg-zinc-100 border-zinc-200"
                        }
                      `}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* APPLY BUTTON */}
              <div className="sticky bottom-0 bg-white pt-6 pb-2 md:hidden">
                <button
                  onClick={() =>
                    setOpenMore(false)
                  }
                  className="
                    w-full
                    bg-black
                    text-white
                    py-3.5
                    rounded-2xl
                    font-medium
                    text-sm
                  "
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}