import { BASE_URL } from "../baseurl/baseurl";

export const EXTERNAL_BANNERS_API_URL = `${BASE_URL}/banners`;
export const BANNERS_API_URL = EXTERNAL_BANNERS_API_URL;

export const FALLBACK_BANNER_IMAGE =
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop";

const fallbackBanner = {
  id: "fallback-banner",
  title: "Nike T-Shirts - 40% OFF",
  image: FALLBACK_BANNER_IMAGE,
  discountPercentage: 40,
  categoryName: "Fashion",
  vendorName: "Priyanka Sharma",
  companyName: "ABC Pvt Ltd",
  isActive: true,
};

function getSafeBannerImage(image) {
  if (!image || !/^https?:\/\//i.test(image)) return FALLBACK_BANNER_IMAGE;

  try {
    const url = new URL(image);

    if (url.hostname === "yourcdn.com") {
      return FALLBACK_BANNER_IMAGE;
    }

    return image;
  } catch {
    return FALLBACK_BANNER_IMAGE;
  }
}

export function normalizeBannerCategory(category) {
  return String(category || "").trim().toLowerCase();
}

export function getDefaultBannerForCategory(categoryName) {
  const safeCategory = String(categoryName || "").trim();

  if (!safeCategory || safeCategory.toLowerCase() === "all") {
    return fallbackBanner;
  }

  return {
    ...fallbackBanner,
    id: `default-${safeCategory.toLowerCase().replace(/\s+/g, "-")}-banner`,
    title: `${safeCategory} Deals`,
    categoryName: safeCategory,
  };
}

export function getBannersForCategory(banners, categoryName) {
  const selectedCategory = normalizeBannerCategory(categoryName);

  if (!selectedCategory || selectedCategory === "all") {
    return [fallbackBanner];
  }

  const matchingBanners = banners.filter(
    (banner) =>
      normalizeBannerCategory(banner?.categoryName) === selectedCategory
  );

  return matchingBanners.length > 0
    ? matchingBanners
    : [getDefaultBannerForCategory(categoryName)];
}

export function hasBannerForCategory(banners, categoryName) {
  const selectedCategory = normalizeBannerCategory(categoryName);

  if (!selectedCategory || selectedCategory === "all") {
    return false;
  }

  return banners.some(
    (banner) =>
      normalizeBannerCategory(banner?.categoryName) === selectedCategory
  );
}

export function getBannersFromPayload(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.banners)) return payload.banners;
  return [];
}

export function normalizeBanner(banner) {
  return {
    ...banner,
    id: banner?._id || banner?.id,
    title: banner?.title || "Special Offer",
    image: getSafeBannerImage(banner?.image_url || banner?.image),
    discountPercentage: Number(
      banner?.discount_percentage || banner?.discountPercentage || 0
    ),
    categoryName:
      banner?.categoryId?.name ||
      banner?.category?.name ||
      banner?.categoryName ||
      "Deals",
    vendorName:
      banner?.vendorId?.name ||
      banner?.vendor?.name ||
      banner?.vendorName ||
      "Amazon Store",
    companyName:
      banner?.vendorId?.companyname ||
      banner?.vendor?.companyname ||
      banner?.companyName,
    isActive: banner?.is_active !== false,
  };
}

export async function fetchBanners() {
  const response = await fetch(BANNERS_API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to load banners");
  }

  const payload = await response.json();
  const banners = getBannersFromPayload(payload)
    .map(normalizeBanner)
    .filter((banner) => banner.id && banner.isActive);

  return banners.length > 0 ? banners : [fallbackBanner];
}

export { fallbackBanner };
