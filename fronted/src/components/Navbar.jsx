import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { key: "HOME", path: "/" },
    { key: "ABOUT US", path: "/about" },
    { key: "OUR TEAM", path: "/team" },
    {
      key: "ACADEMICS",
      children: [
        { key: "Events", path: "/academics/events" },
        { key: "Achievements", path: "/academics/achievements" },
        { key: "Question Bank", path: "/academics/question-bank" },
      ],
    },
    { key: "GALLERY", path: "/gallery" },
    { key: "BLOG", path: "/blog" },
    { key: "NOTICE", path: "/notice" },
    { key: "VACANCY", path: "/vacancy" },
    { key: "CONTACT", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const isParentActive = (children) =>
    children?.some((sub) => location.pathname === sub.path);

  return (
    <nav className="sticky top-0 z-50 flex justify-center">
      <div className="w-[90%] max-w-6xl bg-white shadow-xl rounded-xl h-16 -mt-8 flex items-center px-6">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-between items-center w-full">
          {navItems.map((item) => (
            <li
              key={item.key}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.key)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              {/* Main Item */}
              {item.children ? (
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.key ? null : item.key)
                  }
                  className={`flex items-center gap-1 text-lg font-semibold transition ${
                    isParentActive(item.children)
                      ? "text-blue-600"
                      : "text-gray-700"
                  } hover:text-blue-600`}
                >
                  {item.key}
                  <span
                    className={`transition-transform ${
                      openDropdown === item.key ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={`text-lg font-semibold transition ${
                    isActive(item.path) ? "text-blue-600" : "text-gray-700"
                  } hover:text-blue-600`}
                >
                  {item.key}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && openDropdown === item.key && (
                <ul className="absolute left-0 mt-3 w-52 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden animate-fadeIn">
                  {item.children.map((sub) => (
                    <li key={sub.key}>
                      <Link
                        to={sub.path}
                        className={`block px-5 py-2.5 text-sm transition ${
                          location.pathname === sub.path
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                      >
                        {sub.key}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
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
        <div className="lg:hidden absolute top-16 w-[90%] bg-white shadow-xl rounded-xl p-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.key}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.key ? null : item.key,
                        )
                      }
                      className="w-full flex justify-between items-center py-2 px-4 text-gray-700 font-medium hover:bg-gray-100 rounded-md"
                    >
                      {item.key}
                      <span>{openDropdown === item.key ? "▲" : "▼"}</span>
                    </button>

                    {openDropdown === item.key && (
                      <ul className="ml-4 mt-2 space-y-1">
                        {item.children.map((sub) => (
                          <li key={sub.key}>
                            <Link
                              to={sub.path}
                              onClick={() => {
                                setOpen(false);
                                setOpenDropdown(null);
                              }}
                              className={`block py-2 px-4 rounded-md text-sm ${
                                location.pathname === sub.path
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                              }`}
                            >
                              {sub.key}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`block py-2 px-4 rounded-md ${
                      isActive(item.path)
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.key}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Animation (optional Tailwind custom) */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
