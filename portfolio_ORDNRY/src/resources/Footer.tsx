import "./Footer-Style.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} ORDNRY. Todos os direitos reservados.
      </p>
    </footer>
  );
}
export default Footer;
