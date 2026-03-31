import React from "react";
import { useGetAchivementQuery } from "../redux/features/academicSlice";
import HeroContainer from "../components/About/HeroContainer";
import bgImg from "../assets/img/scphoto.jpg";

const Achievement = () => {
  const baseURL = import.meta.env.VITE_IMG_URL;
  const { data: achievement, isLoading, error } = useGetAchivementQuery();

  const achievementData = achievement?.data || [];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <HeroContainer
        title="Our Achievements"
        subtitle="Celebrating success and milestones"
        bgImage={bgImg}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8 md:py-10">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Achievements</h2>
          <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
            Highlights of our accomplishments
          </p>
        </div>

        {/* Loading */}
        {isLoading && <p className="text-center text-gray-500 text-sm sm:text-base">Loading...</p>}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 text-sm sm:text-base">
            Failed to load achievements
          </p>
        )}

        {/* Empty */}
        {!isLoading && achievementData.length === 0 && (
          <p className="text-center text-gray-400 text-sm sm:text-base">No achievements found</p>
        )}

        {/* Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {achievementData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 p-3 sm:p-4"
            >
              {/* Image */}
              <div className="h-40 sm:h-48 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={`${baseURL}/${item.image_urls}`}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="mt-3 sm:mt-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                  🏆 {new Date(item.achievement_date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
