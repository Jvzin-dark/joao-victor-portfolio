import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="heroOverlay" />
      <div className="heroContent">
        <p className="eyebrow">
          <Sparkles size={16} />
          {profile.role}
        </p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="heroText">
          Construo interfaces web limpas, rápidas e agradáveis para negócios.
        </p>
        <div className="heroActions">
          <a className="button primary" href="#projetos">
            Ver projetos
            <ArrowUpRight size={17} />
          </a>
          <a className="button secondary" href="#contato">
            Vamos conversar
            <Mail size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
