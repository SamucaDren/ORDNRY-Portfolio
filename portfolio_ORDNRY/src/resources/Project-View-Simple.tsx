import "./Project-View-Simple-Style.css";
import { useEffect, useState, memo } from "react";

type ProjectViewSimpleProps = {
  name: string;
  description: string;
  imageUrl: string;
  typeOfCase?: string;
  typeOfProject?: string;
  count: number;
  behanceLink?: string;
};

function Project_View_Simple({
  name,
  description,
  imageUrl,
  typeOfCase,
  typeOfProject,
  count,
  behanceLink,
}: ProjectViewSimpleProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const imageBase = `${imageUrl}?auto=format,compress`;

  const imgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
    alt: name,
    className: "project-view-simple-image",
    src: `${imageBase}&w=700`,
    srcSet: `
      ${imageBase}&w=480 480w,
      ${imageBase}&w=700 700w,
      ${imageBase}&w=1024 1024w
    `,
    sizes: "(max-width: 768px) 90vw, 637px",
    loading: count === 1 ? "eager" : "lazy",
    fetchPriority: count === 1 ? "high" : "auto",
  };

  const handleImageClick = () => {
    if (behanceLink) {
      window.open(behanceLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="project-view-simple-container">
      {isMobile && (
        <div
          className="project-view-simple-image-container"
          onClick={handleImageClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            className="project-view-simple-image-container-svg"
          >
            <path d="M25.7071 1C25.7071 0.447718 25.2594 2.58373e-06 24.7071 9.82154e-07L15.7071 1.78294e-06C15.1548 1.44577e-06 14.7071 0.447717 14.7071 1C14.7071 1.55229 15.1548 2 15.7071 2L23.7071 2L23.7071 10C23.7071 10.5523 24.1548 11 24.7071 11C25.2594 11 25.7071 10.5523 25.7071 10L25.7071 1ZM0.707092 25L1.4142 25.7071L25.4142 1.70711L24.7071 1L24 0.292895L-1.44839e-05 24.2929L0.707092 25Z" />
          </svg>
          <div className="project-view-simple-image-element-hover-image"></div>
          <img {...imgProps} />
        </div>
      )}

      {!isMobile && count % 2 !== 0 && (
        <div
          className="project-view-simple-image-container"
          onClick={handleImageClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            className="project-view-simple-image-container-svg"
          >
            <path d="M25.7071 1C25.7071 0.447718 25.2594 2.58373e-06 24.7071 9.82154e-07L15.7071 1.78294e-06C15.1548 1.44577e-06 14.7071 0.447717 14.7071 1C14.7071 1.55229 15.1548 2 15.7071 2L23.7071 2L23.7071 10C23.7071 10.5523 24.1548 11 24.7071 11C25.2594 11 25.7071 10.5523 25.7071 10L25.7071 1ZM0.707092 25L1.4142 25.7071L25.4142 1.70711L24.7071 1L24 0.292895L-1.44839e-05 24.2929L0.707092 25Z" />
          </svg>
          <div className="project-view-simple-image-element-hover-image"></div>
          <img {...imgProps} />
        </div>
      )}

      <div className="project-view-simple-container-content">
        <span className="tag">{typeOfCase + " / " + typeOfProject}</span>

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
            (isMobile ? "body-16-medium" : "body-20-medium") +
            " color-neutral-500"
          }
        >
          {description}
        </p>

        {behanceLink && (
          <a
            className="body-20-medium color-red-01 link-project-view-simple"
            href={behanceLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              window.gtag?.("event", `acesso em ${name}`, {
                event_category: "interacao",
                event_label: `acesso em ${name}`,
              });
            }}
          >
            Ver Projeto
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="15"
              viewBox="0 0 25 15"
            >
              <path d="M24.7071 8.07112C25.0976 7.6806 25.0976 7.04743 24.7071 6.65691L18.3431 0.292946C17.9526 -0.0975785 17.3195 -0.0975785 16.9289 0.292946C16.5384 0.68347 16.5384 1.31664 16.9289 1.70716L22.5858 7.36401L16.9289 13.0209C16.5384 13.4114 16.5384 14.0446 16.9289 14.4351C17.3195 14.8256 17.9526 14.8256 18.3431 14.4351L24.7071 8.07112ZM0 7.36401V8.36401H24V7.36401V6.36401H0V7.36401Z" />
            </svg>
          </a>
        )}
      </div>

      {!isMobile && count % 2 === 0 && (
        <div
          className="project-view-simple-image-container"
          onClick={handleImageClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            className="project-view-simple-image-container-svg"
          >
            <path d="M25.7071 1C25.7071 0.447718 25.2594 2.58373e-06 24.7071 9.82154e-07L15.7071 1.78294e-06C15.1548 1.44577e-06 14.7071 0.447717 14.7071 1C14.7071 1.55229 15.1548 2 15.7071 2L23.7071 2L23.7071 10C23.7071 10.5523 24.1548 11 24.7071 11C25.2594 11 25.7071 10.5523 25.7071 10L25.7071 1ZM0.707092 25L1.4142 25.7071L25.4142 1.70711L24.7071 1L24 0.292895L-1.44839e-05 24.2929L0.707092 25Z" />
          </svg>
          <div className="project-view-simple-image-element-hover-image"></div>
          <img {...imgProps} />
        </div>
      )}
    </div>
  );
}

export default memo(Project_View_Simple);
