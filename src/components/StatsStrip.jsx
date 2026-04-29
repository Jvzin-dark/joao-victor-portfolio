import { stats } from "../data/portfolio.js";

export default function StatsStrip() {
  return (
    <section className="statsStrip" aria-label="Destaques">
      {stats.map(item => (
        <div className="statItem" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}
