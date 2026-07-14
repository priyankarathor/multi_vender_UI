"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";

import {
  fallbackBanner,
  fetchBanners,
  getBannersForCategory,
} from "../apis/banners/banners.js";

const fallbackSlides = [
  {
    id: 1,
    title: "Next Gen Shopping Experience",
    highlight: "Premium",
    description:
      "Discover fashion, electronics, gadgets, and lifestyle products with lightning-fast delivery and exclusive offers.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
    badge: "Best Seller",
    offer: "50% OFF",
    product: "Smart Watch Pro",
    price: "₹4,999",
  },
  {
    id: 2,
    title: "Upgrade Your Daily Lifestyle",
    highlight: "Modern",
    description:
      "Shop premium accessories and trending collections designed for your everyday comfort and style.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop",
    badge: "Trending",
    offer: "New Launch",
    product: "Wireless Headphones",
    price: "₹2,499",
  },
  {
    id: 3,
    title: "Exclusive Deals Every Day",
    highlight: "Amazing",
    description:
      "Enjoy unbeatable discounts on premium products with secure payments and fast nationwide delivery.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop",
    badge: "Hot Deals",
    offer: "70% OFF",
    product: "iPhone Collection",
    price: "₹59,999",
  },
];

function getOfferText(discountPercentage) {
  return discountPercentage > 0 ? `${discountPercentage}% OFF` : "Hot Deal";
}

function createSlidesFromBanners(banners) {
  return banners.map((banner) => ({
    id: banner.id,
    title: banner.title,
    highlight: banner.categoryName,
    description: `Special offers are available on the latest ${banner.categoryName} collection.`,
    image: banner.image,
    badge: banner.categoryName,
    offer: getOfferText(banner.discountPercentage),
    product: banner.title,
    price: getOfferText(banner.discountPercentage),
  }));
}

