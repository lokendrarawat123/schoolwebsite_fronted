import React from "react";

const MissionVision = () => {
  const values = [
    {
      title: "Mission",
      desc: "To provide quality education, nurture moral values, and foster critical thinking among students in Kohalpur and surrounding regions.",
      icon: "M",
    },
    {
      icon: "V",
      title: "Vision",
      desc: "To become a leading educational institution in the region, shaping future-ready individuals with knowledge, integrity, and responsibility.",
    },
    {
      icon: "C",
      title: "Core Values",
      desc: "Integrity, Excellence, Inclusivity, and Innovation guide all our actions, ensuring holistic development for our students.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mission, Vision & Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
