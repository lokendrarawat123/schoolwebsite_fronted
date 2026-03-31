import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
    setMobileDropdown(null);
    setDesktopDropdown(null);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 flex justify-center px-2 sm:px-4">
      <div className="w-full max-w-6xl lg:bg-white lg:shadow-xl lg:rounded-xl h-12 sm:h-14 md:h-16 -mt-4 sm:-mt-6 md:-mt-8 flex items-center px-2 sm:px-4 md:px-6">
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-between items-center w-full">
          {navItems.map((item) => {
            const isParentActiveState = isParentActive(item.children);
            return (
              <li
                key={item.key}
                className="relative"
                ref={item.children ? dropdownRef : null}
              >
                {item.children ? (
                  <button
                    onClick={() =>
                      setDesktopDropdown(
                        desktopDropdown === item.key ? null : item.key,
                      )
                    }
                    onMouseEnter={() => setDesktopDropdown(item.key)}
                    className={`flex items-center gap-1 text-sm xl:text-base font-semibold px-3 py-2 rounded-lg transition-colors duration-200 ${
                      isParentActiveState
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {item.key}
                    <HiChevronDown
                      className={`text-sm transition-transform duration-200 ${desktopDropdown === item.key ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm xl:text-base font-semibold px-3 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {item.key}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.children && (
                  <ul
                    className={`absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border overflow-hidden transition-all duration-200 z-50 ${
                      desktopDropdown === item.key
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseLeave={() => setDesktopDropdown(null)}
                  >
                    {item.children.map((sub, index) => (
                      <li key={sub.key}>
                        <Link
                          to={sub.path}
                          className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                            index === item.children.length - 1
                              ? ""
                              : "border-b border-gray-50"
                          } ${
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
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-lg sm:text-xl md:text-2xl ml-auto text-black hover:text-blue-600 transition-colors p-1 sm:p-1.5 md:p-2 touch-friendly bg-white rounded-lg shadow-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/20 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="lg:hidden absolute top-10 sm:top-12 md:top-16 left-1 right-1 sm:left-2 sm:right-2 md:left-4 md:right-4 bg-white shadow-xl rounded-xl p-2 sm:p-3 md:p-4 border z-50 max-h-[70vh] overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.key}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === item.key ? null : item.key,
                          )
                        }
                        className={`w-full flex justify-between items-center py-2 sm:py-2.5 md:py-3 px-2 sm:px-3 md:px-4 font-medium rounded-lg transition-colors duration-150 touch-friendly text-xs sm:text-sm md:text-base ${
                          isParentActive(item.children)
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <span>{item.key}</span>
                        <HiChevronDown
                          className={`transition-transform duration-200 ${mobileDropdown === item.key ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileDropdown === item.key && (
                        <ul className="ml-2 sm:ml-3 md:ml-4 mt-1 sm:mt-2 space-y-1 animate-fadeIn">
                          {item.children.map((sub) => (
                            <li key={sub.key}>
                              <Link
                                to={sub.path}
                                onClick={() => {
                                  setOpen(false);
                                  setMobileDropdown(null);
                                }}
                                className={`block py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 rounded-lg text-xs sm:text-sm transition-colors duration-150 touch-friendly ${
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
                      className={`block py-2 sm:py-2.5 md:py-3 px-2 sm:px-3 md:px-4 rounded-lg font-medium transition-colors duration-150 touch-friendly text-xs sm:text-sm md:text-base ${
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
        </>
      )}
    </nav>
  );
};

export default Navbar;
