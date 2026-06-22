"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import {
  Award,
  Check,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";

import CartSidebar from "./CartSidebar";
import {
  FALLBACK_PRODUCT_IMAGE,
  fetchProductById,
  getProductImage,
  getProductMrp,
  getProductPrice,
} from "../apis/products/products";
import { ProductDetailSkeleton } from "../component/PageSkeleton";

const fieldLabel = {
  sku: "SKU",
  brand: "Brand",
};

function uniqueValues(items, key) {
  return [...new Set(items.map((item) => item?.[key]).filter(Boolean))];
}

export default function ProductDetailsPage() {
  const params = useParams();
  const routeId = params?.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVariantId, setSelectedVariantId] = useState("");
  const [selectedImage, setSelectedImage] = useState(FALLBACK_PRODUCT_IMAGE);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window === "undefined") return [];

    const savedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    return Array.isArray(savedItems) ? savedItems : [];
  });
  const [wishlistItems, setWishlistItems] = useState(() => {
    if (typeof window === "undefined") return [];

    const savedItems = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
    return Array.isArray(savedItems) ? savedItems : [];
  });

  useEffect(() => {
    let active = true;

    const loadProduct = async () => {
      if (!routeId) {
        setProduct(null);
        setError("Product not found.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const apiProduct = await fetchProductById(routeId);
        if (!active) return;
        setProduct(apiProduct);
        setError(apiProduct ? "" : "Product not found.");
      } catch (err) {
        if (!active) return;
        console.error("Failed to load product detail", err);
        setProduct(null);
        setError("Product detail could not load. Please try again.");
      } finally {
        if (active) setLoading(false);
      }
    };

    loadProduct();

    return () => {
      active = false;
    };
  }, [routeId]);

  const variants = useMemo(() => product?.variants || [], [product]);
  const selectedVariant = useMemo(() => {
    if (!product) return null;
    return (
      variants.find((variant) => variant._id === selectedVariantId) ||
      product.defaultVariant ||
      null
    );
  }, [product, selectedVariantId, variants]);

  const galleryImages = useMemo(() => {
    if (!product) return [FALLBACK_PRODUCT_IMAGE];

    const rawImages = [
      getProductImage(product, selectedVariant),
      ...(selectedVariant?.images || []),
      product.thumbnailImage,
      ...(product.images || []),
    ].filter(Boolean);

    const resolved = rawImages.map((image) =>
      /^https?:\/\//i.test(image) ? image : getProductImage(product, selectedVariant)
    );

    return [...new Set(resolved)].filter(Boolean);
  }, [product, selectedVariant]);
  const activeImage = galleryImages.includes(selectedImage)
    ? selectedImage
    : galleryImages[0] || FALLBACK_PRODUCT_IMAGE;

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    window.dispatchEvent(new Event("wishlistUpdated"));
  }, [wishlistItems]);

  const price = getProductPrice(product, selectedVariant);
  const mrp = getProductMrp(product, selectedVariant);
  const discount =
    mrp > price && price > 0 ? Math.round(((mrp - price) / mrp) * 100) : 0;
  const stock = selectedVariant?.stock ?? product?.stock ?? 0;
  const colors = uniqueValues(variants, "color");
  const sizes = uniqueValues(variants, "size");

  useEffect(() => {
    if (!product) return;

    setLiked(wishlistItems.some((item) => item.id === product.id));
  }, [product, wishlistItems]);

  const chooseVariant = (matcher) => {
    const nextVariant = variants.find(matcher);
    if (nextVariant) setSelectedVariantId(nextVariant._id);
  };

  const handleAddToCart = () => {
    if (!product) return;

    const variantKey =
      selectedVariant?._id ||
      `${selectedVariant?.color || "default"}-${selectedVariant?.size || "default"}`;
    const cartId = `${product.id}-${variantKey}`;
    const cartProduct = {
      id: cartId,
      productId: product.id,
      variantId: selectedVariant?._id,
      title: product.name,
      name: product.name,
      image: activeImage,
      storage: selectedVariant?.size || product.sku || "",
      size: selectedVariant?.size || "",
      color: selectedVariant?.color || "",
      quantity,
      qty: quantity,
      price,
      mrp,
      sku: product.sku,
      attributes: product.attributes || [],
      variant: selectedVariant || null,
      delivery: "Tomorrow",
    };

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === cartId);

      if (existing) {
        return prev.map((item) =>
          item.id === cartId
            ? {
                ...item,
                quantity: (item.quantity || 1) + quantity,
                qty: (item.qty || item.quantity || 1) + quantity,
              }
            : item
        );
      }

      return [...prev, cartProduct];
    });

    setCartOpen(true);
  };

  const handleToggleWishlist = () => {
    if (!product) return;

    setWishlistItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          categoryName: product.category,
          price,
          rating: product.rating,
          image: activeImage,
        },
      ];
    });
  };

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (error || !product) {
    return (
      <main className="min-h-[70vh] bg-white px-4 py-10">
        <div className="mx-auto max-w-[1300px] text-center text-sm text-red-600">
          {error || "Product not found."}
        </div>
      </main>
    );
  }

  const footerBadges = [
    { icon: RotateCcw, label: "7 Days Replacement" },
    { icon: Truck, label: "Amazon Delivered" },
    { icon: ShieldCheck, label: "Secure Transaction" },
    ...(product.brand ? [{ icon: Award, label: "Top Brand" }] : []),
  ];

  return (
    <>
      <main className="min-h-screen bg-white pb-28 lg:pb-10">
        <div className="mx-auto max-w-[1550px] px-3 py-4 sm:px-4 lg:py-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[52px_minmax(480px,5fr)_minmax(360px,4fr)_minmax(280px,3fr)] lg:gap-2 xl:gap-3">
            <div className="order-1 lg:contents">
              <div className="order-2 h-fit lg:sticky lg:top-[11.5rem] lg:order-1">
                <div className="hidden flex-col gap-2 lg:flex">
                  {galleryImages.map((img) => (
                    <button
                      key={img}
                      onClick={() => setSelectedImage(img)}
                      className={`h-12 w-12 overflow-hidden rounded border bg-white transition ${
                        activeImage === img
                          ? "border-[#E47911] ring-1 ring-[#E47911]"
                          : "border-gray-300 hover:border-[#E47911]"
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="order-1 h-fit lg:sticky lg:top-[11.5rem] lg:order-2">
                <div className="relative bg-white">
                  <div className="flex w-full items-start justify-start overflow-hidden">
                    <img
                      src={activeImage}
                      alt={product.name}
                      onError={(event) => {
                        event.currentTarget.src = FALLBACK_PRODUCT_IMAGE;
                      }}
                      className="block h-auto max-h-[620px] w-full max-w-[640px] object-contain object-left-top"
                    />
                  </div>

                  <div className="px-1 pb-2 lg:hidden">
                    <div className="flex gap-2 overflow-x-auto">
                      {galleryImages.map((img) => (
                        <button
                          key={img}
                          onClick={() => setSelectedImage(img)}
                          className={`h-14 w-14 min-w-[56px] overflow-hidden rounded border bg-white ${
                            activeImage === img
                              ? "border-[#E47911] ring-1 ring-[#E47911]"
                              : "border-gray-300"
                          }`}
                        >
                          <img src={img} alt="" className="h-full w-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-3 lg:pl-4 xl:pl-6">
              <p className="text-sm font-medium text-[#007185] hover:text-[#C7511F] hover:underline">
                {product.brand ? `Visit the ${product.brand} Store` : product.sku}
              </p>

              <h1 className="mt-1 text-[20px] font-semibold leading-7 text-[#0F1111] sm:text-[24px] sm:leading-8">
                {product.name}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-0.5 text-[#FFA41C]">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star key={item} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-[#007185] hover:underline">4.5 ratings</span>
              </div>

              <hr className="my-4 border-gray-200" />

              <div className="border-b border-gray-200 pb-5">
                <div className="flex flex-wrap items-baseline gap-2">
                  {discount > 0 && (
                    <span className="text-lg font-medium text-[#CC0C39]">
                      -{discount}%
                    </span>
                  )}
                  <span className="text-[28px] font-medium text-[#0F1111]">
                    Rs.{price.toLocaleString()}
                  </span>
                </div>

                {mrp > price && (
                  <p className="mt-1 text-sm text-[#565959]">
                    M.R.P:{" "}
                    <span className="line-through">Rs.{mrp.toLocaleString()}</span>
                  </p>
                )}

                <p className="mt-1 text-sm text-[#565959]">Inclusive of all taxes</p>
              </div>

              <div className="grid grid-cols-3 gap-2 border-b border-gray-200 py-5 sm:grid-cols-4">
                {footerBadges.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center text-center">
                    <Icon size={20} className="text-[#565959]" />
                    <span className="mt-1 text-[11px] leading-tight text-[#565959]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {colors.length > 0 && (
                <div className="border-b border-gray-200 py-5">
                  <h3 className="mb-3 text-sm font-semibold text-[#0F1111]">
                    Colour:
                    <span className="ml-1 font-normal text-[#565959]">
                      {selectedVariant?.color}
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => chooseVariant((variant) => variant.color === color)}
                        className={`relative rounded-md border px-4 py-2 text-sm font-medium transition ${
                          selectedVariant?.color === color
                            ? "border-2 border-[#E47911] bg-[#FFF8F0]"
                            : "border-gray-300 hover:border-[#E47911]"
                        }`}
                      >
                        {color}
                        {selectedVariant?.color === color && (
                          <Check
                            size={14}
                            className="absolute -right-1.5 -top-1.5 rounded-full bg-[#E47911] p-0.5 text-white"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {sizes.length > 0 && (
                <div className="border-b border-gray-200 py-5">
                  <h3 className="mb-3 text-sm font-semibold text-[#0F1111]">
                    Size:
                    <span className="ml-1 font-normal text-[#565959]">
                      {selectedVariant?.size}
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() =>
                          chooseVariant(
                            (variant) =>
                              variant.size === size &&
                              (!selectedVariant?.color ||
                                variant.color === selectedVariant.color)
                          )
                        }
                        className={`min-w-[56px] rounded-md border px-3 py-2 text-sm font-medium transition ${
                          selectedVariant?.size === size
                            ? "border-2 border-[#E47911] bg-[#FFF8F0]"
                            : "border-gray-300 hover:border-[#E47911]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-b border-gray-200 py-5">
                <h3 className="mb-3 text-base font-semibold text-[#0F1111]">
                  Product information
                </h3>

                <div className="space-y-2 text-sm">
                  {(product.attributes || []).map((attribute) => (
                    <div
                      key={attribute._id || attribute.name}
                      className="grid grid-cols-[140px_1fr] gap-3 border-b border-gray-100 py-1.5"
                    >
                      <span className="text-[#565959]">{attribute.name}</span>
                      <span className="text-[#0F1111]">{attribute.value}</span>
                    </div>
                  ))}

                  {Object.entries(fieldLabel).map(([key, label]) =>
                    product[key] ? (
                      <div
                        key={key}
                        className="grid grid-cols-[140px_1fr] gap-3 border-b border-gray-100 py-1.5"
                      >
                        <span className="text-[#565959]">{label}</span>
                        <span className="text-[#0F1111]">{product[key]}</span>
                      </div>
                    ) : null
                  )}
                </div>

                {product.description && (
                  <div className="mt-5">
                    <h4 className="mb-2 text-sm font-semibold text-[#0F1111]">
                      About this item
                    </h4>
                    <p className="text-sm leading-6 text-[#0F1111]">
                      {product.description}
                    </p>
                  </div>
                )}
              </div>

              {variants.length > 0 && (
                <div className="py-5">
                  <h3 className="mb-3 text-base font-semibold text-[#0F1111]">
                    All variants
                  </h3>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {variants.map((variant) => (
                      <button
                        key={variant._id}
                        onClick={() => setSelectedVariantId(variant._id)}
                        className={`min-w-[150px] max-w-[170px] flex-shrink-0 rounded-md border p-3 text-left text-sm transition ${
                          selectedVariant?._id === variant._id
                            ? "border-[#E47911] bg-[#FFF8F0]"
                            : "border-gray-200 hover:border-[#E47911]"
                        }`}
                      >
                        <p className="font-medium text-[#0F1111]">
                          {variant.color || "Default"} {variant.size || ""}
                        </p>
                        <p className="text-[#0F1111]">
                          Price: Rs.{Number(variant.sellingPrice || 0).toLocaleString()}
                        </p>
                        {variant.mrp && (
                          <p className="text-[#565959] line-through">
                            MRP: Rs.{Number(variant.mrp).toLocaleString()}
                          </p>
                        )}
                        <p className="text-[#565959]">Stock: {variant.stock ?? 0}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="order-4 h-fit lg:sticky lg:top-[11.5rem]">
              <div className="rounded-lg border border-gray-300 p-4">
                <div className="flex flex-wrap items-baseline gap-2">
                  {discount > 0 && (
                    <span className="text-base font-medium text-[#CC0C39]">
                      -{discount}%
                    </span>
                  )}
                  <span className="text-[26px] font-medium text-[#0F1111]">
                    Rs.{price.toLocaleString()}
                  </span>
                </div>

                <p className="mt-2 text-sm text-[#0F1111]">
                  <span className="font-medium text-[#007600]">FREE delivery</span>{" "}
                  Tomorrow
                </p>

                <p className="mt-4 text-lg font-medium text-[#007600]">
                  {stock > 0 ? "In Stock" : "Out of Stock"}
                </p>

                <div className="mt-4">
                  <p className="mb-1.5 text-sm text-[#0F1111]">Quantity</p>
                  <div className="flex h-9 w-fit items-center justify-between rounded border border-gray-300 bg-[#F0F2F2] px-3">
                    <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>
                      <Minus size={14} />
                    </button>
                    <span className="px-4 text-sm font-medium">{quantity}</span>
                    <button
                      onClick={() =>
                        setQuantity((prev) =>
                          product.maxQuantity ? Math.min(prev + 1, product.maxQuantity) : prev + 1
                        )
                      }
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <button
                    onClick={handleAddToCart}
                    disabled={stock <= 0}
                    className="h-10 w-full rounded-full bg-[#FFD814] text-sm font-medium text-[#0F1111] transition hover:bg-[#F7CA00] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Add to Cart
                  </button>
                  <button className="h-10 w-full rounded-full bg-[#FFA41C] text-sm font-medium text-[#0F1111] transition hover:bg-[#FA8900]">
                    Buy Now
                  </button>
                  <button
                    onClick={handleToggleWishlist}
                    className={`flex h-10 w-full items-center justify-center gap-1.5 rounded-full border text-sm font-medium transition ${
                      liked
                        ? "border-[#E47911] bg-[#FFF8F0] text-[#E47911]"
                        : "border-gray-300 text-[#0F1111] hover:bg-gray-50"
                    }`}
                  >
                    <Heart size={14} fill={liked ? "currentColor" : "none"} />
                    {liked ? "Added to Wish List" : "Add to Wish List"}
                  </button>
                </div>

                <hr className="my-4 border-gray-200" />

                <div className="space-y-2 text-sm">
                  <p className="text-[#565959]">
                    Delivered by{" "}
                    <span className="text-[#0F1111]">Amazon</span>
                  </p>
                  {product.brand && (
                    <p className="text-[#565959]">
                      Sold by <span className="text-[#007185]">{product.brand}</span>
                    </p>
                  )}
                  <p className="text-[#565959]">
                    Payment{" "}
                    <span className="text-[#007185]">Secure transaction</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 z-50 flex w-full gap-3 border-t border-gray-200 bg-white p-3 backdrop-blur-md lg:hidden">
          <button
            onClick={handleAddToCart}
            disabled={stock <= 0}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-black text-sm font-medium text-white transition hover:bg-zinc-800 disabled:opacity-60"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
          <button className="h-12 flex-1 rounded-xl bg-[#FF9900] text-sm font-medium text-black transition hover:bg-[#e68a00]">
            Buy Now
          </button>
        </div>
      </main>

      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
}
