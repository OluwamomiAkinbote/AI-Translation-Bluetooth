import React from 'react';
import { FaBluetooth, FaBatteryFull, FaVolumeUp, FaHeadphones, FaMicrochip } from 'react-icons/fa';

const Specifications = () => {
  const specs = [
    {
      icon: <FaMicrochip className="text-blue-500" size={20} />,
      category: "Model & Design",
      items: [
        { name: "Model", value: "YYK-Q39 AI translation headset" },
        { name: "Color Options", value: "Black, White" },
        { name: "Material", value: "ABS+PC" },
        { name: "Product Size", value: "90.00×60.00×30.00mm/3.54×2.36×1.18inch" }
      ]
    },
    {
      icon: <FaBluetooth className="text-purple-500" size={20} />,
      category: "Connectivity",
      items: [
        { name: "Bluetooth Version", value: "V5.4" },
        { name: "Communication Distance", value: "≥10 meters" },
        { name: "Frequency Characteristics", value: "2.400GHz-2.480GHz" },
        { name: "Compatibility", value: "Translation headset, playback device with Bluetooth function" }
      ]
    },
    {
      icon: <FaBatteryFull className="text-green-500" size={20} />,
      category: "Battery & Charging",
      items: [
        { name: "Battery Capacity (Headphone)", value: "40 mAh" },
        { name: "Battery Capacity (Charging Case)", value: "300 mAh" },
        { name: "Talk Time", value: "8 hours" },
        { name: "Total Talk Time with Case", value: "60 hours" },
        { name: "Charging Time", value: "1.5 hours" },
        { name: "Charging Interface", value: "Type-C" }
      ]
    },
    {
      icon: <FaVolumeUp className="text-red-500" size={20} />,
      category: "Language & Features",
      items: [
        { name: "Supported Languages", value: "144 languages" },
        { name: "Translation Modes", value: "5 modes (Free Talk, Headphone+Phone, etc.)" },
        { name: "AI Features", value: "Real-time translation, AI assistant" }
      ]
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium engineering meets cutting-edge AI technology for seamless communication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-lg shadow-sm mr-4">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{spec.category}</h3>
              </div>
              
              <div className="space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start pb-3 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-700 font-medium">{item.name}:</span>
                    <span className="text-gray-900 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table for Mobile */}
        <div className="mt-12 md:hidden">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                { name: "Model", value: "YYK-Q39 AI translation headset" },
                { name: "Supported Languages", value: "144 languages" },
                { name: "Colors", value: "Black, White" },
                { name: "Material", value: "ABS+PC" },
                { name: "Bluetooth Version", value: "V5.4" },
                { name: "Range", value: "≥10 meters" },
                { name: "Battery (Headphones)", value: "40 mAh" },
                { name: "Battery (Case)", value: "300 mAh" },
                { name: "Talk Time", value: "8 hours" },
                { name: "Total Time with Case", value: "60 hours" },
                { name: "Charging Time", value: "1.5 hours" },
                { name: "Charging Port", value: "Type-C" },
                { name: "Product Size", value: "90.00×60.00×30.00mm" }
              ].map((item, index) => (
                <div key={index} className="p-4 flex justify-between">
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <span className="text-gray-900 text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;