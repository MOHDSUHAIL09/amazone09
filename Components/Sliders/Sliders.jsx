import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Sliders.css"; 
import { Link } from "react-router-dom";

export default function ArivalSlider() {
  const productItems = [
    { id: 1, img: "https://m.media-amazon.com/images/I/71pB8KLW2hL._AC_SY200_.jpg" },
    { id: 2, img: "https://m.media-amazon.com/images/I/71+THxD33IL._AC_SY200_.jpg" },
    { id: 3, img: "https://m.media-amazon.com/images/I/61VeTkEtovL._AC_SY200_.jpg" },
    { id: 4, img: "https://m.media-amazon.com/images/I/71+I43A8L-L._AC_SY200_.jpg" },
    { id: 5, img: "https://m.media-amazon.com/images/I/61uu0fLSMOL._AC_SY200_.jpg" },
    { id: 6, img: "https://m.media-amazon.com/images/I/71HwHiSepJL._AC_SY200_.jpg" },
    { id: 7, img:"https://m.media-amazon.com/images/I/31tgqdads8L._AC_SY200_.jpg"},
    { id: 8, img:"https://m.media-amazon.com/images/I/515HX92t7RL._AC_SY200_.jpg" },
  ];

  return (
    <div className="slider-container">
            <h3 className="slider-heading">
        Up to 60% off | Trending products from Emerging Businesses
        <Link to={`/category/${productItems.link}`} className="offer"> See more</Link></h3>
      <Swiper
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 3 },
          480: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
      >
        {productItems.map((item) => (
          <SwiperSlide key={item.id} className="slide-card">
            <img src={item.img} alt={`Product ${item.id}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}
