import { motion } from "motion/react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsAppUrl } from "@/lib/contact";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter SALEM Studio sur WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-5 right-5 z-[70] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_-8px_rgba(37,211,102,0.65)] ring-1 ring-white/10 transition hover:shadow-[0_18px_45px_-8px_rgba(37,211,102,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping"
        style={{ animationDuration: "2.4s" }}
      />
      <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
    </motion.a>
  );
}
