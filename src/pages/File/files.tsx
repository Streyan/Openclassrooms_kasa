import logements from "../../../logements.json";

export type Logement = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

export function getLogementFromID(id?: string): Logement {
  let result: Logement = {
    id: "",
    title: "",
    cover: "",
    pictures: [],
    description: "",
    host: {
      name: "",
      picture: ""
    },
    rating: "",
    location: "",
    equipments: [],
    tags: []
  };
  logements.map((logement) => {
    if (logement.id == id) {
      result = logement;
    }
  });
  return result;
}
