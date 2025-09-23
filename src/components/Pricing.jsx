import React from 'react';
import { 
  FaCheck, 
  FaBox, 
  FaBoxes, 
  FaPallet, 
  FaShippingFast, 
  FaShieldAlt, 
  FaWhatsapp, 
  FaBriefcase, 
  FaPlaneDeparture, 
  FaShoppingCart, 
  FaBolt, 
  FaCreditCard, 
  FaPhoneAlt 
} from 'react-icons/fa';

const Pricing = () => {
  const singlePrice = 35000;
  const doublePrice = Math.round(singlePrice * 2 * 0.97); // 3% discount
  const triplePrice = Math.round(singlePrice * 3 * 0.94); // 6% discount
  
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
      popular: false
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const orderOnWhatsApp = (packageName, price) => {
    const phoneNumber = "+2348051230133";
    const message = `Hello! I want to order the ${packageName} AI Translation Earbuds for ${formatPrice(price)}. Please confirm availability and delivery process.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white" id="package">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nigerian-Focused Headline */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaBriefcase className="mr-2" /> Marketing in Nigeria
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Speak Any Language Like a Pro! 
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <span className="font-semibold text-green-600">No more language barrier!</span> Communicate with clients, 
            travel abroad, or do business internationally with our AI earbuds. 
            <span className="block mt-2 text-sm text-gray-500">
              <FaCheck className="inline text-green-500 mr-1" /> Perfect for Lagos business people | 
              <FaCheck className="inline text-green-500 mx-1" /> Great for travellers | 
              <FaCheck className="inline text-green-500 mx-1" /> Easy to use
            </span>
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-center">
          <p className="text-red-700 font-semibold flex items-center justify-center gap-2">
            <FaBolt /> LIMITED STOCK! Prices may increase soon due to high demand from Nigerian businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl border-2 ${
                pkg.popular 
                  ? 'border-green-500 transform scale-105 shadow-xl bg-white' 
                  : 'border-gray-200 shadow-md bg-white'
              } transition-all duration-300 hover:shadow-lg`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <FaBolt /> MOST POPULAR AMONG NIGERIANS
                </div>
              )}
              
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {pkg.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {pkg.name}
                </h3>
                
                <p className="text-gray-600 text-center mb-6 text-sm">
                  {pkg.description}
                </p>
                
                <div className="text-center mb-6 bg-gray-50 p-4 rounded-lg">
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
                        You save {formatPrice(pkg.savings)}!
                      </span>
                    </div>
                  )}
                  
                  {/* Per Unit Price for Multi-packs */}
                  {pkg.name !== "Single Pack" && (
                    <p className="text-xs text-gray-500 mt-1">
                      Only {formatPrice(Math.round(pkg.price / (pkg.name === "Double Pack" ? 2 : 3)))} per set
                    </p>
                  )}
                </div>
                
                {/* Dual CTA Buttons */}
                <div className="space-y-3">
                  <button 
                    onClick={() => orderOnWhatsApp(pkg.name, pkg.price)}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300"
                  >
                    <FaWhatsapp size={18} />
                    Order on WhatsApp
                  </button>
                  
                  <button 
                    onClick={scrollToContact}
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 text-sm"
                  >
                    Order Now
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nigerian-Specific Benefits */}
        <div className="mt-12 bg-green-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
            Why Nigerian Business People Love Our Earbuds:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                <FaBriefcase className="text-green-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-900">Business Meetings</h4>
              <p className="text-sm text-gray-600">Close deals with international clients without language barriers</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                <FaPlaneDeparture className="text-green-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-900">Travel Abroad</h4>
              <p className="text-sm text-gray-600">Navigate Dubai, China, Europe like a local speaker</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                <FaShoppingCart className="text-green-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-900">Import Business</h4>
              <p className="text-sm text-gray-600">Communicate directly with Chinese/Turkish suppliers</p>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                <FaShippingFast className="text-green-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                <p className="text-sm text-gray-600">Lagos, Abuja, Port Harcourt & Nationwide</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                <FaShieldAlt className="text-green-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">6 Months Warranty</h4>
                <p className="text-sm text-gray-600">Free replacements in Nigeria</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                <FaCreditCard className="text-green-600 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Pay on Delivery</h4>
                <p className="text-sm text-gray-600">Available in major cities</p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Quick Action */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm mb-4 flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-green-600" /> <strong>Need help choosing?</strong> Chat with us on WhatsApp:
          </p>
          <a 
            href="https://wa.me/08051230133" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp - 08051230133
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
