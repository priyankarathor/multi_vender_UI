"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import {
  fallbackBanner,
  fetchBanners,
  getBannersForCategory,
  hasBannerForCategory,
} from "../apis/banners/banners";

const fallbackSlides = [
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
    title: "Smart Watch Series",
    desc: "Minimal design. Maximum performance.",
    price: "₹999",
    tag: "NEW DROP",
  },
  {
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop",
    title: "Noise Cancelling Audio",
    desc: "Pure sound. Zero distractions.",
    price: "₹1,499",
    tag: "TRENDING",
  },
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1400&auto=format&fit=crop",
    title: "Urban Streetwear",
    desc: "Designed for everyday confidence.",
    price: "₹799",
    tag: "HOT DEAL",
  },
];

function getOfferText(discountPercentage) {
  return discountPercentage > 0 ? `${discountPercentage}% OFF` : "HOT DEAL";
}

function createSlidesFromBanners(banners) {
  return banners.map((banner) => ({
    id: banner.id,
    img: banner.image,
    title: banner.title,
    desc: `Special banner offer for the ${banner.categoryName} collection.`,
    price: getOfferText(banner.discountPercentage),
    tag: getOfferText(banner.discountPercentage),
    categoryName: banner.categoryName,
  }));
}

export default function ShopHero() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";

  const [banners, setBanners] = useState([fallbackBanner]);
  const [index, setIndex] = useState(0);

  const bannerSlides = useMemo(() => {
    return createSlidesFromBanners(
      getBannersForCategory(banners, selectedCategory)
    );
  }, [banners, selectedCategory]);

  const hasCategoryBanner = useMemo(
    () => hasBannerForCategory(banners, selectedCategory),
    [banners, selectedCategory]
  );

  const slides = bannerSlides.length > 0 ? bannerSlides : fallbackSlides;

  useEffect(() => {
    let isMounted = true;

    fetchBanners()
      .then((items) => {
        if (!isMounted) return;
        setBanners(items);
        setIndex(0);
      })
      .catch(() => {
        if (!isMounted) return;
        setBanners([fallbackBanner]);
        setIndex(0);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const t = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 4000);

    return () => clearInterval(t);
  }, [slides.length]);

  const activeIndex = index % slides.length;
  const current = slides[activeIndex];

  return (
    <section className="relative overflow-hidden rounded-2xl bg-white border border-black/5 shadow-[0_15px_60px_rgba(0,0,0,0.08)]">

      {/* Soft Luxury Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.04),transparent_25%)]" />

      <div className="relative z-10 grid items-center gap-0 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="px-6 py-7 md:px-8 lg:px-12 lg:py-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-medium text-black/60 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            {selectedCategory === "All"
              ? "Premium Shopping Experience"
              : hasCategoryBanner
                ? `${selectedCategory} Banner Offer`
                : `${selectedCategory} Default Banner`}
          </div>

          <h1 className="mt-3 text-[30px] font-black leading-[1.05] tracking-[-1px] text-black md:text-[44px]">
            {selectedCategory === "All" ? "Shop the" : "Shop"}
            <br />
            <span className="text-black/30">
              {selectedCategory === "All" ? "Future Style" : selectedCategory}
            </span>
          </h1>

          <p className="mt-3 max-w-lg text-[13px] leading-6 text-black/55">
            {current.desc}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03]"
            >
              {selectedCategory === "All" ? "Start Exploring" : `Explore ${selectedCategory}`}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/deals"
              className="rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-black/70 backdrop-blur-xl transition hover:bg-white"
            >
              View Deals
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-5 flex flex-wrap gap-7 text-black">
            <div>
              <h3 className="text-xl font-black">12K+</h3>
              <p className="text-sm text-black/50">Products</p>
            </div>

            <div>
              <h3 className="flex items-center gap-1 text-xl font-black">
                4.9 <Star className="h-4 w-4 fill-black" />
              </h3>
              <p className="text-sm text-black/50">Rating</p>
            </div>

            <div>
              <h3 className="text-xl font-black">24H</h3>
              <p className="text-sm text-black/50">Delivery</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - PREMIUM SLIDER */}
        <div className="relative h-full min-h-[240px] overflow-hidden md:min-h-[310px] lg:min-h-[470px]">

          {/* main card */}
          <div className="relative h-full overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative"
              >
                <div className="relative h-[240px] w-full overflow-hidden md:h-[310px] lg:h-[470px]">
                <Image
                  src={current.img}
                  className="object-cover"
                  alt={current.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 45vw"
                />
                </div>

                {/* soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/5 lg:via-transparent lg:to-black/25" />

                {/* tag */}
                <div className="absolute right-5 top-5 rounded-full bg-black/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                  {current.tag}
                </div>

                {/* bottom card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/40 bg-white/90 px-4 py-3 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.18)]">

                  <p className="text-xs tracking-widest text-black/50">
                    FEATURED PRODUCT
                  </p>

                  <div className="mt-2 flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-black text-black">
                        {current.title}
                      </h3>
                      <p className="text-sm text-black/50">
                        {current.categoryName || selectedCategory}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-black/40">Offer</p>
                      <h3 className="text-xl font-black">{current.price}</h3>
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* dots */}
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all ${
                  i === activeIndex
                    ? "h-2 w-8 rounded-full bg-black"
                    : "h-2 w-2 rounded-full bg-black/20"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
