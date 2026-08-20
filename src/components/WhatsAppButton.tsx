import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

/** Botão flutuante de WhatsApp — muito acessível no mobile. */
export function WhatsAppFloating() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gold px-5 py-4 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2.2} />
      <span className="hidden sm:inline">Agendar</span>
    </a>
  );
}
