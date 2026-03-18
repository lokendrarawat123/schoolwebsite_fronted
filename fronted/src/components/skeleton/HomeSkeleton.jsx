export const HomeSkeleton = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. Hero Slider Skeleton */}
      <div className="relative h-[80vh] md:h-screen w-full bg-gray-200 overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-4">
          {/* Subtitle Skeleton */}
          <div className="h-6 w-48 md:w-64 bg-gray-300 animate-pulse rounded"></div>

          {/* Title Skeleton */}
          <div className="h-16 w-3/4 md:w-1/2 bg-gray-300 animate-pulse rounded-lg"></div>

          {/* Buttons Skeleton */}
          <div className="flex gap-4 mt-8">
            <div className="h-14 w-40 bg-gray-300 animate-pulse rounded-full"></div>
            <div className="h-14 w-40 bg-gray-300 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 2. Content Sections Skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-48 w-full bg-gray-300 animate-pulse rounded-xl"></div>
            <div className="h-6 w-3/4 bg-gray-300 animate-pulse rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
