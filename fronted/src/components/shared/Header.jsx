import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, LinkedinIcon } from "lucide-react";
import logo from "../../assets/img/namunalogo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full relative">
      {/* Top Gradient */}
      <div className="bg-linear-to-r from-[#8a8632ef] via-[#66e172] to-[#1D2F8A] text-white py-4 sm:py-6 md:py-8 lg:py-10 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 py-2 sm:py-4 px-2 sm:px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="logo" className="w-10 sm:w-12 md:w-14" />
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-left">
              NVS E.M. SCHOOL
            </h1>
          </Link>

          {/* Contact - Mobile: Show simplified version */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 lg:gap-0">
            {/* Mobile Contact - Simplified */}
            <div className="flex sm:hidden items-center gap-4">
              <a
                href="mailto:namuna2063@gmail.com"
                className="flex items-center gap-1 text-xs hover:underline"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>
              <a
                href="tel:081414036"
                className="flex items-center gap-1 text-xs hover:underline"
              >
                <Phone size={14} />
                <span>Call</span>
              </a>
            </div>

            {/* Tablet & Desktop Contact */}
            <div className="hidden sm:flex lg:flex items-center">
              <div className="hidden lg:flex items-center">
                {/* Gmail - Click to Mail */}
                <a
                  href="mailto:namuna2063@gmail.com"
                  className="flex items-center gap-2 pr-4 lg:pr-6 border-r border-white group cursor-pointer"
                >
                  <div className="border-2 lg:border-3 border-blue-600 bg-white text-blue-600 p-2 lg:p-3 rounded-full group-hover:bg-blue-50 transition-colors">
                    <Mail size={16} className="lg:w-4.5 lg:h-4.5" />
                  </div>
                  <span className="text-white text-sm lg:text-base hover:underline hidden md:inline">
                    namuna2063@gmail.com
                  </span>
                </a>

                {/* Phone - Click to Call */}
                <a
                  href="tel:081414036"
                  className="flex items-center gap-2 px-4 lg:px-6 border-r border-white group cursor-pointer"
                >
                  <div className="bg-white border-2 lg:border-3 border-blue-600 text-blue-600 p-2 lg:p-3 rounded-full group-hover:bg-blue-50 transition-colors">
                    <Phone size={16} className="lg:w-4.5 lg:h-4.5" />
                  </div>
                  <span className="text-white text-sm lg:text-base hover:underline hidden md:inline">
                    081-414 036
                  </span>
                </a>
              </div>

              <ul className="flex items-center pl-2 sm:pl-3 gap-1 sm:gap-2">
                {/* Facebook */}
                <li className="flex items-center">
                  <a
                    href="https://www.facebook.com/p/Namuna-Vidhya-Sadan-EM-Secondary-School-100057264595833/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-blue-300 bg-white text-blue-600 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer flex items-center justify-center touch-friendly"
                  >
                    <Facebook size={14} className="sm:w-4.5 sm:h-4.5" />
                  </a>
                </li>

                {/* Instagram */}
                <li className="flex items-center ml-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-blue-300 bg-white text-blue-600 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer flex items-center justify-center touch-friendly"
                  >
                    <Instagram size={14} className="sm:w-4.5 sm:h-4.5" />
                  </a>
                </li>

                {/* LinkedIn */}
                <li className="flex items-center ml-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-blue-300 bg-white text-blue-600 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer flex items-center justify-center touch-friendly"
                  >
                    <LinkedinIcon size={14} className="sm:w-4.5 sm:h-4.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar overlaps here */}
      <Navbar />
    </header>
  );
};

export default Header;
