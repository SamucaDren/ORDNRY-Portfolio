import "./Project-View-Simple-Style.css";
import { useEffect, useState, useRef, memo } from "react";

type ProjectViewSimpleProps = {
  name: string;
  description: string;
  imageUrl: string;
  typeOfCase?: string;
  typeOfProject?: string;
  count: number;
  behanceLink?: string | null;
  githubLink?: string | null;
  hostLink?: string | null;
};

function Project_View_Simple({
  name,
  description,
  imageUrl,
  typeOfCase,
  typeOfProject,
  count,
  behanceLink,
  githubLink,
  hostLink,
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
    loading: "lazy",
  };

  const mainLink = hostLink || behanceLink || githubLink;

  const handleImageClick = () => {
    if (mainLink) {
      window.open(mainLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation();
    window.open(link, "_blank", "noopener,noreferrer");
    /*
    window.gtag?.("event", `acesso em ${name}`, {
      event_category: "interacao",
      event_label: `acesso em ${name}`,
    });*/
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

        {hostLink && (
          <a
            className="body-20-medium color-red-01 link-project-view-simple"
            href={hostLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleClick(e, hostLink)}
          >
            Conferir Site
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

        {behanceLink && (
          <a
            className="body-20-medium color-red-01 link-project-view-simple"
            href={behanceLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleClick(e, behanceLink)}
          >
            Conferir Projeto
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

        {githubLink && (
          <a
            className="body-20-medium color-red-01 link-project-view-simple"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleClick(e, githubLink)}
          >
            Conferir Projeto no GitHub
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
          <div className="project-view-simple-image-element-hover-image" />
          <img {...imgProps} />
        </div>
      )}
    </div>
  );
}

export default memo(Project_View_Simple);
