import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight, MessageCircle,Send, FileDown, Menu, X, Image as ImageIcon,
  Monitor, Code2, Database, Wrench, Layout, Mail, Phone, MapPin,
  Github, Linkedin, Twitter, ArrowUp, Star, ExternalLink,
  Sparkles, Rocket, CheckCircle2, Award, BookOpen, GraduationCap,
} from "lucide-react";
import { AnimatePresence } from "motion/react";


import heroImg from "@/assets/hero-salem.png";
import novatech from "@/assets/novatech.png";
import shopflow from "@/assets/shopflow.png";
import luminex from "@/assets/luminex.png";
import esm from "@/assets/esm.png";
import { SalemLogo } from "@/components/SalemLogo";
import { FinalCTA } from "@/components/FinalCTA";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
// import { Testimonials } from "@/components/Testimonials";
import cvFile from "@/assets/CV_Salem.pdf?url";
import css from "@/assets/css.pdf?url";
import js from "@/assets/js.pdf?url";
import html from "@/assets/html.pdf?url";

import { es } from "date-fns/locale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salem. — Portfolio développeuse web" },
      { name: "description", content: "Salem, étudiante en informatique et développeuse web. Découvrez mes projets, services et expertises." },
      { property: "og:title", content: "Salem. — Portfolio développeuse web" },
      { property: "og:description", content: "Sites web modernes, responsives et intuitifs." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "projets", label: "Projets" },
  { id: "services", label: "Services" },
  { id: "expertise", label: "Expertise" },
  { id: "certifications", label: "Certifications" },
  // { id: "temoignages", label: "Témoignages" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  const [active, setActive] = useState("accueil");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-orange/20 blob" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-brand-purple/20 blob" style={{ animationDelay: "-4s" }} />
        <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-brand-orange-2/15 blob" style={{ animationDelay: "-8s" }} />
      </div>

      <Header active={active} open={open} setOpen={setOpen} />

      <main>
        <Hero />
        <Stats />
        <Projects />
        <About />
        <Expertise />
        <Services />
        <Certifications />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

/* ---------- Scroll To Top ---------- */
function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Remonter en haut"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="group fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-white shadow-glow sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
        >
          <span aria-hidden className="absolute inset-0 rounded-full bg-brand-orange/40 opacity-0 blur-xl transition group-hover:opacity-100" />
          <ArrowUp className="relative h-5 w-5 transition group-hover:-translate-y-0.5 sm:h-6 sm:w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ---------- Header ---------- */
function Header({ active, open, setOpen }: {
  active: string;
  open: boolean; setOpen: (v: boolean) => void;
}) {
  return (
     <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#accueil" className="text-2xl font-extrabold tracking-tight">
          Salem<span className="text-brand-orange">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                active === n.id ? "text-brand-orange" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {n.label}
              {active === n.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={cvFile}
            download="CV_Salem.pdf"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-gradient-brand px-5 py-2 text-sm font-semibold text-white transition hover:shadow-glow"
          >
            <FileDown className="h-4 w-4" />
            Mon CV
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        className="overflow-hidden lg:hidden border-t border-border/60"
      >
        <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className={`px-2 py-3 text-base font-medium ${
                active === n.id ? "text-brand-orange" : "text-foreground/80"
              }`}
            >
              {n.label}
            </a>
          ))}
          {/* Bouton CV mobile */}
          <a
            href={cvFile}
            download="CV-Salem.pdf"
            onClick={() => setOpen(false)}
            className="mt-2 mb-1 inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-glow"
          >
            <FileDown className="h-4 w-4" />
            Télécharger mon CV
          </a>
        </div>
      </motion.div>
    </header>
  );
}

