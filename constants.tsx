
import { NavItem } from './types';

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
  { title: "Gel Contraction", slug: "gel-contraction", img: "https://www.catenane.net/images/thumbs/Gelthumbnail.png", year: "2025" },
  { title: "Tape Reading Ratchet", slug: "tape-reading", img: "https://www.catenane.net/images/thumbs/TapeThumb.png", year: "2022" },
  { title: "Rotary Motor", slug: "rotary-motor-2022", img: "https://www.catenane.net/images/thumbs/RotaryMotorThumb.png", year: "2022" },
  { title: "Phase Transfer Pump", slug: "phase-transfer", img: "https://www.catenane.net/images/thumbs/PhasePumpThumb.png", year: "2022" },
  { title: "The Vernier", slug: "vernier-knot", img: "https://www.catenane.net/images/thumbs/Vernier_Thumbnail.jpg", year: "2022" },
  { title: "Catalysis Pump", slug: "catalysis-pump", img: "https://www.catenane.net/images/thumbs/CatPump_thumbnail.png", year: "2021" },
  { title: "2D Mol Woven Fabric", slug: "2d-weaving", img: "https://www.catenane.net/images/thumbs/2Dmat_thumbnail.png", year: "2020" },
  { title: "The Endless Knot", slug: "endless-knot", img: "https://www.catenane.net/images/thumbs/endless_knot_thumbnail.png", year: "2020" },
  { title: "Tying a Molecule in Knots", slug: "molecule-knots", img: "https://www.catenane.net/images/thumbs/5_2_knot_thumbnail.jpg", year: "2020" },
  { title: "Pulsed Fuel Motors", slug: "pulsed-fuel", img: "https://www.catenane.net/images/thumbs/pulsed_fuel_motor_thumbnail.jpg", year: "2017" },
  { title: "A Molecular Assembler", slug: "assembler", img: "https://www.catenane.net/images/thumbs/assembler_thumbnail.jpg", year: "2017" },
  { title: "Synthetic Molecular 819 Knot", slug: "819-knot", img: "https://www.catenane.net/images/thumbs/the819knotcover.jpg", year: "2017" },
  { title: "Allosteric Knot Catalysis", slug: "knot-catalysis", img: "https://www.catenane.net/images/thumbs/knotcatalysiscover.jpg", year: "2016" },
  { title: "The Nanomotor", slug: "nanomotor-2016", img: "https://www.catenane.net/images/thumbs/nanomotorcover.jpg", year: "2016" },
  { title: "Molecular Transporter", slug: "transporter", img: "https://www.catenane.net/images/thumbs/Transporter2015.jpg", year: "2015" },
  { title: "Star of David Catenane", slug: "star-of-david", img: "https://www.catenane.net/images/thumbs/StarOfDavid.jpg", year: "2014" },
  { title: "Making Molecules that Make Molecules", slug: "peptide-synth", img: "https://www.catenane.net/images/thumbs/pep_synth_thumb.jpg", year: "2013" },
  { title: "Pentafoil Knot", slug: "pentafoil-knot", img: "https://www.catenane.net/images/knot_box_2011_stroke3.jpg", year: "2012" },
  { title: "Walking Molecule", slug: "walking-molecule", img: "https://www.catenane.net/images/article_pictures/walker_mid.jpg", year: "2010" },
  { title: "Hybrid Organic-Inorganic Rotaxanes", slug: "hybrid-rotaxanes", img: "https://www.catenane.net/images/article_pictures/nature2009_mid.jpg", year: "2009" },
  { title: "Molecular Information Ratchet", slug: "info-ratchet", img: "https://www.catenane.net/images/article_pictures/mdcoversmall.jpg", year: "2007" },
  { title: "Macroscopic Transport", slug: "macroscopic-transport", img: "https://www.catenane.net/images/article_pictures/trainsmall.jpg", year: "2005" },
  { title: "Synthetic Rotary Motor", slug: "rotary-motor-2004", img: "https://www.catenane.net/images/article_pictures/2004rotary_motor_fig1.jpg", year: "2004" },
  { title: "Mechanically-Interlocked Motor", slug: "rotary-motor-2003", img: "https://www.catenane.net/images/article_pictures/2003rotary_motor_fig1.jpg", year: "2003" }
];

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

export interface TeamMember {
  name: string;
  grad: string;
  img: string;
  email?: string;
}

