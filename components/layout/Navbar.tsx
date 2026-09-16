import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 md:px-16 absolute top-0 z-50">
      <div className="text-xl font-bold text-slate-900 tracking-tight">
        Aadit Amit Akshata Lele
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
        <a href="/about" className="text-[#000000] hover:text-[#ccffff] transition-colors">
        About
        </a>

        <a href="/projects" className="text-[#000000] hover:text-[#ccffff] transition-colors">
        Projects
        </a>

        <a href="/contacts" className="text-[#000000] hover:text-[#ccffff] transition-colors">
        Contact me
        </a>
      </div>
    </nav>
  );
};