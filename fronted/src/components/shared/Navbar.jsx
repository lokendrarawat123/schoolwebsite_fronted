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
      {/* ── DESKTOP ── */}
      <div className="hidden lg:block sticky top-0 z-50 -mt-8">
        <div className="flex justify-center px-6">
          <div
            className="w-full max-w-6xl shadow-xl rounded-2xl px-6 h-16 flex items-center"
            style={{ backgroundColor: "#1B6FC8" }}
          >
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
                      className="flex items-center gap-1 text-sm xl:text-base font-semibold px-3 py-2 rounded-lg transition-colors duration-200"
                      style={{
                        color: isParentActive(item.children)
                          ? "#F5C842"
                          : "#FFF9E6",
                        backgroundColor: isParentActive(item.children)
                          ? "rgba(245,200,66,0.15)"
                          : "transparent",
                      }}
                      onMouseLeave={(e) => {
                        if (!isParentActive(item.children)) {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#FFF9E6";
                        }
                      }}
                      onMouseOver={(e) => {
                        if (!isParentActive(item.children)) {
                          e.currentTarget.style.backgroundColor =
                            "rgba(255,255,255,0.15)";
                          e.currentTarget.style.color = "#fff";
                        }
                      }}
                    >
                      {item.key}
                      <HiChevronDown
                        className={`text-sm transition-transform duration-200 ${
                          desktopDropdown === item.key ? "rotate-180" : ""
                        }`}
                        style={{ color: "#FFF9E6" }}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-sm xl:text-base font-semibold px-3 py-2 rounded-lg transition-colors duration-200"
                      style={{
                        color: isActive(item.path) ? "#0C3A6E" : "#FFF9E6",
                        backgroundColor: isActive(item.path)
                          ? "#F5C842"
                          : "transparent",
                      }}
                    >
                      {item.key}
                    </Link>
                  )}

                  {item.children && (
                    <ul
                      className={`absolute left-0 top-full mt-1 w-52 bg-white shadow-xl rounded-xl overflow-hidden transition-all duration-200 z-50 ${
                        desktopDropdown === item.key
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      style={{ border: "0.5px solid #B5D4F4" }}
                      onMouseLeave={() => setDesktopDropdown(null)}
                    >
                      {item.children.map((sub, index) => (
                        <li key={sub.key}>
                          <Link
                            to={sub.path}
                            className="block px-4 py-3 text-sm transition-colors duration-150"
                            style={{
                              borderBottom:
                                index < item.children.length - 1
                                  ? "0.5px solid #E6F1FB"
                                  : "none",
                              backgroundColor:
                                location.pathname === sub.path
                                  ? "#F5C842"
                                  : "transparent",
                              color:
                                location.pathname === sub.path
                                  ? "#0C3A6E"
                                  : "#185FA5",
                            }}
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
      </div>

      {/* ── MOBILE: sticky bar ── */}
      <div
        className="lg:hidden sticky top-0 z-50 shadow-lg"
        style={{ backgroundColor: "#185FA5" }}
      >
        <div className="flex items-center justify-end px-6 h-16">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg transition-colors"
            style={{ color: "#fff" }}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE: drawer ── */}
      {open && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="lg:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl z-50 flex flex-col">
            <div
              className="flex items-center justify-between px-4 py-4"
              style={{
                borderBottom: "0.5px solid #B5D4F4",
                backgroundColor: "#E6F1FB",
              }}
            >
              <span className="font-bold" style={{ color: "#185FA5" }}>
                Navigation
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg"
                style={{ color: "#185FA5" }}
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
                        className="w-full flex justify-between items-center py-3 px-4 font-medium  text-sm transition-colors"
                        style={{
                          backgroundColor: isParentActive(item.children)
                            ? "#1B6FC8"
                            : "transparent",
                          color: isParentActive(item.children)
                            ? "#fff"
                            : "#185FA5",
                        }}
                      >
                        {item.key}
                        <HiChevronDown
                          className={`transition-transform duration-200 ${
                            mobileDropdown === item.key ? "rotate-180" : ""
                          }`}
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
                                className="block py-2.5 px-4 rounded-lg text-sm transition-colors"
                                style={{
                                  backgroundColor:
                                    location.pathname === sub.path
                                      ? "#F5C842"
                                      : "transparent",
                                  color:
                                    location.pathname === sub.path
                                      ? "#0C3A6E"
                                      : "#185FA5",
                                }}
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
                      className="block py-3 px-4 rounded-lg font-medium text-sm transition-colors"
                      style={{
                        backgroundColor: isActive(item.path)
                          ? "#1B6FC8"
                          : "transparent",
                        color: isActive(item.path) ? "#fff" : "#185FA5",
                      }}
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
