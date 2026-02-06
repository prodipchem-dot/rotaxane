
import React from 'react';
import { HIGHLIGHTS } from './constants';
// Added ArrowRight to imports to resolve the missing reference on line 143
import { ArrowLeft, ExternalLink, Play, BookOpen, Download, ArrowRight } from 'lucide-react';

interface ResearchProjectViewProps {
  slug: string;
}

const ResearchProjectView: React.FC<ResearchProjectViewProps> = ({ slug }) => {
  const project = HIGHLIGHTS.find(h => h.slug === slug);

  if (!project) return (
    <div className="py-48 text-center space-y-6">
      <h2 className="text-3xl text-white font-bold serif italic">Project Not Found</h2>
      <a href="#/research" className="text-yellow-400 underline uppercase text-xs font-bold tracking-widest">Return to Portfolio</a>
    </div>
  );

  const renderProjectContent = () => {
    switch (slug) {
      case 'gel-contraction':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Transducing chemical energy through catalysis by an artificial molecular motor,’ Peng-Lai Wang, Stefan Borsley, Martin J. Power, Alessandro Cavasso, Nicolas Giuseppone & David A. Leigh, Nature, 637, 594–600 (2025).</p>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
               <div className="space-y-6 text-slate-300 leading-relaxed">
                 <p>It seems counter-intuitive that the act of catalysis—simply the acceleration of a chemical reaction—somehow enables work to be done by the catalyst through the transduction of chemical energy from the reaction it accelerates. Yet this is how all of biology is powered.</p>
                 <p>The Leigh and Giuseppone groups demonstrate the transduction of chemical energy by a synthetic catalyst to generate force and perform mechanical work. The findings provide a blueprint for how to design artificial catalysis-driven molecular nanotechnology.</p>
               </div>
               <img src="https://www.catenane.net/images/article_pictures/2025_GelContraction/Gelpicture1.png" className="rounded-3xl border border-white/10" />
            </div>
            <div className="aspect-video bg-slate-900 rounded-[3rem] overflow-hidden border border-purple-500/30">
               <iframe className="w-full h-full" src="https://www.catenane.net/media/Cartoonvideo.mp4" title="Gel Contraction Video" frameBorder="0" allowFullScreen></iframe>
            </div>
            <p className="text-center text-xs text-slate-500 italic">Video: The transduction of chemical energy into mechanical work through catalysis by an artificial molecular motor.</p>
          </div>
        );
      case 'rotary-motor-2022':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Autonomous fuelled directional rotation about a covalent single bond’ Stefan Borsley, Elisabeth Kreidt, David A. Leigh, Benjamin M. W. Roberts, Nature, 604, 80–85 (2022).</p>
            <img src="https://www.catenane.net/images/article_pictures/2022RotaryMotor/Feynman.png" className="w-full rounded-3xl border border-white/10" />
            <div className="prose prose-invert max-w-none text-slate-300">
              <p>The Nobel Prize-winning physicist Richard Feynman was fascinated by the possibilities of extreme miniaturisation. In his famous lecture ‘There’s Plenty of Room at the Bottom’ he offered $1000 to ‘the first guy who makes… a rotating electric motor’.</p>
              <p>Now, the Leigh group have shown that a 26-atom biaryl compound is a catalysis-driven motor that continuously transduces energy from a chemical fuel to induce repetitive 360° directional rotation.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               <img src="https://www.catenane.net/images/article_pictures/2022RotaryMotor/Fig1.png" className="rounded-2xl border border-white/5" />
               <img src="https://www.catenane.net/images/article_pictures/2022RotaryMotor/Fig2.png" className="rounded-2xl border border-white/5" />
            </div>
          </div>
        );
      case '2d-weaving':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Self-assembly of a layered two-dimensional molecularly woven fabric’ Nature, 588, 429-435 (2020).</p>
            <img src="https://www.catenane.net/images/article_pictures/2D_Material_2020/1.jpg" className="w-full rounded-3xl border border-white/10 shadow-2xl" />
            <div className="prose prose-invert max-w-none text-slate-300">
               <p>To date, the weaving of strands at the molecular level has largely been limited to coordination polymers and DNA. Direct, bottom-up, assembly into linear organic polymers woven in two-dimensions has remained an elusive target.</p>
               <p>We used slowly crystallizing woven grid ‘tiles’ to connect strand end groups between grids, resulting in a layered, wholly-organic, 2D-molecularly-woven fabric.</p>
            </div>
            <div className="aspect-video bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10">
               <iframe className="w-full h-full" src="https://www.youtube.com/embed/TRR5pDYw8og" title="2D Weaving Animation" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        );
      default:
        return (
          <div className="py-24 text-center space-y-8">
             <div className="w-20 h-20 bg-slate-900 rounded-3xl mx-auto flex items-center justify-center text-slate-600">
               <BookOpen size={40} />
             </div>
             <div className="max-w-xl mx-auto space-y-4">
               <h3 className="text-2xl font-bold text-white serif italic">Technical Archive Entry</h3>
               <p className="text-slate-400 leading-relaxed">We are currently migrating our deep-archive publications (pre-2022) to this digital interactive format. You can access the full paper and original assets below.</p>
             </div>
             <div className="flex justify-center gap-4">
               <a href={`https://www.catenane.net/pages/${project.year}_${project.slug.replace(/-/g, '_')}.html`} target="_blank" className="bg-slate-900 border border-white/10 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:text-yellow-400 transition-all flex items-center gap-2">
                 Original Source <ExternalLink size={14} />
               </a>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="py-12 space-y-20">
      {/* HEADER SECTION */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-end">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3.5rem] overflow-hidden border-2 border-purple-500/20 shadow-2xl bg-slate-900 flex-shrink-0">
            <img src={project.img} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 flex-grow">
            <a href="#/research" className="inline-flex items-center gap-2 text-purple-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
              <ArrowLeft size={14} /> Back to Library
            </a>
            <div className="space-y-2">
              <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">{project.year} Breakthrough</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white serif italic leading-tight">{project.title}</h1>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#660099] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-purple-500 transition-all shadow-xl shadow-purple-500/20 flex items-center gap-2">
                Download PDF <Download size={14} />
              </button>
              <button className="bg-slate-900 border border-white/5 text-slate-300 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-yellow-400/50 transition-all flex items-center gap-2">
                Cite <BookOpen size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-FIELD NAV (The requested field under Research Portfolio) */}
      <section className="bg-slate-950/50 border-y border-white/5 py-6">
        <div className="container mx-auto px-6 flex overflow-x-auto gap-8 scrollbar-hide">
          {HIGHLIGHTS.map(h => (
            <a 
              key={h.slug} 
              href={`#/research/${h.slug}`} 
              className={`text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap py-2 transition-all ${slug === h.slug ? 'text-yellow-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {h.title}
            </a>
          ))}
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="bg-slate-900/30 border border-white/5 rounded-[4rem] p-12 md:p-20 shadow-3xl">
          {renderProjectContent()}
        </div>
      </section>

      {/* RELATED PROJECTS */}
      <section className="container mx-auto px-6 pb-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl text-white serif italic">Sequential Discoveries</h2>
          <a href="#/research" className="text-purple-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group">
            Full Library <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {HIGHLIGHTS.filter(h => h.slug !== slug).slice(0, 4).map(h => (
            <a key={h.slug} href={`#/research/${h.slug}`} className="group space-y-4">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/5 bg-slate-900">
                <img src={h.img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">{h.year}</p>
              <h4 className="text-white font-bold text-xs serif italic group-hover:text-yellow-400 transition-colors">{h.title}</h4>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResearchProjectView;
