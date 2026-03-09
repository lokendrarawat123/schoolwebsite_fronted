import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Result",
    "Gallery",
    "Notice",
    "Vacancy",
    "Contact",
  ];

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-900">Namuna College</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-700 transition"
            >
              {item}
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
          {navItems.map((item, index) => (
            <li
              key={index}
              className="border-b pb-2 cursor-pointer hover:text-blue-700"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
