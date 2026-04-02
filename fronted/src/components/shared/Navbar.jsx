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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileDropdown(null);
    setDesktopDropdown(null);
  }, [location.pathname]);

  return (
    <>
      {/* ── DESKTOP: floating white card ── */}
      <div className="hidden lg:flex justify-center px-6 -mt-6 relative z-40">
        <div className="w-full max-w-6xl  bg-white  shadow-xl rounded-2xl px-6 h-16 flex items-center">
          <ul className="flex items-center justify-between w-full">
            {navItems.map((item) => (
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
                      isParentActive(item.children)
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
                    className={`block text-sm xl:text-base font-semibold px-3 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {item.key}
                  </Link>
                )}

                {item.children && (
                  <ul
                    className={`absolute left-0 top-full mt-1 w-52 bg-white shadow-xl  border overflow-hidden transition-all duration-200 z-50 ${
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
                            index < item.children.length - 1
                              ? "border-b border-gray-100"
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
            ))}
          </ul>
        </div>
      </div>

      {/* ── MOBILE: sticky hamburger bar ── */}

      <div className="lg:hidden absolute -right-4 top-23  z-50 bg-transparent shadow-none border-none">
        <div className="flex items-center justify-end px-6 h-11">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg  text-white  hover:bg-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE: side drawer ── */}
      {open && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="lg:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl z-50 flex flex-col">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <span className="font-bold text-gray-800">Navigation</span>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600"
              >
                <HiX size={20} />
              </button>
            </div>
            <ul className="p-3 space-y-1 overflow-y-auto flex-1">
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
                        className={`w-full flex justify-between items-center py-3 px-4 font-medium rounded-lg text-sm transition-colors ${
                          isParentActive(item.children)
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.key}
                        <HiChevronDown
                          className={`transition-transform duration-200 ${mobileDropdown === item.key ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileDropdown === item.key && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {item.children.map((sub) => (
                            <li key={sub.key}>
                              <Link
                                to={sub.path}
                                onClick={() => {
                                  setOpen(false);
                                  setMobileDropdown(null);
                                }}
                                className={`block py-2.5 px-4 rounded-lg text-sm transition-colors ${
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
                      className={`block py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
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
    </>
  );
};

export default Navbar;
