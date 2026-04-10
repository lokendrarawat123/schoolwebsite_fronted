import React from "react";
import Button from "../ButtonComponent";

const HeroContainer = ({ title, subtitle, bgImage, className = "" }) => {
  return (
    /* Main Container: min-h-[80vh] jasley bottom maa white space chhodchha */
    <div
      className={`relative flex flex-col items-center min-h-[80vh] bg-white overflow-hidden ${className}`}
    >
      {/* BACKGROUND & IMAGE SECTION (Top 50vh - 60vh सम्म) */}
      <div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : "none",
          }}
        />
        {/* Overlays for the image area */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-r from-black/5 via-black/40 to-black/5" />
      </div>

      {/* MAIN CONTENT (Title, Subtitle, Buttons) */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mt-10">
        <h1 className="text-4xl capitalize md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          {title}
        </h1>

        <div className="w-16 h-0.75 bg-yellow-400 mb-6 rounded-full" />

        <p className="text-sm md:text-lg capitalize text-gray-200 leading-relaxed mb-8 drop-shadow-md">
          {subtitle}
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Button
            to="/"
            className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-green-600 transition"
          >
            HOME
          </Button>
          <Button className="px-6 py-2 rounded-full bg-green-700 text-white text-sm font-medium uppercase hover:bg-blue-600 transition">
            {title}
          </Button>
        </div>
      </div>

      {/* BOTTOM DESIGN (White Space Area maa basney) */}
      <div className="absolute bottom-12 z-20 flex flex-col items-center w-full">
        {/* Sano Decorative Line */}
        <div className="flex items-center gap-4 w-full max-w-lg px-6">
          <div className="flex-1 h-0.5 bg-yellow-300" /> {/* Left Line */}
          <div className="flex flex-col items-center">
            {/* Dots Design */}
            <div className="flex gap-1 mb-2">
              <div className="w-1 h-1 bg-primary-color rounded-full" />
              <div className="w-1 h-1 bg-secondary-color rounded-full" />
              <div className="w-1 h-1 bg-third-color rounded-full" />
            </div>

            {/* School Name */}
            <span className="text-primary-color text-xs md:text-sm tracking-[0.4em] uppercase font-black text-center">
              Namuna Vidhya Sadan School
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-yellow-300" /> {/* Right Line */}
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
