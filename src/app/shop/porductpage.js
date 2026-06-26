"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Star,
  Heart,
  Eye,
  SlidersHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Grid2X2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getCategories } from "../apis/category/category";
import { fetchProducts } from "../apis/products/products";
import { ProductGridSkeleton } from "../component/PageSkeleton";

/* ================= PRODUCTS (same as yours) ================= */
const ALL_PRODUCTS = [
  // ================= ELECTRONICS =================
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Electronics",
    price: 149999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    category: "Electronics",
    price: 114999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sony Headphones",
    category: "Electronics",
    price: 19999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= FASHION =================
  {
    id: 4,
    name: "Nike Air Force 1",
    category: "Fashion",
    price: 7999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Oversized Hoodie",
    category: "Fashion",
    price: 2999,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Levi's Denim Jeans",
    category: "Fashion",
    price: 3999,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= MOBILES =================
  {
    id: 7,
    name: "Samsung Galaxy S24",
    category: "Mobiles",
    price: 79999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "OnePlus 12",
    category: "Mobiles",
    price: 64999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "iQOO Neo 9 Pro",
    category: "Mobiles",
    price: 35999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= BEAUTY =================
  {
    id: 10,
    name: "Luxury Perfume",
    category: "Beauty",
    price: 4999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Makeup Kit",
    category: "Beauty",
    price: 2499,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Skin Care Set",
    category: "Beauty",
    price: 1999,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= FURNITURE =================
  {
    id: 13,
    name: "Modern Sofa",
    category: "Furniture",
    price: 25999,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 14,
    name: "Wooden Dining Table",
    category: "Furniture",
    price: 19999,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 15,
    name: "Premium Carpet",
    category: "Furniture",
    price: 4999,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= GAMING =================
  {
    id: 16,
    name: "PlayStation 5",
    category: "Gaming",
    price: 54999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 17,
    name: "Gaming Keyboard",
    category: "Gaming",
    price: 4999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 18,
    name: "RGB Gaming Mouse",
    category: "Gaming",
    price: 2499,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= ACCESSORIES =================
  {
    id: 19,
    name: "Apple Watch",
    category: "Accessories",
    price: 34999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 20,
    name: "Leather Wallet",
    category: "Accessories",
    price: 1499,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 21,
    name: "Stylish Sunglasses",
    category: "Accessories",
    price: 1999,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= SPORTS =================
  {
    id: 22,
    name: "Football",
    category: "Sports",
    price: 999,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 23,
    name: "Cricket Bat",
    category: "Sports",
    price: 3499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 24,
    name: "Gym Dumbbells",
    category: "Sports",
    price: 4999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= BOOKS =================
  {
    id: 25,
    name: "Atomic Habits",
    category: "Books",
    price: 599,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 26,
    name: "Rich Dad Poor Dad",
    category: "Books",
    price: 499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 27,
    name: "Think and Grow Rich",
    category: "Books",
    price: 399,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= APPLIANCES =================
  {
    id: 28,
    name: "LG Refrigerator",
    category: "Appliances",
    price: 45999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 29,
    name: "Washing Machine",
    category: "Appliances",
    price: 28999,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 30,
    name: "Microwave Oven",
    category: "Appliances",
    price: 11999,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=1200&auto=format&fit=crop",
  },

  // ================= GROCERY =================
  {
    id: 31,
    name: "Fresh Vegetables Pack",
    category: "Grocery",
    price: 499,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 32,
    name: "Organic Fruits Basket",
    category: "Grocery",
    price: 799,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 33,
    name: "Healthy Snacks Combo",
    category: "Grocery",
    price: 999,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop",
  },
];

const priceRanges = [
  "All",
  "Under ₹5000",
  "₹5000 - ₹20000",
  "₹20000 - ₹100000",
  "Above ₹100000",
];

const PRODUCTS_PER_PAGE = 20;

/* ================= PAGE ================= */
export default function ShopPage() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "All";

  const [products, setProducts] = useState(ALL_PRODUCTS);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState("");
  const [categories, setCategories] = useState(["All"]);
  const [categoryNamesById, setCategoryNamesById] = useState({});
  const [wishlistItems, setWishlistItems] = useState(() => {
    if (typeof window === "undefined") return [];

    const savedItems = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
    return Array.isArray(savedItems) ? savedItems : [];
  });
  const [filters, setFilters] = useState({
    category: "All",
    price: "All",
    rating: 0,
  });

  const [openFilter, setOpenFilter] = useState(false);
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCurrentPage(1);
      setFilters((prev) => ({
        ...prev,
        category: categoryFromUrl,
      }));
    }, 0);

    return () => window.clearTimeout(timer);
  }, [categoryFromUrl]);

  useEffect(() => {
    let active = true;

    const loadProducts = async () => {
      try {
        setProductsLoading(true);
        const apiProducts = await fetchProducts();
        if (!active) return;

        if (apiProducts.length > 0) {
          setProducts(apiProducts);
          setProductsError("");
        }
      } catch (error) {
        if (!active) return;
        setProductsError("Live products could not load. Showing saved products.");
      } finally {
        if (active) setProductsLoading(false);
      }
    };

    loadProducts();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await getCategories();
        const rawCategories =
          res.data?.categories || res.data?.data || res.data || [];

        const namesById = rawCategories.reduce((map, category) => {
          if (typeof category === "string") return map;

          const id = category?._id || category?.id;
          const name = category?.name || category?.category || category?.title;

          if (id && name) {
            map[id] = name;
          }

          return map;
        }, {});

        const apiCategories = rawCategories
          .map((category) =>
            typeof category === "string"
              ? category
              : category?.name || category?.category || category?.title
          )
          .filter(Boolean);

        setCategoryNamesById(namesById);
        setCategories(["All", ...new Set(apiCategories)]);
      } catch (error) {
        setCategories(["All"]);
      }
    };

    loadCategories();
  }, []);

  const getCategoryName = useCallback(
    (category) => categoryNamesById[category] || category,
    [categoryNamesById]
  );

  /* ================= FILTER ================= */
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const productCategory = getCategoryName(p.category);
      const cat =
        filters.category === "All" ||
        p.category === filters.category ||
        productCategory === filters.category;

      const price =
        filters.price === "All" ||
        (filters.price === "Under ₹5000" && p.price < 5000) ||
        (filters.price === "₹5000 - ₹20000" &&
          p.price >= 5000 &&
          p.price <= 20000) ||
        (filters.price === "₹20000 - ₹100000" &&
          p.price > 20000 &&
          p.price <= 100000) ||
        (filters.price === "Above ₹100000" && p.price > 100000);

      const rating = p.rating >= filters.rating;

      return cat && price && rating;
    });
  }, [filters, getCategoryName, products]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PRODUCTS_PER_PAGE));
  const activePage = Math.min(currentPage, totalPages);
  const paginatedProducts = useMemo(() => {
    const start = (activePage - 1) * PRODUCTS_PER_PAGE;
    return filtered.slice(start, start + PRODUCTS_PER_PAGE);
  }, [activePage, filtered]);
  const pageStart = filtered.length === 0 ? 0 : (activePage - 1) * PRODUCTS_PER_PAGE + 1;
  const pageEnd = Math.min(activePage * PRODUCTS_PER_PAGE, filtered.length);
  const visiblePages = useMemo(() => {
    const start = Math.max(1, activePage - 2);
    const end = Math.min(totalPages, start + 4);
    const adjustedStart = Math.max(1, end - 4);

    return Array.from({ length: end - adjustedStart + 1 }, (_, index) => adjustedStart + index);
  }, [activePage, totalPages]);

  useEffect(() => {
    document.body.style.overflow = openFilter ? "hidden" : "";
  }, [openFilter]);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    window.dispatchEvent(new Event("wishlistUpdated"));
  }, [wishlistItems]);

  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          category: getCategoryName(product.category),
          categoryId: product.category,
          price: product.price,
          rating: product.rating,
          image: product.image,
        },
      ];
    });
  };

  const updateFilters = (updater) => {
    setCurrentPage(1);
    setFilters(updater);
  };

  const goToPage = (page) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const rememberProduct = (product) => {
    sessionStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  return (
    <div className="bg-zinc-50 min-h-screen flex">

      {/* ================= SIDEBAR ================= */}
      <aside className="hidden lg:block w-[300px] p-4">
        <div className="sticky top-40 bg-white/70 backdrop-blur-xl border rounded-2xl p-4 shadow-sm">

          <h2 className="text-lg font-bold mb-4">Filters</h2>

          {/* CATEGORY CHIPS */}
          <div className="mb-5">
            <p className="text-xs text-zinc-500 mb-2">Category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() =>
                    updateFilters((p) => ({ ...p, category: c }))
                  }
                  className={`px-3 py-1 rounded-full text-xs border transition
                    ${
                      filters.category === c
                        ? "bg-black text-white"
                        : "bg-white hover:bg-zinc-100"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* PRICE */}
          <div className="mb-5">
            <p className="text-xs text-zinc-500 mb-2">Price</p>
            <div className="space-y-2">
              {priceRanges.map((p) => (
                <button
                  key={p}
                  onClick={() =>
                    updateFilters((prev) => ({ ...prev, price: p }))
                  }
                  className={`w-full text-left text-sm px-3 py-2 rounded-lg transition
                    ${
                      filters.price === p
                        ? "bg-black text-white"
                        : "hover:bg-zinc-100"
                    }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* RATING */}
          <div>
            <p className="text-xs text-zinc-500 mb-2">Rating</p>
            {[4, 3, 2].map((r) => (
              <button
                key={r}
                onClick={() =>
                  updateFilters((p) => ({ ...p, rating: r }))
                }
                className="flex items-center gap-1 text-sm mb-2"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < r ? "fill-yellow-400 text-yellow-400" : "text-zinc-300"
                    }
                  />
                ))}
                & up
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1">

        {/* TOP BAR */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="font-bold text-lg">Shop</h1>
            <p className="text-xs text-zinc-500">
              {productsLoading
                ? "Loading products..."
                : `${pageStart}-${pageEnd} of ${filtered.length} products`}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpenFilter(true)}
              className="lg:hidden flex items-center gap-2 bg-black text-white px-3 py-2 rounded-xl text-xs"
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>

            <button onClick={() => setView("grid")}>
              <LayoutGrid size={18} />
            </button>
            <button onClick={() => setView("compact")}>
              <Grid2X2 size={18} />
            </button>
          </div>
        </div>

        {productsError && (
          <div className="mx-4 mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {productsError}
          </div>
        )}

        {/* PRODUCTS GRID */}
        {productsLoading ? (
          <ProductGridSkeleton count={8} />
        ) : (
          <div
            className={`p-4 grid gap-5 ${
              view === "grid"
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-2 md:grid-cols-3"
            }`}
          >
            {paginatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/ProductDetailpage/${p.id}`}
                onClick={() => rememberProduct(p)}
              >
                <div className="group bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition duration-300">

                  {/* IMAGE */}
                  <div className="relative aspect-square overflow-hidden">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100 text-xs text-gray-400">
                        No image available
                      </div>
                    )}

                    <span className="absolute top-2 left-2 text-[10px] px-2 py-1 bg-black text-white rounded-full">
                      {getCategoryName(p.category)}
                    </span>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        toggleWishlist(p);
                      }}
                      className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-[#FF9900] hover:text-black transition"
                      aria-label="Add to wishlist"
                    >
                      <Heart
                        size={15}
                        className={
                          wishlistItems.some((item) => item.id === p.id)
                            ? "fill-[#FF9900] text-[#FF9900]"
                            : "text-gray-700"
                        }
                      />
                    </button>
                  </div>

                  {/* CONTENT */}
                  <div className="p-3">
                    <h3 className="text-sm font-semibold line-clamp-2">
                      {p.name}
                    </h3>

                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={
                            i < Math.floor(p.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-zinc-300"
                          }
                        />
                      ))}
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <p className="font-bold">
                        Rs.{Number(p.price).toLocaleString()}
                      </p>
                      {p.mrp > p.price && (
                        <p className="text-xs text-zinc-500 line-through">
                          Rs.{Number(p.mrp).toLocaleString()}
                        </p>
                      )}
                    </div>

                    <button className="mt-3 w-full bg-black text-white py-2 rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-zinc-800">
                      <Eye size={14} />
                      View
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!productsLoading && totalPages > 1 && (
          <div className="mx-4 mb-8 mt-2 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm sm:flex-row">
            <p className="text-sm font-medium text-zinc-600">
              Showing <span className="text-black">{pageStart}-{pageEnd}</span> of{" "}
              <span className="text-black">{filtered.length}</span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(activePage - 1)}
                disabled={activePage === 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-zinc-700 transition hover:border-[#FF9900] hover:text-[#FF9900] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft size={18} />
              </button>

              {visiblePages[0] > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => goToPage(1)}
                    className="h-10 min-w-10 rounded-full border border-gray-200 bg-white px-3 text-sm font-semibold text-zinc-700 transition hover:border-[#FF9900] hover:text-[#FF9900]"
                  >
                    1
                  </button>
                  <span className="px-1 text-sm font-semibold text-zinc-400">...</span>
                </>
              )}

              {visiblePages.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`h-10 min-w-10 rounded-full px-3 text-sm font-bold transition ${
                    activePage === page
                      ? "bg-[#FF9900] text-black shadow-md shadow-orange-200"
                      : "border border-gray-200 bg-white text-zinc-700 hover:border-[#FF9900] hover:text-[#FF9900]"
                  }`}
                >
                  {page}
                </button>
              ))}

              {visiblePages[visiblePages.length - 1] < totalPages && (
                <>
                  <span className="px-1 text-sm font-semibold text-zinc-400">...</span>
                  <button
                    type="button"
                    onClick={() => goToPage(totalPages)}
                    className="h-10 min-w-10 rounded-full border border-gray-200 bg-white px-3 text-sm font-semibold text-zinc-700 transition hover:border-[#FF9900] hover:text-[#FF9900]"
                  >
                    {totalPages}
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={() => goToPage(activePage + 1)}
                disabled={activePage === totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-zinc-700 transition hover:border-[#FF9900] hover:text-[#FF9900] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ================= MOBILE FILTER ================= */}
      <AnimatePresence>
        {openFilter && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setOpenFilter(false)}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl p-4 h-[75vh] overflow-y-auto"
            >
              <div className="flex justify-between mb-4">
                <h2 className="font-bold">Filters</h2>
                <X onClick={() => setOpenFilter(false)} />
              </div>

              <div className="space-y-5">

                {/* CATEGORY */}
                <div>
                  <p className="text-xs text-zinc-500 mb-2">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c}
                        onClick={() =>
                          updateFilters((p) => ({ ...p, category: c }))
                        }
                        className={`px-3 py-1 border rounded-full text-xs transition ${
                          filters.category === c
                            ? "bg-black text-white border-black"
                            : "bg-white text-zinc-700 border-zinc-300"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* PRICE */}
                <div>
                  <p className="text-xs text-zinc-500 mb-2">Price</p>
                  {priceRanges.map((p) => (
                    <button
                      key={p}
                      onClick={() =>
                        updateFilters((prev) => ({ ...prev, price: p }))
                      }
                      className={`block w-full text-left p-2 text-sm rounded-lg transition ${
                        filters.price === p
                          ? "bg-black text-white"
                          : "text-zinc-700 hover:bg-zinc-100"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
