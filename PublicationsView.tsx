
import React, { useState } from 'react';
import { ExternalLink, Search, Award } from 'lucide-react';
import { PUBLICATION_DATA } from './constants';

const PublicationsView: React.FC = () => {
  const [activeYear, setActiveYear] = useState("2026");
  const [searchTerm, setSearchTerm] = useState("");

  const scrollToYear = (year: string) => {
    const element = document.getElementById(`year-${year}`);
    if (element) {
      const offset = 140;
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

  const years = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2013", "2012", "2011"];

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-slate-900 pb-24">
      {/* YEAR PILLS NAVIGATION */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#f8f9fa]/95 backdrop-blur-md py-6 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {years.map(y => (
              <button
                key={y}
                onClick={() => scrollToYear(y)}
                className={`px-5 py-1.5 rounded-full text-[13px] font-medium border transition-all ${
                  activeYear === y 
                    ? 'bg-white border-slate-300 shadow-sm text-purple-700' 
                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-400'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
          
          {/* SEARCH BAR */}
          <div className="mt-8 max-w-md mx-auto relative group">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search publications..." 
              className="w-full bg-white border border-slate-200 rounded-full py-2.5 pl-11 pr-4 text-[13px] focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-300 transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* PUBLICATIONS LIST */}
      <section className="container mx-auto px-6 pt-16">
        <div className="max-w-5xl mx-auto space-y-32">
          {PUBLICATION_DATA.map((group) => {
            const filteredPapers = group.papers.filter(p => 
              p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
              p.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
              p.journal.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredPapers.length === 0) return null;

            return (
              <div key={group.year} id={`year-${group.year}`} className="scroll-mt-40 relative">
                {/* LARGE BACKGROUND YEAR */}
                <div className="absolute -top-16 left-0 text-[180px] font-black text-slate-200/40 select-none pointer-events-none leading-none z-0">
                  {group.year}
                </div>

                {/* YEAR HEADER WITH DASH */}
                <div className="relative z-10 flex items-center gap-4 mb-12">
                  <div className="h-1 w-10 bg-[#ffcc00] rounded-full"></div>
                  <h2 className="text-4xl font-black text-purple-800 tracking-tight">{group.year}</h2>
                </div>

                <div className="space-y-10 relative z-10">
                  {filteredPapers.map((pub, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white rounded-[2rem] p-10 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col md:flex-row items-center gap-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* TEXT CONTENT */}
                      <div className="flex-1 space-y-6">
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-purple-50 text-purple-700 text-[10px] font-black tracking-widest uppercase rounded-lg border border-purple-100">
                            {pub.journal}
                          </span>
                          <span className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold tracking-widest uppercase rounded-lg border border-slate-100">
                            {group.year}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-2xl font-bold text-slate-900 leading-[1.2]">
                          {pub.title}
                        </h3>

                        <div className="pl-4 border-l-2 border-purple-200">
                          <p className="text-slate-500 text-[14px] italic leading-relaxed font-medium">
                            {pub.authors}
                          </p>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold tracking-wider">
                          <span className="text-slate-400 uppercase">CITATION:</span>
                          <span className="text-purple-700 uppercase">{pub.journal}</span>
                          <span className="text-slate-900">148</span>
                          <span className="text-slate-400">published online 16 January {group.year}</span>
                        </div>

                        <div className="pt-2">
                          <a 
                            href={pub.link} 
                            target="_blank" 
                            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-[12px] font-bold uppercase tracking-widest transition-colors"
                          >
                            Full Article <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>

                      {/* RIGHT IMAGE CONTAINER - Wrapped in Link as requested */}
                      <div className="w-full md:w-80 flex-shrink-0">
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/60 p-2 shadow-inner group/imglink transition-transform duration-300 active:scale-95"
                        >
                          <img 
                            src={pub.img} 
                            alt={pub.title} 
                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover/imglink:scale-110" 
                            onError={(e) => { e.currentTarget.src = "https://www.catenane.net/images/graphical_abstracts/placeholder.jpg" }}
                          />
                        </a>
                        {pub.isCover && (
                          <div className="mt-3 flex justify-center">
                            <span className="bg-[#ffcc00] text-slate-950 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm flex items-center gap-2">
                              <Award size={10} /> Cover Story
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default PublicationsView;
