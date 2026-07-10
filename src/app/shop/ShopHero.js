"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

// import {
//   fallbackBanner,
//   fetchBanners,
//   getBannersForCategory,
//   hasBannerForCategory,
// } from "../apis/banners/banners";

// const fallbackSlides = [
//   {
//     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
//     title: "Smart Watch Series",
//     desc: "Minimal design. Maximum performance.",
//     price: "₹999",
//     tag: "NEW DROP",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop",
//     title: "Noise Cancelling Audio",
//     desc: "Pure sound. Zero distractions.",
//     price: "₹1,499",
//     tag: "TRENDING",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1400&auto=format&fit=crop",
//     title: "Urban Streetwear",
//     desc: "Designed for everyday confidence.",
//     price: "₹799",
//     tag: "HOT DEAL",
//   },
// ];

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
    <section className="relative mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">

      {/* faint repeating "% OFF" background text */}
      <div className="pointer-events-none absolute inset-0 flex flex-wrap content-center gap-x-10 overflow-hidden opacity-[0.04]">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="whitespace-nowrap text-6xl font-black text-black">
            50-80% OFF .
          </span>
        ))}
      </div>

      <div className="relative z-10 grid items-center gap-4 px-6 py-8 md:px-10 lg:grid-cols-[auto_1fr_auto] lg:gap-8 lg:px-12 lg:py-10">

        {/* LEFT — sale badge stack */}
        <div className="flex shrink-0 flex-col gap-1.5">
          <div className="flex items-center gap-1.5 rounded-md bg-[#FF9900] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#0F1111]">
            <Sparkles className="h-3.5 w-3.5" />
            Mega
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#0F1111]">
            {selectedCategory === "All" ? "Savings Sale" : selectedCategory}
          </div>
          <div className="rounded-md bg-zinc-100 px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wider text-[#0F1111]">
            Live now
          </div>
        </div>

        {/* CENTER — product image + headline */}
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:gap-8 lg:text-left">

          <div className="relative h-[160px] w-[160px] shrink-0 overflow-hidden rounded-2xl border-4 border-black/10 md:h-[200px] md:w-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={current.img}
                  className="object-cover"
                  alt={current.title}
                  fill
                  sizes="200px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <h1 className="text-2xl font-black uppercase leading-tight text-[#0F1111] md:text-4xl">
              {selectedCategory === "All" ? "Shop the Future Style" : `Shop ${selectedCategory}`}
            </h1>
            <p className="mt-2 max-w-md text-sm font-medium text-zinc-700">
              {current.desc}
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 rounded-full bg-[#FF9900] px-6 py-2.5 text-sm font-black uppercase text-[#0F1111] transition-transform hover:scale-105 hover:bg-[#febd69]"
              >
                {selectedCategory === "All" ? "Start Exploring" : `Explore ${selectedCategory}`}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/deals"
                className="rounded-full border-2 border-black/20 px-6 py-2.5 text-sm font-bold text-[#0F1111] transition-colors hover:bg-zinc-100"
              >
                View Deals
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — rotated offer badge */}
        <div className="flex shrink-0 flex-col items-center gap-2">
          <div className="-rotate-3 rounded-2xl border-4 border-[#FF9900] bg-white px-6 py-3 text-center shadow-sm">
            <p className="text-2xl font-black text-[#0F1111] md:text-3xl">{current.price}</p>
          </div>
          <div className="rotate-2 rounded-full bg-[#FF9900] px-5 py-1.5 text-xs font-black uppercase text-[#0F1111]">
            Off
          </div>
          <p className="text-center text-xs font-bold text-black/60">
            {hasCategoryBanner ? current.tag : "Offers you can't resist"}
          </p>
        </div>

      </div>

      {/* bottom marquee strip */}
      <div className="relative z-10 overflow-hidden border-t-2 border-dashed border-white/20 bg-[#FF9900] py-2">
        <div className="shop-hero-marquee flex gap-8 whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="flex items-center gap-2 text-sm font-black text-[#0F1111]">
              Shop now <ArrowRight className="h-4 w-4" />
            </span>
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex ? "w-6 bg-[#0F1111]" : "w-1.5 bg-black/25"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
