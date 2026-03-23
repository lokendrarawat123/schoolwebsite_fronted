import { useState, useMemo } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useGetNoticeQuery } from "../redux/features/contentSlice.js";
import { useGetNoticeCategoryQuery } from "../redux/features/categorySlice.js";
import HeroContainer from "../components/About/HeroContainer";
import { NoticeSkeleton } from "../components/skeleton/HomeSkeleton";
import bgImg from "../assets/img/student_group.jpg";

const NoticeIndex = () => {
  const {
    data,
    isLoading: noticeLoading,
    error: noticeError,
  } = useGetNoticeQuery();

  const {
    data: noticeCategory,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetNoticeCategoryQuery();
  const IMG_URL = import.meta.env.VITE_IMG_URL;

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const Notices = data?.data || [];
  const category = noticeCategory?.data || [];

  const filtered = useMemo(() => {
    let result = [...Notices];

    if (activeCategory !== null) {
      console.log("Filtering by category_id:", activeCategory);
      result = result.filter((n) => {
        console.log(`Notice ${n.title} has category_id: ${n.category_id}`);
        return n.category_id === activeCategory;
      });
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((n) => n.title.toLowerCase().includes(q));
    }

    return result.sort(
      (a, b) => new Date(b.notice_date) - new Date(a.notice_date),
    );
  }, [Notices, search, activeCategory, category]);

  if (noticeLoading || categoryLoading)
    return <NoticeSkeleton />;

  if (noticeError || categoryError)
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-pink-100">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <p className="text-xl text-red-600">Error loading notices</p>
        </div>
      </div>
    );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroContainer
        bgImage={bgImg}
        title="notices"
        subtitle=""
      ></HeroContainer>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filter Controls */}
        <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeCategory === null
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300"
              }`}
            >
              All Categories
            </button>
            {category.map((cat, index) => {
              // Try different possible ID fields
              const categoryId = cat.id || cat._id || cat.category_id;

              return (
                <button
                  key={categoryId || `category-${index}`}
                  onClick={() => {
                    console.log(
                      "Clicked category:",
                      cat.category_name,
                      "ID:",
                      categoryId,
                    );
                    setActiveCategory(
                      activeCategory === categoryId ? null : categoryId,
                    );
                  }}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeCategory === categoryId
                      ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300"
                  }`}
                >
                  {cat.category_name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-gray-600">
            Showing{" "}
            <span className="font-semibold text-indigo-600">
              {filtered.length}
            </span>
            {filtered.length === 1 ? " notice" : " notices"}
            {activeCategory && (
              <span>
                <span className="font-semibold text-indigo-600">
                  {
                    category.find((cat) => {
                      const categoryId = cat.id || cat._id || cat.category_id;
                      return categoryId === activeCategory;
                    })?.category_name
                  }
                </span>
              </span>
            )}
          </p>
        </div>

        {/* Notices Grid */}
        <LayoutGroup>
          <motion.div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                filtered.map((notice, index) => {
                  const isNew =
                    new Date(notice.notice_date) >
                    new Date(new Date().setDate(new Date().getDate() - 7)); // notices within last 7 days

                  return (
                    <motion.div
                      key={notice.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="relative bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-500 transform h-72 sm:h-80 flex flex-col">
                        {/* New badge */}
                        {isNew && (
                          <span className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-linear-to-r from-green-400 to-green-200 text-black text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg animate-pulse">
                            New
                          </span>
                        )}

                        {/* Notice title */}
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2 shrink-0">
                          {notice.title}
                        </h3>

                        {/* Notice date */}
                        <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 shrink-0">
                          {new Date(notice.notice_date).toLocaleDateString(
                            "en-NP",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </p>

                        {/* Category badge */}
                        {notice.category_id && (
                          <div className="mb-3 sm:mb-4 shrink-0">
                            <span className="bg-indigo-100 text-indigo-600 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                              {category.find((cat) => {
                                const categoryId =
                                  cat.id || cat._id || cat.category_id;
                                return categoryId === notice.category_id;
                              })?.category_name || "General"}
                            </span>
                          </div>
                        )}

                        {/* Spacer to push button to bottom */}
                        <div className="grow"></div>

                        {/* View Button */}
                        <div className="flex justify-end shrink-0">
                          <button
                            onClick={() => setSelectedNotice(notice)}
                            className="px-4 sm:px-6 py-2 bg-linear-to-r from-blue-600 to-blue-400 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-500 transition-colors duration-300 text-sm sm:text-base"
                          >
                            View Notice
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div className="col-span-full py-12 sm:py-20 text-center px-4">
                  <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">
                    No notices found
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6 max-w-md mx-auto">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory(null);
                    }}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Modal */}
        <AnimatePresence>
          {selectedNotice && (
            <motion.div
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-2 sm:p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNotice(null)}
            >
              {selectedNotice.attachment_type === "image" ? (
                /* Image Modal */
                <div className="relative max-w-[95vw] max-h-[95vh]">
                  {/* Close Button */}
                  <button
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-200 z-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedNotice(null);
                    }}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Image */}
                  <img
                    src={`${IMG_URL}/${selectedNotice.attachment_url}`}
                    alt={selectedNotice.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              ) : (
                /* PDF Modal */
                <div className="relative w-full max-w-6xl h-[85vh] sm:h-[90vh] bg-white rounded-lg">
                  {/* Close Button */}
                  <button
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-200 z-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedNotice(null);
                    }}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* PDF */}
                  <iframe
                    src={`${IMG_URL}/${selectedNotice.attachment_url}`}
                    title={selectedNotice.title}
                    className="w-full h-full border-0 rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NoticeIndex;
