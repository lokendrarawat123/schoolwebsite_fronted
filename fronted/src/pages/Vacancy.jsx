import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetVacancyQuery } from "../redux/features/contentSlice";
import { useGetVacancyCategoryQuery } from "../redux/features/categorySlice";

const Vacancy = () => {
  // Queries fix: Added () to call the hooks
  const { data: vacancyResponse, isLoading: vacancyLoading } =
    useGetVacancyQuery();
  const { data: categoryResponse, isLoading: catLoading } =
    useGetVacancyCategoryQuery();

  const [selectedCat, setSelectedCat] = useState(null);
  const [search, setSearch] = useState("");

  const vacancyData = vacancyResponse?.data || [];
  const catData = categoryResponse?.data || [];

  // Filter Logic
  const filteredJobs = useMemo(() => {
    return vacancyData.filter((job) => {
      const matchCat = selectedCat ? job.category_id === selectedCat : true;
      const matchSearch = job.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [vacancyData, selectedCat, search]);

  if (vacancyLoading || catLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Find Your Dream Job
          </motion.h1>
          <p className="mt-4 text-blue-100 text-lg">
            Explore the latest career opportunities in our team.
          </p>

          {/* Search Bar */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSelectedCat(null)}
                className={`text-left px-4 py-2 rounded-lg transition ${
                  selectedCat === null
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                All Jobs
              </button>
              {catData.map((cat) => (
                <button
                  key={cat.id || cat._id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`text-left px-4 py-2 rounded-lg transition ${
                    selectedCat === cat.id
                      ? "bg-blue-100 text-blue-700 font-bold"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.category_name}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Job Listings Grid */}
        <main className="grow">
          <div className="grid gap-6">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.id || job._id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                          {job.job_type || "Full Time"}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition">
                          {job.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500 font-medium">
                          <span className="flex items-center gap-1">
                            📍 {job.location || "Nepal"}
                          </span>
                          <span className="flex items-center gap-1">
                            💰 {job.salary || "Negotiable"}
                          </span>
                          <span className="flex items-center gap-1">
                            📅 Deadline: {job.deadline || "ASAP"}
                          </span>
                        </div>
                      </div>
                      <button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                  <p className="text-gray-500 text-lg">
                    No vacancies found matching your criteria.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Vacancy;
