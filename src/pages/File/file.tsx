import { useParams } from "react-router";
import { getLogementFromID, Logement } from "./files";
import Carrousel from "../../components/carrousel";
import Host from "../../components/host";
import Rate from "../../components/rate";
import Tags from "../../components/tags";
import Dropdown from "../../components/dropdown";

function File() {
  const { fileId } = useParams();

  const logementSelected: Logement = getLogementFromID(fileId);

  return (
    <>
      <div>
        <Carrousel imageURL={logementSelected.cover} />
        <div className="title">
          <h2>{logementSelected.title}</h2>
          <h3>{logementSelected.location}</h3>
        </div>
        <Host host={logementSelected.host} />
        <Rate rate={logementSelected.rating} />
        <Tags tags={logementSelected.tags} />
        <div className="flex-row">
          <Dropdown title="description" text={logementSelected.description} />
          <Dropdown title="equipement" text={logementSelected.description} />
        </div>
      </div>
    </>
  );
}

export default File;