export default function HeroSection() {
  const [heroSlides, setHeroSlides] = useState(() =>
    createSlidesFromBanners([fallbackBanner])
  );
  const [current, setCurrent] = useState(0);
  const slides = heroSlides.length > 0 ? heroSlides : fallbackSlides;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    let isMounted = true;
// testing
    fetchBanners()
      .then((banners) => {
        if (!isMounted) return;
        setHeroSlides(
          createSlidesFromBanners(
            getBannersForCategory(banners, fallbackBanner.categoryName)
          )
        );
        setCurrent(0);
      })
      .catch(() => {
        if (!isMounted) return;
        setHeroSlides(createSlidesFromBanners([fallbackBanner]));
        setCurrent(0);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="w-full">
      <div className="max-w-[1450px] mx-auto px-3 sm:px-6 lg:px-10 pt-4">
        <div className="relative w-full h-[240px] sm:h-[340px] rounded-2xl overflow-hidden shadow-md">
          <div
            className="flex w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ease-in-out ${
                  current === index
                    ? "opacity-100 relative z-10"
                    : "opacity-0 absolute inset-0 z-0 pointer-events-none"
                }`}
              >
                {/* MOBILE LAYOUT */}
                <div className="flex flex-col lg:hidden">

                  {/* IMAGE TOP (mobile) */}
                  <div className="relative h-[190px] sm:h-[240px] overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.product}
                      fill
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                    {/* OFFER BADGE (mobile) */}
                    <div className="absolute top-3 right-3 bg-black text-white px-3 py-2 rounded-2xl shadow-xl">
                      <p className="text-[9px] text-gray-300 uppercase tracking-wide">Limited Offer</p>
                      <h3 className="text-[22px] leading-none font-extrabold mt-1">{slide.offer}</h3>
                    </div>

                    {/* BADGE (mobile) */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur shadow-sm">
                      <Star size={11} className="fill-[#ff9900] text-[#ff9900]" />
                      <span className="text-[11px] font-semibold text-gray-700">{slide.badge}</span>
                    </div>
                  </div>

                  {/* CONTENT (mobile) */}
                  <div className="px-4 sm:px-6 pt-4 pb-3">

                    {/* HEADING */}
                    <h1 className="text-[26px] sm:text-[32px] leading-[0.95] font-extrabold tracking-tight text-black">
                      {slide.title.split(" ")[0]}{" "}
                      <span className="text-[#ff9900]">{slide.highlight}</span>
                      <br />
                      <span className="text-black">{slide.title.split(" ").slice(1).join(" ")}</span>
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-2 text-[12px] sm:text-[13px] leading-5 text-gray-500 max-w-[520px]">
                      {slide.description}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-3 mt-4">
                      <Link
                        href="/shop"
                        className="h-[46px] px-5 rounded-xl bg-black text-white flex items-center gap-2 text-sm font-semibold hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg"
                      >
                        Shop Now <ArrowRight size={15} />
                      </Link>
                      <button className="h-[46px] px-5 rounded-xl border border-black/10 bg-[#f8f8f8] text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300">
                        Explore
                      </button>
                    </div>

                    {/* PRODUCT CARD (mobile) */}
                    <div className="mt-3 bg-[#fafafa] border border-black/5 rounded-2xl p-3 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400">Featured</p>
                        <h3 className="mt-1 text-[16px] font-semibold text-black truncate">{slide.product}</h3>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-[9px] text-gray-400 uppercase">From</p>
                        <h4 className="text-[20px] font-extrabold text-black leading-none mt-1">{slide.price}</h4>
                      </div>
                      <button className="shrink-0 h-[38px] px-4 rounded-xl bg-black text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-[#1a1a1a] transition-all">
                        Buy <ArrowRight size={13} />
                      </button>
                    </div>

                    {/* FEATURES (mobile - horizontal scroll) */}
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-hide">
                      {[
                        { icon: <Truck size={14} />, title: "Fast Delivery", sub: "Across India" },
                        { icon: <ShieldCheck size={14} />, title: "Secure Pay", sub: "100% Safe" },
                        { icon: <ShoppingBag size={14} />, title: "Top Brands", sub: "Premium" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white border border-black/5 rounded-xl p-3 shrink-0">
                          <div className="w-8 h-8 rounded-lg bg-[#fafafa] shadow-sm flex items-center justify-center">{item.icon}</div>
                          <div>
                            <p className="text-[11px] font-bold text-black whitespace-nowrap">{item.title}</p>
                            <p className="text-[10px] text-gray-400">{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DESKTOP LAYOUT */}
                <div className="hidden lg:grid lg:grid-cols-2 h-[470px]">

                  {/* LEFT CONTENT */}
                  <div className="flex items-center px-8 xl:px-12 py-8">
                    <div className="w-full">

                      {/* TOP BADGE */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f8f8] border border-black/5 shadow-sm">
                        <Star size={14} className="fill-[#ff9900] text-[#ff9900]" />
                        <span className="text-[12px] font-semibold text-gray-700">{slide.badge}</span>
                      </div>

                      {/* HEADING */}
                      <h1 className="mt-4 text-[36px] xl:text-[44px] leading-[0.95] font-extrabold tracking-tight text-black max-w-[620px]">
                        {slide.title.split(" ")[0]}{" "}
                        <span className="text-[#ff9900]">{slide.highlight}</span>
                        <br />
                        <span className="text-black">{slide.title.split(" ").slice(1).join(" ")}</span>
                      </h1>

                      {/* DESCRIPTION */}
                      <p className="mt-4 text-[14px] leading-6 text-gray-600 max-w-[540px]">
                        {slide.description}
                      </p>

                      {/* BUTTONS */}
                      <div className="flex flex-wrap gap-4 mt-6">
                        <Link
                          href="/shop"
                          className="h-[54px] px-7 rounded-2xl bg-black text-white flex items-center gap-3 text-sm font-semibold hover:bg-[#1a1a1a] transition-all duration-300 shadow-xl hover:scale-[1.02]"
                        >
                          Shop Now <ArrowRight size={17} />
                        </Link>
                        <button className="h-[54px] px-7 rounded-2xl border border-black/5 bg-[#f8f8f8] text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300">
                          Explore Deals
                        </button>
                      </div>

                      {/* FEATURES */}
                      <div className="grid grid-cols-3 gap-3 mt-6">
                        {[
                          { icon: <Truck size={18} />, title: "Fast Delivery", sub: "Across India" },
                          { icon: <ShieldCheck size={18} />, title: "Secure Payments", sub: "100% Protected" },
                          { icon: <ShoppingBag size={18} />, title: "Premium Brands", sub: "Top Collections" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 bg-[#fafafa] border border-black/5 rounded-2xl p-3">
                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">{item.icon}</div>
                            <div>
                              <p className="text-[13px] font-bold text-black">{item.title}</p>
                              <p className="text-[11px] text-gray-500">{item.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.product}
                      fill
                      sizes="50vw"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/25" />

                    {/* OFFER CARD */}
                    <div className="absolute top-6 right-6 bg-black text-white px-5 py-4 rounded-[24px] shadow-2xl backdrop-blur-xl">
                      <p className="text-[11px] text-gray-300 uppercase tracking-wide">Limited Offer</p>
                      <h3 className="text-[30px] leading-none font-extrabold mt-2">{slide.offer}</h3>
                    </div>

                    {/* PRODUCT CARD */}
                    <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-2xl rounded-[24px] p-4 border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
                      <div className="flex items-end justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500">Featured Product</p>
                          <h3 className="mt-1 text-[19px] leading-[1.1] font-semibold text-black truncate">{slide.product}</h3>
                          <p className="mt-1 text-[12px] text-gray-500 line-clamp-1">Premium quality with elegant modern design.</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-[10px] text-gray-400 uppercase">Starting From</p>
                          <h4 className="mt-1 text-[24px] leading-none font-extrabold text-black">{slide.price}</h4>
                        </div>
                      </div>
                      <button className="mt-3 w-full h-[44px] rounded-2xl bg-black text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.01]">
                        Buy Now <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* NAV BUTTONS */}
            <button
              onClick={prevSlide}
              className="absolute left-3 sm:left-5 top-[110px] lg:top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-xl border border-black/10 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 sm:right-5 top-[110px] lg:top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-xl border border-black/10 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>

            {/* DOTS */}
            <div className="absolute bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-300 ${
                    current === index
                      ? "w-7 h-[8px] sm:w-8 sm:h-[10px] rounded-full bg-black"
                      : "w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-full bg-black/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}