
import React from 'react';
import { HIGHLIGHTS } from './constants';
import { ArrowLeft, ExternalLink, Play, BookOpen, Download, ArrowRight, FlaskConical, FileText, Info } from 'lucide-react';

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
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2025_GelContraction/Gelpicture1.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Fig 1: Contraction of a polymer gel with a covalently embedded chemically fuelled molecular rotary motor.</p>
                </div>
                <p>Cells display a range of mechanical activities enabled by the cytoskeleton, a viscoelastic hydrogel manipulated by motor proteins powered through catalysis. The study demonstrates the powered contraction and powered re-expansion of a hydrogel driven by the directional rotation of artificial organocatalytic molecular motors incorporated within the polymeric framework.</p>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/Cartoonvideo.mp4")} type="video/mp4" />
                    </video>
                </div>
                <p>The motor-molecules generate force by the action of catalysis biasing the kinetics of ground-state conformational changes, the same type of catalysis-driven information ratchet mechanism as biological motor-molecules.</p>
            </div>
          </div>
        );

      case 'tape-reading':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A Tape-Reading Molecular Ratchet’ Yansong Ren, Romain Jamagne, Daniel J. Tetlow, David A. Leigh, Nature, 612, 78–82 (2022).</p>
            <div className="space-y-8 prose prose-invert text-slate-300 max-w-none">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2022TapeReading/Turing.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">A molecular finite automaton: an artificial molecular Turing machine.</p>
                </div>
                <p>In 1936 Alan Turing published a concept for an automatic machine for abstract computing. Nowadays called a ‘Turing machine’, his proposal envisaged a device that featured a ‘head' that could read and write symbols while moving along a tape.</p>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls loop>
                        <source src={getMediaUrl("media/TapeVideo.mp4")} type="video/mp4" />
                    </video>
                </div>
                <p>The molecular machine features a crown ether that is pumped from solution onto a molecular tape by a pulse of chemical fuel. This allows sequence information programmed into the tape to be read out as a string of digits in a non-destructive manner.</p>
            </div>
          </div>
        );

      case 'rotary-motor-2022':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Autonomous fuelled directional rotation about a covalent single bond’ Stefan Borsley, Elisabeth Kreidt, David A. Leigh, Benjamin M. W. Roberts, Nature, 604, 80–85 (2022).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2022RotaryMotor/Feynman.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Motors in miniature: From Feynman’s theoretical ratchet-and-pawl (1963).</p>
                </div>
                <p>The Leigh group have shown that a 26-atom biaryl compound is a catalysis-driven motor that continuously transduces energy from a chemical fuel to induce repetitive 360° directional rotation of the two aromatic rings around the covalent single bond that connects them.</p>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/RotaryVid2.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'phase-transfer':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Pumping between phases with a pulsed-fuel molecular ratchet’ Dean Thomas et al, Nat. Nanotechnol. (2022).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2022PhaseTransfer/TopImage.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Out-of-equilibrium pumping from solution onto polymer beads.</p>
                </div>
                <p>The Leigh group report on an artificial molecular pump, immobilised on polymer beads, that uses a ratchet mechanism to actively transport, away from equilibrium, substrates from solution onto the beads.</p>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/PhaseTransfer.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'vernier-knot':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Vernier Template Synthesis of Molecular Knots’ Zoe Ashbridge et al, Science, 375, 1035-1041 (2022).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/Vernier_Knot_2022/Underwater.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Vernier Entanglements: Systematic molecular entanglements.</p>
                </div>
                <p>Vernier templating relies on a mismatch between the number of binding sites on two complementary components. The Leigh group adapted this to the assembly of molecular knots by complexing ligand strands.</p>
                <img src={getMediaUrl("images/article_pictures/Vernier_Knot_2022/fig2.jpg")} className="mx-auto h-64 rounded-2xl border border-white/10" />
            </div>
          </div>
        );

      case 'catalysis-pump':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A catalysis-driven artificial molecular pump’ Shuntaro Amano et al, Nature, 594, 529-534 (2021).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/Cat_Pump_2021/1.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Pumping through Catalysis: Structure and operation.</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/CatPump.mp4")} type="video/mp4" />
                    </video>
                </div>
                <p>Following addition of the fuel, the pump continuously pushes crown ether macrocycles from bulk solution onto a molecular axle without the need for further intervention.</p>
            </div>
          </div>
        );

      case '2d-weaving':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Self-assembly of a layered two-dimensional molecularly woven fabric’ David P. August et al, Nature, 588, 429-435 (2020).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2D_Material_2020/1.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">A 2D-molecularly-woven fabric.</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/1.mp4")} type="video/mp4" />
                    </video>
                </div>
                <p>The weaving of flexible woven strands gives conventional textiles their characteristic properties. Bottom-up assembly of molecular building blocks into linear organic polymers woven in 2D underpinned this discovery.</p>
            </div>
          </div>
        );

      case 'endless-knot':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A molecular endless (74) knot’ David A. Leigh et al, Nat Chem, 13, 117-122 (2021).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/endless_knot_2020/1.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Traditional Chinese blue calico tapestry featuring a molecular endless knot.</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/endless.mp4")} type="video/mp4" />
                    </video>
                </div>
                <p>The realization of the Star of David in molecular form by University of Manchester chemists. The endless knot represents the union of wisdom and method.</p>
            </div>
          </div>
        );

      case 'molecule-knots':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Tying different knots in a molecular strand’ David A. Leigh et al, Nature, 584, 562-568 (2020).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/5_2_knot_2020/5_2_knot_info.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Tying a three-twist knot by programmed folding.</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/52%20knot.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'pulsed-fuel':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Rotary and linear molecular motors driven by pulses of a chemical fuel’ Erbas-Cakmak et al, Science, 358, 340-343 (2017).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/chemical_fuelled_motor_2017/machines%20infograph.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Chemically Fuelled Molecular Machinery infographic.</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/2catenane%20video%20crop.mp4")} type="video/mp4" />
                    </video>
                </div>
                <p>The energy ratchet relies on switching between acid and base, which simultaneously switches the heights of both energy maxima and energy minima for ring movement.</p>
            </div>
          </div>
        );

      case 'assembler':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Stereodivergent synthesis with a programmable molecular machine’ Salma Kassem et al, Nature, 549, 374-378 (2017).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/assembler2017/assembler_cover.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Building with a Programmable Molecular Robot.</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/assembler%20animation.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case '819-knot':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Braiding a molecular knot with eight crossings’ Danon et al, Science, 355, 159-162 (2017).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/819knot2017/819knot-cut.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">An 819 knot illustration.</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/2017_Knot_819_assemblyweb.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'knot-catalysis':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Allosteric Initiation and Regulation of Catalysis with a Molecular Knot’ Marcos et al, Science, 352, 1555-1559 (2016).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/knotcatalysis2016/CartaMarinaKnot.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Hic Sunt Dracones! (Here be Dragons!)</p>
                </div>
                <p>The catalysis can be allosterically regulated as the active site of the knot is only formed when it binds five metal(II) ions at bipyridine groups.</p>
                <img src={getMediaUrl("images/article_pictures/knotcatalysis2016/knotcatalysis_2016_cover.jpg")} className="mx-auto h-80 rounded-2xl" />
            </div>
          </div>
        );

      case 'nanomotor-2016':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘An Autonomous Chemically Fuelled Small-Molecule Motor’ Wilson et al, Nature, 534, 235-240 (2016).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/nanomotor2016/Figure2a.gif")} className="mx-auto h-64 rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Cracking Nanomotor, Gromit!</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls autoplay loop>
                        <source src={getMediaUrl("media/ChemMotorAnim.mp4")} type="video/mp4" />
                    </video>
                </div>
                <img src={getMediaUrl("images/article_pictures/nanomotor2016/nanomotor_2016_cover.jpg")} className="mx-auto h-80 rounded-2xl" />
            </div>
          </div>
        );

      case 'transporter':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Pick-up, Transport and Release of a Molecular Cargo using a Small-Molecule Robotic Arm’ Kassem et al, Nature Chem, 8, 138-143 (2016).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/roboticarmwithmolecule.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Molecular Robotics: Small-molecule robotic arm manipulates cargo.</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/MolRobotArmVideoNatChem2016LowResv2.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'star-of-david':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A Star of David Catenane’ David A. Leigh et al, Nature Chem, 6, 978–982 (2014).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/StarOfDavid.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">The Star of David topology (6-2-1 link).</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/2014StarOfDavidCatXRay.mp4")} type="video/mp4" />
                    </video>
                </div>
                <p>The woven scaffold is a circular hexameric helicate generated by the assembly of six ligands with six Fe2+ cations.</p>
            </div>
          </div>
        );

      case 'peptide-synth':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Sequence-Specific Peptide Synthesis by an Artificial Small-Molecule Machine’ B. Lewandowski et al, Science, 339, 189-193 (2013).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/pepsynth_fig1.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Tools for a molecular factory: A molecule that makes molecules.</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/2013peptsynth.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'pentafoil-knot':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A Synthetic Molecular Pentafoil Knot’ Jean-François Ayme et al, Nature Chem, 4, 15-20 (2012).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/covers/large/2012_nat_chem_cover.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Knots and crossings: Inspired by medieval Hiberno-Saxon manuscripts.</p>
                </div>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/2012hologram.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'walking-molecule':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A Synthetic Small Molecule that Walks down a Track’ Max von Delius et al, Nature Chem, 2, 96-101 (2010).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/walker_mid.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Walk this way: Like a motor protein.</p>
                </div>
                <p>The walker moves one foot at a time between various footholds on the track. One foot remains attached while the other moves (processivity).</p>
                <img src={getMediaUrl("images/article_pictures/walker_fig4.png")} className="w-full rounded-2xl border border-white/10" />
            </div>
          </div>
        );

      case 'hybrid-rotaxanes':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Hybrid Organic-Inorganic Rotaxanes’ Chin-Fa Lee et al, Nature, 458, 314-318 (2009).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/nature2009_mid.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Hybrid mechanically interlocked molecules.</p>
                </div>
                <p>Inorganic wheels assembled around linear organic axles. Electronic, magnetic and paramagnetic characteristics of heterometallic cages linked mechanically.</p>
                <img src={getMediaUrl("images/article_pictures/nature2009_fig3.jpg")} className="w-full rounded-2xl" />
            </div>
          </div>
        );

      case 'info-ratchet':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Exercising Demons: A Molecular Information Ratchet’ Viviana Serreli et al, Nature, 445, 523-527 (2007).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/mdcoversmall.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Exercising demons: Inspired by a 140 year-old thought experiment.</p>
                </div>
                <p>The molecular information ratchet uses light energy to fuel information transfer. A photo-induced excitation of a particle signals its position, allowing it to move away from equilibrium.</p>
                <img src={getMediaUrl("images/article_pictures/webdemons.jpg")} className="w-full rounded-2xl border border-white/10" />
            </div>
          </div>
        );

      case 'macroscopic-transport':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Macroscopic Transport by Synthetic Molecular Machines’ J Berná et al, Nature Mater, 4, 704-710 (2005).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/trainsmall.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Transporting microlitre droplets along a surface.</p>
                </div>
                <p>A single molecule thick layer of artificial machines on a gold surface. Stimuli-induced motion used to do macroscopic work by biasing Brownian motion.</p>
                <img src={getMediaUrl("images/article_pictures/natmatfig2.jpg")} className="w-full rounded-2xl border border-white/10" />
            </div>
          </div>
        );

      case 'rotary-motor-2004':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A Reversible Synthetic Rotary Molecular Motor’ José V. Hernández et al, Science, 306, 1532-1537 (2004).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2004rotary_motor_fig1.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Operation of a reversible synthetic molecular motor.</p>
                </div>
                <p>The first reversible synthetic molecular motor. Sense of rotation (clockwise or counter-clockwise) is governed solely by the order in which chemical reactions are carried out.</p>
                <img src={getMediaUrl("images/article_pictures/2004rotary_motor_fig4.jpg")} className="w-full rounded-2xl border border-white/10" />
            </div>
          </div>
        );

      case 'rotary-motor-2003':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Unidirectional Rotation in a Mechanically Interlocked Molecular Rotor’ David A. Leigh et al, Nature, 424, 174-179 (2003).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2003rotary_motor_fig1.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium">Chemical structure of a mechanically-interlocked rotary motor.</p>
                </div>
                <p>Uses hydrogen bonds as a 'glue' to stop movement when not required. Light fuels chemical reactions that break these bonds, allowing directional motion.</p>
                <img src={getMediaUrl("images/article_pictures/2003rotary_motor_fig2.jpg")} className="w-full rounded-2xl border border-white/10" />
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
               <p className="text-slate-400 leading-relaxed text-sm">Detailed figures and animated simulations for this {project.year} discovery are currently held in our technical archive. You can access the full report via the original source below.</p>
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
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-[3.5rem] overflow-hidden border-2 border-purple-500/20 shadow-2xl bg-slate-900 flex-shrink-0">
            <img src={project.img} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 flex-grow">
            <a href="#/research" className="inline-flex items-center gap-2 text-purple-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
              <ArrowLeft size={14} /> Back to Research
            </a>
            <div className="space-y-2">
              <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">{project.year} Milestone</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white serif italic leading-tight">{project.title}</h1>
            </div>
            <div className="flex gap-4">
              <a href={`https://www.catenane.net/pages/${project.year}_${project.slug.replace(/-/g, '_')}.html`} target="_blank" className="bg-[#660099] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-purple-500 transition-all shadow-xl shadow-purple-500/20 flex items-center gap-2">
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
            <div className="bg-slate-900/30 border border-white/5 rounded-[4rem] p-8 md:p-16 shadow-3xl ring-1 ring-white/5">
              {renderContent()}
            </div>

            <div className="bg-gradient-to-r from-[#660099]/20 to-slate-900 border border-purple-500/20 rounded-[3rem] p-12 flex flex-col md:flex-row justify-between items-center gap-12 group shadow-2xl">
                <div className="space-y-4">
                    <span className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">Up Next</span>
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
