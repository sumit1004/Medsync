import React from 'react';
import { X, Bell } from 'lucide-react';

interface NotificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationPopup({ isOpen, onClose }: NotificationPopupProps) {
  if (!isOpen) return null;

  const handleNotificationClick = () => {
    // Handle notification permission request here
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // Show a test notification
          new Notification('MedSync Notifications Enabled', {
            body: 'You will now receive updates from MedSync',
            icon: '/favicon.ico'
          });
        }
      });
    }
    onClose();
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-[300px] border border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-blue-600" />
            <h3 className="text-sm font-semibold text-gray-900">Get Updates</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleNotificationClick}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Enable Notifications
          </button>
          
          <button
            onClick={() => window.location.href = '/how-it-works'}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            How it works
          </button>
        </div>
      </div>
    </div>
  );
}
