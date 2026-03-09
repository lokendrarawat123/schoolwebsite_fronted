import React from "react";
import bgImg from "../assets/img/scphoto.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>

        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Namuna College
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Quality Education for Your Bright Future
          </p>

          <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded font-semibold">
            Apply Now
          </button>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Programs</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-3">+2 Science</h3>
              <p className="text-gray-600">
                Study Physics, Chemistry, Biology, and Mathematics with modern
                laboratories and experienced faculty.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-3">+2 Management</h3>
              <p className="text-gray-600">
                Learn business, economics, and management with practical
                knowledge and professional teachers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Latest Notices
          </h2>

          <div className="space-y-4">
            <div className="border p-4 rounded flex justify-between">
              <span>Admission Open for 2083</span>
              <span className="text-gray-500">May 20</span>
            </div>

            <div className="border p-4 rounded flex justify-between">
              <span>First Terminal Exam Routine</span>
              <span className="text-gray-500">June 10</span>
            </div>

            <div className="border p-4 rounded flex justify-between">
              <span>Scholarship Entrance Exam Notice</span>
              <span className="text-gray-500">June 25</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              className="rounded"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
              className="rounded"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
              className="rounded"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
