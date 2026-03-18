import { Link } from "react-router-dom";
import bgImg from "../../assets/img/scphoto.jpg";
import { motion } from "framer-motion";

const AboutComponents = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - About Intro */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Namuna Bidhya Sadan, located in Kohalpur, is a leading
                educational institution dedicated to academic excellence and
                holistic development. Since its establishment in 2062 B.S., the
                school has been committed to nurturing young minds through
                quality education, modern teaching methodologies, and a
                disciplined learning environment. With experienced faculty,
                well-equipped facilities, and a strong focus on both academic
                and extracurricular activities, Namuna Bidhya Sadan prepares
                students to become confident, responsible, and capable
                individuals ready to face future challenges.
              </p>
              <Link
                to="/about"
                className="px-6 py-3 bg-secondary-color text-white rounded-lg hover:scale-105 transition-all duration-300"
              >
                Read More
              </Link>
            </motion.div>

            {/* Right Side - Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={bgImg}
                alt="Namuna Bidhya Sadan"
                className="rounded-xl shadow-lg w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 rounded-xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Namuna Bidhya Sadan</h3>
                <p className="text-sm opacity-80">Established 2062 B.S.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default AboutComponents;
