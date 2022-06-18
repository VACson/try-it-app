import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import CategoryIcon from "./CategoryIcon";

function Popular() {
  return (
    <>
      <Swiper 
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints= {{
          // when window width is >= 320px
          320: {
            slidesPerView: 1
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3
          },
          // when window width is >= 640px
          1200: {
            slidesPerView: 4
          }}}
        >
        <SwiperSlide> <Link to="/search" className="swiper-slide-img">
          <CategoryIcon />
          </Link>
        </SwiperSlide> 
        <SwiperSlide> <Link to="/search" className="swiper-slide-img">
          <CategoryIcon />
          </Link>
        </SwiperSlide>
        <SwiperSlide> <Link to="/search" className="swiper-slide-img">
          <CategoryIcon />
          </Link>
        </SwiperSlide>
        <SwiperSlide> <Link to="/search" className="swiper-slide-img">
          <CategoryIcon />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Popular