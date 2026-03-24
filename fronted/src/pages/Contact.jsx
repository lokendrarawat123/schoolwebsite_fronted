import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import HeroContainer from "../components/About/HeroContainer";
import bgImg from "../assets/img/student_group.jpg";
import { Data } from "../../Data.js/alldata.js";
import ContactCard from "../components/contact/ContactCard.jsx";

const Contact = () => {
  const info = Data[0];
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroContainer
        bgImage={bgImg}
        title="Contact Us"
        subtitle="Connect with Excellence in Education"
      />

      <section className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-20">
            <div className="inline-block p-2 bg-blue-100 rounded-full mb-4">
              <FaGraduationCap className="text-blue-600 text-3xl" />
            </div>
            <h1 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Namuna Bidhya Sadan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building tomorrow's leaders through quality education and holistic
              development. We're here to support your educational journey every
              step of the way.
            </p>
          </div>

          {/* Contact Cards with Animation */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Address Cart */}
            <ContactCard
              icon={<FaMapMarkerAlt className="text-white text-2xl" />}
              title="Visit Our Campus"
              gradient="from-blue-500 to-blue-600"
            >
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p className="font-semibold text-lg">
                  Pipari, Kohalpur Municipality
                </p>
                <p>Banke District, Lumbini Province</p>
                <p>Nepal - 21900</p>
              </div>
              <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                <p className="text-blue-700 font-medium text-sm">
                  🚌 Easy access by public transport
                </p>
              </div>
            </ContactCard>

            {/* Phone Card */}
            <ContactCard
              icon={<FaPhoneAlt className="text-white text-2xl" />}
              title="Call Us Today"
              gradient="from-green-500 to-green-600"
            >
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-700 font-bold text-xl">
                    {info.contact.phone}
                  </p>
                  <p className="text-green-600 text-sm">Main Office</p>
                </div>
                <p className="text-gray-600">
                  📞 Available during office hours
                  <br />
                  🕒 Quick response guaranteed
                </p>
              </div>
            </ContactCard>

            {/* Email Card */}
            <ContactCard
              icon={<FaEnvelope className="text-white text-2xl" />}
              title="Email Us"
              gradient="from-purple-500 to-purple-600"
            >
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-purple-700 font-bold text-lg">
                    {info.contact.email}
                  </p>
                  <p className="text-purple-600 text-sm">General Inquiries</p>
                </div>
                <p className="text-gray-600">
                  ✉️ We respond within 24 hours
                  <br />
                  📧 Professional support team
                </p>
              </div>
            </ContactCard>
          </div>

          {/* Map Section with Enhanced Design */}
          <div className="mb-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Find Our Beautiful Campus
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Kohalpur, our campus is easily
                accessible and surrounded by natural beauty.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden border-4 border-white grid lg:grid-cols-3 gap-12 mb-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.8461678610047!2d81.7104415754855!3d28.211985975897036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39986ff879bd2e89%3A0x9cb027fc883c0989!2sNamuna%20Vidhya%20Sadan!5e0!3m2!1sen!2snp!4v1774322539650!5m2!1sen!2snp"
                width="600"
                height="450"
                style={{ border: 0 }} // ✅ style as object
                allowFullScreen // ✅ JSX uses camelCase
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <p className="text-sm font-semibold text-gray-800">
                  📍 Namuna Bidhya Sadan
                </p>
                <p className="text-xs text-gray-600">Kohalpur, Banke</p>
              </div>
              {/* department contact */}
              <div className="bg-linear-to-br ml-2 gap-8 from-white to-purple-50 shadow-xl rounded-2xl p-8 border border-purple-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-linear-to-br from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      Department Contacts
                    </h3>
                    <p className="text-purple-600 font-medium">
                      Direct lines to our team
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <FaGraduationCap className="text-green-600 text-lg" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">
                        Admission Office
                      </p>
                      <p className="text-green-600 font-semibold">
                        +977 9800000001
                      </p>
                      <p className="text-gray-500 text-sm">
                        New student enrollment & guidance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <FaBuilding className="text-blue-600 text-lg" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">
                        Principal's Office
                      </p>
                      <p className="text-blue-600 font-semibold">
                        +977 9800000002
                      </p>
                      <p className="text-gray-500 text-sm">
                        Academic matters & appointments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <FaEnvelope className="text-purple-600 text-lg" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">
                        Accounts Department
                      </p>
                      <p className="text-purple-600 font-semibold">
                        +977 9800000003
                      </p>
                      <p className="text-gray-500 text-sm">
                        Fee payments & financial queries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-linear-to-br from-white to-blue-50 shadow-xl rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      Office Hours
                    </h3>
                    <p className="text-blue-600 font-medium">
                      When we're available to help you
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-semibold text-gray-800">
                        Sunday - Thrusday
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-semibold text-gray-800">
                        Friday
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium">
                      10 AM - 2:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-red-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-semibold text-gray-800">
                        Saturday
                      </span>
                    </div>
                    <span className="text-red-600 font-bold">Closed</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-100 rounded-xl">
                  <p className="text-blue-800 font-medium text-center">
                    🎓 Special hours during admission season
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visit Us CTA Section */}
          <div className="relative bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12 text-white text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 left-20 w-12 h-12 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <FaGraduationCap className="text-white text-3xl" />
              </div>
              <h3 className="text-4xl font-bold mb-6">Experience Our Campus</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover our state-of-the-art facilities, meet our dedicated
                faculty, and see why Namuna Bidhya Sadan is the perfect place
                for your child's educational journey.
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-linear-to-r from-blue-700 via-purple-700 to-pink-600bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-30">
                  <div className="text-3xl mb-3">🏫</div>
                  <p className="font-bold text-lg mb-2">Campus Tours</p>
                  <p className="text-blue-100 text-sm">
                    Sunday - Friday
                    <br />
                    10:00 AM - 4:00 PM
                  </p>
                </div>

                <div className="bg-linear-to-r from-blue-700 via-purple-700 to-pink-600 bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-30">
                  <div className="text-3xl mb-3">👨‍🏫</div>
                  <p className="font-bold text-lg mb-2">Meet Our Faculty</p>
                  <p className="text-blue-100 text-sm">
                    By appointment
                    <br />
                    Experienced educators
                  </p>
                </div>

                <div className="bg-linear-to-r from-blue-700 via-purple-700 to-pink-600bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-30">
                  <div className="text-3xl mb-3">📚</div>
                  <p className="font-bold text-lg mb-2">Admission Counseling</p>
                  <p className="text-blue-100 text-sm">
                    Personalized guidance
                    <br />
                    Free consultation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-20 text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-12">
              Why Families Choose Us
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="group">
                <div className="bg-linear-to-br from-green-400 to-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🏆</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Excellence in Education
                </h4>
                <p className="text-gray-600 text-sm">
                  Proven track record of academic success
                </p>
              </div>

              <div className="group">
                <div className="bg-linear-to-br from-blue-400 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Experienced Faculty
                </h4>
                <p className="text-gray-600 text-sm">
                  Dedicated and qualified teachers
                </p>
              </div>

              <div className="group">
                <div className="bg-linear-to-br from-purple-400 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🌟</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Holistic Development
                </h4>
                <p className="text-gray-600 text-sm">
                  Focus on overall personality growth
                </p>
              </div>

              <div className="group">
                <div className="bg-linear-to-br from-orange-400 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Modern Facilities
                </h4>
                <p className="text-gray-600 text-sm">
                  State-of-the-art infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
