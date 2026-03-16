import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/namuna_logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { key: "Home", path: "/" },
    { key: "About", path: "/about" },
    { key: "Academics", path: "/academics" },
    { key: "Gallery", path: "/gallery" },
    { key: "Blog", path: "/blog" },
    { key: "Notice", path: "/notice" },
    { key: "Vacancy", path: "/vacancy" },
    { key: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-amber-200 shadow-lg  w-full sticky top-0 z-40 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img src={logo} alt="logo" className="h-14 w-auto object-contain" />
            <span className="hidden sm:inline text-lg sm:text-xl font-bold">
              Namuna Bidhya Sadan
            </span>
          </Link>

          <ul className="hidden md:flex space-x-6 font-medium">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.path}
                  className={`relative px-3 py-2 transition duration-300
        after:absolute after:left-0 after:bottom-0 after:h-0.5
        after:w-0 after:bg-third-color after:transition-all after:duration-300
        hover:after:w-full
        ${
          isActive(item.path)
            ? "text-third-color font-bold after:w-full"
            : "text-gray-700"
        }`}
                >
                  {item.key}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-3xl p-2 hover:bg-opacity-80 rounded transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-opacity-20 border-white">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 rounded-md transition ${
                      isActive(item.path)
                        ? "bg-primary-color text-gray-900 font-bold"
                        : "hover:bg-opacity-80 hover:bg-primary-color hover:text-gray-900"
                    }`}
                    onClick={() => setOpen(false)}
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
  );
};

export default Navbar;
