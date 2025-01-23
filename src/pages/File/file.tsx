import { useNavigate, useParams } from "react-router";
import { getLogementFromID, Logement } from "./files";
import Carrousel from "../../components/carrousel";
import Host from "../../components/host";
import Rate from "../../components/rate";
import Tags from "../../components/tags";
import Dropdown from "../../components/dropdown";
import { useEffect } from "react";

function File() {
  const { fileId } = useParams();
  const logementSelected: Logement = getLogementFromID(fileId);
  const navigate = useNavigate();

  useEffect(() => {
    if (logementSelected.id === "") {
      navigate("/error");
    }
  });

  return (
    <main>
      <Carrousel imageURL={logementSelected.pictures} />
      <div className="logement_body">
        <div className="logement_title-host-rate">
          <div className=" logement_title-location">
            <h2 className="logement_title">{logementSelected.title}</h2>
            <h3 className="logement_location">{logementSelected.location}</h3>
            <Tags tags={logementSelected.tags} />
          </div>
          <div className="logement_host-rate">
            <Host host={logementSelected.host} />
            <Rate rate={logementSelected.rating} />
          </div>
        </div>
        <div className="logement_description-equipements">
          <Dropdown title="description" text={logementSelected.description} />
          <Dropdown title="equipement" text={logementSelected.equipments} />
        </div>
      </div>
    </main>
  );
}

export default File;
