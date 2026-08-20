import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { site, whatsappUrl } from "@/config/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImage}
        alt="Interior de barbearia masculina premium com cadeira de barbeiro e detalhes dourados"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Brooklyn House Barbearia
          </p>
          <h1 className="mt-6 animate-in fade-in slide-in-from-bottom-6 text-[clamp(2.75rem,8vw,5.5rem)] font-semibold uppercase leading-[0.95] duration-1000">
            Seu estilo.
            <span className="block text-gradient-gold">Sua identidade.</span>
          </h1>
          <p className="mt-7 max-w-xl animate-in fade-in slide-in-from-bottom-8 text-base leading-relaxed text-muted-foreground duration-1000 sm:text-lg">
            Uma experiência de barbearia pensada para quem valoriza estilo, cuidado e
            qualidade em cada detalhe.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            >
              Agendar horário
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-sm border border-border px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Conhecer a barbearia
            </a>
          </div>

          <p className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-gold" />
            {site.neighborhood}
          </p>
        </div>
      </div>
    </section>
  );
}
