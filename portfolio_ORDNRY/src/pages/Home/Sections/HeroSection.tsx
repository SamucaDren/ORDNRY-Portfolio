//import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import "./HeroSection-Style.css";
import Button from "../../../resources/Button";
import Navbar from "../../../resources/NavBar";
import ORDNRY_overlay_hero from "../../../assets/ORDNRY_overlay_hero.svg";

function HeroSection() {
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
    <section className="hero-section">
      <Navbar />
      <div className="hero-content-container">
        <div className="hero-copy-container">
          <div className="hero-heading-container">
            <span
              className={`color-red-withe-01 ${
                isMobile ? "body-16-medium" : "body-18-medium"
              }`}
            >
              DESIGN EM ESSÊNCIA
            </span>
            <h1
              className={
                "color-neutral-000 " +
                (isMobile ? "heading-48-medium" : "heading-72-medium ")
              }
            >
              O design perfeito é<br></br>
              <strong>ORDINÁRIO!</strong>
            </h1>
          </div>
          <p
            className={
              (isMobile ? "body-16-medium" : "body-18-medium") +
              " color-neutral-200"
            }
          >
            Crio soluções digitais que equilibram design e usabilidade,
            transformando a interação em uma jornada fluida e significativa.
          </p>
        </div>
        <Button text="CONFERIR PROJETOS" />
      </div>
      <img
        src={ORDNRY_overlay_hero}
        alt="ORDNRY overlay"
        className="overlay-hero"
      />
    </section>
  );
}

export default HeroSection;
