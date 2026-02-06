
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
                    <h1 className="text-6xl font-bold text-slate-900 serif italic">The Sir Robert Robinson Laboratory</h1>
                    <p className="text-[#660099] text-xs font-bold uppercase tracking-[0.4em]">MIB Manchester | 4th Floor</p>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                    <p>
                        The Leigh group is housed in a custom-designed state-of-the-art facility for advanced organic synthesis. 
                        The lab consists of <span className="text-slate-900 font-bold">30 x 2m fumehoods</span> in the main lab and adjacent instrument rooms.
                    </p>
                    <p>
                        Our infrastructure includes dedicated workspace for each researcher, collaborative seminar rooms, and modern instrumentation access.
                    </p>
                </div>
            </div>
            <div className="relative">
                <img src="https://www.catenane.net/images/general/vtourmap_web.jpg" alt="Lab Plan" className="relative z-10 w-full rounded-[3rem] border border-slate-200 shadow-xl p-4 bg-white" />
            </div>
        </div>
      </section>

      {/* EQUIPMENT SECTION */}
      <section className="bg-slate-50 border-y border-slate-200 py-32">
        <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-20">
                <h2 className="text-4xl font-bold text-slate-900 serif italic">World-Class Instrumentation</h2>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Enabling Molecular Precision</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: Zap, title: "NMR Spectroscopy", desc: "600 MHz with cryoprobe + departmental access up to 800 MHz.", color: "text-[#ffcc00]" },
                    { icon: Beaker, title: "Mass Spectrometry", desc: "Benchtop mass specs and departmental state-of-the-art MS facilities.", color: "text-[#660099]" },
                    { icon: FlaskConical, title: "Synthesis", desc: "Microwave synthesizers, automatic chromatography, and HPLCs.", color: "text-[#ffcc00]" },
                    { icon: Microscope, title: "Crystallography", desc: "High-res X-ray equipment to visualize interlocked topologies.", color: "text-[#660099]" }
                ].map((item, i) => (
                    <div key={i} className="bg-white border border-slate-200 p-8 rounded-[2.5rem] space-y-4 shadow-sm hover:shadow-md transition-shadow">
                        <item.icon className={item.color} />
                        <h4 className="text-slate-900 font-bold serif italic">{item.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FOOTER CALLOUT */}
      <section className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
            <h3 className="text-2xl text-slate-900 serif italic">The Manchester Advantage</h3>
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