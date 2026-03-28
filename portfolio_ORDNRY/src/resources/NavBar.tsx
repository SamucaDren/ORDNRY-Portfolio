import "./Navbar-Style.css";
import scroolToSection from "../utils/scroolToSection";

type NavbarProps = {
  // Adicione quaisquer props necessárias aqui
  aplyingTo?: "ui_design" | "front_end";
};

function Navbar({ aplyingTo = "ui_design" }: NavbarProps) {
  return (
    <nav className="container-navbar">
      <img
        fetchPriority="high"
        src="logo.svg"
        alt="Logo"
        className="logo-navbar"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        className="menu-icon-mobile-navbar"
      >
        <path d="M19 0C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447716 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H19Z" />
        <path d="M19 8C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10H1C0.447716 10 0 9.55228 0 9C0 8.44772 0.447715 8 1 8H19Z" />
        <path d="M19 16C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H1C0.447716 18 0 17.5523 0 17C0 16.4477 0.447715 16 1 16H19Z" />
      </svg>

      <div className="container-nav-link color-neutral-500 body-16-medium">
        <a href="#projetos" onClick={() => scroolToSection("projects-section")}>
          Projetos
          <div className="navaber-link-hover-element"></div>
        </a>
        <a
          href="#sobre-mim"
          onClick={() => scroolToSection("about-me-section")}
        >
          Sobre mim
          <div className="navaber-link-hover-element"></div>
        </a>
        <a
          href="#carreira"
          onClick={() => scroolToSection("my-carrer-section")}
        >
          Carreira
          <div className="navaber-link-hover-element"></div>
        </a>
        <a
          href={
            aplyingTo === "ui_design"
              ? "./Curriculo_Samuel_Nogueira_UI_Designer.pdf"
              : aplyingTo === "front_end"
                ? "./Curriculo_Samuel_Nogueira_FrontEnd.pdf"
                : ""
          }
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            window.gtag?.("event", "download_curriculo", {
              event_category: "interacao",
              event_label: "baixar_curriculo",
            });
          }}
        >
          Currículo{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
            <path d="M14.435 1.0001C14.435 0.44782 13.9873 0.000105239 13.435 0.000104987L4.43501 0.000105787C3.88273 0.00010545 3.43501 0.447821 3.43501 1.00011C3.43501 1.55239 3.88273 2.00011 4.43501 2.00011L12.435 2.00011L12.435 10.0001C12.435 10.5524 12.8827 11.0001 13.435 11.0001C13.9873 11.0001 14.435 10.5524 14.435 10.0001L14.435 1.0001ZM0.707092 13.728L1.4142 14.4351L14.1421 1.70721L13.435 1.00011L12.7279 0.292999L-1.44839e-05 13.0209L0.707092 13.728Z" />
          </svg>
          <div className="navaber-link-hover-element"></div>
        </a>
      </div>

      <div className="container-profile">
        <a
          href="https://www.linkedin.com/in/samuel-nogueira-ordnry"
          target="_blank"
          className="Linkedin-link color-neutral-500 body-18-medium"
        >
          <div className="sr-only">
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <path d="M9.73174 8C8.50207 8 7.5009 9.00098 7.5 10.2316C7.5 11.4622 8.50117 12.4634 9.73174 12.4634C10.9619 12.4634 11.9625 11.4622 11.9625 10.2316C11.9625 9.00111 10.9618 8 9.73174 8Z" />
              <path d="M11.4067 13.3602H8.05657C7.89721 13.3602 7.76794 13.4894 7.76794 13.6489V24.432C7.76794 24.5914 7.89721 24.7206 8.05657 24.7206H11.4066C11.5661 24.7206 11.6953 24.5913 11.6953 24.432V13.6489C11.6954 13.4893 11.5661 13.3602 11.4067 13.3602Z" />
              <path d="M19.9713 13.2332C18.7453 13.2332 17.6679 13.6065 17.0105 14.2153V13.6488C17.0105 13.4894 16.8812 13.3602 16.7218 13.3602H13.5082C13.3487 13.3602 13.2195 13.4894 13.2195 13.6488V24.432C13.2195 24.5914 13.3487 24.7206 13.5082 24.7206H16.8551C17.0145 24.7206 17.1438 24.5913 17.1438 24.432V19.097C17.1438 17.5663 17.4253 16.6176 18.8304 16.6176C20.2148 16.6192 20.3184 17.6366 20.3184 19.1885V24.432C20.3184 24.5914 20.4476 24.7206 20.6071 24.7206H23.9556C24.115 24.7206 24.2442 24.5913 24.2442 24.432V18.517C24.2442 16.0569 23.7585 13.2332 19.9713 13.2332Z" />
            </svg>
          </div>
          LinkedIn
        </a>
        <div className="profile-picture-navbar-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            className="profile-picture-border-navbar-element"
          >
            <circle cx="8.5" cy="8.5" r="8.5" fill="#675454" />
            <circle cx="8.5" cy="8.5" r="5.5" fill="#00FF80" />
          </svg>
          <img
            src="profile-picture-navbar.webp"
            alt="Profile"
            fetchPriority="high"
            className="profile-picture-navbar"
          />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
