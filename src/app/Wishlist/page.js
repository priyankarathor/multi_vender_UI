"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import PageSkeleton from "../component/PageSkeleton";
import { getCategories } from "../apis/category/category";

const getApiList = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.categories)) return payload.categories;
  if (Array.isArray(payload?.data?.categories)) return payload.data.categories;
  return [];
};

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistReady, setWishlistReady] = useState(false);
  const [categoryNamesById, setCategoryNamesById] = useState({});

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedItems = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
      setWishlistItems(Array.isArray(savedItems) ? savedItems : []);
      setWishlistReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!wishlistReady) return;

    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    window.dispatchEvent(new Event("wishlistUpdated"));
  }, [wishlistItems, wishlistReady]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await getCategories();
        const namesById = getApiList(res.data).reduce((map, category) => {
          if (typeof category === "string") return map;

          const id = category?._id || category?.id;
          const name = category?.name || category?.category || category?.title;

          if (id && name) map[id] = name;
          return map;
        }, {});

        setCategoryNamesById(namesById);
      } catch (error) {
        console.error("Failed to load wishlist categories", error);
      }
    };

    loadCategories();
  }, []);

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getCategoryName = (item) =>
    categoryNamesById[item.categoryId] ||
    categoryNamesById[item.category] ||
    item.categoryName ||
    item.category ||
    "Product";

  if (!wishlistReady) {
    return <PageSkeleton type="grid" />;
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
              <Heart className="h-5 w-5 text-[#FF9900]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Wishlist</h1>
              <p className="text-sm text-gray-500">
                {wishlistItems.length} saved product
                {wishlistItems.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
            <p className="text-gray-700 font-semibold">Your wishlist is empty</p>
            <Link
              href="/shop"
              className="mt-4 inline-flex h-10 px-5 rounded-xl bg-black text-white text-sm font-semibold items-center justify-center"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition"
              >
                <Link href={`/ProductDetailpage/${item.id}`} className="block">
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                        No image available
                      </div>
                    )}
                    <span className="absolute top-2 left-2 text-[10px] px-2 py-1 bg-black text-white rounded-full">
                      {getCategoryName(item)}
                    </span>
                  </div>
                </Link>

                <div className="p-3">
                  <h2 className="text-sm font-semibold line-clamp-2 min-h-[40px]">
                    {item.name}
                  </h2>
                  <p className="font-bold mt-2">
                    Rs. {Number(item.price || 0).toLocaleString("en-IN")}
                  </p>

                  <div className="mt-3 flex gap-2">
                    <Link
                      href={`/ProductDetailpage/${item.id}`}
                      className="flex-1 h-9 rounded-xl bg-black text-white text-xs flex items-center justify-center gap-1.5 hover:bg-zinc-800 transition"
                    >
                      <ShoppingCart size={14} />
                      View
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="w-10 h-9 rounded-xl border border-red-100 text-red-500 hover:bg-red-50 flex items-center justify-center transition"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
