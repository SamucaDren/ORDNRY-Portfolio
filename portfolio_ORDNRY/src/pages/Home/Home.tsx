import HeroSection from "./Sections/HeroSection";
import ProjectsSection from "./Sections/ProjectsSection";
//import MyCarrer from "./Sections/MyCarrer";
import "./Home-Style.css";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <main>
        <ProjectsSection />
        <div className="linha-home"></div>
        {/*<MyCarrer />*/}
      </main>
    </div>
  );
}

export default Home;
