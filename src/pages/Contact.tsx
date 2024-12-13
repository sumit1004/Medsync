import React from 'react';
import ContactMap from '../components/contact/ContactMap';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">
            Find nearby hospitals and get in touch with us
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Nearby Hospitals</h2>
          <ContactMap />
        </div>
      </div>
    </div>
  );
}
