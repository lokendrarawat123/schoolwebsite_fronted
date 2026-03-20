import React, { useState, useMemo } from "react";
import GalleryCard from "../components/GalleryCard.jsx";
import { useGetGalleryQuery } from "../redux/features/contentSlice.js";
import { useGetGalleryCategoryQuery } from "../redux/features/categorySlice.js";
import HeroContainer from "../components/About/HeroContainer";
import bgImg from "../assets/img/student_group.jpg";

const Gallery = () => {
  const {
    data: galleryData,
    isLoading: galleryLoading,
    error: galleryError,
  } = useGetGalleryQuery();
  const { data: categoryData, isLoading: categoryLoading } =
    useGetGalleryCategoryQuery();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentGalleryPhotos, setCurrentGalleryPhotos] = useState([]);

  const IMG_URL = import.meta.env.VITE_IMG_URL;

  // Use API categories
  const categories = categoryData?.data || [];

  // Filter galleries based on selected category
  const filteredGalleries = useMemo(() => {
    const galleries = galleryData?.data || [];

    let result = [...galleries];

    if (selectedCategory !== null) {
      result = result.filter((gallery) => {
        // Match by category ID if available, otherwise by category name
        return (
          gallery.category_id === selectedCategory ||
          gallery.category === selectedCategory
        );
      });
    }

    return result;
  }, [galleryData, selectedCategory]);

  const openPhotoViewer = (gallery, imageIndex = 0) => {
    const images = gallery.image_url
      .split(",")
      .map((img) => `${IMG_URL}/${img.trim()}`);
    setCurrentGalleryPhotos(images);
    setCurrentPhotoIndex(imageIndex);
    setIsModalOpen(true);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % currentGalleryPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex(
      (prev) =>
        (prev - 1 + currentGalleryPhotos.length) % currentGalleryPhotos.length,
    );
  };

  if (galleryLoading || categoryLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (galleryError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-pink-100">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <p className="text-xl text-red-600">Error loading gallery</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <HeroContainer
        bgImage={bgImg}
        title="gallery"
        subtitle=""
      ></HeroContainer>

      <section className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Filter Controls */}
          <div className="mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === null
                    ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300"
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => {
                // Try different possible ID fields like Notice page
                const categoryId =
                  category.id || category._id || category.category_id;
                const categoryName = category.category_name || category.name;

                return (
                  <button
                    key={categoryId || `category-${category.id}`}
                    onClick={() => {
                      setSelectedCategory(
                        selectedCategory === categoryId ? null : categoryId,
                      );
                    }}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === categoryId
                        ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300"
                    }`}
                  >
                    {categoryName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-indigo-600">
                {filteredGalleries.length}
              </span>
              {filteredGalleries.length === 1 ? " item" : " items"}
              {selectedCategory !== null && (
                <span>
                  {" "}
                  in{" "}
                  <span className="font-semibold text-indigo-600">
                    {categories.find((cat) => {
                      const categoryId = cat.id || cat._id || cat.category_id;
                      return categoryId === selectedCategory;
                    })?.category_name ||
                      categories.find((cat) => {
                        const categoryId = cat.id || cat._id || cat.category_id;
                        return categoryId === selectedCategory;
                      })?.name}
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Gallery Grid */}
          {filteredGalleries.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredGalleries.map((gallery, index) => {
                // Find category name for this gallery
                const categoryName =
                  categories.find((cat) => {
                    const categoryId = cat.id || cat._id || cat.category_id;
                    return categoryId === gallery.category_id;
                  })?.category_name ||
                  categories.find((cat) => {
                    const categoryId = cat.id || cat._id || cat.category_id;
                    return categoryId === gallery.category_id;
                  })?.name ||
                  gallery.category;

                return (
                  <div
                    key={gallery.id}
                    className="transform transition-all duration-500 hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <GalleryCard
                      gallery={{
                        ...gallery,
                        category: categoryName, // Pass the category name
                      }}
                      baseUrl={IMG_URL}
                      onImageClick={(imageIndex) =>
                        openPhotoViewer(gallery, imageIndex)
                      }
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                No items found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Show All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Simple Photo Viewer Modal */}
      {isModalOpen && currentGalleryPhotos.length > 0 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200 z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Photo Counter */}
          <div className="absolute top-6 left-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm z-10">
            {currentPhotoIndex + 1} / {currentGalleryPhotos.length}
          </div>

          {/* Main Photo */}
          <div className="relative max-w-5xl max-h-full mx-4">
            <img
              src={currentGalleryPhotos[currentPhotoIndex]}
              alt="Gallery photo"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>

          {/* Navigation Buttons */}
          {currentGalleryPhotos.length > 1 && (
            <>
              <button
                onClick={prevPhoto}
                className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-colors duration-200"
              >
                <svg
                  className="w-8 h-8"
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
                onClick={nextPhoto}
                className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-colors duration-200"
              >
                <svg
                  className="w-8 h-8"
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
        </div>
      )}
    </>
  );
};

export default Gallery;
