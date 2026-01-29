//import { useEffect, useState } from "react";

import "./HeroSection-Style.css";
import Button from "../../../resources/Button";
import Navbar from "../../../resources/NavBar";
import SlideImagesElement from "../../../resources/slide_images_element";
//import ORDNRY_overlay_hero from "../../../assets/ORDNRY_overlay_hero.svg";
//import Hero_animation from "../../../resources/hero_animation.tsx";
import scroolToSection from "../../../utils/scroolToSection";
import IsMobile from "../../../utils/isMobile.tsx";

function HeroSection() {
  const isMobile = IsMobile();
  return (
    <header className="hero-section">
      <Navbar />
      <div className="hero-content-container">
        <div className="hero-copy-container">
          <div className="hero-heading-container">
            <span className="tag-white">SIMPLES NÃO, ORDINÁRIO</span>
            <h1 className="heading-hero-section">
              <strong>Criatividade</strong> para sua funcionalidade!
            </h1>
          </div>
          <p className="subtitle-herosection">
            O design funcional não grita. Ele funciona. E, às vezes,
            {isMobile ? null : <br />}o ordinário tem um extra antes.
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
