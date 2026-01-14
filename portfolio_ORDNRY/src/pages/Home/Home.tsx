import HeroSection from "./Sections/HeroSection";
import ProjectsSection from "./Sections/ProjectsSection";
import "./Home-Style.css";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}

export default Home;
