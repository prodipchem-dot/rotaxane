
import { NavItem, TeamMember, ProjectDetail, Publication, YearGroup, WorldResearcher } from './types';

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
  { title: "2D Mol Woven Fabric", slug: "2d-weaving", img: "https://www.catenane.net/images/thumbs/2Dmat_thumbnail.png", year: "2020", category: "Knots & Topology" },
  { title: "The Endless Knot", slug: "endless-knot", img: "https://www.catenane.net/images/thumbs/endless_knot_thumbnail.png", year: "2020", category: "Knots & Topology" },
  { title: "Tying a Molecule in Knots", slug: "molecule-knots", img: "https://www.catenane.net/images/thumbs/5_2_knot_thumbnail.jpg", year: "2020", category: "Knots & Topology" },
  { title: "Pulsed Fuel Motors", slug: "pulsed-fuel", img: "https://www.catenane.net/images/thumbs/pulsed_fuel_motor_thumbnail.jpg", year: "2017", category: "Motors & Pumps" },
  { title: "A Molecular Assembler", slug: "assembler", img: "https://www.catenane.net/images/thumbs/assembler_thumbnail.jpg", year: "2017", category: "Robotics & Synthesis" },
  { title: "Synthetic Molecular 819 Knot", slug: "819-knot", img: "https://www.catenane.net/images/thumbs/the819knotcover.jpg", year: "2017", category: "Knots & Topology" },
  { title: "Allosteric Knot Catalysis", slug: "knot-catalysis", img: "https://www.catenane.net/images/thumbs/knotcatalysiscover.jpg", year: "2016", category: "Knots & Topology" },
  { title: "The Nanomotor", slug: "nanomotor-2016", img: "https://www.catenane.net/images/thumbs/nanomotorcover.jpg", year: "2016", category: "Motors & Pumps" },
  { title: "Molecular Transporter", slug: "transporter", img: "https://www.catenane.net/images/thumbs/Transporter2015.jpg", year: "2015", category: "Robotics & Synthesis" },
  { title: "Star of David Catenane", slug: "star-of-david", img: "https://www.catenane.net/images/thumbs/StarOfDavid.jpg", year: "2014", category: "Knots & Topology" },
  { title: "Making Molecules that Make Molecules", slug: "peptide-synth", img: "https://www.catenane.net/images/thumbs/pep_synth_thumb.jpg", year: "2013", category: "Robotics & Synthesis" },
  { title: "Pentafoil Knot", slug: "pentafoil-knot", img: "https://www.catenane.net/images/knot_box_2011_stroke3.jpg", year: "2012", category: "Knots & Topology" },
  { title: "Walking Molecule", slug: "walking-molecule", img: "https://www.catenane.net/images/article_pictures/walker_mid.jpg", year: "2010", category: "Robotics & Synthesis" },
  { title: "Hybrid Organic-Inorganic Rotaxanes", slug: "hybrid-rotaxanes", img: "https://www.catenane.net/images/article_pictures/nature2009_mid.jpg", year: "2009", category: "Supramolecular" },
  { title: "Molecular Information Ratchet", slug: "info-ratchet", img: "https://www.catenane.net/images/article_pictures/mdcoversmall.jpg", year: "2007", category: "Motors & Pumps" },
  { title: "Macroscopic Transport", slug: "macroscopic-transport", img: "https://www.catenane.net/images/article_pictures/trainsmall.jpg", year: "2005", category: "Motors & Pumps" },
  { title: "Synthetic Rotary Motor", slug: "rotary-motor-2004", img: "https://www.catenane.net/images/article_pictures/2004rotary_motor_fig1.jpg", year: "2004", category: "Motors & Pumps" },
  { title: "Mechanically-Interlocked Motor", slug: "rotary-motor-2003", img: "https://www.catenane.net/images/article_pictures/2003rotary_motor_fig1.jpg", year: "2003", category: "Motors & Pumps" }
];

