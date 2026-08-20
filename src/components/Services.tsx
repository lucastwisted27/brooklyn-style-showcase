import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services, whatsappUrlFor } from "@/config/site";

export function Services() {
  return (
    <section id="servicos" className="relative border-y border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Serviços</p>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] font-semibold uppercase leading-[1.02]">
            Cuide do seu estilo
          </h2>
          <p className="mt-5 text-muted-foreground">
            Serviços de barbearia com técnica e acabamento. Valores e detalhes sob
            consulta pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="group flex h-full flex-col justify-between bg-background p-8 transition-colors duration-500 hover:bg-card sm:p-10">
                <div>
                  <span className="font-display text-xs tracking-[0.3em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <a
                  href={whatsappUrlFor(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.24em] text-foreground transition-colors duration-300 hover:text-gold"
                >
                  Agendar
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </article>
            </Reveal>
          ))}

          <Reveal delay={services.length * 80}>
            <div className="flex h-full flex-col justify-center bg-background p-8 sm:p-10">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Outros serviços e combinações podem ser consultados diretamente com a
                equipe.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
