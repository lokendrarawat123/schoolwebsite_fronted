import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSlider from "../components/home/HeroSlider.jsx";
import AboutComponents from "../components/home/AboutComponents.jsx";
import Button from "../components/ButtonComponent.jsx";
import Faqs from "../components/faqs/Faqs.jsx";
import ScrollToTop from "../components/shared/ScrollTop.jsx";

const Home = () => {
  return (
    <main className="font-sans">
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Preview */}
      <AboutComponents />

      {/* Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-gray-800">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {["Quality Education", "Expert Teachers", "Modern Labs"].map(
              (item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl sm:text-3xl">
                      {i === 0 ? "📚" : i === 1 ? "👨‍🏫" : "🔬"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">
                    {item}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We ensure top learning environment for students with modern
                    facilities and experienced faculty.
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Notices */}
      <section className="py-12 sm:py-16 lg:py-20 text-center bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">
            Latest Notices
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-4 sm:p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl">📢</span>
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">
                  Important Notice Title {i}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2">
                  March 2026
                </p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  Brief description of the notice content goes here...
                </p>
              </motion.div>
            ))}
          </div>

          <Button
            as={Link}
            onClick={ScrollToTop}
            to="/notice"
            className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-secondary-color text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base font-medium"
          >
            View All Notices
          </Button>
        </div>
      </section>

      {/* Faq section */}
      <section>
        <Faqs />
      </section>
    </main>
  );
};

export default Home;
