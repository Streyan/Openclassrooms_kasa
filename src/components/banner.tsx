interface Props {
  title?: string;
  imageURL: string;
}

function Banner({ title, imageURL }: Props) {
  return (
    <div className="flex-column banner">
      <p className="banner_text">{title}</p>
      <img
        src={imageURL}
        className={title ? "banner_picture blur" : "banner_picture"}
        alt="Banner picture"
      />
    </div>
  );
}

export default Banner;
