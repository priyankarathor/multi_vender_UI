"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  Store,
  ChevronDown,
  MessageCircle,
  MapPin,
} from "lucide-react";

import { getCategories } from "../apis/category/category";
import { sendWhatsAppOtp } from "../apis/whatsapp/whatsapp";
import { userLogin } from "../apis/userlogin/userlogin";
import { userRegister } from "../apis/userregister/userregister";
import { saveCustomerSession } from "../apis/customer/customer";
import {
  syncDeviceCartToCustomer,
} from "../apis/cart/cart";
import {
  syncDeviceWishlistToCustomer,
} from "../apis/wishlist/wishlist";

const initialUserRegisterForm = {
  name: "",
  email: "",
  number: "",
  password: "",
  status: "active",
  role: "customer",
  companyname: "",
  category: "",
  city: "",
  state: "",
  pincode: "",
};

const getStoredCustomer = () => {
  if (typeof window === "undefined") return null;

  try {
    const raw =
      localStorage.getItem("checkoutUser") ||
      localStorage.getItem("customer") ||
      localStorage.getItem("customerData") ||
      localStorage.getItem("user");

    if (!raw) return null;

    const parsed = JSON.parse(raw);

    const cust =
      parsed?.data?.customer ||
      parsed?.data?.user ||
      parsed?.customer ||
      parsed?.user ||
      parsed?.data ||
      parsed;

    if (!cust?._id && !cust?.id) return null;

    return cust;
  } catch {
    return null;
  }
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const hasGoogleClientId =
    googleClientId && googleClientId !== "your_google_client_id_here";

  const profileDropdownRef = useRef(null);
  const categoryPreviewTimeoutRef = useRef(null);
  const searchCategoryRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const [customer, setCustomer] = useState(() => getStoredCustomer());

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [userRegisterOpen, setUserRegisterOpen] = useState(false);
  const [allMenuOpen, setAllMenuOpen] = useState(false);

  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [previewCategoryId, setPreviewCategoryId] = useState(null);
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchCategoryOpen, setSearchCategoryOpen] = useState(false);

  const searchCategoryWidth = Math.min(
    128,
    Math.max(74, searchCategory.length * 7 + 48)
  );

  const [whatsappOtpLoading, setWhatsappOtpLoading] = useState(false);

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const [userLoginLoading, setUserLoginLoading] = useState(false);

  const [userRegisterLoading, setUserRegisterLoading] = useState(false);

  const [userRegisterForm, setUserRegisterForm] = useState(
    initialUserRegisterForm
  );

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const syncCustomer = () => {
      setCustomer(getStoredCustomer());
    };

    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setProfileDropdownOpen(false);
      }

      if (
        searchCategoryRef.current &&
        !searchCategoryRef.current.contains(event.target)
      ) {
        setSearchCategoryOpen(false);
      }
    };

    window.addEventListener("customerUpdated", syncCustomer);
    window.addEventListener("storage", syncCustomer);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("customerUpdated", syncCustomer);
      window.removeEventListener("storage", syncCustomer);
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(categoryPreviewTimeoutRef.current);
    };
  }, []);

  async function getAllCategories() {
    try {
      const response = await getCategories();

      const list = Array.isArray(response?.data?.data)
        ? response.data.data
        : Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response)
            ? response
            : [];

      setCategories(list);
    } catch (error) {
      console.error("Category API error:", error);

      setCategories([
        { _id: "for-you", name: "For You" },
        { _id: "fashion", name: "Fashion" },
        { _id: "mobiles", name: "Mobiles" },
        { _id: "beauty", name: "Beauty" },
        { _id: "electronics", name: "Electronics" },
        { _id: "home", name: "Home" },
        { _id: "appliances", name: "Appliances" },
        { _id: "toys", name: "Toys" },
        { _id: "food", name: "Food" },
        { _id: "auto", name: "Auto" },
        { _id: "sports", name: "Sports" },
        { _id: "books", name: "Books" },
        { _id: "furniture", name: "Furniture" },
      ]);
    }
  }

  useEffect(() => {
    queueMicrotask(getAllCategories);
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    const trimmedQuery = searchQuery.trim();

    if (searchCategory !== "All") params.set("category", searchCategory);
    if (trimmedQuery) params.set("search", trimmedQuery);

    const matchedCategory = categories.find(
      (cat) => cat.name?.toLowerCase() === searchCategory.toLowerCase()
    );
    setActiveCategoryId(matchedCategory?._id || null);
    setPreviewCategoryId(null);

    router.push(`/shop${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const handleSearchCategoryChange = (nextCategory) => {
    setSearchCategory(nextCategory);
    setSearchCategoryOpen(false);

    const params = new URLSearchParams();
    const trimmedQuery = searchQuery.trim();

    if (nextCategory !== "All") params.set("category", nextCategory);
    if (trimmedQuery) params.set("search", trimmedQuery);

    const matchedCategory = categories.find(
      (cat) => cat.name?.toLowerCase() === nextCategory.toLowerCase()
    );
    setActiveCategoryId(matchedCategory?._id || null);
    setPreviewCategoryId(null);

    router.push(`/shop${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const syncCustomerData = async (cid) => {
    if (!cid) return;

    try {
      await Promise.allSettled([
        syncDeviceCartToCustomer(cid),
        syncDeviceWishlistToCustomer(cid),
      ]);

      window.dispatchEvent(new Event("cartUpdated"));
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (syncError) {
      console.warn("Cart/Wishlist sync failed:", syncError?.message);
    }
  };

  const isNotRegisteredError = (message = "") => {
    const msg = message.toLowerCase();

    return (
      msg.includes("not found") ||
      msg.includes("not registered") ||
      msg.includes("does not exist") ||
      msg.includes("no user") ||
      msg.includes("invalid email")
    );
  };

  const handleUserChange = (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleUserRegisterChange = (event) => {
    setUserRegisterForm({
      ...userRegisterForm,
      [event.target.name]: event.target.value,
    });
  };

  const openUserRegister = () => {
    setUserRegisterForm((prev) => ({
      ...prev,
      email: userForm.email,
      password: userForm.password,
    }));

    setUserModalOpen(false);
    setUserRegisterOpen(true);
  };

  const openUserLogin = () => {
    setUserForm((prev) => ({
      ...prev,
      email: userRegisterForm.email,
      password: userRegisterForm.password,
    }));

    setUserRegisterOpen(false);
    setUserModalOpen(true);
  };

  const handleUserLogin = async (event) => {
    event.preventDefault();

    try {
      setUserLoginLoading(true);

      const res = await userLogin(userForm);
      const cid = saveCustomerSession(res.data);

      localStorage.setItem("checkoutUser", JSON.stringify(res.data));

      const loggedCustomer =
        res?.data?.data?.customer ||
        res?.data?.data?.user ||
        res?.data?.customer ||
        res?.data?.user ||
        res?.data?.data ||
        res?.data;

      if (loggedCustomer) {
        setCustomer(loggedCustomer);
      }

      window.dispatchEvent(new Event("customerUpdated"));

      await syncCustomerData(cid);

      alert("User Login Successfully!");

      setUserForm({
        email: "",
        password: "",
      });

      setUserModalOpen(false);
      setProfileDropdownOpen(false);
    } catch (error) {
      const message = error.response?.data?.message || "Login failed";

      if (isNotRegisteredError(message)) {
        openUserRegister();
      } else {
        alert(message);
      }
    } finally {
      setUserLoginLoading(false);
    }
  };

  const handleUserRegister = async (event) => {
    event.preventDefault();

    try {
      setUserRegisterLoading(true);

      const res = await userRegister(userRegisterForm);
      const cid = saveCustomerSession(res.data);

      localStorage.setItem("checkoutUser", JSON.stringify(res.data));

      const loggedCustomer =
        res?.data?.data?.customer ||
        res?.data?.data?.user ||
        res?.data?.customer ||
        res?.data?.user ||
        res?.data?.data ||
        res?.data;

      if (loggedCustomer) {
        setCustomer(loggedCustomer);
      }

      window.dispatchEvent(new Event("customerUpdated"));

      await syncCustomerData(cid);

      alert("Registration successful. You are logged in now.");

      setUserRegisterForm(initialUserRegisterForm);
      setUserRegisterOpen(false);
      setProfileDropdownOpen(false);
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    } finally {
      setUserRegisterLoading(false);
    }
  };

  const handleGoogleUserLoginSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);

      setUserForm((prev) => ({
        ...prev,
        email: decoded.email || prev.email,
      }));
    } catch (error) {
      console.error("Google decode error login:", error);
    }
  };

  const handleGoogleUserRegisterSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);

      setUserRegisterForm((prev) => ({
        ...prev,
        name: decoded.name || prev.name,
        email: decoded.email || prev.email,
      }));
    } catch (error) {
      console.error("Google decode error register:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("checkoutUser");
    localStorage.removeItem("customer");
    localStorage.removeItem("customerData");
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setCustomer(null);
    setProfileDropdownOpen(false);

    window.dispatchEvent(new Event("customerUpdated"));
    window.dispatchEvent(new Event("cartUpdated"));
    window.dispatchEvent(new Event("wishlistUpdated"));

    router.push("/");
  };

  const openVendorModal = () => {
    router.push("/vendor-register");
  };

  const sendOtp = async () => {
    try {
      const number = customer?.number || customer?.phone;

      if (!number) {
        alert("Please login first.");
        setUserModalOpen(true);
        return;
      }

      setWhatsappOtpLoading(true);

      await sendWhatsAppOtp({ number });

      alert("WhatsApp OTP sent successfully.");
    } catch (error) {
      console.error("WhatsApp OTP error:", error);
      alert("WhatsApp OTP send failed.");
    } finally {
      setWhatsappOtpLoading(false);
    }
  };

  const handleCategoryPreview = (categoryId) => {
    clearTimeout(categoryPreviewTimeoutRef.current);
    setPreviewCategoryId(categoryId);
  };

  const clearCategoryPreview = () => {
    categoryPreviewTimeoutRef.current = setTimeout(() => {
      setPreviewCategoryId(null);
    }, 200);
  };

  return (
    <>
     <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm ">
        {/* PART 2 */}
        <div className="bg-white">
          <div className="max-w-[1450px] mx-auto px-3 sm:px-6 lg:px-10">
            {/* ===== MOBILE LAYOUT (sm se neeche) ===== */}
            <div className="flex sm:hidden flex-col gap-2 py-2">
              {/* Row 1: Logo + icons */}
              <div className="flex items-center justify-between gap-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FF9900]/10 text-[#FF9900] font-black text-base tracking-tight hover:bg-[#FF9900]/20 transition-colors"
                >
                  Jajot
                </Link>

                <div className="flex items-center gap-1.5">
                  <div className="relative" ref={profileDropdownRef}>
                    <button
                      type="button"
                      onClick={() =>
                        customer
                          ? setProfileDropdownOpen((prev) => !prev)
                          : setUserModalOpen(true)
                      }
                      className="flex items-center justify-center w-9 h-9 rounded-lg text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20"
                    >
                      <User size={18} />
                    </button>

                    {customer && profileDropdownOpen && (
                      <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] overflow-hidden">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="font-bold text-gray-900 text-sm">
                            Hello {customer.name || "there"}
                          </p>

                          {(customer.number || customer.phone) && (
                            <p className="text-xs text-gray-500 mt-0.5">
                              {customer.number || customer.phone}
                            </p>
                          )}
                        </div>

                        <div className="py-1">
                          <Link
                            href="/orders"
                            onClick={() => setProfileDropdownOpen(false)}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"
                          >
                            Orders
                          </Link>

                          <Link
                            href="/Wishlist"
                            onClick={() => setProfileDropdownOpen(false)}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"
                          >
                            Wishlist
                          </Link>

                          <Link
                            href="/contact"
                            onClick={() => setProfileDropdownOpen(false)}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"
                          >
                            Contact Us
                          </Link>
                        </div>

                        <div className="border-t border-gray-100 py-1">
                          <button
                            type="button"
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/Addtocard"
                    className="relative flex items-center justify-center w-9 h-9 rounded-lg text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20"
                  >
                    <ShoppingBag size={18} />

                  </Link>

                  <button
                    type="button"
                    onClick={() => setAllMenuOpen(true)}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-800 hover:border-[#FF9900] hover:text-[#FF9900]"
                  >
                    <Menu size={18} />
                  </button>
                </div>
              </div>

              {/* Row 2: chota search bar */}
              <form
                onSubmit={handleSearchSubmit}
                className="flex h-9 w-full overflow-visible rounded-lg border-2 border-[#FF9900] bg-white transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF9900]/20 box-border"
              >
                <div className="relative shrink-0 h-full" ref={searchCategoryRef}>
                  <button
                    type="button"
                    onClick={() => setSearchCategoryOpen((prev) => !prev)}
                    style={{ width: `${Math.min(90, searchCategoryWidth)}px` }}
                    className="h-full flex items-center justify-between gap-1 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-l-[6px] pl-2 pr-1.5 text-[11px] font-semibold text-gray-800"
                  >
                    <span className="truncate">{searchCategory}</span>
                    <ChevronDown
                      size={12}
                      className={`shrink-0 text-gray-600 transition-transform ${
                        searchCategoryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {searchCategoryOpen && (
                    <div className="absolute left-0 top-[calc(100%+8px)] w-48 max-h-72 overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] py-1.5">
                      <button
                        type="button"
                        onClick={() => handleSearchCategoryChange("All")}
                        className={`w-full text-left px-4 py-2 text-sm ${
                          searchCategory === "All"
                            ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"
                        }`}
                      >
                        All
                      </button>

                      {categories.map((cat) => (
                        <button
                          key={cat._id || cat.name}
                          type="button"
                          onClick={() => handleSearchCategoryChange(cat.name)}
                          className={`w-full text-left px-4 py-2 text-sm ${
                            searchCategory === cat.name
                              ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold"
                              : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search Products, Brands..."
                  className="min-w-0 flex-1 h-full bg-white px-2 text-[13px] font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-500"
                />

                <button
                  type="submit"
                  className="flex h-full w-9 shrink-0 items-center justify-center bg-white text-gray-600 hover:text-[#FF9900] rounded-r-[6px]"
                  aria-label="Search"
                >
                  <Search size={16} />
                </button>
              </form>
            </div>

            {/* ===== DESKTOP LAYOUT (sm se upar, jaisa pehle tha) ===== */}
            <div className="hidden sm:flex min-h-[64px] items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#FF9900]/10 text-[#FF9900] font-black text-xl tracking-tight hover:bg-[#FF9900]/20 transition-colors"
              >
                Jajot
              </Link>

              <form
                onSubmit={handleSearchSubmit}
                className="flex h-11 w-full max-w-[560px] overflow-visible rounded-xl border-2 border-[#FF9900] bg-white transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF9900]/20 box-border"
              >
                <div className="relative shrink-0 h-full" ref={searchCategoryRef}>
                  <button
                    type="button"
                    onClick={() => setSearchCategoryOpen((prev) => !prev)}
                    style={{ width: `${searchCategoryWidth}px` }}
                    className="h-full flex items-center justify-between gap-1 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-l-[10px] pl-3 pr-2 text-xs font-semibold text-gray-800 transition-colors"
                  >
                    <span className="truncate">{searchCategory}</span>
                    <ChevronDown
                      size={14}
                      className={`shrink-0 text-gray-600 transition-transform ${
                        searchCategoryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {searchCategoryOpen && (
                    <div className="absolute left-0 top-[calc(100%+8px)] w-52 max-h-72 overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] py-1.5">
                      <button
                        type="button"
                        onClick={() => handleSearchCategoryChange("All")}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          searchCategory === "All"
                            ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"
                        }`}
                      >
                        All
                      </button>

                      {categories.map((cat) => (
                        <button
                          key={cat._id || cat.name}
                          type="button"
                          onClick={() => handleSearchCategoryChange(cat.name)}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                            searchCategory === cat.name
                              ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold"
                              : "text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search for Products, Brands and More"
                  className="min-w-0 flex-1 h-full bg-white px-2 text-[15px] font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-500"
                />

                <button
                  type="submit"
                  className="flex h-full w-12 shrink-0 items-center justify-center bg-white text-gray-600 hover:text-[#FF9900] transition rounded-r-[10px]"
                  aria-label="Search"
                >
                  <Search size={21} />
                </button>
              </form>

              <div className="flex items-center gap-2 sm:gap-4">
                <div className="relative" ref={profileDropdownRef}>
                  <button
                    type="button"
                    onClick={() =>
                      customer
                        ? setProfileDropdownOpen((prev) => !prev)
                        : setUserModalOpen(true)
                    }
                    className="flex items-center gap-1.5 h-10 px-2 sm:px-3 rounded-lg text-sm font-semibold text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20 transition-colors"
                  >
                    <User size={20} />

                    <span className="hidden sm:inline">
                      {customer
                        ? customer.name?.split(" ")[0] || "Account"
                        : "Login"}
                    </span>

                    <ChevronDown
                      size={15}
                      className={`transition-transform ${
                        profileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {customer && profileDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] overflow-hidden">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="font-bold text-gray-900 text-sm">
                          Hello {customer.name || "there"}
                        </p>

                        {(customer.number || customer.phone) && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {customer.number || customer.phone}
                          </p>
                        )}
                      </div>

                      <div className="py-1">
                        <Link
                          href="/orders"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"
                        >
                          Orders
                        </Link>

                        <Link
                          href="/Wishlist"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"
                        >
                          Wishlist
                        </Link>

                        <Link
                          href="/contact"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"
                        >
                          Contact Us
                        </Link>
                      </div>

                      <div className="border-t border-gray-100 py-1">
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative hidden md:block group">
                  <button
                    type="button"
                    className="flex items-center gap-1.5 h-10 px-3 rounded-lg text-sm font-semibold text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20"
                  >
                    More
                    <ChevronDown
                      size={15}
                      className="group-hover:rotate-180 transition-transform"
                    />
                  </button>

                  <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                    <div className="w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-1">
                      <button
                        type="button"
                        onClick={openVendorModal}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900]"
                      >
                        <Store size={16} /> Become a Vendor
                      </button>

                      <button
                        type="button"
                        onClick={sendOtp}
                        disabled={whatsappOtpLoading}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-600 disabled:opacity-60"
                      >
                        <MessageCircle size={16} />
                        {whatsappOtpLoading ? "Sending..." : "WhatsApp OTP"}
                      </button>
                    </div>
                  </div>
                </div>

                <Link
                  href="/Addtocard"
                  className="relative flex items-center gap-1.5 h-10 px-2 sm:px-3 rounded-lg text-[#FF9900] bg-[#FF9900]/10 hover:bg-[#FF9900]/20 font-semibold text-sm"
                >
                  <ShoppingBag size={21} />
                  <span className="hidden sm:inline">Cart</span>

                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* PART 3 - category row, mobile+desktop dono pe scrollable, overflow fix ke saath */}
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-x-hidden">
          <div className="max-w-[1450px] mx-auto px-2 sm:px-6 lg:px-10 w-full">
            <div
              className="flex w-full min-w-0 min-h-[52px] md:min-h-[62px] items-center gap-1 overflow-x-auto scrollbar-hide"
              onMouseEnter={() =>
                clearTimeout(categoryPreviewTimeoutRef.current)
              }
              onMouseLeave={clearCategoryPreview}
            >
              <button
                type="button"
                onClick={() => setAllMenuOpen(true)}
                className="flex flex-col items-center justify-center gap-1 px-3 sm:px-4 py-1.5 shrink-0 text-gray-800 hover:text-[#FF9900]"
              >
                <Menu size={20} className="sm:hidden" />
                <Menu size={22} className="hidden sm:block" />
                <span className="text-[11px] sm:text-xs font-semibold whitespace-nowrap">
                  All
                </span>
              </button>

              <Link
                href="/"
                onClick={() => {
                  setActiveCategoryId(null);
                  setPreviewCategoryId(null);
                  setSearchCategory("All");
                }}
                className={`flex flex-col items-center justify-center gap-1 px-3 sm:px-4 py-1.5 shrink-0 ${
                  isActive("/")
                    ? "text-[#FF9900]"
                    : "text-gray-800 hover:text-[#FF9900]"
                }`}
              >
                <Store size={20} className="sm:hidden" />
                <Store size={22} className="hidden sm:block" />

                <span
                  className={`text-[11px] sm:text-xs whitespace-nowrap ${
                    isActive("/")
                      ? "font-bold border-b-2 border-[#FF9900] pb-1"
                      : "font-semibold"
                  }`}
                >
                  Home
                </span>
              </Link>

              {categories.slice(0, 12).map((cat) => (
                <Link
                  key={cat._id}
                  href={`/shop?category=${encodeURIComponent(cat.name)}`}
                  onMouseEnter={() => handleCategoryPreview(cat._id)}
                  onFocus={() => handleCategoryPreview(cat._id)}
                  onClick={() => {
                    setActiveCategoryId(cat._id);
                    setPreviewCategoryId(cat._id);
                    setSearchCategory(cat.name);
                  }}
                  className={`flex flex-col items-center justify-center gap-1 px-3 sm:px-4 py-1.5 shrink-0 ${
                    activeCategoryId === cat._id
                      ? "text-[#FF9900]"
                      : "text-gray-800 hover:text-[#FF9900]"
                  }`}
                >
                  <ShoppingBag size={20} className="sm:hidden" />
                  <ShoppingBag size={22} className="hidden sm:block" />

                  <span
                    className={`text-[11px] sm:text-xs whitespace-nowrap ${
                      activeCategoryId === cat._id
                        ? "font-bold border-b-2 border-[#FF9900] pb-1"
                        : "font-semibold"
                    }`}
                  >
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {allMenuOpen && (
        <div className="fixed inset-0 z-[99999] bg-black/50">
          <div className="w-[290px] max-w-[85%] h-full bg-white shadow-2xl p-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold text-gray-900">
                All Categories
              </h2>

              <button
                type="button"
                onClick={() => setAllMenuOpen(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                <X size={22} />
              </button>
            </div>

            <div className="py-3">
              {categories.map((cat) => (
                <Link
                  key={cat._id}
                  href={`/shop?category=${encodeURIComponent(cat.name)}`}
                  onClick={() => {
                    setActiveCategoryId(cat._id);
                    setSearchCategory(cat.name);
                    setAllMenuOpen(false);
                  }}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#FF9900]"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* USER LOGIN MODAL */}
      {userModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 z-[99999] flex items-center justify-center p-4"
            onClick={() => setUserModalOpen(false)}
          >
            <div
              className="bg-white rounded-xl w-full max-w-[440px] shadow-2xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="bg-[#1e2a3a] px-7 py-5 flex items-start justify-between">
                <div>
                  <h2 className="text-white text-xl font-bold">User Login</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Login to your user account.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setUserModalOpen(false)}
                  className="text-gray-400 hover:text-white transition mt-1"
                >
                  <X size={20} />
                </button>
              </div>

              <form
                onSubmit={handleUserLogin}
                className="px-5 sm:px-7 py-6 sm:py-8"
              >
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={userForm.email}
                      onChange={handleUserChange}
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
                      value={userForm.password}
                      onChange={handleUserChange}
                      placeholder="Enter password"
                      className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                      required
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs text-gray-400">OR</span>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>

                  <div className="flex justify-center">
                    {hasGoogleClientId ? (
                      <GoogleLogin
                        onSuccess={handleGoogleUserLoginSuccess}
                        onError={() => console.log("Google Login Failed")}
                      />
                    ) : (
                      <p className="text-xs text-red-500">
                        Add Google client id in root .env.local
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={openUserRegister}
                    className="text-[#F5A623] font-semibold hover:underline"
                  >
                    Register here
                  </button>
                </p>

                <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setUserModalOpen(false)}
                    className="px-6 h-11 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={userLoginLoading}
                    className="px-6 h-11 rounded-lg bg-[#F5A623] hover:bg-[#e09610] text-white text-sm font-semibold flex items-center gap-2 transition disabled:opacity-60"
                  >
                    <User size={16} />
                    {userLoginLoading ? "Logging in..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}

      {/* USER REGISTER MODAL */}
      {userRegisterOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 z-[99999] flex items-center justify-center p-4"
            onClick={() => setUserRegisterOpen(false)}
          >
            <div
              className="bg-white rounded-xl w-full max-w-[720px] max-h-[90vh] shadow-2xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="bg-[#1e2a3a] px-7 py-5 flex items-start justify-between">
                <div>
                  <h2 className="text-white text-xl font-bold">
                    User Register
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Create your user account.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setUserRegisterOpen(false)}
                  className="text-gray-400 hover:text-white transition mt-1"
                >
                  <X size={20} />
                </button>
              </div>

              <form
                onSubmit={handleUserRegister}
                className="px-5 sm:px-7 py-6 sm:py-8 overflow-y-auto max-h-[calc(90vh-88px)]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={userRegisterForm.name}
                      onChange={handleUserRegisterChange}
                      placeholder="Enter name"
                      className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={userRegisterForm.email}
                      onChange={handleUserRegisterChange}
                      placeholder="Enter email"
                      className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number
                    </label>

                    <input
                      type="text"
                      name="number"
                      value={userRegisterForm.number}
                      onChange={handleUserRegisterChange}
                      placeholder="Enter mobile number"
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
                      value={userRegisterForm.password}
                      onChange={handleUserRegisterChange}
                      placeholder="Enter password"
                      className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={userRegisterForm.city}
                      onChange={handleUserRegisterChange}
                      placeholder="City"
                      className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>

                    <input
                      type="text"
                      name="state"
                      value={userRegisterForm.state}
                      onChange={handleUserRegisterChange}
                      placeholder="State"
                      className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      value={userRegisterForm.pincode}
                      onChange={handleUserRegisterChange}
                      placeholder="Pincode"
                      className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs text-gray-400">OR</span>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>

                  <div className="flex justify-center">
                    {hasGoogleClientId ? (
                      <GoogleLogin
                        onSuccess={handleGoogleUserRegisterSuccess}
                        onError={() => console.log("Google Login Failed")}
                      />
                    ) : (
                      <p className="text-xs text-red-500">
                        Add Google client id in root .env.local
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={openUserLogin}
                    className="text-[#F5A623] font-semibold hover:underline"
                  >
                    Login instead
                  </button>
                </p>

                <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={openUserLogin}
                    className="px-6 h-11 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
                  >
                    Login
                  </button>

                  <button
                    type="submit"
                    disabled={userRegisterLoading}
                    className="px-6 h-11 rounded-lg bg-[#F5A623] hover:bg-[#e09610] text-white text-sm font-semibold flex items-center gap-2 transition disabled:opacity-60"
                  >
                    <User size={16} />
                    {userRegisterLoading ? "Registering..." : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
