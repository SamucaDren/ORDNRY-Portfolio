import { useEffect, useState, lazy, Suspense } from "react";
import "./ProjectsSection-Style.css";
import { getProjetos } from "../../../Services/prismic";
import type { ProjetoPortfolio } from "../../../Services/prismic";

const Project_View_Simple = lazy(
  () => import("../../../resources/Project-View-Simple"),
);

function ProjectsSection() {
  const [projetos, setProjetos] = useState<ProjetoPortfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjetos() {
      try {
        const data = await getProjetos();
        setProjetos(data);
      } catch {
        setError("Erro ao carregar projetos");
      } finally {
        setLoading(false);
      }
    }

    fetchProjetos();
  }, []);

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
            src="./ordnry-icon.svg"
            alt="Ícone ORDNRY"
            className="ornnry-icon-desktop"
          />

          <p className="body-20-medium color-neutral-600">
            Uma seleção de trabalhos autorais e projetos desenvolvidos para
            estudo e prática
          </p>

          <img
            src="./ordnry-icon.svg"
            alt="Ícone ORDNRY"
            className="ornnry-icon-mobile"
          />

          <div className="linha-element" />
        </div>
      </div>

      {error && <p>{error}</p>}

      <Suspense fallback={null}>
        {loading
          ? null
          : projetos.map((projeto, index) => (
              <Project_View_Simple
                key={projeto.id}
                count={index + 1}
                name={projeto.name}
                description={projeto.description}
                imageUrl={projeto.capaUrl}
                typeOfCase={projeto.typeOfCase}
                typeOfProject={projeto.typeOfProject}
                behanceLink={projeto.behanceLink}
              />
            ))}
      </Suspense>
    </section>
  );
}

export default ProjectsSection;
