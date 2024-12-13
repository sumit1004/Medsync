import React from 'react';
import ContactMap from '../components/contact/ContactMap';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-8 sm:pt-32 sm:pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Contact Us</h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Find nearby hospitals and get in touch with us
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-600">+91 1234567890</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600">contact@medsync.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-gray-600">Raipur, Chhattisgarh</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Find Nearby Hospitals</h2>
          <div className="h-[400px] sm:h-[500px]">
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
}