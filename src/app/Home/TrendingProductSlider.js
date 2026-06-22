"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Flame,
  ShoppingBag,
  Star,
  Heart,
} from "lucide-react";

const trendingProducts = [
  {
    id: 1,
    title: "Nike Air Max",
    category: "Sneakers",
    price: "₹5,999",
    oldPrice: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Apple Watch Ultra",
    category: "Smart Watch",
    price: "₹79,999",
    oldPrice: "₹92,999",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Gaming Headset",
    category: "Gaming",
    price: "₹2,499",
    oldPrice: "₹4,499",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Sony Camera",
    category: "Photography",
    price: "₹54,999",
    oldPrice: "₹68,999",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TrendingProductsSection() {
  return (
    <section className="relative py-20 bg-[#faf7f2] overflow-hidden">
      {/* BACKGROUND BLURS */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-200/30 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-100/40 blur-[120px] rounded-full" />

      <div className="w-full px-4 md:px-8 xl:px-14 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm">
              <Flame size={15} className="text-orange-500" />

              <span className="text-xs tracking-[3px] text-orange-500 uppercase font-bold">
                Trending Products
              </span>
            </div>

            <h2 className="mt-5 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Explore Trending <br />
              Collections
            </h2>
          </div>

          <Link
            href="/shop"
            className="group flex items-center gap-2 text-gray-800 hover:text-orange-500 transition-all duration-300"
          >
            <span className="text-sm font-semibold tracking-wide">
              View All Products
            </span>

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-all duration-300"
            />
          </Link>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
          {trendingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[34px] overflow-hidden border border-[#f1ede7] hover:border-orange-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)] transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden bg-[#f8f8f8]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* LIGHT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* DISCOUNT BADGE */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg">
                  30% OFF
                </div>

                {/* HEART */}
                <button className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg">
                  <Heart size={18} />
                </button>

                {/* QUICK VIEW */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-xl">
                    Quick View
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex min-h-[236px] flex-col p-6">
                {/* CATEGORY */}
                <p className="text-orange-500 uppercase tracking-[3px] text-[11px] font-bold">
                  {product.category}
                </p>

                {/* TITLE */}
                <h3
                  className="mt-2 truncate text-[26px] font-extrabold leading-snug text-gray-900"
                  title={product.title}
                >
                  {product.title}
                </h3>

                {/* RATING */}
                <div className="mt-3 flex min-w-0 items-center gap-1">
                  <div className="flex shrink-0 items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <span className="ml-2 truncate text-sm font-medium text-gray-500">
                    (4.9 Reviews)
                  </span>
                </div>

                {/* PRICE + BUTTON */}
                <div className="mt-auto flex items-end justify-between gap-4 border-t border-gray-100 pt-5">
                  <div className="min-w-0">
                    <h4 className="text-3xl font-extrabold text-gray-900">
                      {product.price}
                    </h4>

                    <p className="text-sm text-gray-400 line-through mt-1">
                      {product.oldPrice}
                    </p>
                  </div>

                  <button
                    className="group/cart flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
                    aria-label={`View ${product.title}`}
                  >
                    <ShoppingBag
                      size={20}
                      className="group-hover/cart:scale-110 transition-all duration-300"
                    />
                  </button>
                </div>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none bg-gradient-to-t from-orange-100/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
