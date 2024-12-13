import React from 'react';
import { Fingerprint, Upload, Share2, Brain, Activity } from 'lucide-react';

const steps = [
  {
    icon: Fingerprint,
    title: 'Sign Up with Aadhaar',
    description: 'Link your Aadhaar card to create a secure account that verifies your identity.',
  },
  {
    icon: Upload,
    title: 'Centralize Your Health Records',
    description: 'Upload and manage all your medical records in one secure location.',
  },
  {
    icon: Share2,
    title: 'Secure Data Sharing',
    description: 'Share your records with healthcare providers securely and efficiently.',
  },
  {
    icon: Brain,
    title: 'Real-Time Health Insights',
    description: 'Get AI-driven health insights and personalized alerts based on your health data.',
  },
  {
    icon: Activity,
    title: 'Continuous Monitoring',
    description: 'Connect IoT devices for real-time health data tracking and analysis.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">How HealthSync Works</h1>
          <p className="mt-4 text-xl text-gray-600">
            Your journey to better health management starts here
          </p>
        </div>

        <div className="mt-16">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {index !== steps.length - 1 && (
                <div className="absolute left-16 top-20 h-full w-0.5 bg-blue-200" />
              )}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-6">
                  <h2 className="text-xl font-semibold text-gray-900">{step.title}</h2>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}