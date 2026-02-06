
import React from 'react';
import { ExternalLink, Book, Layers } from 'lucide-react';

const PUBLICATIONS = [
    {
        year: "2026",
        papers: [
            { 
                title: "Chiral catalysis-driven rotary molecular motors", 
                authors: "H-K Liu, B M W Roberts, S Borsley, R W Adams, G F S Whitehead, A Hasija and D A Leigh", 
                journal: "Nat Chem, 148", 
                link: "https://www.nature.com/articles/s41557-025-02050-0",
                img: "https://www.catenane.net/images/graphical_abstracts/2026/chiralcatalysisdrivenmolecularmotors.png"
            },
            { 
                title: "Clean electrospray deposition of porphyrin molecules and polyethylene glycol chains onto a Au(100) surface", 
                authors: "K Kolar, M Kappe, H Siboni, et al., D A Leigh and L Grill", 
                journal: "J Phys Chem C, 130", 
                link: "https://doi.org/10.1021/acs.jpcc.5c06482",
                img: "https://www.catenane.net/images/graphical_abstracts/2026/cleanelectrospray.html"
            }
        ]
    },
    {
        year: "2025",
        papers: [
            { 
                title: "Reaction: Of myths, misconceptions and motors—a matter of equilibrium", 
                authors: "D A Leigh", 
                journal: "Chem, 11", 
                link: "https://doi.org/10.1016/j.chempr.2025.102745",
                img: "https://www.catenane.net/images/graphical_abstracts/2025/chemdaveabstract.png"
            },
            { 
                title: "Multiple template site Nitrogen atom deletions from rotaxanes, catenanes, and a molecular knot", 
                authors: "D P Couto, Q Lin, et al. and D A Leigh", 
                journal: "J Am Chem Soc, 147", 
                link: "https://pubs.acs.org/doi/10.1021/jacs.5c12617",
                img: "https://www.catenane.net/images/graphical_abstracts/2025/images_large_ja5c12617_0008.jpg"
            },
            { 
                title: "Transducing chemical energy through catalysis by an artificial molecular motor", 
                authors: "P-L Wang, S Borsley, et al. and D A Leigh", 
                journal: "Nature, 637", 
                link: "https://t.co/YWomGAutpU",
                img: "https://www.catenane.net/images/graphical_abstracts/2025/Gelga.png"
            }
        ]
    },
    {
        year: "2024",
        papers: [
            { 
                title: "Mechanical scission of a knotted polymer", 
                authors: "M Zhang, R Nixon, et al. and D A Leigh", 
                journal: "Nat Chem, 16", 
                link: "https://www.nature.com/articles/s41557-024-01510-3",
                img: "https://www.catenane.net/images/graphical_abstracts/2024/knotbreaking.jpg"
            },
            { 
                title: "Macroscopic spiral rotation of microscopic objects induced by nanoscale rotaxane dynamics", 
                authors: "A Ryabchun, et al. and D A Leigh", 
                journal: "Chem, 10", 
                link: "https://www.sciencedirect.com/science/article/pii/S2451929424001220",
                img: "https://www.catenane.net/images/graphical_abstracts/2024/macroscopicspiral.png"
            }
        ]
    }
];

const PublicationsView: React.FC = () => {
  return (
    <div className="py-24 container mx-auto px-6 space-y-32">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-6xl font-bold text-white serif italic">Scientific Publications</h1>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em]">Chronicles of Molecular Discovery</p>
        <div className="flex gap-4 pt-8">
            <div className="bg-slate-900 border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-4 flex-1">
                <Book className="text-yellow-400" />
                <div>
                    <span className="block text-white font-bold text-xs uppercase tracking-widest">H-Index</span>
                    <span className="text-slate-400 text-sm italic">Pioneering Supramolecular Chemistry</span>
                </div>
            </div>
            <div className="bg-slate-900 border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-4 flex-1">
                <Layers className="text-purple-400" />
                <div>
                    <span className="block text-white font-bold text-xs uppercase tracking-widest">Groundbreaking</span>
                    <span className="text-slate-400 text-sm italic">Nature, Science, & JACS</span>
                </div>
            </div>
        </div>
      </div>

      <div className="space-y-24">
        {PUBLICATIONS.map((group, gIdx) => (
            <div key={gIdx} className="space-y-12">
                <h2 className="text-4xl font-bold text-white serif italic border-b border-white/5 pb-6">{group.year}</h2>
                <div className="space-y-16">
                    {group.papers.map((pub, pIdx) => (
                        <div key={pIdx} className="grid md:grid-cols-12 gap-12 items-start group">
                            <div className="md:col-span-4 aspect-video rounded-3xl overflow-hidden border border-white/5 bg-slate-900">
                                <img 
                                    src={pub.img} 
                                    alt={pub.title} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                                    onError={(e) => { e.currentTarget.src = "https://www.catenane.net/images/graphical_abstracts/placeholder.jpg" }}
                                />
                            </div>
                            <div className="md:col-span-8 space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-white serif italic leading-tight group-hover:text-yellow-400 transition-colors">
                                        “{pub.title}”
                                    </h3>
                                    <p className="text-slate-400 text-sm italic">{pub.authors}</p>
                                    <p className="text-purple-400 text-xs font-bold uppercase tracking-widest">{pub.journal}</p>
                                </div>
                                <a 
                                    href={pub.link} 
                                    target="_blank" 
                                    className="inline-flex items-center gap-2 bg-[#660099] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-purple-500 transition-all shadow-xl shadow-purple-500/10"
                                >
                                    Full Article <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>

      <div className="text-center pt-20">
        <p className="text-slate-500 text-sm mb-8">For publications prior to 2011, please visit our archive.</p>
        <a href="https://scholar.google.co.uk/citations?user=jLubszkAAAAJ" target="_blank" className="text-yellow-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-[0.4em] flex items-center justify-center gap-3">
          Complete Google Scholar metrics <ExternalLink size={14}/>
        </a>
      </div>
    </div>
  );
};

export default PublicationsView;
