"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import PageSkeleton from "../component/PageSkeleton";
import { getCategories } from "../apis/category/category";
import {
  getWishlistByCidOrDevice,
  deleteWishlistItem,
  updateWishlistItem,
} from "../apis/wishlist/wishlist";
import { getLoggedInCid } from "../apis/customer/customer";

const getApiList = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.categories)) return payload.categories;
  if (Array.isArray(payload?.data?.categories)) return payload.data.categories;
  return [];
};

const getWishlistProductId = (item) =>
  item?.pid && typeof item.pid === "object"
    ? item.pid._id
    : item?.pid || item?.productId || item?.id || null;

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistReady, setWishlistReady] = useState(false);
  const [categoryNamesById, setCategoryNamesById] = useState({});

  const fetchWishlist = async () => {
    try {
      const res = await getWishlistByCidOrDevice({ cid: getLoggedInCid() });
      const items = getApiList(res.data);
      setWishlistItems(items);
    } catch (error) {
      // Backend "no wishlist found for this device id" ke case mein
      // 404 bhejta hai (ideally empty array bhejna chahiye, lekin
      // backend humare control mein nahi hai). Isliye 404 ko
      // "wishlist khaali hai" treat karte hain, real error nahi.
      if (error?.response?.status === 404) {
        setWishlistItems([]);
      } else {
        console.error("Failed to load wishlist", error);
        setWishlistItems([]);
      }
    } finally {
      setWishlistReady(true);
    }
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      fetchWishlist();
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

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

  const removeFromWishlist = async (id) => {
    const removedItem = wishlistItems.find((item) => item._id === id);
    const removedProductId = getWishlistProductId(removedItem);

    setWishlistItems((prev) => prev.filter((item) => item._id !== id));

    try {
      await deleteWishlistItem(id);
      const savedItems = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
      const nextItems = Array.isArray(savedItems)
        ? removedProductId
          ? savedItems.filter(
              (item) => String(getWishlistProductId(item)) !== String(removedProductId)
            )
          : savedItems
        : [];

      localStorage.setItem("wishlistItems", JSON.stringify(nextItems));
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (error) {
      console.error("Failed to remove wishlist item", error);
      fetchWishlist();
    }
  };

  // PUT /api/wishlist/update/:id -- qty badhana/ghatana
  const changeQty = async (item, delta) => {
    const nextQty = Math.max(1, (item.qty || 1) + delta);
    if (nextQty === item.qty) return;

    // optimistic update
    setWishlistItems((prev) =>
      prev.map((w) => (w._id === item._id ? { ...w, qty: nextQty } : w))
    );

    try {
      await updateWishlistItem(item._id, { qty: nextQty });
    } catch (error) {
      console.error("Failed to update wishlist qty", error);
      // fail hone par list dobara fetch karke sahi qty wapas le aao
      fetchWishlist();
    }
  };

  const getProduct = (item) =>
    item.pid && typeof item.pid === "object" ? item.pid : null;

  const getName = (item) =>
    getProduct(item)?.productName || getProduct(item)?.itemName || "Untitled Product";

  const getImage = (item) =>
    item.variantId?.images?.[0] ||
    getProduct(item)?.images?.[0] ||
    "https://via.placeholder.com/300";

  const getPrice = (item) =>
    item.variantId?.offer?.salePrice ||
    item.variantId?.offer?.sellingPrice ||
    getProduct(item)?.price ||
    0;

  const getCategoryName = (item) => {
    const categoryId =
      getProduct(item)?.category || getProduct(item)?.categoryId;

    return (
      categoryNamesById[categoryId] ||
      getProduct(item)?.categoryName ||
      "Product"
    );
  };

  const getProductLink = (item) => {
    const productId = getProduct(item)?._id || item.pid;
    return productId ? `/ProductDetailpage/${productId}` : "#";
  };

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
                key={item._id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition"
              >
                <Link href={getProductLink(item)} className="block">
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={getImage(item)}
                      alt={getName(item)}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 text-[10px] px-2 py-1 bg-black text-white rounded-full">
                      {getCategoryName(item)}
                    </span>
                  </div>
                </Link>

                <div className="p-3">
                  <h2 className="text-sm font-semibold line-clamp-2 min-h-[40px]">
                    {getName(item)}
                  </h2>
                  <p className="font-bold mt-2">
                    Rs. {Number(getPrice(item)).toLocaleString("en-IN")}
                  </p>

                  <div className="mt-2 flex items-center gap-2 w-fit rounded-lg border border-gray-200 px-2 py-1">
                    <button
                      onClick={() => changeQty(item, -1)}
                      className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-black"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="text-xs font-semibold w-5 text-center">
                      {item.qty || 1}
                    </span>
                    <button
                      onClick={() => changeQty(item, 1)}
                      className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-black"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <Link
                      href={getProductLink(item)}
                      className="flex-1 h-9 rounded-xl bg-black text-white text-xs flex items-center justify-center gap-1.5 hover:bg-zinc-800 transition"
                    >
                      <ShoppingCart size={14} />
                      View
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item._id)}
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
