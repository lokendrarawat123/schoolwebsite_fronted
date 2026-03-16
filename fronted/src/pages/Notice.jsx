import { useState, useMemo } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useGetNoticeQuery } from "../redux/features/contentSlice.js";
import { useGetNoticeCategoryQuery } from "../redux/features/categorySlice.js";

const categories = ["Event", "Deadline", "Opportunity", "General"];

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

    if (activeCategory) {
      result = result.filter((n) => n.category_id === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((n) => n.title.toLowerCase().includes(q));
    }

    return result.sort(
      (a, b) => new Date(b.notice_date) - new Date(a.notice_date),
    );
  }, [Notices, search, activeCategory]);

  if (noticeLoading || categoryLoading)
    return (
      <p className="text-center mt-20 text-gray-700 text-lg">
        Loading notices...
      </p>
    );

  if (noticeError || categoryError)
    return (
      <p className="text-center mt-20 text-red-500 text-lg">
        Error loading notices
      </p>
    );

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12">
        {/* Header */}
        <header className="pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-center">
            School Notices
          </h1>
          <p className="text-gray-400 text-center">
            Stay updated with the latest announcements and schedules
          </p>

          {/* Search */}

          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeCategory === null // Strict check for null
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              All
            </button>
            {category.map((cat) => (
              <button
                key={cat.id || cat._id} // Warning hatayeko
                onClick={() =>
                  // Object ko sato ID set garne
                  setActiveCategory(activeCategory === cat.id ? null : cat.id)
                }
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  activeCategory === (cat.id || cat._id) // ID check gareko
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {cat.category_name}
              </button>
            ))}
          </div>
        </header>

        {/* Notices Grid */}
        <LayoutGroup>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                filtered.map((notice) => (
                  <motion.div key={notice.id} layout>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                      {/* Title + Date */}
                      <div className="mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {notice.title}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {new Date(notice.notice_date).toLocaleDateString(
                            "en-NP",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            },
                          )}
                        </p>
                      </div>

                      {/* View Button */}
                      <div className="flex justify-end">
                        <button
                          onClick={() => setSelectedNotice(notice)}
                          className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div className="col-span-full py-20 text-center">
                  <p className="text-lg font-medium text-gray-500">
                    No notices found
                  </p>

                  <button
                    onClick={() => {
                      setActiveCategory(null);
                      setSearch("");
                    }}
                    className="mt-3 text-sm text-blue-600 hover:underline"
                  >
                    Clear filters
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
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative w-full max-w-5xl h-[90vh]">
                {/* Close Button */}
                <button
                  className="absolute top-0 -right-12.5 text-white text-4xl font-bold hover:text-red-500 z-50"
                  onClick={() => setSelectedNotice(null)}
                >
                  &times;
                </button>

                {/* Image or PDF */}
                {selectedNotice.attachment_type === "image" ? (
                  <img
                    src={`${IMG_URL}/${selectedNotice.attachment_url}`}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <iframe
                    src={`${IMG_URL}/${selectedNotice.attachment_url}`}
                    title="notice"
                    className="w-full h-full"
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NoticeIndex;
