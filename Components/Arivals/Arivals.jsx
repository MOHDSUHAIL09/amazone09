import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Arivals.css";
import { Link } from "react-router-dom";

export default function Arivals() {
  const arivals = [
        { id: 1, name: "Wireless Earphones", category: "Electronics", product: "Colorful Pattern Earphones", price: "$238.85", oldPrice: "$245.80", img: "https://m.media-amazon.com/images/I/61rmwCfKdkL._AC_SY200_.jpg" },
        { id: 2, name: "Brown Wireless Earphones", category: "Electronics", product: "Leather Style Earphones", price: "$199.99", oldPrice: "$210.50", img: "https://m.media-amazon.com/images/I/61PGsURqHWL._AC_SY200_.jpg" },
        { id: 3, name: "Black Wireless Earphones", category: "Electronics", product: "Stylish Black Earphones", price: "$59.99", oldPrice: "$70.00", img: "https://m.media-amazon.com/images/I/61vxqFxTOPS._AC_SY200_.jpg" },
        { id: 4, name: "White Wireless Earphones", category: "Electronics", product: "Casual White Earphones", price: "$149.99", oldPrice: "$180.00", img: "https://m.media-amazon.com/images/I/71u4-tuWgpL._AC_SY200_.jpg" },
        { id: 5, name: "Golden Earphones", category: "Electronics", product: "Luxury Gold Earphones", price: "$499.99", oldPrice: "$550.00", img: "https://m.media-amazon.com/images/I/61lqHi2R8SL._AC_SY200_.jpg" },
        { id: 6, name: "Black Sunglasses Earphones", category: "Electronics", product: "Stylish Sunglasses Earphones", price: "$129.99", oldPrice: "$150.00", img: "https://m.media-amazon.com/images/I/61xeqYh3B6L._AC_SY200_.jpg" },
        { id: 7, name: "Perfume Bottle Earphones", category: "Electronics", product: "Premium Perfume Style Earphones", price: "$89.99", oldPrice: "$100.00", img: "https://m.media-amazon.com/images/I/61Is8UftqIL._AC_SY200_.jpg" },
        { id: 8, name: "Black Jacket Earphones", category: "Electronics", product: "Winter Jacket Style Earphones", price: "$299.99", oldPrice: "$320.00", img: "https://m.media-amazon.com/images/I/61tPH2UmBVL._AC_SY200_.jpg" },
      ];
      

  return (
    <>
      <div className="arivals-title">
        New <span>Arrivals</span>
      </div>
      <div className="slider-wrapper">
        <h3 className="slider-heading">
          Up to 60% off | Trending products from Emerging Businesses
          <Link to="/category" className="offer">
            See more
          </Link>
        </h3>
        <Swiper
          modules={[Navigation, Autoplay]}
          breakpoints={{
            350: { slidesPerView: 1 }, /* ✅ छोटे स्क्रीन पर 1 स्लाइड */
            480: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            768: { slidesPerView: 4 }, /* ✅ 768px पर 4 स्लाइड करें */
            1024: { slidesPerView: 5 },
          }}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          grabCursor={true}
        >
          {arivals.map((item) => (
            <SwiperSlide key={item.id} className="slide-arivals">
              <img src={item.img} alt={item.name} className="arivals-img" />
              <div className="arivals-content">
                <h3 className="category">{item.category}</h3>
                <h4 className="product">{item.product}</h4>
                <h5 className="new-price">
                  {item.price} <del>{item.oldPrice}</del>
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
