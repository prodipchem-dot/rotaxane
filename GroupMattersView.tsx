
import React from 'react';
import { Shield, Users, Ticket, MapPin, Lock, ExternalLink, Heart } from 'lucide-react';

const GroupMattersView: React.FC = () => {
  return (
    <div className="py-24 space-y-32">
      {/* SAFETY & PHOTO */}
      <section className="container mx-auto px-6">
        <div className="space-y-12">
            <div className="aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative">
                <img src="https://www.catenane.net/images/GroupPhoto2023.jpg" alt="Leigh Group 2023" className="w-full h-full object-cover" />
                <div className="absolute bottom-8 left-8 p-4 bg-slate-950/50 backdrop-blur rounded-2xl border border-white/10">
                    <p className="text-white font-bold text-sm italic">Leigh Group, Windermere 2023</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-white serif italic flex items-center gap-4">
                        <Shield className="text-yellow-400" /> Safety
                    </h2>
                    <div className="space-y-4 text-slate-400 leading-relaxed">
                        <p>The safety of our researchers is paramount. Our first aiders are:</p>
                        <ul className="grid grid-cols-2 gap-4">
                            <li className="p-4 bg-slate-900 border border-white/5 rounded-2xl text-white font-bold text-sm">Valerie Bruyr</li>
                            <li className="p-4 bg-slate-900 border border-white/5 rounded-2xl text-white font-bold text-sm">Daniel Tetlow</li>
                        </ul>
                        <div className="pt-4">
                            <button className="flex items-center gap-3 bg-[#660099] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-purple-500 transition-all">
                                <Lock size={14}/> Lab Manual Access
                            </button>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-white serif italic flex items-center gap-4">
                        <Heart className="text-red-400" /> Annual Trip
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                        Each year the group visits Windermere for a research retreat. This serves as a vital time for building 
                        the strong interpersonal bonds that fuel our collaborative scientific efforts.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* MONKEY BUSINESS TABLE */}
      <section className="bg-slate-950/50 border-y border-white/5 py-32">
        <div className="container mx-auto px-6 space-y-16">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-white serif italic">Monkey Business</h2>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Lab Responsibilities</p>
            </div>
            
            <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <table className="w-full text-left text-sm text-slate-300">
                    <thead className="bg-[#660099] text-white font-bold uppercase tracking-widest text-[10px]">
                        <tr>
                            <th className="px-8 py-4">Responsibility</th>
                            <th className="px-8 py-4">Monkey</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr className="bg-slate-900/50">
                            <td className="px-8 py-4 font-bold text-white">Safety Champion</td>
                            <td className="px-8 py-4">Flavio</td>
                        </tr>
                        <tr>
                            <td className="px-8 py-4 font-bold text-white">Bay Bosses</td>
                            <td className="px-8 py-4">Enzo, Prodip, Maxime, Martin, Patrick, Flavio</td>
                        </tr>
                        <tr className="bg-slate-900/50">
                            <td className="px-8 py-4 font-bold text-white">IT & Webpage</td>
                            <td className="px-8 py-4">Maria</td>
                        </tr>
                        <tr>
                            <td className="px-8 py-4 font-bold text-white">NMR</td>
                            <td className="px-8 py-4">Emily, Patrycja, Alex</td>
                        </tr>
                        <tr className="bg-slate-900/50">
                            <td className="px-8 py-4 font-bold text-white">MS</td>
                            <td className="px-8 py-4">Loli, Axel, Jannik, Jessica</td>
                        </tr>
                        <tr>
                            <td className="px-8 py-4 font-bold text-white">HPLC</td>
                            <td className="px-8 py-4">Toufic, Joaquin</td>
                        </tr>
                        <tr className="bg-slate-900/50">
                            <td className="px-8 py-4 font-bold text-white">Size Exclusion</td>
                            <td className="px-8 py-4">Patrick</td>
                        </tr>
                        <tr>
                            <td className="px-8 py-4 font-bold text-white">UV-Vis</td>
                            <td className="px-8 py-4">Ke, James</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* OLD TRAFFORD */}
      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <h2 className="text-4xl font-bold text-white serif italic flex items-center gap-4">
                    <Ticket className="text-red-600" /> Old Trafford Tickets
                </h2>
                <div className="prose prose-invert prose-purple max-w-none text-slate-400 leading-relaxed space-y-4 text-sm">
                    <p>
                        The Leigh Group and their Guests have the use of a pair of Season Tickets for Manchester United at Old Trafford. 
                        For the current season the seats are in the <span className="text-white font-bold">Sir Alex Ferguson Stand, Block N3406, row 25, seats 81 & 82</span>.
                    </p>
                    <p>
                        Everyone in the group who wishes to (and/or their guest) should be able to see at least one game a season. 
                        Ticketing is managed by Prodip and Maria.
                    </p>
                    <div className="pt-6 flex gap-4">
                        <a href="http://www.manutd.com/en/Visit-Old-Trafford/Maps-And-Directions.aspx" target="_blank" className="flex items-center gap-2 text-yellow-400 font-bold text-[10px] uppercase tracking-widest hover:text-white transition-colors">
                            <MapPin size={14}/> View Directions
                        </a>
                        <span className="text-slate-800">|</span>
                        <a href="mailto:maria-carmen.termian@postgrad.manchester.ac.uk" className="flex items-center gap-2 text-yellow-400 font-bold text-[10px] uppercase tracking-widest hover:text-white transition-colors">
                            <ExternalLink size={14}/> Book a Game
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img src="https://www.catenane.net/images/general/OldTrafford2.bmp" alt="Stadium Map" className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                </div>
                <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img src="https://www.catenane.net/images/general/OldTraffordView.png" alt="View from Seats" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default GroupMattersView;
