import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, LinkedinIcon } from "lucide-react";
import logo from "../../assets/img/namunalogo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full relative">
      {/* Top Gradient */}
      <div className="bg-linear-to-r from-[#6C4299] via-[#0586D6] to-[#1D2F8A] text-white py-10 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-14" />
            <h1 className="text-4xl font-semibold">NVS E.M. SCHOOL</h1>
          </Link>

          {/* Contact */}
          <div className="hidden lg:flex items-center">
            <div className="hidden lg:flex items-center">
              {/* Gmail - Click to Mail */}
              <a
                href="mailto:namuna2063@gmail.com"
                className="flex items-center gap-2 pr-6 border-r border-white group cursor-pointer"
              >
                <div className="border-3 border-blue-600 bg-white text-blue-600 p-3 rounded-full group-hover:bg-blue-50 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-white text-base hover:underline">
                  namuna2063@gmail.com
                </span>
              </a>

              {/* Phone - Click to Call */}
              <a
                href="tel:081414036"
                className="flex items-center gap-2 px-6 border-r border-white group cursor-pointer"
              >
                <div className="bg-white border-3 border-blue-600 text-blue-600 p-3 rounded-full group-hover:bg-blue-50 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-white text-base hover:underline">
                  081-414 036
                </span>
              </a>
            </div>

            <ul className="flex items-center pl-3">
              {/* Facebook */}
              <li className="flex items-center pr-4 border-r border-white/30 last:border-none">
                <a
                  href="https://www.facebook.com/p/Namuna-Vidhya-Sadan-EM-Secondary-School-100057264595833/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-300 bg-white text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer flex items-center justify-center"
                >
                  <Facebook size={18} />
                </a>
              </li>

              {/* Instagram */}
              <li className="flex items-center px-4 border-r border-white/30 last:border-none">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-300 bg-white text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer flex items-center justify-center"
                >
                  <Instagram size={18} />
                </a>
              </li>

              {/* LinkedIn */}
              <li className="flex items-center pl-4 border-r border-white/30 last:border-none">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-300 bg-white text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer flex items-center justify-center"
                >
                  <LinkedinIcon size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar overlaps here */}
      <Navbar />
    </header>
  );
};

export default Header;
