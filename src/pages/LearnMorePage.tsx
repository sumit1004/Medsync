import React from 'react';
import { ArrowLeft, Shield, Brain, Share2, Activity, Clock, Heart, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'Your health data is protected with state-of-the-art encryption and security measures, ensuring complete privacy and confidentiality.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Health Insights',
    description: 'Advanced artificial intelligence analyzes your health data to provide personalized recommendations and early warning signs.'
  },
  {
    icon: Share2,
    title: 'Seamless Data Sharing',
    description: 'Share your health records securely with healthcare providers, ensuring coordinated and efficient care.'
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Connect your health devices for continuous monitoring and instant updates about your health status.'
  },
  {
    icon: Clock,
    title: '24/7 Accessibility',
    description: 'Access your health records anytime, anywhere, from any device with our secure platform.'
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Better Health Outcomes',
    description: 'Comprehensive health tracking and AI insights lead to better health decisions and improved outcomes.'
  },
  {
    icon: Users,
    title: 'Enhanced Patient Care',
    description: 'Healthcare providers can access complete patient history, enabling more informed and effective treatment.'
  },
  {
    icon: Building2,
    title: 'Streamlined Healthcare',
    description: 'Reduce administrative overhead and improve efficiency in healthcare delivery.'
  }
];

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover HealthSync
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HealthSync is revolutionizing healthcare management by providing a secure, 
            intelligent platform for managing your health records.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who trust HealthSync with their health records
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign Up Now
          </Link>
        </section>
      </div>
    </div>
  );
}