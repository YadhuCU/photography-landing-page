// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import SmallCard from "./util/SmallCard.jsx";

import SliderImage1 from "../assets/slider-image-1.jpg";
import SliderImage2 from "../assets/slider-image-2.jpg";
import SliderImage3 from "../assets/slider-image-3.jpg";
import SliderImage4 from "../assets/slider-image-4.jpg";
import SliderImage5 from "../assets/slider-image-5.jpg";
import SliderImage6 from "../assets/slider-image-6.jpg";
import SliderImage7 from "../assets/slider-image-7.jpg";
import SliderImage8 from "../assets/slider-image-8.jpg";

const imageArray = [
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SliderImage4,
  SliderImage5,
  SliderImage6,
  SliderImage7,
  SliderImage8,
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  return (
    <div className="container my-2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        style={{
          paddingBlock: "40px",
          maxWidth: "min(80%, 1000px)",
          marginInline: "auto",
        }}
      >
        {imageArray.map((item, index) => (
          <SwiperSlide key={index}>
            <SmallCard>
              <img src={item} alt="Slider image 1" />
            </SmallCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
