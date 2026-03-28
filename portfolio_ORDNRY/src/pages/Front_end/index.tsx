import HeroSection from "./Sections/HeroSection.tsx";
import ProjectsSection from "./Sections/ProjectsSection.tsx";
import AboutMe from "./Sections/AboutMe.tsx";
import Footer from "./Sections/Footer.tsx";
import MyCarrer from "./Sections/MyCarrer.tsx";
import TopBar from "../../resources/topbar.tsx";
import "./Front_end_page.css";

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

/*

AINDA PARA AJUSTAR:
- Link do Currículo
- Adicionar mais skills(adicionar C#, TS, GitHub,...)
- Fazer a nav Mobile

*/
