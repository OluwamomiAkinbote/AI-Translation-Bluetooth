import React from 'react';
import { FaStar, FaQuoteLeft, FaUsers, FaThumbsUp, FaGlobeAfrica } from 'react-icons/fa';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Chinedu O.",
      role: "Business Consultant (Lagos)", 
      image: "/images/AI-Earbud-10.jpg",
      content: "These earbuds completely changed how I work with my international clients. Meetings now flow naturally without a translator.",
      rating: 5
    },
    {
      name: "Amina L.",
      role: "Travel Blogger (Abuja)",
      image: "/images/AI-Earbud-6.jpg",
      content: "Traveling across Africa is now stress-free. From French in Benin to Arabic in Egypt, I never feel lost in conversation.",
      rating: 5
    },
    {
      name: "Ngozi E.",
      role: "Entrepreneur (Port Harcourt)",
      image: "/images/AI-04.jpg",
      content: "Running my import/export business is now easier. No more expensive interpreters, and I can close deals faster.",
      rating: 5
    },
    {
      name: "Tunde K.",
      role: "University Student (Ibadan)",
      image: "/images/AI-Earbud-11.jpg",
      content: "For my French and Chinese classes, these earbuds are like having a personal tutor. My pronunciation has improved a lot.",
      rating: 4
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="inline-block px-6 py-3 bg-green-600 text-white text-3xl md:text-4xl font-bold border-0">
            Nigerians Trust Our AI Earbuds
          </h2>
          <p className="mt-4 text-xl text-gray-800 max-w-2xl mx-auto">
            From business to travel and education, real Nigerians are breaking language barriers with confidence.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 border border-gray-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 object-cover mr-4 border border-gray-400"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-base text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? "text-yellow-500" : "text-gray-400"} 
                    size={20} 
                  />
                ))}
              </div>
              
              <FaQuoteLeft className="text-green-600 text-xl mb-3" />
              <p className="text-lg text-gray-800 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12">
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-green-600 text-5xl mb-3" />
            <div className="text-3xl font-bold text-green-600">10,000+</div>
            <div className="text-xl text-gray-800">Nigerians Already Using It</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaThumbsUp className="text-green-600 text-5xl mb-3" />
            <div className="text-3xl font-bold text-green-600">98%</div>
            <div className="text-xl text-gray-800">Customer Satisfaction</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaGlobeAfrica className="text-green-600 text-5xl mb-3" />
            <div className="text-3xl font-bold text-green-600">144</div>
            <div className="text-xl text-gray-800">Languages Supported</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;