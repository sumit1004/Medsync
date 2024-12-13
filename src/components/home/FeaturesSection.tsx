import React from 'react';
import { Shield, Share2, Brain, Activity, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Data Storage',
    description: 'Your health records are encrypted and stored with military-grade security.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get personalized health recommendations powered by advanced AI.',
  },
  {
    icon: Share2,
    title: 'Seamless Sharing',
    description: 'Share your health records securely with healthcare providers.',
  },
  {
    icon: Activity,
    title: 'IoT Integration',
    description: 'Connect your health devices for real-time monitoring.',
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Access your health records anytime, anywhere.',
  },
];

export default function FeaturesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose HealthSync?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience healthcare management like never before
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}