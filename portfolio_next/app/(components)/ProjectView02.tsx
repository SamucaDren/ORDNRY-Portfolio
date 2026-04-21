import "./ProjectView02-Style.css";

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

function ProjectView02({
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
      className="project-card-container"
      style={{ "--urlBackground": `url(${imageUrl})` } as React.CSSProperties}
    >
      <span className="tag">
        {[typeOfCase, typeOfProject].filter(Boolean).join(" / ")}
      </span>
      <h3>{name}</h3>
      <p>{description}</p>
    </a>
  );
}

export default ProjectView02;
