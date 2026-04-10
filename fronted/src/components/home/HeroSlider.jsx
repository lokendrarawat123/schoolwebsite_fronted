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
      className="relative h-[75vh] min-h-100 overflow-hidden bg-slate-900"
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
            <div className="relative  h-screen bg-cover  overflow-hidden">
              <div
                className="absolute inset-0 bg-no-repeat bg-center transition-transform duration-8000 ease-out scale-100"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "100% 110%", // Yesle image lai height ra width ma thikka stretch garchha
                }}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 2. STATIC CONTENT OVERLAY - Fixed 10rem from Top */}
      {/* 'items-start' ensures it doesn't stay in vertical center */}
      <div className="absolute inset-0 z-20 flex flex-col items-center  ">
        <div className="relative pt-10 w-full flex flex-col items-center text-center px-6 max-w-6xl">
          {/* Label */}
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${
              !isTransitioning
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="h-0.5 w-12 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            <span className="text-yellow-400 text-xs sm:text-sm font-bold uppercase tracking-[0.5em]">
              {SCHOOL_NAME}
            </span>
            <div className="h-0.5-12 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
          </div>

          {/* MASKED TITLE ANIMATION */}
          <div className="overflow-hidden my-12">
            <h1
              className={`text-4xl sm:text-6xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] transition-all duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
            className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-500 ${
              !isTransitioning
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              to="/about"
              size="lg"
              className="px-12 py-4 bg-blue-800 text-white font-bold hover:bg-blue-900 hover:text-black! transition-all  shadow-xl"
            >
              About Us
            </Button>
            <Button
              to="/gallery"
              variant="outline"
              size="lg"
              className="px-12 py-4 border-2 border-white text-white font-bold hover:bg-green-600 hover:border-green-600 transition-all backdrop-blur-sm"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button className="hero-prev absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/5 text-white border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center group">
        <svg
          className="w-7 h-7 group-hover:-translate-x-1 transition-transform"
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
      <button className="hero-next absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/5 text-white border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center group">
        <svg
          className="w-7 h-7 group-hover:translate-x-1 transition-transform"
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
