import React from 'react';
import { FaCheck, FaBox, FaBoxes, FaPallet, FaShippingFast, FaShieldAlt } from 'react-icons/fa';

const Pricing = () => {
  const singlePrice = 35000;
  const doublePrice = Math.round(singlePrice * 2 * 0.97); // 10% discount
  const triplePrice = Math.round(singlePrice * 3 * 0.94); // 15% discount
  
  const formatPrice = (price) => {
    return `₦${price.toLocaleString('en-NG')}`;
  };

  const packages = [
    {
      icon: <FaBox className="text-blue-500" size={24} />,
      name: "Single Pack",
      description: "Perfect for individual use",
      price: singlePrice,
      originalPrice: null,
      savings: null,
      features: [
        "1 AI Translation Earbud Set",
        "Charging Case",
        "Type-C Charging Cable",
        "User Manual",
        "144 Languages Support",
        "60 Hours Total Battery"
      ],
      cta: "Buy Now",
      popular: false
    },
    {
      icon: <FaBoxes className="text-green-500" size={24} />,
      name: "Double Pack",
      description: "Great for couples or business partners",
      price: doublePrice,
      originalPrice: singlePrice * 2,
      savings: singlePrice * 2 - doublePrice,
      features: [
        "2 AI Translation Earbud Sets",
        "2 Charging Cases",
        "2 Type-C Charging Cables",
        "User Manuals",
        "144 Languages Support",
        "60 Hours Total Battery Each",
        "Free Shipping"
      ],
      cta: "Get Best Value",
      popular: true
    },
    {
      icon: <FaPallet className="text-purple-500" size={24} />,
      name: "Family Pack (3 Sets)",
      description: "Ideal for families or small teams",
      price: triplePrice,
      originalPrice: singlePrice * 3,
      savings: singlePrice * 3 - triplePrice,
      features: [
        "3 AI Translation Earbud Sets",
        "3 Charging Cases", 
        "3 Type-C Charging Cables",
        "User Manuals",
        "144 Languages Support",
        "60 Hours Total Battery Each",
        "Free Shipping",
        "1 Year Extended Warranty"
      ],
      cta: "Save Big",
      popular: false
    }
  ];

  return (
    <div className="py-16 bg-white" id="package">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Package
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the option that best fits your needs. Buy more and save more!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative rounded-lg border-2 ${
                pkg.popular 
                  ? 'border-green-500 transform scale-105 shadow-xl' 
                  : 'border-gray-200 shadow-md'
              } transition-all duration-300 hover:shadow-lg`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {pkg.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {pkg.name}
                </h3>
                
                <p className="text-gray-600 text-center mb-6">
                  {pkg.description}
                </p>
                
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-gray-900">
                      {formatPrice(pkg.price)}
                    </span>
                  </div>
                  
                  {pkg.originalPrice && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-500 line-through mr-2">
                        {formatPrice(pkg.originalPrice)}
                      </span>
                      <span className="text-sm text-green-600 font-semibold">
                        Save {formatPrice(pkg.savings)}
                      </span>
                    </div>
                  )}
                </div>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-semibold ${
                    pkg.popular
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-800 hover:bg-gray-900 text-white'
                  } transition-colors duration-300`}
                >
                  {pkg.cta}
                </button>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                <FaShippingFast className="text-green-600" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                <p className="text-sm text-gray-600">Across Nigeria</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                <FaShieldAlt className="text-green-600" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">1 Year Warranty</h4>
                <p className="text-sm text-gray-600">Free replacements</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                <svg className="text-green-600 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">30-Day Returns</h4>
                <p className="text-sm text-gray-600">No questions asked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;