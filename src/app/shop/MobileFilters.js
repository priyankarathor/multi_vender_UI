"use client";

import { useEffect, useState } from "react";
import {
  SlidersHorizontal,
  X,
  ChevronDown,
  Check,
  Star,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Electronics",
  "Fashion",
  "Mobiles",
  "Gaming",
  "Audio",
  "Accessories",
  "Home & Living",
];

const priceRanges = [
  "Under ₹999",
  "₹1000 - ₹5000",
  "₹5000 - ₹10000",
  "Above ₹10000",
];

export default function MobileFilters() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Electronics");
  const [selectedPrice, setSelectedPrice] = useState("₹1000 - ₹5000");
  const [rating, setRating] = useState(4);

  // 🔒 lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105 lg:hidden"
      >
        <SlidersHorizontal className="h-4 w-4" />
        Filters
      </button>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm"
            />

            {/* DESKTOP DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 25 }}
              className="
                fixed right-0 top-0 z-[1000]
                hidden h-full w-[380px] bg-white shadow-2xl md:flex flex-col
              "
            >
              {/* CONTENT WRAPPER */}
              {renderContent()}
            </motion.div>

            {/* MOBILE BOTTOM SHEET */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 25 }}
              className="
                fixed bottom-0 left-0 z-[1000]
                flex h-[85vh] w-full flex-col rounded-t-3xl bg-white shadow-2xl md:hidden
                overflow-hidden
              "
            >
              {renderContent(true)}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );

  function renderContent(isMobile = false) {
    return (
      <>
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <div>
            <h2 className="text-lg font-bold">Filters</h2>
            <p className="text-xs text-zinc-500">Refine your products</p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-full bg-zinc-100 p-2 hover:bg-zinc-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* BODY */}
        <div
          className="flex-1 overflow-y-auto px-5 py-4 space-y-6 overscroll-contain"
        >
          {/* CATEGORY */}
          <Section title="Categories">
            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                <ItemButton
                  key={category}
                  active={active}
                  onClick={() => setSelectedCategory(category)}
                  label={category}
                />
              );
            })}
          </Section>

          {/* PRICE */}
          <Section title="Price Range">
            {priceRanges.map((price) => {
              const active = selectedPrice === price;

              return (
                <ItemButton
                  key={price}
                  active={active}
                  onClick={() => setSelectedPrice(price)}
                  label={price}
                />
              );
            })}
          </Section>

          {/* RATINGS */}
          <Section title="Ratings">
            {[5, 4, 3].map((item) => {
              const active = rating === item;

              return (
                <button
                  key={item}
                  onClick={() => setRating(item)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 transition ${
                    active ? "bg-black text-white" : "bg-zinc-100"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: item }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            active
                              ? "fill-yellow-300 text-yellow-300"
                              : "fill-yellow-400 text-yellow-400"
                          }`}
                        />
                      ))}
                    </div>

                    <span className="text-sm font-medium">& Above</span>
                  </div>

                  {active && <Check className="h-4 w-4" />}
                </button>
              );
            })}
          </Section>
        </div>

        {/* FOOTER */}
        <div className="border-t p-4 flex gap-3 bg-white">
          <button className="flex-1 rounded-xl bg-zinc-100 py-3 text-sm font-semibold hover:bg-zinc-200">
            Reset
          </button>

          <button className="flex-1 rounded-xl bg-black py-3 text-sm font-semibold text-white hover:scale-[1.02]">
            Apply
          </button>
        </div>
      </>
    );
  }
}

/* ---------- SMALL COMPONENTS ---------- */

function Section({ title, children }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
          {title}
        </h3>
        <ChevronDown className="h-4 w-4 text-zinc-400" />
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function ItemButton({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
        active
          ? "bg-black text-white"
          : "bg-zinc-100 hover:bg-zinc-200"
      }`}
    >
      {label}
      {active && <Check className="h-4 w-4" />}
    </button>
  );
}