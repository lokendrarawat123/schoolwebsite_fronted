import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react"; // lucide-react use gareko chu icons ko lagi
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/img/namunalogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { key: "HOME", path: "/" },
    { key: "ABOUT US", path: "/about" },
    { key: "ACADEMICS", path: "/academics" },
    { key: "GALLERY", path: "/gallery" },
    { key: "BLOG", path: "/blog" },
    { key: "NOTICE", path: "/notice" },
    { key: "VACANCY", path: "/vacancy" },
    { key: "CONTACT", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full">
      {/* Top Gradient Header */}
      <div className="bg-linear-to-r from-purple-700 to-blue-700 text-white h-30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-4 px-4 gap-4">
          {/* Logo & School Name */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 md:w-14" />
            <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
              GEMS SCHOOL
            </h1>
          </Link>

          {/* Contact & Socials (Hidden on small mobile if needed, or flex-row) */}
          <div className="hidden lg:flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-white text-blue-600 p-2 rounded-full">
                <Mail size={16} />
              </div>
              info@gems.edu.np
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-white text-blue-600 p-2 rounded-full">
                <Phone size={16} />
              </div>
              977 1 5275111
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-lg ml-4">
              <Facebook
                className="cursor-pointer hover:text-gray-200"
                size={20}
              />
              <Instagram
                className="cursor-pointer hover:text-gray-200"
                size={20}
              />
              <Linkedin
                className="cursor-pointer hover:text-gray-200"
                size={20}
              />
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button className="lg:hidden text-3xl" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative mt-0 lg:-mt-6  z-50">
        <div className="max-w-6xl mx-auto bg-white shadow-lg lg:rounded-lg overflow-hidden">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-between items-center px-4 py-4">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.path}
                  className={`text-[16px]  text-black font-bold tracking-tight transition-colors duration-300 hover:text-blue-600 ${
                    isActive(item.path) ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {item.key}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          {open && (
            <div className="lg:hidden border-t">
              <ul className="flex flex-col p-4 space-y-3">
                {navItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`block text-sm font-medium py-2 px-4 rounded-md ${
                        isActive(item.path)
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.key}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
