import HeroSection from "./Sections/HeroSection";
import ProjectsSection from "./Sections/ProjectsSection";
import AboutMe from "./Sections/AboutMe";
import Footer from "../../resources/Footer.tsx";
//import MyCarrer from "./Sections/MyCarrer";
import "./Home-Style.css";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <main>
        <ProjectsSection />
        <div className="linha-home"></div>
        <AboutMe />
        {/*<MyCarrer />*/}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
