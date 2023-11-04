import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Carouselcoupon = ({ itens }) => {
  return (
    <div className="">
      <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 8000 }}>
        {itens.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={item.link}>
              <div
                className="flex items-center justify-center p-4 m-2 gap-2 rounded-md bg-sBlack text-white text-lg  font-bold transition-colors duration-300 ease-out"
                style={{
                  height: "10vh",
                  width: "100%",
                  backgroundImage: "linear-gradient(to left, #381398, #ff9218)",
                }}
              >
                <div className="">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carouselcoupon;
