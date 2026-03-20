import React from "react";

import Button from "../ButtonComponent";

const HeroContainer = ({ title, subtitle, bgImage, className = "" }) => {
  return (
    <div
      className={`relative flex flex-col  min-h-[70vh] overflow-hidden ${className}`}
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          animation: "kenBurns 10s ease-in-out infinite",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/20"></div>

      {/* Breadcrumb / Page Name */}

      <div className="relative z-10  my-10 px-4 md:px-0 flex flex-col items-center">
        {/* Breadcrumb Buttons */}
        <h1 className="text-5xl md:text-4xl uppercase font-extrabold text-gray-100 animate-fadeIn mb-5">
          {title}
        </h1>
        <div className="flex space-x-4 mb-4">
          <Button to="/" className="bg-blue-900 ">
            HOME
          </Button>
          <span className="text-gray-700 font-bold text-5xl md:text-5xl flex items-center h-full">
            /
          </span>
          <Button className="bg-blue-900 hover:from-blue-800 hover:to-purple-600  uppercase shadow-lg hover:shadow-xl ">
            {title}
          </Button>
        </div>
        <div className="mt-auto">
          <h2 className="text-xl md:text-2xl text-gray-200">{subtitle}</h2>
        </div>

        {/* Main Heading */}
      </div>
    </div>
  );
};

export default HeroContainer;
