import HeroSection from "./Sections/HeroSection.tsx";
import ProjectsSection from "./Sections/ProjectsSection.tsx";
import AboutMe from "./Sections/AboutMe.tsx";
import Footer from "./Sections/Footer.tsx";
import MyCarrer from "./Sections/MyCarrer.tsx";
import TopBar from "../../resources/topbar.tsx";
import "./Front_end_page.css";
import { Helmet } from "react-helmet";

function FrontEnd() {
  return (
    <div className="home-page">
      <Helmet>
        <title>ORDNRY | Samuel Nogueira - Desenvolvedor Front-end</title>
        <meta
          name="description"
          content="Portfólio de Samuel Nogueira, desenvolvedor Front-end. Sites claros e bem estruturados, com uma abordagem ordinária da programação."
        />
        <link rel="canonical" href="https://ordnrydesign.com/front-end" />
        <meta
          name="keywords"
          content="frontend, portfólio, react, typescript, javascript, dev, desenvolvedor"
        />
      </Helmet>
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

/*

AINDA PARA AJUSTAR:
- Adicionar mais skills(adicionar C#, TS, GitHub,...)
- Fazer a nav Mobile
*/
