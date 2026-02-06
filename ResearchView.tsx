import React from 'react';
import { HIGHLIGHTS } from './constants';
import { 
  FlaskConical, Play, MessageSquare, ChevronRight, Binary, Zap, Microscope, Award, ArrowRight
} from 'lucide-react';

const ResearchView: React.FC = () => {
  return (
    <div className="py-24 space-y-32">
      {/* INTRO HERO SECTION */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl space-y-12 mb-20">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 serif italic tracking-tight">Molecular Robotics</h1>
            <p className="text-[#660099] text-xs font-bold uppercase tracking-[0.4em]">Introductory Science & Public Impact</p>
          </div>
          
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
            <p className="font-light">
              In 2018 our group commissioned a short video from <a href="https://www.youtube.com/channel/UCTev4RNBiu6lqtx8z1e87fQ" target="_blank" className="text-[#660099] font-bold underline decoration-[#ffcc00] underline-offset-4 hover:text-[#ffcc00] transition-colors">A Capella Science</a> to introduce the topic of molecular robotics.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
           <div className="group relative">
             <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl relative z-10 bg-white">
               <iframe className="w-full h-full" src="https://www.youtube.com/embed/ObvxPSQNMGc?rel=0&amp;showinfo=0" title="Nanobot Introduction" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
             </div>
             <div className="mt-6 flex items-center justify-between px-4">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Main Intro</span>
                <span className="text-slate-900 font-bold serif italic">‘Nanobot’ by Tim Blais</span>
             </div>
           </div>

           <div className="group relative">
             <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl relative z-10 bg-white">
               <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/ymC5KkVy8zc?rel=0&amp;showinfo=0" title="Nanobots Follow-up" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
             </div>
             <div className="mt-6 flex items-center justify-between px-4">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Follow-up</span>
                <span className="text-slate-900 font-bold serif italic">Nanobots & Creativity</span>
             </div>
           </div>
        </div>
      </section>

      {/* COMMENTS SECTION */}
      <section className="bg-slate-50 border-y border-slate-100 py-32 overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-4 space-y-8">
                    <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-[#660099]">
                        <MessageSquare size={32} />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 serif italic leading-tight">Public Reception</h2>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        The Nanobot feature sparked a global conversation about the future of molecular engineering. These comments reflect curiosity and excitement.
                    </p>
                </div>
                <div className="lg:col-span-8 relative">
                    <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-200 bg-white shadow-2xl">
                        <img 
                            src="https://www.catenane.net/images/Nanobot%20comments.png" 
                            alt="Comments" 
                            className="w-full h-auto opacity-90 transition-opacity duration-700" 
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="container mx-auto px-6 space-y-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-5xl font-bold text-slate-900 serif italic">Research Portfolio</h2>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.4em]">Our Molecular Library</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
            <aside className="lg:col-span-3 sticky top-28 space-y-6">
                <h3 className="text-slate-900 font-bold text-xs uppercase tracking-[0.3em] mb-4">Chronological Index</h3>
                <div className="flex flex-col border-l border-slate-100 pl-4 gap-2">
                    {HIGHLIGHTS.map(h => (
                        <a 
                            key={h.slug} 
                            href={`#/research/${h.slug}`}
                            className="group flex flex-col py-2 transition-all"
                        >
                            <span className="text-[#660099] text-[8px] font-black uppercase tracking-widest">{h.year}</span>
                            <span className="text-slate-500 text-[11px] group-hover:text-[#660099] transition-colors">{h.title}</span>
                        </a>
                    ))}
                </div>
            </aside>

            <div className="lg:col-span-9">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {HIGHLIGHTS.map((item, idx) => (
                        <a 
                            key={idx} 
                            href={`#/research/${item.slug}`} 
                            className="group relative block rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white aspect-[4/3] hover:border-[#660099] transition-all shadow-md"
                        >
                            <img src={item.img} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80 group-hover:opacity-20 transition-opacity"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="text-[#660099] text-[10px] font-black uppercase tracking-widest">{item.year}</span>
                                <h4 className="text-slate-900 font-bold text-[13px] leading-tight serif italic">{item.title}</h4>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchView;