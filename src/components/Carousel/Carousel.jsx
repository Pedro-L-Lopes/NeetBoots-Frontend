import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const ImageCarousel = ({ images }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={item.link}>
              <img
                src={item.image}
                alt="Slide"
                className="cursor-pointer"
                style={{ height: "80vh", width: "100%" }}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
