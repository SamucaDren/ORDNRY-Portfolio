import "./Project-View-Simple-Style.css";
import { useEffect, useState, useRef, memo } from "react";

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
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
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
    <div ref={containerRef} className="project-view-simple-container">
      {isMobile && (
        <div
          className="project-view-simple-image-container"
          onClick={handleImageClick}
        >
          <div className="project-view-simple-image-element-hover-image" />
          <img {...imgProps} />
        </div>
      )}

      {!isMobile && count % 2 !== 0 && (
        <div
          className="project-view-simple-image-container"
          onClick={handleImageClick}
        >
          <div className="project-view-simple-image-element-hover-image" />
          <img {...imgProps} />
        </div>
      )}

      <div className="project-view-simple-container-content">
        <span className="tag">
          {typeOfCase} / {typeOfProject}
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
          </a>
        )}
      </div>

      {!isMobile && count % 2 === 0 && (
        <div
          className="project-view-simple-image-container"
          onClick={handleImageClick}
        >
          <div className="project-view-simple-image-element-hover-image" />
          <img {...imgProps} />
        </div>
      )}
    </div>
  );
}

export default memo(Project_View_Simple);