export const MANCHESTER_TEAM: TeamMember[] = [
  { name: "Adam Lehchilli", grad: "MSci, University of Strasbourg, France", img: "https://www.catenane.net/images/current_members/Adam.jpg" },
  { name: "Alex Betts", grad: "MChem, University of Aberdeen, UK", img: "https://www.catenane.net/images/current_members/AlexB.jpg" },
  { name: "Axel Troncossi", grad: "MChem, Wageningen University, Netherlands", img: "https://www.catenane.net/images/current_members/axelt.jpg" },
  { name: "Chuan Gao", grad: "PhD, University of Strasbourg, France", img: "https://www.catenane.net/images/current_members/Chuan.jpg" },
  { name: "Daniel Lucas Pinho Feitosa Couto", grad: "MSci, PSL University, France", img: "https://www.catenane.net/images/current_members/Daniel%20Lucas.jpg" },
  { name: "Dr Daniel Tetlow", grad: "PhD, University of Manchester, UK", img: "https://www.catenane.net/images/current_members/dan_web2.jpg" },
  { name: "Emily Cramp", grad: "MSci, University of Birmingham, UK", img: "https://www.catenane.net/images/current_members/Emily.jpg" },
  { name: "Dr Félix Hernández Culebras", grad: "PhD, Polymat, Spain", img: "https://www.catenane.net/images/current_members/Felix.jpg" },
  { name: "Dr Huakui Liu", grad: "PhD, SIOC, China", img: "https://www.catenane.net/images/current_members/Huakui.jpg" },
  { name: "Jannik Lion Schiessl", grad: "MSci, Uni Ulm, Germany", img: "https://www.catenane.net/images/current_members/Jannic.jpg" },
  { name: "Jessica Whittingham", grad: "MChem, University of Manchester, UK", img: "https://www.catenane.net/images/current_members/JessicaW.jpg" },
  { name: "Joaquin Baixeras Buye", grad: "MSci, University of Cambridge, UK", img: "https://www.catenane.net/images/current_members/Quim.jpg" },
  { name: "Linfeng Tan", grad: "MSc, Fudan University, China", img: "https://www.catenane.net/images/current_members/Linfeng.jpg" },
  { name: "Lukas Marrow", grad: "MChem, University of Oxford, UK", img: "https://www.catenane.net/images/current_members/Lukas.jpg" },
  { name: "Maria-Carmen Temian", grad: "MChem, University of Oxford, UK", img: "https://www.catenane.net/images/current_members/Maria.jpg" },
  { name: "Dr Prodip Howlader", grad: "PhD, IISc Bangalore, India", img: "https://www.catenane.net/images/current_members/Prodip.jpg" },
  { name: "Valerie Bruyr", grad: "Research Technician", img: "https://www.catenane.net/images/current_members/valerie.jpg" },
  { name: "Lab Monkey", grad: "Honorary Researcher", img: "https://www.catenane.net/images/current_members/labmonkey.jpg" }
];

export const SHANGHAI_TEAM: TeamMember[] = [
  { name: "Dr Peng Chen", grad: "PhD, East China Normal University, China", img: "https://www.catenane.net/images/current_members/ecnu/peng_web.jpg", email: "pchen@chem.ecnu.edu.cn" },
  { name: "Dr Sujun Chen", grad: "PhD, East China University of Science and Technology, China", img: "https://www.catenane.net/images/current_members/ecnu/sujun_web.jpg", email: "sjchen@chem.ecnu.edu.cn" },
  { name: "Dr Zhanhu Sun", grad: "PhD, RWTH Aachen University, Germany", img: "https://www.catenane.net/images/current_members/ecnu/Zhanhu_web.jpg", email: "zhsun@chem.ecnu.edu.cn" },
  { name: "Dr Zhi-Hui Zhang", grad: "PhD, University of Southampton, UK", img: "https://www.catenane.net/images/current_members/ecnu/Peggyweb.jpg", email: "zhangzhihui@chem.ecnu.edu.cn" }
];

