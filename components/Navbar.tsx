
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Hexagon, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentSlug: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentSlug }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#/home" className="flex items-center gap-3 group cursor-pointer z-50">
            <div className="p-2 bg-[#660099] rounded-xl group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-purple-500/20">
              <Hexagon className="text-white w-6 h-6" />
            </div>
            <div>
              <span className="text-white font-bold text-xl tracking-tight block leading-none serif italic">LEIGH GROUP</span>
              <span className="text-yellow-400 text-[9px] uppercase tracking-widest font-bold">Molecular Magic @ Manchester</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors z-50"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-40 lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
            <div className="space-y-2 mb-8">
              <div className="w-12 h-1 bg-yellow-400 mx-auto rounded-full"></div>
              <p className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.4em]">Molecular Library</p>
            </div>
            
            {NAV_ITEMS.map((item) => {
              const itemSlug = item.href.replace(/^#\//, '') || 'home';
              const isActive = currentSlug === itemSlug;
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bold uppercase tracking-[0.2em] serif italic transition-all ${
                    isActive ? 'text-yellow-400 scale-110' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="mt-12 flex flex-col gap-4 w-full max-w-xs">
              <div className="h-px bg-white/5 w-full"></div>
              <p className="text-[9px] text-slate-600 uppercase tracking-widest font-medium">University of Manchester</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
