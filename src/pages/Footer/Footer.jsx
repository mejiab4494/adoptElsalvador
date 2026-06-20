import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <span className="footer-logo">Adopta El Salvador</span>
          <p className="footer-tagline">Conectando mascotas con hogares llenos de amor.</p>
        </div>

        <nav className="footer-links">
          <h4>Explorar</h4>
          <Link to="/">Inicio</Link>
          <Link to="/perdidos">Perdidos</Link>
          <Link to="/adopta">Adopta</Link>
          <Link to="/publicar">Publicar</Link>
        </nav>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <a href="https://mejiab.dev/">Developer Page</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Adopta El Salvador. Todos los derechos reservados.</p>
        <p>Hecho con ❤️ para las mascotas de El Salvador</p>
      </div>
    </footer>
  );
}