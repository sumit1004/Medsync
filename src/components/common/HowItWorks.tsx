import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Link
        to="/how-it-works"
        className="flex items-center gap-2 bg-[#2563eb] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
      >
        <HelpCircle className="h-5 w-5" />
        <span>How it Works</span>
      </Link>
    </div>
  );
}
