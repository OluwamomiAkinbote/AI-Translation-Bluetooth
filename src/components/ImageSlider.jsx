'use client';

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCircle, FaDotCircle } from 'react-icons/fa';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Navigation items
  const navItems = [
    "Live recording",
    "Face-to-face translation 1", 
    "Face-to-face translation 2",
    "Fingerprint",
    "Synchronize"
  ];

  // Different images for desktop and mobile
  const desktopImages = [
    "/images/AI-live-recording.jpg",
    "/images/AI-face-to-face-translation.jpg",
    "/images/AI-face-to-face-translation-2.jpg",
    "/images/AI-finger-print.jpg",
    "/images/AI-Synchronise.jpg"
  ];

  const mobileImages = [
    "/images/AI-live-recording-sm.jpeg",
    "/images/AI-face-to-face-transaltion-sm.jpeg",
    "/images/AI-face-to-face-translation-2-sm.jpeg",
    "/images/AI-finger-print-sm.jpeg",
    "/images/AI-Synchronise-sm.jpeg"
  ];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % navItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [navItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % navItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + navItems.length) % navItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto md:h-[500px] h-[450px] overflow-hidden">
      {/* Professional Navigation Header - Visible on large screens */}
      <div className="absolute top-0 left-0 right-0 z-20 hidden md:flex justify-center pt-6">
        <div className="flex space-x-1 bg-white bg-opacity-90 px-4 py-2 shadow-md">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`px-4 py-2 transition-all duration-300 text-sm font-medium border-b-2 ${
                currentSlide === index 
                  ? 'text-green-600 border-green-600' 
                  : 'text-gray-600 border-transparent hover:text-green-500 hover:border-green-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Slides */}
      <div className="relative w-full h-full">
        {isMobile ? (
          // Mobile images
          mobileImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={navItems[index]}
                className="w-full h-full object-contain"
              />
            </div>
          ))
        ) : (
          // Desktop images
          desktopImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={navItems[index]}
                className="w-full h-full object-cover"
              />
            </div>
          ))
        )}
      </div>

      {/* Navigation Arrows - Professional Style */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 text-gray-800 p-3 hover:bg-opacity-100 hover:text-green-600 transition-all shadow-md"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 text-gray-800 p-3 hover:bg-opacity-100 hover:text-green-600 transition-all shadow-md"
        aria-label="Next slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Indicator - Professional Style */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center space-x-3">
        {navItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`p-1 transition-all ${
              currentSlide === index ? 'transform scale-125' : ''
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index ? (
              <FaDotCircle size={16} className="text-green-600" />
            ) : (
              <FaCircle size={16} className="text-gray-500 hover:text-green-400" />
            )}
          </button>
        ))}
      </div>

      {/* Mobile Navigation - Professional Style */}
      <div className="absolute bottom-16 left-0 right-0 z-10 md:hidden">
        <div className="flex justify-center">
          <div className="bg-white bg-opacity-90 px-4 py-2 shadow-md">
            <div className="text-gray-800 text-center font-medium text-sm">
              {navItems[currentSlide]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;