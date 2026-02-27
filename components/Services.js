const Services = () => {
  const services = [
    {
      title: "Plumbing",
      description: "Expert plumbing services including repairs, installations, and maintenance for all your residential needs.",
      icon: "plumbing"
    },
    {
      title: "Electrical",
      description: "Licensed electricians for wiring, repairs, installations, and electrical safety inspections.",
      icon: "electrical"
    },
    {
      title: "Painting",
      description: "Professional interior and exterior painting services with premium quality finishes.",
      icon: "painting"
    },
    {
      title: "Carpentry",
      description: "Custom carpentry work, repairs, installations, and furniture building services.",
      icon: "carpentry"
    },
    {
      title: "Drywall",
      description: "Drywall repair, installation, and finishing services for flawless wall surfaces.",
      icon: "drywall"
    },
    {
      title: "General Repairs",
      description: "Comprehensive handyman services for all your household repair needs.",
      icon: "repairs"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional handyman services for all your home improvement needs. Licensed, insured, and guaranteed quality work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a 
                href="#contact" 
                className="text-primary font-bold hover:text-blue-800 transition duration-300 flex items-center"
              >
                Learn More
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;