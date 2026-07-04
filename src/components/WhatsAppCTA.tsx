import { motion } from "motion/react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildProjectWhatsAppUrl, buildWhatsAppUrl } from "@/lib/contact";

type Props = {
  projectName?: string;
  message?: string;
  label?: string;
  variant?: "ghost" | "solid";
  className?: string;
  ariaLabel?: string;
};

/** Reusable WhatsApp call-to-action button. */
export function WhatsAppCTA({
  projectName,
  message,
  label = "Un projet similaire? Discutons-en !",
  variant = "ghost",
  className = "",
  ariaLabel,
}: Props) {
  const href = projectName
    ? buildProjectWhatsAppUrl(projectName)
    : buildWhatsAppUrl(message);

  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1020]";

  const styles =
    variant === "solid"
      ? "bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] hover:bg-[#1ebe5b]"
      : "border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] backdrop-blur-sm hover:border-[#25D366]/70 hover:bg-[#25D366]/15";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? (projectName ? `Discuter du projet ${projectName} sur WhatsApp` : label)}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </motion.a>
  );
}
