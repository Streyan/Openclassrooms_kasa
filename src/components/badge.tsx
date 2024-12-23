interface Props {
  imageURL?: string;
}

function Badge({ imageURL }: Props) {
  return (
    <div className="badge">
      <img
        className="badge_picture"
        src={imageURL ?? "./src/assets/images/LOGO.png"}
        alt="image de l'host"
      />
    </div>
  );
}

export default Badge;
