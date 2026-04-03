import HeroSection from "./(sections)/HeroSection";
import ProjectsSection from "./(sections)/ProjectsSection";
import AboutMe from "./(sections)/AboutMe";
import Footer from "./(sections)/Footer";
import MyCarrer from "./(sections)/MyCarrer";
import TopBar from "../../(components)/topbar";
import "./Front_end_page.css";
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
    <div className="home-page">
      <TopBar function_to_portfolio="FRONT-END" />
      <HeroSection />
      <main>
        <ProjectsSection />
        <div className="linha-home"></div>
        <AboutMe />
        <div className="linha-home"></div>
        <MyCarrer />
      </main>
      <Footer />
    </div>
  );
}
export default FrontEnd;
