
import React, { useState } from 'react';
import { Search, ExternalLink, MapPin, ArrowLeft, Globe, Maximize2, ZoomIn } from 'lucide-react';
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
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/5 pb-12">
          <div className="space-y-6">
            <a href="#/home" className="inline-flex items-center gap-2 text-purple-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors mb-2">
              <ArrowLeft size={14} /> Back to Home
            </a>
            <h1 className="text-6xl font-bold text-white serif italic">The Supramolecular World</h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              The (incomplete!) world of Catenanes, Rotaxanes, and Molecular Machines. Click on names to visit laboratory websites.
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

      {/* MAP SECTION */}
      <section className="container mx-auto px-6">
        <div className="relative bg-slate-950/50 border border-white/5 rounded-[4rem] p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-10 right-10 flex items-center gap-4 z-20">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-900 rounded-full border border-white/5">
              <Globe className="text-purple-500" size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Interactive Map</span>
            </div>
          </div>

          <div className="w-full overflow-x-auto scrollbar-hide py-10">
            <div className="min-w-[1000px] md:min-w-0 transition-transform duration-500">
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 1018.77 661.44"
                xmlns="http://www.w3.org/2000/svg"
                className="select-none"
              >
                <style>{`
                  .land { fill: #0f172a; stroke: #334155; stroke-width: 0.5; transition: fill 0.3s ease; }
                  .land:hover { fill: #1e1b4b; }
                  .researcher-link text { 
                    fill: #94a3b8; 
                    font-family: Arial, sans-serif; 
                    font-weight: 700; 
                    cursor: pointer; 
                    transition: all 0.2s ease;
                    paint-order: stroke;
                    stroke: #020617;
                    stroke-width: 2px;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  }
                  .researcher-link:hover text { fill: #ffcc00; stroke-width: 0; }
                  .connection-line { stroke: #660099; stroke-width: 1; fill: none; opacity: 0.4; }
                `}</style>
                
                {/* World Map Paths (Simplified representative paths based on original coordinates) */}
                <g id="land-masses">
                  <path d="m 625.12,398.97 0.5,-0.15 0.11,0.84 2.19,-0.48 2.32,0.08 1.69,0.09 1.92,-2.07 2.1,-1.98 1.77,-1.9 0.53,1.05 0.38,2.44 -1.43,0.01 -0.23,2 0.5,0.42 -1.27,0.6 -0.01,1.25 -0.82,1.26 -0.07,1.21 -0.57,0.64 -8.42,-1.52 -1.08,-3.08 z" className="land" title="United Arab Emirates" />
                  <path d="m 740.34,405.66 -0.05,2.15 -0.98,-0.46 0.18,2.41 -0.8,-1.56 -0.16,-1.52 -0.54,-1.45 -1.17,-1.76 -2.58,-0.12 0.26,1.25 -0.88,1.67 -1.2,-0.61 -0.41,0.55 -0.79,-0.33 -1.08,-0.27 -0.44,-2.48 -0.97,-2.28 0.47,-1.84 -1.72,-0.82 0.62,-1.12 1.75,-1.15 -2.02,-1.63 0.99,-2.11 2.22,1.34 1.34,0.16 0.25,2.15 2.66,0.42 2.61,-0.05 1.61,0.53 -1.29,2.59 -1.26,0.18 -0.86,1.73 1.53,1.58 0.46,-1.94 0.78,-0.01 z" className="land" title="Bangladesh" />
                  <path d="m 204.18,101.48 -0.22,-5.9 3.63,0.58 1.63,0.96 3.35,4.92 -0.76,4.97 -4.15,2.77 -2.28,-3.12 -1.2,-5.18 z" className="land" title="Canada" />
                  <path d="m 455.17,339.81 0.14,-2.68 -1.14,-1.66 3.96,-2.77 3.43,0.7 3.77,-0.03 2.98,0.66 2.33,-0.2 4.53,0.12 1.12,1.49 5.16,1.73 1.02,-0.82 3.16,1.72 3.25,-0.49 0.15,2.19 -2.66,2.49 -3.59,0.78 -0.25,1.24 -1.73,2.03 -1.08,2.96 1.09,2.05 -1.62,1.6 -0.6,2.3 -2.12,0.7 -1.99,2.69 -3.55,0.05 -2.68,-0.06 -1.75,1.22 -1.07,1.31 -1.38,-0.29 -1.03,-1.17 -0.8,-2 -2.62,-0.54 -0.23,-1.16 1.04,-1.32 0.38,-0.96 -0.96,-1.06 0.77,-2.35 -1.12,-2.17 1.21,-0.3 0.11,-1.72 0.46,-0.53 0.03,-2.88 1.3,-1 -0.78,-1.88 -1.64,-0.13 -0.48,0.47 -1.65,0.01 -0.71,-1.84 -1.14,0.55 z" className="land" title="Spain" />
                  {/* ... additional land paths would be extracted from the full SVG database ... */}
                  <rect x="0" y="0" width="1018" height="661" fill="transparent" /> {/* Event hit area */}
                </g>

                {/* Connection Lines */}
                <g id="lines">
                  <path d="M 107.2,143.5 C 160.0,250.7 160.0,250.7 160.0,250.7" className="connection-line" />
                  <path d="M 586.0,162.0 506.0,277.9" className="connection-line" />
                  <path d="M 556.9,139.2 495.8,297.2" className="connection-line" />
                  <path d="M 913.2,428.1 927.3,434.0" className="connection-line" />
                </g>

                {/* Researcher Links (Preserving exact original coordinates) */}
                <g id="researchers">
                  {/* UK Groups */}
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

                  {/* US Groups */}
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
                  <a href="http://swagergroup.mit.edu/" target="_blank" className="researcher-link">
                    <text x="152.5" y="521.0" style={{fontSize: '10px'}}>Tim Swager</text>
                  </a>
                  <a href="https://www.aprahamiangroup.com/" target="_blank" className="researcher-link">
                    <text x="152.5" y="532.0" style={{fontSize: '10px'}}>Ivan Aprahamian</text>
                  </a>

                  {/* Japan Groups */}
                  <a href="https://physorg.chem.s.u-tokyo.ac.jp/" target="_blank" className="researcher-link">
                    <text x="940.0" y="286.0" style={{fontSize: '10px'}}>Hiroyuki Isobe</text>
                  </a>
                  <a href="https://www.aidacreativehub.com/" target="_blank" className="researcher-link">
                    <text x="890.0" y="334.0" style={{fontSize: '10px'}}>Takuzo Aida</text>
                  </a>
                  <a href="http://fujitalab.t.u-tokyo.ac.jp/home_e/" target="_blank" className="researcher-link">
                    <text x="910.0" y="152.0" style={{fontSize: '10px'}}>Makoto Fujita</text>
                  </a>
                  <a href="https://stoddart.northwestern.edu/" target="_blank" className="researcher-link">
                    <text x="890.0" y="346.0" style={{fontSize: '10px'}}>Fraser Stoddart</text>
                  </a>

                  {/* China Groups */}
                  <a href="http://zhangxigroup.com/en/index-en.html" target="_blank" className="researcher-link">
                    <text x="840.0" y="450.0" style={{fontSize: '10px'}}>Xi Zhang</text>
                  </a>
                  <a href="https://chem.ecust.edu.cn/_t222/main.htm" target="_blank" className="researcher-link">
                    <text x="910.0" y="426.0" style={{fontSize: '10px'}}>He Tian</text>
                  </a>
                  <a href="http://cchen.iccas.ac.cn/" target="_blank" className="researcher-link">
                    <text x="920.0" y="573.0" style={{fontSize: '10px'}}>Chuan-Feng Chen</text>
                  </a>
                  <a href="https://www.sunjunqigroup.com/" target="_blank" className="researcher-link">
                    <text x="920.0" y="562.0" style={{fontSize: '10px'}}>Junqi Sun</text>
                  </a>
                  <a href="http://hysz.nju.edu.cn/supramol/" target="_blank" className="researcher-link">
                    <text x="890.0" y="450.0" style={{fontSize: '10px'}}>Leyong Wang</text>
                  </a>

                  {/* France / Europe */}
                  <a href="https://isis.unistra.fr/laboratory-of-inorganic-chemistry-jean-pierre-sauvage/" target="_blank" className="researcher-link">
                    <text x="305" y="265" style={{fontSize: '10px'}}>Jean-Pierre Sauvage</text>
                  </a>
                  <a href="http://www-isis.u-strasbg.fr/supra/start" target="_blank" className="researcher-link">
                    <text x="320" y="277" style={{fontSize: '10px'}}>Jean-Marie Lehn</text>
                  </a>
                  <a href="http://www.glycorotaxane.fr/" target="_blank" className="researcher-link">
                    <text x="345" y="289" style={{fontSize: '10px'}}>Frédéric Coutrot</text>
                  </a>
                  <a href="http://sams.ics-cnrs.unistra.fr/en/" target="_blank" className="researcher-link">
                    <text x="300" y="253" style={{fontSize: '10px'}}>Nicolas Giuseppone</text>
                  </a>

                  {/* Italy / South */}
                  <a href="http://www.credi-group.it/" target="_blank" className="researcher-link">
                    <text x="380" y="649" style={{fontSize: '10px'}}>Alberto Credi</text>
                  </a>
                  <a href="https://www.marchesanlab.com/" target="_blank" className="researcher-link">
                    <text x="320" y="565" style={{fontSize: '10px'}}>Silvia Marchesan</text>
                  </a>
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
             <div className="flex gap-10">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#660099]"></div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Research Hubs</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Global Leaders</span>
                </div>
             </div>
             <div className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] italic">
                Map Administrator: Björn Andreassen
             </div>
          </div>
        </div>
      </section>

      {/* FILTERABLE LIST SECTION FOR ACCESSIBILITY */}
      <section className="container mx-auto px-6">
        <div className="space-y-12">
            <div className="flex items-center gap-4">
                <Maximize2 className="text-yellow-400" size={20} />
                <h2 className="text-3xl font-bold text-white serif italic">Laboratory Directory</h2>
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
                    <span className="text-purple-400 text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Visit Laboratory</span>
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
