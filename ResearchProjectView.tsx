
import React from 'react';
import { HIGHLIGHTS, RESEARCH_DETAILS } from './constants';
import { ArrowLeft, ExternalLink, Download, ArrowRight, PlayCircle, BookOpen } from 'lucide-react';

interface ResearchProjectViewProps {
  slug: string;
}

const ResearchProjectView: React.FC<ResearchProjectViewProps> = ({ slug }) => {
  const projectSummary = HIGHLIGHTS.find(h => h.slug === slug);
  const projectData = RESEARCH_DETAILS[slug];
  
  const currentIndex = HIGHLIGHTS.findIndex(h => h.slug === slug);
  const nextProject = HIGHLIGHTS[currentIndex + 1] || HIGHLIGHTS[0];

  if (!projectSummary || !projectData) return (
    <div className="py-48 text-center space-y-6">
      <h2 className="text-3xl text-slate-900 font-bold serif italic">Project Entry Missing</h2>
      <p className="text-slate-500">The archive for "{slug}" is being updated.</p>
      <a href="#/research" className="text-[#660099] underline uppercase text-xs font-bold tracking-widest">Return to Portfolio</a>
    </div>
  );

  const getMediaUrl = (path: string) => `https://www.catenane.net/${path.replace(/^\.\.\//, '')}`;

  return (
    <div className="py-12 space-y-16">
      {/* HEADER HERO */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-end">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3.5rem] overflow-hidden border-2 border-slate-100 shadow-2xl bg-slate-50 flex-shrink-0">
            <img src={projectSummary.img} className="w-full h-full object-cover" alt={projectSummary.title} />
          </div>
          <div className="space-y-6 flex-grow">
            <a href="#/research" className="inline-flex items-center gap-2 text-[#660099] hover:text-slate-900 text-[10px] font-bold uppercase tracking-widest transition-colors">
              <ArrowLeft size={14} /> Back to Research
            </a>
            <div className="space-y-2">
              <span className="text-[#ffcc00] text-xs font-black uppercase tracking-widest">Milestone {projectSummary.year}</span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 serif italic leading-tight">{projectData.narrativeTitle}</h1>
            </div>
            <div className="flex gap-4">
               <a 
                href={getMediaUrl(`pdfs/articles/${projectSummary.year}_${projectSummary.slug.replace(/-/g, '_')}.pdf`)} 
                target="_blank" 
                className="bg-[#660099] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-purple-700 transition-all shadow-md flex items-center gap-2"
              >
                Download PDF <Download size={14} />
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
                    <h3 className="text-slate-900 font-bold text-[10px] uppercase tracking-widest">Molecular Library</h3>
                    <div className="h-0.5 w-8 bg-[#ffcc00]"></div>
                </div>
                <nav className="flex flex-col gap-1 border-l border-slate-100 pl-4">
                    {HIGHLIGHTS.map(h => (
                        <a 
                            key={h.slug} 
                            href={`#/research/${h.slug}`}
                            className={`group flex flex-col py-3 border-b border-slate-50 transition-all ${slug === h.slug ? 'scale-105 origin-left' : 'opacity-40 hover:opacity-100'}`}
                        >
                            <span className={`text-[8px] font-black uppercase tracking-widest ${slug === h.slug ? 'text-[#660099]' : 'text-slate-400'}`}>{h.year}</span>
                            <span className={`text-[11px] font-medium leading-snug ${slug === h.slug ? 'text-slate-900' : 'text-slate-50'}`}>{h.title}</span>
                        </a>
                    ))}
                </nav>
            </div>
          </aside>

          <main className="lg:col-span-9 space-y-20">
            {/* CONTENT AREA */}
            <div className="bg-white border border-slate-100 rounded-[4rem] p-8 md:p-16 shadow-xl ring-1 ring-slate-50 space-y-12">
              
              {/* Citation */}
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 italic text-slate-700 text-sm leading-relaxed">
                {projectData.citation}
              </div>

              {/* Narrative Content */}
              <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed text-lg space-y-8 font-light">
                {projectData.narrative.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Figures and Media */}
              <div className="space-y-16 pt-8">
                {projectData.figures.map((fig, i) => (
                  <div key={i} className="space-y-6">
                    {fig.type === 'image' ? (
                      <div className="bg-white p-4 rounded-[3rem] border border-slate-100 shadow-lg group overflow-hidden">
                        <img 
                          src={getMediaUrl(fig.url)} 
                          alt={fig.caption} 
                          className="w-full h-auto rounded-[2.5rem] group-hover:scale-[1.02] transition-transform duration-700" 
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-slate-900 rounded-[3rem] overflow-hidden border-2 border-slate-100 shadow-2xl relative">
                        <video 
                          className="w-full h-full" 
                          controls 
                          poster={projectSummary.img}
                        >
                          <source src={getMediaUrl(fig.url)} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                    <p className="text-[12px] text-slate-600 text-center font-bold uppercase tracking-widest px-8">
                      {fig.caption}
                    </p>
                  </div>
                ))}
              </div>

              {/* Original Source Link */}
              <div className="pt-12 border-t border-slate-100 flex justify-center">
                <a 
                  href={`https://www.catenane.net/pages/${projectSummary.year}_${projectSummary.slug.replace(/-/g, '_')}.html`} 
                  target="_blank" 
                  className="inline-flex items-center gap-3 text-[#660099] font-bold text-[11px] uppercase tracking-[0.2em] hover:text-[#ffcc00] transition-colors"
                >
                  View original legacy HTML source <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* NEXT PROJECT CALLOUT */}
            <div className="bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-[3rem] p-12 flex flex-col md:flex-row justify-between items-center gap-12 group shadow-lg">
                <div className="space-y-4">
                    <span className="text-[#660099] text-[10px] font-bold uppercase tracking-widest">Continue Discovery</span>
                    <h3 className="text-3xl text-slate-900 font-bold serif italic">{nextProject.title} ({nextProject.year})</h3>
                </div>
                <a href={`#/research/${nextProject.slug}`} className="bg-[#660099] text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-purple-700 transition-all shadow-lg flex items-center gap-3">
                    Next Chapter <ArrowRight size={16} />
                </a>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default ResearchProjectView;
