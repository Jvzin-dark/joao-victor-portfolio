import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import StatsStrip from "./components/StatsStrip.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ProcessSection from "./components/ProcessSection.jsx";
import StackSection from "./components/StackSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import Toast from "./components/Toast.jsx";
import { navigation, profile } from "./data/portfolio.js";

export default function App() {
  const [activeSection, setActiveSection] = useState("sobre");
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    navigation.forEach(item => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast("E-mail copiado.");
      window.setTimeout(() => setToast(""), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <>
      <Header activeSection={activeSection} menuOpen={menuOpen} onCloseMenu={closeMenu} onToggleMenu={() => setMenuOpen(current => !current)} />
      <main id="top">
        <Hero />
        <StatsStrip />
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
        <StackSection />
        <ContactSection onCopyEmail={copyEmail} />
      </main>
      <Footer year={year} />
      {toast && <Toast message={toast} />}
    </>
  );
}
