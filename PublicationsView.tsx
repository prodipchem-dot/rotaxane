import React, { useState, useEffect } from 'react';
import { ExternalLink, Book, Layers, GraduationCap, Award, ChevronRight, FileText, Search } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  link: string;
  img: string;
  highlight?: string;
  isCover?: boolean;
}

interface YearGroup {
  year: string;
  papers: Publication[];
}

const PUBLICATION_DATA: YearGroup[] = [
  {
    year: "2026",
    papers: [
      { 
        title: "Chiral catalysis-driven rotary molecular motors", 
        authors: "H-K Liu, B M W Roberts, S Borsley, R W Adams, G F S Whitehead, A Hasija and D A Leigh", 
        journal: "Nat Chem, 148, published online 16 January 2026", 
        link: "https://www.nature.com/articles/s41557-025-02050-0",
        img: "https://www.catenane.net/images/graphical_abstracts/2026/chiralcatalysisdrivenmolecularmotors.png"
      },
      { 
        title: "Clean electrospray deposition of porphyrin molecules and polyethylene glycol chains onto a Au(100) surface", 
        authors: "K Kolar, M Kappe, H Siboni, I Gazizullin, G J Simpson, C Nacci, C M Storey, D A Leigh and L Grill", 
        journal: "J Phys Chem C, 130, 650-660 (2026)", 
        link: "https://doi.org/10.1021/acs.jpcc.5c06482",
        img: "https://www.catenane.net/images/graphical_abstracts/2026/cleanelectrospray.jpg"
      },
      { 
        title: "Structure-performance relationships for catalysis-driven molecular machinery", 
        authors: "J Baixeras Buye, J M Gallagher, D A Leigh", 
        journal: "Chem, 12, 102742 (2026)", 
        link: "https://www-sciencedirect-com.manchester.idm.oclc.org/science/article/pii/S245192942500333X?ref=cra_js_challenge&fr=RR-1",
        img: "https://www.catenane.net/images/graphical_abstracts/2025/reviewchemabstract.png"
      }
    ]
  },
  {
    year: "2025",
    papers: [
      { 
        title: "Reaction: Of myths, misconceptions and motors—a matter of equilibrium", 
        authors: "D A Leigh", 
        journal: "Chem, 11, 102745 (2025)", 
        link: "https://doi.org/10.1016/j.chempr.2025.102745",
        img: "https://www.catenane.net/images/graphical_abstracts/2025/chemdaveabstract.png"
      },
      { 
        title: "Multiple template site Nitrogen atom deletions from rotaxanes, catenanes, and a molecular knot", 
        authors: "D P Couto, Q Lin, J B M Whittingham, D J Tetlow, J Zhong, P Howlader, and D A Leigh", 
        journal: "J Am Chem Soc, 147, 33304-33314 (2025)", 
        link: "https://pubs.acs.org/doi/10.1021/jacs.5c12617",
        img: "https://www.catenane.net/images/graphical_abstracts/2025/images_large_ja5c12617_0008.jpg"
      },
      { 
        title: "Crown ether–peptide rotaxanes", 
        authors: "P-L Wang, P Chen, R Yang, D J Tetlow, Z-H Zhang, J Han, S D P Fielden, P Howlader, L Zhang and D A Leigh", 
        journal: "Angew Chem Int Ed, 64, e202513115 (2025)", 
        link: "https://onlinelibrary.wiley.com/doi/full/10.1002/anie.202513115",
        img: "https://www.catenane.net/images/graphical_abstracts/2025/crownetherpeptidethumbnail.png"
      },
      { 
        title: "In situ quantification of directional rotation by a catalysis-driven azaindole-N-oxide–phenoic acid molecular motor", 
        authors: "H-K Liu, A Troncossi, B M W Roberts, S Borsley and D A Leigh", 
        journal: "J Am Chem Soc, 147, 29534–29541 (2025)", 
        link: "https://pubs.acs.org/doi/10.1021/jacs.5c10520",
        img: "https://www.catenane.net/images/graphical_abstracts/2025/noxideabstract.jpg"
      },
      { 
        title: "Metal-free active template synthesis of catenanes", 
        authors: "J Zhong, E Olivieri, P Zwick, A Troncossi, A S Baluna, D J Tetlow, G F S Whitehead, A Hasija and D A Leigh", 
        journal: "Angew Chem Novit, 1, e70004 (2025)", 
        link: "https://doi-org.manchester.idm.oclc.org/10.1002/anov.70004",
        img: "https://www.catenane.net/images/graphical_abstracts/2025/mfreeactivetemplate.png",
        isCover: true
      },
      { 
        title: "Transducing chemical energy through catalysis by an artificial molecular motor", 
        authors: "P-L Wang, S Borsley, M J Power, A Cavasso, N Giuseppone and D A Leigh", 
        journal: "Nature, 637, 594–600 (2025)", 
        link: "https://t.co/YWomGAutpU",
        img: "https://www.catenane.net/images/graphical_abstracts/2025/Gelga.png"
      }
    ]
  },
  {
    year: "2024",
    papers: [
      { 
        title: "Out-of-equilibrium compartments: Thinking inside the box", 
        authors: "J M Gallagher, J Baixeras Buye, and D A Leigh", 
        journal: "Chem, 10, 3526-3528 (2024)", 
        link: "https://www.cell.com/chem/abstract/S2451-9294(24)00501-1",
        img: "https://www.catenane.net/images/graphical_abstracts/2024/outofequilibriumcompartments.png"
      },
      { 
        title: "Skeletal editing of mechanically interlocked molecules: Nitrogen atom deletion from crown ether-dibenzylammonium rotaxanes", 
        authors: "M Gauthier, J B M Whittingham, A Hasija, D J Tetlow, and D A Leigh", 
        journal: "J Am Chem Soc, 146, 29496-29502 (2024)", 
        link: "https://pubs.acs.org/doi/10.1021/jacs.4c09066",
        img: "https://www.catenane.net/images/graphical_abstracts/2024/thumbnail_jacs.4c09066.social.png"
      },
      { 
        title: "Mechanical scission of a knotted polymer", 
        authors: "M Zhang, R Nixon, F Schaufelberger, L Pirvu, G De Bo and D A Leigh", 
        journal: "Nat Chem, 16, 1366-1372 (2024)", 
        link: "https://www.nature.com/articles/s41557-024-01510-3",
        img: "https://www.catenane.net/images/graphical_abstracts/2024/knotbreaking.jpg"
      },
      { 
        title: "Macroscopic spiral rotation of microscopic objects induced by nanoscale rotaxane dynamics", 
        authors: "A Ryabchun, R Jamagne, J Echavarren, M Patanapongpibul, L Zhang, N Katsonis and D A Leigh", 
        journal: "Chem, 10, 2196-2206 (2024)", 
        link: "https://www.sciencedirect.com/science/article/pii/S2451929424001220",
        img: "https://www.catenane.net/images/graphical_abstracts/2024/macroscopicspiral.png"
      }
    ]
  },
  {
    year: "2023",
    papers: [
      { 
        title: "Switched “on” transient fluorescence output from a pulsed-fuel molecular ratchet", 
        authors: "A S Baluna, M Dommaschk, B Groh, S Kassem, D A Leigh, D J Tetlow, D Thomas and L V López", 
        journal: "J Am Chem Soc, 145, 27113-27119 (2023)", 
        link: "https://pubs.acs.org/doi/10.1021/jacs.3c11290#",
        img: "https://www.catenane.net/images/graphical_abstracts/2023/images_large_ja3c11290_0006.png"
      },
      { 
        title: "The role of kinetic asymmetry and power strokes in an information ratchet", 
        authors: "L Binks, S Borsley, T R Gingrich, D A Leigh, E Penocchio, and B M W Roberts", 
        journal: "Chem, 9, 2902-2917 (2023)", 
        link: "https://authors.elsevier.com/sd/article/S2451-9294(23)00267-X",
        img: "https://www.catenane.net/images/graphical_abstracts/2023/BadMotors.png"
      },
      { 
        title: "In search of Wasserman’s catenane", 
        authors: "A S Baluna, A Galan, D A Leigh, G D Smith, J T J Spence, D J Tetlow, I J Vitorica-Yrezabal and M Zhang", 
        journal: "J Am Chem Soc, 145, 9825-9833 (2023)", 
        link: "https://pubs.acs.org/doi/10.1021/jacs.3c01939",
        img: "https://www.catenane.net/images/graphical_abstracts/2023/Wasserman.png"
      },
      { 
        title: "Mechanical tightening of a synthetic molecular knot", 
        authors: "M Calvaresi, A-S Duwez, D A Leigh, D Sluysmans, Y Song, F Zerbetto and L Zhang", 
        journal: "Chem, 9, 65-75 (2023)", 
        link: "https://www.sciencedirect.com/science/article/pii/S245192942200657X",
        img: "https://www.catenane.net/images/graphical_abstracts/2023/AFMKnot.jpg",
        isCover: true
      }
    ]
  },
  {
    year: "2022",
    papers: [
      { 
        title: "A tape-reading molecular ratchet", 
        authors: "Y Ren, R Jamagne, D J Tetlow and D A Leigh", 
        journal: "Nature, 612, 78–82 (2022)", 
        link: "https://www.nature.com/articles/s41586-022-05305-9",
        img: "https://www.catenane.net/images/graphical_abstracts/2022/Turing.png"
      },
      { 
        title: "Using catalysis to drive chemistry away from equilibrium: relating kinetic asymmetry, power strokes, and the Curtin-Hammett principle in Brownian ratchets", 
        authors: "S Amano, M Esposito, E Kreidt, D A Leigh, E Penocchio and B M W Roberts", 
        journal: "J Am Chem Soc, 144, 20153-20164 (2022)", 
        link: "https://pubs.acs.org/doi/10.1021/jacs.2c08723",
        img: "https://www.catenane.net/images/graphical_abstracts/2022/Curtin-Hammett.jpg"
      },
      { 
        title: "Vernier template synthesis of molecular knots", 
        authors: "Z Ashbridge, E Kreidt, L Pirvu, F Schaufelberger, J Halldin Stenlid, F Abild-Pedersen and D A Leigh", 
        journal: "Science, 375, 1035-1041 (2022)", 
        link: "https://www.science.org/doi/10.1126/science.abm9247",
        img: "https://www.catenane.net/images/graphical_abstracts/2022/Vernier.png"
      },
      { 
        title: "Molecular weaving", 
        authors: "Z-H Zhang, B J Andreassen, D P August, D A Leigh and L Zhang", 
        journal: "Nat Mater, 21, 275-283 (2022)", 
        link: "https://www.nature.com/articles/s41563-021-01179-w",
        img: "https://www.catenane.net/images/graphical_abstracts/2022/IntWov.png",
        isCover: true
      }
    ]
  },
  {
    year: "2021",
    papers: [
      { 
        title: "A catalysis-driven artificial molecular pump", 
        authors: "S Amano, S D P Fielden and D A Leigh", 
        journal: "Nature, 594, 529-534 (2021)", 
        link: "https://www.nature.com/articles/s41586-021-03575-3",
        img: "https://www.catenane.net/images/graphical_abstracts/2021/VidKey.png"
      },
      { 
        title: "Chemical engines: Driving systems away from equilibrium through catalyst reaction cycles", 
        authors: "S Amano, S Borsley, D A Leigh and Z Sun", 
        journal: "Nat Nanotechnol, 16, 1057-1067 (2021)", 
        link: "https://www.nature.com/articles/s41565-021-00975-4",
        img: "https://www.catenane.net/images/graphical_abstracts/2021/Drivsys.png"
      },
      { 
        title: "A molecular endless (74) knot", 
        authors: "D A Leigh, J J Danon, S D P Fielden, J-F Lemonnier, G F S Whitehead and S L Woltering", 
        journal: "Nat Chem, 13, 117-122 (2021)", 
        link: "https://www.nature.com/articles/s41557-020-00594-x",
        img: "https://www.catenane.net/images/graphical_abstracts/2020/endless.jpg",
        isCover: true
      }
    ]
  }
];

