import "./Project-View-Simple-Style.css";
import { useEffect, useState } from "react";

type ProjectViewSimpleProps = {
  name: string;
  description: string;
  imageUrl: string;
  typeOfCase?: string;
  typeOfProject?: string;
  count: number;
};

function Project_View_Simple({
  name,
  description,
  imageUrl,
  typeOfCase,
  typeOfProject,
  count,
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
      {isMobile && (
        <img className="project-view-simple-image" src={imageUrl} alt={name} />
      )}
      {/* Desktop: se count ímpar, imagem antes; Mobile: sempre antes */}
      {!isMobile && count % 2 !== 0 && (
        <img className="project-view-simple-image" src={imageUrl} alt={name} />
      )}

      <div className="project-view-simple-container-content">
        <span
          className={
            (isMobile ? "body-16-medium" : "body-18-medium") + " color-red-01"
          }
        >
          <strong>{typeOfCase + " / " + typeOfProject}</strong>
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

      {/* Desktop: se count par, imagem depois; Mobile: sempre depois */}
      {!isMobile && count % 2 === 0 && (
        <img className="project-view-simple-image" src={imageUrl} alt={name} />
      )}

      {/* Mobile: imagem sempre depois (ou antes, se preferir) */}
    </div>
  );
}

export default Project_View_Simple;
