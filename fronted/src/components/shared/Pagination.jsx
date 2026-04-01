const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (!totalPages || totalPages < 1) return null;

  const getPages = () => {
    const pages = [];
    const delta = 1;
    const left = currentPage - delta;
    const right = currentPage + delta;
    let prev = null;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        if (prev && i - prev > 1) pages.push("...");
        pages.push(i);
        prev = i;
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-8 sm:mt-10 flex-wrap">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 text-sm font-medium hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        &#8592; <span className="hidden sm:inline">Prev</span>
      </button>

      {/* Page Numbers */}
      {getPages().map((page, i) =>
        page === "..." ? (
          <span key={`e-${i}`} className="px-2 py-2 text-gray-400 text-sm select-none">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => page !== currentPage && onPageChange(page)}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border text-sm font-semibold transition-all duration-200 ${
              page === currentPage
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md cursor-default"
                : "bg-white text-gray-600 border-gray-200 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 cursor-pointer"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 text-sm font-medium hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
      >
        <span className="hidden sm:inline">Next</span> &#8594;
      </button>
    </div>
  );
};

export default Pagination;
