import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function NavLink({ to, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block w-full md:w-auto text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors rounded-lg md:rounded-none ${
        isActive ? 'bg-blue-50 md:bg-transparent text-blue-600 md:text-gray-900' : ''
      } hover:bg-gray-50 md:hover:bg-transparent`}
    >
      {children}
    </Link>
  );
}