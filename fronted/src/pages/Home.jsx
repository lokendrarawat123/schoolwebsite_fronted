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
    <main className="font-sans">
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Preview */}
      <AboutComponents />

      {/* Features */}

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
    </main>
  );
};

export default Home;
