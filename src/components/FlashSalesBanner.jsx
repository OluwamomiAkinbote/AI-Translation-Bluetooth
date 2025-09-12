import { useState, useEffect } from 'react';

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

  return (
    <div className="sticky top-0 z-50 bg-red-700 text-white p-2 md:p-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3">
        
        {/* Sale Badge + Title */}
        <div className="flex items-center gap-2">
          <div className="bg-white text-red-700 font-bold py-0.5 px-2 uppercase text-[10px] md:text-sm">
            Flash Sale
          </div>
          <h2 className="hidden md:block text-xs md:text-lg font-semibold">
            Limited Time Offer
          </h2>
        </div>

        {/* Timer */}
        <div className="flex items-center bg-red-800 py-1 px-2 text-[11px] md:text-base">
          <span className="font-mono font-semibold tracking-wide">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>

        {/* Scrolling Offers on small screen */}
        <div className="overflow-hidden relative w-full md:w-auto md:flex md:items-center md:gap-3 text-[11px] md:text-sm">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-6">🚚 Fast Delivery Nationwide</span>
            <span className="mx-6">💳 Pay Only When Delivered</span>
            <span className="mx-6">🔥 Limited Stock, Don’t Miss Out</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => (window.location.href = '#package')}
          className="bg-white text-red-700 font-bold py-1 px-3 uppercase hover:bg-gray-200 transition-colors text-[11px] md:text-sm"
        >
          Claim Deal 
        </button>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default FlashSalesBanner;
