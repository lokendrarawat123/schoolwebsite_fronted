import React from "react";
import { useGetDistrictQuery } from "../redux/features/gallerySlice.js";
import GalleryCard from "../components/GalleryCard.jsx";

const Gallery = () => {
  const { data, isLoading, error } = useGetDistrictQuery();
  const IMG_URL = import.meta.env.VITE_IMG_URL;

  if (isLoading) return <p className="text-center mt-20">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-20 text-red-500">Error loading gallery</p>
    );

  const galleries = data?.data || [];

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Gallery</h1>
        <p className="text-gray-500 mt-2">
          Some beautiful moments from our collection
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleries.map((gallery) => (
          <GalleryCard key={gallery.id} gallery={gallery} baseUrl={IMG_URL} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
