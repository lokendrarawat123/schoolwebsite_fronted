import React from "react";
import { Link } from "react-router-dom";
import { useGetEventQuery } from "../../redux/features/academicSlice";
import Button from "../ButtonComponent.jsx";
import { LatestEventsSkeleton } from "../skeleton/HomeSkeleton";
import ErrorMessage from "../shared/ErrorMessage";

const LatestEvents = () => {
  const {
    data: eventData,
    isLoading: eventLoading,
    error: eventError,
  } = useGetEventQuery();
  const events = eventData?.data || [];
  const imgurl = import.meta.env.VITE_IMG_URL;

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 xl:mb-16 2xl:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-7xl font-bold text-blue-900 mb-2 sm:mb-4">
            LATEST EVENTS
          </h2>
          <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 h-1 bg-linear-to-r from-blue-500 to-green-500 mx-auto"></div>
        </div>

        {/* Events Grid */}
        {eventLoading ? (
          <LatestEventsSkeleton />
        ) : eventError ? (
          <ErrorMessage message="Failed to load events." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Event Image */}
                <div className="relative overflow-hidden h-40 sm:h-44 md:h-48">
                  <img
                    src={`${imgurl}/${event.pdf_url}`}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&auto=format&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Event Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {new Date(event.event_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Events Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 xl:mt-16 2xl:mt-20">
          <Button
            to="/academics/events"
            size="md"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 font-medium shadow-lg hover:shadow-md text-sm sm:text-base"
            icon={
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
            iconPosition="right"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestEvents;