/* ---------- Reveal ---------- */
function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="accueil" className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-6 lg:pt-20 lg:pb-24">
        <div className="relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-primary-soft px-4 py-2 text-sm font-medium text-brand-orange shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
              </span>
              <span aria-hidden>👋</span> Disponible pour des missions freelance et des collaborations
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Bonjour, je suis
              <br />
              <span className="text-gradient-brand">Salem.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Étudiante en informatique et développeuse web passionnée.
              Je conçois des sites web modernes, responsives et intuitifs
              en transformant des idées en solutions concrètes.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projets"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Voir mes projets
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand-orange/40 hover:text-brand-orange"
              >
                Me contacter <Send className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            {/* floating cards */}
            <motion.div
              aria-hidden
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 top-10 z-10 hidden rounded-2xl bg-surface p-3 shadow-soft sm:block"
            >
              <div className="flex items-center gap-2 rounded-xl bg-[#0d132e] p-3 text-xs">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>
              <div className="mt-2 space-y-1">
                <div className="h-1.5 w-24 rounded bg-brand-orange/60" />
                <div className="h-1.5 w-16 rounded bg-brand-purple/60" />
                <div className="h-1.5 w-20 rounded bg-foreground/20" />
              </div>
            </motion.div>

            <motion.div
              aria-hidden
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-0 z-10 hidden h-14 w-14 place-items-center rounded-2xl bg-accent text-brand-purple shadow-soft sm:grid"
            >
              <Code2 className="h-7 w-7" />
            </motion.div>

            <motion.div
              aria-hidden
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-4 bottom-16 z-10 hidden rounded-2xl bg-surface px-3 py-2 shadow-soft sm:flex sm:gap-2"
            >
              {["REACT JS", "NODE JS", "POSTGRESQL"].map((t) => (
                <span key={t} className="rounded-md bg-brand-orange/10 px-2 py-1 text-[10px] font-bold text-brand-orange">{t}</span>
              ))}
            </motion.div>

            <img
              src={heroImg}
              alt="Salem, développeuse web"
              width={1024}
              height={1024}
              className="relative z-0 h-full w-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */
