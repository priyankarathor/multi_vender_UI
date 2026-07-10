const API_BASE = "https://amazon-multi-vendor-3.onrender.com/api";

export const fallbackBanner = {
  _id: "fallback",
  title: "Next Gen Shopping Experience",
  image_url:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
  vendorId: { name: "Concentics", companyname: "Jajot" },
  categoryId: { name: "Trending" },
  discount_percentage: 50,
};

export async function fetchBanners() {
  const res = await fetch(`${API_BASE}/banners?session_type=home_page`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch banners");
  }

  const data = await res.json();

  if (!data.success || !Array.isArray(data.data)) {
    throw new Error("Invalid banners response");
  }

  // sirf active banners hi dikhane hai
  return data.data.filter((banner) => banner.is_active);
}

export function getBannersForCategory(banners, fallback) {
  if (!banners || banners.length === 0) {
    return [fallback];
  }
  return banners;
}

// banner ke andar hi categoryId.name mojood hai, usko clean karke nikal do
export function getCategoryNameFromBanner(banner) {
  const categoryName =
    banner?.categoryId?.name || banner?.categoryName || banner?.category;

  return typeof categoryName === "string" ? categoryName.trim() : "";
}

// banner ke andar hi vendorId._id mojood hai, usko nikal do
export function getVendorIdFromBanner(banner) {
  const vendorId = banner?.vendorId?._id || banner?.vendorId;

  return typeof vendorId === "string" ? vendorId.trim() : "";
}