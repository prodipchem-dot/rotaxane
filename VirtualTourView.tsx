
import React from 'react';
import { Microscope, MapPin, FlaskConical, Beaker, Zap } from 'lucide-react';

const VirtualTourView: React.FC = () => {
  return (
    <div className="py-24 space-y-32">
      {/* INTRO HERO */}
      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-6xl font-bold text-white serif italic">The Sir Robert Robinson Laboratory</h1>
                    <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.4em]">MIB Manchester | 4th Floor</p>
                </div>
                <div className="prose prose-invert prose-purple max-w-none text-slate-400 leading-relaxed space-y-6">
                    <p>
                        The Leigh group is housed in a custom-designed state-of-the-art facility for advanced organic synthesis in the 21st century. 
                        The lab consists of <span className="text-white font-bold">30 x 2m fumehoods</span> in the main lab and three adjacent instrument rooms.
                    </p>
                    <p>
                        Our infrastructure includes dedicated desk space and PCs for each researcher, a seminar room, and a casual seating area for collaborative brainstorming.
                    </p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-10 bg-purple-600/10 blur-3xl rounded-full"></div>
                <img src="https://www.catenane.net/images/general/vtourmap_web.jpg" alt="Lab Plan" className="relative z-10 w-full rounded-[3rem] border border-white/10 shadow-2xl" />
            </div>
        </div>
      </section>

      {/* EQUIPMENT SECTION */}
      <section className="bg-slate-950/50 border-y border-white/5 py-32">
        <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-20">
                <h2 className="text-4xl font-bold text-white serif italic">World-Class Instrumentation</h2>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Enabling Molecular Precision</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-slate-900 border border-white/5 p-8 rounded-[2.5rem] space-y-4">
                    <Zap className="text-yellow-400" />
                    <h4 className="text-white font-bold serif italic">NMR Spectroscopy</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">600 MHz with cryoprobe + departmental access to 800, 500, 400, and 300 MHz instruments.</p>
                </div>
                <div className="bg-slate-900 border border-white/5 p-8 rounded-[2.5rem] space-y-4">
                    <Beaker className="text-purple-400" />
                    <h4 className="text-white font-bold serif italic">Mass Spectrometry</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Two benchtop mass spectrometers and departmental state-of-the-art MS facilities.</p>
                </div>
                <div className="bg-slate-900 border border-white/5 p-8 rounded-[2.5rem] space-y-4">
                    <FlaskConical className="text-yellow-400" />
                    <h4 className="text-white font-bold serif italic">Synthesis</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Microwave synthesizers, automatic chromatography, HPLCs, and photochemical reactors.</p>
                </div>
                <div className="bg-slate-900 border border-white/5 p-8 rounded-[2.5rem] space-y-4">
                    <Microscope className="text-purple-400" />
                    <h4 className="text-white font-bold serif italic">Crystallography</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">High-resolution X-ray crystallography equipment to visualize interlocked topologies.</p>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER CALLOUT */}
      <section className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
            <h3 className="text-2xl text-white serif italic">The Manchester Advantage</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
                As part of the University of Manchester, we leverage a historic legacy of scientific breakthroughs, 
                from the birthplace of atomic theory to the pioneering of molecular robotics.
            </p>
        </div>
      </section>
    </div>
  );
};

export default VirtualTourView;
