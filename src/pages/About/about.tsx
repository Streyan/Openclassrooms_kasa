import Banner from "../../components/banner";
import Dropdowns from "../../components/dropdowns";
import banner_picture from "../../assets/images/Image source 2.png";

function About() {
  return (
    <main>
      <Banner imageURL={banner_picture} />
      <Dropdowns />
    </main>
  );
}

export default About;
