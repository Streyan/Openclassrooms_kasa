interface Props {
  title?: string;
  imageURL: string;
}

function Banner({ title, imageURL }: Props) {
  return (
    <div className="flex-column banner">
      <p className="banner_text">{title}</p>
      <div className={title ? "banner_blur_text" : "banner_blur"}></div>
      <img src={imageURL} className="banner_picture" alt="Banner picture" />
    </div>
  );
}

export default Banner;
