import { site, whatsappUrl } from "@/config/site";

export function Footer() {
  const links = [
    { label: "Instagram", href: site.links.instagram },
    { label: "WhatsApp", href: whatsappUrl },
    { label: "Google Maps", href: site.links.googleMaps },
  ];

  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-gold/60 font-display text-sm font-semibold text-gold">
            BH
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-sm uppercase tracking-[0.26em]">
              {site.name}
            </p>
            <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">
              {site.city}
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-8">
        <div className="hairline" />
        <p className="mt-6 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
