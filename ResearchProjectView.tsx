
import React from 'react';
import { HIGHLIGHTS, RESEARCH_DETAILS } from './constants';
import { ArrowLeft, ExternalLink, BookOpen, ArrowRight } from 'lucide-react';

interface ResearchProjectViewProps {
  slug: string;
}

const ResearchProjectView: React.FC<ResearchProjectViewProps> = ({ slug }) => {
  const projectSummary = HIGHLIGHTS.find(h => h.slug === slug);
  const detail = RESEARCH_DETAILS[slug];
  const currentIndex = HIGHLIGHTS.findIndex(h => h.slug === slug);
  const nextProject = HIGHLIGHTS[currentIndex + 1] || HIGHLIGHTS[0];

  if (!projectSummary || !detail) return (
    <div className="py-48 text-center space-y-6">
      <h2 className="text-3xl text-white font-bold serif italic">Project Not Found</h2>
      <a href="#/research" className="text-yellow-400 underline uppercase text-xs font-bold tracking-widest">Return to Portfolio</a>
    </div>
  );

  const getMediaUrl = (path: string) => `https://www.catenane.net/${path.replace(/^\.\.\//, '')}`;

  return (
    <div className="py-12 space-y-16">
      {/* HEADER HERO */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-end">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-[3.5rem] overflow-hidden border-2 border-purple-500/20 shadow-2xl bg-slate-900 flex-shrink-0">
            <img src={projectSummary.img} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 flex-grow">
            <a href="#/research" className="inline-flex items-center gap-2 text-purple-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors mb-4">
              <ArrowLeft size={14} /> Back to Research
            </a>
            <div className="space-y-2">
              <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">{projectSummary.year} Milestone</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white serif italic leading-tight">{projectSummary.title}</h1>
            </div>
            <div className="flex gap-4">
              <a href={`https://www.catenane.net/pages/${projectSummary.year}_${slug.replace(/-/g, '_')}.html`} target="_blank" className="bg-[#660099] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-purple-500 transition-all shadow-xl shadow-purple-500/20 flex items-center gap-2">
                Original Publication <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN LAYOUT */}
      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <aside className="lg:col-span-3 hidden lg:block sticky top-28 h-[calc(100vh-120px)] overflow-y-auto pr-4 scrollbar-hide">
            <div className="space-y-8">
                <div className="space-y-2">
                    <h3 className="text-white font-bold text-[10px] uppercase tracking-widest text-slate-500">The Molecular Library</h3>
                    <div className="h-0.5 w-8 bg-yellow-400"></div>
                </div>
                <nav className="flex flex-col gap-1 border-l border-white/5 pl-4">
                    {HIGHLIGHTS.map(h => (
                        <a 
                            key={h.slug} 
                            href={`#/research/${h.slug}`}
                            className={`group flex flex-col py-3 border-b border-white/5 transition-all ${slug === h.slug ? 'scale-105 origin-left' : 'opacity-40 hover:opacity-100'}`}
                        >
                            <span className={`text-[8px] font-black uppercase tracking-widest ${slug === h.slug ? 'text-yellow-400' : 'text-slate-500'}`}>{h.year}</span>
                            <span className={`text-[11px] font-medium leading-snug ${slug === h.slug ? 'text-white' : 'text-slate-400'}`}>{h.title}</span>
                        </a>
                    ))}
                </nav>
            </div>
          </aside>

          <main className="lg:col-span-9 space-y-20">
            <div className="bg-slate-900/30 border border-white/5 rounded-[4rem] p-8 md:p-16 shadow-3xl ring-1 ring-white/5 space-y-12">
              <p className="text-slate-400 text-xs italic leading-relaxed border-b border-white/5 pb-8">{detail.citation}</p>
              
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-12">
                {detail.figures.slice(0, 1).map((fig, idx) => (
                   <div key={idx} className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                      {fig.type === 'image' ? (
                        <img src={getMediaUrl(fig.url)} className="w-full rounded-2xl shadow-2xl" alt={fig.caption} />
                      ) : (
                        <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                          <video className="w-full h-full" controls>
                            <source src={getMediaUrl(fig.url)} type="video/mp4" />
                          </video>
                        </div>
                      )}
                      <p className="text-[11px] text-slate-500 text-center font-medium italic">{fig.caption}</p>
                   </div>
                ))}

                <div className="space-y-6">
                  <h3 className="text-white serif italic text-3xl">{detail.narrativeTitle}</h3>
                  {detail.narrative.map((para, idx) => (
                    <p key={idx} className="text-lg font-light leading-relaxed">{para}</p>
                  ))}
                </div>

                <div className="grid gap-12">
                  {detail.figures.slice(1).map((fig, idx) => (
                    <div key={idx} className="space-y-6">
                      <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                        {fig.type === 'image' ? (
                          <img src={getMediaUrl(fig.url)} className="w-full rounded-2xl shadow-2xl" alt={fig.caption} />
                        ) : (
                          <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-purple-500/30">
                            <video className="w-full h-full" controls>
                              <source src={getMediaUrl(fig.url)} type="video/mp4" />
                            </video>
                          </div>
                        )}
                        <p className="text-[11px] text-slate-500 text-center font-medium italic">{fig.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#660099]/20 to-slate-900 border border-purple-500/20 rounded-[3rem] p-12 flex flex-col md:flex-row justify-between items-center gap-12 group shadow-2xl">
                <div className="space-y-4">
                    <span className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">Next Chapter</span>
                    <h3 className="text-3xl text-white font-bold serif italic">{nextProject.title} ({nextProject.year})</h3>
                </div>
                <a href={`#/research/${nextProject.slug}`} className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-2xl flex items-center gap-3">
                    Continue Discovery <ArrowRight size={16} />
                </a>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default ResearchProjectView;
