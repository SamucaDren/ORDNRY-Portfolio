import "./ProjectsSection-Style.css";
import { getProjetos } from "../../(services)/prismic";
import ProjectView02 from "../../(components)/ProjectView02";

export default async function ProjectsSection() {
  let projetos = [];

  try {
    projetos = await getProjetos();
  } catch {
    return <p>Erro ao carregar projetos</p>;
  }

  return (
    <section className="projects-section" id="projects-section">
      <div className="projects-content-container">
        <div className="projects-header-container">
          <span className="tag">DESTAQUES</span>
          <h2 className="heading-projects-section">
            Meus projetos de UI Design
          </h2>
        </div>

        <div className="projects-copy-container">
          <img
            src="/ordnry-icon.svg"
            alt="Ícone ORDNRY"
            className="ornnry-icon-desktop"
          />

          <p className="body-20-medium color-neutral-600">
            Uma seleção de trabalhos autorais e projetos desenvolvidos para
            estudo e prática
          </p>

          <div className="linha-element" />
        </div>
      </div>

      {projetos.map((projeto) => (
        <ProjectView02
          key={projeto.id}
          name={projeto.name}
          description={projeto.description}
          imageUrl={projeto.capaUrl}
          typeOfCase={projeto.typeOfCase}
          typeOfProject={projeto.typeOfProject}
          behanceLink={projeto.behanceLink}
        />
      ))}
    </section>
  );
}
