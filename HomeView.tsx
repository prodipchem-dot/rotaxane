
import React from 'react';
import { HIGHLIGHTS } from './constants';
import { 
  Zap, ChevronRight, Binary, FlaskConical, Users, Book, Eye, Map as MapIcon, ExternalLink, ArrowRight, Globe
} from 'lucide-react';

const HomeView: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* HERO SECTION - SINGLE LINE AND REDUCED FONT SIZE */}
      <section id="hero" className="relative pt-6 pb-24 overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight serif italic text-white text-glow-purple whitespace-nowrap">
                Welcome to <span className="text-yellow-400 font-century not-italic tracking-tighter uppercase">Leigh Group</span>
              </h1>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed font-light">
                Exploring fundamental ways to control <span className="text-white font-medium">molecular-level dynamics and topology</span>.
              </p>
            </div>

            {/* VIDEO & MANCHESTER IMAGES SECTION */}
            <div className="flex justify-center">
              <div className="grid md:grid-cols-12 gap-6 items-stretch max-w-5xl w-full">
                <div className="md:col-start-3 md:col-span-5 aspect-video rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl relative group bg-slate-900">
                  <iframe 
                    className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                    src="https://www.youtube.com/embed/ObvxPSQNMGc?rel=0&amp;showinfo=0" 
                    title="The Leigh Group Intro"
                    frameBorder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="md:col-span-2 flex flex-col gap-3">
                  <a href="https://www.youtube.com/watch?v=BmSKF5hdIpw" target="_blank" rel="noreferrer" className="flex-1 group">
                    <div className="h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-yellow-400/50 transition-all">
                      <img src="https://www.catenane.net/images/manchester1.png" alt="Manchester Chemistry 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                  </a>
                  <a href="https://www.youtube.com/watch?v=BmSKF5hdIpw" target="_blank" rel="noreferrer" className="flex-1 group">
                    <div className="h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-yellow-400/50 transition-all">
                      <img src="https://www.catenane.net/images/manchester2.png" alt="Manchester Chemistry 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA WITH SIDEBAR */}
      <section className="pb-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* RESEARCH HIGHLIGHTS SIDEBAR */}
          <aside className="lg:col-span-3 space-y-10 border-r border-white/5 pr-6">
            <div className="sticky top-28 space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white serif italic">Research Highlights</h2>
                <div className="h-1 w-12 bg-yellow-400"></div>
                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest pt-1">Milestones & Discoveries</p>
              </div>
              
              <div className="flex flex-col gap-3 max-h-[calc(100vh-20rem)] overflow-y-auto pr-4 -mr-4 scrollbar-hide group/list hover:scrollbar-default">
                {HIGHLIGHTS.map((item, idx) => (
                  <a 
                    href={item.title.toLowerCase().includes('knot') ? '#/research' : '#/research'} 
                    key={idx} 
                    className="group flex items-start gap-4 p-3 rounded-2xl border border-transparent hover:border-purple-500/20 hover:bg-slate-900/50 transition-all"
                  >
                    <div className="w-24 h-20 flex-shrink-0 rounded-xl overflow-hidden border border-white/5 bg-slate-800 shadow-lg">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                      />
                    </div>
                    
                    <div className="flex-grow pt-1">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <span className="text-yellow-400 text-[9px] font-black uppercase tracking-widest">{item.year}</span>
                        <ChevronRight size={12} className="text-slate-700 group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                      <h4 className="text-slate-300 font-bold text-[11px] lg:text-[12px] leading-[1.3] group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT COLUMN */}
          <div className="lg:col-span-9 space-y-24">
            
            {/* RESEARCH DEEP DIVE */}
            <div id="research" className="grid lg:grid-cols-12 gap-12 scroll-mt-24">
              <div className="lg:col-span-8 space-y-12">
                <div className="space-y-8">
                  <div className="flex items-center gap-4 text-yellow-400">
                    <FlaskConical size={24} />
                    <h2 className="text-5xl font-bold text-white serif italic">Our Research</h2>
                  </div>
                  
                  <div className="prose prose-invert prose-purple max-w-none text-slate-300 leading-relaxed space-y-6">
                    <p>
                      Our group explores, invents and discovers fundamental ways to control molecular-level dynamics and topology. 
                      This includes strategies and methods to synthesize interlocked molecular architectures (e.g. benzylic amide and metal ‘passive template’ catenanes, rotaxanes and molecular shuttles [1995-] and catalytic ‘active template’ synthesis [2006-]), molecular machinery [1999-], molecular ratchet mechanisms [2003-], molecular knotting [2011-], molecular assemblers [2013-], molecular robotics [2016-] and molecular weaving [2020-].
                    </p>
                    
                    <div className="space-y-4 pt-4">
                      <p className="bg-slate-900/50 p-8 border-l-4 border-[#660099] italic rounded-r-2xl text-lg text-white">
                        "What I cannot create, I do not understand"
                      </p>
                      <p className="text-right font-bold text-slate-500 uppercase tracking-widest text-xs pr-8">— Richard P. Feynman</p>
                    </div>

                    <p>
                      Perhaps the best way to appreciate the technological potential of controlled molecular-level motion is to recognise that nanomotors and molecular-level machines lie at the heart of every significant biological process. Over billions of years of evolution Nature has not repeatedly chosen this solution for achieving complex task performance without good reason.
                    </p>
                    <p>
                      When we learn how to build artificial structures that can control and exploit molecular level motion, and interface their effects directly with other molecular-level substructures and the outside world, it will potentially impact on every aspect of functional molecule and materials design. An improved understanding of physics and biology will surely follow.
                    </p>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="rounded-[3rem] overflow-hidden border border-purple-500/20 shadow-2xl bg-slate-900/50">
                    <img src="https://www.catenane.net/images/general/research-map.png" alt="Research Map" className="w-full h-auto p-4" />
                  </div>
                </div>
              </div>

              {/* SIDEBAR NAVIGATION BUTTONS */}
              <div className="lg:col-span-4 space-y-10">
                <div className="bg-slate-900 border border-purple-500/10 rounded-[3.5rem] p-10 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full"></div>
                  <img 
                    src="https://www.catenane.net/images/general/daveleigh2006.jpg" 
                    alt="Professor David Leigh" 
                    className="w-full aspect-square rounded-[2.5rem] object-cover mb-8 shadow-2xl border-2 border-purple-500/20 grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <h3 className="text-2xl font-bold text-white serif italic mb-2">Prof. David A. Leigh</h3>
                  <p className="text-yellow-400 text-[9px] font-bold uppercase tracking-[0.3em] mb-8">FRS FRSE FRSC MAE</p>
                  <div className="space-y-4">
                    <a href="#/prof" className="flex items-center justify-between w-full bg-[#660099] text-white px-6 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-purple-500 transition-all group/btn shadow-xl shadow-purple-500/10">
                      Full Bio & CV <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <a href="https://scholar.google.co.uk/citations?user=jLubszkAAAAJ&hl=en" target="_blank" className="flex items-center justify-between w-full bg-slate-950 text-slate-400 px-6 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest border border-white/5 hover:border-yellow-400/30 hover:text-white transition-all">
                      Scholar <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <a href="#/people" className="group relative h-40 rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all shadow-xl">
                    <img 
                      src="https://www.catenane.net/images/GroupPhoto2025.jpg" 
                      alt="Leigh Group 2025" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                    <div className="absolute bottom-5 left-6">
                      <h4 className="text-white font-bold serif italic text-lg">The Team</h4>
                      <p className="text-yellow-400 text-[8px] font-bold uppercase tracking-widest">Leigh Group 2025</p>
                    </div>
                  </a>
                  
                  {/* VIRTUAL TOUR BUTTON */}
                  <a href="#/vtour" className="group bg-slate-900/50 border border-white/5 p-6 rounded-[2.5rem] hover:border-purple-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-900/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                        <Eye size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold serif italic text-base leading-tight">Virtual Tour</h4>
                        <p className="text-slate-500 text-[10px]">Explore our lab</p>
                      </div>
                    </div>
                  </a>

                  {/* WORLD OF MOLECULAR MACHINES BUTTON - PLACED BELOW VIRTUAL TOUR */}
                  <a href="#/world" className="group bg-slate-900/50 border border-white/5 p-6 rounded-[2.5rem] hover:border-yellow-400/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-yellow-900/20 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-slate-950 transition-all">
                        <Globe size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold serif italic text-base leading-tight">Supramolecular World</h4>
                        <p className="text-slate-500 text-[10px]">Molecular Machines Research</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-yellow-400/20 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white serif italic leading-tight">Join the Leigh Group</h3>
                <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
                  Interested in joining the Leigh group as a PhD student or postdoctoral researcher? We are always looking for brilliant minds to join our Manchester laboratory.
                </p>
              </div>
              <a href="mailto:david.leigh@manchester.ac.uk" className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-yellow-400/10 whitespace-nowrap">
                Inquire Now
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
