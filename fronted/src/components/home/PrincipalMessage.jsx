import principle_photo from "../../assets/img/principle_image.jpg";

const PrincipalMessage = () => {
  const principle_name = "Lokendra Rawat";
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-linear-to-br from-green-400 to-green-600 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-green-400 via-green-500 to-green-600"></div>
              <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
                <img
                  src={principle_photo}
                  alt="Principal"
                  className="w-full h-auto object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-2 sm:mb-4">
                Message from the Principal
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Welcome to Namuna Vidhya Sadan School, the forefront of learning
                and secondary education in Nepal. With our unwavering dedication
                to quality education, a culture of collaboration, and a
                commitment to student development, we instill in our students a
                passion for learning, excellence, and preparedness for the real
                world.
              </p>
            </div>

            <div className="pt-2 sm:pt-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                {principle_name}
              </h3>
              <p className="text-gray-500 font-medium text-sm sm:text-base">
                Principal, Namuna Vidhya Sadan School
              </p>
            </div>

            {/* Optional: Add a quote or additional message */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
              <p className="text-gray-700 italic text-sm sm:text-base">
                "Education is the most powerful weapon which you can use to
                change the world. At our school, we are committed to nurturing
                young minds and preparing them for a bright future."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
