import Card from "./card";
import logements from "../../logements.json";

function Cards() {
  return (
    <div className="cards">
      {logements.map((logement) => (
        <Card
          id={logement.id}
          title={logement.title}
          imageURL={logement.cover}
          key={logement.id}
        />
      ))}
    </div>
  );
}

export default Cards;
