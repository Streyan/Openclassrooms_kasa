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
        <Carrousel imageURL={logementSelected.pictures} />
        <div className="logement_body">
          <div className="title">
            <h2 className="logement_title">{logementSelected.title}</h2>
            <h3 className="logement_location">{logementSelected.location}</h3>
          </div>
          <Host host={logementSelected.host} />
          <Tags tags={logementSelected.tags} />
          <Rate rate={logementSelected.rating} />
          <Dropdown title="description" text={logementSelected.description} />
          <Dropdown title="equipement" text={logementSelected.description} />
        </div>
      </div>
    </>
  );
}

export default File;
