import { NavLink } from "react-router";
import logo from "../assets/images/LOGO.png";

function Header() {
  return (
    <div className="flex-space-between header">
      <NavLink to="/">
        <img src={logo} className="header_logo" alt="Kasa logo" />
      </NavLink>
      <nav className="flex-row">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </div>
  );
}

export default Header;
