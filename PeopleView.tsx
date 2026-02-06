
import React, { useState } from 'react';
import { Mail, GraduationCap, MapPin, Search } from 'lucide-react';

const PEOPLE_DATA = [
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

const PeopleView: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState('manchester');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPeople = PEOPLE_DATA.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-24 space-y-24">
      {/* HEADER */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/5 pb-12">
            <div className="space-y-6">
                <h1 className="text-6xl font-bold text-white serif italic">The Team</h1>
                <div className="flex gap-4">
                    <button 
                        onClick={() => setActiveTeam('manchester')}
                        className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeTeam === 'manchester' ? 'bg-[#660099] text-white shadow-lg' : 'bg-slate-900 text-slate-500 hover:text-slate-300'}`}
                    >
                        Manchester Team
                    </button>
                    <button 
                        onClick={() => setActiveTeam('shanghai')}
                        className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeTeam === 'shanghai' ? 'bg-[#660099] text-white shadow-lg' : 'bg-slate-900 text-slate-500 hover:text-slate-300'}`}
                    >
                        Shanghai Team
                    </button>
                </div>
            </div>
            <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                <input 
                    type="text" 
                    placeholder="Search by name..." 
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
      </section>

      {/* GRID */}
      <section className="container mx-auto px-6">
        {activeTeam === 'manchester' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPeople.map((person, idx) => (
              <div key={idx} className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all flex flex-col">
                 <div className="aspect-[4/5] relative overflow-hidden">
                    <img 
                        src={person.img} 
                        alt={person.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                        <div className="p-2 bg-slate-950/80 backdrop-blur rounded-xl text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Mail size={14} />
                        </div>
                    </div>
                 </div>
                 <div className="p-6 space-y-2 flex-grow">
                    <h3 className="text-white font-bold text-lg serif italic leading-tight">{person.name}</h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed flex items-center gap-2">
                        <GraduationCap size={12} className="text-purple-500"/> {person.grad}
                    </p>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center space-y-6">
             <MapPin className="mx-auto text-yellow-400" size={48} />
             <h3 className="text-2xl text-white serif italic">East China Normal University (ECNU)</h3>
             <p className="text-slate-500 max-w-xl mx-auto">Our Shanghai team handles molecular engineering in the Far East. Profiles are updated seasonally.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default PeopleView;
