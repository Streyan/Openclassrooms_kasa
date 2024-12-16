import { Link } from "react-router";
import logo from "../assets/images/LOGO.png";

function Header() {
  return (
    <div className="flex-space-between header">
      <Link to="/">
        <img src={logo} className="logo" alt="Kasa logo" />
      </Link>
      <nav className="flex-row">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </div>
  );
}

export default Header;
