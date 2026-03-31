import React, { useState } from "react";

const GalleryCard = ({ gallery, baseUrl, onImageClick }) => {
  const images = gallery.image_url.split(",");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const multipleImages = images.length > 1;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-200">
      {/* Image Container */}
      <div
        className="relative w-full h-64 overflow-hidden cursor-pointer"
        onClick={() => onImageClick(currentIndex)}
      >
        <img
          src={`${baseUrl}/${images[currentIndex]}`}
          alt={gallery.caption}
          className="w-full h-full object-cover transition-transform duration-200"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Navigation arrows for multiple images */}
        {multipleImages && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl text-gray-700 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl text-gray-700 transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Image counter */}
        {multipleImages && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
            {currentIndex + 1}/{images.length}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
          {gallery.caption}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{new Date(gallery.created_at).toLocaleDateString()}</span>
          {gallery.category && (
            <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs font-medium">
              {gallery.category}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
