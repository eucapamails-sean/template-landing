const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background video placeholder - in a real implementation, you would add the video here */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gray-800 w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
            <p className="text-gray-400">Video Background Placeholder</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional <span className="text-secondary">Handyman</span> Services in Orlando
          </h1>
          <p className="text-xl mb-10 text-gray-200">
            Expert plumbing, electrical, painting, carpentry & more. Licensed, insured & guaranteed. Free estimates on all projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg text-center transition duration-300"
            >
              Get Free Quote
            </a>
            <a 
              href="#services" 
              className="bg-transparent hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full text-lg text-center border-2 border-white transition duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;