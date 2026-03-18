export const HomeSkeleton = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. Hero Slider Skeleton */}
      <div className="relative h-[80vh] md:h-screen w-full bg-gray-200 overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-4">
          {/* Subtitle Skeleton */}
          <Skeleton className="h-6 w-48 md:w-64" />

          {/* Title Skeleton */}
          <Skeleton className="h-16 w-3/4 md:w-1/2 rounded-lg" />

          {/* Buttons Skeleton */}
          <div className="flex gap-4 mt-8">
            <Skeleton className="h-14 w-40 rounded-full" />
            <Skeleton className="h-14 w-40 rounded-full" />
          </div>
        </div>
      </div>

      {/* 2. Content Sections Skeleton (For other home sections) */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};
