import { Link } from "react-router";

interface Props {
  id: string;
  title: string;
  imageURL: string;
}

function Card({ id, title, imageURL }: Props) {
  return (
    <Link to={`/file/${id}`} className="flex-column card ">
      <p className="card_title">{title}</p>
      <div className="card_background zoom">
        <div className="card_blur"></div>
        <img
          className="card_picture "
          src={imageURL}
          alt="image de la location"
        />
      </div>
    </Link>
  );
}

export default Card;
