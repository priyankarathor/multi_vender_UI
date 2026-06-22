"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../apis/login/login";
import {
  Heart,
  Minus,
  Plus,
  Trash2,
  ChevronRight,
  Star,
  ShieldCheck,
  Truck,
  Tag,
  User,
  X,
} from "lucide-react";

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window === "undefined") return [];

    const savedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    return Array.isArray(savedItems) ? savedItems : [];
  });
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const recommendedProducts = [
    {
      id: 1,
      title: "Apple AirPods Pro 2nd Gen",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1000",
      price: "₹19,999",
      oldPrice: "₹24,999",
    },
    {
      id: 2,
      title: "Samsung Galaxy Watch 6",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1000",
      price: "₹29,999",
      oldPrice: "₹35,999",
    },
    {
      id: 3,
      title: "Sony Bluetooth Speaker",
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=1000",
      price: "₹8,999",
      oldPrice: "₹11,999",
    },
    {
      id: 4,
      title: "Apple MacBook Air M3",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1000",
      price: "₹1,09,999",
      oldPrice: "₹1,24,999",
    },
    {
      id: 5,
      title: "Premium Wireless Mouse",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=1000",
      price: "₹2,999",
      oldPrice: "₹4,999",
    },
  ];

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: (item.qty || item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && (item.qty || item.quantity || 1) > 1
          ? { ...item, qty: (item.qty || item.quantity || 1) - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[^\d]/g, "")) || 0;
  };

  const addRecommendedToCart = (product) => {
    const productPrice = parsePrice(product.price);
    const cartProduct = {
      id: product.id,
      title: product.title,
      name: product.title,
      price: productPrice,
      qty: 1,
      image: product.image,
      delivery: "Tomorrow",
    };

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === cartProduct.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === cartProduct.id
            ? { ...item, qty: (item.qty || item.quantity || 1) + 1 }
            : item
        );
      }

      return [...prev, cartProduct];
    });
  };

  const isUserLoggedIn = () => {
    if (typeof window === "undefined") return false;

    return Boolean(
      localStorage.getItem("userToken") || localStorage.getItem("user")
    );
  };

  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleLocalLogin = async (e) => {
    e.preventDefault();

    try {
      setLoginLoading(true);
      const res = await loginUser(loginForm);

      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("checkoutUser", JSON.stringify(res.data));
      if (res.data?.token) localStorage.setItem("userToken", res.data.token);

      setLoginForm({ email: "", password: "" });
      setLoginModalOpen(false);
      alert("Login successful. You can proceed to checkout now.");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Please add at least one product to cart before checkout.");
      return;
    }

    if (!isUserLoggedIn()) {
      setLoginModalOpen(true);
      return;
    }

    const checkoutData = {
      items: cartItems,
      subtotal,
      tax,
      total,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
    router.push("/Checkout");
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.qty || item.quantity || 1),
    0
  );

  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-6 px-3 md:px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_340px] gap-5">
        {/* LEFT SIDE */}
        <div className="space-y-4">
          {/* HEADER */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Shopping Cart
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                  {cartItems.length} Items
                </p>
              </div>

              <button className="hidden md:block text-sm text-blue-600 font-medium">
                Continue Shopping
              </button>
            </div>
          </div>

          {/* CART ITEMS */}
          {cartItems.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <p className="text-gray-700 font-semibold">Your cart is empty</p>
              <button
                onClick={() => router.push("/shop")}
                className="mt-4 px-5 h-10 rounded-xl bg-black text-white text-sm font-semibold"
              >
                Continue Shopping
              </button>
            </div>
          ) : cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md transition"
            >
              <div className="flex gap-4">
                {/* IMAGE */}
                <div className="w-28 h-28 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  {/* TITLE */}
                  <h2 className="text-[15px] font-semibold text-gray-900 line-clamp-2">
                      {item.title}
                  </h2>

                  {/* RATING */}
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}

                    <span className="text-[11px] text-gray-500 ml-1">
                      4.5
                    </span>
                  </div>

                  {/* DELIVERY */}
                  <p className="text-[12px] text-green-600 font-medium mt-2">
                    FREE Delivery {item.delivery || "Tomorrow"}
                  </p>

                  {/* PRICE */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{item.price.toLocaleString()}
                    </span>

                    <span className="text-sm line-through text-gray-400">
                      ₹{(item.price + 5000).toLocaleString()}
                    </span>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
                    {/* QTY */}
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-gray-100"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="w-10 text-center text-sm font-medium">
                        {item.qty || item.quantity || 1}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-gray-100"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex items-center gap-2">
                      <button className="h-9 px-4 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50 transition">
                        Save
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="h-9 px-4 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition flex items-center gap-2"
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* RECOMMENDED */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  You may also like
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Products related to your cart
                </p>
              </div>

              <button className="hidden md:flex items-center gap-1 text-sm font-medium text-blue-600">
                View All
                <ChevronRight size={15} />
              </button>
            </div>

            {/* PRODUCTS */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all"
                >
                  {/* IMAGE */}
                  <div className="relative bg-[#f7f7f7] h-40 overflow-hidden">
                    {/* OFFER */}
                    <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[10px] px-2 py-1 rounded-md font-semibold">
                      20% OFF
                    </span>

                    {/* HEART */}
                    <button className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <Heart size={14} />
                    </button>

                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-3">
                    {/* RATING */}
                    <div className="flex items-center gap-[2px] mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={11}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}

                      <span className="text-[11px] text-gray-500 ml-1">
                        4.5
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-[13px] font-medium text-gray-800 line-clamp-2 min-h-[38px]">
                      {product.title}
                    </h3>

                    {/* PRICE */}
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[16px] font-bold text-gray-900">
                        {product.price}
                      </span>

                      <span className="text-[11px] text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    </div>

                    {/* DELIVERY */}
                    <p className="text-[11px] text-green-600 font-medium mt-1">
                      FREE Delivery Tomorrow
                    </p>

                    {/* BUTTON */}
                    <button
                      onClick={() => addRecommendedToCart(product)}
                      className="w-full h-9 mt-3 rounded-xl bg-[#111827] hover:bg-black text-white text-[13px] font-medium transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          {/* COUPON */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Tag size={18} className="text-orange-500" />

              <h2 className="font-semibold text-gray-900">
                Apply Coupon
              </h2>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon code"
                className="flex-1 h-11 border border-gray-200 rounded-xl px-4 outline-none focus:ring-2 focus:ring-black text-sm"
              />

              <button className="px-5 rounded-xl bg-black text-white text-sm font-medium">
                Apply
              </button>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 sticky top-34">
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>

                <span className="text-green-600 font-medium">
                  FREE
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Tax</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>

              {/* FREE DELIVERY */}
              <div className="bg-green-50 rounded-xl p-3">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-green-700 font-medium">
                    Free Shipping
                  </span>

                  <span className="text-green-700 font-medium">
                    80%
                  </span>
                </div>

                <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
                </div>

                <p className="text-xs text-green-700 mt-2">
                  You unlocked FREE delivery 🎉
                </p>
              </div>

              {/* TOTAL */}
              <div className="border-t pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  Total
                </span>

                <span className="text-2xl font-bold text-gray-900">
                  ₹{total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={handleCheckout}
              className="w-full h-12 rounded-xl bg-black hover:bg-gray-900 text-white font-semibold mt-6 transition"
            >
              Proceed to Checkout
            </button>

            {/* FEATURES */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={16} />
                Secure Payments
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck size={16} />
                Fast Delivery
              </div>
            </div>
          </div>
        </div>
      </div>

      {loginModalOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4"
          onClick={() => setLoginModalOpen(false)}
        >
          <div
            className="w-full max-w-[430px] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#1e2a3a] px-6 py-5 flex items-start justify-between">
              <div>
                <h2 className="text-white text-xl font-bold">Login Required</h2>
                <p className="text-gray-300 text-sm mt-1">
                  Checkout ke liye pehle login karo.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setLoginModalOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleLocalLogin} className="px-6 py-6">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={loginForm.email}
                    onChange={handleLoginChange}
                    placeholder="Enter email"
                    className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    placeholder="Enter password"
                    className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setLoginModalOpen(false)}
                  className="px-5 h-11 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 h-11 rounded-lg bg-[#F5A623] hover:bg-[#e09610] text-white text-sm font-semibold flex items-center gap-2 transition"
                >
                  <User size={16} />
                  {loginLoading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
