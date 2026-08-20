import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { Reveal } from "@/components/Reveal";

// Substitua estas imagens pelas fotos reais da Brooklyn House.
const images = [
  { src: g1, alt: "Cliente relaxando durante atendimento com toalha quente", span: "sm:row-span-2" },
  { src: g2, alt: "Ferramentas de barbear sobre superfície escura", span: "" },
  { src: g3, alt: "Homem com corte degradê e barba alinhada", span: "sm:row-span-2" },
  { src: g4, alt: "Salão de barbearia com cadeiras de couro", span: "" },
  { src: g5, alt: "Detalhe da modelagem de barba com tesoura", span: "" },
  { src: g6, alt: "Toalhas e produtos de barbearia em ambiente escuro", span: "" },
];

export function Gallery() {
  return (
    <section id="galeria" className="border-y border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Galeria</p>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] font-semibold uppercase leading-[1.02]">
            O ambiente e o trabalho
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[200px] lg:grid-cols-3 lg:auto-rows-[240px]">
          {images.map((image, i) => (
            <Reveal key={i} delay={i * 70} className={image.span}>
              <figure className="group relative h-full w-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-3 border border-gold/0 transition-colors duration-500 group-hover:border-gold/60" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
