// import { useEffect, useState, type ReactNode } from "react";
// import { motion } from "motion/react";
// import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";

// type Testimonial = {
//   name: string;
//   role: string;
//   company?: string;
//   quote: string;
//   rating?: number;
//   initials: string;
//   color: string;
// };

// const TESTIMONIALS: Testimonial[] = [
//   {
//     name: "Aïcha M.",
//     role: "Fondatrice",
//     company: "LocaTech",
//     quote:
//       "Salem a transformé notre idée en une plateforme moderne et intuitive. Son professionnalisme et son sens du détail ont fait toute la différence.",
//     rating: 5,
//     initials: "AM",
//     color: "from-brand-orange to-brand-orange-2",
//   },
//   {
//     name: "Jean-Paul K.",
//     role: "CEO",
//     company: "ShopEasy",
//     quote:
//       "Un travail impeccable, livré dans les délais. L'expérience utilisateur est fluide et le design vraiment premium. Je recommande sans hésiter.",
//     rating: 5,
//     initials: "JK",
//     color: "from-brand-purple to-brand-orange",
//   },
//   {
//     name: "Marie L.",
//     role: "Responsable marketing",
//     company: "Agence Nova",
//     quote:
//       "Salem écoute, comprend et propose des solutions élégantes. Notre site attire davantage de clients depuis la refonte.",
//     rating: 5,
//     initials: "ML",
//     color: "from-brand-orange-2 to-brand-purple",
//   },
// ];

// function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6, ease: "easeOut", delay }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export function Testimonials() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "start",
//     slidesToScroll: 1,
//   });
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
//     setScrollSnaps(emblaApi.scrollSnapList());
//     onSelect();
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//     return () => {
//       emblaApi.off("select", onSelect);
//       emblaApi.off("reInit", onSelect);
//     };
//   }, [emblaApi]);

//   return (
//     <section
//       id="temoignages"
//       className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-28"
//     >
//       <div aria-hidden className="absolute inset-0 -z-10 bg-[#0B1020]" />
//       <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-80">
//         <div className="absolute -top-32 right-10 h-[28rem] w-[28rem] rounded-full bg-brand-purple/20 blur-[120px]" />
//         <div className="absolute bottom-0 left-0 h-[28rem] w-[28rem] rounded-full bg-brand-orange/15 blur-[120px]" />
//       </div>

//       <div className="mx-auto max-w-7xl text-white">
//         <Reveal>
//           <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:flex-wrap sm:justify-between">
//             <div className="min-w-0">
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
//                 Ils me font confiance
//               </p>
//               <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
//                 Témoignages
//               </h2>
//               <p className="mt-4 max-w-xl text-base text-white/60">
//                 Ce que mes clients disent de notre collaboration.
//               </p>
//             </div>
//             <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur-sm">
//               <Star className="h-4 w-4 text-brand-orange" />
//               {TESTIMONIALS.length} avis
//             </span>
//           </div>
//         </Reveal>

//         <Reveal delay={0.1}>
//           <div className="relative mt-12">
//             <div className="overflow-hidden" ref={emblaRef}>
//               <div className="flex">
//                 {TESTIMONIALS.map((t, i) => (
//                   <div
//                     key={t.name + i}
//                     className="min-w-0 shrink-0 grow-0 basis-full pl-0 pr-5 sm:basis-1/2 lg:basis-1/3"
//                   >
//                     <motion.article
//                       whileHover={{ y: -6 }}
//                       transition={{ type: "spring", stiffness: 260, damping: 22 }}
//                       className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/20 hover:shadow-[0_30px_80px_-30px_rgba(139,92,246,0.4)] sm:p-7"
//                     >
//                       <div
//                         aria-hidden
//                         className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-purple/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"
//                       />
//                       <Quote className="h-8 w-8 text-brand-orange/70" />
//                       <p className="mt-4 flex-1 text-sm leading-relaxed text-white/80 sm:text-base">
//                         « {t.quote} »
//                       </p>

//                       {t.rating ? (
//                         <div className="mt-5 flex items-center gap-1">
//                           {Array.from({ length: t.rating }).map((_, k) => (
//                             <Star
//                               key={k}
//                               className="h-4 w-4 fill-brand-orange text-brand-orange"
//                             />
//                           ))}
//                         </div>
//                       ) : null}

//                       <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
//                         <div
//                           className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white shadow-glow`}
//                         >
//                           {t.initials}
//                         </div>
//                         <div className="min-w-0">
//                           <p className="truncate text-sm font-semibold text-white">
//                             {t.name}
//                           </p>
//                           <p className="truncate text-xs text-white/60">
//                             {t.role}
//                             {t.company ? ` • ${t.company}` : ""}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.article>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Controls */}
//             <div className="mt-8 flex items-center justify-between gap-4">
//               <div className="flex items-center gap-2">
//                 {scrollSnaps.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => emblaApi?.scrollTo(i)}
//                     aria-label={`Aller au témoignage ${i + 1}`}
//                     className={`h-2 rounded-full transition-all ${
//                       i === selectedIndex
//                         ? "w-8 bg-brand-orange"
//                         : "w-2 bg-white/25 hover:bg-white/40"
//                     }`}
//                   />
//                 ))}
//               </div>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => emblaApi?.scrollPrev()}
//                   aria-label="Témoignage précédent"
//                   className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
//                 >
//                   <ChevronLeft className="h-5 w-5" />
//                 </button>
//                 <button
//                   onClick={() => emblaApi?.scrollNext()}
//                   aria-label="Témoignage suivant"
//                   className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
//                 >
//                   <ChevronRight className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
