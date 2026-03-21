import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetBlogCategoryQuery } from "../redux/features/categorySlice";
import { useGetBlogQuery } from "../redux/features/contentSlice";
import HeroContainer from "../components/About/HeroContainer";
import bgImg from "../assets/img/student_group.jpg";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const baseurl = import.meta.env.VITE_IMG_URL;

  // API Hooks
  const { data: blogCategoryData, isLoading: catLoading } =
    useGetBlogCategoryQuery(undefined, {
      refetchOnMountOrArgChange: true,
    });
  const { data: blogData, isLoading: blogLoading } = useGetBlogQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    },
  );

  // State
  const [currentBlog, setCurrentBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Extracting data safely
  const blogs = blogData?.data || [];
  const blogCategories = blogCategoryData?.data || [];

  // Find current blog and related blogs
  useEffect(() => {
    if (blogs.length > 0) {
      // Try different ID formats
      const blog = blogs.find(
        (b) =>
          String(b.id) === String(id) ||
          String(b._id) === String(id) ||
          String(b.blog_id) === String(id),
      );

      console.log("Looking for blog with ID:", id);
      console.log("Available blogs:", blogs);
      console.log("Found blog:", blog);

      setCurrentBlog(blog);

      if (blog) {
        // Get related blogs from same category
        const related = blogs
          .filter(
            (b) =>
              String(b.id) !== String(blog.id) &&
              String(b._id) !== String(blog._id) &&
              String(b.blog_id) !== String(blog.blog_id) &&
              b.category_id === blog.category_id,
          )
          .slice(0, 5);
        setRelatedBlogs(related);
        setSelectedCategory(blog.category_id);
      }
    }
  }, [blogs, id]);

  // Filter blogs by category for sidebar
  const sidebarBlogs = selectedCategory
    ? blogs.filter(
        (b) =>
          b.category_id === selectedCategory &&
          String(b.id) !== String(currentBlog?.id) &&
          String(b._id) !== String(currentBlog?._id) &&
          String(b.blog_id) !== String(currentBlog?.blog_id),
      )
    : blogs.filter(
        (b) =>
          String(b.id) !== String(currentBlog?.id) &&
          String(b._id) !== String(currentBlog?._id) &&
          String(b.blog_id) !== String(currentBlog?.blog_id),
      );

  // Navigate to another blog
  const handleBlogClick = (blog) => {
    const blogId = blog.id || blog._id || blog.blog_id;
    console.log("Navigating to blog:", blogId, blog.title);
    // Force page reload to ensure proper navigation
    window.location.href = `/blog/${blogId}`;
  };

  // Loading State
  if (blogLoading || catLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading blog details...</p>
        </div>
      </div>
    );
  }

  // Blog not found
  if (!currentBlog) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
        <HeroContainer bgImage={bgImg} title="Blog Not Found" subtitle="" />
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Blog Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const currentCategory = blogCategories.find(
    (cat) => cat.category_id === currentBlog.category_id,
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroContainer bgImage={bgImg} title="Blog Details" subtitle="" />

      <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Featured Image */}
                {(currentBlog.image_url ||
                  currentBlog.image ||
                  currentBlog.img_url) && (
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={`${baseurl}/${currentBlog.image_url || currentBlog.image || currentBlog.img_url}`}
                      alt={currentBlog.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/800/400";
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

                    {/* Category Badge on Image */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/95 backdrop-blur-sm shadow-lg px-4 py-2 rounded-full text-indigo-600 font-semibold">
                        {currentCategory?.category_name || "General"}
                      </span>
                    </div>
                  </div>
                )}

                {/* Article Content */}
                <div className="p-8">
                  {/* Article Header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
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
                            d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h3z"
                          />
                        </svg>
                        <span>
                          {currentBlog.published_date
                            ? new Date(
                                currentBlog.published_date,
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : currentBlog.created_at
                              ? new Date(
                                  currentBlog.created_at,
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })
                              : "Recent"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>5 min read</span>
                      </div>

                      {currentBlog.author && (
                        <div className="flex items-center gap-2">
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
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span>{currentBlog.author}</span>
                        </div>
                      )}
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                      {currentBlog.title}
                    </h1>

                    {currentBlog.description && (
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {currentBlog.description}
                      </p>
                    )}
                  </div>

                  {/* Article Body */}
                  <div className="prose prose-lg max-w-none">
                    {currentBlog.content ? (
                      <div
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: currentBlog.content,
                        }}
                      />
                    ) : (
                      <div className="text-gray-700 leading-relaxed">
                        <p className="mb-6">
                          {currentBlog.description ||
                            "This is a comprehensive blog post that covers important topics and insights. The content provides valuable information for readers interested in learning more about this subject."}
                        </p>
                        <p className="mb-6">
                          Our educational institution is committed to sharing
                          knowledge and insights through our blog platform. Each
                          article is carefully crafted to provide meaningful
                          content that benefits our community.
                        </p>
                        <p>
                          Stay tuned for more updates and detailed content. We
                          regularly publish new articles covering various topics
                          related to education, student life, and academic
                          excellence.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  {currentBlog.tags && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentBlog.tags.split(",").map((tag, index) => (
                          <span
                            key={index}
                            className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => navigate("/blog")}
                      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Back to All Blogs
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                {/* Category Filter */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
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
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      Categories
                    </h3>
                    <p className="text-indigo-100 text-sm mt-1">
                      Explore articles by topic
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3">
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                          selectedCategory === null
                            ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white shadow-lg transform scale-[1.02]"
                            : "text-gray-700 hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 border border-gray-200 hover:border-indigo-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full transition-colors ${
                              selectedCategory === null
                                ? "bg-white"
                                : "bg-indigo-400 group-hover:bg-indigo-500"
                            }`}
                          ></div>
                          <span className="font-medium">All Categories</span>
                        </div>
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            selectedCategory === null
                              ? "bg-white/20 text-white"
                              : "bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-700"
                          }`}
                        >
                          {blogs.length}
                        </div>
                      </button>

                      {blogCategories.map((category) => {
                        const categoryCount = blogs.filter(
                          (b) => b.category_id === category.category_id,
                        ).length;
                        const isSelected =
                          selectedCategory === category.category_id;

                        return (
                          <button
                            key={category.category_id}
                            onClick={() =>
                              setSelectedCategory(category.category_id)
                            }
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                              isSelected
                                ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white shadow-lg transform scale-[1.02]"
                                : "text-gray-700 hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 border border-gray-200 hover:border-indigo-300"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  isSelected
                                    ? "bg-white"
                                    : "bg-indigo-400 group-hover:bg-indigo-500"
                                }`}
                              ></div>
                              <span className="font-medium">
                                {category.category_name}
                              </span>
                            </div>
                            <div
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                isSelected
                                  ? "bg-white/20 text-white"
                                  : "bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-700"
                              }`}
                            >
                              {categoryCount}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Category Stats */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">
                          {selectedCategory
                            ? blogs.filter(
                                (b) => b.category_id === selectedCategory,
                              ).length
                            : blogs.length}
                        </div>
                        <div className="text-sm text-gray-500">
                          {selectedCategory
                            ? `Articles in ${blogCategories.find((c) => c.category_id === selectedCategory)?.category_name}`
                            : "Total Articles"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related/Category Blogs */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-linear-to-r from-emerald-600 to-teal-600 p-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
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
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                      {selectedCategory
                        ? "Related Articles"
                        : "Recent Articles"}
                    </h3>
                    <p className="text-emerald-100 text-sm mt-1">
                      {selectedCategory
                        ? `More from ${blogCategories.find((c) => c.category_id === selectedCategory)?.category_name}`
                        : "Latest blog posts"}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      {sidebarBlogs.slice(0, 6).map((blog) => {
                        const blogCategory = blogCategories.find(
                          (cat) => cat.category_id === blog.category_id,
                        );
                        const isCurrentBlog =
                          String(blog.id || blog._id || blog.blog_id) ===
                          String(
                            currentBlog?.id ||
                              currentBlog?._id ||
                              currentBlog?.blog_id,
                          );

                        return (
                          <article
                            key={blog.id || blog._id || blog.blog_id}
                            onClick={() => handleBlogClick(blog)}
                            className={`group cursor-pointer border rounded-xl p-4 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                              isCurrentBlog
                                ? "border-indigo-300 bg-indigo-50 shadow-md"
                                : "border-gray-200 hover:border-indigo-300 bg-white hover:bg-indigo-50"
                            }`}
                          >
                            <div className="flex gap-4">
                              {(blog.image_url ||
                                blog.image ||
                                blog.img_url) && (
                                <div className="shrink-0">
                                  <div className="relative overflow-hidden rounded-lg">
                                    <img
                                      src={`${baseurl}/${blog.image_url || blog.image || blog.img_url}`}
                                      alt={blog.title}
                                      className="w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-110"
                                      onError={(e) => {
                                        e.target.src = "/api/placeholder/80/80";
                                      }}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg" />
                                  </div>
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-2">
                                  <h4
                                    className={`font-semibold leading-tight text-sm transition-colors duration-200 line-clamp-2 ${
                                      isCurrentBlog
                                        ? "text-indigo-700"
                                        : "text-gray-900 group-hover:text-indigo-600"
                                    }`}
                                  >
                                    {blog.title}
                                  </h4>
                                  {isCurrentBlog && (
                                    <div className="shrink-0 ml-2">
                                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                                    </div>
                                  )}
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                                      isCurrentBlog
                                        ? "bg-indigo-200 text-indigo-800"
                                        : "bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-700"
                                    }`}
                                  >
                                    {blogCategory?.category_name || "General"}
                                  </span>
                                  <span className="text-xs text-gray-400">
                                    •
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {blog.published_date
                                      ? new Date(
                                          blog.published_date,
                                        ).toLocaleDateString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                        })
                                      : blog.created_at
                                        ? new Date(
                                            blog.created_at,
                                          ).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                          })
                                        : "Recent"}
                                  </span>
                                </div>

                                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-2">
                                  {blog.description ||
                                    "Read more about this interesting topic..."}
                                </p>

                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <svg
                                      className="w-3 h-3"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    <span>5 min read</span>
                                  </div>

                                  {!isCurrentBlog && (
                                    <div className="flex items-center gap-1 text-xs text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                      <span>Read</span>
                                      <svg
                                        className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-200"
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
                                    </div>
                                  )}

                                  {isCurrentBlog && (
                                    <div className="flex items-center gap-1 text-xs text-indigo-600 font-medium">
                                      <span>Currently Reading</span>
                                      <svg
                                        className="w-3 h-3"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>

                    {sidebarBlogs.length === 0 && (
                      <div className="px-6 pb-6">
                        <div className="text-center py-12 text-gray-500">
                          <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <svg
                              className="w-8 h-8 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <h4 className="font-medium text-gray-600 mb-2">
                            No related articles
                          </h4>
                          <p className="text-sm text-gray-500">
                            Check back later for more content
                          </p>
                        </div>
                      </div>
                    )}

                    {sidebarBlogs.length > 6 && (
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-200">
                          <button
                            onClick={() => navigate("/blog")}
                            className="w-full px-4 py-3 bg-linear-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 text-emerald-700 hover:text-emerald-800 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 border border-emerald-200 hover:border-emerald-300"
                          >
                            <span>View All Articles</span>
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
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Related/Category Blogs */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
