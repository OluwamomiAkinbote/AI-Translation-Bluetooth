"use client";

import Image from "next/image";
import { CheckCircle, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { useState } from "react";

const Features = () => {
  const features = [
    {
      title: "Face-to-Face Real-Time Translation",
      desc: [
        "Talk in English, they hear it in their language instantly",
        "They reply in their language, you hear it in English immediately",
        "No delay, no stress, no awkward hand signs — just normal talk",
        "Perfect for travel, business, making new friends, or learning a new language",
      ],
      images: ["/images/AI-Earbud-11 (1).jpg", "/images/AI-08.jpg"],
    },
    {
      title: "Free Recording-to-Text Conversion",
      desc: [
        "Record conversations, lectures, or meetings — and get them in text instantly",
        "Save, read, or review later without writing notes",
        "Perfect for business, classes, interviews, or study",
        "Speak freely, it writes everything for you — no pen needed",
      ],
      images: ["/images/AI-08.jpg", "/images/AI-018.jpg"],
    },
    {
      title: "3-in-1 Functionality + HD Audio",
      desc: [
        "Translate, listen to music, and make calls with one device",
        "Big speaker + 4 powerful microphones = clear sound every time",
        "Great for work, play, or travel",
      ],
      images: ["/images/AI-018.jpg", "/images/AI-Earbud-15.jpg"],
    },
    {
      title: "Open-Ear Comfort & Waterproof",
      desc: [
        "Super light, only 8g each",
        "Waterproof (IPX7) — safe in rain or sweat",
        "Soft silicone hooks for secure fit",
        "Comfortable for workouts, travel, and daily use",
      ],
      images: ["/images/AI-014.jpg", "/images/AI-Earbud-13.jpg", "/images/AI-013.jpg"],
    },
    {
      title: "60 Hours Battery Life",
      desc: [
        "10 hours nonstop play per charge",
        "With case = 60 hours total playtime",
        "5 minutes quick charge = 1 hour of use",
        "Enjoy music, calls, and translation all day without worry",
      ],
      images: ["/images/AI-06.jpg", "/images/AI-015.jpg"],
    },
    {
      title: "Smart Touch Control",
      desc: [
        "Tap to control music or calls easily",
        "Built-in LED screen to see battery status",
        "AI-powered mic reduces background noise",
        "Always clear when speaking",
      ],
      images: ["/images/AI-019.jpg"],
    },
    {
      title: "Bluetooth 5.4 + HIFI Bass",
      desc: [
        "Latest Bluetooth 5.4 chip = faster connection, less battery use",
        "No delays, no interference",
        "AI Bass for deep music and smooth calls",
        "Sounds rich, powerful, and clear",
      ],
      images: ["/images/AI-02.jpg"],
    },
  ];

  const [activeImageIndexes, setActiveImageIndexes] = useState(
    features.map(() => 0)
  );

  const handleNextImage = (featureIndex) => {
    setActiveImageIndexes((prev) => {
      const newIndexes = [...prev];
      const nextIndex =
        (newIndexes[featureIndex] + 1) % features[featureIndex].images.length;
      newIndexes[featureIndex] = nextIndex;
      return newIndexes;
    });
  };

  const handlePrevImage = (featureIndex) => {
    setActiveImageIndexes((prev) => {
      const newIndexes = [...prev];
      const prevIndex =
        (newIndexes[featureIndex] - 1 + features[featureIndex].images.length) %
        features[featureIndex].images.length;
      newIndexes[featureIndex] = prevIndex;
      return newIndexes;
    });
  };

  const scrollToPackage = () => {
    const section = document.getElementById("package");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
        Here's Why Nigerians Are Loving These AI Translator Earbuds
      </h2>

      <div className="grid gap-16 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start gap-6">
            {/* Image container */}
            <div className="relative w-full h-80 lg:h-auto overflow-hidden">
              <Image
                src={feature.images[activeImageIndexes[index]]}
                alt={feature.title}
                width={800}
                height={600}
                className="object-cover w-full h-auto"
                sizes="(max-width: 768px) 100vw, 100vw"
              />

              {/* Navigation */}
              {feature.images.length > 1 && (
                <>
                  <button
                    onClick={() => handlePrevImage(index)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => handleNextImage(index)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                    {activeImageIndexes[index] + 1} / {feature.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Text content */}
            <div className="w-full">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 px-0 py-2 bg-gradient-to-r from-blue-50 to-blue-100 pl-4 border-l-4 border-blue-500">
                {feature.title}
              </h3>
              <ul className="space-y-3 text-gray-800 text-lg lg:text-xl leading-relaxed">
                {feature.desc.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA button at the bottom */}
      <div className="mt-16 flex justify-center">
        <button
          onClick={scrollToPackage}
          className="flex items-center gap-3 px-12 py-5 text-2xl font-bold text-white bg-red-600 hover:bg-red-700 transition-colors rounded-lg"
        >
          <ShoppingBag className="w-7 h-7" />
          See Packages & Order Now
        </button>
      </div>
    </section>
  );
};

export default Features;
