
const ChefsSpecialPicks = () => {
  return (
    <div className="bg-base-200 py-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-serif text-teal-600">
          ~Chef's Special Picks~
        </h2>
        <p className="text-gray-600 mt-2 font-serif">
          Dishes handpicked by our expert chefs to tantalize your taste buds!
        </p>
      </div>

      {/* Content Section */}
      <div className="hero ">
        <div className="hero-content flex flex-col-reverse lg:flex-row items-center">
          {/* Images Section */}
          <div className="lg:w-1/2 relative mb-8 lg:mb-0">
            <div className="w-3/4 h-64 bg-gray-300 rounded-lg shadow-2xl flex items-center justify-center mx-auto lg:mx-0">
              <img
                src="https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?cs=srgb&dl=pexels-yente-van-eynde-1263034-2403392.jpg&fm=jpg"
                alt="Chef Pick 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 h-48 bg-gray-300 rounded-lg border-8 border-white shadow-2xl absolute right-1/2 lg:right-5 top-1/2 transform translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:translate-y-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHUTDa78xYwPIqTFLULlNxTplOIf4j_1zJQ&s"
                alt="Chef Pick 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 space-y-5 px-4 text-center lg:text-left font-serif">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Curated Dishes from the Masters of the Craft!
            </h1>
            <p className="py-4 text-gray-700">
              Indulge in a selection of handpicked dishes personally recommended
              by our expert chefs. Each dish is crafted with precision and
              passion to provide you with an unforgettable dining experience.
            </p>
            <p className="py-4 text-gray-700">
              Our chefs have carefully curated these picks to highlight their
              unique culinary expertise and creativity, ensuring that every bite
              delivers exceptional taste and quality.
            </p>
          </div>
        </div>
      </div>

      {/* Thank You Note */}
      <div className="text-center mt-12">
        <p className="text-lg font-serif text-gray-600">
          Thank you for exploring our curated selection! We hope it brings joy
          to your dining experience.
        </p>
      </div>
    </div>
  );
};

export default ChefsSpecialPicks;
