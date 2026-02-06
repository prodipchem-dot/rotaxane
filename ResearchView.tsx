
import React from 'react';
import { Network, Zap, Binary, Layers, PlayCircle } from 'lucide-react';

const ResearchView: React.FC = () => {
  return (
    <div className="py-24 space-y-32">
      {/* INTRO SECTION */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl space-y-12 mb-20">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white serif italic">Molecular Robotics & Topology</h1>
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.4em]">Molecular Magic @ Manchester</p>
          </div>
          
          <div className="prose prose-invert prose-purple max-w-none text-slate-300 leading-relaxed text-lg">
            <p>
              In 2018 our group commissioned a short video from A Capella Science to introduce the topic of molecular robotics. 
              The result was <span className="text-white font-bold italic">‘Nanobot’</span>:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="aspect-video rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl bg-slate-900">
             <iframe className="w-full h-full" src="https://www.youtube.com/embed/ObvxPSQNMGc" title="Nanobot 1" frameBorder="0" allowFullScreen></iframe>
           </div>
           <div className="aspect-video rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl bg-slate-900">
             <iframe className="w-full h-full" src="https://www.youtube.com/embed/ymC5KkVy8zc" title="Nanobot 2" frameBorder="0" allowFullScreen></iframe>
           </div>
        </div>
      </section>

      {/* CORE AREAS SECTION */}
      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 space-y-8">
                <h2 className="text-4xl font-bold text-white serif italic">Fields of Exploration</h2>
                <div className="space-y-8">
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center text-purple-400"><Network/></div>
                        <div className="space-y-2">
                            <h4 className="text-white font-bold text-lg serif italic">Molecular Shuttles & Motors</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">Synthesis and characterization of [2]rotaxane-based shuttles and autonomous rotary motors driven by chemical fuels.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center text-yellow-400"><Binary/></div>
                        <div className="space-y-2">
                            <h4 className="text-white font-bold text-lg serif italic">Topology & Knots</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">Designing complex molecular topologies including Trefoil, Pentafoil, and the record-breaking 819-crossing knots.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center text-purple-400"><Layers/></div>
                        <div className="space-y-2">
                            <h4 className="text-white font-bold text-lg serif italic">Woven Fabrics</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">Pioneering the construction of 2D molecularly woven fabrics through self-assembly and grid-templates.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-6">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full"></div>
                    <img src="https://www.catenane.net/images/general/research-map.png" alt="Research Map" className="relative z-10 w-full rounded-[3rem] border border-white/10 shadow-2xl" />
                </div>
            </div>
        </div>
      </section>

      <section className="bg-slate-950/50 border-y border-white/5 py-32">
        <div className="container mx-auto px-6 text-center space-y-12">
            <h3 className="text-3xl font-bold text-white serif italic">Synthetic Molecular Walkers</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
                Exploring bipedal and robotic arm mechanisms that can walk along tracks and transport cargo iteratively, mimicking biological ribosomes.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center gap-4">
                    <PlayCircle className="text-purple-400" size={48} />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Video Simulation</span>
                    <h5 className="text-white font-bold">2013 Peptide Synthesizer</h5>
                </div>
                <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center gap-4">
                    <PlayCircle className="text-yellow-400" size={48} />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Video Simulation</span>
                    <h5 className="text-white font-bold">2015 Robotic Arm</h5>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchView;
