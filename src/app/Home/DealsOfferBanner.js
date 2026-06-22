"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DealsOfferBanner() {
  return (
    <section className="w-full bg-[#f5f5f5] py-6">
      <style>{`
        .deal-image-clip {
          clip-path: none;
        }

        @media (min-width: 1024px) {
          .deal-image-clip {
            clip-path: polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
      `}</style>

      <div className="max-w-[1450px] mx-auto px-4 md:px-6">

        {/* MAIN BANNER */}
        <div className="relative overflow-hidden rounded-[38px] bg-[#f8f8f8] border border-black/5 shadow-[0_15px_60px_rgba(0,0,0,0.06)] min-h-[390px]">

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] h-full">

            {/* LEFT CONTENT */}
            <div className="relative z-20 flex flex-col justify-center px-8 md:px-14 py-14">

              {/* badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/5 bg-white px-5 py-2.5 shadow-sm">

                <div className="w-2 h-2 rounded-full bg-orange-500" />

                <span className="text-[11px] uppercase tracking-[3px] font-semibold text-gray-600">
                  New Season Sale
                </span>
              </div>

              {/* heading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 text-[48px] md:text-[72px] leading-[0.9] tracking-[-4px] font-extrabold text-[#111]"
              >
                Elevate
                <br />

                Your Style
              </motion.h2>

              {/* highlight */}
              <div className="mt-5 flex items-center gap-4">

                <div className="w-14 h-[2px] rounded-full bg-orange-500" />

                <span className="text-orange-500 font-bold text-xl">
                  Up To 70% Off
                </span>
              </div>

              {/* description */}
              <p className="mt-7 max-w-[520px] text-[16px] leading-relaxed text-gray-500">
                Premium sneakers and fashion essentials designed
                for modern lifestyle with exclusive seasonal
                offers.
              </p>

              {/* bottom */}
              <div className="mt-10 flex flex-wrap items-center gap-4">

                {/* button */}
                <button className="group h-[58px] px-8 rounded-2xl bg-[#111] hover:bg-orange-500 transition-all duration-300 text-white font-semibold text-[15px] flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.12)]">

                  Shop Collection

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-all duration-300"
                  />
                </button>

                {/* price */}
                <div className="h-[58px] px-6 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center">

                  <div>
                    <p className="text-[10px] uppercase tracking-[3px] text-gray-400 font-medium">
                      Starting From
                    </p>

                    <h4 className="text-[18px] font-extrabold text-[#111] mt-0.5">
                      ₹5,999
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE SIDE */}
            <div className="relative min-h-[390px] overflow-hidden">

              {/* IMAGE SECTION */}
              <div className="deal-image-clip absolute inset-0">
                {/* animated image */}
                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
                    alt="Sneaker"
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/15 via-black/5 to-transparent" />
              </div>

              {/* CLEAN DIAGONAL DIVIDER */}
              <div
               
              />

              {/* floating offer card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute bottom-7 right-7 rounded-[26px] bg-white/90 backdrop-blur-xl px-7 py-5 border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
              >

                <p className="text-[10px] uppercase tracking-[3px] text-gray-400 font-semibold">
                  Limited Deal
                </p>

                <div className="mt-1 flex items-end gap-2">

                  <h3 className="text-4xl leading-none font-extrabold text-[#111]">
                    70%
                  </h3>

                  <span className="text-orange-500 font-bold text-lg mb-1">
                    OFF
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* subtle glow */}
          <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] rounded-full bg-orange-100 blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
