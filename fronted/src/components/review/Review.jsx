import React from "react";
import { useGetReviewsQuery } from "../../redux/features/SiteSlice";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const ReviewPage = () => {
  const base_url = import.meta.env.VITE_IMG_URL;
  const { data: reviewData, isLoading, error } = useGetReviewsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });

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

  // Filter reviews with status "approved"
  const approvedReviews = reviewData?.data?.filter(
    (review) => review.status === "approved",
  );

  if (!approvedReviews || approvedReviews.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        No reviews available.
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-blue-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our students about their experiences and achievements at
            Namuna Bidhya Sadan
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approvedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-100">
                <FaQuoteLeft className="text-3xl" />
              </div>

              {/* Student Photo */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-blue-200 shadow-lg">
                  <img
                    src={`${base_url}/${review.image}`}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {review.position}
                </p>
              </div>

              {/* Review Text */}
              <div className="text-center">
                <p className="text-gray-700 italic leading-relaxed mb-4">
                  "{review.review_text}"
                </p>

                {/* Star Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

               
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
      </div>
    </div>
  );
};

export default ReviewPage;
