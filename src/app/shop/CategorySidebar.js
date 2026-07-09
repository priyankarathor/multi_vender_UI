"use client";

import { useState } from "react";
import { ChevronLeft, ChevronDown, Star } from "lucide-react";
import Link from "next/link";

// ===== CATEGORY TREE =====
// apni categories isi structure me daal do - jitne levels chahiye utne nest kar sakte ho
// leaf level pe array of strings honi chahiye (final clickable items)
const categoryTree = {
  Electronics: {
    "Mobiles & Accessories": {
      "Mobile Accessories": [
        "Adhesive Card Holders",
        "Anti Radiation Stickers & Chips",
        "Automobile Accessories",
        "Cables & Adapters",
        "Camera Privacy Covers",
        "Cases & Covers",
        "Chargers",
        "Décor",
        "Finders",
        "Gaming Accessories",
        "Grips",
        "Lanyards & Wrist Straps",
        "Maintenance, Upkeep & Repairs",
        "MicroSD Cards",
        "Mounts",
        "Photo & Video Accessories",
        "Screen Expanders & Magnifiers",
      ],
      "Mobile Phones": [
        "Smartphones",
        "Basic Phones",
        "Refurbished Phones",
      ],
    },
    Laptops: ["Gaming Laptops", "Ultrabooks", "2 in 1 Laptops"],
    Audio: ["Headphones", "Bluetooth Speakers", "Soundbars"],
  },
  Fashion: {
    Men: ["T-Shirts", "Shirts", "Jeans", "Footwear"],
    Women: ["Kurtis", "Dresses", "Sarees", "Footwear"],
  },
  "Home & Living": {
    Furniture: ["Sofas", "Beds", "Tables"],
    Decor: ["Wall Art", "Lighting", "Rugs"],
  },
};

const sidebarCategoryTree = {
  Electronics: {
    Accessories: [
      "Blank Media Cases & Wallets",
      "Camera & Photo Accessories",
      "Car & Vehicle Electronics Accessories",
      "Computer Accessories",
      "Memory Cards",
      "Mobile Accessories",
      "Navigation Accessories",
      "Portable Audio & Video Accessories",
      "Radio Communication Accessories",
      "Tablet Accessories",
      "Telephone Accessories",
    ],
    "Cameras & Photography": [],
    "Car & Vehicle Electronics": [],
    "Computers & Accessories": [],
    "GPS & Accessories": [],
    "Home Audio": [],
    "Home Theater, TV & Video": [],
    "Mobiles & Accessories": [
      "Smartphones",
      "Basic Phones",
      "Mobile Cases",
      "Chargers",
      "Screen Protectors",
      "Power Banks",
    ],
    "Portable Media Players": [],
    Tablets: [],
    "Telephones & Accessories": [],
  },
  Fashion: {
    Men: ["T-Shirts", "Shirts", "Jeans", "Footwear"],
    Women: ["Kurtis", "Dresses", "Sarees", "Footwear"],
  },
  "Home & Living": {
    Furniture: ["Sofas", "Beds", "Tables"],
    Decor: ["Wall Art", "Lighting", "Rugs"],
  },
};

const DEFAULT_CATEGORY_PATH = ["Electronics"];

export default function CategorySidebar({ onSelectCategory }) {
  // navigation path through the category tree, e.g. ["Electronics", "Mobiles & Accessories"]
  const [path, setPath] = useState(DEFAULT_CATEGORY_PATH);

  const [openSections, setOpenSections] = useState({
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

  // resolve current node based on path
  const currentNode = path.reduce(
    (node, key) => (node && typeof node === "object" ? node[key] : null),
    sidebarCategoryTree
  );

  const isLeafList = Array.isArray(currentNode);
  const childKeys = isLeafList
    ? []
    : currentNode
      ? Object.keys(currentNode)
      : Object.keys(sidebarCategoryTree);
  const breadcrumbs = path.slice(0, -1);
  const currentTitle = path[path.length - 1];

  const goToLevel = (index) => {
    setPath((prev) => prev.slice(0, index + 1));
  };

  const enterChild = (key) => {
    setPath((prev) => [...prev, key]);
  };

  const handleLeafClick = (item) => {
    onSelectCategory?.(item);
  };

  return (
    <aside className="hidden lg:block w-[270px] shrink-0">
      <div className="bg-white border border-zinc-200 rounded-md overflow-hidden sticky top-30 h-[calc(100vh-100px)] overflow-y-auto">

        {/* ===== CATEGORY TREE NAV ===== */}
        <div className="px-4 py-4 border-b">
          <h2 className="text-base font-bold text-black mb-3">Category</h2>

          {/* BREADCRUMB TRAIL */}
          <div className="space-y-1 mb-2">
            {breadcrumbs.map((key, i) => (
              <button
                key={key}
                onClick={() => goToLevel(i)}
                className="flex items-center text-sm text-black hover:text-[#C7511F] hover:underline"
                style={{ paddingLeft: `${i * 10}px` }}
              >
                <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
                {key}
              </button>
            ))}
          </div>

          {/* CURRENT LEVEL TITLE (when inside a category) */}
          {path.length > 0 && (
            <p
              className="text-sm font-bold text-black mb-2"
              style={{ paddingLeft: `${breadcrumbs.length * 12 + 12}px` }}
            >
              {currentTitle}
            </p>
          )}

          {/* CHILDREN / LEAF ITEMS */}
          <div className="space-y-1.5" style={{ paddingLeft: `${breadcrumbs.length * 12 + 24}px` }}>
            {isLeafList
              ? currentNode.map((item) => (
                  <Link
                    key={item}
                    href={`/shop?category=${encodeURIComponent(item)}`}
                    onClick={() => handleLeafClick(item)}
                    className="block text-sm leading-5 text-black hover:text-[#C7511F] hover:underline"
                  >
                    {item}
                  </Link>
                ))
              : childKeys.map((key) => {
                  const child = currentNode ? currentNode[key] : sidebarCategoryTree[key];
                  const hasChildren = !Array.isArray(child) || child.length > 0;

                  if (!hasChildren) {
                    return (
                      <Link
                        key={key}
                        href={`/shop?category=${encodeURIComponent(key)}`}
                        onClick={() => handleLeafClick(key)}
                        className="block text-sm leading-5 text-black hover:text-[#C7511F] hover:underline"
                      >
                        {key}
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={key}
                      onClick={() => enterChild(key)}
                      className="block w-full text-left text-sm leading-5 text-black hover:text-[#C7511F] hover:underline"
                    >
                      {key}
                    </button>
                  );
                })}
          </div>
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
