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
    { key: "FAQ", path: "/faq" },
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
    setMobileDropdown(null);
    setDesktopDropdown(null);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 flex justify-center">
      <div className="w-[90%] max-w-6xl bg-white shadow-xl rounded-xl h-16 -mt-8 flex items-center px-6">
        <ul className="hidden lg:flex justify-between items-center w-full">
          {navItems.map((item) => {
            const isParentActiveState = isParentActive(item.children);

            return (
              <li
                key={item.key}
                className="relative"
                ref={item.children ? dropdownRef : null}
              >
                {/* Main Item */}
                {item.children ? (
                  <button
                    onClick={() =>
                      setDesktopDropdown(
                        desktopDropdown === item.key ? null : item.key,
                      )
                    }
                    onMouseEnter={() => setDesktopDropdown(item.key)}
                    className={`flex items-center gap-1 text-lg font-semibold ${
                      isParentActiveState ? "text-blue-600" : "text-gray-700"
                    } hover:text-blue-600 transition-colors duration-200`}
                  >
                    {item.key}
                    <HiChevronDown
                      className={`text-sm transition-transform duration-200 ${
                        desktopDropdown === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-lg font-semibold ${
                      isActive(item.path) ? "text-blue-600" : "text-gray-700"
                    } hover:text-blue-600 transition-colors duration-200`}
                  >
                    {item.key}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.children && (
                  <ul
                    className={`absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-lg border transition-all duration-200 z-50 ${
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
                            index === 0 ? "rounded-t-lg" : ""
                          } ${
                            index === item.children.length - 1
                              ? "rounded-b-lg"
                              : ""
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

        {/* Mobile Button */}
        <button
          className="lg:hidden text-3xl ml-auto text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-16 w-[90%] bg-white shadow-xl rounded-xl p-4 border">
          <ul className="flex flex-col space-y-1">
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
                      className={`w-full flex justify-between items-center py-3 px-4 font-medium rounded-md transition-colors duration-150 ${
                        isParentActive(item.children)
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.key}
                      <HiChevronDown
                        className={`transition-transform duration-200 ${
                          mobileDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileDropdown === item.key && (
                      <ul className="ml-4 mt-2 space-y-1 animate-fadeIn">
                        {item.children.map((sub) => (
                          <li key={sub.key}>
                            <Link
                              to={sub.path}
                              onClick={() => {
                                setOpen(false);
                                setMobileDropdown(null);
                              }}
                              className={`block py-2 px-4 rounded-md text-sm transition-colors duration-150 ${
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
                    className={`block py-3 px-4 rounded-md font-medium transition-colors duration-150 ${
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
    </nav>
  );
};

export default Navbar;
