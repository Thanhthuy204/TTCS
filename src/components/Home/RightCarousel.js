import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./RightCarousel.scss";

const Carousel = () => {
  const slides = [
    { id: 1, src: "./zal12o.jpg", alt: "Ra mắt website chính thức" },
    { id: 2, src: "./logo192.png", alt: "Xuất hóa đơn VAT" },
    { id: 3, src: "./logo512.png", alt: "Ưu đãi phần mềm" },
  ];

  return (
    <div className="peek-wrap">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1.08}
        centeredSlides
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        className="peek-swiper"
        breakpoints={{
          0: { slidesPerView: 1.02, spaceBetween: 12 },
          768: { slidesPerView: 1.08, spaceBetween: 16 },
          1200: { slidesPerView: 1.18, spaceBetween: 20 },
        }}
      >
        {slides.map(s => (
          <SwiperSlide key={s.id}>
            <div className="peek-card">
              <img src={s.src} alt={s.alt} />
              <div className="peek-border" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
