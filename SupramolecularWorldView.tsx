
import React, { useState } from 'react';
import { Search, ExternalLink, MapPin, ArrowLeft, Globe, Maximize2 } from 'lucide-react';
import { WORLD_RESEARCHERS } from './constants';

const SupramolecularWorldView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = WORLD_RESEARCHERS.filter(r => {
    return r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           r.institution.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="py-24 space-y-16">
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-slate-200 pb-12">
          <div className="space-y-6">
            <a href="#/home" className="inline-flex items-center gap-2 text-[#660099] hover:text-[#ffcc00] text-[10px] font-bold uppercase tracking-widest transition-colors mb-2">
              <ArrowLeft size={14} /> Back to Home
            </a>
            <h1 className="text-6xl font-bold text-slate-900 serif italic">The Supramolecular World</h1>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              The (incomplete!) world of Catenanes, Rotaxanes, and Molecular Machines. Click on names to visit laboratory websites.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-80">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search researchers..." 
                className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="container mx-auto px-6">
        <div className="relative bg-white border border-slate-200 rounded-[4rem] p-8 md:p-12 overflow-hidden shadow-xl">
          <div className="absolute top-10 right-10 flex items-center gap-4 z-20">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-50 rounded-full border border-slate-200 shadow-sm">
              <Globe className="text-[#660099]" size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">Global Connectivity</span>
            </div>
          </div>

          <div className="w-full overflow-x-auto scrollbar-hide py-10">
            <div className="min-w-[1000px] md:min-w-0">
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 1018.77 661.44"
                xmlns="http://www.w3.org/2000/svg"
                className="select-none"
              >
                <style>{`
                  .land { 
                    fill: #f1f5f9; 
                    stroke: #cbd5e1; 
                    stroke-width: 0.5; 
                    transition: all 0.3s ease; 
                  }
                  .land:hover { 
                    fill: #e2e8f0; 
                    stroke: #64748b;
                  }
                  .researcher-link text { 
                    fill: #475569; 
                    font-family: Arial, sans-serif; 
                    font-weight: 700; 
                    cursor: pointer; 
                    transition: all 0.2s ease;
                    paint-order: stroke;
                    stroke: #ffffff;
                    stroke-width: 3px;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  }
                  .researcher-link:hover text { 
                    fill: #660099; 
                    stroke: #ffcc00;
                    stroke-width: 1px;
                  }
                  .connection-line { 
                    stroke: #660099; 
                    stroke-width: 1.5; 
                    fill: none; 
                    opacity: 0.2; 
                  }
                `}</style>
                
                <g id="land-masses">
                  {/* USA Cluster */}
                  <path className="land" title="United States" d="m 114.5,285.05 -1.54,-1.83 -2.47,-1.57 -0.79,-4.36 -3.61,-4.13 -1.51,-4.94 -2.69,-0.34 -4.46,-0.13 -3.29,-1.54 -5.8,-5.64 -2.68,-1.05 -4.9,-1.99 -3.88,0.48 -5.51,-2.59 -3.33,-2.43 -3.11,1.21 0.58,3.93 -1.55,0.36 -3.24,1.16 -2.47,1.86 -3.11,1.16 -0.4,-3.24 1.26,-5.53 2.98,-1.77 -0.77,-1.46 -3.57,3.22 -1.91,3.77 -4.04,3.95 2.05,2.65 -2.65,3.85 -3.01,2.21 -2.81,1.59 -0.69,2.29 -4.38,2.63 -0.89,2.36 -3.28,2.13 -1.92,-0.38 -2.62,1.38 -2.85,1.67 -2.33,1.63 -4.81,1.38 -0.44,-0.81 3.07,-2.27 2.74,-1.51 2.99,-2.71 3.48,-0.56 1.38,-2.06 3.89,-3.05 0.63,-1.03 2.07,-1.83 0.48,-4 1.43,-3.17 -3.23,1.64 -0.9,-0.93 -1.52,1.95 -1.83,-2.73 -0.76,1.94 -1.05,-2.7 -2.8,2.17 -1.72,0 -0.24,-3.23 0.51,-2.02 -1.81,-1.98 -3.65,1.07 -2.37,-2.63 -1.92,-1.36 -0.01,-3.25 -2.16,-2.48 1.08,-3.41 2.29,-3.37 1,-3.15 2.27,-0.45 1.92,0.99 2.26,-3.01 2.04,0.54 2.14,-1.96 -0.52,-2.92 -1.57,-1.16 2.08,-2.52 -1.72,0.07 -2.98,1.43 -0.85,1.43 -2.21,-1.43 -3.97,0.73 -4.11,-1.56 -1.18,-2.65 -3.55,-3.91 3.94,-2.87 6.25,-3.41 h 2.31 l -0.38,3.48 5.92,-0.27 -2.28,-4.34 -3.45,-2.72 -1.99,-3.64 -2.69,-3.17 -3.85,-2.38 1.57,-4.03 4.97,-0.25 3.54,-3.58 0.67,-3.92 2.86,-3.91 2.73,-0.95 5.31,-3.76 2.58,0.57 4.31,-4.61 4.24,1.83 2.03,3.87 1.25,-1.65 4.74,0.51 -0.17,1.95 4.29,1.43 2.86,-0.84 5.91,2.64 5.39,0.78 2.16,1.07 3.73,-1.34 4.25,2.46 3.05,1.13" />
                  <path className="land" title="United Arab Emirates" d="m 625.12,398.97 0.5,-0.15 0.11,0.84 2.19,-0.48 2.32,0.08 1.69,0.09 1.92,-2.07 2.1,-1.98 1.77,-1.9 0.53,1.05 0.38,2.44 -1.43,0.01 -0.23,2 0.5,0.42 -1.27,0.6 -0.01,1.25 -0.82,1.26 -0.07,1.21 -0.57,0.64 -8.42,-1.52 -1.08,-3.08 z" />
                  <path className="land" title="Canada" d="m 204.18,101.48 -0.22,-5.9 3.63,0.58 1.63,0.96 3.35,4.92 -0.76,4.97 -4.15,2.77 -2.28,-3.12 -1.2,-5.18 z" />
                  <path className="land" title="China" d="m 789.88,415.66 -2.42,1.41 -2.3,-0.91 -0.08,-2.53 1.38,-1.34 3.06,-0.83 1.61,0.07 0.63,1.13 -1.23,1.3 -0.65,1.7 z" />
                  <path className="land" title="Japan" d="m 858.01,367.26 0.36,1.15 -1.58,2.03 -1.15,-1.07 -1.44,0.78 -0.74,1.95 -1.83,-0.95 0.02,-1.58 1.55,-2 1.59,0.39 1.15,-1.42 2.07,0.72 z" />
                  <path className="land" title="Europe" d="m 508.32,284.17 0.05,1.88 2.84,1.12 -0.03,1.7 2.85,-0.9 1.57,-1.31 3.17,1.89 1.32,1.51 0.66,2.39 -0.78,1.25 1.01,1.65 0.7,2.45 -0.22,1.56" />
                  <path className="land" title="Australia" d="m 888.18,593.41 2.71,1.28 1.53,-0.51 2.19,-0.71 1.68,0.25 0.2,4.43 -0.96,1.3 -0.29,3.06 -0.98,-1.05 -1.95,2.67" />
                </g>

                <g id="lines">
                  <path d="M 107.2,143.5 C 160.0,250.7 160.0,250.7 160.0,250.7" className="connection-line" />
                  <path d="M 586.0,162.0 506.0,277.9" className="connection-line" />
                  <path d="M 556.9,139.2 495.8,297.2" className="connection-line" />
                  <path d="M 913.2,428.1 927.3,434.0" className="connection-line" />
                </g>

                <g id="researchers">
                  <a href="http://www.ch.cam.ac.uk/person/jrn34" target="_blank" className="researcher-link">
                    <text x="445" y="198.0" style={{fontSize: '10px'}}>Jonathan Nitschke</text>
                  </a>
                  <a href="https://www.durham.ac.uk/staff/matthew-o-kitching/" target="_blank" className="researcher-link">
                    <text x="445" y="210.0" style={{fontSize: '10px'}}>Matthew Kitching</text>
                  </a>
                  <a href="https://www.st-andrews.ac.uk/chemistry/people/dp12/" target="_blank" className="researcher-link">
                    <text x="445" y="222.0" style={{fontSize: '10px'}}>Douglas Philp</text>
                  </a>
                  <a href="https://researchportal.hw.ac.uk/en/persons/ai-lan-lee/publications/" target="_blank" className="researcher-link">
                    <text x="445" y="234.0" style={{fontSize: '10px'}}>Ai-Lan Lee</text>
                  </a>
                  <a href="https://www.gla.ac.uk/schools/chemistry/staff/graemecooke/" target="_blank" className="researcher-link">
                    <text x="445" y="114.0" style={{fontSize: '10px'}}>Graeme Cooke</text>
                  </a>
                  <a href="http://beer.chem.ox.ac.uk/" target="_blank" className="researcher-link">
                    <text x="445" y="90.0" style={{fontSize: '10px'}}>Paul Beer</text>
                  </a>
                  <a href="http://hla.chem.ox.ac.uk/" target="_blank" className="researcher-link">
                    <text x="445" y="174.0" style={{fontSize: '10px'}}>Harry Anderson</text>
                  </a>
                  <a href="https://golduplab.org/" target="_blank" className="researcher-link">
                    <text x="445" y="126.0" style={{fontSize: '10px'}}>Stephen Goldup</text>
                  </a>
                  <a href="https://neilchampnessgroup.com/" target="_blank" className="researcher-link">
                    <text x="452.5" y="66.0" style={{fontSize: '10px'}}>Neil Champness</text>
                  </a>
                  <a href="http://www.scripps.edu/rebek/" target="_blank" className="researcher-link">
                    <text x="71.0" y="350.2" style={{fontSize: '10px'}}>Julius Rebek</text>
                  </a>
                  <a href="https://chem.utah.edu/directory/stang.php" target="_blank" className="researcher-link">
                    <text x="79.7" y="388.0" style={{fontSize: '10px'}}>Peter Stang</text>
                  </a>
                  <a href="https://yiliu.lbl.gov/" target="_blank" className="researcher-link">
                    <text x="109" y="414" style={{fontSize: '10px'}}>Yi Liu</text>
                  </a>
                  <a href="http://www.indiana.edu/~floodweb/" target="_blank" className="researcher-link">
                    <text x="83" y="438" style={{fontSize: '10px'}}>Amar Flood</text>
                  </a>
                  <a href="https://physorg.chem.s.u-tokyo.ac.jp/" target="_blank" className="researcher-link">
                    <text x="940.0" y="286.0" style={{fontSize: '10px'}}>Hiroyuki Isobe</text>
                  </a>
                  <a href="https://www.aidacreativehub.com/" target="_blank" className="researcher-link">
                    <text x="890.0" y="334.0" style={{fontSize: '10px'}}>Takuzo Aida</text>
                  </a>
                  <a href="http://fujitalab.t.u-tokyo.ac.jp/home_e/" target="_blank" className="researcher-link">
                    <text x="910.0" y="152.0" style={{fontSize: '10px'}}>Makoto Fujita</text>
                  </a>
                  <a href="http://zhangxigroup.com/en/index-en.html" target="_blank" className="researcher-link">
                    <text x="840.0" y="450.0" style={{fontSize: '10px'}}>Xi Zhang</text>
                  </a>
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-100">
             <div className="flex gap-10">
                <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#660099] shadow-sm"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Research Hubs</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#ffcc00] shadow-sm"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Global Leaders</span>
                </div>
             </div>
             <div className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.3em] italic">
                Map Administrator: Björn Andreassen
             </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="space-y-12">
            <div className="flex items-center gap-4">
                <Maximize2 className="text-[#ffcc00]" size={20} />
                <h2 className="text-3xl font-bold text-slate-900 serif italic">Laboratory Directory</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((r, i) => (
                <a 
                key={i} 
                href={r.url} 
                target="_blank" 
                rel="noreferrer"
                className="group bg-white border border-slate-200 p-6 rounded-[2rem] hover:border-[#660099] transition-all flex flex-col justify-between shadow-sm hover:shadow-lg"
                >
                <div className="space-y-4">
                    <div className="flex justify-between items-start">
                    <span className="text-[#660099] text-[9px] font-black uppercase tracking-widest">{r.region}</span>
                    <ExternalLink size={12} className="text-slate-300 group-hover:text-[#660099] transition-colors" />
                    </div>
                    <div>
                    <h4 className="text-slate-900 font-bold text-lg serif italic group-hover:text-[#660099] transition-colors">{r.name}</h4>
                    <p className="text-slate-500 text-[11px] font-medium flex items-center gap-2 mt-1">
                        <MapPin size={10} className="text-[#660099]" /> {r.institution}
                    </p>
                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100">
                    <span className="text-[#660099] text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Visit Laboratory</span>
                </div>
                </a>
            ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default SupramolecularWorldView;