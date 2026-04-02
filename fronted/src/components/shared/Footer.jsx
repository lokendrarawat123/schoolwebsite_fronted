import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGraduationCap,
  FaArrowUp,
} from "react-icons/fa";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ScrollToTop from "../shared/ScrollTop";
import logo from "../../assets/img/namunalogo.png";
import Button from "../ButtonComponent.jsx";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Data (Dynamic Structure)
  const footerData = {
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Events", path: "/academics/events" },
      { name: "Gallery", path: "/gallery" },
      { name: "Notices", path: "/notice" },
    ],
    programs: [
      "+2 Science",
      "+2 Management",
      "Entrance Preparation",
      "Scholarship Program",
      "Career Counseling",
    ],
    socialLinks: [
      {
        icon: <FaFacebook />,
        link: "https://www.facebook.com/p/Namuna-Vidhya-Sadan-EM-Secondary-School-100057264595833",
        style: "from-blue-600 to-primary-color",
      },
      {
        icon: <FaTwitter />,
        link: "#",
        style: "from-blue-400 to-blue-600",
      },
      {
        icon: <FaInstagram />,
        link: "#",
        style: "from-pink-500 to-purple-600",
      },
      {
        icon: <FaLinkedin />,
        link: "#",
        style: "from-blue-700 to-blue-900",
      },
    ],
    contact: {
      address: "Pipari, Kohalpur Municipality, Banke District, Nepal",
      phone: "081-414036",
      email: "namuna2063@gmail.com",
    },
  };

  return (
    <footer className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 bg-linear-to-br from-primary-color/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-24 sm:w-40 h-24 sm:h-40 bg-linear-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
        {/* About */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4 xl:space-y-6 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full">
            <div className="p-1 sm:p-1.5 md:p-2 shrink-0">
              <Link to="/" onClick={scrollToTop}>
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20 object-contain rounded-full cursor-pointer"
                />
              </Link>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl font-bold text-white hover:text-primary-color leading-tight transition-colors">
              NVS E.M. SCHOOL
            </h3>
          </div>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Established in 2062 B.S., we provide quality education with modern
            teaching methods and holistic student development.
          </p>

          {/* Social Links */}
          <div className="flex gap-2 sm:gap-3">
            {footerData.socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`group p-2 sm:p-3 bg-white/10 rounded-full hover:bg-linear-to-r hover:${item.style} transition-all duration-300 transform hover:scale-110 touch-friendly`}
              >
                <span className="text-sm sm:text-lg">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="">
          <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 hover:text-primary-color transition-colors cursor-default">
            Quick Links
          </h4>
          <ul className="space-y-2 sm:space-y-4">
            {footerData.quickLinks.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={scrollToTop}
                  to={item.path}
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-color text-sm sm:text-base transition-colors touch-friendly"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div className="">
          <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 hover:text-primary-color transition-colors cursor-default">
            Programs
          </h4>
          <ul className="space-y-2 sm:space-y-4">
            {footerData.programs.map((program, index) => (
              <li key={index}>
                <span className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-primary-color text-sm sm:text-base transition-colors">
                  {program}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 hover:text-primary-color transition-colors cursor-default">
            Contact
          </h4>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex gap-3 items-start">
              <FaMapMarkerAlt className="mt-1 shrink-0" />
              <p className="text-gray-300 text-xs sm:text-sm">
                {footerData.contact.address}
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <BsTelephoneOutboundFill className="shrink-0" />
              <a
                href="tel:081414036"
                className="text-gray-300 text-xs sm:text-sm hover:text-primary-color transition-colors touch-friendly"
              >
                {footerData.contact.phone}
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <FaEnvelope className="shrink-0" />
              <a
                href={`mailto:${footerData.contact.email}`}
                className="text-gray-300 text-xs sm:text-sm hover:text-primary-color transition-colors break-all touch-friendly"
              >
                {footerData.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 mx-4 sm:mx-6 lg:mx-10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 sm:gap-0">
        {/* Left */}
        <div className="text-gray-400 text-xs sm:text-sm">
          © {currentYear} Namuna Bidhya Sadan. All rights reserved.
        </div>

        {/* Right */}
        <div className="mr-10 text-gray-400 text-xs sm:text-sm">
          Powered by{" "}
          <a href="https://nextinfosys.com.np/">
            <span className="font-semibold text-yellow-500 cursor-pointer">
              Next Infosys Pvt. Ltd
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Button */}
      {showScroll && (
        <Button
          onClick={scrollToTop}
          className="hover:bg-yellow-300 sm:w-10 sm:h-10 w-12 h-12 fixed bottom-4 sm:bottom-5 lg:right-10 sm:right-5 p-4 sm:p-3 bg-blue-500  rounded-full! shadow-lg z-50"
          aria-label="Scroll to top"
          icon={<FaArrowUp className="text-sm sm:text-base " />}
        />
      )}
    </footer>
  );
};

export default Footer;
