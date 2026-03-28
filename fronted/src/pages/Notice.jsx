import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGetNoticeQuery } from "../redux/features/contentSlice.js";
import HeroContainer from "../components/About/HeroContainer";
import { NoticeSkeleton } from "../components/skeleton/HomeSkeleton";
import bgImg from "../assets/img/student_group.jpg";
import { FaCaretRight } from "react-icons/fa";
const NoticeIndex = () => {
  const { data, isLoading, error } = useGetNoticeQuery();
  const IMG_URL = import.meta.env.VITE_IMG_URL;

  const [selectedNotice, setSelectedNotice] = useState(null);

  const notices = data?.data || [];
  const sortedNotices = [...notices].sort(
    (a, b) => new Date(b.notice_date) - new Date(a.notice_date),
  );

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  if (isLoading) return <NoticeSkeleton />;

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <p className="text-xl text-red-600">Error loading notices</p>
        </div>
      </div>
    );

  return (
    <div className="w-full">
      {/* Hero */}
      <HeroContainer bgImage={bgImg} title="Notices" subtitle="" />

      {/* Notices List */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Notices</h2>

        <div className="flex flex-col divide-y divide-gray-200">
          {sortedNotices.length > 0 ? (
            sortedNotices.map((notice) => (
              <motion.div
                key={notice.id}
                className="sm:flex-row justify-start sm:justify-between items-start sm:items-center py-3 cursor-pointer hover:bg-gray-50 px-3 rounded transition-all"
                onClick={() => setSelectedNotice(notice)}
              >
                {/* Title */}
                <p className="flex items-center  text-black hover:text-blue-600">
                  <FaCaretRight className="text-black w-4 h-4" />
                  <span>{notice.title}</span>
                </p>

                {/* Date */}
                <span className="text-gray-500 text-sm">
                  {formatDate(notice.notice_date)}
                </span>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 py-8">No notices found.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedNotice && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNotice(null)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-2xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-lg"
                onClick={() => setSelectedNotice(null)}
              >
                ✕
              </button>

              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {selectedNotice.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {formatDate(selectedNotice.notice_date)}
              </p>

              {selectedNotice.attachment_url && (
                <div className="mt-4">
                  {selectedNotice.attachment_type === "image" ? (
                    <img
                      src={`${IMG_URL}/${selectedNotice.attachment_url}`}
                      alt={selectedNotice.title}
                      className="w-full rounded-md"
                    />
                  ) : (
                    <iframe
                      src={`${IMG_URL}/${selectedNotice.attachment_url}`}
                      title={selectedNotice.title}
                      className="w-full h-96 rounded-md"
                    />
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NoticeIndex;
