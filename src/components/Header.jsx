import { Github, Linkedin, Menu, X } from "lucide-react";
import { navigation, profile } from "../data/portfolio.js";

export default function Header({ activeSection, menuOpen, onCloseMenu, onToggleMenu }) {
  return (
    <header className="siteHeader">
      <a className="brand" href="#top" aria-label={`${profile.name} - início`} onClick={onCloseMenu}>
        <span className="brandMark">JV</span>
        <span>
          <strong>{profile.name}</strong>
          <small>{profile.role}</small>
        </span>
      </a>

      <nav className={`mainNav ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
        {navigation.map(item => (
          <a
            className={activeSection === item.id ? "active" : ""}
            href={`#${item.id}`}
            key={item.id}
            onClick={onCloseMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="headerActions">
        <a className="iconLink" href={profile.github} target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a className="iconLink" href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <button className="menuButton" type="button" onClick={onToggleMenu} aria-label="Abrir menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
