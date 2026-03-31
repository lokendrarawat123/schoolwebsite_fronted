import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import tour from "../../assets/img/home/tour.jpg";
import student from "../../assets/img/home/student.jpg";
import home14 from "../../assets/img/home/home14.jpg";
import home5 from "../../assets/img/home/home5.jpg";
import sciencelab from "../../assets/img/home/sciencelab.png";
import mahabir from "../../assets/img/home/mahabir.jpg";

const ExploreSchoolLife = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // School life data with random images
  const schoolLifeData = [
    {
      id: 1,
      title: "summer tour",
      image: tour,
    },
    {
      id: 2,
      title: "our students farewell ",
      image: student,
    },
    {
      id: 3,
      title: "Science Laboratory",
      image: sciencelab,
    },
    {
      id: 4,
      title: "winning vollyball in mayor cup",
      image: home14,
    },
    {
      id: 5,
      title: "Cultural Programs",
      image: home5,
    },
    {
      id: 6,
      title: "mahabir pun at nvs",
      image: mahabir,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % schoolLifeData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + schoolLifeData.length) % schoolLifeData.length,
    );
  };

  const getPrevIndex = () => {
    return (currentIndex - 1 + schoolLifeData.length) % schoolLifeData.length;
  };

  const getNextIndex = () => {
    return (currentIndex + 1) % schoolLifeData.length;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Explore Our School Life
          </h2>
        </div>

        {/* Main Slider Layout */}
        <div className="relative flex items-center justify-center h-96 lg:h-125">
          {/* Left Image */}
          <div className="hidden lg:block relative w-64 h-full">
            <img
              src={schoolLifeData[getPrevIndex()].image}
              alt={schoolLifeData[getPrevIndex()].title}
              className="w-full h-full object-cover rounded-l-2xl opacity-60"
            />
            <div className="absolute inset-0 bg-black/20 rounded-l-2xl"></div>
          </div>

          {/* Main Center Image */}
          <div className="relative flex-1 max-w-4xl h-full mx-4 lg:mx-0">
            <img
              src={schoolLifeData[currentIndex].image}
              alt={schoolLifeData[currentIndex].title}
              className="w-full h-full object-cover rounded-2xl lg:rounded-none shadow-2xl"
            />

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 lg:p-8 rounded-b-2xl lg:rounded-none">
              <h3 className="text-xl lg:text-3xl font-bold text-white text-center">
                {schoolLifeData[currentIndex].title.toUpperCase()}
              </h3>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 lg:p-4 transition-all duration-200 backdrop-blur-sm"
              style={{
                clipPath:
                  "polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%, 30% 50%)",
              }}
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 lg:p-4 transition-all duration-200 backdrop-blur-sm"
              style={{
                clipPath:
                  "polygon(30% 0, 100% 0, 70% 50%, 100% 100%, 30% 100%, 0 50%)",
              }}
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative w-64 h-full">
            <img
              src={schoolLifeData[getNextIndex()].image}
              alt={schoolLifeData[getNextIndex()].title}
              className="w-full h-full object-cover rounded-r-2xl opacity-60"
            />
            <div className="absolute inset-0 bg-black/20 rounded-r-2xl"></div>
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2 lg:hidden">
          {schoolLifeData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSchoolLife;
