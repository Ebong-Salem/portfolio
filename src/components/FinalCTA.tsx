import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-title" className="px-5 pb-20 pt-10 sm:px-8 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1020] p-8 shadow-[0_40px_120px_-30px_rgba(255,106,0,0.35)] sm:p-14"
      >
        {/* subtle SALEM Studio gradient wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(60% 80% at 15% 10%, rgba(255,106,0,0.22), transparent 60%), radial-gradient(55% 75% at 90% 90%, rgba(139,92,246,0.28), transparent 60%), linear-gradient(135deg, rgba(255,106,0,0.06), rgba(139,92,246,0.08))",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-purple/25 blur-3xl" />

        <div className="relative text-center text-white">
          <h2
            id="final-cta-title"
            className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
          >
            Prêt à transformer votre idée en{" "}
            <span className="text-gradient-brand">solution digitale</span> ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Vous avez un projet de site web,d'un site web vitrine ,d'un projet frontend uniquement ,
            d'e-commerce ou d'outil métier ? Discutons ensemble de la meilleure
            solution pour votre entreprise.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <WhatsAppCTA
              variant="solid"
              label="Discuter sur WhatsApp"
              className="px-6 py-3 text-base"
              ariaLabel="Discuter avec SALEM Studio sur WhatsApp"
            />
            <a
              href="#accueil"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <ArrowUp className="h-4 w-4" />
              Découvrir SALEM Studio
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
