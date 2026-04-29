import { stack } from "../data/portfolio.js";

export default function StackSection() {
  return (
    <section className="section stackSection" aria-labelledby="stack-title">
      <div>
        <span className="sectionKicker">Stack</span>
        <h2 id="stack-title">Tecnologias e práticas que uso para construir.</h2>
      </div>
      <div className="stackCloud">
        {stack.map(item => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}
