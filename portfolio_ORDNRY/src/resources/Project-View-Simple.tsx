import "./Project-View-Simple-Style.css";
import { useEffect, useState } from "react";

type ProjectViewSimpleProps = {
  name: string;
  description: string;
  imageUrl: string;
  typeOfCase?: string;
  typeOfProject?: string;
};

function Project_View_Simple({
  name,
  description,
  imageUrl,
  typeOfCase,
  typeOfProject,
}: ProjectViewSimpleProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="project-view-simple-container">
      <img className="project-view-simple-image" src={imageUrl} alt={name} />
      <div className="project-view-simple-container-content">
        <span
          className={
            (isMobile ? "body-16-medium" : "body-18-medium") + " color-red-01"
          }
        >
          {typeOfCase + " / " + typeOfProject}
        </span>
        <h3
          className={
            (isMobile ? "heading-32-semi" : "heading-48-medium") +
            " color-neutral-800"
          }
        >
          {name}
        </h3>
        <p
          className={
            (isMobile ? "body-18-medium" : "body-20-medium") +
            " color-neutral-500"
          }
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default Project_View_Simple;
