import React from "react";
import { FaAward, FaUsers, FaBook, FaGraduationCap, FaFlask, FaComputer, FaFootballBall, FaTheaterMasks, FaBus, FaUtensils, FaBookOpen, FaMedkit } from "react-icons/fa";
import bgImg from "../assets/img/scphoto.jpg";
import HeroContainer from "../components/About/HeroContainer";
import MissionVision from "../components/About/Mision";
import ReviewPage from "../components/review/review";
import Stat from "../components/About/Stat";

const About = () => {
  const features = [
    {
      icon: <FaBook className="text-4xl" />,
      title: "Quality Education",
      description:
        "Comprehensive curriculum designed to develop critical thinking and problem-solving skills.",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Expert Faculty",
      description:
        "Experienced and dedicated teachers committed to student success and growth.",
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "Excellence",
      description:
        "Consistently achieving high academic standards and student achievements.",
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Career Ready",
      description:
        "Preparing students for higher education and successful careers.",
    },
  ];

  const facilities = [
    {
      icon: <FaFlask className="text-3xl" />,
      title: "Science Laboratory",
      description: "Well-equipped physics, chemistry, and biology labs for hands-on learning"
    },
    {
      icon: <FaComputer className="text-3xl" />,
      title: "Computer Lab",
      description: "Modern computers with internet access for digital literacy"
    },
    {
      icon: <FaBookOpen className="text-3xl" />,
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources"
    },
    {
      icon: <FaFootballBall className="text-3xl" />,
      title: "Sports Ground",
      description: "Large playground for football, volleyball, and other sports activities"
    },
    {
      icon: <FaTheaterMasks className="text-3xl" />,
      title: "Assembly Hall",
      description: "Spacious hall for cultural programs, meetings, and events"
    },
    {
      icon: <FaMedkit className="text-3xl" />,
      title: "Health Center",
      description: "Basic medical facilities and first aid for student health care"
    }
  ];

  const programs = [
    {
      title: "Academic Excellence Program",
      description: "Special coaching for high-achieving students preparing for competitive exams",
      features: ["Extra classes", "Mock tests", "Career counseling"]
    },
    {
      title: "Remedial Classes",
      description: "Additional support for students who need extra help in specific subjects",
      features: ["Individual attention", "Flexible timing", "Progress tracking"]
    },
    {
      title: "Co-curricular Activities",
      description: "Various clubs and activities to develop students' talents and interests",
      features: ["Sports teams", "Cultural clubs", "Science club", "Debate society"]
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "District Level Science Fair",
      achievement: "1st Prize in Physics Project",
      student: "Rajesh Sharma, Class 10"
    },
    {
      year: "2023",
      title: "Inter-School Football Tournament",
      achievement: "Champions",
      student: "School Football Team"
    },
    {
      year: "2022",
      title: "SEE Results",
      achievement: "95% Pass Rate with 15 A+ grades",
      student: "Class 10 Students"
    },
    {
      year: "2022",
      title: "Essay Competition",
      achievement: "Regional Level Winner",
      student: "Sita Poudel, Class 9"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div>
        <HeroContainer
          bgImage={bgImg}
          title="about us"
          subtitle="Namuna bidhya sadan"
        />
      </div>
      <Stat />
      
      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
            Our{" "}
            <span className="inline-block px-4 py-1 bg-linear-to-r from-blue-900 to-indigo-600 text-white rounded-full shadow-md text-3xl md:text-3xl align-middle">
              Story
            </span>
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Namuna Bidhya Sadan was established in 2063 B.S. in Kohalpur with
              a vision to provide quality education to the children of the
              region. The school was founded with the goal of nurturing academic
              excellence alongside moral and character development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Over the years, Namuna Bidhya Sadan has grown into one of the most
              respected educational institutions in Kohalpur and surrounding
              areas. With dedicated teachers, innovative programs, and a focus
              on holistic growth, the school continues to shape generations of
              successful students.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, the school remains committed to its founding principles:
              fostering knowledge, integrity, and responsibility, while
              embracing modern teaching techniques and technologies to prepare
              students for a bright future.
            </p>
          </div>
        </div>
      </section>
      
      <MissionVision />

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-center"
              >
                <div className="text-secondary-color mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-blue-600 mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Academic Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-3 text-blue-900">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Recent Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {achievement.year}
                  </div>
                  <FaAward className="text-yellow-500 text-2xl" />
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{achievement.achievement}</p>
                <p className="text-gray-600 text-sm">{achievement.student}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "Honesty and strong moral principles in all our actions",
              },
              {
                title: "Excellence",
                desc: "Commitment to highest standards in education and service",
              },
              {
                title: "Inclusivity",
                desc: "Creating a welcoming environment for all students",
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-secondary-color rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Student Reviews Section */}
      <section>
        <ReviewPage />
      </section>
    </div>
  );
};

export default About;
