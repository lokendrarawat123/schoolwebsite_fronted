import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useGetSlidesQuery } from "../../redux/features/SiteSlice.js";
import Button from "../ButtonComponent.jsx";
import ErrorMessage from "../shared/ErrorMessage";
import { HomeSkeleton } from "../skeleton/HomeSkeleton.jsx";

import slide6 from "../../assets/img/slide/slide6.jpg";
import slide2 from "../../assets/img/slide/slide2.jpg";
import slide4 from "../../assets/img/slide/slide4.jpg";
import slide11 from "../../assets/img/slide/slide11.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Random slides data - Using local images
const randomSlides = [
  {
    id: 1,
    title: "Excellence in Education",
    image: slide6,
  },
  {
    id: 2,
    title: "Building Future Leaders",
    image: slide2,
  },
  {
    id: 3,
    title: "Knowledge & Innovation",
    image: slide4,
  },
  {
    id: 4,
    title: "Shaping Tomorrow",
    image: slide11,
  },
];

const HeroSlider = () => {
  // API call (ready for future use)
  const { data: slidesData, isLoading, error } = useGetSlidesQuery();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (isLoading) return <HomeSkeleton />;
  if (error) return <ErrorMessage message="Failed to load slides." />;

  const handleSlideChange = (swiper) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(swiper.realIndex);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section
      id="home"
      className="relative h-[50vh] min-h-125 overflow-hidden bg-slate-900"
    >
      {/* Background Image Slider - Only images slide */}
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
        {randomSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Enhanced Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-6000 ease-out transform scale-110 blur-[2px]"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  imageRendering: "high-quality",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                  width: "110%",
                  height: "110%",
                  left: "-5%",
                  top: "-5%",
                }}
              />

              {/* Image Enhancement Layer */}
              <div className="absolute inset-0 bg-linear-to-br from-primary-color/1 via-transparent to-secondary-color/1" />

              {/* Animated Overlay Pattern */}
              <div
                className="absolute inset-0 opacity-2"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 63, 162, 0.05) 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, rgba(255, 193, 7, 0.04) 0%, transparent 50%)`,
                }}
              />

              {/* Optimized Multi-layer Overlays */}
              <div className="absolute inset-0 bg-linear-to-r from-black/10 via-transparent to-black/10" />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static Content Overlay - Stays in place with animations */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {/* Enhanced Left accent bar */}
        <div
          className={`absolute left-0 top-0 w-1 bg-linear-to-b from-primary-color via-third-color to-secondary-color transition-all duration-1000 shadow-lg shadow-primary-color/50 ${
            !isTransitioning
              ? "h-full opacity-100 shadow-primary-color/80"
              : "h-0 opacity-0"
          }`}
        />

        {/* Animated corner brackets */}
        <div
          className={`absolute top-6 left-6 sm:top-10 sm:left-8 transition-all duration-700 delay-300 ${
            !isTransitioning
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 -translate-x-8 -translate-y-8"
          }`}
        >
          <div className="w-8 h-8 sm:w-14 sm:h-14 border-t-2 border-l-2 border-primary-color shadow-lg shadow-primary-color/30" />
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary-color rounded-full animate-pulse" />
        </div>

        <div
          className={`absolute bottom-14 right-6 sm:bottom-20 sm:right-10 transition-all duration-700 delay-300 ${
            !isTransitioning
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 translate-x-8 translate-y-8"
          }`}
        >
          <div className="w-8 h-8 sm:w-14 sm:h-14 border-b-2 border-r-2 border-secondary-color shadow-lg shadow-secondary-color/30" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-secondary-color rounded-full animate-pulse" />
        </div>

        {/* Slide counter */}

        {/* Content - Centered with proper spacing */}
        <div className="relative w-full flex flex-col items-center justify-center text-center px-8 sm:px-14 md:px-20 lg:px-28 max-w-6xl">
          {/* Label with simple slide from left */}
          <div
            className={`flex items-center gap-3 mb-4 sm:mb-5 transition-all duration-800 delay-300 ${
              !isTransitioning
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div
              className={`h-px bg-yellow-600 shrink-0 transition-all duration-600 delay-500 ${
                !isTransitioning ? "w-12 sm:w-16" : "w-0"
              }`}
            />
            <span className="text-yellow-600 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap drop-shadow-lg">
              Namuna Vidhya Sadan
            </span>
            <div
              className={`h-px bg-yellow-600 shrink-0 transition-all duration-600 delay-500 ${
                !isTransitioning ? "w-12 sm:w-16" : "w-0"
              }`}
            />
          </div>

          {/* Title with simple slide from right */}
          <h1
            className={`text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-8xl font-black text-blue-950 leading-[0.9] mb-6 sm:mb-8 max-w-5xl  transition-all duration-1000 delay-600 ${
              !isTransitioning
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
            style={{
              textShadow:
                "3px 3px 6px rgba(0,0,0,0.9), 0 0 20px rgba(30,58,138,0.4)",
            }}
          >
            {randomSlides[activeIndex]?.title || "Excellence in Education"}
          </h1>

          {/* Divider with fade in */}
          <div
            className={`flex items-center justify-center gap-3 mb-8 sm:mb-12 transition-all duration-800 delay-900 ${
              !isTransitioning ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div
              className={`h-0.5 bg-secondary-color rounded-full transition-all duration-600 delay-1000 ${
                !isTransitioning ? "w-16 sm:w-24" : "w-0"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full bg-primary-color transition-all duration-400 delay-1100 shadow-lg animate-pulse ${
                !isTransitioning ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            />
            <div
              className={`h-0.5 bg-secondary-color rounded-full transition-all duration-600 delay-1000 ${
                !isTransitioning ? "w-16 sm:w-24" : "w-0"
              }`}
            />
          </div>

          {/* Buttons with simple slide from sides */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div
              className={`transition-all duration-800 delay-1200 ${
                !isTransitioning
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }`}
            >
              <Button to="/about" size="lg" variant="hero">
                About Us
              </Button>
            </div>

            <div
              className={`transition-all duration-800 delay-1300 ${
                !isTransitioning
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-16"
              }`}
            >
              <Button to="/gallery" size="lg" variant="heroOutline">
                View Gallery
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced bottom color bar with animation */}
        <div className="absolute bottom-0 left-0 right-0 h-1 z-20 overflow-hidden">
          <div className="h-full bg-linear-to-r from-primary-color via-third-color to-secondary-color" />
          <div
            className={`absolute top-0 left-0 h-full w-full bg-linear-to-r from-transparent via-white/30 to-transparent transform transition-transform duration-2000 ${
              !isTransitioning ? "translate-x-full" : "-translate-x-full"
            }`}
          />
        </div>
      </div>

      {/* Enhanced Navigation Buttons */}
      <button className="hero-prev absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 group">
        <svg
          className="w-4 h-4 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="hero-next absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 group">
        <svg
          className="w-4 h-4 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default HeroSlider;
