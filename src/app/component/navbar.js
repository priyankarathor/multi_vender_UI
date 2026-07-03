"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { loginUser } from "../apis/login/login";
import {
  registerVendor,
  resendVendorOtp,
  sendVendorOtp,
  verifyVendorOtp,
} from "../apis/register/register";
import { saveCustomerSession } from "../apis/customer/customer";
import { syncDeviceCartToCustomer } from "../apis/cart/cart";
import { syncDeviceWishlistToCustomer } from "../apis/wishlist/wishlist";
import { getCategories } from "../apis/category/category";
import { getSubCategories } from "../apis/subcategory/subcategory";
import { getSubToSubCategories } from "../apis/subtosubcategory/subtosubcategory";
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
  MessageCircle,
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

const WHATSAPP_OTP_API_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_OTP_API_URL || "/api/send-whatsapp-otp";

const getSafeWhatsAppUrl = (url) => {
  if (!url) return "";

  try {
    return new URL(url).toString();
  } catch {
    return new URL(url, window.location.origin).toString();
  }
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
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
  const [whatsappOtpLoading, setWhatsappOtpLoading] = useState(false);

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

  useEffect(() => {
    const updateWishlistCount = () => {
      const savedItems = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
      const currentCount = Array.isArray(savedItems) ? savedItems.length : 0;
      const seenCountRaw = localStorage.getItem("wishlistSeenCount");

      if (seenCountRaw == null) {
        localStorage.setItem("wishlistSeenCount", String(currentCount));
        setWishlistCount(0);
        return;
      }

      const seenCount = Number(seenCountRaw) || 0;
      setWishlistCount(Math.max(0, currentCount - seenCount));
    };

    updateWishlistCount();
    window.addEventListener("wishlistUpdated", updateWishlistCount);
    window.addEventListener("storage", updateWishlistCount);

    return () => {
      window.removeEventListener("wishlistUpdated", updateWishlistCount);
      window.removeEventListener("storage", updateWishlistCount);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/Wishlist") return;

    const timer = window.setTimeout(() => {
      const savedItems = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
      const currentCount = Array.isArray(savedItems) ? savedItems.length : 0;
      localStorage.setItem("wishlistSeenCount", String(currentCount));
      setWishlistCount(0);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  const clearWishlistBadge = () => {
    const savedItems = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
    const currentCount = Array.isArray(savedItems) ? savedItems.length : 0;
    localStorage.setItem("wishlistSeenCount", String(currentCount));
    setWishlistCount(0);
  };

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

  const visibleCategoryId = previewCategoryId || activeCategoryId;

  const filteredSubs = visibleCategoryId
    ? subCategories.filter((sub) => sub.categoryId?._id === visibleCategoryId)
    : [];

  const filteredSubToSubs = (subId) =>
    subToSubCategories.filter(
      (s) => s.subcategoryId === subId || s.subcategoryId?._id === subId
    );

  const [userForm, setUserForm] = useState({ email: "", password: "" });

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

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(userForm);
      const cid = saveCustomerSession(res.data);
      try {
        await Promise.all([
          syncDeviceCartToCustomer(cid),
          syncDeviceWishlistToCustomer(cid),
        ]);
      } catch (cartError) {
        console.error("Cart/Wishlist cid sync failed", cartError);
      }
      alert("User Login Successfully!");
      setUserForm({ email: "", password: "" });
      setUserModalOpen(false);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
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

  const sendOtp = async () => {
    try {
      setWhatsappOtpLoading(true);
      const res = await axios.post(WHATSAPP_OTP_API_URL, {
        number: "7338694959",
      });

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
                className="flex h-10 w-full max-w-[720px] rounded-[5px] border-2 border-transparent bg-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-200 focus-within:border-[#FF9900]"
              >
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search Jajot.com"
                  className="min-w-0 flex-1 rounded-l-[3px] bg-white px-4 text-sm font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="flex w-12 shrink-0 items-center justify-center rounded-r-[3px] bg-[#febd69] text-[#111] transition hover:bg-[#f3a847] active:bg-[#e68a00]"
                  aria-label="Search"
                >
                  <Search size={21} />
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
                onClick={clearWishlistBadge}
                className="relative w-9 h-9 sm:w-10 sm:h-10 border border-white/10 rounded-xl flex items-center justify-center text-white hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
              >
                <Heart size={18} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-[#FF9900] text-black text-[11px] font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setUserModalOpen(true)}
                className="w-9 h-9 sm:w-10 sm:h-10 border border-white/10 rounded-xl flex items-center justify-center text-white hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
              >
                <User size={18} />
              </button>
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
                className="md:hidden h-9 sm:h-10 px-3 sm:px-4 bg-[#FF9900] rounded-xl flex items-center justify-center gap-2 text-black font-bold text-sm hover:bg-[#ca8f07] transition-colors"
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
              className="flex items-center gap-2 px-4 py-2 bg-[#FF9900] text-black rounded-xl font-semibold text-sm hover:bg-[#ca8f07] transition-colors whitespace-nowrap ml-auto"
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
                    clearWishlistBadge();
                    setMobileOpen(false);
                  }}
                  className="flex-1 h-10 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-white/80 text-sm hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
                >
                  <Heart size={16} /> Wishlist
                </Link>
                <button
                  onClick={() => { setMobileOpen(false); setUserModalOpen(true); }}
                  className="flex-1 h-10 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-white/80 text-sm hover:border-[#FF9900] hover:text-[#FF9900] transition-colors"
                >
                  <User size={16} /> Account
                </button>
              </div>
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
                  className="flex-1 h-10 rounded-xl bg-[#FF9900] flex items-center justify-center gap-2 text-black text-sm font-semibold hover:bg-[#ca8f07] transition-colors"
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
                    className="px-6 h-11 rounded-lg bg-[#F5A623] hover:bg-[#e09610] text-white text-sm font-semibold flex items-center gap-2 transition"
                  >
                    <User size={16} /> Login
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
