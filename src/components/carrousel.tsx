interface Props {
  imageURL?: string;
}

function Carrousel({ imageURL }: Props) {
  return (
    <div className="flex-column carrousel">
      <img
        className="carrousel_picture"
        src={imageURL ?? "./src/assets/images/LOGO.png"}
        alt="image de la location"
      />
      <p className="carrousel_number">1/4</p>
      <div className="carrousel_arrows">
        <i className="fa-solid fa-angle-left" />
        <i className="fa-solid fa-angle-right" />
      </div>
    </div>
  );
}

export default Carrousel;
