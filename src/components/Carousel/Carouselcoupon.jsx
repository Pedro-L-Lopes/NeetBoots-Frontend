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
                className="flex items-center justify-center p-4 m-2 gap-2 rounded-md  text-lg font-bold"
                style={{
                  height: "5vh",
                  width: "100%",
                }}
              >
                <div className="flex items-center justify-center gap-2 p-5  rounded-md">
                  <div className="">{item.icon}</div>
                  <p>{item.text}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carouselcoupon;
