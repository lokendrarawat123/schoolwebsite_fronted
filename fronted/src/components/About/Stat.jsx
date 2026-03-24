import React from "react";
import { motion } from "framer-motion";

const Stat = () => {
  const stats = [
    { number: "2000+", label: "Students" },
    { number: "50+", label: "Teachers" },
    { number: "20+", label: "Years" },
    { number: "100%", label: "Success Rate" },
  ];

  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center justify-center w-36 h-36 sm:w-40 sm:h-40 mx-auto bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                {stat.number}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stat;
