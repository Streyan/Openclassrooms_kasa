interface Props {
  imageURL: string;
}

function Badge({ imageURL }: Props) {
  return <img className="badge" src={imageURL} alt="image de l'host" />;
}

export default Badge;
