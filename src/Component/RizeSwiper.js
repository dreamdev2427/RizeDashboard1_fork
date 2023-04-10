import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import video1 from "../assets/video/Stelliform_70_VP9.webm";
import video2 from "../assets/video/Stelliform_140_VP9.webm";
import video3 from "../assets/video/Stelliform_69_VP9.webm";

import "swiper/css";
import "swiper/css/effect-cards";

import "../assets/css/swiper.css";

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        cardsEffect={{
          rotate: true,
          perSlideRotate: 25,
        }}
        initialSlide={1}
        loop={true}
      >
        <SwiperSlide>
        <div className="video-container">
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            controls={false}
            className="w-sm-100 video--border"
            width="100%"
          >
            <source src={video1} type="video/webm" />
          </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="video-container" >
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            controls={false}
            className="w-sm-100 video--border"
            width="100%"
          >
            <source src={video2} type="video/webm" />
          </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="video-container">
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            controls={false}
            className="w-sm-100 video--border"
            width="100%"
          >
            <source src={video3} type="video/webm" />
          </video>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
