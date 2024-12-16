import logo from "../assets/images/LOGO.png";

function Banner() {
  return (
    <div className="flex-column">
      <img src={logo} className="logo" alt="Kasa logo" />
    </div>
  );
}

export default Banner;
