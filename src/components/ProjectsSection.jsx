import { projects } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function ProjectsSection() {
  return (
    <section className="section projectsSection" id="projetos">
      <SectionHeader compact kicker="Projetos" title="Trabalhos com foco em clareza, velocidade e conversão." />

      <div className="projectGrid">
        {projects.map((project, index) => (
          <article className={`projectCard ${project.accent}`} key={project.title}>
            <div className="projectVisual" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i />
              <b />
            </div>
            <div className="projectContent">
              <span>{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tagRow">
                {project.tags.map(tag => <em key={tag}>{tag}</em>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
