import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" src="adotpImg.png" alt="Adoption App Logo" />
      </a>
      <nav className="nav">
        <Link to="/">INICIO</Link>
        <Link to="/Perdidos">PERDIDOS</Link>
        <Link to="/Adopta">ADOPTA</Link>
        <Link to="/Fundaciones">FUNDACIONES</Link>
        <Link to="/Publicar">PUBLICAR</Link>
      </nav>
    </header>
  )
}