import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroContainer from "../components/About/HeroContainer";
import { TeamSkeleton } from "../components/skeleton/HomeSkeleton";
import bgImg from "../assets/img/group.jpg";
import { useGetTeamQuery } from "../redux/features/TeamSlice";
import { useGetTeamCategoryQuery } from "../redux/features/categorySlice";

const Team = () => {
  const {
    data: teamData,
    isLoading: teamLoading,
    error: teamError,
  } = useGetTeamQuery();

  const { data: categoryData, isLoading: categoryLoading } =
    useGetTeamCategoryQuery();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  const IMG_URL = import.meta.env.VITE_IMG_URL;
  const team = teamData?.data || [];
  const categories = categoryData?.data || [];

  // Set default category to first category when categories are loaded
  React.useEffect(() => {
    if (categories.length > 0 && selectedCategory === null) {
      const firstCategory = categories[0];
      const categoryId =
        firstCategory.id || firstCategory._id || firstCategory.category_id;
      setSelectedCategory(categoryId);
    }
  }, [categories, selectedCategory]);

  // Filter team members based on selected category
  const filteredTeam = useMemo(() => {
    let result = [...team];

    if (selectedCategory !== null) {
      result = result.filter((member) => {
        return (
          member.category_id === selectedCategory ||
          member.category === selectedCategory
        );
      });
    }

    return result;
  }, [team, selectedCategory]);

  if (teamLoading || categoryLoading) {
    return <TeamSkeleton />;
  }

  if (teamError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-pink-100">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <p className="text-xl text-red-600">Error loading team members</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
       <HeroContainer
        bgImage={bgImg}
        title="Our team"
        subtitle=""
      ></HeroContainer>
        {selectedCategory !== null
          ? categories.find((cat) => {
              const categoryId = cat.id || cat._id || cat.category_id;
              return categoryId === selectedCategory;
            })?.category_name ||
            categories.find((cat) => {
              const categoryId = cat.id || cat._id || cat.category_id;
              return categoryId === selectedCategory;
            })?.name ||
            "Our Team"
          : "Our Team"}

        <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Meet Our Team
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Dedicated professionals committed to excellence in education
              </motion.p>
            </div>

            {/* Category Filter */}
            {categories.length > 0 && (
              <div className="mb-8 sm:mb-12">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
                  {categories.map((category) => {
                    const categoryId =
                      category.id || category._id || category.category_id;
                    const categoryName =
                      category.category_name || category.name;

                    return (
                      <button
                        key={categoryId || `category-${category.id}`}
                        onClick={() => {
                          setSelectedCategory(
                            selectedCategory === categoryId ? null : categoryId,
                          );
                        }}
                        className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                          selectedCategory === categoryId
                            ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                            : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300"
                        }`}
                      >
                        {categoryName}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-gray-600">
                {selectedCategory !== null && (
                  <span>
                    <span className="font-semibold text-indigo-600">
                      {categories.find((cat) => {
                        const categoryId = cat.id || cat._id || cat.category_id;
                        return categoryId === selectedCategory;
                      })?.category_name ||
                        categories.find((cat) => {
                          const categoryId =
                            cat.id || cat._id || cat.category_id;
                          return categoryId === selectedCategory;
                        })?.name}
                    </span>
                  </span>
                )}
              </p>
            </div>

            {/* Team Grid */}
            {selectedCategory !== null && filteredTeam.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {filteredTeam.map((member, index) => {
                  // Find category name for this member
                  const categoryName =
                    categories.find((cat) => {
                      const categoryId = cat.id || cat._id || cat.category_id;
                      return categoryId === member.category_id;
                    })?.category_name ||
                    categories.find((cat) => {
                      const categoryId = cat.id || cat._id || cat.category_id;
                      return categoryId === member.category_id;
                    })?.name ||
                    member.category;

                  return (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        {/* Member Photo */}
                        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                          <img
                            src={
                              member.image
                                ? `${IMG_URL}/${member.image}`
                                : "/api/placeholder/300/300"
                            }
                            alt={member.name || member.full_name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Member Info */}
                        <div className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                            {member.name || member.full_name}
                          </h3>
                          <p className="text-indigo-600 font-medium mb-2 text-sm sm:text-base">
                            {member.position || member.designation}
                          </p>
                          {categoryName && (
                            <span className="inline-block bg-indigo-100 text-indigo-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3">
                              {categoryName}
                            </span>
                          )}
                          {member.description && (
                            <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">
                              {member.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : selectedCategory === null ? (
              <div className="text-center py-12 sm:py-20 px-4">
                <div className="text-4xl sm:text-6xl mb-4">👥</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">
                  Select a Category
                </h3>
                <p className="text-sm sm:text-base text-gray-500">
                  Choose a category above to view team members
                </p>
              </div>
            ) : (
              <div className="text-center py-12 sm:py-20 px-4">
                <div className="text-4xl sm:text-6xl mb-4">👥</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">
                  No team members found
                </h3>
                <p className="text-sm sm:text-base text-gray-500">
                  No members available in this category
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
