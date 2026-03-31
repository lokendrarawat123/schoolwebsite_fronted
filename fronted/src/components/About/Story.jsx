import React from "react";
import home3 from "../../assets/img/home/home3.jpg";
import student1 from "../../assets/img/home/home4.jpg";
import home12 from "../../assets/img/home/home12.jpg";

const storyItems = [
  {
    color: "from-blue-500 to-blue-600",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "🏛️ Foundation & Vision",
    text: "Namuna Vidya Sadan was established in 2063 B.S. in Kohalpur. The main objective of this school is to provide quality education to the children of this region.",
  },
  {
    color: "from-indigo-500 to-indigo-600",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    title: "📈 Growth & Progress",
    text: "Through years of dedicated effort, Namuna Vidya Sadan has become one of the most respected educational institutions in Kohalpur and the surrounding areas.",
  },
  {
    color: "from-purple-500 to-purple-600",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "🎯 Commitment & Future",
    text: "Today, the school remains committed to its founding principles: nurturing knowledge, integrity, and responsibility while preparing students for a bright future.",
  },
];

const images = [
  {
    src: home3,
    alt: "School Building",
    label: "students in lab",
  },
  {
    src: student1,
    alt: "Students in Classroom",
    label: "Learning Environment",
  },
  {
    src: home12,
    alt: "Students Activities",
    label: "dance program",
  },
];

const Story = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 rounded-3xl opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
              Our
              <span className="inline-block px-4 py-1 bg-linear-to-r from-blue-900 to-indigo-600 text-white rounded-full shadow-md text-3xl md:text-3xl align-middle ml-2">
                Story
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col justify-between">
                <div className="space-y-6">
                  {storyItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="shrink-0">
                        <div
                          className={`w-10 h-10 bg-linear-to-r ${item.color} rounded-full flex items-center justify-center`}
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={item.icon}
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-blue-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-600">
                        2063
                      </div>
                      <div className="text-xs text-gray-600">
                        Established Year
                      </div>
                    </div>
                    <div className="text-center bg-indigo-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-indigo-600">
                        1000+
                      </div>
                      <div className="text-xs text-gray-600">
                        Successful Students
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-3">
                      <p className="text-white font-semibold text-sm">
                        {img.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
