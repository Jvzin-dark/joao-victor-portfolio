export default function SectionHeader({ kicker, title, compact = false }) {
  return (
    <div className={`sectionHeader ${compact ? "compact" : ""}`}>
      <span className="sectionKicker">{kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}
