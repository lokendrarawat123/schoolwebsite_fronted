import React from "react";
import { useGetReviewsQuery } from "../../redux/features/SiteSlice";

const ReviewPage = () => {
  const base_url = import.meta.env.VITE_IMG_URL;
  const { data: reviewData, isLoading, error } = useGetReviewsQuery();

  if (isLoading) {
    return (
      <div className="text-center py-10 text-gray-500 animate-pulse">
        Loading reviews...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error fetching reviews!
      </div>
    );
  }

  // Filter reviews with status "pending"
  const pendingReviews = reviewData?.data?.filter(
    (review) => review.status === "approved",
  );

  if (!pendingReviews || pendingReviews.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        No reviews available.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
        What Our Students Say
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pendingReviews.map((review) => (
          <div
            key={review.id}
            className="bg-linear-to-tr from-blue-50 to-purple-50 shadow-lg rounded-3xl p-6 flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-blue-200">
              <img
                src={`${base_url}/${review.image}`}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-900">
              {review.name}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{review.position}</p>
            <p className="text-gray-700 italic">"{review.review_text}"</p>
            <span className="mt-4 inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              Pending
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
