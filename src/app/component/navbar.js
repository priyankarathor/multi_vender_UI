"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { userLogin } from "../apis/userlogin/userlogin";
import { userRegister } from "../apis/userregister/userregister";
import {
  registerVendor,
  resendVendorOtp,
  sendVendorOtp,
  verifyVendorOtp,
} from "../apis/register/register";
import { saveCustomerSession } from "../apis/customer/customer";
import {
  getApiCartList,
  getCartItems,
  syncDeviceCartToCustomer,
} from "../apis/cart/cart";
import {
  getWishlistByCidOrDevice,
  syncDeviceWishlistToCustomer,
} from "../apis/wishlist/wishlist";
import { getCategories } from "../apis/category/category";
import { getSubCategories } from "../apis/subcategory/subcategory";
import { getSubToSubCategories } from "../apis/subtosubcategory/subtosubcategory";
import { sendWhatsAppOtp } from "../apis/whatsapp/whatsapp";
import AllCategoriesMenu from "./AllCategoriesMenu";

import {
  Search,
  ShoppingBag,
  User,
  Heart,
  Menu,
  X,
  Store,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const getApiList = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.categories)) return payload.categories;
  if (Array.isArray(payload?.subcategories)) return payload.subcategories;
  if (Array.isArray(payload?.data?.categories)) return payload.data.categories;
  if (Array.isArray(payload?.data?.subcategories)) return payload.data.subcategories;
  return [];
};

const getCountList = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.cart)) return payload.cart;
  if (Array.isArray(payload?.wishlist)) return payload.wishlist;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.data?.data)) return payload.data.data;
  if (Array.isArray(payload?.data?.cart)) return payload.data.cart;
  if (Array.isArray(payload?.data?.wishlist)) return payload.data.wishlist;
  if (Array.isArray(payload?.data?.items)) return payload.data.items;
  return [];
};

const getItemQty = (item) => Number(item?.qty || item?.quantity || 1);

