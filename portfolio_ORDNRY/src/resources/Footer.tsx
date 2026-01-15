import "./Footer-Style.css";
import Button from "./Button";
import scroolToSection from "../utils/functions";

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
          <Button text="BAIXAR CURRÍCULO" />
        </div>

        <div className="footer-links-container">
          <div className="footer-links-column">
            <span>
              <strong>Conteúdo</strong>
            </span>
            <a onClick={() => scroolToSection("projects-section")}>Projetos</a>
            <a>Sobre</a>
            <a>Carreira </a>
          </div>
          <div className="footer-links-column">
            <span>
              <strong>Contato</strong>
            </span>
            <a>Behance</a>
            <a>Linkedin</a>
            <a>Entre em contato</a>
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
