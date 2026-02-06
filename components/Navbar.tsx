
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Hexagon, Mail } from 'lucide-react';

interface NavbarProps {
  currentSlug: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentSlug }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/home" className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 bg-[#660099] rounded-xl group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-purple-500/20">
            <Hexagon className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="text-white font-bold text-xl tracking-tight block leading-none serif italic">LEIGH GROUP</span>
            <span className="text-yellow-400 text-[9px] uppercase tracking-widest font-bold">Molecular Magic @ Manchester</span>
          </div>
        </a>
        
        <div className="hidden lg:flex gap-8">
          {NAV_ITEMS.map((item) => {
            const itemSlug = item.href.replace(/^#\//, '') || 'home';
            const isActive = currentSlug === itemSlug;
            
            return (
              <a
                key={item.label}
                href={item.href}
                className={`transition-all text-[10px] font-bold uppercase tracking-[0.2em] relative py-1 ${
                  isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 rounded-full animate-in fade-in slide-in-from-left-1 duration-300"></span>
                )}
              </a>
            );
          })}
        </div>

        <a 
          href="mailto:david.leigh@manchester.ac.uk"
          className="flex items-center gap-2 bg-[#660099] text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#7a00b8] transition-all shadow-lg shadow-purple-500/10"
        >
          <Mail size={12} />
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
