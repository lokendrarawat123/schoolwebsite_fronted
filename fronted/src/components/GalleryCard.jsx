import React, { useState } from "react";


const GalleryCard = ({ gallery, baseUrl }) => {
  const images = gallery.image_url.split(",");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const multipleImages = images.length > 1; // check if more than 1 image

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden relative group hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={`${baseUrl}/${images[currentIndex]}`}
          alt={gallery.caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Only show arrows if multiple images */}
        {multipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md hover:shadow-lg text-gray-700 transition-all duration-300"
            >
              &#10094;
            </button>

            <button
              onClick={nextImage}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md hover:shadow-lg text-gray-700 transition-all duration-300"
            >
              &#10095;
            </button>
          </>
        )}
      </div>

      {/* Caption & Date */}
      <div className="p-4">
        <p className="text-gray-800 font-medium text-sm">{gallery.caption}</p>
        <p className="text-gray-400 text-xs mt-1">
          {new Date(gallery.created_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;
