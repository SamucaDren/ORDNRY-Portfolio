import styles from "./style.module.css";
import Image from "next/image";

type ProjectViewSimpleProps = {
  name: string;
  description: string;
  imageUrl: string;
  typeOfCase?: string;
  typeOfProject?: string;
  behanceLink?: string | null;
  githubLink?: string | null;
  hostLink?: string | null;
};

function CardProject({
  name,
  description,
  imageUrl,
  typeOfCase,
  typeOfProject,
  behanceLink,
  githubLink,
  hostLink,
}: ProjectViewSimpleProps) {
  const link = behanceLink ?? githubLink ?? hostLink;

  return (
    <a
      href={link ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.projectCardContainer}
    >
      <span className={`${styles.tag} tag`}>
        {[typeOfCase, typeOfProject].filter(Boolean).join(" / ")}
      </span>

      <h3>{name}</h3>

      <p>{description}</p>

      <div className={styles.overlay} />

      <Image
        fill
        src={imageUrl}
        alt={name}
        className={styles.imageProject}
        sizes="(max-width: 768px) calc(100vw - 48px), 1056px"
      />
    </a>
  );
}

export default CardProject;
