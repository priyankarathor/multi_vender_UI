"use client";

import { Suspense } from "react";
import ProductPage from "./porductpage";
import ShopHero from "./ShopHero";
import PageSkeleton from "../component/PageSkeleton";

export default function ShopPage() {
  return (
    <Suspense fallback={<PageSkeleton type="grid" />}>
       <ShopHero />
      <ProductPage />
    </Suspense>
  );
}
