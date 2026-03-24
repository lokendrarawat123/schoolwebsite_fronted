import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGraduationCap,
  FaArrowUp,
} from "react-icons/fa";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ScrollToTop from "../shared/ScrollTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Data (Dynamic Structure)
  const footerData = {
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Academics", path: "/academics" },
      { name: "Gallery", path: "/gallery" },
      { name: "Notices", path: "/notice" },
    ],
    programs: [
      "+2 Science",
      "+2 Management",
      "Entrance Preparation",
      "Scholarship Program",
      "Career Counseling",
    ],
    socialLinks: [
      {
        icon: <FaFacebook />,
        link: "https://www.facebook.com/p/Namuna-Vidhya-Sadan-EM-Secondary-School-100057264595833",
        style: "from-blue-600 to-primary-color",
      },
      {
        icon: <FaTwitter />,
        link: "#",
        style: "from-blue-400 to-blue-600",
      },
      {
        icon: <FaInstagram />,
        link: "#",
        style: "from-pink-500 to-purple-600",
      },
      {
        icon: <FaLinkedin />,
        link: "#",
        style: "from-blue-700 to-blue-900",
      },
    ],
    contact: {
      address: "Pipari, Kohalpur Municipality, Banke District, Nepal",
      phone: "081-414036",
      email: "namuna2063@gmail.com",
    },
  };

  return (
    <footer className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-primary-color/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-linear-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-linear-to-r from-primary-color to-blue-500 rounded-lg">
              <FaGraduationCap className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-primary-color to-blue-400 bg-clip-text text-transparent">
              Namuna Bidhya Sadan
            </h3>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Established in 2062 B.S., we provide quality education with modern
            teaching methods and holistic student development.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {footerData.socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`group p-3 bg-white/10 rounded-full hover:bg-linear-to-r hover:${item.style} transition-all duration-300 transform hover:scale-110`}
              >
                <span className="text-lg">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {footerData.quickLinks.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={ScrollToTop}
                  to={item.path}
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <span className="w-2 h-2 bg-primary-color rounded-full"></span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-xl font-bold mb-6">Programs</h4>
          <ul className="space-y-4">
            {footerData.programs.map((program, index) => (
              <li key={index}>
                <span className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {program}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-bold mb-6">Contact</h4>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <FaMapMarkerAlt />
              <p className="text-gray-300 text-sm">
                {footerData.contact.address}
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <BsTelephoneOutboundFill />
              <a href="tel:081414036" className="text-gray-300 text-sm">
                {footerData.contact.phone}
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <FaEnvelope />
              <a
                href={`mailto:${footerData.contact.email}`}
                className="text-gray-300 text-sm"
              >
                {footerData.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        © {currentYear} Namuna Bidhya Sadan. All rights reserved.
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 bg-blue-500 rounded-full"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
