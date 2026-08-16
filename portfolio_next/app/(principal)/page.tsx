import HeroSection from "./(sections)/HeroSection";
import TopBar from "../(components)/top-bar";
import Footer from "../(components)/footer";
import AboutMe from "@/app/sections/about-me";
import MyCarrer from "@/app/sections/my-carrer/MyCarrer";
import ProjectsSection from "@/app/sections/projects";
import { getProjetos } from "@/app/(services)/prismic";
import "./Home-Style.css";

export const metadata = {
  title: "ORDNRY | Samuel Nogueira - UI Designer focado em Usabilidade",
  description:
    "Portfólio de Samuel Nogueira, designer UI. Interfaces digitais claras, maduras e integradas ao uso, com uma abordagem ordinária no design.",
  keywords: ["ui design", "portfólio", "usabilidade", "UX/UI"],
  alternates: {
    canonical: "https://ordnrydesign.com/",
  },
};

export default async function Home() {
  const projetos = await getProjetos();

  return (
    <div className="home-page">
      <TopBar function_to_portfolio="UI DESIGN" />
      <HeroSection />

      <main>
        <ProjectsSection projetos={projetos} />
        <div className="linha-home"></div>
        <AboutMe />
        <div className="linha-home"></div>
        <MyCarrer />
      </main>

      <Footer />
    </div>
  );
}
