import { useState } from "react";

interface Props {
  imageURL: string[];
}

function Carrousel({ imageURL }: Props) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const numberOfImage = imageURL.length;

  function changeSlide(page: number) {
    if (page >= numberOfImage) {
      setCurrentSlide(0);
    } else if (page <= 0) {
      setCurrentSlide(numberOfImage - 1);
    } else {
      setCurrentSlide(page);
    }
  }

  return (
    <div className="flex-column carrousel">
      <img
        className="carrousel_picture"
        src={imageURL[currentSlide]}
        alt="image de la location"
      />
      {numberOfImage > 1 && (
        <div>
          <p className="carrousel_number">
            {currentSlide + 1}/{numberOfImage}
          </p>
          <div className="carrousel_arrows">
            <i
              className="fa-solid fa-angle-left carrousel_arrows_left"
              onClick={() => {
                changeSlide(currentSlide - 1);
              }}
            />
            <i
              className="fa-solid fa-angle-right carrousel_arrows_right"
              onClick={() => {
                changeSlide(currentSlide + 1);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrousel;
