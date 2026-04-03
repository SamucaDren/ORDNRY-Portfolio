import "./ProjectView02-Style.css";
import isMobile from "../utils/isMobile";

type ProjectViewSimpleProps = {
  name: string;
  description: string;
  imageUrl: string;
  typeOfCase?: string;
  typeOfProject?: string;
  count?: number;
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
    <div
      className="project-card-container"
      style={{ "--urlBackground": `url(${imageUrl})` } as React.CSSProperties}
      onClick={() => {
        if (link) window.open(link, "_blank");
      }}
    >
      <span className="tag">{typeOfCase + " / " + typeOfProject}</span>
      <h3>{name}</h3>
      <p>{description}</p>
      {isMobile() ? null : <div className="overlayHover" />}
    </div>
  );
}
export default ProjectView02;
