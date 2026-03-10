import React from "react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-third-color w-full text-white fixed top-0 left-0  shadow-md z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-4 text-sm">
        {/* Phone */}
        <div className="flex items-center gap-2">
          <IoCallOutline className="text-lg" />
          <span>+977 9841234567</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 mt-1 md:mt-0">
          <IoMailOutline className="text-lg" />
          <span>namuna@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
