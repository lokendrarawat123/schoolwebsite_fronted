import React from "react";
import { FaAward, FaUsers, FaBook, FaGraduationCap } from "react-icons/fa";
import bgImg from "../assets/img/scphoto.jpg";

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

  const stats = [
    { number: "2062", label: "Established" },
    { number: "500+", label: "Students" },
    { number: "50+", label: "Faculty" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section>Inntro duction</section>

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

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              Namuna Bidhya Sadan was established in 2062 B.S. with a vision to
              provide quality education to students in the Kohalpur region. Over
              the years, we have grown into one of the most respected
              educational institutions in the area.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our commitment to academic excellence, combined with a focus on
              character development and holistic growth, has helped us produce
              generations of successful students who have gone on to excel in
              various fields.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we continue to uphold our values of integrity, excellence,
              and service while adapting to modern educational practices and
              technologies.
            </p>
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
      {/* our team  */}
      <section>
        <div class="p-4">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-slate-900 text-3xl md:text-4xl font-bold">
              Meet our team
            </h2>
            <p class="text-slate-600 text-[15px] mt-4 leading-relaxed">
              Meet our team of professionals to serve you.
            </p>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 text-center mt-16 max-w-5xl max-lg:max-w-3xl max-md:max-w-xl mx-auto">
            <div>
              <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-50 inline-block">
                <img
                  src="https://readymadeui.com/team-1.webp"
                  class="w-full h-full"
                />
              </div>

              <div class="py-4">
                <h4 class="text-slate-900 text-base font-semibold">John Doe</h4>
                <p class="text-slate-600 text-[13px] mt-1.5">
                  Software Engineer
                </p>
              </div>
            </div>

            <div>
              <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-50 inline-block">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  class="w-full h-full"
                />
              </div>

              <div class="py-4">
                <h4 class="text-slate-900 text-base font-semibold">
                  Mark Adair
                </h4>
                <p class="text-slate-600 text-[13px] mt-1.5">
                  Software Engineer
                </p>
              </div>
            </div>

            <div>
              <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-50 inline-block">
                <img
                  src="https://readymadeui.com/team-3.webp"
                  class="w-full h-full"
                />
              </div>

              <div class="py-4">
                <h4 class="text-slate-900 text-base font-semibold">
                  Simon Konecki
                </h4>
                <p class="text-slate-600 text-[13px] mt-1.5">Web Designer</p>
              </div>
            </div>

            <div>
              <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-50 inline-block">
                <img
                  src="https://readymadeui.com/team-4.webp"
                  class="w-full h-full"
                />
              </div>

              <div class="py-4">
                <h4 class="text-slate-900 text-base font-semibold">Sophia</h4>
                <p class="text-slate-600 text-[13px] mt-1.5">
                  Software Developer
                </p>
              </div>
            </div>

            <div>
              <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-50 inline-block">
                <img
                  src="https://readymadeui.com/team-5.webp"
                  class="w-full h-full"
                />
              </div>

              <div class="py-4">
                <h4 class="text-slate-900 text-base font-semibold">Alen</h4>
                <p class="text-slate-600 text-[13px] mt-1.5">
                  Software Developer
                </p>
              </div>
            </div>

            <div>
              <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-50 inline-block">
                <img
                  src="https://readymadeui.com/team-6.webp"
                  class="w-full h-full"
                />
              </div>

              <div class="py-4">
                <h4 class="text-slate-900 text-base font-semibold">Eleanor</h4>
                <p class="text-slate-600 text-[13px] mt-1.5">Web Designer</p>
              </div>
            </div>

            <div>
              <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-50 inline-block">
                <img
                  src="https://readymadeui.com/team-1.webp"
                  class="w-full h-full"
                />
              </div>

              <div class="py-4">
                <h4 class="text-slate-900 text-base font-semibold">John Doe</h4>
                <p class="text-slate-600 text-[13px] mt-1.5">
                  Software Engineer
                </p>
              </div>
            </div>

            <div>
              <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-50 inline-block">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  class="w-full h-full"
                />
              </div>

              <div class="py-4">
                <h4 class="text-slate-900 text-base font-semibold">
                  Mark Adair
                </h4>
                <p class="text-slate-600 text-[13px] mt-1.5">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
