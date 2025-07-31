"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../custom_swiper.css"

const SwiperSlider = ({ slides }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="relative"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="text-white pb-20 md:pt-20 flex flex-col gap-2 md:w-1/2">
            <h2 className="text-xs text-[#FF9800] tracking-widest font-medium lg:text-base">
              {slide.title}
            </h2>
            <p className="text-xl md:text-4xl font-bold krona_one lg:text-5xl lg:leading-snug">
              {slide.content}
            </p>
            <button className="w-fit mt-4 btn-gradient-90 text-white px-5 py-2 rounded-full hover:opacity-90 transition text-xs font-medium cursor-pointer lg:text-sm">
              {slide.button}
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;