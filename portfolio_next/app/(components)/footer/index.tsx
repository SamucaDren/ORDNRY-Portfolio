"use client";
import styles from "./style.module.css";
import Button from "../button";
import scroolToSection from "../../(utils)/scroolToSection";
import Image from "next/image";

type FooterProps = {
  aplyingTo?: "ui_design" | "front_end";
};

export default function Footer({ aplyingTo = "ui_design" }: FooterProps) {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <div className={styles.footerCopyContainer}>
          <Image
            width={128}
            height={28}
            src="./logo.svg"
            alt="ORDNRY Logo"
            loading={"lazy"}
            className={styles.footerLogo}
          />
          <p className="color-neutral-100 body-16-medium">
            Portfólio de Samuel Nogueira, designer UI com foco no ordinário bem
            resolvido em interfaces digitais.
          </p>
          <Button
            text="BAIXAR CURRÍCULO"
            onClick={() => {
              /* window.gtag?.("event", "download_curriculo", {
                event_category: "interacao",
                event_label: "baixar_curriculo",
              });*/

              window.open(
                aplyingTo === "ui_design"
                  ? "./Curriculo_Samuel_Nogueira_UI_Designer.pdf"
                  : aplyingTo === "front_end"
                    ? "./Curriculo_Samuel_Nogueira_FrontEnd.pdf"
                    : "",
                "_blank",
              );
            }}
          />
        </div>

        <div className={styles.footerLinksContainer}>
          <div className={styles.footerLinksColumn}>
            <span>
              <strong>Conteúdo</strong>
            </span>
            <a
              href="#projetos"
              onClick={() => scroolToSection("projects-section")}
            >
              Projetos
            </a>
            <a
              href="#sobre-mim"
              onClick={() => scroolToSection("about-me-section")}
            >
              Sobre
            </a>
            <a
              href="#carreira"
              onClick={() => scroolToSection("my-carrer-section")}
            >
              Carreira{" "}
            </a>
          </div>
          <div className={styles.footerLinksColumn}>
            <span>
              <strong>Contato</strong>
            </span>
            <a href="https://www.behance.net/samuelnogueira9" target="_blank">
              Behance
            </a>
            <a href="https://dribbble.com/samuel_nogueira" target="_blank">
              Dribbble
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-nogueira-ordnry/?locale=pt_BR"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className={styles.linhaFooter}></div>
      <p className="color-neutral-000 body-16-medium">
        &copy; {new Date().getFullYear()} ORDNRY. Todos os direitos reservados.
      </p>
      <Image
        width={1200}
        height={228}
        loading={"lazy"}
        src="./ordnry-overlay-footer.svg"
        alt="ORDNRY Footer Overlay"
        className={styles.footerOverlay}
      />
    </footer>
  );
}
