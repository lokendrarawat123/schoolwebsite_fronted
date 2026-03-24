import React, { useState } from "react";
import { useGetFaqsQuery } from "../../redux/features/SiteSlice";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FAQSkeleton } from "../skeleton/HomeSkeleton";

const Faqs = () => {
  const { data: faqData, isLoading, error } = useGetFaqsQuery();
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (isLoading) return <FAQSkeleton />;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">Error fetching FAQs!</div>
    );
  if (!faqData?.data || faqData.data.length === 0)
    return (
      <div className="text-center py-10 text-gray-400">No FAQs available.</div>
    );

  return (
    <div className="max-w-4xl text-center px-4 py-12">
      <h2 className="text-4xl font-bold mb-12 text-blue-900">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 max-h-auto overflow-y-auto">
        {faqData.data.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="border border-blue-100 rounded-xl overflow-hidden shadow-sm"
            >
              {/* Question Row */}
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-blue-50 transition-colors duration-200 text-left"
              >
                <span className="text-blue-900 font-semibold text-base pr-4">
                  {faq.question}
                </span>
                <span className="text-blue-600 shrink-0">
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              {/* Answer Panel */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 bg-blue-50 border-t border-blue-100 text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
