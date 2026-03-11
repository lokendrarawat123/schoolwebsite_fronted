import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/img/namuna_logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { key: "Home", path: "/" },
    { key: "About", path: "/about" },
    { key: "Academics", path: "/academics" },
    { key: "Gallery", path: "/gallery" },
    { key: "Notice", path: "/notice" },
    { key: "Vacancy", path: "/vacancy" },
    { key: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-secondary-color shadow-md w-full p-3 fixed left-0 top-13 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
          <span className="text-2xl font-bold">Namuna Bidhya Sadan</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium ">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                to={item.path}
                className="cursor-pointer p-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-color after:transition-all after:duration-300 hover:after:w-full transition hover:font-bold"
              >
                {item.key}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-3 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.key} className="border-b pb-2">
              <Link
                to={item.path}
                className="cursor-pointer hover:text-blue-700"
                onClick={() => setOpen(false)}
              >
                {item.key}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
