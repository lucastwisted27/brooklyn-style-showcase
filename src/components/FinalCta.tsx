import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/config/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow">Brooklyn House</p>
          <h2 className="mt-6 text-[clamp(2.25rem,6vw,4rem)] font-semibold uppercase leading-[1.02]">
            Seu próximo visual
            <span className="block text-gradient-gold">começa aqui.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground sm:text-lg">
            Agende seu horário e venha conhecer a experiência Brooklyn House.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center rounded-sm bg-gold px-10 py-5 font-display text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:brightness-110 active:scale-[0.98] sm:w-auto"
          >
            Agendar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
