import logo from "@/assets/salem-studio-logo.png.asset.json";

export function SalemLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="SALEM Studio"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
