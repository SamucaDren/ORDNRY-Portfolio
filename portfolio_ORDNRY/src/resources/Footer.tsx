import "./Footer-Style.css";
import Button from "./Button";
import scroolToSection from "../utils/scroolToSection";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content-container">
        <div className="footer-copy-container">
          <img src="./logo.svg" alt="ORDNRY Logo" className="footer-logo" />
          <p className="color-neutral-100 body-16-medium">
            Crio soluções digitais que equilibram design e usabilidade,
            transformando a interação em uma jornada fluida e significativa.
          </p>
          <Button
            text="BAIXAR CURRÍCULO"
            onClick={() => {
              window.gtag?.("event", "download_curriculo", {
                event_category: "interacao",
                event_label: "baixar_curriculo",
              });

              window.open(
                "./Curriculo_Samuel_Nogueira_UI_Designer.pdf",
                "_blank",
              );
            }}
          />
        </div>

        <div className="footer-links-container">
          <div className="footer-links-column">
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
          <div className="footer-links-column">
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
      <div className="linha-footer"></div>
      <p className="color-neutral-000 body-16-medium">
        &copy; {new Date().getFullYear()} ORDNRY. Todos os direitos reservados.
      </p>
      <img
        src="./ordnry-overlay-footer.svg"
        alt="ORDNRY Footer Overlay"
        className="footer-overlay"
      />
    </footer>
  );
}
export default Footer;
