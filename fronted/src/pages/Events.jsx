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
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Latest Events</h2>
          <p className="text-gray-500 mt-2">
            Stay updated with our recent programs and activities
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="text-center text-gray-500">Loading events...</div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center text-red-500">Failed to load events</div>
        )}

        {/* Empty State */}
        {!isLoading && eventData.length === 0 && (
          <div className="text-center text-gray-400">No events available</div>
        )}

        {/* Events Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {eventData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
