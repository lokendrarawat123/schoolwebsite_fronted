import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Local Images
import image1 from "../../assets/img/scphoto.jpg";
import image2 from "../../assets/img/group.jpg";

import image3 from "../../assets/img/student_group.jpg";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: image1,
      title: "NAMUNA BIDHYA SADAN",
      subtitle: "Established 2062 B.S.",
    },
    {
      id: 2,
      image: image2,
      title: "EXCELLENCE IN EDUCATION",
      subtitle: "Nurturing Future Leaders",
    },
    {
      id: 3,
      image: image3,
      title: "INSPIRING YOUNG MINDS",
      subtitle: "The Best Environment for Growth",
    },
  ];

  return (
    <section
      id="home"
      className="relative h-[80vh] md:h-screen overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={2000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        className="h-full w-full group"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div
                className={`relative h-full w-full flex items-center justify-center`}
              >
                {/* Background Image with Ken Burns Effect (Zoom) */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-6000 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                  style={{ backgroundImage: `url(${slide.image})` }}
                />

                {/* Layered Overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                  <p
                    className={`text-sm md:text-xl uppercase tracking-[0.5em] mb-4 text-blue-400 font-bold transition-all duration-1000 delay-300 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {slide.subtitle}
                  </p>

                  <h1
                    className={`text-5xl md:text-8xl font-black text-white mb-8 leading-tight transition-all duration-1000 delay-500 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {slide.title}
                  </h1>

                  <div
                    className={`flex flex-wrap gap-5 justify-center mt-10 transition-all duration-1000 delay-700 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95">
                      ADMISSION OPEN
                    </button>
                    <button className="backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
                      VIEW GALLERY
                    </button>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
