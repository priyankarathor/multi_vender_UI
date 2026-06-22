"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gray-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-zinc-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-gray-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
        >
          {/* Decorative Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.04),transparent_35%)]" />

          <div className="grid items-center gap-16 px-6 py-14 md:px-12 lg:grid-cols-2 lg:px-20 lg:py-20">
            {/* Left Side */}
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg">
                <Sparkles className="h-4 w-4" />
                Weekly Exclusive Updates
              </div>

              <h2 className="max-w-xl text-4xl font-semibold leading-tight text-black md:text-5xl lg:text-6xl">
                Subscribe To Our
                <span className="mt-2 block text-gray-500">
                  Newsletter
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
                Get the latest product launches, exclusive discounts, fashion
                trends, and premium offers directly in your inbox.
              </p>

              {/* Mini Features */}
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
                  <h4 className="text-2xl font-semibold text-black">25K+</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Happy Subscribers
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
                  <h4 className="text-2xl font-semibold text-black">100%</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Free Newsletter
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="rounded-[32px] border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-8 shadow-xl">
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white shadow-lg">
                  <Mail className="h-8 w-8" />
                </div>

                <h3 className="text-3xl font-semibold text-black">
                  Join Our Community
                </h3>

                <p className="mt-3 text-gray-600">
                  Subscribe today and receive premium updates every week.
                </p>

                {/* Form */}
                <form className="mt-8 space-y-5">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-5 pr-14 text-black outline-none transition-all placeholder:text-gray-400 focus:border-black focus:ring-4 focus:ring-black/5"
                    />

                    <Mail className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  </div>

                  <button
                    type="submit"
                    className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-black text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900"
                  >
                    Subscribe Now
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>

                <p className="mt-5 text-center text-sm text-gray-500">
                  No spam • Unsubscribe anytime
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
