import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uploads } from "../../utils/config";

// Redux

const CarouselBrands = ({ brands }) => {
  return (
    <div className="">
      <Swiper slidesPerView={2} loop={true} autoplay={{ delay: 8000 }}>
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="">
              {brand && brand.imagens.length > 0 && (
                <img
                  key={index}
                  width={50}
                  src={`${uploads}/marcas/${brand.logotipo}`}
                  alt={`Logotipo ${brand.nome}`}
                  className="w-44"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselBrands;
