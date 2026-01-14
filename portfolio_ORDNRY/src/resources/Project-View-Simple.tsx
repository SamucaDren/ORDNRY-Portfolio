import "./Project-View-Simple-Style.css";

type ProjectViewSimpleProps = {
  name: string;
  description: string;
  imageUrl: string;
};

function Project_View_Simple({
  name,
  description,
  imageUrl,
}: ProjectViewSimpleProps) {
  return (
    <div className="project-view-simple-container">
      <img className="project-view-simple-image" src={imageUrl} alt={name} />
      <div className="project-view-simple-container-content">
        <h3 className="heading-48-medium color-neutral-800">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project_View_Simple;
