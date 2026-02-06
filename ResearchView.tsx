
import React from 'react';
import { HIGHLIGHTS } from './constants';
import { 
  FlaskConical, Play, MessageSquare, ChevronRight, Binary, Zap, Microscope, Award, ArrowRight
} from 'lucide-react';

const ResearchView: React.FC = () => {
  return (
    <div className="py-24 space-y-32">
      {/* INTRO HERO SECTION: NANOBOT VIDEO */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl space-y-12 mb-20">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white serif italic tracking-tight">Molecular Robotics</h1>
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.4em]">Introductory Science & Public Impact</p>
          </div>
          
          <div className="prose prose-invert prose-purple max-w-none text-slate-300 leading-relaxed text-lg">
            <p className="font-light">
              In 2018 our group commissioned a short video from <a href="https://www.youtube.com/channel/UCTev4RNBiu6lqtx8z1e87fQ" target="_blank" className="text-white font-bold underline decoration-purple-500 underline-offset-4 hover:text-yellow-400 transition-colors">A Capella Science</a> to introduce the topic of molecular robotics. The result was <span className="text-white font-bold italic">‘Nanobot’</span>:
            </p>
          </div>
        </div>

        {/* VIDEOS GRID */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
           <div className="group relative">
             <div className="absolute -inset-1 bg-purple-600/20 rounded-[2.5rem] blur-xl group-hover:bg-purple-600/30 transition-all"></div>
             <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-purple-500/20 shadow-2xl relative z-10 bg-slate-900">
               <iframe className="w-full h-full" src="https://www.youtube.com/embed/ObvxPSQNMGc?rel=0&amp;showinfo=0" title="Nanobot Introduction" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
             </div>
             <div className="mt-6 flex items-center justify-between px-4">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Main Intro</span>
                <span className="text-white font-bold serif italic">‘Nanobot’ by Tim Blais</span>
             </div>
           </div>

           <div className="group relative">
             <div className="absolute -inset-1 bg-yellow-400/10 rounded-[2.5rem] blur-xl group-hover:bg-yellow-400/20 transition-all"></div>
             <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative z-10 bg-slate-900">
               <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/ymC5KkVy8zc?rel=0&amp;showinfo=0" title="Nanobots Follow-up" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
             </div>
             <div className="mt-6 flex items-center justify-between px-4">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Follow-up</span>
                <span className="text-white font-bold serif italic">Nanobots & Creativity</span>
             </div>
           </div>
        </div>

        <div className="text-center pt-8">
            <p className="text-slate-400 text-sm font-medium italic mb-12 flex items-center justify-center gap-3">
               Tim Blais did an amazing job <span className="text-yellow-400 text-lg">☺</span>
            </p>
        </div>
      </section>

      {/* COMMENTS SECTION */}
      <section className="bg-slate-950/50 border-y border-white/5 py-32 overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-4 space-y-8">
                    <div className="w-16 h-16 bg-purple-900/20 rounded-2xl flex items-center justify-center text-purple-400">
                        <MessageSquare size={32} />
                    </div>
                    <h2 className="text-4xl font-bold text-white serif italic leading-tight">Public Reception</h2>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        The Nanobot feature sparked a global conversation about the future of molecular engineering. These comments reflect the curiosity and excitement of a new generation of scientists.
                    </p>
                    <div className="pt-4">
                        <span className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                            Source: YouTube Comments <br/> 29 Jan 2019
                        </span>
                    </div>
                </div>
                <div className="lg:col-span-8 relative group">
                    <div className="absolute -inset-10 bg-purple-500/10 blur-3xl rounded-full"></div>
                    <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-3xl">
                        <img 
                            src="https://www.catenane.net/images/Nanobot%20comments.png" 
                            alt="Comments to the Nanobot video" 
                            className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                        />
                    </div>
                    <div className="absolute top-6 right-8 z-20">
                        <span className="bg-yellow-400 text-slate-950 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                            Viral Impact
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* RESEARCH PORTFOLIO GRID & SUB-FIELD NAV */}
      <section className="container mx-auto px-6 space-y-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-4 text-yellow-400 mb-4">
                <div className="h-px w-12 bg-purple-500/30"></div>
                <FlaskConical size={24} />
                <div className="h-px w-12 bg-purple-500/30"></div>
            </div>
            <h2 className="text-5xl font-bold text-white serif italic">Research Portfolio</h2>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.4em]">Explore our molecular library</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* STICKY SIDEBAR SUB-NAV */}
            <aside className="lg:col-span-3 sticky top-28 space-y-6">
                <div className="space-y-1">
                    <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-4">Chronological Index</h3>
                    <div className="flex flex-col border-l border-white/5 pl-4 gap-2">
                        {HIGHLIGHTS.map(h => (
                            <a 
                                key={h.slug} 
                                href={`#/research/${h.slug}`}
                                className="group flex flex-col py-2 border-b border-transparent hover:border-purple-500/20 transition-all"
                            >
                                <span className="text-yellow-400 text-[8px] font-black uppercase tracking-widest">{h.year}</span>
                                <span className="text-slate-400 text-[11px] group-hover:text-white transition-colors">{h.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="p-6 bg-purple-900/5 rounded-3xl border border-purple-500/10">
                    <p className="text-[10px] text-slate-500 leading-relaxed italic">
                        Click on any title to view high-resolution figures, full text, and animated simulations from the original scientific reports.
                    </p>
                </div>
            </aside>

            {/* PORTFOLIO GRID */}
            <div className="lg:col-span-9">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {HIGHLIGHTS.map((item, idx) => (
                        <a 
                            key={idx} 
                            href={`#/research/${item.slug}`} 
                            className="group relative block rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900 aspect-[4/3] hover:border-purple-500/50 transition-all duration-500 shadow-lg hover:shadow-purple-500/10"
                        >
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                                onError={(e) => { e.currentTarget.src = "https://www.catenane.net/images/graphical_abstracts/placeholder.jpg" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                            
                            <div className="absolute bottom-6 left-6 right-6 space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">{item.year}</span>
                                    <ChevronRight size={14} className="text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>
                                <h4 className="text-white font-bold text-[13px] leading-tight serif italic group-hover:text-yellow-400 transition-colors">
                                    {item.title}
                                </h4>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER CALLOUT: FIELD LEGACY */}
      <section className="container mx-auto px-6">
        <div className="bg-slate-900/50 border border-white/5 rounded-[4rem] p-16 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/5 blur-[100px] rounded-full"></div>
            
            <div className="space-y-4 relative z-10">
                <h3 className="text-3xl font-bold text-white serif italic">A Legacy of Innovation</h3>
                <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm">
                    From early rotary motors to complex 2D materials, our group continues to push the boundaries of artificial molecular systems. Our work interfaces controlled molecular-level motion with the macroscopic world.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10 w-full pt-8">
                <div className="space-y-2">
                    <Zap className="text-purple-400 mx-auto" size={24} />
                    <span className="block text-white font-bold text-[10px] uppercase tracking-widest">Dynamics</span>
                </div>
                <div className="space-y-2">
                    <Binary className="text-yellow-400 mx-auto" size={24} />
                    <span className="block text-white font-bold text-[10px] uppercase tracking-widest">Topology</span>
                </div>
                <div className="space-y-2">
                    <Microscope className="text-purple-400 mx-auto" size={24} />
                    <span className="block text-white font-bold text-[10px] uppercase tracking-widest">Synthesis</span>
                </div>
                <div className="space-y-2">
                    <Award className="text-yellow-400 mx-auto" size={24} />
                    <span className="block text-white font-bold text-[10px] uppercase tracking-widest">Discovery</span>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchView;
