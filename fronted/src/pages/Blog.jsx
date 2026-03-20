import React, { useState } from "react";
import { useGetBlogCategoryQuery } from "../redux/features/categorySlice";
import { useGetBlogQuery } from "../redux/features/contentSlice";
import HeroContainer from "../components/About/HeroContainer";
import bgImg from "../assets/img/student_group.jpg";

const Blog = () => {
  // API Hooks
  const { data: blogCategoryData, isLoading: catLoading } =
    useGetBlogCategoryQuery();
  const { data: blogData, isLoading: blogLoading } = useGetBlogQuery();

  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extracting data safely
  const blog = blogData?.data || [];
  const blogCategory = blogCategoryData?.data || [];

  // Loading State
  if (blogLoading || catLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          <p className="text-gray-500 font-medium animate-pulse">
            Loading Blogs...
          </p>
        </div>
      </div>
    );
  }

  // Filter logic
  const filteredBlogs =
    selectedCategory === "All"
      ? blog
      : blog?.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroContainer bgImage={bgImg} title="Blog"></HeroContainer>

      <div className="bg-gray-50 min-h-screen pb-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          {/* Category Filter Section */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                selectedCategory === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              All Posts
            </button>

            {blogCategory.map((cat, index) => (
              <button
                key={cat._id || cat.id || `cat-${index}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          {filteredBlogs && filteredBlogs.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((post) => (
                <article
                  key={post.id || post._id}
                  className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                >
                  {/* Image Wrapper */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={
                        post.image ||
                        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"
                      }
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur shadow-sm px-3 py-1 rounded-lg text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col grow">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                      <span>{post.date || "March 16, 2026"}</span>
                      <span className="mx-2">•</span>
                      <span>5 min read</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-gray-500 text-sm line-clamp-3 leading-relaxed grow">
                      {post.description ||
                        "Learn more about this topic in our detailed guide."}
                    </p>

                    <div className="mt-6 pt-5 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-linear-to-tr from-blue-600 to-indigo-400 flex items-center justify-center text-white font-bold text-[10px]">
                          {post.author?.[0] || "A"}
                        </div>
                        <span className="text-xs font-semibold text-gray-700">
                          {post.author || "Admin"}
                        </span>
                      </div>
                      <button className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <span className="text-lg">→</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
              <div className="text-5xl mb-4">empty</div>
              <h3 className="text-xl font-bold text-gray-900">
                No Articles Found
              </h3>
              <p className="text-gray-500 mt-2">
                We couldn't find any blogs in the "{selectedCategory}" category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-6 text-blue-600 font-bold hover:underline"
              >
                Back to all posts
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Blog;
