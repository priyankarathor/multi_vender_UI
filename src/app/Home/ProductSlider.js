"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingBag,
  Star,
  Eye,
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "Premium Headphones",
    category: "Audio",
    price: "₹2,499",
    oldPrice: "₹3,999",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Luxury Smart Watch",
    category: "Wearables",
    price: "₹4,999",
    oldPrice: "₹6,999",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Gaming Mouse",
    category: "Gaming",
    price: "₹1,299",
    oldPrice: "₹2,199",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Laptop Stand",
    category: "Accessories",
    price: "₹999",
    oldPrice: "₹1,499",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    category: "Speaker",
    price: "₹3,499",
    oldPrice: "₹4,499",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Wireless Keyboard",
    category: "Accessories",
    price: "₹2,199",
    oldPrice: "₹3,099",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "DSLR Camera",
    category: "Photography",
    price: "₹52,999",
    oldPrice: "₹59,999",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "VR Headset",
    category: "Gaming",
    price: "₹12,499",
    oldPrice: "₹15,999",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop",
  },
   {
    id: 9,
    title: "Premium Headphones",
    category: "Audio",
    price: "₹2,499",
    oldPrice: "₹3,999",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Luxury Smart Watch",
    category: "Wearables",
    price: "₹4,999",
    oldPrice: "₹6,999",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Gaming Mouse",
    category: "Gaming",
    price: "₹1,299",
    oldPrice: "₹2,199",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Laptop Stand",
    category: "Accessories",
    price: "₹999",
    oldPrice: "₹1,499",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 13,
    title: "Bluetooth Speaker",
    category: "Speaker",
    price: "₹3,499",
    oldPrice: "₹4,499",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 14,
    title: "Wireless Keyboard",
    category: "Accessories",
    price: "₹2,199",
    oldPrice: "₹3,099",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 15,
    title: "DSLR Camera",
    category: "Photography",
    price: "₹52,999",
    oldPrice: "₹59,999",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 16,
    title: "VR Headset",
    category: "Gaming",
    price: "₹12,499",
    oldPrice: "₹15,999",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProductSlider() {
  const sliderRef = useRef(null);

  const [active, setActive] = useState(0);

  // CARD WIDTH
  const cardWidth = 320;

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // ACTIVE CARD
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleScroll = () => {
      const index = Math.round(slider.scrollLeft / cardWidth);
      setActive(index);
    };

    slider.addEventListener("scroll", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // DOT CLICK
  const goToSlide = (index) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActive(index);
  };

  return (
    <section className="relative py-16 bg-[#f8f5f0] overflow-hidden">
      <div className="w-full px-4 md:px-8 xl:px-12">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="px-4 py-2 rounded-full bg-black text-white text-[11px] tracking-[3px] font-semibold">
              FEATURED PRODUCTS
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Trending Collection
            </h2>
          </div>

          {/* ARROWS */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] snap-start transition-all duration-500 ${
                active === index
                  ? "scale-100 opacity-100"
                  : "scale-[0.97] opacity-80"
              }`}
            >
              <div className="relative h-[430px] rounded-[28px] overflow-hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                {/* IMAGE */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                </div>

                {/* TOP BUTTONS */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                    <Heart size={16} />
                  </button>

                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                    <Eye size={16} />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-5 z-10">
                  {/* CATEGORY */}
                  <p className="text-orange-300 uppercase tracking-[3px] text-[11px] font-semibold">
                    {product.category}
                  </p>

                  {/* TITLE */}
                  <h3 className="text-[26px] font-semibold text-white mt-2 line-clamp-1">
                    {product.title}
                  </h3>

                  {/* RATING */}
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}

                    <span className="text-white/80 text-sm ml-2">
                      {product.rating}
                    </span>
                  </div>

                  {/* PRICE + BTN */}
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <h4 className="text-2xl font-extrabold text-white">
                        {product.price}
                      </h4>

                      <p className="text-sm text-white/50 line-through">
                        {product.oldPrice}
                      </p>
                    </div>

                    <button className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 hover:rotate-6">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>

                {/* BORDER */}
                <div className="absolute inset-0 rounded-[28px] border border-white/10 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                active === index
                  ? "w-8 h-2 bg-black"
                  : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
