import { useEffect, useState } from "react";
import "./ProjectsSection-Style.css";
import Project_View_Simple from "../../../resources/Project-View-Simple";
import { getProjetos } from "../../../Services/prismic";
import type { ProjetoPortfolio } from "../../../Services/prismic";
import IsMobile from "../../../utils/isMobile";

function ProjectsSection() {
  const isMobile = IsMobile();
  const [projetos, setProjetos] = useState<ProjetoPortfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjetos() {
      try {
        setLoading(true);
        const data = await getProjetos(); // sem argumentos
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
          {isMobile ? null : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="40"
              viewBox="0 0 37 40"
              className="projects-element-icon"
            >
              <path
                opacity="0.5"
                d="M0 27.2774L12.5307 19.7455L0 12.2137L4.144 5.80153L15.2933 13.7405L14.8 0H22.2L21.7067 13.7405L32.856 5.80153L37 12.2137L24.4693 19.7455L37 27.2774L32.856 33.6896L21.7067 25.7506L22.2 40H14.8L15.2933 25.7506L4.144 33.6896L0 27.2774Z"
              />
            </svg>
          )}

          <p className="body-20-medium color-neutral-600">
            Projetos e estudos de UI focados em produto, usabilidade e impacto.
          </p>

          {isMobile ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="40"
              viewBox="0 0 37 40"
              className="projects-element-icon"
            >
              <path
                opacity="0.5"
                d="M0 27.2774L12.5307 19.7455L0 12.2137L4.144 5.80153L15.2933 13.7405L14.8 0H22.2L21.7067 13.7405L32.856 5.80153L37 12.2137L24.4693 19.7455L37 27.2774L32.856 33.6896L21.7067 25.7506L22.2 40H14.8L15.2933 25.7506L4.144 33.6896L0 27.2774Z"
              />
            </svg>
          ) : null}

          <div className="linha-element"></div>
        </div>
      </div>

      {loading && <p>Carregando projetos...</p>}
      {error && <p>{error}</p>}
      {projetos.map((projeto, index) => (
        <Project_View_Simple
          key={projeto.id}
          count={index + 1} // aqui é o número do projeto
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

export default ProjectsSection;
