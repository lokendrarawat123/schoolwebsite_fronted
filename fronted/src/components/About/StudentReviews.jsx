import React from "react";
import { useGetReviewsQuery } from "../../redux/features/SiteSlice";
import { FaStar, FaQuoteLeft, FaUser } from "react-icons/fa";
import ErrorMessage from "../shared/ErrorMessage";

const StudentReviews = () => {
  const base_url = import.meta.env.VITE_IMG_URL;
  const { data: reviewData, isLoading, error } = useGetReviewsQuery();

  if (isLoading) {
    return (
      <section className="py-16 bg-linear-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-linear-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaQuoteLeft className="text-red-500 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Unable to Load Reviews
            </h3>
            <p className="text-gray-600">
              Please try again later or contact support if the problem persists.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const allReviews = reviewData?.data || [];
  const openReviews = allReviews.filter(
    (review) => review.status?.toLowerCase() === "open",
  );
  const approvedReviews = allReviews.filter(
    (review) => review.status?.toLowerCase() === "approved",
  );
  const pendingReviews = allReviews.filter(
    (review) => review.status?.toLowerCase() === "pending",
  );

  // Priority: approved first, then open, then pending, max 6 reviews
  let displayReviews = [];
  if (approvedReviews.length > 0) {
    displayReviews = approvedReviews;
  } else if (openReviews.length > 0) {
    displayReviews = openReviews;
  } else {
    displayReviews = pendingReviews;
  }

  displayReviews = displayReviews.slice(0, 6);

  if (displayReviews.length === 0) {
    return (
      <section className="py-16 bg-linear-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaQuoteLeft className="text-blue-400 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No Reviews Yet
            </h3>
            <p className="text-gray-500">
              Be the first to share your experience with us!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-linear-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <FaQuoteLeft className="text-white text-xl" />
            </div>
            <h2 className="text-4xl font-bold bg-linear-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              What Public Say About Us
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear genuine feedback from our community about their experiences
            with our school
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayReviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-gray-100 hover:border-blue-200"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-200 group-hover:text-blue-400 transition-colors duration-300">
                <FaQuoteLeft className="text-2xl" />
              </div>

              {/* Student Photo */}
              <div className="flex flex-col items-center mb-6 relative z-10">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-3 border-blue-200 shadow-md group-hover:border-blue-500 group-hover:shadow-sm transition-all duration-100 relative">
                  {review.image ? (
                    <img
                      src={`${base_url}/${review.image}`}
                      alt={review.name}
                      className="w-full h-full object-cover transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className={`w-full h-full bg-linear-to-br from-blue-100 to-purple-100 ${review.image ? "hidden" : "flex"} items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300`}
                  >
                    <FaUser className="text-blue-600 text-2xl group-hover:text-blue-700 transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium group-hover:text-gray-600 transition-colors duration-300">
                  {review.position || "Community Member"}
                </p>
              </div>

              {/* Review Content */}
              <div className="text-center relative z-10">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm line-clamp-3 group-hover:text-gray-800 transition-colors duration-300">
                  "{review.review_text}"
                </p>
                {/* Status Badge */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;
