import React from "react";
import bgImg from "../assets/img/scphoto.jpg";
import { stats } from "../../Data.js/aboutData.js"; // import stats data

const Home = () => {
  return (
    <main>
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60 hero-overlay" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          {/* Establishment info */}
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-white font-semibold drop-shadow-md">
            Established 2062 B.S.
          </p>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
            Namuna Bidhya Sadan
          </h1>

          {/* Subheading / Description */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white opacity-90 font-body drop-shadow-md">
            Nurturing young minds with quality education, strong values, and
            modern facilities in the heart of Nepal.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <a
              href="#about"
              className="px-8  py-3.5 rounded-lg bg-secondary-color text-white font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300 "
            >
              Discover More
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg border-2 border-white text-white font-semibold text-lg hover:bg-white/10 hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <section className="bg-third-color py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-primary-color">
                  {stat.number}
                </div>
                <div className="text-lg mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="text-center">
          <h1>Latest News</h1>
        </div>
      </section>
    </main>
  );
};

export default Home;
