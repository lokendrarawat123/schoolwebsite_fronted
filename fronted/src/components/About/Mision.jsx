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
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-third-color">
          Mission, Vision & Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full text-white flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl font-bold"
                style={{ backgroundColor: idx === 0 ? '#223fa2' : idx === 1 ? '#3db54b' : '#fdf100', color: idx === 2 ? '#223fa2' : 'white' }}
              >
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