export const RESEARCH_DETAILS: Record<string, ProjectDetail> = {
  "gel-contraction": {
    slug: "gel-contraction",
    citation: "‘Transducing chemical energy through catalysis by an artificial molecular motor,’ Peng-Lai Wang, Stefan Borsley, Martin J. Power, Alessandro Cavasso, Nicolas Giuseppone & David A. Leigh, Nature, 637, 594–600 (2025).",
    narrativeTitle: "Research Narrative",
    narrative: [
      "It seems counter-intuitive that the act of catalysis—simply the acceleration of a chemical reaction—somehow enables work to be done. Yet this is how all of biology is powered. In this 2025 study, the Leigh and Giuseppone groups demonstrate the transduction of chemical energy by a synthetic catalyst to generate force and perform mechanical work.",
      "Cells display mechanical activities enabled by the cytoskeleton, a viscoelastic hydrogel manipulated by motor proteins. Our study demonstrates the powered contraction of a hydrogel driven by the directional rotation of artificial organocatalytic molecular motors. These motor-molecules generate force by biasing the kinetics of ground-state conformational changes, a process that winds polymer chains around one another, increasing writhe and causing macroscopic contraction to ~70% of its original volume."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/2025_GelContraction/Gelpicture1.png", caption: "Figure 1. The transduction of chemical energy into mechanical work through catalysis." },
      { type: 'video', url: "media/Cartoonvideo.mp4", caption: "The transduction of chemical energy into mechanical work through catalysis." }
    ]
  },
  "tape-reading": {
    slug: "tape-reading",
    citation: "‘A Tape-Reading Molecular Ratchet’ Yansong Ren, Romain Jamagne, Daniel J. Tetlow, David A. Leigh, Nature, 612, 78–82 (2022).",
    narrativeTitle: "The Information Revolution",
    narrative: [
      "In 1936 Alan Turing published a concept for an automatic machine for abstract computing. Today, we have realized an artificial molecular machine that moves along a molecular tape, changing the reading head’s shape in response to ‘symbols’ on the tape it encounters.",
      "The new nanomachine is a type of machine termed a ‘finite state automaton’. It moves in one direction through a string-encoded state sequence, with readable outputs via circular dichroism (CD) response. The fueling synchronizes dynamics so that almost every macrocycle is at the same tape position simultaneously."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/2022TapeReading/Turing.png", caption: "A molecular finite automaton: an artificial molecular Turing machine." },
      { type: 'video', url: "media/TapeVideo.mp4", caption: "A chemically fuelled tape-reading molecular ratchet." }
    ]
  },
  "rotary-motor-2022": {
    slug: "rotary-motor-2022",
    citation: "‘Autonomous fuelled directional rotation about a covalent single bond’ Borsley et al, Nature, 604, 80–85 (2022).",
    narrativeTitle: "Va-Va-Voom at the Bottom",
    narrative: [
      "Richard Feynman was fascinated by extreme miniaturisation. We have taken this concept further by showing that a 26-atom biaryl compound is a catalysis-driven motor that continuously transduces energy from a chemical fuel to induce repetitive 360° directional rotation.",
      "Upon treatment with a carbodiimide fuel, intramolecular anhydride formation between the rings and its subsequent hydrolysis occur incessantly. Both reactions are directionally biased, meaning the motor rotates the rotor around the stator as long as fuel is present. This discovery solves the long-standing problem of continuous directional rotation about a single covalent bond."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/2022RotaryMotor/Feynman.png", caption: "Motors in miniature: From Feynman’s theoretical ratchet." },
      { type: 'video', url: "media/RotaryVid2.mp4", caption: "Autonomous fuelled directional rotation about a covalent single bond." }
    ]
  },
  "phase-transfer": {
    slug: "phase-transfer",
    citation: "‘Pumping between phases with a pulsed-fuel molecular ratchet’ Dean Thomas et al, Nat. Nanotechnol. (2022).",
    narrativeTitle: "Phase Transfer Control",
    narrative: [
      "The Leigh group report on an artificial molecular pump, immobilised on polymer beads, that uses a ratchet mechanism to actively transport substrates from solution onto the beads. Upon addition of a pulsed chemical fuel, beads sequester crown ethers appended with a fluorescent tag.",
      "Following consumption of the fuel, the rings are mechanically trapped in a higher energy state on the beads. This drives the system progressively further away from equilibrium and confers sequence information on the deposited structure."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/2022PhaseTransfer/TopImage.png", caption: "Adsorption glow up: Pumping from solution onto polymer beads." },
      { type: 'video', url: "media/PhaseTransfer.mp4", caption: "Sequential pumping and information readout using a pulse-fuelled molecular ratchet." }
    ]
  },
  "vernier-knot": {
    slug: "vernier-knot",
    citation: "‘Vernier Template Synthesis of Molecular Knots’ Zoe Ashbridge et al, Science, 375, 1035-1041 (2022).",
    narrativeTitle: "Scaling Topology",
    narrative: [
      "The entanglement of molecular strands alters dynamics and enhances structural stability. Vernier templating relies on a mismatch between the number of binding sites on two complementary components.",
      "We adapted this concept to assemble the triskelion (trefoil-of-trefoils) knot with 12 crossings and complete topological stereocontrol. These are the largest and most complex discrete arrays of molecular entanglements prepared to date."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/Vernier_Knot_2022/Underwater.jpg", caption: "Vernier Entanglements: Control of 12 alternating crossings." },
      { type: 'image', url: "images/article_pictures/Vernier_Knot_2022/fig2.jpg", caption: "Vernier template synthesis of a molecular triskelion knot." }
    ]
  },
  "catalysis-pump": {
    slug: "catalysis-pump",
    citation: "‘A catalysis-driven artificial molecular pump’ Shuntaro Amano et al, Nature, 594, 529-534 (2021).",
    narrativeTitle: "Autonomous Pumping",
    narrative: [
      "Biological pumps are catalysts, powered by the energy released from continuous catalytic decomposition of chemical fuel. This artificial molecular pump continuously pushes crown ether macrocycles onto a molecular axle without external intervention.",
      "The pumping is driven by transiently inserting a bulky Fmoc ‘stopper’ to retard the de-threading of captured rings. The result is a dissipative capture in the form of thermodynamically unstable [n]rotaxanes."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/Cat_Pump_2021/1.png", caption: "Pumping through Catalysis: Structure and autonomous operation." },
      { type: 'video', url: "media/CatPump.mp4", caption: "An artificial catalysis-driven molecular pump." }
    ]
  },
  "2d-weaving": {
    slug: "2d-weaving",
    citation: "‘Self-assembly of a layered two-dimensional molecularly woven fabric’ August et al, Nature, 588, 429-435 (2020).",
    narrativeTitle: "The Ultimate Textile",
    narrative: [
      "The weaving of flexible strands into 2D fabrics has underpinned technology through the ages. We have succeeded in the direct bottom-up assembly of molecular building blocks into linear organic polymers woven in two-dimensions.",
      "Individual layers are only 4 nm thick, yet the material's thread count is 40–60 million—magnitudes finer than the best Egyptian linen (1500). Pressing on the woven polymer with an AFM tip revealed it is almost twice as strong."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/2D_Material_2020/1.jpg", caption: "A 2D-molecularly-woven fabric." },
      { type: 'video', url: "media/1.mp4", caption: "Self-assembly of a 3x3 interwoven grid and polymerization." }
    ]
  },
  "endless-knot": {
    slug: "endless-knot",
    citation: "‘A molecular endless (74) knot’ Leigh et al, Nat Chem, 13, 117-122 (2021).",
    narrativeTitle: "Endless Forms Most Beautiful",
    narrative: [
      "Daryle Busch predicted 'molecular weaving' in 1992. After a decade of design, we solved the challenge using an unanticipated BF4- template effect.",
      "The resulting 258-atom-long closed loop 7_4 endless knot is a basic motif of Celtic interlace and the smallest Chinese knot. Its preparation marks the intersection of polymer science, 2D materials, and molecular nanotopology."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/endless_knot_2020/1.jpg", caption: "Tapestry featuring a molecular endless knot (7_4)." },
      { type: 'video', url: "media/endless.mp4", caption: "Molecular 7_4 knot coordination complex animation." }
    ]
  },
  "molecule-knots": {
    slug: "molecule-knots",
    citation: "‘Tying different knots in a molecular strand’ Leigh et al, Nature, 584, 562-568 (2020).",
    narrativeTitle: "Molecular Cat’s Cradle",
    narrative: [
      "In our everyday world, strands can be tied into different knots for different tasks. We applied this concept to synthetic molecules using a 15nm strand interspersed with binding sites.",
      "By choosing which metal ions to activate, we can fold the same strand into an unknot, a trefoil, or a 5-2 knot. This 'molecular cat's cradle' rearrangement mimics supercoiling in DNA."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/5_2_knot_2020/5_2_knot_info.jpg", caption: "Tying different knots in a 15nm molecular strand." },
      { type: 'video', url: "media/52%20knot.mp4", caption: "Cu(I) and Lu(III) induced folding and entanglement to form 5-2 knot." }
    ]
  },
  "pulsed-fuel": {
    slug: "pulsed-fuel",
    citation: "‘Rotary and linear molecular motors driven by pulses of a chemical fuel’ Science, 358, 340-343 (2017).",
    narrativeTitle: "The Power of Pulses",
    narrative: [
      "We developed a motor mechanism that powers both rotary and linear motion using an energy ratchet. This system relies on pulses of trichloroacetic acid fuel that switches the acidity of the medium.",
      "A single pulse rotates a catenane motor 360°, generating only carbon dioxide and chloroform as waste. This universal mechanism has broad application potential in nanotechnology."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/chemical_fuelled_motor_2017/machines%20infograph.jpg", caption: "Pulsed fuel motors: Rotary and linear variants." },
      { type: 'video', url: "media/2catenane%20video%20crop.mp4", caption: "Repetitive operation of a rotary molecular motor." }
    ]
  },
  "assembler": {
    slug: "assembler",
    citation: "‘Stereodivergent synthesis with a programmable molecular machine’ Nature, 549, 374-378 (2017).",
    narrativeTitle: "Nanoscale Construction",
    narrative: [
      "A hypothetical 'molecular assembler' guides reactions by positioning reactive molecules. We developed a molecular robot that moves a substrate between different activating sites.",
      "While the machine manipulates a single molecule, the process is massively parallelized with over 10^18 robots working simultaneously. This marks a major step toward mechanosynthesis."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/assembler2017/assembler_cover.jpg", caption: "Molecular assembler: Stereodivergent synthesis." },
      { type: 'video', url: "media/assembler%20animation.mp4", caption: "Programmed operation of the molecular robotic arm." }
    ]
  },
  "819-knot": {
    slug: "819-knot",
    citation: "‘Braiding a molecular knot with eight crossings’ Danon et al, Science, 355, 159-162 (2017).",
    narrativeTitle: "Braiding Strands",
    narrative: [
      "Until now, chemists only made simple trefoil and pentafoil knots. We developed a way of braiding three molecular strands to make tighter and more complex knots.",
      "This is the most tightly knotted physical structure known, with only 24 atoms per crossing. Being able to braid strands opens the door to probing material strength and elasticity."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/819knot2017/819knot-cut.jpg", caption: "The 8-19 knot: 192-atom loop with eight crossings." },
      { type: 'video', url: "media/2017_Knot_819_assemblyweb.mp4", caption: "Assembly of a molecular 8-19 knot." }
    ]
  },
  "knot-catalysis": {
    slug: "knot-catalysis",
    citation: "‘Allosteric Initiation and Regulation of Catalysis with a Molecular Knot’ Science, 352, 1555-1559 (2016).",
    narrativeTitle: "Allosteric Power",
    narrative: [
      "The significance of knotting is becoming apparent in fields from colloids to cosmic origins. We found that a synthetic molecular pentafoil knot can promote Lewis acid catalyzed reactions.",
      "The knot possesses a halide binding pocket that is only organized when it binds five metal ions. This is a dramatic example of allostery in molecular topology."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/knotcatalysis2016/CartaMarinaKnot.jpg", caption: "Hic Sunt Dracones! Exploring molecular topology." },
      { type: 'image', url: "images/article_pictures/knotcatalysis2016/knotcatalysis_2016_cover.jpg", caption: "Allosteric regulation of catalysis." }
    ]
  },
  "nanomotor-2016": {
    slug: "nanomotor-2016",
    citation: "‘An Autonomous Chemically Fuelled Small-Molecule Motor’ Nature, 534, 235-240 (2016).",
    narrativeTitle: "Gromit’s Track-Laying Mechanism",
    narrative: [
      "We invented a synthetic motor that runs off chemical energy like motor proteins use ATP. The motor layout lays down a track in front of the moving ring while removing it from behind.",
      "The design can be seen as the chemical equivalent of the famous Wallace & Gromit train chase. This 'information ratchet' has potential to power tasks in molecular nanotechnology."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/nanomotor2016/Figure2a.gif", caption: "Cracking Nanomotor: Wallace and Gromit analogy." },
      { type: 'video', url: "media/ChemMotorAnim.mp4", caption: "An artificial catalysis-driven rotary molecular motor." }
    ]
  },
  "transporter": {
    slug: "transporter",
    citation: "‘Pick-up, Transport and Release of a Molecular Cargo’ Nature Chem, 8, 138-143 (2016).",
    narrativeTitle: "The Robotic Arm",
    narrative: [
      "Biology uses robotic arms to manipulate molecules. We created a small-molecule robotic arm that picks up cargo, repositions it, and sets it down 2 nm away.",
      "This relocate fragments by making and breaking chemical bonds without the cargo ever drifting into the bulk solvent. It's a first step toward controlled manipulation through robotics."
    ],
    figures: [
      { type: 'image', url: "images/roboticarmwithmolecule.png", caption: "Molecular Robotics: Nano-assembly line on the horizon." },
      { type: 'video', url: "media/MolRobotArmVideoNatChem2016LowResv2.mp4", caption: "Stylized nanopunk representation of the robotic arm operation." }
    ]
  },
  "star-of-david": {
    slug: "star-of-david",
    citation: "‘A Star of David Catenane’ David A. Leigh et al, Nature Chem, 6, 978–982 (2014).",
    narrativeTitle: "Topological Icon",
    narrative: [
      "The Star of David is an iconic symbol whose synthetic realization was a target for 25 years. We generated a circular hexameric helicate to capture the 6-2-1 link topology.",
      "Linking protein rings creates viral 'chainmail' shells—man-made equivalents could lead to materials that are incredibly strong yet light and flexible."
    ],
    figures: [
      { type: 'image', url: "images/StarOfDavid.png", caption: "Star of David Catenane: A 6-2-1 link topology." },
      { type: 'video', url: "media/2014StarOfDavidCatXRay.mp4", caption: "Fly-around movie of the X-ray crystal structure." }
    ]
  },
  "peptide-synth": {
    slug: "peptide-synth",
    citation: "‘Sequence-Specific Peptide Synthesis by an Artificial Small-Molecule Machine’ Science, 339, 189-193 (2013).",
    narrativeTitle: "The Artificial Ribosome",
    narrative: [
      "Nature builds proteins in factories like the ribosome. We built a machine with a nanometer-sized ring that moves along a track, picking up building blocks and connecting them.",
      "This represents a shift from mixing cocktails of chemicals to using machines that position substrates precisely, revolutionalizing how we design functional materials."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/pepsynth_fig1.png", caption: "Artificial Ribosome: Sequencing peptides on a track." },
      { type: 'video', url: "media/2013peptsynth.mp4", caption: "Mechanism of operation of the artificial molecular machine." }
    ]
  },
  "pentafoil-knot": {
    slug: "pentafoil-knot",
    citation: "‘A Synthetic Molecular Pentafoil Knot’ Nature Chem, 4, 15-20 (2012).",
    narrativeTitle: "A Star is Born",
    narrative: [
      "Knots provide 85% of natural rubber's elasticity. We prepared a star-shaped pentafoil knot using self-assembly of building blocks programmed to wrap into a 160-atom loop.",
      "We produced the first hologram of a small-molecule X-ray crystal structure to celebrate the synthesis, allowing full appreciation of its complex 3D topology."
    ],
    figures: [
      { type: 'image', url: "images/covers/large/2012_nat_chem_cover.jpg", caption: "Pentafoil Knot: Inspired by Hiberno-Saxon manuscripts." },
      { type: 'video', url: "media/2012hologram.mp4", caption: "The first hologram of a small-molecule X-ray crystal structure." }
    ]
  },
  "walking-molecule": {
    slug: "walking-molecule",
    citation: "‘A Synthetic Small Molecule that Walks down a Track’ Nature Chem, 2, 96-101 (2010).",
    narrativeTitle: "Walking down the Track",
    narrative: [
      "Biopolymers like Kinesin walk along cellular tracks. We created the first small-molecule walker that moves directionally along a short track with processive movement.",
      "By oscillating between acid and base, the walker takes steps forward via exchange reactions. This is the first step toward artificial linear motors for surface-bound tracks."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/walker_mid.jpg", caption: "Molecular Walker: Moving like Kinesin." },
      { type: 'image', url: "images/article_pictures/walker_fig4.png", caption: "Size comparison of Kinesin with the small-molecule walker." }
    ]
  },
  "hybrid-rotaxanes": {
    slug: "hybrid-rotaxanes",
    citation: "‘Hybrid Organic-Inorganic Rotaxanes’ Nature, 458, 314-318 (2009).",
    narrativeTitle: "Organic-Inorganic Fusion",
    narrative: [
      "We created the first rotaxanes in which inorganic and organic components are linked mechanically. An inorganic wheel is threaded around an organic axle.",
      "These merge organic dynamic properties with inorganic magnetic characteristics, potentially serving as components for qubits in quantum information processing."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/nature2009_mid.jpg", caption: "Hybrid interlocked molecules: Linking carbon and metal." },
      { type: 'image', url: "images/article_pictures/nature2009_fig3.jpg", caption: "X-Ray crystal structure of a hybrid organic-inorganic rotaxane." }
    ]
  },
  "info-ratchet": {
    slug: "info-ratchet",
    citation: "‘Exercising Demons: A Molecular Information Ratchet’ Nature, 445, 523-527 (2007).",
    narrativeTitle: "Maxwell’s Legacy",
    narrative: [
      "James Clerk Maxwell proposed a 'demon' that could sort molecules to violate the Second Law. We used light energy to fuel an 'information ratchet' in a rotaxane.",
      "Because the ring signals its presence to a chemical gate, it is pumped away from equilibrium. This represents a fundamentally new way to drive synthetic nanomachines."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/mdcoversmall.jpg", caption: "Molecular Demon: Exercising Maxwell's thought experiment." },
      { type: 'image', url: "images/article_pictures/webdemons.jpg", caption: "Cartoon illustration of the Maxwell Demon thought experiment." }
    ]
  },
  "macroscopic-transport": {
    slug: "macroscopic-transport",
    citation: "‘Macroscopic Transport by Synthetic Molecular Machines’ Nature Mater, 4, 704-710 (2005).",
    narrativeTitle: "Moving the Macroscopic",
    narrative: [
      "We demonstrated that mechanical molecular events can lead to a macroscopic response. Light-driven shuttles transport droplets across surfaces by altering surface tension.",
      "The machines even elevated a droplet up a 12° slope against gravity, scaling molecular motion across six orders of magnitude to do macroscopic work."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/trainsmall.jpg", caption: "Molecular Shuttles: Moving liquid droplets uphill." },
      { type: 'image', url: "images/article_pictures/natmatfig2.jpg", caption: "Light-driven directional transport of a droplet." }
    ]
  },
  "rotary-motor-2004": {
    slug: "rotary-motor-2004",
    citation: "‘A Reversible Synthetic Rotary Molecular Motor’ Science, 306, 1532-1537 (2004).",
    narrativeTitle: "Reversibility and Rotation",
    narrative: [
      "We created the first reversible synthetic molecular motor. It works by capturing random Brownian displacements and directionally releasing them via chemical reactions.",
      "This minimalist design demonstrated that the sense of rotation is determined solely by the order in which chemical reactions are carried out."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/2004rotary_motor_fig1.jpg", caption: "Minimalist Motor Design: Breaking statistical balance." },
      { type: 'image', url: "images/article_pictures/2004rotary_motor_fig4.jpg", caption: "Combination of kinetic gates and thermodynamic switching." }
    ]
  },
  "rotary-motor-2003": {
    slug: "rotary-motor-2003",
    citation: "‘Unidirectional Rotation in a Mechanically Interlocked Molecular Rotor’ Nature, 424, 174-179 (2003).",
    narrativeTitle: "Molecular Engineering",
    narrative: [
      "Our first motor used hydrogen bonds to stop components moving until wanted. Breaking those bonds with light fueled the rotation of two rings around a larger one.",
      "Each small ring blocks the path of the other, forcing both to move in the same direction—a light-driven unidirectional rotary motor milestone."
    ],
    figures: [
      { type: 'image', url: "images/article_pictures/2003rotary_motor_fig1.jpg", caption: "The First Motor: Hydrogen-bonded mechanically interlocked rotor." },
      { type: 'image', url: "images/article_pictures/2003rotary_motor_fig2.jpg", caption: "Mechanism of unidirectional rotation via light irradiation." }
    ]
  }
};
