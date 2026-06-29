import { BASE_URL } from "../baseurl/baseurl";

export const PRODUCT_API_URL = `${BASE_URL}/products`;

export const FALLBACK_PRODUCT_IMAGE =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop";

export function getProductsFromPayload(payload) {
  const products = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.products)
      ? payload.products
      : Array.isArray(payload?.data)
        ? payload.data
        : [];

  if (!Array.isArray(payload?.variants) || payload.variants.length === 0) {
    return products;
  }

  return products.map((product) => {
    const productId = product?._id || product?.id;
    const productVariants = payload.variants.filter(
      (variant) => String(variant?.productId) === String(productId)
    );

    if (productVariants.length === 0) return product;

    return {
      ...product,
      variants:
        Array.isArray(product?.variants) && product.variants.length > 0
          ? product.variants
          : productVariants,
    };
  });
}

export function getProductFromPayload(payload) {
  if (payload?.product) {
    return {
      ...payload.product,
      variants:
        Array.isArray(payload.product?.variants) &&
        payload.product.variants.length > 0
          ? payload.product.variants
          : payload.variants || [],
    };
  }
  if (payload?.data && !Array.isArray(payload.data)) return payload.data;
  return payload;
}

export function getProductDescription(product) {
  const description = product?.description;

  if (typeof description === "string") return description;
  if (typeof description?.productDescription === "string") {
    return description.productDescription;
  }

  return "";
}

export function getProductBulletPoints(product) {
  const bulletPoints = product?.description?.bulletPoints;
  return Array.isArray(bulletPoints)
    ? bulletPoints.filter((point) => typeof point === "string" && point.trim())
    : [];
}

export function getProductImage(product, variant) {
  const images = [
    variant?.images?.[0],
    product?.thumbnailImage,
    product?.images?.[0],
  ].filter(Boolean);

  return images.find(isValidProductImageUrl) || FALLBACK_PRODUCT_IMAGE;
}