const STATS = [
  { v: "5+", l: "Projets réalisés" },
  { v: "100%", l: "Sites responsives" },
  { v: "2+", l: "Années d'apprentissage" },
  { v: "∞", l: "Passion & motivation" },
];
function Stats() {
  return (
    <section className="px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-soft md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.l} className="bg-surface p-6 text-center transition hover:bg-primary-soft/40">
                <div className="text-3xl font-extrabold text-gradient-brand sm:text-4xl">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
type Project = {
  name: string;
  nameAccent?: string;
  type: string;
  desc: string;
  tags: string[];
  image: string;
  accent: "orange" | "purple" | "emerald";
  href?: string;
  code?: string;
};

const FEATURED: Project = {
  name: "Shop",
  nameAccent: "Flow",
  type: "Site de E-commerce",
  desc: "Realisation d'une boutique en ligne moderne offrant une navigation intuitive , une presentation  soignee des produits et un parcours d'ahat simplifie pour ameliorer l'experience client.",
  tags: ["REACT JS", "TAILWIND CSS", "FRAMER MOTION"],
  image: shopflow,
  accent: "orange",
  href: "https://shopflow.ebongsalem.workers.dev/",
  code: "https://github.com/Ebong-Salem/shopflow.git",
};

const SECONDARY: Project[] = [
  {
    name: "Lumineux",
    nameAccent: "Architecture",
    type: "Site Vitrine",
    desc: "Lumineux Architecture est un site vitrine moderne  concu pour valoriser le savoir-faire d'un abinet d'architecture a travers une prsentation elegante de  ses realisations.",
    tags: ["REACT JS ", "TAILWIND CSS", "FRAMER MOTION"],
    image: luminex,
    accent: "purple",
    href: "https://lumineux-architecture.ebongsalem.workers.dev",
    code: "https://github.com/Ebong-Salem/lumineux.git",
  },
  {
    name: "NOVA ",
    nameAccent: "TECH",
    type: "Site vitrine d'entreprise",
    desc: "Conception et developpement d'un site  vitrine moderne mettant en valeur les services, l'identite de marque et les informations essentielles  de l'entreprise NovaTech.",
    tags: ["REACT JS" , "TAILWIND CSS" ,"FRAMER MOTION"],
    image: novatech,
    accent: "orange",
    href: "https://novatech-czc.pages.dev/",
    code: "https://github.com/Ebong-Salem/novatech.git",
  },
];

const COMPACT: Project = {
  name: "ESM CAMEROUN",
  type: "Refonte du site web",
  desc: "Modernisation complete du site web existant .",
  tags: ["WORDPRESS" ,"ELEMENTOR"],
  image: esm,
  accent: "emerald",
  href: "https://esmcameroun.com/",
  code: "#",
};

const HIGHLIGHTS = [
  "Interface responsive",
  "Expérience utilisateur optimisée",
  "Développement sur mesure",
  "Performance optimisée",
];

const accentMap = {
  orange: {
    text: "text-brand-orange",
    btn: "bg-gradient-brand",
    badge: "bg-brand-orange/10 text-brand-orange ring-brand-orange/30",
    glow: "bg-brand-orange/30",
  },
  purple: {
    text: "text-brand-purple",
    btn: "bg-gradient-to-r from-brand-purple to-fuchsia-500",
    badge: "bg-brand-purple/10 text-brand-purple ring-brand-purple/30",
    glow: "bg-brand-purple/30",
  },
  emerald: {
    text: "text-emerald-400",
    btn: "bg-gradient-to-r from-emerald-500 to-teal-500",
    badge: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/30",
    glow: "bg-emerald-500/25",
  },
} as const;

function TechBadge({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-foreground/80 backdrop-blur-sm transition hover:border-brand-orange/40 hover:text-brand-orange">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {tag}
    </span>
  );
}

function ProjectImage({ src, alt, accent }: { src: string; alt: string; accent: keyof typeof accentMap }) {
  const a = accentMap[accent];
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div aria-hidden className={`absolute -inset-10 ${a.glow} opacity-60 blur-3xl`} />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1020] shadow-2xl">
        {/* browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.03] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="relative overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width={1280}
            height={800}
            className="block aspect-[16/10] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-orange/20 via-transparent to-brand-purple/25 mix-blend-overlay" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1020]/60 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}

function ProjectActions({ p }: { p: Project }) {
  const a = accentMap[p.accent];
  const fullName = `${p.name}${p.nameAccent ?? ""}`.trim();
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {p.href && (
        <a
          href={p.href}
          className={`group/btn inline-flex items-center gap-2 rounded-full ${a.btn} px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5`}
        >
          Voir le projet
          <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-1" />
        </a>
      )}
      {p.code && (
        <a
          href={p.code}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground/90 backdrop-blur-sm transition hover:border-brand-orange/40 hover:text-brand-orange"
        >
          Code <Github className="h-4 w-4" />
        </a>
      )}
      <WhatsAppCTA projectName={fullName} />
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projets"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      {/* premium dark backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#0B1020]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-80">
        <div className="absolute -top-32 left-1/4 h-[32rem] w-[32rem] rounded-full bg-brand-orange/20 blur-[120px]" />
        <div className="absolute top-1/2 -right-32 h-[36rem] w-[36rem] rounded-full bg-brand-purple/25 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[28rem] w-[28rem] rounded-full bg-indigo-600/15 blur-[120px]" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]"
      />

      <div className="mx-auto max-w-7xl text-white">
        {/* Header */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Mes réalisations
              </p>
              <h2 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
                Projets
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/60">
                Découvrez une sélection de projets que j'ai conçus et développés
                avec passion pour répondre à des besoins concrets.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-brand-orange/40 hover:text-brand-orange"
            >
              <Sparkles className="h-4 w-4 text-brand-orange" />
              Voir tous les projets
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        {/* Featured project */}
        <Reveal delay={0.05}>
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="group relative mt-12 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl sm:p-10"
          >
            <div aria-hidden className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-orange/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-brand-purple/25 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
                  <Star className="h-3.5 w-3.5 fill-white" /> Projet vedette
                </span>
                <h3 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {FEATURED.name}
                  <span className="text-gradient-brand">{FEATURED.nameAccent}</span>
                </h3>
                <p className="mt-2 text-base font-semibold text-brand-orange">{FEATURED.type}</p>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
                  {FEATURED.desc}
                </p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-orange" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {FEATURED.tags.map((t) => <TechBadge key={t} tag={t} />)}
                </div>

                <ProjectActions p={FEATURED} />
              </div>

              <ProjectImage src={FEATURED.image} alt={FEATURED.name} accent={FEATURED.accent} />
            </div>
          </motion.article>
        </Reveal>

        {/* Secondary projects */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {SECONDARY.map((p, i) => (
            <Reveal key={p.name} delay={0.1 + i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/20 hover:shadow-[0_30px_80px_-30px_rgba(255,106,0,0.35)]"
              >
                <ProjectImage src={p.image} alt={p.name} accent={p.accent} />
                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {p.name}<span className={accentMap[p.accent].text}>{p.nameAccent}</span>
                  </h3>
                  <p className={`mt-1 text-sm font-semibold ${accentMap[p.accent].text}`}>{p.type}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => <TechBadge key={t} tag={t} />)}
                  </div>
                  <ProjectActions p={p} />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* Compact project */}
        <Reveal delay={0.2}>
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="group relative mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ring-1 ${accentMap[COMPACT.accent].badge}`}>
                  <Star className="h-3.5 w-3.5" /> Refonte
                </span>
                <h3 className="mt-4 text-3xl font-bold tracking-tight">{COMPACT.name}</h3>
                <p className={`mt-1 text-sm font-semibold ${accentMap[COMPACT.accent].text}`}>{COMPACT.type}</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">{COMPACT.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {COMPACT.tags.map((t) => <TechBadge key={t} tag={t} />)}
                </div>
                <ProjectActions p={COMPACT} />
              </div>
              <ProjectImage src={COMPACT.image} alt={COMPACT.name} accent={COMPACT.accent} />
            </div>
          </motion.article>
        </Reveal>

        {/* CTA banner */}
        <Reveal delay={0.25}>
          <div className="relative mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <div aria-hidden className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-brand-orange/20 blur-3xl" />
            <div className="relative flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                  <Rocket className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Un projet en tête ?</h3>
                  <p className="text-sm text-white/65">
                    Je suis disponible pour donner vie à vos idées et créer des solutions digitales sur mesure.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Discutons de votre projet
                <Send className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="a-propos" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-2 shadow-soft">
              <div className="rounded-2xl bg-gradient-to-br from-primary-soft to-accent p-10">
                <div className="text-6xl font-black text-gradient-brand">“</div>
                <p className="mt-2 text-2xl font-semibold leading-snug text-foreground">
                  Je transforme des idées en expériences web modernes et utiles.
                </p>
                <p className="mt-6 text-sm font-semibold text-brand-orange">— Salem.</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">À propos</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Une passion pour le web, sans détour.</h2>
          <p className="mt-5 text-base text-muted-foreground">
            Je suis Salem, étudiante en informatique et passionnée par le développement web.
            Je m'investis dans la création d'expériences numériques modernes. J'aime apprendre,
            relever de nouveaux défis et construire des projets qui allient esthétique,
            performance et simplicité.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Me connaître davantage <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Expertise ---------- */
const EXPERTISE = [
  {
    icon: Layout,
    t: "Développement Front-end",
    d: "Interfaces modernes, responsives et accessibles.",
    techs: ["HTML", "CSS", "JavaScript", "REACT JS" ,"TAILWIND CSS"],
  },
  {
    icon: Code2,
    t: "Développement Back-end",
    d: "Logique serveur et APIs robustes.",
    techs: ["PHP" , "NODE JS"],
  },
  {
    icon: Database,
    t: "Bases de données",
    d: "Conception, modélisation et requêtes optimisées.",
    techs: ["MySQL", "PostgreSQL"],
  },
  {
    icon: Wrench,
    t: "Outils",
    d: "Mon écosystème de travail au quotidien.",
    techs: ["Git", "GitHub", "Swagger", "VS Code"],
  },
];

function Expertise() {
  return (
    <section id="expertise" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Expertise</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Ce que je sais faire</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE.map(({ icon: Icon, t, d, techs }, i) => (
            <Reveal key={t} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-soft"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition group-hover:opacity-25" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-brand-orange/20 bg-primary-soft px-3 py-1 text-xs font-semibold text-brand-orange transition group-hover:border-brand-orange/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Services ---------- */
const SERVICES = [
  { icon: Monitor, t: "Sites web modernes", d: "Design et développement sur mesure" },
  { icon: Layout, t: "Applications web", d: "Solutions adaptées à vos besoins" },
  { icon: Code2, t: "Interfaces responsives", d: "Expérience optimale sur tous écrans" },
  { icon: Wrench, t: "Maintenance & amélioration", d: "Optimisation et nouvelles fonctionnalités" },
];

function Services() {
  return (
    <section id="services" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Services</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Comment je peux vous aider</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-soft"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition group-hover:opacity-30" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-brand-orange">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Contact</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Discutons de votre projet</h2>
          <p className="mt-4 text-muted-foreground">
            Une idée, une collaboration, une question ? Je vous réponds rapidement.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: Mail, v: "ebonguesalem@gmail.com" },
              { icon: Phone, v: "+237 6 58 88 45 51" },
              { icon: MapPin, v: "Douala, Cameroun" },
            ].map(({ icon: Icon, v }) => (
              <li key={v} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-brand-orange">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-medium">{v}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            {[
              { icon: Github, href: "https://github.com/Ebong-Salem", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/salem-ebongue-2b104137b", label: "LinkedIn" },
              { icon: MessageCircle, href: "https://wa.me/237658884551", label: "WhatsApp" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-foreground/70 transition hover:text-brand-orange hover:border-brand-orange/40"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8"
          >
            <input type="hidden" name="subject" value="Nouveau message — Portfolio Salem" />
            <div className="grid gap-4">
              <Field label="Nom" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Sujet" name="subject" />
              <Field label="Votre message" name="message" textarea />
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                <Send className="h-4 w-4" />
              </button>
              {status === "success" && (
                <p className="text-center text-sm font-semibold text-emerald-400">
                  ✓ Message envoyé ! Je vous répondrai bientôt.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm font-semibold text-red-400">
                  ✗ Une erreur est survenue. Réessayez.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}


function Field({ label, name, type = "text", textarea = false }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const cls = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} required className={cls} />
      ) : (
        <input name={name} type={type} required className={cls} />
      )}
    </label>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <SalemLogo className="h-11 w-auto" />
          <p className="text-sm font-medium text-gradient-brand">
            Turning Ideas into Digital Solutions
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SALEM Studio. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

/* ---------- Certifications ---------- */
const CERTIFICATIONS = [
  // {
  //   icon: GraduationCap,
  //   platform: "Google Digital Garage",
  //   name: "Fondamentaux du marketing numérique",
  //   year: "2024",
  //   desc: "Stratégie digitale, SEO, analytics et présence en ligne.",
  //   href: "https://learndigital.withgoogle.com/digitalgarage",
  //   color: "from-orange-500 to-amber-500",
  // },
  // {
  //   icon: Code2,
  //   platform: "freeCodeCamp",
  //   name: "Responsive Web Design",
  //   year: "2024",
  //   desc: "HTML, CSS, accessibilité et design responsive moderne.",
  //   href: "https://www.freecodecamp.org/",
  //   color: "from-emerald-500 to-teal-500",
  // },
  {
    icon: Award,
    platform: "Cisco Skills for All",
    name: "Introduction to HTML",
    year: "2025",
    desc: "Bases du developpement web . Struturation des pages HTML",
    href: html,
    color: "from-sky-500 to-indigo-500",
  },
   {
    icon: Award,
    platform: "Cisco Skills for All",
    name: "Introduction au CSS",
    year: "2025",
    desc: "Bases du developpement web . Styles des pages",
    href: css,
    color: "from-sky-500 to-indigo-500",
  },
   {
    icon: Award,
    platform: "Cisco Skills for All",
    name: "JAVASCRIPT ESSANTIALS 1",
    year: "2025",
    desc: "Bases du developpement web . ",
    href: js,
    color: "from-sky-500 to-indigo-500",
  },
  // {
  //   icon: BookOpen,
  //   platform: "OpenClassrooms",
  //   name: "Développez votre site web (HTML5 / CSS3)",
  //   year: "2024",
  //   desc: "Création de sites web statiques modernes et stylés.",
  //   href: "https://openclassrooms.com/",
  //   color: "from-fuchsia-500 to-purple-500",
  // },
  // {
  //   icon: Sparkles,
  //   platform: "Udemy",
  //   name: "JavaScript moderne ES6+",
  //   year: "2025",
  //   desc: "JS contemporain, asynchrone et bonnes pratiques.",
  //   href: "https://www.udemy.com/",
  //   color: "from-rose-500 to-pink-500",
  // },
  // {
  //   icon: Star,
  //   platform: "Coursera",
  //   name: "HTML, CSS and JavaScript for Web Developers",
  //   year: "2025",
  //   desc: "Parcours complet front-end, projets pratiques.",
  //   href: "https://www.coursera.org/",
  //   color: "from-blue-500 to-cyan-500",
  // },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#0B1020]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-80">
        <div className="absolute -top-32 left-10 h-[28rem] w-[28rem] rounded-full bg-brand-orange/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-brand-purple/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl text-white">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Formation continue
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Certifications
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/60">
                Une sélection de formations qui nourrissent ma pratique au quotidien.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur-sm">
              <Award className="h-4 w-4 text-brand-orange" />
              {CERTIFICATIONS.length} certifications
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map(({ icon: Icon, platform, name, year, desc, href, color }, i) => (
            <Reveal key={platform + name} delay={i * 0.05}>
              <motion.a
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/20 hover:shadow-[0_30px_80px_-30px_rgba(255,106,0,0.4)]"
                style={{ borderRadius: 22 }}
              >
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-orange/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
                <div aria-hidden className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-brand-purple/25 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                <div className="flex items-center gap-4">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-glow`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">{platform}</p>
                    <p className="text-xs font-medium text-brand-orange">{year}</p>
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-white">
                  {name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                  <span className="font-semibold text-white/70 transition group-hover:text-brand-orange">
                    Voir le certificat
                  </span>
                  <ExternalLink className="h-4 w-4 text-white/50 transition group-hover:translate-x-0.5 group-hover:text-brand-orange" />
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

