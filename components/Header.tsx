
import React from 'react';

const LogoIcon: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24"
      stroke="#2563EB"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 44C24 44 32 32 32 24C32 16 24 4 24 4"
      stroke="url(#grad1)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
     <path
      d="M4 24C12 24 18 30 24 32"
      stroke="#F97316"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center pb-4 border-b border-slate-700">
      <div className="flex items-center gap-4">
        <LogoIcon />
        <h1 className="text-2xl sm:text-3xl font-black tracking-tighter">
          <span style={{ color: '#2563EB' }}>GELECEK</span>
          <span style={{ color: '#F97316' }}>EVİMDE</span>
        </h1>
      </div>
      <p className="text-slate-400 mt-2 sm:mt-0 text-sm text-center sm:text-right">
        AI-Powered Image Editor
      </p>
    </header>
  );
};

export default Header;
