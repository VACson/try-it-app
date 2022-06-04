import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import ActivityIcon from "./ActivityIcon";

function Popular() {
  return (
    <>
      <Swiper 
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide> <Link to="/search" className="swiper-slide-img">
          <ActivityIcon />
          </Link></SwiperSlide> 
        <SwiperSlide> <Link to="/search" className="swiper-slide-img"><img 
          width='100%'
          src="https://via.placeholder.com/150" 
          alt="popular" /></Link>
        </SwiperSlide>
        <SwiperSlide> <Link to="/search" className="swiper-slide-img"><img 
          width='100%'
          src="https://via.placeholder.com/150" 
          alt="popular" /></Link>
        </SwiperSlide>
        <SwiperSlide> <Link to="/search" className="swiper-slide-img"><img 
          width='100%'
          src="https://via.placeholder.com/150" 
          alt="popular" /></Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Popular