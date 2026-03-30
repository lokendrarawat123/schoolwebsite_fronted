import React from "react";

const Story = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
            Our
            <span className="inline-block px-4 py-1 bg-linear-to-r from-blue-900 to-indigo-600 text-white rounded-full shadow-md text-3xl md:text-3xl align-middle">
              Story
            </span>
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Namuna Bidhya Sadan was established in 2063 B.S. in Kohalpur with
              a vision to provide quality education to the children of the
              region. The school was founded with the goal of nurturing academic
              excellence alongside moral and character development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Over the years, Namuna Bidhya Sadan has grown into one of the most
              respected educational institutions in Kohalpur and surrounding
              areas. With dedicated teachers, innovative programs, and a focus
              on holistic growth, the school continues to shape generations of
              successful students.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, the school remains committed to its founding principles:
              fostering knowledge, integrity, and responsibility, while
              embracing modern teaching techniques and technologies to prepare
              students for a bright future.
            </p>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default Story;
