import styles from "./style.module.css";
import Image from "next/image";
import CardProject from "../../(components)/card-project";
import { ProjetoUIDesign } from "@/app/types/project";

interface ProjectsSectionProps {
  projetos: ProjetoUIDesign[];
}

export default async function ProjectsSection({
  projetos,
}: ProjectsSectionProps) {
  return (
    <section className={styles.projectsSection} id="projectsSection">
      <div className={styles.projectsContentContainer}>
        <div className={styles.projectsHeaderContainer}>
          <span className="tag">DESTAQUES</span>

          <h2 className={styles.headingProjectsSection}>
            Meus projetos de UI Design
          </h2>
        </div>

        <div className={styles.projectsCopyContainer}>
          <Image
            width={37}
            height={40}
            src="/ordnry-icon.svg"
            alt="Ícone ORDNRY"
            className={styles.ornnryIconDesktop}
          />

          <p className="body-20-medium color-neutral-600">
            Uma seleção de trabalhos autorais e projetos desenvolvidos para
            estudo e prática
          </p>

          <div className={styles.linhaElement} />
        </div>
      </div>

      {projetos.map((projeto) => (
        <CardProject
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
