import React from 'react';
import { FaGooglePlay, FaAppStore, FaBluetooth, FaMobile, FaComments } from 'react-icons/fa';
import { FiDownload, FiBluetooth, FiSettings, FiMessageSquare } from 'react-icons/fi';

const EasySetup = () => {
  const steps = [
    {
      icon: <FiDownload className="text-white" size={24} />,
      title: "Step 1: Download the Ear Dance App",
      description: "Go to your Google Play Store (for Android) or Apple App Store (for iPhone). Search for 'Ear Dance' and click Download.",
      highlights: [
        "The app is 100% free — no credit card, no subscription, no hidden charges."
      ],
      stores: [
        { icon: <FaGooglePlay size={20} />, name: "Google Play" },
        { icon: <FaAppStore size={20} />, name: "App Store" }
      ]
    },
    {
      icon: <FiBluetooth className="text-white" size={24} />,
      title: "Step 2: Pair Your Earbuds via Bluetooth",
      description: "Once the earbuds are out of the case, go to your phone's Bluetooth settings. Look for the name of the earbuds and tap to connect.",
      highlights: [
        "No QR code needed",
        "No 'binding code' issues — it connects automatically and instantly"
      ]
    },
    {
      icon: <FiSettings className="text-white" size={24} />,
      title: "Step 3: Open the App and Select Your Languages",
      description: "Inside the Ear Dance app, choose your main language (e.g. English) and the language you want to translate to (e.g. French, Spanish, Mandarin).",
      highlights: [
        "You can switch languages anytime",
        "The app supports 144 languages"
      ]
    },
    {
      icon: <FiMessageSquare className="text-white" size={24} />,
      title: "Step 4: Start Talking!",
      description: "Use any of the 3 smart modes for seamless communication:",
      modes: [
        {
          name: "Phone + Earbud Mode",
          description: "One person wears an earbud, the other speaks into the phone"
        },
        {
          name: "Binaural Mode", 
          description: "Each person wears one earbud and hears the translation directly"
        },
        {
          name: "Phone Speaker Mode",
          description: "Translations play out loud for everyone to hear"
        }
      ],
      highlights: [
        "Speak naturally. The app detects sentence breaks and translates in real time.",
        "Works great in business meetings, airports, markets, classrooms, and daily life."
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Easy Setup — No Binding Code, No Stress
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get started with your AI translation earbuds in minutes, not hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-600 rounded-full p-3 mr-4 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    
                    {/* App Stores for Step 1 */}
                    {step.stores && (
                      <div className="flex space-x-4 mb-4">
                        {step.stores.map((store, i) => (
                          <div key={i} className="flex items-center bg-gray-100 px-3 py-2 rounded">
                            {store.icon}
                            <span className="ml-2 text-sm font-medium">{store.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Modes for Step 4 */}
                    {step.modes && (
                      <div className="mb-4">
                        {step.modes.map((mode, i) => (
                          <div key={i} className="mb-2 last:mb-0">
                            <h4 className="font-medium text-gray-900">{mode.name}</h4>
                            <p className="text-sm text-gray-600">{mode.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Highlights */}
                    <ul className="space-y-2">
                      {step.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Visual Demo */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              See It In Action
            </h3>
            
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center p-6">
                <FaMobile className="text-gray-400 mx-auto mb-4" size={48} />
                <p className="text-gray-500">App demonstration video</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <FaBluetooth className="text-green-600 mx-auto mb-2" size={24} />
                <p className="text-sm font-medium text-gray-900">Instant Pairing</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <FaComments className="text-blue-600 mx-auto mb-2" size={24} />
                <p className="text-sm font-medium text-gray-900">Real-time Translation</p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Pro Tip:</h4>
              <p className="text-sm text-gray-700">
                For best results, speak clearly and in complete sentences. The AI works best with natural speech patterns rather than single words.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySetup;