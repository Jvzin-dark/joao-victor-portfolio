import { Braces, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { services } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

const serviceIcons = {
  responsive: MonitorSmartphone,
  code: Braces,
  quality: ShieldCheck,
};

export default function AboutSection() {
  return (
    <section className="section introSection" id="sobre">
      <SectionHeader kicker="Sobre" title="Design enxuto, execução cuidadosa e código pronto para evoluir." />
      <div className="introGrid">
        <div className="introCopy">
          <p>
            Meu trabalho combina estética minimalista, boas decisões de produto e implementação prática. Eu gosto de criar experiências que carregam rápido, explicam bem a oferta e funcionam sem fricção em qualquer tela.
          </p>
          <p>
            O foco é entregar páginas e aplicações que não parecem improvisadas: componentes consistentes, estados tratados, acessibilidade básica e uma base clara para continuar crescendo.
          </p>
        </div>
        <div className="serviceGrid">
          {services.map(service => {
            const Icon = serviceIcons[service.icon];

            return (
              <article className="serviceCard" key={service.title}>
                <Icon size={22} aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
