import { Rocket } from "lucide-react";
import { profile } from "../data/portfolio.js";

export default function Footer({ year }) {
  return (
    <footer className="siteFooter">
      <span>© {year} {profile.name}. Portfólio web.</span>
      <a href="#top">
        Voltar ao topo
        <Rocket size={16} />
      </a>
    </footer>
  );
}
