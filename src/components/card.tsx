interface Props {
  title?: string;
  imageURL?: string;
}

function Card({ title, imageURL }: Props) {
  return (
    <div className="flex-column card">
      <p className="card_title">{title ?? "Titre de la location"}</p>
      <div className="card_background">
        <div className="card_blur"></div>
        <img
          className="card_picture"
          src={imageURL ?? "./src/assets/images/LOGO.png"}
          alt="image de la location"
        />
      </div>
    </div>
  );
}

export default Card;
