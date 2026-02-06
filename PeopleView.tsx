
import React, { useState } from 'react';
import { Mail, GraduationCap, MapPin, Search } from 'lucide-react';
import { MANCHESTER_TEAM, SHANGHAI_TEAM, TeamMember } from './constants';

const PeopleView: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState('manchester');
  const [searchTerm, setSearchTerm] = useState('');

  const currentData = activeTeam === 'manchester' ? MANCHESTER_TEAM : SHANGHAI_TEAM;

  const filteredPeople = currentData.filter(p => 
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
                        Shanghai Team (ECNU)
                    </button>
                </div>
            </div>
            <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                <input 
                    type="text" 
                    placeholder="Search members..." 
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
      </section>

      {/* TEAM INFO & GRID */}
      <section className="container mx-auto px-6 space-y-12">
        {activeTeam === 'shanghai' && (
          <div className="bg-slate-900/40 border border-purple-500/20 p-10 rounded-[3rem] space-y-6">
             <div className="flex items-center gap-4">
                <MapPin className="text-yellow-400" size={24} />
                <h2 className="text-3xl text-white serif italic leading-tight">East China Normal University (ECNU)</h2>
             </div>
             <p className="text-slate-400 max-w-3xl text-sm leading-relaxed">
               Our Shanghai-based team operates at East China Normal University, focusing on molecular assembly and topological synthesis in the vibrant scientific hub of Shanghai.
             </p>
          </div>
        )}

        {filteredPeople.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPeople.map((person, idx) => (
              <div key={idx} className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all flex flex-col shadow-2xl">
                 <div className="aspect-[4/5] relative overflow-hidden">
                    <img 
                        src={person.img} 
                        alt={person.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                        onError={(e) => { e.currentTarget.src = "https://www.catenane.net/images/current_members/labmonkey.jpg" }}
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                        {person.email && (
                          <a 
                            href={`mailto:${person.email}`}
                            className="p-2 bg-slate-950/80 backdrop-blur rounded-xl text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white"
                          >
                              <Mail size={14} />
                          </a>
                        )}
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
          <div className="py-24 text-center">
            <p className="text-slate-500 italic">No team members found matching your search.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default PeopleView;
