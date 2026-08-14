import dynamic from "next/dynamic";
import HeroSection from "./(sections)/HeroSection";
import TopBar from "../(components)/top-bar";
import Footer from "../(components)/footer";
import AboutMe from "@/app/sections/about-me";
import MyCarrer from "@/app/sections/my-carrer/MyCarrer";
import "./Home-Style.css";

const ProjectsSection = dynamic(() => import("./(sections)/ProjectsSection"));

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
