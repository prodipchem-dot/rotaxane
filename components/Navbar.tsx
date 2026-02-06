
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Hexagon, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentSlug: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentSlug }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 md:py-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#/home" className="flex items-center gap-2 md:gap-3 group cursor-pointer z-[60]" onClick={closeMenu}>
            <div className="p-1.5 md:p-2 bg-[#660099] rounded-lg md:rounded-xl group-hover:rotate-12 transition-transform duration-500 shadow-md">
              <Hexagon className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-slate-900 font-bold text-base md:text-xl tracking-tighter block leading-none font-century uppercase">LEIGH GROUP</span>
              <span className="text-purple-600 text-[7px] md:text-[9px] uppercase tracking-widest font-bold hidden sm:block">Molecular Magic @ Manchester</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => {
              const itemSlug = item.href.replace(/^#\//, '') || 'home';
              const isActive = currentSlug === itemSlug;
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-all text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.2em] relative py-1 ${
                    isActive ? 'text-[#660099]' : 'text-slate-500 hover:text-slate-900'
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
            className="lg:hidden p-2 text-slate-600 hover:text-[#660099] transition-colors z-[60] rounded-lg bg-slate-50"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 w-full h-[100dvh] bg-white z-50 lg:hidden transition-all duration-500 ease-in-out overflow-y-auto ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="min-h-full flex flex-col pt-24 pb-12 px-6">
            <div className="flex flex-col items-center gap-4 text-center max-w-sm mx-auto w-full">
              <div className="space-y-1 mb-6">
                <div className="w-10 h-0.5 bg-yellow-400 mx-auto rounded-full"></div>
                <p className="text-purple-600 text-[8px] font-black uppercase tracking-[0.4em]">Navigation Menu</p>
              </div>
              
              <div className="flex flex-col w-full divide-y divide-slate-100">
                {NAV_ITEMS.map((item) => {
                  const itemSlug = item.href.replace(/^#\//, '') || 'home';
                  const isActive = currentSlug === itemSlug;
                  
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className={`text-lg font-bold uppercase tracking-[0.15em] transition-all py-4 flex items-center justify-center gap-3 ${
                        isActive ? 'text-[#660099]' : 'text-slate-600 hover:text-[#660099]'
                      }`}
                    >
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />}
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100 flex flex-col gap-6 w-full items-center">
                <img src="https://www.catenane.net/images/UoM_logo.png" alt="University of Manchester" className="h-10 opacity-80" />
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.3em] font-bold text-center">
                  Sir Samuel Hall Chair<br/>University of Manchester
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;