import React from "react";
import { useGetEventQuery } from "../redux/features/academicSlice";
import HeroContainer from "../components/About/HeroContainer";
import { AcademicSkeleton } from "../components/skeleton/HomeSkeleton";
import bgImg from "../assets/img/student_group.jpg";

const Academeic = () => {
  const {
    data: event,
    isLoading: eventLoading,
    error: eventError,
  } = useGetEventQuery();

  if (eventLoading) {
    return <AcademicSkeleton />;
  }

  if (eventError) {
    return (
      <div className="w-full">
        <HeroContainer bgImage={bgImg} title="Academic" subtitle="" />
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-red-600">Error loading academic content</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroContainer
        bgImage={bgImg}
        title="Academic"
        subtitle=""
      ></HeroContainer>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Academic Programs</h2>
          <p className="text-gray-600">Coming Soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Academeic;
