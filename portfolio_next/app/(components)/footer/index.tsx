"use client";

import styles from "./style.module.css";
import Button from "../button";
import scroolToSection from "../../(utils)/scroolToSection";
import Image from "next/image";

interface LinkFooter {
  name: string;
  src: string;
  onClickScroll?: string;
}

interface FooterProps {
  aplyingTo?: "ui_design" | "front_end";
  conteudo?: LinkFooter[];
  contato?: LinkFooter[];
}

const conteudoDefault: LinkFooter[] = [
  {
    name: "Projetos",
    src: "#projetos",
    onClickScroll: "projects-section",
  },
  {
    name: "Sobre",
    src: "#sobre-mim",
    onClickScroll: "about-me-section",
  },
  {
    name: "Carreira",
    src: "#carreira",
    onClickScroll: "my-carrer-section",
  },
];

const contatoDefault: LinkFooter[] = [
  {
    name: "Behance",
    src: "https://www.behance.net/samuelnogueira9",
  },
  {
    name: "Dribbble",
    src: "https://dribbble.com/samuel_nogueira",
  },
  {
    name: "Linkedin",
    src: "https://www.linkedin.com/in/samuel-nogueira-ordnry/?locale=pt_BR",
  },
];

export default function Footer({
  aplyingTo = "ui_design",
  conteudo = conteudoDefault,
  contato = contatoDefault,
}: FooterProps) {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <div className={styles.footerCopyContainer}>
          <Image
            width={128}
            height={28}
            src="./logo.svg"
            alt="ORDNRY Logo"
            loading="lazy"
            className={styles.footerLogo}
          />

          <p className="color-neutral-100 body-16-medium">
            Portfólio de Samuel Nogueira, designer UI com foco no ordinário bem
            resolvido em interfaces digitais.
          </p>

          <Button
            text="BAIXAR CURRÍCULO"
            onClick={() => {
              window.open(
                aplyingTo === "ui_design"
                  ? "./Curriculo_Samuel_Nogueira_UI_Designer.pdf"
                  : "./Curriculo_Samuel_Nogueira_FrontEnd.pdf",
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

            {conteudo.map((item) => (
              <a
                key={item.name}
                href={item.src}
                onClick={() => {
                  if (item.onClickScroll) {
                    scroolToSection(item.onClickScroll);
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className={styles.footerLinksColumn}>
            <span>
              <strong>Contato</strong>
            </span>

            {contato.map((item) => (
              <a
                key={item.name}
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
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
        loading="lazy"
        src="./ordnry-overlay-footer.svg"
        alt="ORDNRY Footer Overlay"
        className={styles.footerOverlay}
      />
    </footer>
  );
}
