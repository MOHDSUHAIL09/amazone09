import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";
import Sliders from "../../Components/Sliders/Sliders";
import Product from "../../Components/Product/Product";
import Arivals from "../../Components/Arivals/Arivals";
import Showcase from "../../Components/Showcase/Showcase";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      {
        title: "Appliances for your home | Up to 55% off",
        images: [
          "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg", 
          "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
        ],
        imageNames: ["Refrigator", "Refrigerator", "Water Purifier", "Microwave Oven"],
        link: "Ac",
      },
      {
        title: "Starting ₹199 | Amazon Brands & more",
        images: [
          "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg"
        ],
        imageNames: ["Kitchen Set", "Steel Bottles", "Dinner Set", "Bathrrom-set"],
        link: "kallen",
      },

      {
        title: "Appliances for your home | Up to 55% off",
        images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg"
        ],
        imageNames: ["Washing Machine", "Refrigerator", "Water Purifier", "Microwave Oven"],
        link: "women",
      },
      {
        title: "Starting ₹199 | Amazon Brands & more",
        images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg"
        ],
        imageNames: ["Kitchen Set", "Steel Bottles", "Dinner Set", "Bathrrom-set"],
        link: "bathrom",
      },
      {
        title: "Appliances for your home | Up to 55% off",
        images: [
          "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg", 
          "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
        ],
        imageNames: ["Washing Machine", "Refrigerator", "Water Purifier", "Microwave Oven"],
        link: "washing",
      },
      {
        title: "Starting ₹199 | Amazon Brands & more",
        images: [
          "https://m.media-amazon.com/images/I/41OPUX6vQSL._SR480,440_.jpg",
          "https://m.media-amazon.com/images/I/41GBjbe40AL._SR480,440_.jpg",
          "https://m.media-amazon.com/images/I/41MsoQ831cL._SR480,440_.jpg",
          "https://m.media-amazon.com/images/I/41lZEy8e9DL._SR480,440_.jpg"
        ],
        imageNames: ["Kitchen Set", "Steel Bottles", "Dinner Set", "Bathrrom-set"],
        link: "tolls",
      },

      {
        title: "Appliances for your home | Up to 55% off",
        images: [
        "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/8d91f130-d61c-4206-92f7-310c4086d22b._CR0,0,1200,628_SX920_CB1169409_QL70_.jpg",
        "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/464d73a3-7334-4969-801a-366b7b639372._CR0,0,1200,628_SX920_CB1169409_QL70_.png",
        "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/36cae92d-6a2c-47fd-8394-1a0b16dc2ed8._CR0,0,1200,628_SX920_CB1169409_QL70_.png",
        "https://m.media-amazon.com/images/I/61--03DsnSL._AC_UL480_FMwebp_QL65_.jpg"
        ],
        imageNames: ["Refregertor", "Refrigerator", "Water Purifier", "Microwave Oven"],
        link: "watch",
      },
      {
        title: "Starting ₹199 | Amazon Brands & more",
        images: [
        "https://m.media-amazon.com/images/I/61MTISv8PkL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61xKeolcI3L._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71M10HG1plL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61dGBbqLUGL._AC_SY200_.jpg"
        ],
        imageNames: ["Kitchen Set", "Steel Bottles", "Dinner Set", "Bathrrom-set"],
        link: "decoration",
      },
    ]);
  }, []);

  const banners = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img25/Media/PC_Hero_3000x1200_Asin-toys-2x._CB547414496_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg",
  ];

  return (
    <>
      <div className="banner-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="banner-swiper"
        >
          {banners.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Banner ${index}`} className="banner-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="categories-container">
        {categories.length > 0 ? (
          categories.map((item, index) => (
            <div key={index} className="category-card">
              <h4>{item.title}</h4>
              <div className="category-images">
                {item.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="image-container">
                    <img
                      src={img}
                      alt={item.imageNames ? item.imageNames[imgIndex] : "Category Image"}
                      loading="lazy"
                      onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                    />
                    <p className="image-name">{item.imageNames ? item.imageNames[imgIndex] : "No Name"}</p>
                  </div>
                ))}
              </div>
              <Link to={`/category/${item.link}`} className="view-more">
                See more
              </Link>
            </div>
          ))
        ) : (
          <p>Loading Categories...</p>
        )}
      </div>
      <Sliders />
      <Product />
      <Arivals />
      <Showcase />
    </>
  );
}





































