"use client";

import Link from "next/link";
import { Eye, Star } from "lucide-react";

// ================= PRODUCTS =================
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

// ================= PRODUCT GRID =================
export default function ProductGrid({ filters }) {
  const filtered = ALL_PRODUCTS.filter((p) => {
    const matchCategory =
      filters.category === "All" || p.category === filters.category;

    return matchCategory;
  });

  return (
    <div className="w-full">
      {/* GRID */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          xl:grid-cols-5
          gap-3
          sm:gap-4
          md:gap-5
        "
      >
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/ProductDetailpage/${product.id}`}
            className="group block h-full"
          >
            <div
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                overflow-hidden
                transition-all
                duration-300
                hover:shadow-xl
                hover:-translate-y-1
                h-full
                flex
                flex-col
              "
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  bg-gray-100
                  overflow-hidden
                  aspect-[4/4]
                "
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                    No image available
                  </div>
                )}

                {/* CATEGORY */}
                <span
                  className="
                    absolute
                    top-2
                    left-2
                    bg-black/80
                    text-white
                    text-[10px]
                    sm:text-xs
                    px-2
                    py-1
                    rounded-full
                    backdrop-blur-sm
                    font-medium
                  "
                >
                  {product.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-3 sm:p-4">
                {/* PRODUCT NAME */}
                <h3
                  className="
                    text-sm
                    sm:text-base
                    font-semibold
                    text-gray-900
                    line-clamp-2
                    leading-snug
                    min-h-[40px]
                    sm:min-h-[48px]
                  "
                >
                  {product.name}
                </h3>

                {/* RATING */}
                <div className="flex items-center gap-1 mt-2">
                  <Star
                    size={14}
                    fill="currentColor"
                    className="text-yellow-500"
                  />

                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {product.rating}
                  </span>
                </div>

                {/* PRICE */}
                <div className="mt-2">
                  <span
                    className="
                      text-base
                      sm:text-lg
                      md:text-xl
                      font-bold
                      text-black
                    "
                  >
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>

                {/* BUTTON */}
                <button
                  className="
                    mt-4
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-black
                    text-white
                    rounded-xl
                    py-2.5
                    text-xs
                    sm:text-sm
                    font-medium
                    hover:bg-gray-800
                    transition
                  "
                >
                  <Eye size={16} />
                  View
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
