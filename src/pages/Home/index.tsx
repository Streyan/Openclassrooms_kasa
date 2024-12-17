import Banner from "../../components/banner";
import Cards from "../../components/cards";
import banner_picture from "../../assets/images/IMG.png";

function App() {
  return (
    <main>
      <Banner
        title="Chez vous, partout et ailleurs"
        imageURL={banner_picture}
      />
      <Cards />
    </main>
  );
}

export default App;
