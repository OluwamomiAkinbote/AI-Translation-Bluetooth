import { useState, useEffect } from "react";
import { Zap, Truck, CreditCard, Star } from "lucide-react";

const FlashSalesBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1;
        const newMinutes =
          newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;

        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToPackage = () => {
    const packageSection = document.getElementById("package");
    if (packageSection) {
      packageSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white p-2 md:p-3 shadow-lg">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Flash Sale + Timer */}
        <div className="flex items-center justify-between mb-1.5 md:mb-2">
          {/* Flash Sale Badge */}
          <div className="flex items-center gap-1.5">
            <div className="bg-white text-red-700 font-bold py-1 px-2.5 md:py-1.5 md:px-3.5 rounded-lg uppercase text-xs md:text-sm shadow-md border-2 border-white/20 flex items-center gap-1">
              <Zap size={14} className="text-red-700" />
              Flash Sale
            </div>
            <span className="hidden sm:inline text-xs md:text-sm font-medium">
              Limited Time Offer
            </span>
          </div>

          {/* Timer */}
          <div className="bg-black/20 py-1 px-2.5 md:py-1.5 md:px-3.5 rounded-lg border border-white/10">
            <div className="flex items-center gap-1 font-mono text-xs md:text-lg font-bold">
              <span className="bg-red-800/80 py-0.5 px-1.5 md:py-1 md:px-2 rounded">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span>:</span>
              <span className="bg-red-800/80 py-0.5 px-1.5 md:py-1 md:px-2 rounded">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span>:</span>
              <span className="bg-red-800/80 py-0.5 px-1.5 md:py-1 md:px-2 rounded">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Middle Row: Scrolling Animation */}
        <div className="mb-1.5 md:mb-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-center flex items-center gap-6">
            <span className="flex items-center gap-1 text-xs md:text-base">
              <Truck size={14} className="text-yellow-300" /> Free Nationwide
              Delivery
            </span>
            <span className="flex items-center gap-1 text-xs md:text-base">
              <CreditCard size={14} className="text-yellow-300" /> Secure Payment
              & Easy Returns
            </span>
            <span className="flex items-center gap-1 text-xs md:text-base">
              <Star size={14} className="text-yellow-300" /> Limited Stock -
              Selling Fast
            </span>
          </div>
        </div>

        {/* Bottom Row: CTA Button */}
        <div className="text-center">
          <button
            onClick={scrollToPackage}
            className="bg-white text-red-700 font-bold py-1.5 px-4 md:py-2 md:px-6 rounded-lg uppercase text-sm md:text-base hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform w-full max-w-xs border-2 border-yellow-400"
          >
            View Packages
          </button>
          <p className="text-xs mt-0.5 text-white/80 hidden sm:block">
            Offer ends when timer hits zero!
          </p>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
          padding-left: 100%;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default FlashSalesBanner;
