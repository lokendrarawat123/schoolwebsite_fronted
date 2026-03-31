import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSlider from "../components/home/HeroSlider.jsx";
import AboutComponents from "../components/home/AboutComponents.jsx";
import WhyChooseUs from "../components/Home/WhyChooseUs.jsx";
import LatestEvents from "../components/Home/LatestEvents.jsx";
import PrincipalMessage from "../components/Home/PrincipalMessage.jsx";
import ExploreSchoolLife from "../components/Home/ExploreSchoolLife.jsx";
import Faqs from "../components/faqs/Faqs.jsx";
import ScrollToTop from "../components/shared/ScrollTop.jsx";

const Home = () => {
  return (
    <main className="font-sans bg-gray-50">
      {/* Hero Slider */}
      <HeroSlider />
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* About Preview */}
        <AboutComponents />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Explore School Life */}
        <ExploreSchoolLife />

        {/* Latest Events */}
        <LatestEvents />

        {/* Principal Message */}
        <PrincipalMessage />

        {/* Faq section */}
        <Faqs />
      </div>
    </main>
  );
};

export default Home;
