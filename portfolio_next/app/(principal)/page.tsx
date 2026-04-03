import HeroSection from "./(sections)/HeroSection";
import ProjectsSection from "./(sections)/ProjectsSection";
import AboutMe from "./(sections)/AboutMe";
import Footer from "../(components)/Footer";
import MyCarrer from "./(sections)/MyCarrer";
import "./Home-Style.css";
import TopBar from "../(components)/topbar";

export const metadata = {
  title: "ORDNRY | Samuel Nogueira - UI Designer focado em Usabilidade",
  description:
    "Portfólio de Samuel Nogueira, designer UI. Interfaces digitais claras, maduras e integradas ao uso, com uma abordagem ordinária no design.",
  keywords: ["ui design", "portfólio", "usabilidade", "UX/UI"],
  alternates: {
    canonical: "https://ordnrydesign.com/",
  },
};

function Home() {
  return (
    <div className="home-page">
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
