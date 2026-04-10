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
      // amazonq-ignore-next-line
    }, 500);
  };

  return (
    <section
      id="home"
      className="relative h-[60vh] sm:h-[70vh] lg:h-[75vh] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden bg-slate-900 hero-container hero-mobile-fix hero-tablet-fix hero-desktop-fix hero-ios-fix hero-landscape-mobile"
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
            <div className="relative h-full overflow-hidden hero-performance-mobile">
              <div
                className="absolute inset-0 bg-no-repeat bg-center transition-transform duration-8000 ease-out scale-100 hero-slide-bg"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 2. STATIC CONTENT OVERLAY - Fixed 10rem from Top */}
      {/* 'items-start' ensures it doesn't stay in vertical center */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center hero-content">
        <div className="relative w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl hero-mobile-text">
          {/* Label */}
          <div
            className={`flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 transition-all duration-1000 ${
              !isTransitioning
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="h-0.5 w-8 sm:w-12 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            <span className="text-yellow-400 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em]">
              {SCHOOL_NAME}
            </span>
            <div className="h-0.5 w-8 sm:w-12 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
          </div>

          {/* MASKED TITLE ANIMATION */}
          <div className="overflow-hidden my-6 sm:my-8 lg:my-12">
            <h1
              className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] transition-all duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] hero-mobile-title hero-tablet-title ${
                !isTransitioning
                  ? "opacity-100 translate-y-0 tracking-tight"
                  : "opacity-0 translate-y-[115%] tracking-widest"
              }`}
            >
              {heroSlides[activeIndex]?.title}
            </h1>
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 delay-500 hero-mobile-buttons ${
              !isTransitioning
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              to="/about"
              size="lg"
              className="px-8 sm:px-12 py-3 sm:py-4 bg-blue-800 text-white font-bold hover:bg-blue-900 transition-all shadow-xl text-sm sm:text-base"
            >
              About Us
            </Button>
            <Button
              to="/gallery"
              variant="outline"
              size="lg"
              className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-white text-white font-bold hover:bg-green-600 hover:border-green-600 transition-all backdrop-blur-sm text-sm sm:text-base"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button className="hero-prev absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/5 text-white border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center group hero-mobile-nav touch-target">
        <svg
          className="w-5 h-5 sm:w-7 sm:h-7 group-hover:-translate-x-1 transition-transform"
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
      <button className="hero-next absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/5 text-white border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center group hero-mobile-nav touch-target">
        <svg
          className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform"
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

      <div className="absolute bottom-0 left-0 w-full h-2 z-40 bg-linear-to-r from-blue-600 via-yellow-500 to-green-600" />
    </section>
  );
};

export default HeroSlider;
