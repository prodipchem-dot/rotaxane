
import React from 'react';
import { HIGHLIGHTS } from './constants';
import { ArrowLeft, ExternalLink, Play, BookOpen, Download, ArrowRight, FlaskConical, FileText } from 'lucide-react';

interface ResearchProjectViewProps {
  slug: string;
}

const ResearchProjectView: React.FC<ResearchProjectViewProps> = ({ slug }) => {
  const project = HIGHLIGHTS.find(h => h.slug === slug);
  const currentIndex = HIGHLIGHTS.findIndex(h => h.slug === slug);
  const nextProject = HIGHLIGHTS[currentIndex + 1] || HIGHLIGHTS[0];

  if (!project) return (
    <div className="py-48 text-center space-y-6">
      <h2 className="text-3xl text-white font-bold serif italic">Project Not Found</h2>
      <a href="#/research" className="text-yellow-400 underline uppercase text-xs font-bold tracking-widest">Return to Portfolio</a>
    </div>
  );

  const getMediaUrl = (path: string) => `https://www.catenane.net/${path.replace(/^\.\.\//, '')}`;

  const renderContent = () => {
    switch (slug) {
      case 'gel-contraction':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Transducing chemical energy through catalysis by an artificial molecular motor,’ Peng-Lai Wang, Stefan Borsley, Martin J. Power, Alessandro Cavasso, Nicolas Giuseppone & David A. Leigh, Nature, 637, 594–600 (2025).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6">
                <p>Cells display a range of mechanical activities enabled by the cytoskeleton, a viscoelastic hydrogel manipulated by motor proteins powered through catalysis. The study demonstrates the powered contraction and powered re-expansion of a hydrogel driven by the directional rotation of artificial organocatalytic molecular motors incorporated within the polymeric framework.</p>
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2025_GelContraction/Gelpicture1.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Fig 1: Contraction of a polymer gel with a covalently embedded chemically fuelled molecular rotary motor.</p>
                </div>
                <p>The motor-molecules generate force by the action of catalysis biasing the kinetics of ground-state conformational changes, the same type of catalysis-driven information ratchet mechanism as biological motor-molecules.</p>
            </div>
            <div className="aspect-video bg-black rounded-[3rem] overflow-hidden border border-purple-500/30">
                <video className="w-full h-full" controls poster={getMediaUrl("images/article_pictures/2025_GelContraction/Gelpicture2.png")}>
                    <source src={getMediaUrl("media/Cartoonvideo.mp4")} type="video/mp4" />
                </video>
            </div>
            <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest font-bold">Video: Transduction of chemical energy into mechanical work</p>
          </div>
        );

      case 'tape-reading':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A Tape-Reading Molecular Ratchet’ Yansong Ren, Romain Jamagne, Daniel J. Tetlow, David A. Leigh, Nature, 612, 78–82 (2022).</p>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 prose prose-invert text-slate-300">
                    <p>In 1936 Alan Turing published a concept for an automatic machine for abstract computing. Nowadays called a ‘Turing machine’, his proposal envisaged a device that featured a ‘head' that could read and write symbols while moving along a tape.</p>
                    <p>Now scientists at the University of Manchester have made an artificial molecular machine that moves along a molecular tape, changing the reading head’s shape in response to ‘symbols’ on the tape.</p>
                </div>
                <img src={getMediaUrl("images/article_pictures/2022TapeReading/Turing.png")} className="rounded-3xl border border-white/10" />
            </div>
            <div className="aspect-video bg-black rounded-[3rem] overflow-hidden border border-purple-500/30">
                <video className="w-full h-full" controls>
                    <source src={getMediaUrl("media/TapeVideo.mp4")} type="video/mp4" />
                </video>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                    <img src={getMediaUrl("images/article_pictures/2022TapeReading/Fig1.png")} className="w-full rounded-xl" />
                    <p className="text-[10px] mt-4 text-slate-500">Figure 1: Chiroptical read-out of the sequence of a stereochemically encoded molecular tape.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                    <img src={getMediaUrl("images/article_pictures/2022TapeReading/Fig2.png")} className="w-full rounded-xl" />
                    <p className="text-[10px] mt-4 text-slate-500">Figure 2: Circular dichroism (CD) spectra of the machine states.</p>
                </div>
            </div>
          </div>
        );

      case 'rotary-motor-2022':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Autonomous fuelled directional rotation about a covalent single bond’ Stefan Borsley, Elisabeth Kreidt, David A. Leigh, Benjamin M. W. Roberts, Nature, 604, 80–85 (2022).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
                <p>The Nobel Prize-winning physicist Richard Feynman was fascinated by the possibilities of extreme miniaturisation. In 1963 he postulated a molecular-scale ratchet that could extract work from a heat gradient.</p>
                <p>The Leigh group have shown that a 26-atom biaryl compound is a catalysis-driven motor that continuously transduces energy from a chemical fuel to induce repetitive 360° directional rotation of the two aromatic rings around the covalent single bond that connects them.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <img src={getMediaUrl("images/article_pictures/2022RotaryMotor/Fig1.png")} className="w-full rounded-3xl border border-white/10" />
                <img src={getMediaUrl("images/article_pictures/2022RotaryMotor/Fig2.png")} className="w-full rounded-3xl border border-white/10" />
            </div>
            <div className="aspect-video bg-black rounded-[3rem] overflow-hidden border border-purple-500/30">
                <video className="w-full h-full" controls>
                    <source src={getMediaUrl("media/RotaryVid2.mp4")} type="video/mp4" />
                </video>
            </div>
          </div>
        );

      case '2d-weaving':
        return (
          <div className="space-y-12 text-slate-300">
            <p className="text-slate-400 text-xs italic">‘Self-assembly of a layered two-dimensional molecularly woven fabric’ David P. August et al., Nature, 588, 429-435 (2020).</p>
            <img src={getMediaUrl("images/article_pictures/2D_Material_2020/1.jpg")} className="w-full rounded-3xl" />
            <div className="prose prose-invert max-w-none">
                <p>The weaving of one-dimensional strands into two-dimensional fabrics has underpinned technological progress through the ages. Despite being proposed on a number of occasions, the direct, bottom-up, assembly into linear organic polymers woven in two-dimensions has remained an elusive target.</p>
                <p>We carried out a polymerization reaction using slowly crystallizing woven grid ‘tiles’. The result was a layered, wholly-organic, 2D-molecularly-woven fabric, in which warp and weft single-chain polymer strands remain associated solely through in-layer mechanical entanglements.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <img src={getMediaUrl("images/article_pictures/2D_Material_2020/4.jpg")} className="rounded-2xl" />
                <div className="aspect-square bg-slate-900 rounded-2xl flex items-center justify-center p-4">
                    <img src={getMediaUrl("images/article_pictures/2D_Material_2020/5.png")} className="w-full" />
                </div>
                <img src={getMediaUrl("images/article_pictures/2D_Material_2020/3.png")} className="rounded-2xl" />
            </div>
            <div className="aspect-video bg-black rounded-[3rem] overflow-hidden border border-purple-500/30">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/TRR5pDYw8og" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        );

      case 'endless-knot':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A molecular endless (74) knot’ David A. Leigh et al., Nat Chem, 13, 117-122 (2021).</p>
            <div className="bg-slate-900 rounded-3xl p-10 flex flex-col md:flex-row gap-12 items-center">
                <img src={getMediaUrl("images/article_pictures/endless_knot_2020/1.jpg")} className="w-64 h-auto rounded-xl" />
                <div className="space-y-6 prose prose-invert">
                    <p>The endless knot is a basic motif of Celtic interlace, the smallest Chinese knot, and is one of the eight auspicious symbols common to many Eastern religions, where it represents the union of wisdom and method.</p>
                    <p>The story of the synthesis of this molecular knot illustrates well how cutting-edge scientific research often actually proceeds: one continually faces challenges that one doesn't know quite enough to definitely be able to solve.</p>
                </div>
            </div>
            <div className="aspect-video bg-black rounded-[3rem] overflow-hidden border border-purple-500/30">
                <video className="w-full h-full" controls>
                    <source src={getMediaUrl("media/endless.mp4")} type="video/mp4" />
                </video>
            </div>
            <img src={getMediaUrl("images/article_pictures/endless_knot_2020/8.jpg")} className="w-full rounded-3xl border border-white/5" />
          </div>
        );

      case 'peptide-synth':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Sequence-Specific Peptide Synthesis by an Artificial Small-Molecule Machine’ B. Lewandowski et al., Science, 339, 189-193 (2013).</p>
            <div className="prose prose-invert max-w-none text-slate-300">
                <p>Nature builds proteins in complex molecular factories where information from the genetic code is used to programme the linking of molecular building blocks in the correct order. The most extraordinary is the ribosome.</p>
                <p>Our molecular machine features a functionalized nanometer-sized ring that moves along a molecular track, picking up building blocks located on the path and connecting them together in a specific order to synthesize the desired new molecule.</p>
            </div>
            <img src={getMediaUrl("images/article_pictures/pepsynth_fig1.png")} className="w-full rounded-3xl border border-white/10" />
            <div className="aspect-video bg-black rounded-[3rem] overflow-hidden border border-purple-500/30">
                <video className="w-full h-full" controls>
                    <source src={getMediaUrl("media/2013peptsynth.mp4")} type="video/mp4" />
                </video>
            </div>
            <img src={getMediaUrl("images/article_pictures/pepsynth_fig2.png")} className="w-full rounded-3xl border border-white/10" />
          </div>
        );

      case 'nanomotor-2016':
        return (
          <div className="space-y-12 text-slate-300">
            <p className="text-slate-400 text-xs italic">‘An Autonomous Chemically Fuelled Small-Molecule Motor’ Miriam R. Wilson et al., Nature, 534, 235-240 (2016).</p>
            <h3 className="text-2xl font-bold serif italic text-white">Cracking Nanomotor, Gromit!</h3>
            <div className="flex flex-col md:flex-row gap-8">
                <img src={getMediaUrl("images/article_pictures/nanomotor2016/Figure2a.gif")} className="w-48 h-auto rounded-xl" />
                <div className="prose prose-invert">
                    <p>Addition of Fmoc-Cl causes the blue ring to continuously rotate in a clockwise direction around the cyclic track. This biases the direction of Brownian motion of the blue ring causing directional rotation.</p>
                    <p>The design can be seen as the chemical equivalent of the famous Wallace and Gromit animation in which Gromit puts down track in front of the train as fast as the train travels.</p>
                </div>
            </div>
            <div className="aspect-video bg-black rounded-[3rem] overflow-hidden border border-purple-500/30">
                <video className="w-full h-full" controls>
                    <source src={getMediaUrl("media/ChemMotorAnim.mp4")} type="video/mp4" />
                </video>
            </div>
            <img src={getMediaUrl("images/article_pictures/nanomotor2016/nanomotor_2016_cover.jpg")} className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl" />
          </div>
        );

      case 'pentafoil-knot':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A Synthetic Molecular Pentafoil Knot’, Jean-François Ayme et al., Nature Chem, 4, 15-20 (2012).</p>
            <img src={getMediaUrl("images/covers/large/2012_nat_chem_cover.jpg")} className="w-full max-w-md mx-auto rounded-3xl border border-white/10" />
            <div className="prose prose-invert max-w-none text-slate-300">
                <p>The thread that is tied into the star-shaped knot is just 160 atoms in length—that is about 16 nanometres long. The researchers used a technique known as ‘self-assembly’ to prepare the knot through a chemical reaction.</p>
                <p>Knots are found in DNA and proteins where they can play an important role in the substance’s properties (for example, up to 85% of the elasticity of natural rubber is thought to be due to knot-like entanglements).</p>
            </div>
            <div className="aspect-video bg-black rounded-[3rem] overflow-hidden border border-purple-500/30">
                <video className="w-full h-full" controls>
                    <source src={getMediaUrl("media/2012hologram.mp4")} type="video/mp4" />
                </video>
            </div>
            <div className="text-center">
                <a href={getMediaUrl("media/2012hologram.mp4")} className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest hover:underline flex items-center justify-center gap-2">
                    Download Hologram Video <Download size={12}/>
                </a>
            </div>
          </div>
        );

      case 'macroscopic-transport':
        return (
          <div className="space-y-12">
             <p className="text-slate-400 text-xs italic">‘Macroscopic Transport by Synthetic Molecular Machines’ J Berná et al., Nature Mater, 4, 704-710 (2005).</p>
             <div className="grid lg:grid-cols-2 gap-12">
                <div className="prose prose-invert text-slate-300">
                    <p>A single layer of light-driven molecular shuttles attached to a self-assembled monolayer of thiols on gold is able to transport microlitre droplets of diiodomethane along the surface.</p>
                    <p>Not only can this transport a droplet across a flat surface but it can also be used to transport a droplet against gravity, elevating it 1 mm up a 12° slope.</p>
                </div>
                <div className="space-y-4">
                    <img src={getMediaUrl("images/article_pictures/trainsmall.jpg")} className="w-full rounded-2xl border border-white/5" />
                    <img src={getMediaUrl("images/article_pictures/natmatfig2.jpg")} className="w-full rounded-2xl border border-white/5" />
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href={getMediaUrl("images/article_pictures/dropletmovie.avi")} className="p-4 bg-slate-900 border border-white/5 rounded-2xl flex items-center gap-4 text-xs hover:border-yellow-400/50 transition-all">
                    <Play size={14} className="text-yellow-400"/> Droplet on glass
                </a>
                <a href={getMediaUrl("images/article_pictures/dropletmovie2.avi")} className="p-4 bg-slate-900 border border-white/5 rounded-2xl flex items-center gap-4 text-xs hover:border-yellow-400/50 transition-all">
                    <Play size={14} className="text-yellow-400"/> Droplet on mica
                </a>
                <a href={getMediaUrl("images/article_pictures/dropletmovie3.avi")} className="p-4 bg-slate-900 border border-white/5 rounded-2xl flex items-center gap-4 text-xs hover:border-yellow-400/50 transition-all">
                    <Play size={14} className="text-yellow-400"/> Droplet uphill
                </a>
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
               <h3 className="text-2xl font-bold text-white serif italic">Archive Entry: {project.title}</h3>
               <p className="text-slate-400 leading-relaxed">Full technical documentation and high-resolution figures for this {project.year} discovery are available in our legacy database.</p>
             </div>
             <div className="flex justify-center gap-4">
               <a href={`https://www.catenane.net/pages/${project.year}_${project.slug.replace(/-/g, '_')}.html`} target="_blank" className="bg-slate-950 border border-white/10 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:text-yellow-400 transition-all flex items-center gap-2">
                 Original HTML Source <ExternalLink size={14} />
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
              <a href={`https://www.catenane.net/pdfs/articles/${project.year}_${project.slug.replace(/-/g, '_')}.pdf`} target="_blank" className="bg-[#660099] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-purple-500 transition-all shadow-xl shadow-purple-500/20 flex items-center gap-2">
                Article PDF <Download size={14} />
              </a>
              <button className="bg-slate-900 border border-white/5 text-slate-300 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-yellow-400/50 transition-all flex items-center gap-2">
                Cite <BookOpen size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-FIELD NAV */}
      <section className="sticky top-20 z-40 bg-slate-950/80 backdrop-blur-xl border-y border-white/5 py-4 shadow-2xl">
        <div className="container mx-auto px-6 flex overflow-x-auto gap-8 scrollbar-hide">
          {HIGHLIGHTS.map(h => (
            <a 
              key={h.slug} 
              href={`#/research/${h.slug}`} 
              className={`text-[9px] font-bold uppercase tracking-[0.2em] whitespace-nowrap py-2 transition-all ${slug === h.slug ? 'text-yellow-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {h.title}
            </a>
          ))}
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="bg-slate-900/30 border border-white/5 rounded-[4rem] p-12 md:p-20 shadow-3xl ring-1 ring-white/5">
          {renderContent()}
        </div>
      </section>

      {/* NEXT PROJECT CALLOUT */}
      <section className="container mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-[#660099]/20 to-slate-900 border border-purple-500/20 rounded-[3rem] p-12 flex flex-col md:flex-row justify-between items-center gap-12 group">
            <div className="space-y-4">
                <span className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">Next Discovery</span>
                <h3 className="text-3xl text-white font-bold serif italic">{nextProject.title} ({nextProject.year})</h3>
            </div>
            <a href={`#/research/${nextProject.slug}`} className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-2xl flex items-center gap-3">
                Explore Next <ArrowRight size={16} />
            </a>
        </div>
      </section>
    </div>
  );
};

export default ResearchProjectView;
