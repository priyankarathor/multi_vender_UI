// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { useEffect, useMemo, useState } from "react";

// import {
//   FALLBACK_BANNER_IMAGE,
//   fallbackBanner,
//   fetchBanners,
//   getBannersForCategory,
// } from "../apis/banners/banners";

// export default function DealsOfferBanner() {
//   const [banners, setBanners] = useState([fallbackBanner]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [brokenBannerIds, setBrokenBannerIds] = useState([]);

//   useEffect(() => {
//     let isMounted = true;

//     fetchBanners()
//       .then((items) => {
//         if (!isMounted) return;
//         setBanners(getBannersForCategory(items, fallbackBanner.categoryName));
//         setActiveIndex(0);
//       })
//       .catch(() => {
//         if (!isMounted) return;
//         setBanners([fallbackBanner]);
//         setActiveIndex(0);
//       });

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   useEffect(() => {
//     if (banners.length <= 1) return undefined;

//     const timer = window.setInterval(() => {
//       setActiveIndex((current) => (current + 1) % banners.length);
//     }, 5000);

//     return () => window.clearInterval(timer);
//   }, [banners.length]);

//   const activeBanner = banners[activeIndex] || fallbackBanner;
//   const isBrokenImage = brokenBannerIds.includes(activeBanner.id);
//   const imageSrc = isBrokenImage
//     ? FALLBACK_BANNER_IMAGE
//     : activeBanner.image || FALLBACK_BANNER_IMAGE;
//   const discountText =
//     activeBanner.discountPercentage > 0
//       ? `${activeBanner.discountPercentage}%`
//       : "Big";
//   const categoryQuery = encodeURIComponent(activeBanner.categoryName || "All");
//   const shopHref = `/shop?category=${categoryQuery}`;
//   const titleParts = useMemo(() => {
//     const words = activeBanner.title.split(" ");
//     const middle = Math.ceil(words.length / 2);
//     return [words.slice(0, middle).join(" "), words.slice(middle).join(" ")];
//   }, [activeBanner.title]);

//   const handleImageError = () => {
//     setBrokenBannerIds((current) =>
//       current.includes(activeBanner.id) ? current : [...current, activeBanner.id]
//     );
//   };

//   return (
//     <section className="w-full bg-[#f5f5f5] py-6">
//       <style>{`
//         .deal-image-clip {
//           clip-path: none;
//         }

//         @media (min-width: 1024px) {
//           .deal-image-clip {
//             clip-path: polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%);
//           }
//         }
//       `}</style>

//       <div className="max-w-[1450px] mx-auto px-4 md:px-6">
//         <div className="relative overflow-hidden rounded-[32px] bg-[#f8f8f8] border border-black/5 shadow-[0_15px_60px_rgba(0,0,0,0.06)] min-h-[260px]">
//           <div className="grid lg:grid-cols-[1.05fr_0.95fr] h-full">
//             <div className="relative z-20 flex flex-col justify-center px-7 md:px-12 py-7">
//               <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/5 bg-white px-5 py-2.5 shadow-sm">
//                 <div className="w-2 h-2 rounded-full bg-orange-500" />

//                 <span className="text-[11px] uppercase tracking-[3px] font-semibold text-gray-600">
//                   {activeBanner.categoryName} Sale
//                 </span>
//               </div>

//               <motion.h2
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="mt-4 text-[36px] md:text-[52px] leading-[0.9] tracking-[-3px] font-extrabold text-[#111]"
//               >
//                 {titleParts[0]}
//                 <br />
//                 {titleParts[1] || "Collection"}
//               </motion.h2>

//               <div className="mt-4 flex items-center gap-4">
//                 <div className="w-14 h-[2px] rounded-full bg-orange-500" />

//                 <span className="text-orange-500 font-bold text-xl">
//                   Up To {discountText} Off
//                 </span>
//               </div>

//               <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-gray-500">
//                 Limited-time offer on the latest {activeBanner.categoryName}
//                 collection. Explore the best deals and add your favourite
//                 products to the cart.
//               </p>

//               <div className="mt-5 flex flex-wrap items-center gap-4">
//                 <Link
//                   href={shopHref}
//                   className="group h-[58px] px-8 rounded-2xl bg-[#111] hover:bg-orange-500 transition-all duration-300 text-white font-semibold text-[15px] flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
//                 >
//                   Shop Collection

//                   <ArrowRight
//                     size={18}
//                     className="group-hover:translate-x-1 transition-all duration-300"
//                   />
//                 </Link>

//                 <div className="h-[58px] px-6 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center">
//                   <div>
//                     <p className="text-[10px] uppercase tracking-[3px] text-gray-400 font-medium">
//                       Category
//                     </p>

//                     <h4 className="text-[18px] font-extrabold text-[#111] mt-0.5">
//                       {activeBanner.categoryName}
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative min-h-[260px] overflow-hidden">
//               <div className="deal-image-clip absolute inset-0">
//                 <motion.div
//                   animate={{
//                     scale: [1, 1.04, 1],
//                   }}
//                   transition={{
//                     duration: 7,
//                     repeat: Infinity,
//                   }}
//                   className="relative w-full h-full"
//                 >
//                   <Image
//                     src={imageSrc}
//                     alt={activeBanner.title}
//                     fill
//                     sizes="(max-width: 767px) 100vw, 50vw"
//                     priority
//                     onError={handleImageError}
//                     className="object-cover"
//                   />
//                 </motion.div>

//                 <div className="absolute inset-0 bg-gradient-to-l from-black/15 via-black/5 to-transparent" />
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="absolute bottom-7 right-7 rounded-[26px] bg-white/90 backdrop-blur-xl px-7 py-5 border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
//               >
//                 <p className="text-[10px] uppercase tracking-[3px] text-gray-400 font-semibold">
//                   Limited Deal
//                 </p>

//                 <div className="mt-1 flex items-end gap-2">
//                   <h3 className="text-4xl leading-none font-extrabold text-[#111]">
//                     {discountText}
//                   </h3>

//                   <span className="text-orange-500 font-bold text-lg mb-1">
//                     OFF
//                   </span>
//                 </div>
//               </motion.div>
//             </div>
//           </div>

//           <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] rounded-full bg-orange-100 blur-[100px]" />

//           {banners.length > 1 && (
//             <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2">
//               {banners.map((banner, index) => (
//                 <button
//                   key={banner.id}
//                   type="button"
//                   aria-label={`Show banner ${index + 1}`}
//                   onClick={() => setActiveIndex(index)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     activeIndex === index ? "w-8 bg-orange-500" : "w-2 bg-white/80"
//                   }`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// // }
