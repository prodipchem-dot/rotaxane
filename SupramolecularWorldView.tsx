
import React, { useState } from 'react';
import { Globe, Search, ExternalLink, MapPin, ArrowLeft } from 'lucide-react';
import { WORLD_RESEARCHERS } from './constants';

const SupramolecularWorldView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRegion, setActiveRegion] = useState('All');

  const regions = ['All', ...new Set(WORLD_RESEARCHERS.map(r => r.region))];

  const filtered = WORLD_RESEARCHERS.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          r.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = activeRegion === 'All' || r.region === activeRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="py-24 space-y-16">
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/5 pb-12">
          <div className="space-y-6">
            <a href="#/home" className="inline-flex items-center gap-2 text-purple-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </a>
            <h1 className="text-6xl font-bold text-white serif italic">Supramolecular World</h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              The (incomplete!) world of Catenanes, Rotaxanes, and Molecular Machines. Explore active research groups across the globe.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-80">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
              <input 
                type="text" 
                placeholder="Search researchers..." 
                className="w-full bg-slate-900 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="flex flex-wrap gap-2 mb-12">
          {regions.map(region => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeRegion === region 
                  ? 'bg-yellow-400 text-slate-900' 
                  : 'bg-slate-900 text-slate-500 hover:text-slate-300'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((r, i) => (
            <a 
              key={i} 
              href={r.url} 
              target="_blank" 
              rel="noreferrer"
              className="group bg-slate-950 border border-white/5 p-6 rounded-[2rem] hover:border-purple-500/30 transition-all flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-yellow-400 text-[9px] font-black uppercase tracking-widest">{r.region}</span>
                  <ExternalLink size={12} className="text-slate-800 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg serif italic group-hover:text-yellow-400 transition-colors">{r.name}</h4>
                  <p className="text-slate-500 text-[11px] font-medium flex items-center gap-2 mt-1">
                    <MapPin size={10} className="text-purple-500" /> {r.institution}
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5">
                <span className="text-purple-400 text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Research Site</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SupramolecularWorldView;
