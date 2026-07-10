"use client";

import ProductDetailsPage from "../ProductDetailpage/productdetails";
import { normalizeDummyProduct, rawDummyProduct } from "../apis/products/dummyProduct";

export default function DummyVariantTestPage() {
  const dummyProduct = normalizeDummyProduct(rawDummyProduct);

  return (
    <ProductDetailsPage
      initialProduct={dummyProduct}
      initialProductId={dummyProduct.id}
    />
  );
}
