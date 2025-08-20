'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

const WebsiteBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Banner images - replace these with your actual image paths
  const banners = [
    {
      id: 1,
      image: "/images/AI-Earbud-slide-banner.jpg",
      alt: "Summer Sale - Up to 50% Off",
      link: "/summer-sale"
    },
    {
      id: 2,
      image: "/images/AI-Earbud-slide-banner-1.jpg",
      alt: "New Collection Available Now",
      link: "/new-arrivals"
    },
    {
      id: 3, // Fixed duplicate ID
      image: "/images/AI-Earbud-slide-banner-2.jpg",
      alt: "Free Shipping on Orders Over $50",
      link: "/shipping-info"
    },
    {
      id: 4, // Changed from duplicate ID 3 to 4
      image: "/images/AI-Earbud-slide-banner-3.jpg",
      alt: "Free Shipping on Orders Over $50",
      link: "/shipping-info"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      const interval = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isVisible, banners.length]);

  const nextBanner = () => {
    setIsAutoPlaying(false);
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setIsAutoPlaying(false);
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-white border-b border-gray-200">
      <div className="w-full">
        {/* Banner Container - Changed to responsive aspect ratio */}
        <div className="relative w-full aspect-[1464/600] overflow-hidden">
          {banners.map((banner, index) => (
            <a 
              key={banner.id}
              href={banner.link}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                className="object-contain" // Changed from object-cover to object-contain
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1464px"
                onError={(e) => {
                  // Fallback in case image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* Fallback if image doesn't load */}
              <div 
                className="hidden w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold"
              >
                {banner.alt}
              </div>
            </a>
          ))}
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevBanner}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 rounded-full p-1 transition-colors"
            aria-label="Previous banner"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={nextBanner}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 rounded-full p-1 transition-colors"
            aria-label="Next banner"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
          
          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-4 bg-black/20 hover:bg-black/30 rounded-full p-1 transition-colors"
            aria-label="Close banner"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {banners.map((banner, index) => (
              <button
                key={banner.id}
                onClick={() => {
                  setCurrentBanner(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentBanner === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBanner;