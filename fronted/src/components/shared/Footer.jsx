import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-third-color text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-color">
              Namuna Bidhya Sadan
            </h3>
            <p className="text-gray-200 leading-relaxed mb-4">
              Established in 2062 B.S., we are committed to providing quality
              education and holistic development of students.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-primary-color transition text-xl"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:text-primary-color transition text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-primary-color transition text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-primary-color transition text-xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-color">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary-color transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-color transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="hover:text-primary-color transition"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-primary-color transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/notice"
                  className="hover:text-primary-color transition"
                >
                  Notices
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-color">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary-color transition">
                  +2 Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-color transition">
                  +2 Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-color transition">
                  Entrance Preparation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-color transition">
                  Scholarship Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-color transition">
                  Career Counseling
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-color">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-color mt-1 shrink-0" />
                <p className="text-gray-200">
                  Pipari, Kohalpur Municipality
                  <br />
                  Banke District, Nepal
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary-color shrink-0" />
                <a
                  href="tel:+977-9841234567"
                  className="hover:text-primary-color transition"
                >
                  +977 9841234567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary-color shrink-0" />
                <a
                  href="mailto:namuna@gmail.com"
                  className="hover:text-primary-color transition"
                >
                  namuna@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-gray-200 text-center md:text-left">
            <p>
              &copy; {currentYear} Namuna Bidhya Sadan. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center md:justify-end gap-6 text-gray-200">
            <a href="#" className="hover:text-primary-color transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-color transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-primary-color transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
