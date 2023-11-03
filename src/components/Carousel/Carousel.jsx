import React, { useState, useEffect } from "react";

import "./Carousel.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 15000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <button className="prev-button" onClick={prevSlide}>
          &#8249;
        </button>
        <img
          className="img-carousel"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />
        <button className="next-button" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