export function isValidProductImageUrl(image) {
  if (/^data:image\/(png|jpe?g|webp|gif);base64,/i.test(image)) return true;
  if (!/^https?:\/\//i.test(image)) return false;

  try {
    const url = new URL(image);
    return url.hostname !== "example.com";
  } catch {
    return false;
  }
}

function getVariantAttribute(variant, names) {
  const normalizedNames = Array.isArray(names) ? names : [names];
  const attribute = variant?.attributes?.find(
    (item) =>
      normalizedNames.includes(String(item?.name || "").toLowerCase())
  );

  return attribute?.value || "";
}

function formatAttributeLabel(key) {
  return String(key || "")
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
}

function getDetailAttributes(product) {
  const attributeMeta = Array.isArray(product?.attributesMeta)
    ? product.attributesMeta.map((attribute) => ({
        _id: attribute?._id || attribute?.name,
        name: attribute?.name,
        value: attribute?.values,
      }))
    : [];

  const detailGroups = [
    product?.productDetails,
    product?.dimensions,
    product?.packaging,
    product?.safetyCompliance,
    product?.giftOptions,
  ].filter(Boolean);

  const productDetails = detailGroups.flatMap((group) =>
    Object.entries(group)
      .filter(([, value]) => {
        if (value == null || value === "") return false;
        if (Array.isArray(value)) return value.length > 0;
        return typeof value !== "object";
      })
      .map(([key, value]) => ({
        _id: key,
        name: formatAttributeLabel(key),
        value,
      }))
  );

  return [...attributeMeta, ...productDetails].filter(
    (attribute) => attribute.name && attribute.value != null
  );
}

export function normalizeVariant(variant) {
  if (!variant) return null;

  const sellingPrice =
    variant.sellingPrice ||
    variant.offer?.sellingPrice ||
    variant.offer?.salePrice ||
    variant.salePrice ||
    variant.price ||
    0;
  const mrp =
    variant.mrp ||
    variant.offer?.mrp ||
    variant.offer?.price ||
    variant.price ||
    0;

  return {
    ...variant,
    color: variant.color || getVariantAttribute(variant, ["color", "colour"]),
    size: variant.size || getVariantAttribute(variant, ["size", "storage"]),
    mrp,
    sellingPrice,
    salePrice: variant.salePrice || variant.offer?.salePrice || sellingPrice,
    stock: variant.stock ?? variant.inventory?.stock ?? variant.inventory?.quantity ?? 0,
    maxQuantity:
      variant.maxQuantity ||
      variant.maximumOrderQuantity ||
      variant.offer?.maximumOrderQuantity,
  };
}

export function getDefaultVariant(product) {
  return Array.isArray(product?.variants) && product.variants.length > 0
    ? normalizeVariant(product.variants[0])
    : null;
}

export function getProductPrice(product, variant = getDefaultVariant(product)) {
  return Number(
    variant?.salePrice ||
      variant?.offer?.salePrice ||
      variant?.sellingPrice ||
      variant?.offer?.sellingPrice ||
      variant?.price ||
      product?.salePrice ||
      product?.price ||
      0
  );
}

export function getProductMrp(product, variant = getDefaultVariant(product)) {
  return Number(
    variant?.mrp ||
      variant?.offer?.mrp ||
      variant?.offer?.price ||
      variant?.price ||
      product?.price ||
      product?.salePrice ||
      0
  );
}

export function normalizeProduct(product) {
  const normalizedVariants = Array.isArray(product?.variants)
    ? product.variants.map(normalizeVariant).filter(Boolean)
    : [];
  const variant = normalizedVariants[0] || null;
  const price = getProductPrice(product, variant);
  const mrp = getProductMrp(product, variant);
  const attributes =
    Array.isArray(product?.attributes) && product.attributes.length > 0
      ? product.attributes
      : getDetailAttributes(product);

  return {
    ...product,
    variants: normalizedVariants,
    id: product?._id || product?.id || product?.sku,
    name: product?.productName || product?.name || "Product",
    description: getProductDescription(product),
    bulletPoints: getProductBulletPoints(product),
    brand: product?.brand || product?.brandName,
    sku: product?.sku || product?.externalProductId || product?.modelNumber,
    category:
      product?.category?.name ||
      product?.categoryName ||
      product?.categoryId ||
      "Products",
    attributes,
    price,
    mrp,
    discount:
      product?.discount ||
      (mrp > price && price > 0 ? Math.round(((mrp - price) / mrp) * 100) : 0),
    rating: product?.rating || 4.5,
    stock:
      variant?.stock ??
      product?.stock ??
      product?.inventory?.stock ??
      product?.quantity ??
      null,
    image: getProductImage(product, variant),
    defaultVariant: variant,
  };
}

export async function fetchProducts() {
  const response = await fetch(PRODUCT_API_URL, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to load products");
  }

  const payload = await response.json();
  const products = getProductsFromPayload(payload);
  const enrichedProducts = await Promise.all(
    products.map(async (product) => {
      if (Array.isArray(product?.variants) && product.variants.length > 0) {
        return product;
      }

      const productId = product?._id || product?.id;
      if (!productId) return product;

      try {
        const detailResponse = await fetch(`${PRODUCT_API_URL}/${productId}`, {
          cache: "no-store",
        });
        if (!detailResponse.ok) return product;

        const detailPayload = await detailResponse.json();
        const detailedProduct = getProductFromPayload(detailPayload);

        return detailedProduct || product;
      } catch {
        return product;
      }
    })
  );

  return enrichedProducts.map(normalizeProduct).filter((p) => p.id);
}

export async function fetchProductById(id) {
  if (!id) return null;

  const response = await fetch(`${PRODUCT_API_URL}/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to load product");
  }

  const payload = await response.json();
  const product = getProductFromPayload(payload);
  if (!product) return null;

  return normalizeProduct(product);
}
