
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

// Added category property to each highlight to fix filtering error in ResearchView.tsx.
// Categories match the CATEGORIES array in ResearchView.tsx: "Motors & Pumps", "Knots & Topology", "Robotics & Synthesis", "Supramolecular".
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
