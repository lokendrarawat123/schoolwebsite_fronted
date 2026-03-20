import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import HeroContainer from "../components/About/HeroContainer";
import bgImg from "../assets/img/student_group.jpg";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroContainer
        bgImage={bgImg}
        title="contact"
        subtitle=""
      ></HeroContainer>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800">
              Contact Namuna Bidhya Sadan
            </h1>
            <p className="text-gray-500 mt-4">
              We would love to hear from you. Reach out for admission, school
              information, or any inquiries.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
              <FaMapMarkerAlt className="text-blue-600 text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-500">
                Pipari, Kohalpur Municipality Banke District, Nepal
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
              <FaPhoneAlt className="text-blue-600 text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-500">+977 9800000000</p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
              <FaEnvelope className="text-blue-600 text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-500">info@namunaschool.com</p>
            </div>
          </div>

          {/* Contact Form + Map */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white shadow-lg rounded-xl p-10">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="school-map"
                src="https://maps.google.com/maps?q=kohalpur%20banke&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-100"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
