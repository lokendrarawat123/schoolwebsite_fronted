import React from "react";
import Button from "../ButtonComponent";

const HeroContainer = ({ title, subtitle, bgImage, className = "" }) => {
  return (
    <div
      className={`relative flex flex-col justify-center items-center min-h-[90vh] overflow-hidden ${className}`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          animation: "kenBurns 12s ease-in-out infinite",
        }}
      ></div>

      {/* Overlay (Reduced Blur & Softer Gradient) */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-900/60 via-green-800/30 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 flex flex-col items-center text-center">
        {/* Title (Primary Color - Blue) */}
        <h1 className="text-4xl md:text-5xl uppercase font-extrabold text-white mb-6 tracking-wide">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-3 mb-6">
          <Button
            to="/"
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300"
          >
            HOME
          </Button>

          <span className="text-yellow-400 text-3xl font-bold">/</span>

          <Button className="px-6 py-2 rounded-full uppercase bg-green-600 text-white font-semibold shadow-md hover:bg-blue-600 hover:scale-105 transition-all duration-300">
            {title}
          </Button>
        </div>

        {/* Subtitle (Styled + Better Font Look) */}
        <h2 className="text-lg md:text-2xl text-yellow-600 font-medium tracking-wide leading-relaxed max-w-xl">
          {subtitle}
        </h2>

        {/* CTA Button */}
      </div>
    </div>
  );
};

export default HeroContainer;
