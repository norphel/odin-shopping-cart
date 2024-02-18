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
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative">
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex + 1}`}
        className="w-full"
      />
      <div className="flex">
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2"
        >
          Prev
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          Next
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
