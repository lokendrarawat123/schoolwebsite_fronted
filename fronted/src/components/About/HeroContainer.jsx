import React from "react";
import Button from "../ButtonComponent";

const HeroContainer = ({ title, subtitle, bgImage, className = "" }) => {
  return (
    <div
      className={`relative flex flex-col min-h-[70vh] overflow-hidden ${className}`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          animation: "kenBurns 10s ease-in-out infinite",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 my-10 px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-3xl uppercase font-extrabold text-gray-100 mb-5">
          {title}
        </h1>

        <div className="flex items-center space-x-2 mb-4">
          <Button
            to="/"
            className="px-5 py-2 rounded-full bg-third-color text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            HOME
          </Button>

          <span className="text-gray-200 text-3xl md:text-4xl font-bold mx-2">
            /
          </span>

          <Button className="px-5 py-2 rounded-full uppercase bg-third-color text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            {title}
          </Button>
        </div>

        <h2 className="text-xl md:text-2xl uppercase text-gray-200 mt-4">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default HeroContainer;
