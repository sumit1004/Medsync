import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DevelopersPopup from './DevelopersPopup';
import NotificationPopup from './NotificationPopup';

export default function HeroSection() {
  const [isDevelopersPopupOpen, setIsDevelopersPopupOpen] = useState(false);
  const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState(false);

  useEffect(() => {
    // Show developers popup when component mounts
    const hasShownDevelopersPopup = sessionStorage.getItem('developersPopupShown');
    if (!hasShownDevelopersPopup) {
      setIsDevelopersPopupOpen(true);
    }
  }, []);

  const handleDevelopersPopupClose = () => {
    setIsDevelopersPopupOpen(false);
    // Store that the popup has been shown for this session
    sessionStorage.setItem('developersPopupShown', 'true');
    // Show notification popup after developers popup closes
    setIsNotificationPopupOpen(true);
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/0c/79/d8/0c79d81a526cfe5572c342693efe6442.gif')]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Revolutionize Your</span>
            <span className="block text-blue-600">Healthcare Experience</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600">
            Secure, Accessible, and AI-Powered Health Records at your fingertips.
            Take control of your health journey with HealthSync.
          </p>
          
          <div className="mt-10 flex gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign Up with Aadhaar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/learn-more"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <DevelopersPopup 
        isOpen={isDevelopersPopupOpen} 
        onClose={handleDevelopersPopupClose} 
      />
      <NotificationPopup 
        isOpen={isNotificationPopupOpen} 
        onClose={() => setIsNotificationPopupOpen(false)} 
      />
    </div>
  );
}