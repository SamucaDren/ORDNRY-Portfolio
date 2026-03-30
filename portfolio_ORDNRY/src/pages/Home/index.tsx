import HeroSection from "./Sections/HeroSection.tsx";
import ProjectsSection from "./Sections/ProjectsSection.tsx";
import AboutMe from "../Sections/AboutMe.tsx";
import Footer from "../../resources/Footer.tsx";
import MyCarrer from "../Sections/MyCarrer.tsx";
import "./Home-Style.css";
import TopBar from "../../resources/topbar.tsx";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="home-page">
      <Helmet>
        <title>
          ORDNRY | Samuel Nogueira - UI Designer focado em Usabilidade
        </title>
        <meta
          name="description"
          content="Portfólio de Samuel Nogueira, designer UI. Interfaces digitais claras, maduras e integradas ao uso, com uma abordagem ordinária no design."
        />
        <link rel="canonical" href="https://ordnrydesign.com/" />
      </Helmet>
      <TopBar function_to_portfolio="UI DESIGN" />
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

export default Home;
