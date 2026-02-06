
import React from 'react';
import { HIGHLIGHTS } from './constants';
import { ArrowLeft, ExternalLink, BookOpen, ArrowRight, FileText } from 'lucide-react';

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
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2025_GelContraction/Gelpicture1.png")} className="w-full rounded-2xl shadow-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Figure 1. The transduction of chemical energy into mechanical work through catalysis.</p>
                </div>
                
                <h3 className="text-white serif italic text-2xl">Research Narrative</h3>
                <p>It seems counter-intuitive that the act of catalysis—simply the acceleration of a chemical reaction—somehow enables work to be done. Yet this is how all of biology is powered. In this 2025 study, the Leigh and Giuseppone groups demonstrate the transduction of chemical energy by a synthetic catalyst to generate force and perform mechanical work.</p>
                <p>Cells display mechanical activities enabled by the cytoskeleton, a viscoelastic hydrogel manipulated by motor proteins. Our study demonstrates the powered contraction of a hydrogel driven by the directional rotation of artificial organocatalytic molecular motors. These motor-molecules generate force by biasing the kinetics of ground-state conformational changes, a process that winds polymer chains around one another, increasing writhe and causing macroscopic contraction to ~70% of its original volume.</p>
                
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/Cartoonvideo.mp4")} type="video/mp4" />
                    </video>
                </div>
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
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">A molecular finite automaton: an artificial molecular Turing machine.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">The Information Revolution</h3>
                <p>In 1936 Alan Turing published a concept for an automatic machine for abstract computing. Today, we have realized an artificial molecular machine that moves along a molecular tape, changing the reading head’s shape in response to ‘symbols’ on the tape it encounters. The geometrical change alters how light is twisted, allowing the sequence of symbols to be read out as a string of data.</p>
                <p>The new nanomachine is a type of machine termed a ‘finite state automaton’. It moves in one direction through a string-encoded state sequence, with readable outputs via circular dichroism (CD) response. The fueling synchronizes dynamics so that almost every macrocycle is at the same tape position simultaneously, causing a large collective response of the ensemble.</p>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls loop>
                        <source src={getMediaUrl("media/TapeVideo.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'rotary-motor-2022':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Autonomous fuelled directional rotation about a covalent single bond’ Borsley et al, Nature, 604, 80–85 (2022).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2022RotaryMotor/Feynman.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Motors in miniature: From Feynman’s theoretical ratchet (1963) to a 26-atom motor (2022).</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Va-Va-Voom at the Bottom</h3>
                <p>Richard Feynman was fascinated by extreme miniaturisation. In his famous 1959 lecture, he offered $1000 to anyone who could make a rotating electric motor 1/64 inch cube. We have taken this concept further by showing that a 26-atom biaryl compound is a catalysis-driven motor that continuously transduces energy from a chemical fuel to induce repetitive 360° directional rotation.</p>
                <p>Upon treatment with a carbodiimide fuel, intramolecular anhydride formation between the rings and its subsequent hydrolysis occur incessantly. Both reactions are directionally biased, meaning the motor rotates the rotor around the stator as long as fuel is present. This discovery solves the long-standing problem of continuous directional rotation about a single covalent bond.</p>
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
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Adsorption glow up: Pumping from solution onto polymer beads.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Phase Transfer Control</h3>
                <p>The Leigh group report on an artificial molecular pump, immobilised on polymer beads, that uses a ratchet mechanism to actively transport substrates from solution onto the beads. Upon addition of a pulsed chemical fuel, the micrometre-diameter polystyrene beads sequester crown ethers appended with a fluorescent tag.</p>
                <p>Following consumption of the fuel, the rings are mechanically trapped in a higher energy state on the beads. This drives the system progressively further away from equilibrium and confers sequence information on the deposited structure. The substrates can subsequently be released back to the bulk on demand, emptying one compartment at a time.</p>
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
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Vernier Entanglements: Control of 12 alternating crossings.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Scaling Topology</h3>
                <p>The entanglement of molecular strands alters dynamics and enhances structural stability. Vernier templating relies on a mismatch between the number of binding sites on two complementary components. The result is a Vernier complex with the lowest common multiple of binding sites.</p>
                <p>We adapted this concept to assemble the triskelion (trefoil-of-trefoils) knot with 12 crossings and complete topological stereocontrol. These are the largest and most complex discrete arrays of molecular entanglements prepared to date, featuring 378-atom-long strands, equivalent to a 126-residue peptide.</p>
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
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Pumping through Catalysis: Structure and autonomous operation.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Autonomous Pumping</h3>
                <p>Biological pumps are catalysts, powered by the energy released from continuous catalytic decomposition of chemical fuel. This artificial molecular pump continuously pushes crown ether macrocycles onto a molecular axle without external intervention. The pumping is driven by transiently inserting a bulky Fmoc ‘stopper’ to retard the de-threading of captured rings.</p>
                <p>The result is a dissipative capture in the form of thermodynamically unstable [n]rotaxanes. These out-of-equilibrium structures are maintained for as long as fuel is present, after which they slowly de-thread. This achievement provides profound significance for understanding the mechanisms of complex biomolecular pumps.</p>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/CatPump.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case '2d-weaving':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Self-assembly of a layered two-dimensional molecularly woven fabric’ August et al, Nature, 588, 429-435 (2020).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2D_Material_2020/1.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">A 2D-molecularly-woven fabric: Thread count of 40-60 million.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">The Ultimate Textile</h3>
                <p>The weaving of flexible strands into 2D fabrics has underpinned technology through the ages. We have succeeded in the direct bottom-up assembly of molecular building blocks into linear organic polymers woven in two-dimensions. After removing ion templates, we generated a layered 2D-molecularly-woven fabric associated solely through mechanical entanglements.</p>
                <p>Individual layers are only 4 nm thick, yet the material's thread count is 40–60 million—magnitudes finer than the best Egyptian linen (1500). Pressing on the woven polymer with an AFM tip revealed it is almost twice as strong as an identical unwoven random polymer tangle.</p>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/1.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'endless-knot':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A molecular endless (74) knot’ Leigh et al, Nat Chem, 13, 117-122 (2021).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/endless_knot_2020/1.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Tapestry featuring a molecular endless knot (7_4).</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Endless Forms Most Beautiful</h3>
                <p>Daryle Busch predicted "molecular weaving" in 1992. After a decade of design, we solved the challenge using an unanticipated BF4- template effect. The interwoven 3x3 grid assembled quantitatively within five minutes of mixing ligands with zinc salts.</p>
                <p>The resulting 258-atom-long closed loop 7_4 endless knot is a basic motif of Celtic interlace and the smallest Chinese knot. Its preparation marks the intersection of polymer science, 2D materials, and molecular nanotopology, opening the way for the bottom-up assembly of woven polymer chains.</p>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/endless.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'molecule-knots':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Tying different knots in a molecular strand’ Leigh et al, Nature, 584, 562-568 (2020).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/5_2_knot_2020/5_2_knot_info.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Tying different knots in a 15nm molecular strand.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Molecular Cat’s Cradle</h3>
                <p>In our everyday world, strands can be tied into different knots for different tasks. We applied this concept to synthetic molecules using a 15nm strand interspersed with binding sites for transition metal and lanthanide ions. By choosing which metal ions to activate, we can fold the same strand into an unknot, a trefoil, or a 5-2 knot.</p>
                <p>We even discovered a molecular "cat's cradle"—by adding copper ions to a lanthanide-bound trefoil knot, the lanthanide is ejected and the crossings rearrange. This changes the writhe (mechanical strain) in the loop, mimicking supercoiling in DNA.</p>
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
            <p className="text-slate-400 text-xs italic">‘Rotary and linear molecular motors driven by pulses of a chemical fuel’ Science, 358, 340-343 (2017).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/chemical_fuelled_motor_2017/machines%20infograph.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Pulsed fuel motors: Rotary and linear variants.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">The Power of Pulses</h3>
                <p>We developed a motor mechanism that powers both rotary and linear motion using an energy ratchet. Unlike motor proteins which use information ratchets, this system relies on pulses of trichloroacetic acid fuel that switches the acidity of the medium. A single pulse rotates a catenane motor 360°, generating only carbon dioxide and chloroform as waste.</p>
                <p>This universal mechanism allowed us to power a 3-catenane motor—two small rings rotating directionally around a larger one—and a linear pump. This operationally simple approach has broad application potential in nanotechnology.</p>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/2catenane%20video%20crop.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'assembler':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Stereodivergent synthesis with a programmable molecular machine’ Nature, 549, 374-378 (2017).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/assembler2017/assembler_cover.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Molecular assembler: Stereodivergent synthesis.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Nanoscale Construction</h3>
                <p>A hypothetical "molecular assembler" guides reactions by positioning reactive molecules. We developed a molecular robot that moves a substrate between different activating sites to produce any one of four possible stereoisomers. It operates by moving a "cargo" substrate between organocatalysts of different chirality.</p>
                <p>While the machine manipulates a single molecule, the process is massively parallelized with over 10^18 robots working simultaneously. This marks a major step toward mechanosynthesis—the use of mechanical constraints to direct chemical reactions.</p>
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
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">The 8-19 knot: 192-atom loop with eight crossings.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Braiding Strands</h3>
                <p>Until now, chemists only made simple trefoil and pentafoil knots. We developed a way of braiding three molecular strands to make tighter and more complex knots. By heating a ligand with iron chloride, we formed a cyclic triple helix stabilized by a central chloride ion. Covalent capture then locked the 8-19 knot topology.</p>
                <p>This is the most tightly knotted physical structure known, with only 24 atoms per crossing. Being able to braid strands opens the door to probing how knotting affects material strength and elasticity, potentially weaving polymer strands into entirely new textures.</p>
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
            <p className="text-slate-400 text-xs italic">‘Allosteric Initiation and Regulation of Catalysis with a Molecular Knot’ Science, 352, 1555-1559 (2016).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/knotcatalysis2016/CartaMarinaKnot.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Hic Sunt Dracones! Exploring the dragons of molecular topology.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Allosteric Power</h3>
                <p>The significance of knotting is becoming apparent in fields from colloids to cosmic origins. We found that a synthetic molecular pentafoil knot can promote Lewis acid catalyzed reactions. The knot possesses a powerful halide binding pocket in its center that is only organized when it binds five metal ions.</p>
                <p>This is a dramatic example of allostery: the flexible metal-free knot is inactive, but adding zinc ions shapes it into a well-ordered catalyst. This suggests that a biological role of knotting might be to prevent proteins from adopting inactive, folded states.</p>
                <img src={getMediaUrl("images/article_pictures/knotcatalysis2016/knotcatalysis_2016_cover.jpg")} className="mx-auto h-80 rounded-2xl" />
            </div>
          </div>
        );

      case 'nanomotor-2016':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘An Autonomous Chemically Fuelled Small-Molecule Motor’ Nature, 534, 235-240 (2016).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/nanomotor2016/Figure2a.gif")} className="mx-auto h-64 rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Cracking Nanomotor: Wallace and Gromit in the molecular world.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Gromit’s Track-Laying Mechanism</h3>
                <p>We invented a synthetic motor that runs off chemical energy (Fmoc-Cl) like motor proteins use ATP. The mechanism depends on information transfer: the motor layout lays down a track in front of the moving ring while removing it from behind. If the ring is at the top, it moves faster to the right; at the bottom, it moves faster to the left.</p>
                <p>One peer-reviewer called it the chemical equivalent of the famous Wallace & Gromit "The Wrong Trousers" chase where Gromit lays down track as the train moves. This "information ratchet" has the potential to power tasks like transporting building blocks for molecular construction.</p>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls autoplay loop>
                        <source src={getMediaUrl("media/ChemMotorAnim.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'transporter':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Pick-up, Transport and Release of a Molecular Cargo’ Nature Chem, 8, 138-143 (2016).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/roboticarmwithmolecule.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Molecular Robotics: Nano-assembly line on the horizon.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">The Robotic Arm</h3>
                <p>Biology uses robotic arms to manipulate molecules—for instance, fatty acid synthase passes chains between enzyme domains. We created a small-molecule robotic arm that picks up cargo, repositions it, and sets it down 2 nm away. This relocate fragments by making and breaking chemical bonds without the cargo ever drifting into the bulk solvent.</p>
                <p>This represents the first step toward controlled manipulation of molecular structures through programmable robotics. One day, such nanotechnology could revolutionize how pharmaceuticals and new materials are synthesized.</p>
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
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Star of David Catenane: A 6-2-1 link topology.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Topological Icon</h3>
                <p>The Star of David is an iconic symbol whose realization has been a target of synthetic chemistry for 25 years. We generated a circular hexameric helicate by assembling six ligands with six iron ions. Ring-closing olefin metathesis then captured the 6-2-1 link topology—two triply-entwined 114-membered rings.</p>
                <p>This work is dedicated to the memory of Chaim Weizmann, a Reader in Chemistry at Manchester and first President of Israel. Linking protein rings in this way creates viral 'chainmail' shells—man-made equivalents could lead to materials that are incredibly strong yet light and flexible.</p>
                <div className="aspect-video bg-black rounded-[2rem] overflow-hidden border border-purple-500/30">
                    <video className="w-full h-full" controls>
                        <source src={getMediaUrl("media/2014StarOfDavidCatXRay.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );

      case 'peptide-synth':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Sequence-Specific Peptide Synthesis by an Artificial Small-Molecule Machine’ Science, 339, 189-193 (2013).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/pepsynth_fig1.png")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Artificial Ribosome: Sequencing peptides on a track.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">The Artificial Ribosome</h3>
                <p>Nature builds proteins in factories like the ribosome, which assembles amino acids into a peptide chain. We built a machine with a nanometer-sized ring that moves along a track, picking up building blocks and connecting them in a specific order. The ring moves until its path is blocked, the reactive arm picks up the obstacle, and passes it to the elongation site on the ring.</p>
                <p>This represents a fundamental shift from mixing cocktails of chemicals to using machines that position substrates precisely. This approach evolutionalizes how we design functional molecules and materials with exquisite efficiency.</p>
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
            <p className="text-slate-400 text-xs italic">‘A Synthetic Molecular Pentafoil Knot’ Nature Chem, 4, 15-20 (2012).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/covers/large/2012_nat_chem_cover.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Pentafoil Knot: Inspired by Hiberno-Saxon manuscripts.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">A Star is Born</h3>
                <p>Knots provide 85% of natural rubber's elasticity. We succeeded in preparing a star-shaped pentafoil knot using self-assembly. The building blocks were programmed to wrap themselves spontaneously into a 160-atom loop. This knot has symbolic significance across cultures and features on the flags of Morocco and Ethiopia.</p>
                <p>To celebrate the synthesis, we worked with Holoxica to produce the first hologram of a small-molecule X-ray crystal structure. This allows us to fully appreciate the complex three-dimensional topology of the molecular star.</p>
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
            <p className="text-slate-400 text-xs italic">‘A Synthetic Small Molecule that Walks down a Track’ Nature Chem, 2, 96-101 (2010).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/walker_mid.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Molecular Walker: Moving like Kinesin.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Walking down the Track</h3>
                <p>Biopolymers like Kinesin walk along cellular tracks carrying vesicle cargoes. We created the first small-molecule walker that moves directionally along a short track. The feet are designed to be dynamic under mutually exclusive chemical conditions, ensuring the walker doesn't drift away.</p>
                <p>By oscillating between acid and base, the walker takes steps forward via hydrazone and disulfide exchange. This "processive" movement is the first step toward artificial linear motors that can transport cargo across surface-bound tracks.</p>
                <img src={getMediaUrl("images/article_pictures/walker_fig4.png")} className="w-full rounded-2xl border border-white/10" />
            </div>
          </div>
        );

      case 'hybrid-rotaxanes':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Hybrid Organic-Inorganic Rotaxanes’ Nature, 458, 314-318 (2009).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/nature2009_mid.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Hybrid interlocked molecules: Linking carbon and metal.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Organic-Inorganic Fusion</h3>
                <p>We created the first rotaxanes in which inorganic and organic components are linked mechanically. An inorganic wheel assembled from heterometallic clusters is threaded around an organic axle. This merges the dynamic properties of organic shuttles with the magnetic and electronic characteristics of metal cages.</p>
                <p>These structures could serve as components for qubits in quantum information processing. The efficiency of the assembly—from 33 or even 98 components—is a remarkable feat of molecular programming.</p>
                <img src={getMediaUrl("images/article_pictures/nature2009_fig3.jpg")} className="w-full rounded-2xl" />
            </div>
          </div>
        );

      case 'info-ratchet':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Exercising Demons: A Molecular Information Ratchet’ Nature, 445, 523-527 (2007).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/mdcoversmall.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Molecular Demon: Exercising Maxwell's 140-year-old thought experiment.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Maxwell’s Legacy</h3>
                <p>James Clerk Maxwell proposed a "demon" that could sort fast and slow molecules to violate the Second Law. While perpetual motion is impossible, we used light energy to fuel an "information ratchet". The molecule uses energy transfer to signal the position of a ring to a chemical gate, which then opens momentarily.</p>
                <p>Because the ring signals more often from one side of the gate than the other, it is pumped away from equilibrium. This information-based mechanism represents a fundamentally new way to drive synthetic nanomachines.</p>
                <img src={getMediaUrl("images/article_pictures/webdemons.jpg")} className="w-full rounded-2xl border border-white/10" />
            </div>
          </div>
        );

      case 'macroscopic-transport':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Macroscopic Transport by Synthetic Molecular Machines’ Nature Mater, 4, 704-710 (2005).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/trainsmall.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Molecular Shuttles: Moving liquid droplets uphill.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Moving the Macroscopic</h3>
                <p>We demonstrated that mechanical molecular events can lead to a macroscopic response. A layer of light-driven molecular shuttles was used to transport diiodomethane droplets across a surface. By concealing or revealing fluoroalkane residues, the shuttles dramatically altered the surface tension.</p>
                <p>The machines even elevated a 1.25 µl droplet 1 mm up a 12° slope against gravity. This extrapolation across six orders of magnitude in length scales is the equivalent of a machine raising an object to twice the height of the CN Tower.</p>
                <img src={getMediaUrl("images/article_pictures/natmatfig2.jpg")} className="w-full rounded-2xl border border-white/10" />
            </div>
          </div>
        );

      case 'rotary-motor-2004':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘A Reversible Synthetic Rotary Molecular Motor’ Science, 306, 1532-1537 (2004).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2004rotary_motor_fig1.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">Minimalist Motor Design: Breaking statistical balance.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Reversibility and Rotation</h3>
                <p>We created the first reversible synthetic molecular motor. It works by capturing random Brownian displacements and directionally releasing them. The sense of rotation (clockwise or counter-clockwise) is determined solely by the order in which chemical reactions are carried out.</p>
                <p>This minimalist design demonstrated the three elements required for directional rotation: randomizing motion, asymmetric barriers, and the breaking of detailed balance. Understanding this interplay between information and energy is a prerequisite for working nanotechnology.</p>
                <img src={getMediaUrl("images/article_pictures/2004rotary_motor_fig4.jpg")} className="w-full rounded-2xl border border-white/10" />
            </div>
          </div>
        );

      case 'rotary-motor-2003':
        return (
          <div className="space-y-12">
            <p className="text-slate-400 text-xs italic">‘Unidirectional Rotation in a Mechanically Interlocked Molecular Rotor’ Nature, 424, 174-179 (2003).</p>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 space-y-4">
                    <img src={getMediaUrl("images/article_pictures/2003rotary_motor_fig1.jpg")} className="w-full rounded-2xl" />
                    <p className="text-[11px] text-slate-500 text-center font-medium italic">The First Motor: Hydrogen-bonded mechanically interlocked rotor.</p>
                </div>
                <h3 className="text-white serif italic text-2xl">Molecular Engineering</h3>
                <p>The physics of the molecular world is different from the macroscopic one. Our first motor used hydrogen bonds—the glue of life—to stop components moving until we wanted them to. By illuminating the molecule with different wavelengths of light, we fueled chemical reactions that broke those bonds.</p>
                <p>Two rings were made to move around a larger one. Each small ring blocks the path of the other, forcing both to move in the same direction. This created a light-driven unidirectional rotary motor, potentially paving the way for molecular winches and shape-changing materials.</p>
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
               <p className="text-slate-400 leading-relaxed text-sm">Detailed figures and scientific data for this {project.year} discovery are currently held in our technical archive. You can access the full report via the original source below.</p>
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
