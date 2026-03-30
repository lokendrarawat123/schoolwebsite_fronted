import React from "react";
import {
  FaFlask,
  FaDesktop,
  FaBookOpen,
  FaFootballBall,
  FaTheaterMasks,
} from "react-icons/fa";
import assembly from "../../assets/img/assembly.jpg";
import computerlab from "../../assets/img/computerlab.webp";
import ground from "../../assets/img/ground.jpg";
import library from "../../assets/img/library.webp";
import sciencelab from "../../assets/img/sciencelab.png";

const Facilities = () => {
  const facilities = [
    {
      icon: <FaFlask className="text-3xl" />,
      title: "Science Laboratory",
      image: sciencelab,
      description:
        "Well-equipped physics, chemistry, and biology labs for hands-on learning",
    },
    {
      icon: <FaDesktop className="text-3xl" />,
      title: "Computer Lab",
      description: "Modern computers with internet access for digital literacy",
      image: computerlab,
    },
    {
      icon: <FaBookOpen className="text-3xl" />,
      title: "Library",
      description:
        "Extensive collection of books, journals, and digital resources",
      image: library,
    },
    {
      icon: <FaFootballBall className="text-3xl" />,
      title: "Sports Ground",
      description:
        "Large playground for football, volleyball, and other sports activities",
      image: ground,
    },
    {
      icon: <FaTheaterMasks className="text-3xl" />,
      title: "Assembly Hall",
      description: "Spacious hall for cultural programs, meetings, and events",
      image: assembly,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Facilities
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our modern facilities designed to provide the best learning
            environment for our students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-sm transform hover:-translate-x-1 transition-all duration-10 group"
            >
              <div className="h-48 bg-gray-100">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-600">{facility.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {facility.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