const getSafeWhatsAppUrl = (url) => {
  if (!url) return "";

  try {
    return new URL(url).toString();
  } catch {
    return new URL(url, window.location.origin).toString();
  }
};

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
    const raw = localStorage.getItem("checkoutUser");
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
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const hasGoogleClientId =
    googleClientId && googleClientId !== "your_google_client_id_here";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allMenuOpen, setAllMenuOpen] = useState(false);
  const [vendorModalOpen, setVendorModalOpen] = useState(false);
  const [vendorStep, setVendorStep] = useState("email"); // "email" -> "form"
  const [vendorEmail, setVendorEmail] = useState("");
  const [vendorOtp, setVendorOtp] = useState("");
  const [vendorOtpLoading, setVendorOtpLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [whatsappOtpLoading, setWhatsappOtpLoading] = useState(false);
  const [shopToast, setShopToast] = useState(null);

  // Logged-in customer + profile dropdown
  const [customer, setCustomer] = useState(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  const [vendorForm, setVendorForm] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    companyname: "",
    category: "",
    city: "",
    state: "",
    pincode: "",
    status: "inactive",
  });

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subToSubCategories, setSubToSubCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [previewCategoryId, setPreviewCategoryId] = useState(null);

  const [hoveredSubId, setHoveredSubId] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const categoryPreviewTimeoutRef = useRef(null);

  const [mobileExpandedSubId, setMobileExpandedSubId] = useState(null);
  const [searchCategory, setSearchCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const searchCategoryWidth = Math.min(
    128,
    Math.max(74, searchCategory.length * 7 + 48)
  );

  // Cart/Wishlist count refresh
  // Note: 404 ka main fix cart.js + wishlist.js me hai.
  // Navbar yahan safely count 0 dikha dega, app break nahi hogi.
 useEffect(() => {
  let active = true;
  let debounceTimer = null;

  const readLocalCartCount = () => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");

      if (!Array.isArray(savedCart)) return 0;

      return savedCart.reduce((total, item) => {
        return total + Number(item?.qty || item?.quantity || 1);
      }, 0);
    } catch {
      return 0;
    }
  };

  const readLocalWishlistCount = () => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("wishlistItems") || "[]"
      );

      if (!Array.isArray(savedWishlist)) return 0;

      return savedWishlist.length;
    } catch {
      return 0;
    }
  };

  const fetchCounts = () => {
    if (!active) return;

    setCartCount(readLocalCartCount());
    setWishlistCount(readLocalWishlistCount());
  };

  const updateCounts = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(fetchCounts, 80);
  };

  fetchCounts();

  window.addEventListener("cartUpdated", updateCounts);
  window.addEventListener("wishlistUpdated", updateCounts);
  window.addEventListener("customerUpdated", updateCounts);
  window.addEventListener("storage", updateCounts);

  return () => {
    active = false;
    clearTimeout(debounceTimer);

    window.removeEventListener("cartUpdated", updateCounts);
    window.removeEventListener("wishlistUpdated", updateCounts);
    window.removeEventListener("customerUpdated", updateCounts);
    window.removeEventListener("storage", updateCounts);
  };
}, []);

  useEffect(() => {
    let toastTimer = null;

    const showToast = (event) => {
      setShopToast({
        title: event.detail?.title || "Added successfully",
        message: event.detail?.message || "Your item has been saved.",
      });

      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        setShopToast(null);
      }, 3000);
    };

    window.addEventListener("shopToast", showToast);

    return () => {
      clearTimeout(toastTimer);
      window.removeEventListener("shopToast", showToast);
    };
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(getApiList(res.data));
      } catch (error) {
        console.log("Categories error:", error);
        setCategories([]);
      }
    };

    const fetchSubCategories = async () => {
      try {
        const res = await getSubCategories();
        setSubCategories(getApiList(res.data));
      } catch (error) {
        console.log("SubCategories error:", error);
        setSubCategories([]);
      }
    };

    const fetchSubToSubCategories = async () => {
      try {
        const res = await getSubToSubCategories();
        setSubToSubCategories(getApiList(res.data));
      } catch (error) {
        console.log("SubToSub error:", error);
        setSubToSubCategories([]);
      }
    };

    fetchCategories();
    fetchSubCategories();
    fetchSubToSubCategories();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || categories.length === 0) return;

    const timer = window.setTimeout(() => {
      if (pathname === "/") {
        setActiveCategoryId(null);
        setPreviewCategoryId(null);
        return;
      }

      const categoryName = searchParams.get("category");
      if (!categoryName) {
        setActiveCategoryId(null);
        setPreviewCategoryId(null);
        setSearchCategory("All");
        return;
      }

      const matchedCategory = categories.find(
        (cat) => cat.name?.toLowerCase() === categoryName.toLowerCase()
      );
      if (matchedCategory) {
        setActiveCategoryId(matchedCategory._id);
        setPreviewCategoryId(null);
        setSearchCategory(matchedCategory.name);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname, categories, searchParams]);

  // Load logged-in customer on mount + keep in sync across tabs/events
  useEffect(() => {
    setCustomer(getStoredCustomer());

    const syncCustomer = () => setCustomer(getStoredCustomer());
    window.addEventListener("customerUpdated", syncCustomer);
    window.addEventListener("storage", syncCustomer);

    const handleClickOutside = (e) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(e.target)
      ) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("customerUpdated", syncCustomer);
      window.removeEventListener("storage", syncCustomer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const visibleCategoryId = previewCategoryId || activeCategoryId;

  const filteredSubs = visibleCategoryId
    ? subCategories.filter((sub) => sub.categoryId?._id === visibleCategoryId)
    : [];

  const filteredSubToSubs = (subId) =>
    subToSubCategories.filter(
      (s) => s.subcategoryId === subId || s.subcategoryId?._id === subId
    );

  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [userLoginLoading, setUserLoginLoading] = useState(false);
  const [userRegisterOpen, setUserRegisterOpen] = useState(false);
  const [userRegisterLoading, setUserRegisterLoading] = useState(false);
  const [userRegisterForm, setUserRegisterForm] = useState(initialUserRegisterForm);

  const resetVendorOtpFlow = () => {
    setVendorStep("email");
    setVendorEmail("");
    setVendorOtp("");
    setVendorOtpLoading(false);
    setOtpSent(false);
  };

  const openVendorModal = () => {
    resetVendorOtpFlow();
    setVendorForm((prev) => ({ ...prev, email: "" }));
    setVendorModalOpen(true);
  };

  const closeVendorModal = () => {
    setVendorModalOpen(false);
    resetVendorOtpFlow();
  };

  const handleVendorChange = (e) =>
    setVendorForm({ ...vendorForm, [e.target.name]: e.target.value });
  const handleUserChange = (e) =>
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  const handleUserRegisterChange = (e) =>
    setUserRegisterForm({
      ...userRegisterForm,
      [e.target.name]: e.target.value,
    });

  // Step 1: send OTP (email field stays, OTP field appears below it)
  const handleSendVendorOtp = async (e) => {
    e.preventDefault();
    const email = vendorEmail.trim();

    if (!email) {
      alert("Please enter email.");
      return;
    }

    try {
      setVendorOtpLoading(true);
      await sendVendorOtp(email);
      setOtpSent(true);
      alert("OTP sent to your email.");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to send OTP. Please try again.");
    } finally {
      setVendorOtpLoading(false);
    }
  };

  // Step 2: verify OTP (same form, submits this once otpSent is true)
  const handleVerifyVendorOtp = async (e) => {
    e.preventDefault();
    const email = vendorEmail.trim();
    const otp = vendorOtp.trim();

    if (!otp) {
      alert("Please enter OTP.");
      return;
    }

    try {
      setVendorOtpLoading(true);
      await verifyVendorOtp({ email, otp });
      setVendorForm((prev) => ({ ...prev, email }));
      setVendorStep("form");
      alert("Email verified successfully.");
    } catch (error) {
      alert(error.response?.data?.message || "Invalid OTP");
    } finally {
      setVendorOtpLoading(false);
    }
  };

  const handleResendVendorOtp = async () => {
    const email = vendorEmail.trim();

    if (!email) {
      alert("Please enter email.");
      return;
    }

    try {
      setVendorOtpLoading(true);
      await resendVendorOtp(email);
      alert("OTP resent to your email.");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to resend OTP");
    } finally {
      setVendorOtpLoading(false);
    }
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

  const handleUserLogin = async (e) => {
    e.preventDefault();

    try {
      setUserLoginLoading(true);
      const res = await userLogin(userForm);
      const cid = saveCustomerSession(res.data);
      localStorage.setItem("checkoutUser", JSON.stringify(res.data));
      window.dispatchEvent(new Event("customerUpdated"));
      await syncCustomerData(cid);

      alert("User Login Successfully!");
      setUserForm({ email: "", password: "" });
      setUserModalOpen(false);
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

  const handleUserRegister = async (e) => {
    e.preventDefault();

    try {
      setUserRegisterLoading(true);
      const res = await userRegister(userRegisterForm);
      const cid = saveCustomerSession(res.data);
      localStorage.setItem("checkoutUser", JSON.stringify(res.data));
      window.dispatchEvent(new Event("customerUpdated"));
      await syncCustomerData(cid);

      alert("Registration successful. You are logged in now.");
      setUserRegisterForm(initialUserRegisterForm);
      setUserRegisterOpen(false);
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
      console.error("Google decode error (navbar login):", error);
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
      console.error("Google decode error (navbar register):", error);
    }
  };

  const handleCreateVendor = async (e) => {
    e.preventDefault();
    const email = vendorForm.email.trim();

    if (!email) {
      alert("Please enter email.");
      return;
    }

    try {
      const payload = { ...vendorForm, email };
      await registerVendor(payload);
      alert("✅ Vendor Created Successfully!");
      setVendorForm({
        name: "", email: "", number: "", password: "",
        companyname: "", category: "", city: "", state: "",
        pincode: "", status: "inactive",
      });
      closeVendorModal();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  const isActive = (href) => pathname === href;

  const handleCategoryPreview = (categoryId) => {
    clearTimeout(categoryPreviewTimeoutRef.current);
    setPreviewCategoryId(categoryId);
    setHoveredSubId(null);
  };

  const clearCategoryPreview = () => {
    categoryPreviewTimeoutRef.current = setTimeout(() => {
      setPreviewCategoryId(null);
      setHoveredSubId(null);
    }, 150);
  };

  const handleSubMouseEnter = (subId) => {
    clearTimeout(hoverTimeoutRef.current);
    if (filteredSubToSubs(subId).length > 0) {
      setHoveredSubId(subId);
    }
  };

  const handleSubMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setHoveredSubId(null), 150);
  };

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

  const handleSearchCategoryChange = (event) => {
    const nextCategory = event.target.value;
    setSearchCategory(nextCategory);

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

  const sendOtp = async () => {
    try {
      setWhatsappOtpLoading(true);
      const res = await sendWhatsAppOtp("7338694959");

      if (res.data.success && res.data.whatsappUrl) {
        const whatsappUrl = getSafeWhatsAppUrl(res.data.whatsappUrl);
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        return;
      }

      alert(res.data.message || "WhatsApp OTP send nahi ho paya.");
    } catch (error) {
      alert(error.response?.data?.message || "WhatsApp OTP send nahi ho paya.");
    } finally {
      setWhatsappOtpLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("checkoutUser");
    setCustomer(null);
    setProfileDropdownOpen(false);
    window.dispatchEvent(new Event("customerUpdated"));
    window.dispatchEvent(new Event("cartUpdated"));
    window.dispatchEvent(new Event("wishlistUpdated"));
    router.push("/");
  };

  return (
    <>
      <style>{`
        .grain::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
          z-index: 0;
        }
        .grain > * { position: relative; z-index: 1; }

        .subcat-bar {
          transition: max-height 0.25s ease, opacity 0.2s ease;
          overflow: visible;
        }
        .subcat-bar.open  { max-height: 52px; opacity: 1; }
        .subcat-bar.closed { max-height: 0;    opacity: 0; }

        .subsub-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          min-width: 220px;
          max-height: 320px;
          overflow-y: auto;
          background: #fff;
          border: 1px solid #f3d7aa;
          border-radius: 8px;
          box-shadow: 0 14px 36px rgba(0,0,0,0.22);
          z-index: 9999;
          padding: 8px;
        }
        .subsub-dropdown a {
          display: block;
          padding: 9px 12px;
          font-size: 13px;
          color: #1f2937;
          border-radius: 6px;
          font-weight: 600;
          white-space: nowrap;
          transition: background 0.15s, color 0.15s;
          text-decoration: none;
        }
        .subsub-dropdown a:hover {
          background: #FFF7ED;
          color: #FF9900;
        }
      `}</style>

      {/* MAIN DARK NAVBAR */}
      <header
        className="grain sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 overflow-visible relative"
        style={{ backgroundColor: "#131921" }}
      >
        <div className="max-w-[1450px] mx-auto px-3 sm:px-4">

          {/* TOP BAR */}
          <div className="h-[64px] min-h-[64px] sm:h-[70px] sm:min-h-[70px] grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
            <Link href="/" className="font-black text-xl text-[#FF9900] tracking-tight">
              Jajot
            </Link>

            <div className="hidden md:flex min-w-0 justify-center px-4">
              <form
                onSubmit={handleSearchSubmit}
                className="flex h-10 w-full max-w-[520px] overflow-hidden rounded-[5px] border-2 border-transparent bg-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-200 focus-within:border-[#FF9900]"
              >
                <div
                  style={{ width: `${searchCategoryWidth}px` }}
                  className="relative shrink-0 border-r border-gray-200 bg-gray-50 transition hover:bg-gray-100"
                >
                  <select
                    value={searchCategory}
                    onChange={handleSearchCategoryChange}
                    className="h-full w-full appearance-none bg-transparent pl-3 pr-7 text-xs font-semibold text-gray-800 outline-none"
                    aria-label="Search category"
                  >
                    <option value="All">All</option>
                    {categories.map((cat) => (
                      <option key={cat._id || cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-700"
                  />
                </div>
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search Jajot.com"
                  className="min-w-0 flex-1 bg-white px-3 text-sm font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="flex w-11 shrink-0 items-center justify-center rounded-r-[3px] bg-[#febd69] text-[#111] transition hover:bg-[#f3a847] active:bg-[#e68a00]"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setAllMenuOpen(true)}
                className="md:hidden w-9 h-9 sm:w-10 sm:h-10 border border-white/10 rounded-xl flex items-center justify-center text-white hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
              >
                <Menu size={18} />
              </button>
              <Link
                href="/Wishlist"
                className="relative w-9 h-9 sm:w-10 sm:h-10 border border-white/10 rounded-xl flex items-center justify-center text-white hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
              >
                <Heart size={18} />
              </Link>

              {/* PROFILE ICON + DROPDOWN */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={() => setProfileDropdownOpen((prev) => !prev)}
                  className="w-9 h-9 sm:w-10 sm:h-10 border border-white/10 rounded-xl flex items-center justify-center text-white hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
                >
                  <User size={18} />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-[9999] overflow-hidden">
                    {customer ? (
                      <>
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="font-bold text-gray-900 text-sm">
                            Hello {customer.name || "there"}
                          </p>
                          {customer.number && (
                            <p className="text-xs text-gray-500 mt-0.5">
                              {customer.number}
                            </p>
                          )}
                        </div>

                        <div className="py-1">
                          <Link
                            href="/orders"
                            onClick={() => setProfileDropdownOpen(false)}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900] transition-colors"
                          >
                            Orders
                          </Link>
                          <Link
                            href="/Wishlist"
                            onClick={() => setProfileDropdownOpen(false)}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900] transition-colors"
                          >
                            Wishlist
                          </Link>
                          <Link
                            href="/contact"
                            onClick={() => setProfileDropdownOpen(false)}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF9900] transition-colors"
                          >
                            Contact Us
                          </Link>
                        </div>

                        <div className="border-t border-gray-100 py-1">
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                          >
                            Logout
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setProfileDropdownOpen(false);
                            setUserModalOpen(true);
                          }}
                          className="w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#FF9900] transition-colors flex items-center gap-2"
                        >
                          <User size={15} /> Login
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={sendOtp}
                disabled={whatsappOtpLoading}
                aria-label="Send WhatsApp OTP"
                title="Send WhatsApp OTP"
                className="w-9 h-9 sm:w-10 sm:h-10 border border-emerald-400/40 rounded-xl flex items-center justify-center text-emerald-300 hover:border-emerald-300 hover:bg-emerald-400/10 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
              >
                <MessageCircle size={18} />
              </button>
              <Link
                href="/Addtocard"
                className="relative md:hidden h-9 sm:h-10 px-3 sm:px-4 bg-[#FF9900] rounded-xl flex items-center justify-center gap-2 text-black font-bold text-sm hover:bg-[#ca8f07] transition-colors"
              >
                <ShoppingBag size={18} /><span>Cart</span>
              </Link>
              <div className="relative group hidden md:block">
                <button
                  onClick={openVendorModal}
                  className="flex items-center gap-2 px-4 h-10 border border-[#FF9900]/40 text-[#FF9900] rounded-xl font-semibold text-sm hover:bg-[#FF9900]/10 transition-colors"
                >
                  <Store size={18} />Vendor
                </button>
                <div className="absolute top-full right-0 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="absolute -top-2 right-8 w-4 h-4 bg-white border-l border-t border-[#FF9900]/20 rotate-45"></div>
                  <div className="px-4 py-3 bg-white rounded-xl shadow-xl border border-[#FF9900]/20 whitespace-nowrap">
                    <p className="text-sm font-semibold text-[#FF9900]">Request for Vendor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORY BAR */}
          <div
            className="hidden md:flex min-h-[61px] items-center gap-2 border-t border-white/10 py-3 overflow-x-auto scrollbar-hide"
            onMouseEnter={() => clearTimeout(categoryPreviewTimeoutRef.current)}
            onMouseLeave={clearCategoryPreview}
          >
            <button
              type="button"
              onClick={() => setAllMenuOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors bg-white/5 text-white/90 hover:bg-white/10 hover:text-[#FF9900]"
            >
              <Menu size={18} />
              All
            </button>
            <Link
              href="/"
              onClick={() => {
                setActiveCategoryId(null);
                setPreviewCategoryId(null);
                setSearchCategory("All");
              }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
                isActive("/")
                  ? "bg-[#FF9900] text-black"
                  : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              Home
            </Link>
            {categories.slice(0, 8).map((cat) => (
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
                className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeCategoryId === cat._id
                    ? "bg-[#FF9900] text-black"
                    : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/Addtocard"
              className="relative flex items-center gap-2 px-4 py-2 bg-[#FF9900] text-black rounded-xl font-semibold text-sm hover:bg-[#ca8f07] transition-colors whitespace-nowrap ml-auto"
            >
              <ShoppingBag size={18} />Cart
            </Link>
          </div>
        </div>
      </header>

      {/* SUBCATEGORY BAR — desktop */}
      <div
        className={`subcat-bar hidden md:block w-full bg-white border-b border-gray-200 shadow-sm sticky top-[126px] sm:top-[132px] z-40 ${
          visibleCategoryId && filteredSubs.length > 0 ? "open" : "closed"
        }`}
        onMouseEnter={() => clearTimeout(categoryPreviewTimeoutRef.current)}
        onMouseLeave={clearCategoryPreview}
      >
        <div className="max-w-[1450px] mx-auto px-4 flex items-center gap-0 h-[52px] overflow-visible">
          {visibleCategoryId && (
            <span className="text-sm font-bold text-gray-900 pr-4 mr-2 border-r border-gray-300 whitespace-nowrap">
              {categories.find((c) => c._id === visibleCategoryId)?.name}
            </span>
          )}

          {filteredSubs.map((sub) => {
            const subSubs = filteredSubToSubs(sub._id);
            const isHovered = hoveredSubId === sub._id;

            return (
              <div
                key={sub._id}
                className="relative flex-shrink-0"
                onMouseEnter={() => handleSubMouseEnter(sub._id)}
                onMouseLeave={handleSubMouseLeave}
              >
                <Link
                  href={`/shop?category=${sub.categoryId?.name}&subcategory=${sub.name}`}
                  className={`px-5 py-1.5 text-sm font-medium whitespace-nowrap rounded-md transition-colors flex items-center gap-1 ${
                    isHovered && subSubs.length > 0
                      ? "text-black bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  {sub.name}
                  {subSubs.length > 0 && (
                    <ChevronRight
                      size={13}
                      className={`transition-transform ${isHovered ? "rotate-90" : ""}`}
                    />
                  )}
                </Link>

                {/* Sub-to-sub dropdown */}
                {isHovered && subSubs.length > 0 && (
                  <div
                    className="subsub-dropdown"
                    onMouseEnter={() => clearTimeout(hoverTimeoutRef.current)}
                    onMouseLeave={handleSubMouseLeave}
                  >
                    {subSubs.map((ss) => (
                      <Link
                        key={ss._id}
                        href={`/shop?category=${sub.categoryId?.name}&subcategory=${sub.name}&subsubcategory=${ss.name}`}
                        onClick={() => {
                          setHoveredSubId(null);
                        }}
                      >
                        {ss.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex">
          <div
            className="grain w-[min(86vw,300px)] border-r border-white/10 h-full p-4 sm:p-5 flex flex-col overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, #0a0a0a 0%, #1a1408 40%, #0f0c00 70%, #000000 100%)",
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-black text-lg text-[#FF9900]">Jajot</h2>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex items-center gap-2 w-full px-4 h-11 rounded-xl border border-white/10 bg-white/5 mb-5">
              <Search size={15} className="text-[#FF9900]" />
              <input
                placeholder="Search products..."
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/40"
              />
            </div>

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold mb-1 transition-colors ${
                isActive("/")
                  ? "bg-[#FF9900] text-black"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              Home
            </Link>

            <div className="mt-1 space-y-0.5 overflow-y-auto flex-1">
              {categories.map((cat) => (
                <div key={cat._id}>
                  {/* Category toggle */}
                  <button
                    onClick={() => {
                      setActiveCategoryId(activeCategoryId === cat._id ? null : cat._id);
                      setMobileExpandedSubId(null);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-colors ${
                      activeCategoryId === cat._id
                        ? "bg-[#FF9900]/10 text-[#FF9900] font-semibold"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <ChevronRight
                      size={14}
                      className={`transition-transform ${
                        activeCategoryId === cat._id ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Subcategories */}
                  {activeCategoryId === cat._id && (
                    <div className="ml-4 mt-1 space-y-1">
                      {subCategories
                        .filter((sub) => sub.categoryId?._id === cat._id)
                        .map((sub) => {
                          const subSubs = filteredSubToSubs(sub._id);
                          const isExpanded = mobileExpandedSubId === sub._id;

                          return (
                            <div key={sub._id}>
                              <div className="flex items-center gap-1">
                                <Link
                                  href={`/shop?category=${cat.name}&subcategory=${sub.name}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex-1 block px-3 py-2 rounded-lg text-xs text-gray-800 bg-white hover:bg-gray-100 transition-colors font-medium"
                                >
                                  {sub.name}
                                </Link>
                                {subSubs.length > 0 && (
                                  <button
                                    onClick={() =>
                                      setMobileExpandedSubId(isExpanded ? null : sub._id)
                                    }
                                    className="w-7 h-7 flex items-center justify-center bg-white rounded-lg text-gray-500 hover:text-[#FF9900] hover:bg-orange-50 transition-colors flex-shrink-0"
                                  >
                                    <ChevronRight
                                      size={12}
                                      className={`transition-transform ${
                                        isExpanded ? "rotate-90" : ""
                                      }`}
                                    />
                                  </button>
                                )}
                              </div>

                              {/* Sub-to-subcategories in mobile */}
                              {isExpanded && subSubs.length > 0 && (
                                <div className="ml-3 mt-1 space-y-1">
                                  {subSubs.map((ss) => (
                                    <Link
                                      key={ss._id}
                                      href={`/shop?category=${cat.name}&subcategory=${sub.name}&subsubcategory=${ss.name}`}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-3 py-1.5 rounded-md text-xs text-[#FF9900] bg-orange-50 hover:bg-orange-100 transition-colors font-medium border border-orange-100"
                                    >
                                      {ss.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-semibold hover:border-[#FF9900] hover:text-[#FF9900] transition-colors mt-3"
            >
              <div className="flex items-center gap-2">
                <Store size={16} /><span>Explore</span>
              </div>
              <ChevronRight size={16} />
            </Link>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2 mt-4">
              <div className="flex gap-2">
                <Link
                  href="/Wishlist"
                  onClick={() => {
                    setMobileOpen(false);
                  }}
                  className="relative flex-1 h-10 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-white/80 text-sm hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
                >
                  <Heart size={16} /> Wishlist
                </Link>
                {customer ? (
                  <button
                    onClick={() => { setMobileOpen(false); router.push("/orders"); }}
                    className="flex-1 h-10 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-white/80 text-sm hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
                  >
                    <User size={16} /> Orders
                  </button>
                ) : (
                  <button
                    onClick={() => { setMobileOpen(false); setUserModalOpen(true); }}
                    className="flex-1 h-10 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-white/80 text-sm hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
                  >
                    <User size={16} /> Account
                  </button>
                )}
              </div>

              {customer && (
                <div className="rounded-xl border border-white/10 px-3 py-2">
                  <p className="text-xs text-white/50">Logged in as</p>
                  <p className="text-sm text-white font-semibold truncate">
                    {customer.name}
                  </p>
                  <button
                    onClick={() => { setMobileOpen(false); handleLogout(); }}
                    className="mt-2 text-xs font-semibold text-red-400 hover:text-red-300"
                  >
                    Logout
                  </button>
                </div>
              )}

              <div className="flex gap-2">
                <button
                  onClick={() => { setMobileOpen(false); openVendorModal(); }}
                  className="flex-1 h-10 rounded-xl border border-[#FF9900]/40 flex items-center justify-center gap-2 text-[#FF9900] text-sm font-semibold hover:bg-[#FF9900]/10 transition-colors"
                >
                  <Store size={16} /> Vendor
                </button>
                <Link
                  href="/Addtocard"
                  onClick={() => setMobileOpen(false)}
                  className="relative flex-1 h-10 rounded-xl bg-[#FF9900] flex items-center justify-center gap-2 text-black text-sm font-semibold hover:bg-[#ca8f07] transition-colors"
                >
                  <ShoppingBag size={16} /> Cart
                </Link>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  sendOtp();
                }}
                disabled={whatsappOtpLoading}
                className="h-10 rounded-xl border border-emerald-400/40 flex items-center justify-center gap-2 text-emerald-300 text-sm font-semibold hover:bg-emerald-400/10 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
              >
                <MessageCircle size={16} />
                {whatsappOtpLoading ? "Sending..." : "WhatsApp OTP"}
              </button>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      <AllCategoriesMenu
        open={allMenuOpen}
        onClose={() => setAllMenuOpen(false)}
        categories={categories}
        subCategories={subCategories}
        subToSubCategories={subToSubCategories}
        onVendorClick={openVendorModal}
      />

      {shopToast && (
        <div className="fixed right-4 top-24 z-[10000] w-[min(340px,calc(100vw-32px))] rounded-xl border border-orange-100 bg-white px-4 py-3 shadow-2xl shadow-black/15">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#FF9900]">
              <CheckCircle2 size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-gray-900">{shopToast.title}</p>
              <p className="mt-0.5 text-xs leading-5 text-gray-500">
                {shopToast.message}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VENDOR MODAL */}
      {vendorModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
            onClick={closeVendorModal}
          >
            <div
              className={`bg-white rounded-xl w-full ${
                vendorStep === "form" ? "max-w-[720px]" : "max-w-[520px]"
              } max-h-[90vh] shadow-2xl overflow-hidden`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#1e2a3a] px-7 py-5 flex items-start justify-between">
                <div>
                  <h2 className="text-white text-xl font-bold">Add Vendor</h2>
                  <p className="text-gray-400 text-sm mt-1">Create a new vendor account.</p>
                </div>
                <button
                  type="button"
                  onClick={closeVendorModal}
                  className="text-gray-400 hover:text-white transition mt-1"
                >
                  <X size={20} />
                </button>
              </div>

              {/* STEP 1: Email + OTP together in one form */}
              {vendorStep === "email" && (
                <form
                  onSubmit={otpSent ? handleVerifyVendorOtp : handleSendVendorOtp}
                  className="px-4 sm:px-7 py-5 sm:py-8"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={vendorEmail}
                    onChange={(e) => setVendorEmail(e.target.value)}
                    placeholder="Enter vendor email"
                    disabled={otpSent}
                    className={`w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] ${
                      otpSent ? "bg-gray-100 cursor-not-allowed" : ""
                    }`}
                    required
                  />

                  {otpSent && (
                    <div className="mt-5">
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-gray-700">
                          OTP
                        </label>
                        <button
                          type="button"
                          onClick={handleResendVendorOtp}
                          disabled={vendorOtpLoading}
                          className="text-xs font-semibold text-[#F5A623] hover:underline disabled:opacity-60"
                        >
                          Resend OTP
                        </button>
                      </div>
                      <input
                        type="text"
                        value={vendorOtp}
                        onChange={(e) => setVendorOtp(e.target.value)}
                        placeholder="Enter OTP"
                        className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        OTP sent to <span className="font-semibold">{vendorEmail}</span>
                      </p>
                    </div>
                  )}

                  <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={closeVendorModal}
                      className="px-6 h-11 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    {otpSent && (
                      <button
                        type="button"
                        onClick={() => {
                          setOtpSent(false);
                          setVendorOtp("");
                        }}
                        className="px-6 h-11 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
                      >
                        Change Email
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={vendorOtpLoading}
                      className="px-6 h-11 rounded-lg bg-[#F5A623] hover:bg-[#e09610] text-white text-sm font-semibold flex items-center gap-2 transition disabled:opacity-60"
                    >
                      {vendorOtpLoading
                        ? otpSent
                          ? "Verifying..."
                          : "Sending..."
                        : otpSent
                        ? "Verify OTP"
                        : "Send OTP"}
                    </button>
                  </div>
                </form>
              )}

              {vendorStep === "form" && (
                <form
                  onSubmit={handleCreateVendor}
                  className="px-4 sm:px-7 py-5 sm:py-8 overflow-y-auto max-h-[calc(90vh-90px)]"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {[
                      { label: "Name", name: "name", type: "text", placeholder: "Enter name" },
                      { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
                      { label: "Mobile Number", name: "number", type: "text", placeholder: "Enter mobile number" },
                      { label: "Password", name: "password", type: "password", placeholder: "Enter password" },
                      { label: "Company Name", name: "companyname", type: "text", placeholder: "Enter company name" },
                      { label: "Category", name: "category", type: "text", placeholder: "Enter category" },
                      { label: "City", name: "city", type: "text", placeholder: "Enter city" },
                      { label: "State", name: "state", type: "text", placeholder: "Enter state" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={vendorForm[field.name]}
                          onChange={handleVendorChange}
                          placeholder={field.placeholder}
                          readOnly={field.name === "email"}
                          className={`w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] ${
                            field.name === "email" ? "bg-gray-100 cursor-not-allowed" : ""
                          }`}
                        />
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={vendorForm.pincode}
                        onChange={handleVendorChange}
                        placeholder="Enter pincode"
                        className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={closeVendorModal}
                      className="px-6 h-11 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 h-11 rounded-lg bg-[#F5A623] hover:bg-[#e09610] text-white text-sm font-semibold flex items-center gap-2 transition"
                    >
                      <Store size={16} /> Create Vendor
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>,
          document.body
        )}

      {/* USER LOGIN MODAL */}
      {userModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
            onClick={() => setUserModalOpen(false)}
          >
            <div
              className="bg-white rounded-xl w-full max-w-[440px] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#1e2a3a] px-7 py-5 flex items-start justify-between">
                <div>
                  <h2 className="text-white text-xl font-bold">User Login</h2>
                  <p className="text-gray-400 text-sm mt-1">Login to your user account.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setUserModalOpen(false)}
                  className="text-gray-400 hover:text-white transition mt-1"
                >
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleUserLogin} className="px-5 sm:px-7 py-6 sm:py-8">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
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
                  New here?{" "}
                  <button
                    type="button"
                    onClick={openUserRegister}
                    className="text-[#F5A623] font-semibold hover:underline"
                  >
                    Create an account
                  </button>
                </p>
                <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={openUserRegister}
                    className="px-6 h-11 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
                  >
                    Register
                  </button>
                  <button
                    type="submit"
                    disabled={userLoginLoading}
                    className="px-6 h-11 rounded-lg bg-[#F5A623] hover:bg-[#e09610] text-white text-sm font-semibold flex items-center gap-2 transition disabled:opacity-60"
                  >
                    <User size={16} /> {userLoginLoading ? "Logging in..." : "Login"}
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
            className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
            onClick={() => setUserRegisterOpen(false)}
          >
            <div
              className="bg-white rounded-xl w-full max-w-[480px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#1e2a3a] px-7 py-5 flex items-start justify-between">
                <div>
                  <h2 className="text-white text-xl font-bold">Create Account</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Register your user account to continue.
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

              <form onSubmit={handleUserRegister} className="px-5 sm:px-7 py-6 sm:py-8">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={userRegisterForm.name}
                      onChange={handleUserRegisterChange}
                      placeholder="Enter full name"
                      className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={userRegisterForm.state}
                        onChange={handleUserRegisterChange}
                        placeholder="State"
                        className="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
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
