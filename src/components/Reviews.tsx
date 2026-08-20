import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { reviewsSummary, site, testimonials } from "@/config/site";

export function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Avaliações</p>
            <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] font-semibold uppercase leading-[1.02]">
              O que dizem
              <span className="block text-gradient-gold">os clientes</span>
            </h2>
          </div>

          <div className="flex items-center gap-6 border border-border bg-card px-7 py-6">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold text-gold">
                  {reviewsSummary.rating}
                </span>
                <Star className="h-5 w-5 shrink-0 fill-gold text-gold" />
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                no {reviewsSummary.source}
              </p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <span className="font-display text-4xl font-semibold">
                {reviewsSummary.count}
              </span>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                avaliações
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <blockquote className="group h-full border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50">
                <Quote className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  “{item.text}”
                </p>
                <footer className="mt-7 border-t border-border pt-5">
                  <p className="font-display text-sm uppercase tracking-[0.2em]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {site.city}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground/70">
          Depoimentos exibidos como placeholders — substituir por avaliações reais.
        </p>
      </div>
    </section>
  );
}
