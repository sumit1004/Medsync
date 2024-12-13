import React from 'react';

interface LoginTabsProps {
  activeTab: 'patient' | 'hospital';
  onTabChange: (tab: 'patient' | 'hospital') => void;
}

export default function LoginTabs({ activeTab, onTabChange }: LoginTabsProps) {
  return (
    <div className="mb-8">
      <div className="sm:hidden">
        <select
          value={activeTab}
          onChange={(e) => onTabChange(e.target.value as 'patient' | 'hospital')}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        >
          <option value="patient">Patient Login</option>
          <option value="hospital">Hospital Login</option>
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => onTabChange('patient')}
              className={`${
                activeTab === 'patient'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Patient Login
            </button>
            <button
              onClick={() => onTabChange('hospital')}
              className={`${
                activeTab === 'hospital'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Hospital Login
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}