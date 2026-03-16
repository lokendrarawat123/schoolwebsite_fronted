import React from "react";
import { FaAward, FaUsers, FaBook, FaGraduationCap } from "react-icons/fa";
import bgImg from "../assets/img/scphoto.jpg";


const About = () => {
  const features = [
    {
      icon: <FaBook className="text-4xl" />,
      title: "Quality Education",
      description:
        "Comprehensive curriculum designed to develop critical thinking and problem-solving skills.",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Expert Faculty",
      description:
        "Experienced and dedicated teachers committed to student success and growth.",
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "Excellence",
      description:
        "Consistently achieving high academic standards and student achievements.",
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Career Ready",
      description:
        "Preparing students for higher education and successful careers.",
    },
  ];

  const stats = [
    { number: "2062", label: "Established" },
    { number: "500+", label: "Students" },
    { number: "50+", label: "Faculty" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About Namuna Bidhya Sadan
          </h1>
          <p className="text-xl md:text-2xl">
            Nurturing Excellence in Education
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary-color py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-primary-color">
                  {stat.number}
                </div>
                <div className="text-lg mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-secondary-color mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide quality education that develops students'
                intellectual, moral, and social capabilities, preparing them to
                become responsible citizens and leaders in their communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-secondary-color mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution recognized for academic
                excellence, innovation, and holistic development of students in
                Nepal and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-center"
              >
                <div className="text-secondary-color mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              Namuna Bidhya Sadan was established in 2062 B.S. with a vision to
              provide quality education to students in the Kohalpur region. Over
              the years, we have grown into one of the most respected
              educational institutions in the area.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our commitment to academic excellence, combined with a focus on
              character development and holistic growth, has helped us produce
              generations of successful students who have gone on to excel in
              various fields.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we continue to uphold our values of integrity, excellence,
              and service while adapting to modern educational practices and
              technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "Honesty and strong moral principles in all our actions",
              },
              {
                title: "Excellence",
                desc: "Commitment to highest standards in education and service",
              },
              {
                title: "Inclusivity",
                desc: "Creating a welcoming environment for all students",
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-secondary-color rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
