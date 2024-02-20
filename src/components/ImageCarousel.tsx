import { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1) % images.length);
  };

  const goToImage = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative max-h-80 max-w-80 sm:max-w-md md:max-w-lg lg: lg:max-w-xl">
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex + 1}`}
        className="w-full max-h-80 min-h-80 object-contain border"
      />
      <div className="flex">
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-300"
        >
          <svg
            fill="#000000"
            version="1.1"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="34px"
            height="64px"
            viewBox="0 0 42 42"
            xmlSpace="preserve"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <polygon
                fillRule="evenodd"
                points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 "
              ></polygon>{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-300"
        >
          <svg
            fill="#000000"
            version="1.1"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="34px"
            height="64px"
            viewBox="0 0 42 42"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <polygon
                fillRule="evenodd"
                points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 "
              ></polygon>{" "}
            </g>
          </svg>
        </button>
      </div>

      <div className="flex justify-center items-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`h-3 w-3 mx-2 rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
