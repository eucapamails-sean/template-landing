const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Orlando, FL",
      text: "ABOS transformed our kitchen with their carpentry and painting services. Professional, punctual, and exceptional quality work. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Torres",
      location: "Winter Park, FL",
      text: "The electrical work was completed flawlessly. Fair pricing and clean work area. Will definitely use them again for future projects.",
      rating: 5
    },
    {
      name: "Jennifer Williams",
      location: "Altamonte Springs, FL",
      text: "Outstanding plumbing repair service. Fixed our leak quickly and professionally. The team was courteous and knowledgeable. Great experience!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our satisfied customers have to say about our professional handyman services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;