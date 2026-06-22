"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

const bestSellers = [
  {
    id: 1,
    title: "Premium Running Shoes",
    price: "$129",
    oldPrice: "$169",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    tag: "Best Seller",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: "$89",
    oldPrice: "$120",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    tag: "Trending",
  },
  {
    id: 3,
    title: "Luxury Smart Watch",
    price: "$199",
    oldPrice: "$249",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    tag: "Hot Deal",
  },
  {
    id: 4,
    title: "Modern Sunglasses",
    price: "$59",
    oldPrice: "$89",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
    tag: "Popular",
  },
];

export default function BestSellersSection() {
  return (
    <section className="w-full bg-[#f8f8f8] py-20 px-4 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
          <div>
            <p className="text-sm uppercase tracking-[5px] text-red-500 font-semibold mb-3">
              Top Products
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Best Sellers
            </h2>
          </div>

          <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
            Explore our most loved and highest-rated products picked by
            thousands of customers worldwide.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[340px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />

                {/* Tag */}
                <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow-md">
                  {product.tag}
                </div>

                {/* Wishlist */}
                <button className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center hover:bg-black hover:text-white transition duration-300">
                  <Heart size={18} />
                </button>

                {/* Add To Cart */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 w-[85%]">
                  <button className="w-full h-12 rounded-full bg-black text-white font-semibold flex items-center justify-center gap-2 hover:bg-red-500 transition duration-300">
                    <ShoppingCart size={18} />
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {product.rating}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-red-500 transition duration-300">
                  {product.title}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-black">
                    {product.price}
                  </span>

                  <span className="text-gray-400 line-through text-sm">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
