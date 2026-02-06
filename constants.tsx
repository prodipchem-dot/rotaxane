
import { NavItem } from './types';

export interface Figure {
  type: 'image' | 'video';
  url: string;
  caption: string;
}

export interface ProjectDetail {
  slug: string;
  citation: string;
  narrativeTitle: string;
  narrative: string[];
  figures: Figure[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#/home' },
  { label: 'Research', href: '#/research' },
  { label: 'Prof. Leigh', href: '#/prof' },
  { label: 'People', href: '#/people' },
  { label: 'Publications', href: '#/publications' },
  { label: 'Virtual Tour', href: '#/vtour' },
  { label: 'Group Matters', href: '#/matters' }
];

export const HIGHLIGHTS = [
  { title: "Gel Contraction", slug: "gel-contraction", img: "https://www.catenane.net/images/thumbs/Gelthumbnail.png", year: "2025", category: "Motors & Pumps" },
  { title: "Tape Reading Ratchet", slug: "tape-reading", img: "https://www.catenane.net/images/thumbs/TapeThumb.png", year: "2022", category: "Robotics & Synthesis" },
  { title: "Rotary Motor", slug: "rotary-motor-2022", img: "https://www.catenane.net/images/thumbs/RotaryMotorThumb.png", year: "2022", category: "Motors & Pumps" },
  { title: "Phase Transfer Pump", slug: "phase-transfer", img: "https://www.catenane.net/images/thumbs/PhasePumpThumb.png", year: "2022", category: "Motors & Pumps" },
  { title: "The Vernier", slug: "vernier-knot", img: "https://www.catenane.net/images/thumbs/Vernier_Thumbnail.jpg", year: "2022", category: "Knots & Topology" },
  { title: "Catalysis Pump", slug: "catalysis-pump", img: "https://www.catenane.net/images/thumbs/CatPump_thumbnail.png", year: "2021", category: "Motors & Pumps" },
  { title: "2D Mol Woven Fabric", slug: "2d-weaving", img: "https://www.catenane.net/images/thumbs/2Dmat_thumbnail.png", year: "2020", category: "Supramolecular" },
  { title: "The Endless Knot", slug: "endless-knot", img: "https://www.catenane.net/images/thumbs/endless_knot_thumbnail.png", year: "2020", category: "Knots & Topology" },
  { title: "Tying a Molecule in Knots", slug: "molecule-knots", img: "https://www.catenane.net/images/thumbs/5_2_knot_thumbnail.jpg", year: "2020", category: "Knots & Topology" },
  { title: "Pulsed Fuel Motors", slug: "pulsed-fuel", img: "https://www.catenane.net/images/thumbs/pulsed_fuel_motor_thumbnail.jpg", year: "2017", category: "Motors & Pumps" },
  { title: "A Molecular Assembler", slug: "assembler", img: "https://www.catenane.net/images/thumbs/assembler_thumbnail.jpg", year: "2017", category: "Robotics & Synthesis" },
  { title: "Synthetic Molecular 819 Knot", slug: "819-knot", img: "https://www.catenane.net/images/thumbs/the819knotcover.jpg", year: "2017", category: "Knots & Topology" },
  { title: "Allosteric Knot Catalysis", slug: "knot-catalysis", img: "https://www.catenane.net/images/thumbs/knotcatalysiscover.jpg", year: "2016", category: "Knots & Topology" },
  { title: "The Nanomotor", slug: "nanomotor-2016", img: "https://www.catenane.net/images/thumbs/nanomotorcover.jpg", year: "2016", category: "Motors & Pumps" },
  { title: "Molecular Transporter", slug: "transporter", img: "https://www.catenane.net/images/thumbs/Transporter2015.jpg", year: "2015", category: "Motors & Pumps" },
  { title: "Star of David Catenane", slug: "star-of-david", img: "https://www.catenane.net/images/thumbs/StarOfDavid.jpg", year: "2014", category: "Supramolecular" },
  { title: "Making Molecules that Make Molecules", slug: "peptide-synth", img: "https://www.catenane.net/images/thumbs/pep_synth_thumb.jpg", year: "2013", category: "Robotics & Synthesis" },
  { title: "Pentafoil Knot", slug: "pentafoil-knot", img: "https://www.catenane.net/images/knot_box_2011_stroke3.jpg", year: "2012", category: "Knots & Topology" },
  { title: "Walking Molecule", slug: "walking-molecule", img: "https://www.catenane.net/images/natchempaper2009.jpg", year: "2010", category: "Motors & Pumps" },
  { title: "Hybrid Organic-Inorganic Rotaxanes", slug: "hybrid-rotaxanes", img: "https://www.catenane.net/images/naturepaper2009.jpg", year: "2009", category: "Supramolecular" },
  { title: "Molecular Information Ratchet", slug: "info-ratchet", img: "https://www.catenane.net/images/mdhomepaper.jpg", year: "2007", category: "Motors & Pumps" },
  { title: "Macroscopic Transport", slug: "macroscopic-transport", img: "https://www.catenane.net/images/natmatpaper.jpg", year: "2005", category: "Motors & Pumps" },
  { title: "Synthetic Rotary Motor", slug: "rotary-motor-2004", img: "https://www.catenane.net/images/nov2004paper.jpg", year: "2004", category: "Motors & Pumps" },
  { title: "Mechanically-Interlocked Motor", slug: "rotary-motor-2003", img: "https://www.catenane.net/images/newpic3.jpg", year: "2003", category: "Motors & Pumps" }
];

export const RESEARCH_DETAILS: Record<string, ProjectDetail> = {
  "gel-contraction": {
    slug: "gel-contraction",
    citation: "Transducing chemical energy through catalysis by an artificial molecular motor, Nature, 637, 594–600 (2025)",
    narrativeTitle: "Transducing chemical energy through catalysis",
    narrative: [
      "Almost all biomolecular motors are catalysts. They transduce energy from the reaction they catalyse—generally ATP to ADP—to power the diverse array of tasks required by the cell.",
      "The motor-molecules generate force by the action of catalysis biasing the kinetics of ground-state conformational changes, the same type of catalysis-driven information ratchet mechanism as biological motor-molecules.",
      "Continuous 360° rotation of the rotor about the stator of the motor-molecules twists the polymer chains of the crosslinked network around one another, causing macroscopic contraction of the gel to ~70% of its original volume."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/2025_GelContraction/Gelpicture1.png", caption: "Figure 1. Gel contraction driven by artificial molecular motors." },
      { type: "video", url: "media/Cartoonvideo.mp4", caption: "Video: Transduction of chemical energy into work." }
    ]
  },
  "tape-reading": {
    slug: "tape-reading",
    citation: "A Tape-Reading Molecular Ratchet, Nature, 612, 78–82 (2022)",
    narrativeTitle: "A Read-Only Molecular Turing Machine",
    narrative: [
      "In 1936 Alan Turing published a concept for an automatic machine for abstract computing. Nowadays called a 'Turing machine', his proposal envisaged a device that featured a 'head' that could read and write symbols while moving along a tape.",
      "Now scientists at the University of Manchester have made an artificial molecular machine that moves along a molecular tape, changing the reading head's shape in response to 'symbols' on the tape it encounters along the way."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/2022TapeReading/Turing.png", caption: "Figure 1. A molecular finite automaton." },
      { type: "video", url: "media/TapeVideo.mp4", caption: "Video: Chemically fuelled tape-reading molecular ratchet." }
    ]
  },
  "rotary-motor-2022": {
    slug: "rotary-motor-2022",
    citation: "Autonomous fuelled directional rotation about a covalent single bond, Nature, 604, 80–85 (2022)",
    narrativeTitle: "There's plenty of va-va-voom at the bottom!",
    narrative: [
      "The Leigh group has shown that a 26-atom biaryl compound is a catalysis-driven motor that continuously transduces energy from a chemical fuel to induce repetitive 360° directional rotation of the aromatic rings.",
      "Catalysis of the hydration of the carbodiimide fuel by the motor continually drives net directional rotation of the rotor around the stator."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/2022RotaryMotor/Feynman.png", caption: "Figure 1. Motors in miniature: from Feynman's ratchet to a 26-atom motor." },
      { type: "video", url: "media/RotaryVid2.mp4", caption: "Video: Autonomous fuelled directional rotation." }
    ]
  },
  "phase-transfer": {
    slug: "phase-transfer",
    citation: "Pumping between phases with a pulsed-fuel molecular ratchet, Nat. Nanotechnol., published 4th April (2022)",
    narrativeTitle: "Adsorption glow up!",
    narrative: [
      "The Leigh group report on an artificial molecular pump, immobilised on polymer beads, that uses a ratchet mechanism to actively transport substrates from solution onto the beads.",
      "Following consumption of the fuel, the rings are mechanically trapped in a higher energy, out-of-equilibrium state on the beads."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/2022PhaseTransfer/TopImage.png", caption: "Figure 1. Out-of-equilibrium pumping from solution onto polymer beads." },
      { type: "video", url: "media/PhaseTransfer.mp4", caption: "Video: Sequential pumping and information readout." }
    ]
  },
  "vernier-knot": {
    slug: "vernier-knot",
    citation: "Vernier Template Synthesis of Molecular Knots, Science, 375, 1035-1041 (2022)",
    narrativeTitle: "Vernier Entanglements",
    narrative: [
      "Vernier templating relies on a mismatch between the number of binding sites on two complementary components. The result is a Vernier complex with the lowest common multiple of binding sites.",
      "A 3:4 (tetratopic strand:metal) Vernier complex gives a 12-crossing triskelion knot with complete topological stereocontrol."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/Vernier_Knot_2022/Underwater.jpg", caption: "Figure 1. Systematic strand entanglements in large knotted arrays." }
    ]
  },
  "catalysis-pump": {
    slug: "catalysis-pump",
    citation: "A catalysis-driven artificial molecular pump, Nature, 594, 529-534 (2021)",
    narrativeTitle: "Pumping through Catalysis",
    narrative: [
      "This molecule is an autonomous chemically-fueled molecular pump that, following addition of the fuel, continuously pumps crown ether macrocycles from bulk solution onto a molecular axle.",
      "The pumping is driven by the catalysis of a reaction that transiently inserts a bulky Fmoc 'stopper' at the terminus of the pump."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/Cat_Pump_2021/1.png", caption: "Figure 1. Structure and operation of a catalysis-driven molecular pump." },
      { type: "video", url: "media/CatPump.mp4", caption: "Video: Animation of the catalysis-driven pump." }
    ]
  },
  "2d-weaving": {
    slug: "2d-weaving",
    citation: "Self-assembly of a layered two-dimensional molecularly woven fabric, Nature, 588, 429-435 (2020)",
    narrativeTitle: "2D Molecular Weaving",
    narrative: [
      "The result was a layered, wholly-organic, 2D-molecularly-woven fabric, in which warp and weft single-chain polymer strands remain associated solely through in-layer mechanical entanglements.",
      "The molecularly-woven fabric was almost twice as strong as the non-woven material, even though the polymers have the same chemical composition."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/2D_Material_2020/1.jpg", caption: "Figure 1. A 2D-molecularly-woven fabric." },
      { type: "video", url: "media/1.mp4", caption: "Video: Self-assembly of a 3x3 interwoven grid." }
    ]
  },
  "endless-knot": {
    slug: "endless-knot",
    citation: "A molecular endless (74) knot, Nat Chem, 13, 117-122 (2021)",
    narrativeTitle: "Endless forms most beautiful",
    narrative: [
      "The endless knot is a basic motif of Celtic interlace and one of the eight auspicious symbols common to many Eastern religions.",
      "Within 5 minutes of mixing the ligands with Zn(BF4)2 in the required 3:2 stoichiometry, the interwoven 3x3 grid assembled quantitatively."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/endless_knot_2020/1.jpg", caption: "Figure 1. Traditional Chinese blue calico tapestry featuring an endless knot." },
      { type: "video", url: "media/endless.mp4", caption: "Video: Molecular 74 knot coordination complex." }
    ]
  },
  "molecule-knots": {
    slug: "molecule-knots",
    citation: "Tying different knots in a molecular strand, Nature, 584, 562-568 (2020)",
    narrativeTitle: "Thou Shalt Knot...",
    narrative: [
      "The Leigh group have developed a way to tie an artificial 15 nanometer molecular strand into any one of several different knots.",
      "Any of three different knots—an unknot (01) macrocycle, a trefoil (31) knot, and a three-twist (52) knot—could be prepared from the same 'metallo-foldamer' strand."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/5_2_knot_2020/5_2_knot_info.jpg", caption: "Figure 1. Tying different knots in a single molecular strand." },
      { type: "video", url: "media/52%20knot.mp4", caption: "Video: CuI and LuIII induced folding to form 52 knot." }
    ]
  },
  "pulsed-fuel": {
    slug: "pulsed-fuel",
    citation: "Rotary and linear molecular motors driven by pulses of a chemical fuel, Science, 358, 340-343 (2017)",
    narrativeTitle: "Chemically Fuelled Molecular Machinery",
    narrative: [
      "Scientists at the University of Manchester have developed a pulsed chemically-fuelled molecular motor mechanism that can be used to power both rotary and linear molecular motors.",
      "It uses an energy ratchet mechanism whereas motor proteins use information ratchet mechanisms."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/chemical_fuelled_motor_2017/machines%20infograph.jpg", caption: "Figure 1. Infographic of linear and rotary motors driven by fuel pulses." },
      { type: "video", url: "media/2catenane%20video%20crop.mp4", caption: "Video: Repetitive operation of a rotary molecular motor." }
    ]
  },
  "assembler": {
    slug: "assembler",
    citation: "Stereodivergent synthesis with a programmable molecular machine, Nature, 549, 374-378 (2017)",
    narrativeTitle: "Building with a Programmable Molecular Robot",
    narrative: [
      "The molecular robot can be programmed to selectively produce, in a sequential one-pot operation, any one of four possible diastereoisomers from a tandem reaction process.",
      "Each molecular robot manipulates a single substrate molecule, but the process is massively paralleled with more than 10^18 molecular robots operated simultaneously."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/assembler2017/assembler_cover.jpg", caption: "Figure 1. Stylized representation of a molecular assembler robot." },
      { type: "video", url: "media/assembler%20animation.mp4", caption: "Video: Nanopunk representation of the molecular assembler." }
    ]
  },
  "819-knot": {
    slug: "819-knot",
    citation: "Braiding a molecular knot with eight crossings, Science, 355, 159-162 (2017)",
    narrativeTitle: "A Synthetic Molecular 819 Knot",
    narrative: [
      "Scientists have developed a way of braiding three molecular strands enabling tighter and more complex knots to be made than has previously been possible.",
      "The molecular knot consists of a 192-atom (20 nm) continuous loop interwoven with eight non-alternating crossings."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/819knot2017/819knot-cut.jpg", caption: "Figure 1. An 819 knot rendered as a high-complexity topological link." },
      { type: "video", url: "media/2017_Knot_819_molecule_flyaround.mp4", caption: "Video: X-ray structure fly-around of the 819 knot." }
    ]
  },
  "knot-catalysis": {
    slug: "knot-catalysis",
    citation: "Allosteric Initiation and Regulation of Catalysis with a Molecular Knot, Science, 352, 1555-1559 (2016)",
    narrativeTitle: "Allosteric Knot Catalysis - Hic Sunt Dracones!",
    narrative: [
      "As little as 1 mol% of a halophilic synthetic molecular pentafoil knot can promote Lewis acid catalysed reactions.",
      "The active site of the knot is only formed when it binds five metal(II) ions that line the outside of the halide binding pocket."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/knotcatalysis2016/CartaMarinaKnot.jpg", caption: "Figure 1. Here be Dragons! Exploring uncharted chemical space." }
    ]
  },
  "nanomotor-2016": {
    slug: "nanomotor-2016",
    citation: "An Autonomous Chemically Fuelled Small-Molecule Motor, Nature, 534, 235-240 (2016)",
    narrativeTitle: "Cracking Nanomotor, Gromit!",
    narrative: [
      "The motor mechanism depends on information transfer about the position of the ring to the track: fuel consumption causes the motor to bias movement directionally.",
      "The design can be seen as the chemical equivalent of the famous Wallace and Gromit animation 'The Wrong Trousers' where Gromit lays track as the train travels."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/nanomotor2016/Figure2.jpg", caption: "Figure 1. Schematic of an autonomous chemically fuelled molecular motor." },
      { type: "video", url: "media/ChemMotorAnim.mp4", caption: "Video: Animation of the Gromit-inspired motor mechanism." }
    ]
  },
  "transporter": {
    slug: "transporter",
    citation: "Pick-up, Transport and Release of a Molecular Cargo using a Small-Molecule Robotic Arm, Nature Chem, 8, 138-143 (2016)",
    narrativeTitle: "Molecular Robotics",
    narrative: [
      "Chemists at the University of Manchester have made a molecular machine with a 'robotic arm' that is able to pick up a molecular cargo and reposition it 2 nm away.",
      "Relocating fragments through programmable robotics is the first step towards controlled manipulation of molecular-level structures."
    ],
    figures: [
      { type: "image", url: "images/roboticarmwithmolecule.png", caption: "Figure 1. Small-molecule robotic arm repositioning a cargo." },
      { type: "video", url: "media/MolRobotArmVideoNatChem2016LowResv2.mp4", caption: "Video: Programmed operation of the robotic arm." }
    ]
  },
  "star-of-david": {
    slug: "star-of-david",
    citation: "A Star of David Catenane, Nature Chem, 6, 978–982 (2014)",
    narrativeTitle: "A Star of David Catenane",
    narrative: [
      "The Star of David topology, or 6-2-1 link, is an iconic symbol. Now chemists have described the first Star of David molecular link (a triply interlocked [2]catenane).",
      "Nature links protein rings to make the 'chainmail' that forms the shells of viruses. Woven rings may lead to materials that are strong but light and flexible."
    ],
    figures: [
      { type: "image", url: "images/StarOfDavid.png", caption: "Figure 1. X-ray crystal structure of the triply interlocked link." },
      { type: "video", url: "media/2014StarOfDavidCatXRay.mp4", caption: "Video: Star of David catenane fly-around." }
    ]
  },
  "peptide-synth": {
    slug: "peptide-synth",
    citation: "Sequence-Specific Peptide Synthesis by an Artificial Small-Molecule Machine, Science, 339, 189-193 (2013)",
    narrativeTitle: "Making molecules that make molecules",
    narrative: [
      "This molecular machine features a functionalized ring that moves along a molecular track, picking up building blocks and connecting them in a specific order.",
      "The ribosome in all living cells assembles amino acids from tRNA building blocks into a peptide chain; this machine mimics that factory process at the nanoscale."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/pepsynth_fig1.png", caption: "Figure 1. Tools for a molecular factory: a molecule that makes molecules." },
      { type: "video", url: "media/2013peptsynth.mp4", caption: "Video: Sequence-specific peptide synthesis mechanism." }
    ]
  },
  "pentafoil-knot": {
    slug: "pentafoil-knot",
    citation: "A Synthetic Molecular Pentafoil Knot, Nature Chem, 4, 15-20 (2012)",
    narrativeTitle: "A Synthetic Molecular Pentafoil Knot",
    narrative: [
      "The Leigh group have prepared a pentafoil knot (Solomon's seal knot) with five crossing points that looks like a five-pointed star.",
      "The thread tied into the star-shaped knot is just 160 atoms in length (16 nanometers long). The building blocks were programmed to wrap themselves up."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/knotcover_mid.jpg", caption: "Figure 1. A molecular star is born: X-ray structure of the pentafoil knot." },
      { type: "video", url: "media/2012hologram.mp4", caption: "Video: Hologram of the pentafoil knot structure." }
    ]
  },
  "walking-molecule": {
    slug: "walking-molecule",
    citation: "A Synthetic Small Molecule that Walks down a Track, Nature Chem, 2, 96-101 (2010)",
    narrativeTitle: "A Synthetic Small Molecule that Walks down a Track",
    narrative: [
      "The first small-molecule system in which a 'walker' can be transported directionally along a short molecular track, reminiscent of motor proteins in the cell.",
      "While one foot is moving, the other remains attached to the track so that the walker does not drift off (processivity)."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/walker_mid.jpg", caption: "Figure 1. Small molecule walker moving down a track like kinesin." }
    ]
  },
  "hybrid-rotaxanes": {
    slug: "hybrid-rotaxanes",
    citation: "Hybrid Organic-Inorganic Rotaxanes and Molecular Shuttles, Nature, 458, 314-318 (2009)",
    narrativeTitle: "Hybrid Organic-Inorganic Rotaxanes",
    narrative: [
      "Inorganic wheels are assembled around linear organic axles to form hybrid rotaxane structures with dynamic propertiesPreserved previously for organic molecules.",
      "The metal centers in each heterometallic wheel are almost perfectly coplanar, with the wheel being intrinsically chiral."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/nature2009_mid.jpg", caption: "Figure 1. Hybrid mechanically interlocked molecules." }
    ]
  },
  "info-ratchet": {
    slug: "info-ratchet",
    citation: "Exercising Demons: A Molecular Information Ratchet, Nature, 445, 523-527 (2007)",
    narrativeTitle: "Exercising Demons: A Molecular Information Ratchet",
    narrative: [
      "A molecular machine operating via a mechanism inspired by a 140-year-old thought experiment (Maxwell's Demon).",
      "Using light energy, the molecule transmits information about its position to allow transport in a particular direction without challenging the laws of physics."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/mdcoversmall.jpg", caption: "Figure 1. Exercising demons: light-fueled information transfer." }
    ]
  },
  "macroscopic-transport": {
    slug: "macroscopic-transport",
    citation: "Macroscopic Transport by Synthetic Molecular Machines, Nature Mater, 4, 704-710 (2005)",
    narrativeTitle: "Macroscopic Transport by Synthetic Molecular Machines",
    narrative: [
      "First demonstration of stimulus-induced motion in synthetic molecular machines being used to transport a droplet and do macroscopic work.",
      "A monolayer of machines is able to elevate a diiodomethane drop 1 mm up a 12° slope against gravity."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/trainsmall.jpg", caption: "Figure 1. Macroscopic work from molecular events." }
    ]
  },
  "rotary-motor-2004": {
    slug: "rotary-motor-2004",
    citation: "A Reversible Synthetic Rotary Molecular Motor, Science, 306, 1532-1537 (2004)",
    narrativeTitle: "A Reversible Synthetic Rotary Molecular Motor",
    narrative: [
      "The first reversible synthetic molecular motor captures random displacements that occur during Brownian motion and directionally releases them.",
      "Remarkably, the sense of rotation (clockwise or counter-clockwise) is governed solely by the order in which chemical reactions are carried out."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/2004rotary_motor_fig1.jpg", caption: "Scheme 1. Operation of a reversible synthetic molecular motor." }
    ]
  },
  "rotary-motor-2003": {
    slug: "rotary-motor-2003",
    citation: "Unidirectional Rotation in a Mechanically Interlocked Molecular Rotor, Nature, 424, 174-179 (2003)",
    narrativeTitle: "A Mechanically-Interlocked Rotary Molecular Motor",
    narrative: [
      "Designing components for 'molecular machines' is counter-intuitive because physics at the molecular level is very different from our macroscopic world.",
      "The motor uses hydrogen bonds as a 'glue' to stop movement. Shining light breaks the glue, allowing counter-clockwise motion."
    ],
    figures: [
      { type: "image", url: "images/article_pictures/2003rotary_motor_fig1.jpg", caption: "Figure 1. Chemical structure of a mechanically-interlocked rotary molecular motor." }
    ]
  }
};
