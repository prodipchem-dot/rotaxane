
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
        <div className="relative bg-slate-950 border border-white/10 rounded-[4rem] p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-10 right-10 flex items-center gap-4 z-20">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-900 rounded-full border border-white/10 shadow-lg">
              <Globe className="text-purple-500" size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Global Connectivity</span>
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
                    fill: #1e293b; 
                    stroke: #475569; 
                    stroke-width: 0.5; 
                    transition: all 0.3s ease; 
                  }
                  .land:hover { 
                    fill: #334155; 
                    stroke: #94a3b8;
                  }
                  .researcher-link text { 
                    fill: #cbd5e1; 
                    font-family: Arial, sans-serif; 
                    font-weight: 700; 
                    cursor: pointer; 
                    transition: all 0.2s ease;
                    paint-order: stroke;
                    stroke: #020617;
                    stroke-width: 3px;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  }
                  .researcher-link:hover text { 
                    fill: #ffcc00; 
                    stroke: #660099;
                    stroke-width: 1px;
                  }
                  .connection-line { 
                    stroke: #660099; 
                    stroke-width: 1.5; 
                    fill: none; 
                    opacity: 0.5; 
                  }
                `}</style>
                
                <g id="land-masses">
                  {/* USA */}
                  <path className="land" title="United States" d="m 114.5,285.05 -1.54,-1.83 -2.47,-1.57 -0.79,-4.36 -3.61,-4.13 -1.51,-4.94 -2.69,-0.34 -4.46,-0.13 -3.29,-1.54 -5.8,-5.64 -2.68,-1.05 -4.9,-1.99 -3.88,0.48 -5.51,-2.59 -3.33,-2.43 -3.11,1.21 0.58,3.93 -1.55,0.36 -3.24,1.16 -2.47,1.86 -3.11,1.16 -0.4,-3.24 1.26,-5.53 2.98,-1.77 -0.77,-1.46 -3.57,3.22 -1.91,3.77 -4.04,3.95 2.05,2.65 -2.65,3.85 -3.01,2.21 -2.81,1.59 -0.69,2.29 -4.38,2.63 -0.89,2.36 -3.28,2.13 -1.92,-0.38 -2.62,1.38 -2.85,1.67 -2.33,1.63 -4.81,1.38 -0.44,-0.81 3.07,-2.27 2.74,-1.51 2.99,-2.71 3.48,-0.56 1.38,-2.06 3.89,-3.05 0.63,-1.03 2.07,-1.83 0.48,-4 1.43,-3.17 -3.23,1.64 -0.9,-0.93 -1.52,1.95 -1.83,-2.73 -0.76,1.94 -1.05,-2.7 -2.8,2.17 -1.72,0 -0.24,-3.23 0.51,-2.02 -1.81,-1.98 -3.65,1.07 -2.37,-2.63 -1.92,-1.36 -0.01,-3.25 -2.16,-2.48 1.08,-3.41 2.29,-3.37 1,-3.15 2.27,-0.45 1.92,0.99 2.26,-3.01 2.04,0.54 2.14,-1.96 -0.52,-2.92 -1.57,-1.16 2.08,-2.52 -1.72,0.07 -2.98,1.43 -0.85,1.43 -2.21,-1.43 -3.97,0.73 -4.11,-1.56 -1.18,-2.65 -3.55,-3.91 3.94,-2.87 6.25,-3.41 h 2.31 l -0.38,3.48 5.92,-0.27 -2.28,-4.34 -3.45,-2.72 -1.99,-3.64 -2.69,-3.17 -3.85,-2.38 1.57,-4.03 4.97,-0.25 3.54,-3.58 0.67,-3.92 2.86,-3.91 2.73,-0.95 5.31,-3.76 2.58,0.57 4.31,-4.61 4.24,1.83 2.03,3.87 1.25,-1.65 4.74,0.51 -0.17,1.95 4.29,1.43 2.86,-0.84 5.91,2.64 5.39,0.78 2.16,1.07 3.73,-1.34 4.25,2.46 3.05,1.13 -0.02,27.65" />
                  {/* Canada */}
                  <path className="land" title="Canada" d="m 204.18,101.48 -0.22,-5.9 3.63,0.58 1.63,0.96 3.35,4.92 -0.76,4.97 -4.15,2.77 -2.28,-3.12 -1.2,-5.18 z" />
                  {/* China */}
                  <path className="land" title="China" d="m 789.88,415.66 -2.42,1.41 -2.3,-0.91 -0.08,-2.53 1.38,-1.34 3.06,-0.83 1.61,0.07 0.63,1.13 -1.23,1.3 -0.65,1.7 z m 48.56,-107.52 4.88,1.38 3.32,3.03 1.13,3.95 4.26,0 2.43,-1.65 4.63,-1.24 -1.47,3.76 -1.09,1.51 -0.96,4.46 -1.89,3.89 -3.4,-0.7 -2.41,1.4 0.74,3.36 -0.4,4.55 -1.43,0.1 0.02,1.93 -1.81,-2.24 -1.11,2.13 -4.33,1.62 0.44,1.97 -2.42,-0.14 -1.33,-1.17 -1.93,2.64 -3.09,1.98 -2.28,2.35 -3.92,1.06 -2.06,1.69 -3.02,0.98 1.49,-1.67 -0.59,-1.41 2.22,-2.45 -1.48,-1.93 -2.44,1.3 -3.17,2.54 -1.73,2.34 -2.75,0.17 -1.43,1.68 1.48,2.41 2.29,0.58 0.09,1.58 2.22,1.02 3.14,-2.51 2.49,1.37 1.81,0.09 0.46,1.84 -3.97,0.97 -1.31,1.87 -2.73,1.73 -1.44,2.39 3.02,1.86 1.1,3.31 1.71,3.05 1.9,2.53 -0.05,2.43 -1.76,0.89 0.67,1.73 1.65,1 -0.43,2.61 -0.71,2.52 -1.57,0.28 -2.05,3.41 -2.27,4.09 -2.6,3.68 -3.86,2.82 -3.9,2.55 -3.16,0.35 -1.71,1.34 -0.97,-0.98 -1.59,1.5 -3.92,1.5 -2.97,0.46 -0.96,3.15 -1.55,0.17 -0.74,-2.16 0.66,-1.16 -3.76,-0.96 -1.33,0.49 -2.82,-0.78 -1.33,-1.22 0.44,-1.74 -2.56,-0.55 -1.35,-1.14 -2.39,1.62 -2.73,0.35 -2.24,-0.02 -1.5,0.74 -1.45,0.44 0.42,3.43 -1.5,-0.08 -0.25,-0.7 -0.08,-1.24 -2.06,0.87 -1.21,-0.55 -2.08,-1.13 0.82,-2.51 -1.78,-0.59 -0.67,-2.8 -2.96,0.51 0.34,-3.63 2.66,-2.58 0.11,-2.57 -0.08,-2.4 -1.22,-0.75 -0.94,-1.86 -1.64,0.24 -3.02,-0.47 0.95,-1.33 -1.31,-1.99 -2,1.35 -2.36,-0.78 -3.23,2.03 -2.55,2.36 -2.26,0.39 -1.23,-0.85 -1.48,-0.08 -2,-0.73 -1.51,0.8 -1.85,2.34 -0.24,-2.48 -1.71,0.66 -3.27,-0.31 -3.17,-0.73 -2.28,-1.39 -2.18,-0.63 -0.94,-1.53 -1.58,-0.46 -2.83,-2.09 -2.25,-0.99 -1.16,0.77 -3.9,-2.26 -2.75,-2.07 -0.79,-3.63 2.01,0.44 0.09,-1.69 -1.12,-1.71 0.28,-2.74 -3.01,-3.99 -4.61,-1.39 -0.83,-2.66 -2.07,-1.63 -0.5,-1.01 -0.42,-2.01 0.1,-1.38 -1.7,-0.81 -0.92,0.36 -0.71,-3.32 0.8,-0.83 -0.39,-0.85 2.68,-1.73 1.94,-0.72 2.97,0.49 1.06,-2.35 3.6,-0.44 1,-1.48 4.42,-2.03 0.39,-0.85 -0.22,-2.17 1.92,-1 -2.52,-6.75 5.55,-1.58 1.44,-0.89 2.02,-7.26 5.56,1.35 1.56,-1.86 0.13,-4.19 2.33,-0.39 2.13,-2.83 1.1,-0.35 0.74,2.97 2.36,2.23 4,1.57 1.93,3.32 -1.08,4.73 1.01,1.73 3.33,0.68 3.78,0.55 3.39,2.45 1.73,0.43 1.28,3.57 1.65,2.27 3.09,-0.09 5.79,0.85 3.73,-0.53 2.77,0.57 4.15,2.29 3.39,0 1.24,1.16 3.26,-2.01 4.53,-1.31 4.2,-0.14 3.28,-1.34 2.01,-2.05 1.96,-1.3 -0.45,-1.28 -0.9,-1.5 1.47,-2.54 1.58,0.36 2.88,0.8 2.79,-2.1 4.28,-1.55 2.05,-2.66 1.97,-1.16 4.07,-0.54 2.21,0.46 0.31,-1.45 -2.54,-2.89 -2.25,-1.33 -2.16,1.54 -2.77,-0.65 -1.59,0.53 -0.72,-1.71 1.98,-4.23 1.37,-3.25 3.37,1.63 3.95,-2.74 -0.03,-1.93 2.53,-4.73 1.56,-1.45 -0.04,-2.52 -1.54,-1.1 2.32,-2.31 3.48,-0.84 3.72,-0.13 4.2,1.39 2.46,1.71 1.73,4.61 1.05,1.94 0.98,2.73 1.05,4.31 z" />
                  {/* Japan */}
                  <path className="land" title="Japan" d="m 858.01,367.26 0.36,1.15 -1.58,2.03 -1.15,-1.07 -1.44,0.78 -0.74,1.95 -1.83,-0.95 0.02,-1.58 1.55,-2 1.59,0.39 1.15,-1.42 2.07,0.72 z m 17.77,-10.28 -1.06,2.78 0.49,1.73 -1.46,2.42 -3.58,1.6 -4.93,0.21 -4,3.84 -1.88,-1.29 -0.11,-2.52 -4.88,0.75 -3.32,1.59 -3.28,0.06 2.84,2.46 -1.87,5.61 -1.81,1.37 -1.36,-1.27 0.69,-2.96 -1.77,-0.96 -1.14,-2.28 2.65,-1.03 1.47,-2.11 2.82,-1.75 2.06,-2.33 5.58,-1.02 3,0.7 2.93,-6.17 1.87,1.67 4.11,-3.51 1.59,-1.38 1.76,-4.38 -0.48,-4.1 1.18,-2.33 2.98,-0.68 1.53,5.11 -0.08,2.94 -2.59,3.6 0.05,3.63 z" />
                  {/* Europe Cluster (Simplified) */}
                  <path className="land" title="Europe" d="m 508.32,284.17 0.05,1.88 2.84,1.12 -0.03,1.7 2.85,-0.9 1.57,-1.31 3.17,1.89 1.32,1.51 0.66,2.39 -0.78,1.25 1.01,1.65 0.7,2.45 -0.22,1.56 1.15,2.86 -1.25,0.47 -0.74,-0.51 -0.71,0.84 -2.01,0.86 -1.04,1.1 -2.04,0.95 0.49,1.3 0.3,1.82 1.43,1.04 1.58,1.83 -0.98,1.95 -1.01,0.54 0.4,2.72 -0.27,0.7 -0.87,-0.85 -1.34,-0.12 -2.01,0.74 -2.47,-0.18 -0.4,1.09 -1.42,-1.14 -0.85,0.22 -3,-1.26 -0.58,0.9 -2.38,-0.03 0.35,-2.98 1.42,-2.9 -4.04,-0.78 -1.32,-1.13 0.16,-1.89 -0.56,-0.98 0.32,-2.97 -0.48,-4.69 1.69,0 0.71,-1.71 0.7,-4.23 -0.53,-1.58 0.55,-1 2.34,-0.26 0.52,1.04 1.91,-2.33 -0.64,-1.79 -0.13,-2.75 2.12,0.64 z" />
                  {/* Australia */}
                  <path className="land" title="Australia" d="m 888.18,593.41 2.71,1.28 1.53,-0.51 2.19,-0.71 1.68,0.25 0.2,4.43 -0.96,1.3 -0.29,3.06 -0.98,-1.05 -1.95,2.67 -0.58,-0.21 -1.72,-0.12 -1.73,-3.28 -0.38,-2.5 -1.62,-3.25 0.07,-1.7 1.83,0.34 z" />
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

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
             <div className="flex gap-10">
                <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_15px_#660099]"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Research Hubs</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_15px_#ffcc00]"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Global Leaders</span>
                </div>
             </div>
             <div className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em] italic">
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
