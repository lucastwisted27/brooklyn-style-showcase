import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:py-5">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-gold/60 font-display text-sm font-semibold text-gold">
            BH
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-semibold uppercase tracking-[0.28em]">
              Brooklyn House
            </span>
            <span className="block truncate text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
              Barbearia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-gold px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border text-foreground transition-colors hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-[26rem]" : "max-h-0 border-t-transparent",
        )}
      >
        <nav className="flex flex-col px-5 py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3.5 font-display text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 mb-4 rounded-sm bg-gold px-5 py-3 text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground"
          >
            Agendar horário
          </a>
          <p className="pb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {site.neighborhood}
          </p>
        </nav>
      </div>
    </header>
  );
}
