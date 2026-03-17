import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

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
    <nav className="sticky top-0 z-50 flex justify-center">
      {/* Floating Card Navbar */}
      <div className="w-[90%] max-w-6xl bg-white shadow-xl rounded-xl h-16 -mt-8 flex items-center px-6">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-between items-center w-full">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                to={item.path}
                className={`text-lg font-semibold transition duration-300 hover:text-blue-600 ${
                  isActive(item.path) ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.key}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-3xl ml-auto"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-16 w-[90%] bg-white shadow-lg rounded-lg p-4">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-medium py-2 px-4 rounded-md ${
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
    </nav>
  );
};

export default Navbar;