const PublicationsView: React.FC = () => {
  const [activeYear, setActiveYear] = useState("2026");
  const [searchTerm, setSearchTerm] = useState("");

  // Smooth scroll to year section
  const scrollToYear = (year: string) => {
    const element = document.getElementById(`year-${year}`);
    if (element) {
      const offset = 120; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveYear(year);
    }
  };

  return (
    <div className="py-12 md:py-24">
      {/* HEADER SECTION */}
      <section className="container mx-auto px-6 mb-16 md:mb-24">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 serif italic tracking-tight">Scientific Bibliography</h1>
            <p className="text-[#660099] text-xs md:text-sm font-bold uppercase tracking-[0.4em]">Chronicles of Molecular Magic & Synthesis</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-100 px-6 py-6 rounded-[2rem] flex items-center gap-6 group hover:border-purple-200 transition-all shadow-md">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                    <Book size={24} />
                </div>
                <div>
                    <span className="block text-slate-900 font-bold text-xs uppercase tracking-widest mb-1">Impact Factor</span>
                    <span className="text-slate-500 text-xs leading-relaxed italic">Leading in Nature, Science, and JACS.</span>
                </div>
            </div>
            <div className="bg-white border border-slate-100 px-6 py-6 rounded-[2rem] flex items-center gap-6 group hover:border-yellow-200 transition-all shadow-md">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-[#ffcc00] group-hover:scale-110 transition-transform">
                    <Layers size={24} />
                </div>
                <div>
                    <span className="block text-slate-900 font-bold text-xs uppercase tracking-widest mb-1">Global Reach</span>
                    <span className="text-slate-500 text-xs leading-relaxed italic">30+ Years of pioneering research.</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH AND NAVIGATION BAR */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/80 backdrop-blur-xl border-y border-slate-100 py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Year Nav (Mobile: Scrollable Bar) */}
            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                {PUBLICATION_DATA.map(g => (
                    <button
                        key={g.year}
                        onClick={() => scrollToYear(g.year)}
                        className={`text-[10px] md:text-[11px] font-black uppercase tracking-widest whitespace-nowrap px-4 py-2 rounded-xl transition-all ${
                            activeYear === g.year 
                            ? 'bg-[#660099] text-white shadow-lg' 
                            : 'text-slate-400 hover:text-slate-900'
                        }`}
                    >
                        {g.year}
                    </button>
                ))}
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-64">
                <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                    type="text" 
                    placeholder="Quick search..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-[11px] text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
      </div>

      {/* PUBLICATIONS MAIN LIST */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* MAIN LIST */}
            <div className="lg:col-span-12 space-y-24">
                {PUBLICATION_DATA.map((group) => {
                    const filteredPapers = group.papers.filter(p => 
                        p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        p.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        p.journal.toLowerCase().includes(searchTerm.toLowerCase())
                    );

                    if (filteredPapers.length === 0) return null;

                    return (
                        <div key={group.year} id={`year-${group.year}`} className="scroll-mt-48 space-y-12">
                            <div className="flex items-center gap-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 serif italic">{group.year}</h2>
                                <div className="h-px flex-grow bg-slate-100"></div>
                            </div>

                            <div className="space-y-16">
                                {filteredPapers.map((pub, idx) => (
                                    <div key={idx} className="grid md:grid-cols-12 gap-8 md:gap-12 group">
                                        {/* Graphical Abstract */}
                                        <div className="md:col-span-4 aspect-video rounded-[2rem] overflow-hidden border border-slate-100 bg-white relative shadow-sm">
                                            <img 
                                                src={pub.img} 
                                                alt={pub.title} 
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                                                onError={(e) => { e.currentTarget.src = "https://www.catenane.net/images/graphical_abstracts/placeholder.jpg" }}
                                            />
                                            {pub.isCover && (
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-[#ffcc00] text-slate-900 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                                                        <Award size={10} /> Cover Story
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Paper Details */}
                                        <div className="md:col-span-8 space-y-6">
                                            <div className="space-y-3">
                                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 serif italic leading-tight group-hover:text-[#660099] transition-colors">
                                                    “{pub.title}”
                                                </h3>
                                                <p className="text-slate-500 text-[11px] leading-relaxed italic">{pub.authors}</p>
                                                <div className="flex items-center gap-3">
                                                    <FileText size={12} className="text-[#660099]" />
                                                    <p className="text-[#660099] text-[10px] font-black uppercase tracking-widest">{pub.journal}</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 pt-2">
                                                <a 
                                                    href={pub.link} 
                                                    target="_blank" 
                                                    className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#660099] hover:text-white transition-all border border-slate-200"
                                                >
                                                    Full Article <ExternalLink size={12} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>
    </div>
  );
};

export default PublicationsView;