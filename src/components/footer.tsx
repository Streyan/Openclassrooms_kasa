import logo from "../assets/images/LOGO2.png";

function Footer() {
  return (
    <div className="flex-column footer">
      <img src={logo} className="logo" alt="Kasa logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
