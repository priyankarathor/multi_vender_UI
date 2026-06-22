export const PRODUCT_API_URL =
  "https://amazon-multi-vendor-3.onrender.com/api/products";

export const FALLBACK_PRODUCT_IMAGE =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop";

const productTypeImages = [
  {
    match: ["t-shirt", "shirt", "cotton"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    match: ["iphone", "phone", "mobile"],
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    match: ["dell", "laptop"],
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
];

export function getProductsFromPayload(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.products)) return payload.products;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

export function getProductFromPayload(payload) {
  if (payload?.product) return payload.product;
  if (payload?.data && !Array.isArray(payload.data)) return payload.data;
  return payload;
}

export function getProductImage(product, variant) {
  const images = [
    variant?.images?.[0],
    product?.thumbnailImage,
    product?.images?.[0],
  ].filter(Boolean);

  const directImage = images.find((image) => /^https?:\/\//i.test(image));
  if (directImage) return directImage;

  const name = String(product?.productName || "").toLowerCase();
  const matched = productTypeImages.find((item) =>
    item.match.some((keyword) => name.includes(keyword))
  );

  return matched?.image || FALLBACK_PRODUCT_IMAGE;
}

export function getDefaultVariant(product) {
  return Array.isArray(product?.variants) && product.variants.length > 0
    ? product.variants[0]
    : null;
}

export function getProductPrice(product, variant = getDefaultVariant(product)) {
  return Number(
    variant?.sellingPrice || product?.salePrice || product?.price || 0
  );
}

export function getProductMrp(product, variant = getDefaultVariant(product)) {
  return Number(variant?.mrp || product?.price || product?.salePrice || 0);
}

export function normalizeProduct(product) {
  const variant = getDefaultVariant(product);
  const price = getProductPrice(product, variant);
  const mrp = getProductMrp(product, variant);

  return {
    ...product,
    id: product?._id || product?.id || product?.sku,
    name: product?.productName || product?.name || "Product",
    category:
      product?.category?.name ||
      product?.categoryName ||
      product?.categoryId ||
      "Products",
    price,
    mrp,
    discount:
      product?.discount ||
      (mrp > price && price > 0 ? Math.round(((mrp - price) / mrp) * 100) : 0),
    rating: product?.rating || 4.5,
    image: getProductImage(product, variant),
    defaultVariant: variant,
  };
}

export async function fetchProducts() {
  const response = await fetch(PRODUCT_API_URL);
  if (!response.ok) {
    throw new Error("Failed to load products");
  }

  const payload = await response.json();
  return getProductsFromPayload(payload).map(normalizeProduct).filter((p) => p.id);
}

export async function fetchProductById(id) {
  const response = await fetch(`${PRODUCT_API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to load product");
  }

  const payload = await response.json();
  const product = getProductFromPayload(payload);
  return product ? normalizeProduct(product) : null;
}
