import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, LinkedinIcon } from "lucide-react";
import logo from "../../assets/img/namunalogo.png";
import { HiMenu, HiX } from "react-icons/hi";
import Navbar from "./Navbar";

const contactLinks = [
  {
    href: "mailto:namuna2063@gmail.com",
    icon: Mail,
    label: "namuna2063@gmail.com",
    mobileLabel: "Email",
  },
  {
    href: "tel:081414036",
    icon: Phone,
    label: "081-414 036",
    mobileLabel: "Call",
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/p/Namuna-Vidhya-Sadan-EM-Secondary-School-100057264595833/",
    icon: Facebook,
  },
  { href: "https://instagram.com", icon: Instagram },
  { href: "https://linkedin.com", icon: LinkedinIcon },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full shadow-2xl">
      {/* Top accent stripe */}
      <div className="flex h-1.5">
        <div className="flex-1 bg-primary-color" />
        <div className="flex-1 bg-secondary-color" />
        <div className="flex-1 bg-[#9f13a9b3]" />
      </div>

      {/* Main header */}
      <div className="relative bg-third-color px-4 sm:px-6 py-4 sm:py-5 lg:py-6">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary-color/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-secondary-color/20 rounded-full blur-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-full bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-0.5 flex">
            <div className="flex-1 bg-primary-color/60" />
            <div className="flex-1 bg-secondary-color/60" />
            <div className="flex-1 bg-primary-color/60" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* ── MOBILE layout ── */}
          <div className="flex flex-col items-center gap-3 lg:hidden relative">
            {/* Logo + name */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-primary-color blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="relative p-1.5 bg-white/15 rounded-full border-2 border-primary-color/60 backdrop-blur-sm">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-11 h-11 rounded-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-xl font-extrabold text-white tracking-wide drop-shadow-lg">
                NAMUNA BIDHYA SADAN SCHOOL
              </h1>
            </Link>

            {/* Contact */}
            <div className="flex items-center gap-5">
              {contactLinks.map(({ href, icon: Icon, mobileLabel }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-1.5 text-white/80 hover:text-primary-color transition-colors text-sm"
                >
                  <Icon size={14} />
                  <span>{mobileLabel}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── DESKTOP layout ── */}
          <div className="hidden lg:flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-primary-color  opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="relative p-1.5 bg-white/15 rounded-full border-2 border-primary-color/60 backdrop-blur-sm">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg leading-tight">
                  NAMUNA VIDHYA SADAN
                </h1>
                <div className="flex gap-0.5 mt-1 mb-1">
                  <div className="h-0.5 w-8 bg-primary-color rounded-full" />
                  <div className="h-0.5 w-8 bg-secondary-color rounded-full" />
                  <div className="h-0.5 w-8 bg-white rounded-full" />
                </div>
                <p className="mb-1 text-primary-color text-xs font-semibold tracking-widest uppercase">
                  Excellence in Education
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {contactLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center gap-2 bg-white/10 hover:bg-primary-color/20 border border-white/20 hover:border-primary-color/60 px-4 py-2 rounded-full group transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="text-primary-color group-hover:scale-110 transition-transform duration-200">
                      <Icon size={15} />
                    </div>
                    <span className="text-white text-sm group-hover:text-primary-color transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
              <div className="w-px h-10 bg-white/20" />
              <ul className="flex items-center gap-2">
                {socialLinks.map(({ href, icon: Icon }, i) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 bg-white/10 backdrop-blur-sm hover:scale-110 ${
                        i === 0
                          ? "border-primary-color/60 text-primary-color hover:bg-primary-color hover:text-third-color"
                          : i === 1
                            ? "border-secondary-color/60 text-secondary-color hover:bg-secondary-color hover:text-white"
                            : "border-white/40 text-white/80 hover:bg-white/20 hover:text-white"
                      }`}
                    >
                      <Icon size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
