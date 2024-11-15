import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      fadeToNextImage();
    }, 4000); // Adjust time interval for auto-slide

    return () => clearInterval(interval);
  }, [currentIndex]);

  const fadeToNextImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsFading(false);
    }, 500);
  };

  return (
    <div className="relative h-[480px] mt-14 md:mt-28 w-screen overflow-hidden z-10">
      <div className="absolute inset-0 bg-black opacity-75 z-10"></div>

      <div className="w-full h-[520px] relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                index !== 1 ? "transform -translate-y-10" : "" // Shift up on Y-axis for all except slide2
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
