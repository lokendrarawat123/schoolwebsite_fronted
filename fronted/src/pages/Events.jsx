import React from "react";
import { useGetEventQuery } from "../redux/features/academicSlice";
import HeroContainer from "../components/About/HeroContainer";
import { EventCard } from "../components/Event/EventCard";
import bgImg from "../assets/img/scphoto.jpg";

const Events = () => {
  const { data: events, isLoading, error } = useGetEventQuery();

  const eventData = events?.data || [];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HeroContainer
        title="Our Events"
        subtitle="Explore our school activities and programs"
        bgImage={bgImg}
      />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8 md:py-10">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Latest Events</h2>
          <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
            Stay updated with our recent programs and activities
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="text-center text-gray-500 text-sm sm:text-base">Loading events...</div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center text-red-500 text-sm sm:text-base">Failed to load events</div>
        )}

        {/* Empty State */}
        {!isLoading && eventData.length === 0 && (
          <div className="text-center text-gray-400 text-sm sm:text-base">No events available</div>
        )}

        {/* Events Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {eventData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