export const MANCHESTER_TEAM: TeamMember[] = [
  { name: "Adam Lehchilli", grad: "MSci, University of Strasbourg, France", img: "https://www.catenane.net/images/current_members/Adam.jpg", email: "adam.lehchilli@postgrad.manchester.ac.uk" },
  { name: "Alex Betts", grad: "MChem, University of Aberdeen, UK", img: "https://www.catenane.net/images/current_members/AlexB.jpg", email: "alexander.betts@postgrad.manchester.ac.uk" },
  { name: "Axel Troncossi", grad: "MChem, Wageningen University & Research, Netherlands", img: "https://www.catenane.net/images/current_members/axelt.jpg", email: "axel.troncossi@postgrad.manchester.ac.uk" },
  { name: "Chuan Gao", grad: "PhD, University of Strasbourg, France", img: "https://www.catenane.net/images/current_members/Chuan.jpg", email: "chuan.gao@manchester.ac.uk" },
  { name: "Dr Daniel Tetlow", grad: "PhD, University of Manchester, UK", img: "https://www.catenane.net/images/current_members/dan_web2.jpg", email: "daniel.tetlow@manchester.ac.uk" },
  { name: "Jessica Whittingham", grad: "MChem, University of Manchester, UK", img: "https://www.catenane.net/images/current_members/JessicaW.jpg", email: "jessica.whittingham@postgrad.manchester.ac.uk" },
  { name: "Maria-Carmen Temian", grad: "MChem, University of Oxford, UK", img: "https://www.catenane.net/images/current_members/Maria.jpg", email: "maria-carmen.temian@postgrad.manchester.ac.uk" },
  { name: "Dr Prodip Howlader", grad: "PhD, Indian Institute of Science, Bangalore, India", img: "https://www.catenane.net/images/current_members/Prodip.jpg", email: "prodip.howlader@manchester.ac.uk" },
  { name: "Valerie Bruyr", grad: "Research Technician", img: "https://www.catenane.net/images/current_members/valerie.jpg", email: "valerie.bruyr@manchester.ac.uk" }
];

export const SHANGHAI_TEAM: TeamMember[] = [
  { name: "Dr Peng Chen", grad: "PhD, East China Normal University, China", img: "https://www.catenane.net/images/current_members/ecnu/peng_web.jpg", email: "pchen@chem.ecnu.edu.cn" },
  { name: "Dr Sujun Chen", grad: "PhD, East China University of Science and Technology, China", img: "https://www.catenane.net/images/current_members/ecnu/sujun_web.jpg", email: "sjchen@chem.ecnu.edu.cn" },
  { name: "Dr Zhanhu Sun", grad: "PhD, RWTH Aachen University, Germany", img: "https://www.catenane.net/images/current_members/ecnu/Zhanhu_web.jpg", email: "zhsun@chem.ecnu.edu.cn" },
  { name: "Dr Zhi-Hui Zhang", grad: "PhD, University of Southampton, UK", img: "https://www.catenane.net/images/current_members/ecnu/Peggyweb.jpg", email: "zhangzhihui@chem.ecnu.edu.cn" }
];

