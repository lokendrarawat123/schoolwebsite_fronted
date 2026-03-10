import React from "react";
import notice from "../../Data.js/Notice"; // your JSON data

const Notice = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Latest Notices
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notice.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <p className="text-gray-700 mb-4">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
