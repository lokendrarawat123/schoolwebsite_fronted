import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useGetSlidesQuery } from "../../redux/features/SiteSlice.js";
import Button from "../ButtonComponent.jsx";
import ErrorMessage from "../shared/ErrorMessage";
import { HomeSkeleton } from "../skeleton/HomeSkeleton.jsx";
import { SCHOOL_NAME, heroSlides } from "../../data/siteData.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const { data: _slidesData, isLoading, error } = useGetSlidesQuery();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (isLoading) return <HomeSkeleton />;
  if (error)
    return (
      <ErrorMessage
        message={error?.data?.message || "Failed to load slides."}
      />
    );

  const handleSlideChange = (swiper) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(swiper.realIndex);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section
      id="home"
      className="relative h-[60vh] sm:h-[70vh] lg:h-[75vh] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden bg-slate-900"
    >
      {/* 1. BACKGROUND SWIPER */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
        onSlideChange={handleSlideChange}
        loop={true}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Container - Modified padding top only */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-[7rem] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center">
          {/* Label */}
          <div
            className={`flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4 transition-all duration-1000 ${
              !isTransitioning
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="h-0.5 w-6 sm:w-8 lg:w-12 bg-yellow-500" />
            <span className="text-yellow-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
              {SCHOOL_NAME}
            </span>
            <div className="h-0.5 w-6 sm:w-8 lg:w-12 bg-yellow-500" />
          </div>

          {/* Title */}
          <div className="overflow-hidden mb-4 sm:mb-6 lg:mb-8">
            <h1
              className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight transition-all duration-1200 ${
                !isTransitioning
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
            >
              {heroSlides[activeIndex]?.title}
            </h1>
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 transition-all duration-1000 delay-300 ${
              !isTransitioning
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              to="/about"
              className="px-3 sm:px-6 lg:px-10 py-1 sm:py-2 lg:py-3 bg-blue-800 text-white font-semibold hover:bg-blue-900 transition-all shadow-lg text-xs sm:text-sm lg:text-base rounded-md"
            >
              About Us
            </Button>
            <Button
              to="/gallery"
              variant="outline"
              className="px-3 sm:px-6 lg:px-10 py-1 sm:py-2 lg:py-3 border-2 border-white text-white font-semibold hover:bg-green-500 hover:border-green-500 hover:text-gray-900 transition-all text-xs sm:text-sm lg:text-base rounded-md"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button className="hero-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center">
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="hero-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center">
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-0 left-0 w-full h-2 z-40 bg-gradient-to-r from-blue-600 via-yellow-500 to-green-600" />
    </section>
  );
};

export default HeroSlider;
