import aboutImage from "@/assets/about.jpg";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold uppercase leading-[1.02]">
            Mais do que
            <span className="block text-gradient-gold">um corte.</span>
          </h2>
          <div className="hairline my-8 max-w-xs" />
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Na Brooklyn House Barbearia, cada detalhe faz parte da experiência. Um
            ambiente pensado para quem busca cuidado, estilo e um atendimento de
            qualidade.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute -left-4 -top-4 hidden h-full w-full border border-gold/30 sm:block" />
          <img
            src={aboutImage}
            alt="Ambiente de barbearia premium com espelho e bancada de madeira"
            loading="lazy"
            width={1200}
            height={1500}
            className="relative aspect-[4/5] w-full object-cover shadow-[var(--shadow-elevated)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
