import React from 'react';
import { HIGHLIGHTS } from './constants';
import { ArrowLeft, ExternalLink, Download, ArrowRight, BookOpen } from 'lucide-react';

interface ResearchProjectViewProps {
  slug: string;
}

const ResearchProjectView: React.FC<ResearchProjectViewProps> = ({ slug }) => {
  const project = HIGHLIGHTS.find(h => h.slug === slug);
  const currentIndex = HIGHLIGHTS.findIndex(h => h.slug === slug);
  const nextProject = HIGHLIGHTS[currentIndex + 1] || HIGHLIGHTS[0];

  if (!project) return (
    <div className="py-48 text-center space-y-6">
      <h2 className="text-3xl text-slate-900 font-bold serif italic">Project Not Found</h2>
      <a href="#/research" className="text-[#660099] underline uppercase text-xs font-bold tracking-widest">Return to Portfolio</a>
    </div>
  );

  const getMediaUrl = (path: string) => `https://www.catenane.net/${path.replace(/^\.\.\//, '')}`;

  const renderContent = () => {
    switch (slug) {
      case 'gel-contraction':
        return (
          <div className="space-y-12">
            <p className="text-slate-500 text-xs italic">‘Transducing chemical energy through catalysis by an artificial molecular motor,’ Peng-Lai Wang, Stefan Borsley, Martin J. Power, Alessandro Cavasso, Nicolas Giuseppone & David A. Leigh, Nature, 637, 594–600 (2025).</p>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                <p>Cells display a range of mechanical activities enabled by the cytoskeleton, a viscoelastic hydrogel manipulated by motor proteins powered through catalysis. The study demonstrates the powered contraction and powered re-expansion of a hydrogel driven by the directional rotation of artificial organocatalytic molecular motors incorporated within the polymeric framework.</p>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4 shadow-inner">
                    <img src={getMediaUrl("images/article_pictures/2025_GelContraction/Gelpicture1.png")} className="w-full rounded-2xl shadow-sm" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Fig 1: Contraction of a polymer gel with a covalently embedded chemically fuelled molecular rotary motor.</p>
                </div>
                <p>The motor-molecules generate force by the action of catalysis biasing the kinetics of ground-state conformational changes, the same type of catalysis-driven information ratchet mechanism as biological motor-molecules.</p>
            </div>
            <div className="aspect-video bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl">
                <video className="w-full h-full" controls poster={getMediaUrl("images/article_pictures/2025_GelContraction/Gelpicture2.png")}>
                    <source src={getMediaUrl("media/Cartoonvideo.mp4")} type="video/mp4" />
                </video>
            </div>
          </div>
        );

      case 'tape-reading':
        return (
          <div className="space-y-12">
            <p className="text-slate-500 text-xs italic">‘A Tape-Reading Molecular Ratchet’ Yansong Ren, Romain Jamagne, Daniel J. Tetlow, David A. Leigh, Nature, 612, 78–82 (2022).</p>
            <div className="grid gap-12 items-center">
                <div className="space-y-6 prose prose-slate text-slate-600 max-w-none">
                    <p>In 1936 Alan Turing published a concept for an automatic machine for abstract computing. Nowadays called a ‘Turing machine’, his proposal envisaged a device that featured a ‘head' that could read and write symbols while moving along a tape.</p>
                    <img src={getMediaUrl("images/article_pictures/2022TapeReading/Turing.png")} className="w-full rounded-3xl border border-slate-100 shadow-sm" />
                    <p>Now scientists at the University of Manchester have made an artificial molecular machine that moves along a molecular tape, changing the reading head’s shape in response to ‘symbols’ on the tape.</p>
                </div>
            </div>
            <div className="aspect-video bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl">
                <video className="w-full h-full" controls>
                    <source src={getMediaUrl("media/TapeVideo.mp4")} type="video/mp4" />
                </video>
            </div>
          </div>
        );

      case 'rotary-motor-2022':
        return (
          <div className="space-y-12">
            <p className="text-slate-500 text-xs italic">‘Autonomous fuelled directional rotation about a covalent single bond’ Stefan Borsley, Elisabeth Kreidt, David A. Leigh, Benjamin M. W. Roberts, Nature, 604, 80–85 (2022).</p>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>The Nobel Prize-winning physicist Richard Feynman was fascinated by the possibilities of extreme miniaturisation. In 1963 he postulated a molecular-scale ratchet that could extract work from a heat gradient.</p>
                <img src={getMediaUrl("images/article_pictures/2022RotaryMotor/Feynman.png")} className="w-full rounded-3xl border border-slate-100 shadow-sm" />
                <p>The Leigh group have shown that a 26-atom biaryl compound is a catalysis-driven motor that continuously transduces energy from a chemical fuel to induce repetitive 360° directional rotation of the two aromatic rings around the covalent single bond that connects them.</p>
            </div>
            <div className="aspect-video bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl">
                <video className="w-full h-full" controls>
                    <source src={getMediaUrl("media/RotaryVid2.mp4")} type="video/mp4" />
                </video>
            </div>
          </div>
        );

      default:
        return (
          <div className="py-24 text-center space-y-8">
             <div className="w-20 h-20 bg-slate-50 rounded-3xl mx-auto flex items-center justify-center text-slate-300">
               <BookOpen size={40} />
             </div>
             <div className="max-w-xl mx-auto space-y-4">
               <h3 className="text-2xl font-bold text-slate-900 serif italic">Archive Entry: {project.title}</h3>
               <p className="text-slate-500 leading-relaxed text-sm">Detailed figures and animated simulations for this {project.year} discovery are currently held in our technical archive. You can access the full report via the original source below.</p>
             </div>
             <div className="flex justify-center gap-4">
               <a href={`https://www.catenane.net/pages/${project.year}_${project.slug.replace(/-/g, '_')}.html`} target="_blank" className="bg-white border border-slate-200 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:text-[#660099] transition-all flex items-center gap-2 shadow-sm">
                 Legacy HTML Source <ExternalLink size={14} />
               </a>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="py-12 space-y-16">
      {/* HEADER HERO */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-end">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-[3.5rem] overflow-hidden border-2 border-slate-100 shadow-2xl bg-slate-50 flex-shrink-0">
            <img src={project.img} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 flex-grow">
            <a href="#/research" className="inline-flex items-center gap-2 text-[#660099] hover:text-slate-900 text-[10px] font-bold uppercase tracking-widest transition-colors">
              <ArrowLeft size={14} /> Back to Research
            </a>
            <div className="space-y-2">
              <span className="text-[#ffcc00] text-xs font-black uppercase tracking-widest">Milestone {project.year}</span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 serif italic leading-tight">{project.title}</h1>
            </div>
            <div className="flex gap-4">
              <a href={`https://www.catenane.net/pdfs/articles/${project.year}_${project.slug.replace(/-/g, '_')}.pdf`} target="_blank" className="bg-[#660099] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-purple-700 transition-all shadow-md flex items-center gap-2">
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
                    <h3 className="text-slate-900 font-bold text-[10px] uppercase tracking-widest">The Molecular Library</h3>
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
                            <span className={`text-[11px] font-medium leading-snug ${slug === h.slug ? 'text-slate-900' : 'text-slate-500'}`}>{h.title}</span>
                        </a>
                    ))}
                </nav>
            </div>
          </aside>

          <main className="lg:col-span-9 space-y-20">
            {/* CONTENT AREA */}
            <div className="bg-white border border-slate-100 rounded-[4rem] p-8 md:p-16 shadow-xl ring-1 ring-slate-50">
              {renderContent()}
            </div>

            {/* NEXT PROJECT CALLOUT */}
            <div className="bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-[3rem] p-12 flex flex-col md:flex-row justify-between items-center gap-12 group shadow-lg">
                <div className="space-y-4">
                    <span className="text-[#660099] text-[10px] font-bold uppercase tracking-widest">Up Next</span>
                    <h3 className="text-3xl text-slate-900 font-bold serif italic">{nextProject.title} ({nextProject.year})</h3>
                </div>
                <a href={`#/research/${nextProject.slug}`} className="bg-[#660099] text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-purple-700 transition-all shadow-lg flex items-center gap-3">
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