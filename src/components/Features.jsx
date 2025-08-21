import React from 'react';
import { FaGlobe, FaRobot, FaMicrophone, FaHeadphones, FaBatteryFull, FaCheckCircle, FaHandshake, FaPlane, FaGraduationCap, FaComments } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaGlobe className="text-blue-500" size={24} />,
      title: "144 Languages Worldwide",
      description: "Real-time translation in 144 languages powered by cutting-edge AI technology, including English, French, and Chinese.",
      benefits: [
        { icon: <FaHandshake className="text-green-500 mr-2" />, text: "Boost International Trade: Negotiate confidently with global partners" },
        { icon: <FaPlane className="text-green-500 mr-2" />, text: "Empower the Diaspora: Navigate foreign countries with ease" },
        { icon: <FaComments className="text-green-500 mr-2" />, text: "Tourism Growth: Welcome international tourists to Nigeria's rich heritage" }
      ],
      image: "/images/Ai-Earbud-2.jpg"
    },
    {
      icon: <FaRobot className="text-purple-500" size={24} />,
      title: "AI Chat & Call Translation",
      description: "Features a multilingual AI assistant that answers questions and offers tips with real-time translation for calls.",
      benefits: [
        { icon: <FaHandshake className="text-green-500 mr-2" />, text: "Excel in Remote Work: Participate in global video calls with crystal clear translation" },
        { icon: <FaGraduationCap className="text-green-500 mr-2" />, text: "Affordable Language Tutor: Perfect for students mastering foreign languages" },
        { icon: <FaComments className="text-green-500 mr-2" />, text: "Connect Families Worldwide: Maintain strong connections with diaspora family members" }
      ],
      image: "/images/AI-Earbud-15.jpg"
    },
    {
      icon: <FaMicrophone className="text-green-500" size={24} />,
      title: "5 Translation Modes",
      description: "Includes Free Talk, Headphone+Phone, Audio/Video Call, Photo Translation and Translation Machine modes.",
      benefits: [
        { icon: <FaPlane className="text-green-500 mr-2" />, text: "The Ultimate Travel Companion: Translate menus, signs, and announcements instantly" },
        { icon: <FaComments className="text-green-500 mr-2" />, text: "Navigate Daily Encounters: Communicate effortlessly with expats and international visitors" },
        { icon: <FaHandshake className="text-green-500 mr-2" />, text: "Crisis Communication: Communicate critical information in emergencies abroad" }
      ],
      image: "/images/AI-Earbud-11.jpg"
    },
    {
      icon: <FaHeadphones className="text-yellow-500" size={24} />,
      title: "3-in-1 Multifunctional Design",
      description: "Combines AI real-time translation, video calls, phone calls, and high-quality music in one compact device.",
      benefits: [
        { icon: <FaCheckCircle className="text-green-500 mr-2" />, text: "Maximize Value & Convenience: Three premium devices in one at a cost-conscious price" },
        { icon: <FaCheckCircle className="text-green-500 mr-2" />, text: "Productivity Redefined: Transition seamlessly from translated meetings to music without changing devices" }
      ],
      image: "/images/AI-Earbud-14.jpg"
    },
    {
      icon: <FaBatteryFull className="text-red-500" size={24} />,
      title: "High-Fidelity Sound & 80H Battery",
      description: "Twin 16mm drivers with noise reduction deliver rich, clear sound. LED-display charging case provides 80 hours total battery life.",
      benefits: [
        { icon: <FaCheckCircle className="text-green-500 mr-2" />, text: "Conquer Power Challenges: Stay connected through long meetings despite unpredictable electricity" },
        { icon: <FaHeadphones className="text-green-500 mr-2" />, text: "Immersive Audio Experience: Enjoy vibrant details of music and calls" },
        { icon: <FaPlane className="text-green-500 mr-2" />, text: "Travel Without Anxiety: LED display lets you monitor battery levels precisely" }
      ],
      image: "/images/AI-Earbud-21.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Key Features and Benefits Header */}
        <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-xl mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Features and Benefits
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            more features and benefits of the AI Earbud that make it a must-have for anyone looking to enhance their communication and travel experiences.

          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {feature.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-medium text-green-700 mb-3 text-center">
                  Lifestyle Benefits:
                </h4>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      {benefit.icon}
                      <span className="text-gray-700 text-sm">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      
       
      </div>
    </div>
  );
};

export default Features;