"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
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

export default function ShopHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const current = slides[index];

  return (
    <section className="relative overflow-hidden rounded-[44px] bg-[#f5f3ee] px-6 py-10 md:px-10 lg:px-14">

      {/* Soft Luxury Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.04),transparent_25%)]" />

      <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

        {/* LEFT SIDE */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-medium text-black/60 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Premium Shopping Experience
          </div>

          <h1 className="mt-7 text-[44px] font-black leading-[1.05] tracking-[-1px] text-black md:text-[72px]">
            Shop the
            <br />
            <span className="text-black/30">Future Style</span>
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-7 text-black/55">
            Discover curated fashion, smart gadgets, and lifestyle essentials
            designed with premium quality and modern aesthetics.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03]"
            >
              Start Exploring
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/deals"
              className="rounded-full border border-black/10 bg-white/60 px-7 py-4 text-sm font-medium text-black/70 backdrop-blur-xl transition hover:bg-white"
            >
              View Deals
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10 text-black">
            <div>
              <h3 className="text-2xl font-black">12K+</h3>
              <p className="text-sm text-black/50">Products</p>
            </div>

            <div>
              <h3 className="flex items-center gap-1 text-2xl font-black">
                4.9 <Star className="h-4 w-4 fill-black" />
              </h3>
              <p className="text-sm text-black/50">Rating</p>
            </div>

            <div>
              <h3 className="text-2xl font-black">24H</h3>
              <p className="text-sm text-black/50">Delivery</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - PREMIUM SLIDER */}
        <div className="relative">

          {/* main card */}
          <div className="relative overflow-hidden rounded-[40px] bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.10)]">

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={current.img}
                  className="h-[540px] w-full rounded-[34px] object-cover"
                  alt=""
                />

                {/* soft overlay */}
                <div className="absolute inset-0 rounded-[34px] bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* tag */}
                <div className="absolute right-6 top-6 rounded-full bg-black/80 px-5 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                  {current.tag}
                </div>

                {/* bottom card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-[30px] border border-white/20 bg-white/80 px-6 py-5 backdrop-blur-2xl">

                  <p className="text-xs tracking-widest text-black/50">
                    FEATURED PRODUCT
                  </p>

                  <div className="mt-2 flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-black">
                        {current.title}
                      </h3>
                      <p className="text-sm text-black/50">
                        {current.desc}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-black/40">Starting</p>
                      <h3 className="text-2xl font-black">{current.price}</h3>
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* dots */}
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all ${
                  i === index
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