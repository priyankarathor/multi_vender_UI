"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// yahan jitne offers chahiye utne add kar do - automatically slide hote rahenge
const banners = [
  {
    eventLabel: "Festive Day",
    dateRange: "4 - 6 July",
    poweredBy: "Powered by SAMSUNG Galaxy",
    discount: "Up to 65% off",
    collectionName: "Mobile Accessories",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1200&auto=format&fit=crop",
    bg: "from-[#1f3fae] via-[#2451d6] to-[#3a6cf0]",
  },
  {
    eventLabel: "Mega Sale",
    dateRange: "10 - 12 July",
    poweredBy: "Powered by Apple",
    discount: "Up to 50% off",
    collectionName: "Electronics & Gadgets",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    bg: "from-[#7a1f3d] via-[#9c2c4f] to-[#c2436a]",
  },
  {
    eventLabel: "Style Days",
    dateRange: "15 - 18 July",
    poweredBy: "Powered by Nike",
    discount: "Up to 40% off",
    collectionName: "Fashion & Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    bg: "from-[#0f4c3a] via-[#13684f] to-[#1a8a68]",
  },
];

// niche dikhne wali circular category icons - apni categories daal do
const categoryIcons = [
  {
    label: "Headsets",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop",
    link: "/shop?category=Audio",
  },
  {
    label: "Charging accessories",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=300&auto=format&fit=crop",
    link: "/shop?category=Accessories",
  },
  {
    label: "Cases and covers",
    image:
      "https://images.unsplash.com/photo-1592286927505-1def25115558?q=80&w=300&auto=format&fit=crop",
    link: "/shop?category=Mobiles",
  },
  {
    label: "Screen protectors",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=300&auto=format&fit=crop",
    link: "/shop?category=Mobiles",
  },
  {
    label: "Mobile holders",
    image:
      "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=300&auto=format&fit=crop",
    link: "/shop?category=Accessories",
  },
];

export default function FestiveOfferBanner() {
  const [index, setIndex] = useState(0);

  // auto slide har 4 second me
  useEffect(() => {
    if (banners.length <= 1) return undefined;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const banner = banners[index];

  return (
    <section className="mt-6 mx-auto max-w-[900px]">
      {/* MAIN BANNER */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${banner.bg} shadow-[0_15px_60px_rgba(0,0,0,0.12)] transition-colors duration-700`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative z-10 grid items-center gap-0 md:grid-cols-2"
          >
            {/* LEFT - TEXT */}
            <div className="px-6 py-10 md:px-10 lg:px-14 lg:py-14">
              <p className="text-base font-medium text-white/85 md:text-lg">
                {banner.eventLabel}
              </p>

              <h2 className="mt-1 text-[32px] font-black leading-[1.05] text-white md:text-[44px]">
                {banner.dateRange}
              </h2>

              <p className="mt-2 text-xs font-medium tracking-wide text-white/70 md:text-sm">
                {banner.poweredBy}
              </p>

              <h3 className="mt-4 text-2xl font-black text-white md:text-3xl">
                {banner.discount}
              </h3>

              <p className="text-sm font-medium text-white/85 md:text-base">
                {banner.collectionName}
              </p>
            </div>

            {/* RIGHT - IMAGE */}
            <div className="relative h-[260px] w-full md:h-[330px] lg:h-[400px]">
              <Image
                src={banner.image}
                alt={banner.collectionName}
                fill
                className="object-contain p-4"
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        {banners.length > 1 && (
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 justify-center gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all ${
                  i === index
                    ? "h-2 w-7 rounded-full bg-white"
                    : "h-2 w-2 rounded-full bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CATEGORY ICONS ROW */}
      <div className="mt-3 flex flex-wrap justify-start gap-x-6 gap-y-3 sm:gap-x-8">
        {categoryIcons.map((item) => (
          <Link
            key={item.label}
            href={item.link}
            className="group flex w-[72px] flex-col items-center gap-1.5 text-center sm:w-[88px]"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-black/5 bg-zinc-100 shadow-sm transition group-hover:shadow-md sm:h-16 sm:w-16">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition duration-300 group-hover:scale-110"
                sizes="64px"
              />
            </div>

            <span className="text-[11px] font-medium leading-tight text-zinc-700 group-hover:text-black sm:text-xs">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}