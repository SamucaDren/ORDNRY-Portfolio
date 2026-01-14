import { useEffect, useState } from "react";
import "./ProjectsSection-Style.css";
import Project_View_Simple from "../../../resources/Project-View-Simple";
import { getProjetos } from "../../../Services/prismic";
import type { ProjetoPortfolio } from "../../../Services/prismic";

function ProjectsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [projetos, setProjetos] = useState<ProjetoPortfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // detectar mobile
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // buscar projetos
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
    <section className="projects-section">
      <div className="projects-content-container">
        <div className="projects-header-container">
          <span
            className={`color-red-01 ${
              isMobile ? "body-16-medium" : "body-18-medium"
            }`}
          >
            <strong>DESTAQUES</strong>
          </span>
          <h2
            className={`color-neutral-800 ${
              isMobile ? "heading-40-semi" : "heading-56-semi"
            }`}
          >
            Meus projetos de UI/UX
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
            Interfaces e experiências desenvolvidas com foco em usabilidade e
            estética funcional.
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
