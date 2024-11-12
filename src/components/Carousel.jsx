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
    }, 500); // Match this duration with fade duration
  };

  const fadeToPreviousImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(
        currentIndex === 0 ? images.length - 1 : currentIndex - 1
      );
      setIsFading(false);
    }, 500);
  };

  return (
    <div className="relative mt-14 md:mt-28 w-screen overflow-hidden z-10 -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-24">
      {/* Carousel Images */}
      <div className="w-full h-[400px] relative">
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        onClick={fadeToPreviousImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={fadeToNextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
