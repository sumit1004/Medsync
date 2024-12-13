import React from 'react';
import { Smartphone, Watch, Bluetooth, Check } from 'lucide-react';

export default function DeviceConnectSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Connect Your Devices
          </h2>
          <p className="text-lg text-gray-600">
            Sync your health data seamlessly from your smartwatch and smartphone
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Device Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Watch className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">Smartwatch Connection</h3>
                  <p className="text-gray-600">Track heart rate, steps, sleep patterns and more</p>
                </div>
                <Bluetooth className="h-5 w-5 text-blue-600" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">Smartphone Integration</h3>
                  <p className="text-gray-600">Sync health apps and receive real-time notifications</p>
                </div>
                <Bluetooth className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Key Features
            </h3>
            <ul className="space-y-4">
              {[
                'Real-time health data synchronization',
                'Automatic activity tracking',
                'Sleep analysis and patterns',
                'Heart rate monitoring',
                'Exercise and workout tracking',
                'Medication reminders',
                'Health insights and recommendations'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Connect Your Devices
            <Bluetooth className="ml-2 h-5 w-5" />
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Compatible with most modern smartwatches and smartphones
          </p>
        </div>
      </div>
    </section>
  );
}
