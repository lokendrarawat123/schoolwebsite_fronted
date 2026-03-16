import React from "react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-third-color w-full text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-3 text-xs sm:text-sm gap-4 sm:gap-0">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 hover:text-primary-color transition">
            <IoCallOutline className="text-lg" />
            <span>+977 9841234567</span>
          </div>
          <div className="flex items-center gap-2 hover:text-primary-color transition">
            <IoMailOutline className="text-lg" />
            <span>namuna@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
