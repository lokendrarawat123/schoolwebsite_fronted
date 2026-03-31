import React, { useState } from "react";
import HeroContainer from "../components/About/HeroContainer";
import { VacancySkeleton } from "../components/skeleton/HomeSkeleton";
import bgImg from "../assets/img/student_group.jpg";
import { useGetVacancyQuery } from "../redux/features/contentSlice";
import {
  Clock,
  Calendar,
  MapPin,
  FileText,
  Phone,
  Mail,
  Building2,
  Users,
  Briefcase,
} from "lucide-react";

const Vacancy = () => {
  const { data: vacancyResponse = {}, isLoading, error } = useGetVacancyQuery();

  const vacancies = vacancyResponse?.data || [];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter vacancies - only show open vacancies
  const filteredVacancies = vacancies.filter((job) => {
    const isOpen = job.status?.toLowerCase() === "open";
    const matchesSearch =
      job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description?.toLowerCase().includes(searchQuery.toLowerCase());

    return isOpen && matchesSearch;
  });

  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroContainer
        bgImage={bgImg}
        title="Vacancy"
        subtitle="Join Our Educational Excellence Team"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Current Openings
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are seeking dedicated professionals to join our academic
            community. All applications must be submitted in person at our
            administrative office.
          </p>
        </div>

        {/* Search Section */}

        {/* Loading State */}
        {isLoading && <VacancySkeleton />}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Unable to Load Positions
            </h3>
            <p className="text-gray-500">
              Please contact our HR department directly for current openings.
            </p>
          </div>
        )}

        {/* Job Listings */}
        {!isLoading && !error && filteredVacancies.length > 0 && (
          <div className="space-y-8">
            {filteredVacancies.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  {/* Job Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Briefcase className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 capitalize">
                            {job.title}
                          </h3>
                          <span className="inline-block mt-1 px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            Open Position
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mt-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>
                          <strong>Posted:</strong> {formatDate(job.posted_date)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-500" />
                        <span>
                          <strong>Deadline:</strong>{" "}
                          {formatDate(job.application_deadline)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-green-500" />
                        <span>
                          <strong>Department:</strong> Category{" "}
                          {job.category_id}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Position Description
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Application Process - Show once */}
        {!isLoading && !error && filteredVacancies.length > 0 && (
          <div className="bg-blue-50 rounded-xl p-6 mb-10">
            <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              How to Apply
            </h4>
            <div className="text-blue-800 space-y-2">
              <p className="font-medium">
                Applications must be submitted in person only.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Bring your complete CV/Resume</li>
                <li>Original and copies of educational certificates</li>
                <li>Two recent passport-size photographs</li>
                <li>Valid citizenship certificate</li>
                <li>Experience certificates (if applicable)</li>
              </ul>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && filteredVacancies.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">
              {searchQuery ? "No Matching Positions" : "No Open Positions"}
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {searchQuery
                ? "No open positions match your search criteria. Try different keywords."
                : "We don't have any open positions at the moment. Please check back regularly for new opportunities."}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Open Positions
              </button>
            )}
          </div>
        )}

        {/* Important Notice */}
        {!isLoading && !error && filteredVacancies.length > 0 && (
          <div className="mt-16 bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Important Application Notice
              </h3>
              <div className="text-amber-800 max-w-3xl mx-auto space-y-3">
                <p className="text-lg font-medium">
                  All job applications must be submitted physically at our office.
                </p>
                <p>
                  We do not accept online applications or email submissions.
                  Please visit our HR department during office hours with all
                  required documents.
                </p>
                <p className="text-sm">
                  Incomplete applications or those submitted through other
                  channels will not be considered.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Join Our Team?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Collaborative Environment
              </h4>
              <p className="text-gray-600 text-sm">
                Work with dedicated professionals in a supportive academic
                community.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Modern Facilities
              </h4>
              <p className="text-gray-600 text-sm">
                Access to state-of-the-art educational resources and
                infrastructure.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Career Growth
              </h4>
              <p className="text-gray-600 text-sm">
                Opportunities for professional development and career
                advancement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
