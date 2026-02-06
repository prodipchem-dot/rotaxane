
import React from 'react';
import ProfBio from './components/ProfBio';
import { ChevronRight, Mail, Twitter, Globe, FileText, ArrowLeft } from 'lucide-react';

const ProfLeighView: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* HERO / HEADER SECTION */}
      <section className="pt-24 pb-12 bg-slate-950 border-b border-purple-500/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="relative">
               <div className="absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full"></div>
               <img 
                 src="https://www.catenane.net/images/general/daveleigh2006.jpg" 
                 alt="Prof. Leigh" 
                 className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] object-cover relative z-10 border-2 border-purple-500/30 shadow-2xl"
               />
            </div>
            <div className="space-y-6 text-center md:text-left flex-grow">
               <a href="#/home" className="inline-flex items-center gap-2 text-purple-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors mb-4">
                 <ArrowLeft size={14} /> Back to Home
               </a>
               <h1 className="text-5xl md:text-7xl font-bold text-white serif italic">Professor David A. Leigh</h1>
               <div className="flex flex-wrap justify-center md:justify-start gap-4">
                 <span className="bg-[#660099] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">FRS</span>
                 <span className="bg-slate-900 border border-white/10 text-slate-400 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Royal Society Research Professor</span>
               </div>
               <p className="text-slate-400 max-w-2xl leading-relaxed">
                 A world-renowned chemist pioneering the field of artificial molecular machines and complex molecular topology at the University of Manchester.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN BIO CONTENT */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ProfBio />
        </div>
      </section>
    </div>
  );
};

export default ProfLeighView;
