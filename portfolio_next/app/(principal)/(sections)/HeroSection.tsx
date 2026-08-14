//import { useEffect, useState } from "react";

"use client";
import "./HeroSection-Style.css";
import Button from "../../(components)/button";
import Navbar from "../../(components)/nav-bar";
import SlideImagesElement from "../../(components)/slide-images";
import OtherPortfolioLink from "../../(components)/other-portfolio-link";
import scroolToSection from "../../(utils)/scroolToSection";
import IsMobile from "../../(utils)/isMobile";

function HeroSection() {
  const isMobile = IsMobile();
  return (
    <header className="hero-section">
      <Navbar />
      <div className="hero-content-container">
        <div className="hero-copy-container">
          <div className="hero-heading-container">
            <span className="tag-white">ORDINÁRIO SIM, SIMPLISTA NÃO</span>
            <h1 className="heading-hero-section">
              <strong>Criatividade</strong> {isMobile ? <br /> : null}para{" "}
              {isMobile ? null : <br />}sua {isMobile ? <br /> : null}
              funcionalidade!
            </h1>
          </div>
          <p className="subtitle-herosection">
            Sou designer UI. Interfaces simples na forma, sólidas na
            experiência.
          </p>
        </div>
        <Button
          text="CONFERIR PROJETOS"
          onClick={() => scroolToSection("projects-section")}
        />
        <OtherPortfolioLink portfolio={"Front-End"} url={"/front-end"} />
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
