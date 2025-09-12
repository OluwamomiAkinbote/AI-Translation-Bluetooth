import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaUser, FaWhatsapp, FaPhone, FaMapMarker, FaBox } from 'react-icons/fa';

function Contact() {
  const [state, handleSubmit] = useForm("xzzvnbwp");
  const [selectedColor, setSelectedColor] = useState('white');
  const [selectedPackage, setSelectedPackage] = useState('single');

  const packagePrices = {
    single: 35000,
    double: 67900,
    triple: 98700
  };

  if (state.succeeded) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center max-w-md w-full mx-4">
          <div className="bg-green-100 text-green-600 rounded-full p-3 inline-flex items-center justify-center mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">Order Received!</h3>
          <p className="text-green-600 mb-4">
            Thank you for your order. We'll contact you shortly on WhatsApp to confirm your order details.
          </p>
          <p className="text-gray-600">
            Order Reference: #ORD-{Math.floor(1000 + Math.random() * 9000)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-2xl mx-4">
        <div className="bg-gray-900 text-white py-4 px-6 text-center">
          <h2 className="text-xl font-semibold">Place Your Order</h2>
          <p className="text-gray-300 text-sm">Complete the form below to reserve your AI translation earbuds</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="pl-10 block w-full rounded-md border border-gray-300 py-2 md:py-3 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your full name"
              />
            </div>
            <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp Number *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaWhatsapp className="h-5 w-5 text-green-500" />
              </div>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                className="pl-10 block w-full rounded-md border border-gray-300 py-2 md:py-3 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="e.g., 08012345678"
              />
            </div>
            <ValidationError prefix="WhatsApp" field="whatsapp" errors={state.errors} />
          </div>

          {/* Other Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Other Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="pl-10 block w-full rounded-md border border-gray-300 py-2 md:py-3 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Optional alternative number"
              />
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Address *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarker className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="address"
                name="address"
                required
                rows={3}
                className="pl-10 block w-full rounded-md border border-gray-300 py-2 md:py-3 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Full address including state and city"
              />
            </div>
            <ValidationError prefix="Address" field="address" errors={state.errors} />
          </div>

          {/* Color Variation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color Variation *
            </label>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <div className="relative flex-1">
                <input
                  className="sr-only"
                  type="radio"
                  id="color-white"
                  name="color"
                  value="white"
                  checked={selectedColor === 'white'}
                  onChange={() => setSelectedColor('white')}
                  required
                />
                <label
                  htmlFor="color-white"
                  className={`flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer w-full ${
                    selectedColor === 'white'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="w-5 h-5 bg-white border border-gray-300 rounded-full mr-2"></div>
                  <span>White</span>
                </label>
              </div>
              
              <div className="relative flex-1">
                <input
                  className="sr-only"
                  type="radio"
                  id="color-black"
                  name="color"
                  value="black"
                  checked={selectedColor === 'black'}
                  onChange={() => setSelectedColor('black')}
                  required
                />
                <label
                  htmlFor="color-black"
                  className={`flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer w-full ${
                    selectedColor === 'black'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="w-5 h-5 bg-gray-900 border border-gray-300 rounded-full mr-2"></div>
                  <span>Black</span>
                </label>
              </div>
            </div>
            <ValidationError prefix="Color" field="color" errors={state.errors} />
          </div>

          {/* Package Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Package Selection *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { id: 'single', name: 'Single', price: 35000, desc: '1 set' },
                { id: 'double', name: 'Double', price: 67900, desc: '2 sets (Save ₦7,000)' },
                { id: 'triple', name: 'Family', price: 98700, desc: '3 sets (Save ₦15,750)' }
              ].map((pkg) => (
                <div key={pkg.id} className="relative">
                  <input
                    className="sr-only"
                    type="radio"
                    id={`package-${pkg.id}`}
                    name="package"
                    value={pkg.id}
                    checked={selectedPackage === pkg.id}
                    onChange={() => setSelectedPackage(pkg.id)}
                    required
                  />
                  <label
                    htmlFor={`package-${pkg.id}`}
                    className={`flex flex-col p-3 border-2 rounded-lg cursor-pointer h-full text-center ${
                      selectedPackage === pkg.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-1">
                      <FaBox className="text-gray-600 mr-1" size={14} />
                      <span className="font-medium text-sm">{pkg.name}</span>
                    </div>
                    <div className="mt-auto">
                      <div className="text-md font-bold text-green-600">₦{pkg.price.toLocaleString('en-NG')}</div>
                      <div className="text-xs text-gray-500 mt-1">{pkg.desc}</div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
            <ValidationError prefix="Package" field="package" errors={state.errors} />
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2 text-center">Order Summary</h3>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{selectedPackage === 'single' ? 'Single Pack' : selectedPackage === 'double' ? 'Double Pack' : 'Family Pack'} ({selectedColor})</span>
              <span>₦{packagePrices[selectedPackage].toLocaleString('en-NG')}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between font-semibold text-gray-900">
              <span>Total</span>
              <span>₦{packagePrices[selectedPackage].toLocaleString('en-NG')}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {state.submitting ? 'Processing...' : 'Complete Order'}
          </button>

          <p className="text-xs text-gray-500 text-center">
            By completing this order, you agree to our terms and conditions. We'll contact you on WhatsApp to confirm your order details.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;