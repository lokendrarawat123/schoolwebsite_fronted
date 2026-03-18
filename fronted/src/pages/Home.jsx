import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSlider from "../components/shared/heroSlider.jsx";
import AboutComponents from "../components/shared/AboutComponents.jsx";

const stats = [
  { number: "2000+", label: "Students" },
  { number: "50+", label: "Teachers" },
  { number: "20+", label: "Years" },
  { number: "100%", label: "Success Rate" },
];

const Home = () => {
  return (
    <main className="font-sans">
      {/* Hero Slider */}
      <HeroSlider />
      {/* About Preview */}
      <AboutComponents />
      {/* Stats */}
      <section className="bg-secondary-color py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="p-4">
              <h2 className="text-4xl font-bold text-primary-color">
                {stat.number}
              </h2>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Quality Education", "Expert Teachers", "Modern Labs"].map(
              (item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-xl shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{item}</h3>
                  <p className="text-gray-600">
                    We ensure top learning environment for students.
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Notices */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Latest Notices</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 border rounded-lg shadow"
            >
              <h3 className="font-semibold">Notice Title</h3>
              <p className="text-sm text-gray-500">March 2026</p>
            </motion.div>
          ))}
        </div>

        <Link
          to="/notice"
          className="inline-block mt-6 px-6 py-3 bg-secondary-color text-white rounded-lg"
        >
          View All
        </Link>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary-color text-white text-center">
        <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }}>
          <h2 className="text-3xl font-bold mb-4">Admission Open 2026</h2>
          <p className="mb-6">
            Join us and build your future with quality education.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-secondary-color rounded-lg"
          >
            Apply Now
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
