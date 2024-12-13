import React from 'react';
import { Shield, Heart, Zap } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We prioritize the security and privacy of your health data above all else.',
  },
  {
    icon: Heart,
    title: 'Patient-Centric',
    description: 'Every feature we build focuses on improving patient care and experience.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously innovate to bring the latest technology to healthcare.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About HealthSync</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to revolutionize healthcare by providing a secure, centralized, 
            and AI-powered platform for managing health records.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900">{value.title}</h2>
              <p className="mt-2 text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Story</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2024, HealthSync emerged from a simple yet powerful idea: 
            healthcare data should be easily accessible to patients while remaining 
            completely secure. Our team of healthcare professionals and technology 
            experts came together to create a platform that bridges the gap between 
            patients and their health information.
          </p>
        </div>
      </div>
    </div>
  );
}