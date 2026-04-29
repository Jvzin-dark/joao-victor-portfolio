import { Code2, Layers3, MessageCircle, Palette, Zap } from "lucide-react";
import { profile } from "../data/portfolio.js";

const contactHighlights = [
  { icon: Code2, text: "Disponível para projetos web" },
  { icon: Palette, text: "UI limpa e identidade visual consistente" },
  { icon: Zap, text: "Entregas rápidas sem abrir mão de qualidade" },
  { icon: Layers3, text: "Arquitetura preparada para manutenção" },
];

export default function ContactSection() {
  const whatsappMessage = encodeURIComponent("Olá, João Victor! Vi seu portfólio e quero conversar sobre um projeto.");
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${whatsappMessage}`;

  return (
    <section className="contactSection" id="contato">
      <div className="contactContent">
        <span className="sectionKicker">Contato</span>
        <h2>Tem uma ideia para tirar do papel?</h2>
        <p>
          Me chama para construir uma presença digital elegante, funcional e fácil de manter.
        </p>
        <div className="contactActions">
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Falar no WhatsApp
            <MessageCircle size={17} />
          </a>
        </div>
      </div>
      <div className="contactPanel" aria-label="Resumo de disponibilidade">
        {contactHighlights.map(item => (
          <div key={item.text}>
            <item.icon size={22} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
