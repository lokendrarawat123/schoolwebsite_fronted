import React from "react";
import { BookOpen, Users, Microscope, Award, Globe, Heart } from "lucide-react";
import home2 from "../../assets/img/home/home2.jpg";
import home3 from "../../assets/img/home/home3.jpg";
import home4 from "../../assets/img/home/home4.jpg";
import home5 from "../../assets/img/home/home5.jpg";
import home6 from "../../assets/img/home/home6.jpg";

const WhyChooseUs = () => {
  // School/Education related images
  const schoolImages = [
    home2, // Students in classroom
    home3,
    home4,
    home5,
    home6,
    home3,
  ];

  // Features data
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education & Academic Excellence",
      description:
        "We provide world-class education with a comprehensive curriculum designed to challenge and inspire students. Our innovative teaching methods, modern facilities, and experienced faculty ensure that every student receives the best possible learning experience to excel in their academic journey.",
    },
    {
      icon: Users,
      title: "Expert Teachers & Mentorship",
      description:
        "Our highly qualified and dedicated teachers bring years of experience and passion to the classroom. They provide personalized attention, mentorship, and guidance to help each student discover their potential and achieve their goals through individualized learning approaches.",
    },
    {
      icon: Microscope,
      title: "Modern Labs & Advanced Facilities",
      description:
        "State-of-the-art science laboratories, computer labs, and research facilities provide hands-on learning experiences. Our modern infrastructure includes smart classrooms, well-equipped libraries, and advanced technology to support 21st-century learning and innovation.",
    },
    {
      icon: Award,
      title: "Proven Track Record & Success",
      description:
        "With over 15 years of excellence in education, we have consistently produced outstanding results. Our students have achieved remarkable success in academics, competitions, and have been accepted into prestigious institutions worldwide.",
    },
    {
      icon: Globe,
      title: "Global Perspective & Future Ready",
      description:
        "We prepare students for the global marketplace with international curriculum standards, language programs, and cultural exchange opportunities. Our focus on critical thinking, creativity, and leadership skills ensures students are ready for future challenges.",
    },
    {
      icon: Heart,
      title: "Holistic Development & Character Building",
      description:
        "Beyond academics, we focus on developing well-rounded individuals through sports, arts, community service, and character education. Our nurturing environment promotes values, ethics, and social responsibility in every student.",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-start">
          {/* Left Side - Enhanced Content */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-2 sm:mb-3 text-gray-800">
                Why{" "}
                <span className="inline-flex items-center space-x-1">
                  <span className="text-blue-600 drop-shadow-lg transform hover:scale-110 transition-transform duration-300">
                    N
                  </span>
                  <span className="text-yellow-500 drop-shadow-lg transform hover:scale-110 transition-transform duration-300">
                    V
                  </span>
                  <span className="text-green-600 drop-shadow-lg transform hover:scale-110 transition-transform duration-300">
                    S
                  </span>
                </span>
              </h2>
              {/* <p className="text-sm sm:text-base lg:text-lg xl:text-md 2xl:text-2xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                At Namuna Vidhya Sadan School, we are committed to providing
                exceptional education that nurtures young minds and prepares
                students for a successful future. Our comprehensive approach
                combines academic excellence with character development.
              </p> */}
            </div>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3 sm:space-x-4 group"
                >
                  <div className="shrink-0">
                    <div className="w-10 h-10 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-16 2xl:w-18 2xl:h-18 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 text-white" />
                    </div>
                  </div>
                  <div className="flex">
                    <h3 className="text-base sm:text-lg lg:text-sm xl:text-2xl 2xl:text-3xl font-bold mb-1 sm:mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed">
                      {/* {item.description} */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Enhanced Image Grid */}
          <div className="relative mt-6 lg:mt-0">
            {/* Background Decorative Elements - Hidden on mobile */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-linear-to-br from-blue-100 to-blue-200 rounded-3xl -z-10 transform rotate-12 opacity-60"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-28 sm:w-40 md:w-56 h-28 sm:h-40 md:h-56 bg-linear-to-br from-green-100 to-green-200 rounded-3xl -z-10 transform -rotate-12 opacity-60"></div>

            {/* Main Image Container with enhanced styling */}
            <div className="relative transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500 mt-5">
              <div className="bg-white p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl shadow-md sm:shadow-md hover:shadow-md transition-shadow duration-300">
                {/* Image Grid - 3x2 layout with responsive height */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Top row - 3 images */}
                  {schoolImages.slice(0, 3).map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden h-24 sm:h-32 md:h-40 lg:h-48 rounded-md sm:rounded-lg group"
                    >
                      <img
                        src={image}
                        alt={`School life ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300"></div>
                    </div>
                  ))}

                  {/* Bottom row - 3 images */}
                  {schoolImages.slice(3, 6).map((image, index) => (
                    <div
                      key={index + 3}
                      className="relative overflow-hidden h-24 sm:h-32 md:h-40 lg:h-48 rounded-md sm:rounded-lg group"
                    >
                      <img
                        src={image}
                        alt={`School life ${index + 4}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
