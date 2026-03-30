//import { useEffect, useState } from "react";

import "./HeroSection-Style.css";
import Button from "../../../resources/Button";
import Navbar from "../../../resources/NavBar";
import SlideImagesElement from "../../../resources/slide_images_element";
import scroolToSection from "../../../utils/scroolToSection";
import IsMobile from "../../../utils/isMobile.tsx";

function HeroSection() {
  const isMobile = IsMobile();
  return (
    <header className="hero-section">
      <Navbar aplyingTo="front_end" />
      <div className="hero-content-container">
        <div className="hero-copy-container">
          <div className="hero-heading-container">
            <span className="tag-white">ORDINÁRIO SIM, SIMPLISTA NÃO</span>
            <h1 className="heading-hero-section">
              Código que gera experiência!
            </h1>
          </div>
          <p className="subtitle-herosection">
            Sou desenvolvedor Front-End e contruo sites claros e bem
            estruturados,{isMobile ? " " : <br />}com uma abordagem ordinária na
            programação.
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
      {/*<Hero_animation />*/}
    </header>
  );
}

export default HeroSection;
