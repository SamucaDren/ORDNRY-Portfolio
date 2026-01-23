//import { useEffect, useState } from "react";

import "./HeroSection-Style.css";
import Button from "../../../resources/Button";
import Navbar from "../../../resources/NavBar";
import SlideImagesElement from "../../../resources/slide_images_element";
//import ORDNRY_overlay_hero from "../../../assets/ORDNRY_overlay_hero.svg";
import scroolToSection from "../../../utils/scroolToSection";

function HeroSection() {
  return (
    <header className="hero-section">
      <Navbar />
      <div className="hero-content-container">
        <div className="hero-copy-container">
          <div className="hero-heading-container">
            <span className="tag-white">DESIGN EM ESSÊNCIA</span>
            <h1 className="heading-hero-section">
              O design perfeito é <strong>ORDINÁRIO!</strong>
            </h1>
          </div>
          <p className="subtitle-herosection">
            Crio soluções digitais que equilibram design e usabilidade,
            transformando interação em uma jornada fluida e significativa.
          </p>
        </div>
        <Button
          text="CONFERIR PROJETOS"
          onClick={() => scroolToSection("projects-section")}
        />
      </div>
      {/*      <img
        loading="lazy"
        src={ORDNRY_overlay_hero}
        alt="ORDNRY overlay"
        className="overlay-hero"
      />*/}
      <SlideImagesElement />
    </header>
  );
}

export default HeroSection;
