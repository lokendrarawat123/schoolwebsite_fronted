import bgImg from "../assets/img/scphoto.jpg";
import bgimg2 from "../assets/img/group.jpg";
import logo from "../assets/img/namuna_logo.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Test = () => {
  return (
    <div className="w-full h-screen">
      <Swiper className="h-full">
        <SwiperSlide>
          <img src={bgImg} className="w-full h-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={bgimg2} className="w-full h-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={bgImg} className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Test;
