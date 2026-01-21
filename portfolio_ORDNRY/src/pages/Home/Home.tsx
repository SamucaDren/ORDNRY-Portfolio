import HeroSection from "./Sections/HeroSection";
import ProjectsSection from "./Sections/ProjectsSection";
import AboutMe from "./Sections/AboutMe";
import Footer from "../../resources/Footer.tsx";
import MyCarrer from "./Sections/MyCarrer";
import "./Home-Style.css";
import TopBar from "../../resources/topbar.tsx";

function Home() {
  return (
    <div className="home-page">
      <TopBar />
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
