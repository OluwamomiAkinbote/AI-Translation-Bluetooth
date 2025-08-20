'use client';
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Headphones, 
  Bot, 
  Zap, 
  ChevronLeft, 
  ChevronRight,
  Volume2,
  Mic,
  Users,
  Star,
  CheckCircle,
  Play,
  Shield,
  Clock,
  Award,
  Truck,
  X
} from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [bannerVisible, setBannerVisible] = useState(true);

  // Placeholder images - replace with actual product images
  const images = [
    {
      src: "/images/AI-Earbud-1.jpg",
      alt: "AI Translation Earbuds - Premium Design",
    },
    {
      src: "/images/AI-Earbud-21.jpg",
      alt: "Real-time translation in action",
    },
    {
      src: "/images/AI-Earbud-10.jpg",
      alt: "144 languages supported",
    },
    {
      src: "/images/AI-Earbud-11.jpg",
      alt: "Professional business communication",
    },
    {
      src: "/images/AI-Earbud-13 (1).jpg",
      alt: "Superior audio quality",
    },
    {
      src: "/images/AI-Earbud-13.jpg",
      alt: "Superior audio quality",
    },
    {
      src: "/images/AI-Earbud-14.jpg",
      alt: "Superior audio quality",
    },
    {
      src: "/images/AI-Earbud-15.jpg",
      alt: "Superior audio quality",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, images.length]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBuyNowClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* High-Converting Banner */}
      {bannerVisible && (
        <div className="bg-gradient-to-r from-red-500 via-pink-500 to-red-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>
          
          <div className="relative z-10 px-4 py-3 sm:py-4">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                  <span className="text-yellow-200 font-bold text-sm sm:text-base">🔥 FLASH SALE ALERT!</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-white/30"></div>
                <span className="font-bold text-sm sm:text-base">
                  Limited Time: <span className="text-yellow-300">40% OFF</span> All AI Translation Earbuds!
                </span>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-1 text-sm font-medium">
                  <Clock className="w-4 h-4 text-yellow-300" />
                  <span>Ends Soon!</span>
                </div>
                <button 
                  onClick={handleBuyNowClick}
                  className="bg-white text-red-600 hover:bg-yellow-50 font-bold py-2 px-4 sm:px-6 rounded-full text-sm transition-all transform hover:scale-105 shadow-lg border-2 border-white"
                >
                  Claim Deal Now →
                </button>
                <button 
                  onClick={() => setBannerVisible(false)}
                  className="text-white/70 hover:text-white p-1 transition-colors"
                  aria-label="Close banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Professional Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-100/30 to-transparent rounded-full blur-3xl"></div>
        {/* Fixed the non-standard gradient class */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50/50 rounded-full blur-2xl" 
             style={{background: 'radial-gradient(circle, rgba(219, 234, 254, 0.5) 0%, transparent 70%)'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Side - Professional Image Gallery */}
          <div className="order-2 xl:order-1">
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-blue-100/50">
              {/* Main Image Display */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-100 to-blue-50 group">
                <img 
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwQzE0NC40NzcgMTAwIDEwMCAxNDQuNDc3IDEwMCAyMDBTMTQ0LjQ3NyAzMDAgMjAwIDMwMFMyOTcuNTIzIDI1NS41MjMgMjk3LjUyMyAyMDBTMjU1LjUyMyAxMDAgMjAwIDEwMFoiIGZpbGw9IiNFNUU3RUIiLz4KPHN2Zz4K';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all shadow-lg hover:shadow-xl border border-gray-200/50 group/btn"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover/btn:text-blue-600 transition-colors" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all shadow-lg hover:shadow-xl border border-gray-200/50 group/btn"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover/btn:text-blue-600 transition-colors" />
                </button>
                

                {/* Auto-play indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-gray-600 border border-gray-200/50">
                  {currentImage + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center gap-2 sm:gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImage(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      currentImage === index 
                        ? 'border-blue-500 ring-2 ring-blue-200 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    aria-label={`View ${image.title}`}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjE2IiBmaWxsPSIjRTVFN0VCIi8+Cjwvc3ZnPgo=';
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Floating Accuracy Badge */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full font-bold text-sm shadow-xl border-2 border-white">
              <Star className="w-4 h-4 inline mr-1" />
              98% Accuracy
            </div>
          </div>

          {/* Right Side - Professional Content */}
          <div className="order-1 xl:order-2 space-y-6 sm:space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 px-4 py-2 rounded-full text-blue-700 text-sm font-semibold shadow-sm">
              <Award className="w-4 h-4" />
              Advanced AI Technology • Trusted Worldwide
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-gray-900">Break Every</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Language Barrier
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 max-w-2xl">
                Experience seamless global communication with our revolutionary AI translation earbuds. 
                Featuring <strong className="text-blue-600">98% translation accuracy</strong> across 
                <strong className="text-indigo-600"> 144+ languages</strong> and premium Hi-Fi audio quality.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Transform your business meetings, international travel, and cross-cultural relationships 
                with instant, professional-grade translation technology.
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Real-Time Translation */}
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-100 rounded-xl p-2 sm:p-3 group-hover:bg-blue-200 transition-colors">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Instant Translation</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Real-time bidirectional translation with advanced AI algorithms for natural conversations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Multiple Modes */}
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-purple-100 rounded-xl p-2 sm:p-3 group-hover:bg-purple-200 transition-colors">
                    <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Smart Modes</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Silent, Speaker, Conference modes adapt to any communication scenario.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hi-Fi Audio */}
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-green-100 rounded-xl p-2 sm:p-3 group-hover:bg-green-200 transition-colors">
                    <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Premium Audio</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      360° surround sound with crystal-clear call quality and noise cancellation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Ready */}
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-100 rounded-xl p-2 sm:p-3 group-hover:bg-orange-200 transition-colors">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Business Grade</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Professional quality for international meetings, conferences, and negotiations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4 sm:space-y-6">
              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={handleBuyNowClick}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl border border-blue-500/50 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Truck className="w-5 h-5" />
                    Order Now • Free Nigeria Delivery
                  </span>
                </button>
              </div>

              {/* Special Offer */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-500" />
                    <span className="text-red-600 font-bold text-lg">Limited Launch Offer:</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold text-xl">40% OFF</span>
                    <span className="text-gray-700 font-semibold">+ Free Shipping Nigeria!</span>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-gray-200">
                  <Truck className="w-4 h-4 text-green-500" />
                  <span className="font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-gray-200">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">6 Months Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-gray-200">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span className="font-medium">30-Day Returns</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-gray-200">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span className="font-medium">Quality Assured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default Hero;