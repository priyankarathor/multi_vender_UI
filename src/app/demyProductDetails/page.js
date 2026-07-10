"use client";

import ProductDetailsPage from "../ProductDetailpage/productdetails";
import { normalizeDummyProduct, rawDummyProduct } from "../demy/demyProduct";

export default function DummyVariantTestPage() {
  const dummyProduct = normalizeDummyProduct(rawDummyProduct);

  return (
    <ProductDetailsPage
      initialProduct={dummyProduct}
      initialProductId={dummyProduct.id}
    />
  );
}
