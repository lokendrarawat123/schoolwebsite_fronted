import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetBlogCategoryQuery } from "../redux/features/categorySlice";
import { useGetBlogQuery } from "../redux/features/contentSlice";
import HeroContainer from "../components/About/HeroContainer";
import { BlogSkeleton } from "../components/skeleton/HomeSkeleton";
import bgImg from "../assets/img/student_group.jpg";

const Blog = () => {
  const navigate = useNavigate();
  const baseurl = import.meta.env.VITE_IMG_URL;

  // API Hooks with force refresh
  const {
    data: blogCategoryData,
    isLoading: catLoading,
    refetch: refetchCategories,
  } = useGetBlogCategoryQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const {
    data: blogData,
    isLoading: blogLoading,
    refetch: refetchBlogs,
  } = useGetBlogQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Navigate to blog details
  const handleReadMore = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  // Extracting data safely
  const blog = blogData?.data || [];
  const blogCategory = blogCategoryData?.data || [];

  // Debug: Check API data

  // Filter logic
  const filteredBlogs =
    selectedCategory === null
      ? blog || []
      : blog.filter((item) => item.category_id === selectedCategory);

  // Loading State
  if (blogLoading || catLoading) {
    return <BlogSkeleton />;
  }

  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroContainer bgImage={bgImg} title="Blog" subtitle=""></HeroContainer>
      <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50">
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* Header with Refresh Button */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Latest Articles
              </h2>
              <button
                onClick={() => {
                  refetchCategories();
                  refetchBlogs();
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
              >
                Refresh
              </button>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest news, insights, and educational
              content
            </p>
          </div>

          {/* Category Filter Section */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300"
              }`}
            >
              All Posts
            </button>

            {blogCategory.map((cat) => {
              return (
                <button
                  key={cat.category_id}
                  onClick={() => {
                    console.log(
                      "Clicked category:",
                      cat.category_name,
                      "ID:",
                      cat.category_id,
                    );
                    setSelectedCategory(
                      selectedCategory === cat.category_id
                        ? null
                        : cat.category_id,
                    );
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === cat.category_id
                      ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300"
                  }`}
                >
                  {cat.category_name}
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              <span className="font-semibold text-indigo-600">
                {filteredBlogs.length}
              </span>
              {filteredBlogs.length === 1 ? " article" : " articles"}
              {selectedCategory !== null && (
                <span>
                  <span className="font-semibold text-indigo-600">
                    {
                      blogCategory.find(
                        (cat) => cat.category_id === selectedCategory,
                      )?.category_name
                    }
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Blog Grid */}
          {filteredBlogs && filteredBlogs.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((post, index) => (
                <article
                  key={post.id || post._id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Image Wrapper */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={`${baseurl}/${post.image_url}`}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/400/300";
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm shadow-sm px-3 py-1 rounded-full text-indigo-600 text-xs font-semibold">
                        {blogCategory.find(
                          (cat) => cat.category_id === post.category_id,
                        )?.category_name || "General"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col grow">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <span>
                        {post.published_date
                          ? new Date(post.published_date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              },
                            )
                          : post.created_at
                            ? new Date(post.created_at).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )
                            : "Recent"}
                      </span>
                      <span className="mx-2">•</span>
                      <span>5 min read</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed grow mb-4">
                      {post.description ||
                        "Learn more about this topic in our detailed guide."}
                    </p>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {blogCategory.find(
                            (cat) => cat.category_id === post.category_id,
                          )?.category_name || "General"}
                        </span>
                      </div>
                      <button
                        onClick={() => handleReadMore(post.id || post._id)}
                        className="text-indigo-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200"
                      >
                        Read More
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
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                {selectedCategory
                  ? "No articles found"
                  : "No articles available"}
              </h3>
              <p className="text-gray-500 mb-6">
                {selectedCategory
                  ? "Try selecting a different category or check back later"
                  : "Articles will be available soon"}
              </p>
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  Show All Posts
                </button>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Blog;
