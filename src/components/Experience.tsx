import { Armchair, HeartHandshake, Scissors, Sparkles } from "lucide-react";
import experienceImage from "@/assets/experience.jpg";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Atendimento personalizado",
    text: "Cada visita começa com uma conversa para entender o que você procura.",
  },
  {
    icon: Armchair,
    title: "Ambiente confortável",
    text: "Um espaço pensado para você relaxar do início ao fim.",
  },
  {
    icon: Scissors,
    title: "Profissionais especializados",
    text: "Equipe dedicada à técnica e ao acabamento de cada serviço.",
  },
  {
    icon: Sparkles,
    title: "Cuidado nos detalhes",
    text: "O que faz a diferença está no acabamento e na atenção final.",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Experiência</p>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] font-semibold uppercase leading-[1.02]">
            Uma experiência
            <span className="block text-gradient-gold">feita para você</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <img
              src={experienceImage}
              alt="Barbeiro finalizando o corte de um cliente com máquina profissional"
              loading="lazy"
              width={1400}
              height={1000}
              className="aspect-[7/5] w-full object-cover shadow-[var(--shadow-elevated)]"
            />
          </Reveal>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90}>
                <div className="group h-full bg-background p-7 transition-colors duration-500 hover:bg-card">
                  <pillar.icon
                    className="h-6 w-6 shrink-0 text-gold transition-transform duration-500 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 text-lg font-semibold uppercase tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
