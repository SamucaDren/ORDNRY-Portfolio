import HeroSection from "./(sections)/HeroSection";
import ProjectsSection from "./(sections)/ProjectsSection";
import AboutMe from "@/app/sections/about-me";
import Footer from "@/app/(components)/footer";
import MyCarrer from "./(sections)/MyCarrer";
import TopBar from "../../(components)/top-bar";

import styles from "./style.module.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ORDNRY | Samuel Nogueira - Desenvolvedor Front-end",
  description:
    "Portfólio de Samuel Nogueira, desenvolvedor Front-end. Sites claros e bem estruturados, com uma abordagem ordinária da programação.",
  keywords: [
    "frontend",
    "portfólio",
    "react",
    "typescript",
    "javascript",
    "dev",
    "desenvolvedor",
  ],
  alternates: {
    canonical: "https://ordnrydesign.com/front-end",
  },
};

function FrontEnd() {
  return (
    <div className={styles.homePage}>
      <TopBar function_to_portfolio="FRONT-END" />

      <HeroSection />

      <main className={styles.mainSection}>
        <ProjectsSection />

        <div className={styles.linhaHome}></div>

        <AboutMe
          aboutSubheadline={
            "Front-end focado no usuário serve a uma função. Interfaces claras e quase imperceptíveis para quem usa, mas bem construídas por baixo."
          }
          personalSubheadline={
            "Sou Samuel Nogueira, gosto de design, código e café. Desenvolvedor Front-End com experiência acadêmica. Foco em transformar design em código com fidelidade."
          }
        />

        <div className={styles.linhaHome}></div>

        <MyCarrer />
      </main>

      <Footer
        aplyingTo="front_end"
        contato={[
          {
            name: "Github",
            src: "https://github.com/SamucaDren",
          },
          {
            name: "Linkedin",
            src: "https://www.linkedin.com/in/samuel-nogueira-ordnry/?locale=pt_BR",
          },
        ]}
      />
    </div>
  );
}

export default FrontEnd;
