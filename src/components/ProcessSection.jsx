import { process } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function ProcessSection() {
  return (
    <section className="section processSection" id="processo">
      <SectionHeader kicker="Processo" title="Um fluxo direto para sair da ideia e chegar em uma experiência publicável." />
      <div className="processGrid">
        {process.map((item, index) => (
          <article className="processStep" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
