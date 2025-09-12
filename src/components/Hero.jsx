'use client';
import React from 'react';
import { Globe, Bot, Headphones, Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleBuyNowClick = () => {
    const packageSection = document.getElementById('package');
    if (packageSection) {
      packageSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        
        {/* Nigerian-focused Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
          No More Language Wahala –{" "}
          <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Speak 144 Languages Instantly
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
          Whether you dey travel, attend business meetings, or learn new things, 
          these AI earbuds give you smooth real-time translation, 
          sweet audio for music, and clear calls — all in one.
        </p>

        {/* Feature Bullets with Icons */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-800 max-w-3xl mx-auto text-left mt-10">
          <li className="flex items-center gap-4 text-lg sm:text-xl p-3 rounded-lg hover:bg-white/50 transition-colors">
            <div className="bg-blue-100 p-2 rounded-full">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <span className="font-medium">Translate instantly in 144+ languages</span>
          </li>
          <li className="flex items-center gap-4 text-lg sm:text-xl p-3 rounded-lg hover:bg-white/50 transition-colors">
            <div className="bg-indigo-100 p-2 rounded-full">
              <Bot className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="font-medium">AI-powered accuracy for smooth conversations</span>
          </li>
          <li className="flex items-center gap-4 text-lg sm:text-xl p-3 rounded-lg hover:bg-white/50 transition-colors">
            <div className="bg-purple-100 p-2 rounded-full">
              <Headphones className="w-6 h-6 text-purple-600" />
            </div>
            <span className="font-medium">Enjoy music with crystal-clear audio</span>
          </li>
          <li className="flex items-center gap-4 text-lg sm:text-xl p-3 rounded-lg hover:bg-white/50 transition-colors">
            <div className="bg-green-100 p-2 rounded-full">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <span className="font-medium">Take calls on the go with clear sound</span>
          </li>
        </ul>

        {/* CTA */}
        <div className="mt-10">
          <button 
            onClick={handleBuyNowClick}
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-5 px-10 rounded-xl text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
          >
            Order Now • Free Delivery
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-600 mt-4">30-Day Money Back Guarantee</p>
        </div>
      </div>

      {/* Images Section */}
      <div className="max-w-6xl mx-auto mt-16 flex flex-col sm:flex-row gap-8">
        <div className="flex-1 relative">
          <img 
            src="/images/AI-Earbud-1.jpg" 
            alt="AI Earbud sleek design" 
            className="w-full h-auto rounded-2xl shadow-xl object-cover transform hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
            <p className="text-sm font-medium text-gray-900">Sleek & Modern Design</p>
          </div>
        </div>
        <div className="flex-1 relative">
          <img 
            src="/images/AI-Earbud-21.jpg" 
            alt="AI Earbud in use" 
            className="w-full h-auto rounded-2xl shadow-xl object-cover transform hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
            <p className="text-sm font-medium text-gray-900">Perfect Fit for All-Day Use</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;