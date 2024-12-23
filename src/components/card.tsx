import { Link } from "react-router";

interface Props {
  id?: string;
  title?: string;
  imageURL?: string;
}

function Card({ id, title, imageURL }: Props) {
  return (
    <Link to={`/file/${id}`} className="flex-column card">
      <p className="card_title">{title ?? "Titre de la location"}</p>
      <div className="card_background">
        <div className="card_blur"></div>
        <img
          className="card_picture"
          src={imageURL ?? "./src/assets/images/LOGO.png"}
          alt="image de la location"
        />
      </div>
    </Link>
  );
}

export default Card;
