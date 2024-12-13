import React from 'react';
import DeviceConnectSection from '../components/home/DeviceConnectSection';
import { Shield, Brain, Clock, Users, Calendar, Star, Video, MessageSquare } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Secure Health Records',
      description: 'Your health data is encrypted and protected with industry-leading security standards.'
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: 'AI-Powered Insights',
      description: 'Get personalized health insights and recommendations powered by advanced AI.'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: '24/7 Access',
      description: 'Access your health records anytime, anywhere with our secure platform.'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'Family Health Management',
      description: 'Manage health records for your entire family in one secure place.'
    }
  ];

  const appointmentFeatures = [
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: 'Easy Scheduling',
      description: 'Book appointments with doctors instantly through our intuitive scheduling system.'
    },
    {
      icon: <Star className="h-6 w-6 text-blue-600" />,
      title: 'Top Specialists',
      description: 'Access a network of verified and experienced healthcare professionals.'
    },
    {
      icon: <Video className="h-6 w-6 text-blue-600" />,
      title: 'Virtual Consultations',
      description: 'Connect with doctors remotely through secure video consultations.'
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: 'Follow-up Care',
      description: 'Receive post-appointment care instructions and schedule follow-ups easily.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            Features & Capabilities
          </h1>
          <p className="text-xl text-center text-blue-100">
            Discover how MedSync revolutionizes your healthcare experience
          </p>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
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
      </div>

      {/* Doctor Appointment Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Book Appointments with Top Doctors
            </h2>
            <p className="text-xl text-gray-600">
              Connect with healthcare professionals seamlessly through our platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appointmentFeatures.map((feature, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors">
                <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
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
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Find and Book Doctors
            </button>
          </div>
        </div>
      </div>

      {/* Device Connect Section */}
      <DeviceConnectSection />
    </div>
  );
}
