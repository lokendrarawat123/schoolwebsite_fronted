import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// import { slides } from "../../../Data.js/heroSliderData.js";
import { useGetSlidesQuery } from "../../redux/features/SiteSlice.js";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HomeSkeleton } from "../skeleton/HomeSkeleton.jsx";

const HeroSlider = () => {
  const {
    data: slidesData,
    isLoading: slidesLoading,
    error: slidesError,
  } = useGetSlidesQuery();
  const slides = slidesData?.data || [];
  const img_url = import.meta.env.VITE_IMG_URL;
  if (slidesLoading) {
    return <HomeSkeleton />;
  }
  return (
    <section
      id="home"
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={2000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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
                  style={{
                    backgroundImage: `url(${img_url}/${slide.image_url})`,
                  }}
                />

                {/* Layered Overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

                {/* Content */}
                <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                  <p
                    className={`text-xs sm:text-sm md:text-lg lg:text-xl uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] mb-2 sm:mb-3 md:mb-4 text-blue-400 font-bold transition-all duration-1000 delay-300 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {slide.subtitle}
                  </p>

                  <h1
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight transition-all duration-1000 delay-500 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {slide.title}
                  </h1>

                  <div
                    className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center mt-6 sm:mt-8 md:mt-10 transition-all duration-1000 delay-700 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95 touch-friendly">
                      ABOUT US
                    </button>
                    <button className="backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all shadow-xl touch-friendly">
                      VIEW GALLERY
                    </button>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons - Hidden on mobile */}
      <div className="swiper-button-prev hidden! sm:flex! text-white/80! hover:text-white! w-10! h-10! mt-0! top-1/2! left-4! transform! -translate-y-1/2 after:text-lg! after:font-bold!" />
      <div className="swiper-button-next hidden! sm:flex! text-white/80! hover:text-white! w-10! h-10! mt-0! top-1/2! right-4! transform! -translate-y-1/2 after:text-lg! after:font-bold!" />
    </section>
  );
};

export default HeroSlider;
