import React from "react";
import { BookOpen, Users, Microscope, Award, Globe, Heart } from "lucide-react";

const WhyChooseUs = () => {
  // School/Education related images
  const schoolImages = [
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop&auto=format", // Students in classroom
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop&auto=format", // Students studying
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop&auto=format", // School building
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop&auto=format", // Students with books
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop&auto=format", // Library/study
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop&auto=format", // Science lab
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Enhanced Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-gray-800">
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
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                At Namuna Vidhya Sadan School, we are committed to providing
                exceptional education that nurtures young minds and prepares
                students for a successful future. Our comprehensive approach
                combines academic excellence with character development.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Enhanced Image Grid */}
          <div className="relative lg:sticky lg:top-8">
            {/* Background Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-linear-to-br from-blue-100 to-blue-200 rounded-3xl -z-10 transform rotate-12 opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-linear-to-br from-green-100 to-green-200 rounded-3xl -z-10 transform -rotate-12 opacity-60"></div>

            {/* Main Image Container with enhanced styling */}
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white p-4 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                {/* Image Grid - 3x2 layout with larger height */}
                <div className="grid grid-cols-3 gap-3 rounded-2xl overflow-hidden">
                  {/* Top row - 3 images */}
                  {schoolImages.slice(0, 3).map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden h-48 rounded-lg group"
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
                      className="relative overflow-hidden h-48 rounded-lg group"
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
