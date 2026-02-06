
import React from 'react';
import MolecularGraph from './components/MolecularGraph';
import { HIGHLIGHTS } from './constants';
import { 
  Zap, ChevronRight, Binary, FlaskConical, Users, Book, Eye, Map as MapIcon
} from 'lucide-react';

const HomeView: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section id="hero" className="relative py-12 overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] serif italic text-white text-glow-purple">
                  Welcome <br /> <span className="text-yellow-400">Leigh Group</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-lg leading-relaxed font-light">
                  Exploring fundamental ways to control <span className="text-white font-medium">molecular-level dynamics and topology</span>.
                </p>
              </div>

              <div className="aspect-video rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl relative group">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ObvxPSQNMGc?rel=0&amp;showinfo=0" 
                  title="The Leigh Group Intro"
                  frameBorder="0" 
                  allow="autoplay; encrypted-media" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="lg:col-span-7">
              <MolecularGraph />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS GRID */}
      <section className="py-24 bg-slate-950/40 border-y border-purple-500/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white serif italic mb-2">Research Highlights</h2>
              <div className="h-1 w-20 bg-yellow-400"></div>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest hidden md:block">Synthesis & Discoveries</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-slate-900 hover:border-yellow-400/50 transition-all">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-3 translate-y-2 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                  <p className="text-white font-bold text-[10px] leading-tight mb-1">{item.title}</p>
                  <p className="text-yellow-400 text-[8px] font-bold">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH DEEP DIVE */}
      <section id="research" className="py-32 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7 space-y-16">
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-yellow-400">
                  <FlaskConical size={24} />
                  <h2 className="text-5xl font-bold text-white serif italic">Our Research</h2>
                </div>
                
                <div className="prose prose-invert prose-purple max-w-none text-slate-300 leading-relaxed space-y-6">
                  <p>
                    Our group explores, invents and discovers fundamental ways to control molecular-level dynamics and topology. 
                    This includes strategies and methods to synthesize interlocked molecular architectures...
                  </p>
                  <p className="bg-slate-900/50 p-8 border-l-4 border-purple-500 italic rounded-r-2xl text-lg">
                    "Perhaps the best way to appreciate the technological potential of controlled molecular-level motion is to recognise that nanomotors and molecular-level machines lie at the heart of every significant biological process."
                  </p>
                  <p>
                    When we learn how to build artificial structures that can control and exploit molecular level motion, it will potentially impact on every aspect of functional molecule and materials design.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl">
                <img src="https://www.catenane.net/images/general/research-map.png" alt="Research Map" className="w-full h-auto" />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div className="bg-slate-900 border border-purple-500/10 rounded-[3rem] p-10 overflow-hidden relative group">
                <img 
                  src="https://www.catenane.net/images/general/daveleigh2006.jpg" 
                  alt="Professor David Leigh" 
                  className="w-32 h-32 rounded-3xl object-cover mb-8 shadow-xl border-2 border-purple-500/20 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <h3 className="text-3xl font-bold text-white serif italic mb-2">Prof. David A. Leigh</h3>
                <p className="text-yellow-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">FRS FRSE FRSC MAE</p>
                <a href="#/prof" className="inline-flex items-center gap-3 bg-[#660099] text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-purple-500 transition-all">
                  Full Bio & CV <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLACEHOLDERS */}
      <section id="people" className="py-24 bg-slate-900/30 scroll-mt-24">
        <div className="container mx-auto px-6 text-center space-y-6">
          <Users className="mx-auto text-purple-400" size={48} />
          <h2 className="text-4xl font-bold text-white serif italic">The Team</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Profiles & Recruitment in Progress.</p>
        </div>
      </section>

      <section id="publications" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6 text-center space-y-6">
          <Book className="mx-auto text-yellow-400" size={48} />
          <h2 className="text-4xl font-bold text-white serif italic">Publications</h2>
          <a href="https://scholar.google.co.uk/citations?user=jLubszkAAAAJ&hl=en" target="_blank" className="text-yellow-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest flex items-center justify-center gap-2">
            View on Google Scholar
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
