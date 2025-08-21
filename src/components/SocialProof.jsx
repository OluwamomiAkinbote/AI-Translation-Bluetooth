import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Chinedu O.",
      role: "Business Consultant", 
      image: "/images/AI-Earbud-10.jpg",
      content: "These earbuds transformed how I communicate with international clients. The translation accuracy is impressive!",
      rating: 5
    },
    {
      name: "Amina L.",
      role: "Travel Blogger",
      image: "/images/AI-Earbud-6.jpg",
      content: "As someone who travels frequently across Africa, these have been a game-changer. No more language barriers!",
      rating: 5
    },
    {
      name: "Tunde K.",
      role: "University Student",
      image: "/images/AI-Earbud-11.jpg",
      content: "Perfect for my language studies. The AI tutor feature helps me practice pronunciation and comprehension.",
      rating: 4
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Nigerians Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who are breaking down language barriers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                    size={16} 
                  />
                ))}
              </div>
              
              <FaQuoteLeft className="text-green-500 mb-2" />
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">144</div>
            <div className="text-gray-600">Languages Supported</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;