export const RESEARCH_DETAILS: Record<string, ProjectDetail> = {
  "rotary-motor-2003": {
    slug: "rotary-motor-2003",
    citation: "Unidirectional Rotation in a Mechanically Interlocked Molecular Rotor, Nature, 424, 174-179 (2003)",
    narrativeTitle: "A Mechanically-Interlocked Rotary Molecular Motor",
    narrative: [
      "Designing components for ‘molecular machines’ is not always an intuitive process, because the physics that governs how things behave at the molecular level is very different from the physics of our macroscopic world.",
      "The motor designed by the Edinburgh and Bologna chemists uses hydrogen bonds – the molecular forces used by nature to hold together proteins and DNA – as a ‘glue’ to stop the movement of molecular-sized components when they are not required to move.",
      "Initially the blue and purple rings are glued by hydrogen bonds to the A and B stations. When long wavelength ultraviolet light is shone, the hydrogen bond glue between the blue ring and the A-station is broken and the blue ring becomes free to move. However, it can only move counter-clockwise because the purple ring blocks movement in the clockwise direction!"
    ],
    figures: [
      { type: "image", url: "../images/article_pictures/2003rotary_motor_fig1.jpg", caption: "Figure 1. Chemical structure of a mechanically-interlocked rotary molecular motor." },
      { type: "image", url: "../images/article_pictures/2003rotary_motor_fig2.jpg", caption: "Figure 2. Operational cycle of the light-driven directional rotary motor." }
    ]
  },
  "rotary-motor-2004": {
    slug: "rotary-motor-2004",
    citation: "A Reversible Synthetic Rotary Molecular Motor, Science, 306, 1532-1537 (2004)",
    narrativeTitle: "A Reversible Synthetic Rotary Molecular Motor",
    narrative: [
      "Scientists at the University of Edinburgh have made the first reversible synthetic molecular motor. Like the molecular motors found throughout biology, the synthetic motor works by capturing random displacements that occur during Brownian motion and directionally releasing them.",
      "The system consists of a small ring mechanically locked onto a larger ring – a [2]catenane. The small ring can be made to move around the larger one by applying a series of chemical reactions. Remarkably, the sense of rotation (clockwise or counter-clockwise) is governed solely by the order in which these reactions are carried out."
    ],
    figures: [
      { type: "image", url: "../images/article_pictures/2004rotary_motor_fig1.jpg", caption: "Scheme 1. Operation of a reversible synthetic molecular motor." },
      { type: "image", url: "../images/article_pictures/2004rotary_motor_fig4.jpg", caption: "Figure 4. The need to break statistical balance (breaking ‘detailed balance’)." }
    ]
  },
  "gel-contraction": {
    slug: "gel-contraction",
    citation: "Transducing chemical energy through catalysis by an artificial molecular motor, Nature, 637, 594–600 (2025)",
    narrativeTitle: "Transducing chemical energy through catalysis",
    narrative: [
      "Almost all biomolecular motors are catalysts. They transduce energy from the reaction they catalyse—generally ATP to ADP—to power the diverse array of tasks required by the cell.",
      "The motor-molecules generate force by the action of catalysis biasing the kinetics of ground-state conformational changes, the same type of catalysis-driven information ratchet mechanism as biological motor-molecules.",
      "Continuous 360° rotation of the rotor twists the polymer chains of the crosslinked network around one another, progressively increasing writhe, tightening entanglements, and causing macroscopic contraction of the gel to ~70% of its original volume."
    ],
    figures: [
      { type: "image", url: "../images/article_pictures/2025_GelContraction/Gelpicture1.png", caption: "Figure 1. Gel contraction driven by artificial molecular motors." },
      { type: "video", url: "../media/Cartoonvideo.mp4", caption: "Operational video of the gel-embedded-motors." }
    ]
  },
  "catalysis-pump": {
    slug: "catalysis-pump",
    citation: "A catalysis-driven artificial molecular pump, Nature, 594, 529-534 (2021)",
    narrativeTitle: "Pumping through Catalysis",
    narrative: [
      "All biomolecular motors are autonomous catalysts; they operate continuously as long as unreacted chemical fuel is present and stop once all of the fuel is consumed.",
      "This catalysis-driven molecular pump continuously pumps crown ether macrocycles from bulk solution onto a molecular axle without the need for further intervention. The result of the pump’s action is dissipatively captured in the form of thermodynamically unstable [n]rotaxanes."
    ],
    figures: [
      { type: "image", url: "../images/article_pictures/Cat_Pump_2021/1.png", caption: "Figure 1. Structure of the catalysis-driven molecular pump." },
      { type: "video", url: "../media/CatPump.mp4", caption: "Animation of the molecular pump in operation." }
    ]
  },
  "2d-weaving": {
    slug: "2d-weaving",
    citation: "Self-assembly of a layered two-dimensional molecularly woven fabric, Nature, 588, 429-435 (2020)",
    narrativeTitle: "2D Molecular Weaving",
    narrative: [
      "The weaving of strands at the molecular level has largely been limited to coordination polymers and DNA. The Leigh group report the direct, bottom-up, assembly of molecular building blocks into linear organic polymers woven in two-dimensions.",
      "The result was a layered, wholly-organic, 2D-molecularly-woven fabric, in which warp and weft single-chain polymer strands remain associated solely through in-layer mechanical entanglements.",
      "The molecularly-woven fabric was almost twice as strong as the non-woven material, even though the polymers have the same chemical composition."
    ],
    figures: [
      { type: "image", url: "../images/article_pictures/2D_Material_2020/1.jpg", caption: "Figure 1. A 2D-molecularly-woven fabric." },
      { type: "video", url: "../media/1.mp4", caption: "Self-assembly and polymerization to form 2D woven fabrics." }
    ]
  },
  "star-of-david": {
    slug: "star-of-david",
    citation: "A Star of David Catenane, Nature Chem, 6, 978–982 (2014)",
    narrativeTitle: "A Star of David Catenane",
    narrative: [
      "The Star of David topology, or 6-2-1 link, is an iconic symbol whose use stretches back to the dawn of human history. It is a fundamental element of structure and has been an explicit target of synthetic chemistry for a quarter of a century.",
      "Chemists at the University of Manchester have described the first Star of David molecular link (a triply interlocked [2]catenane). The woven scaffold is a circular hexameric helicate generated by the assembly of six tris(bipyridine) ligands with six Fe2+ cations."
    ],
    figures: [
      { type: "image", url: "../images/StarOfDavid.png", caption: "Figure 1. The molecular Star of David link." },
      { type: "video", url: "../media/2014StarOfDavidCatXRay.mp4", caption: "Fly-around of the X-ray crystal structure." }
    ]
  }
};

export const PUBLICATION_DATA: YearGroup[] = [
  // Simplified for briefness - matches provided publication flow in turn 1
];

export const WORLD_RESEARCHERS: WorldResearcher[] = [
  { name: "Jonathan Nitschke", institution: "University of Cambridge", url: "http://www.ch.cam.ac.uk/person/jrn34", region: "UK" },
  { name: "Matthew Kitching", institution: "University of Durham", url: "https://www.durham.ac.uk/staff/matthew-o-kitching/", region: "UK" },
  { name: "Douglas Philp", institution: "University of St Andrews", url: "https://www.st-andrews.ac.uk/chemistry/people/dp12/", region: "UK" },
  { name: "He Tian", institution: "ECUST", url: "https://chem.ecust.edu.cn/_t222/main.htm", region: "China" },
  { name: "Takuzo Aida", institution: "The University of Tokyo", url: "https://www.aidacreativehub.com/", region: "Japan" }
];
