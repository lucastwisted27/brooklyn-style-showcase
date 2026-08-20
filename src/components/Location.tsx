import { Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/config/site";

export function Location() {
  return (
    <section id="localizacao" className="border-y border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <p className="eyebrow">Localização</p>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] font-semibold uppercase leading-[1.02]">
            Onde estamos
          </h2>
          <div className="hairline my-8 max-w-xs" />

          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
            <address className="not-italic leading-relaxed">
              <span className="block font-display text-lg uppercase tracking-wide">
                {site.name}
              </span>
              <span className="block text-muted-foreground">{site.address.line1}</span>
              <span className="block text-muted-foreground">{site.address.line2}</span>
            </address>
          </div>

          <div className="mt-8 flex items-start gap-4">
            <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
            <ul className="space-y-1 text-sm text-muted-foreground">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-foreground">{h.days}:</span> {h.time}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={site.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-sm border border-gold px-8 py-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
          >
            Ver no Google Maps
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border shadow-[var(--shadow-elevated)]">
            <iframe
              title="Mapa da localização da Brooklyn House Barbearia"
              src={site.links.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale contrast-125 transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
