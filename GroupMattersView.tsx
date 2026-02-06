
import React from 'react';
import { Shield, Ticket, MapPin, Lock, ExternalLink, Heart } from 'lucide-react';

const GroupMattersView: React.FC = () => {
  return (
    <div className="py-24 space-y-32">
      {/* SAFETY & PHOTO */}
      <section className="container mx-auto px-6">
        <div className="space-y-12">
            <div className="aspect-[21/9] rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl relative bg-white">
                <img src="https://www.catenane.net/images/GroupPhoto2023.jpg" alt="Leigh Group 2023" className="w-full h-full object-cover opacity-95" />
                <div className="absolute bottom-8 left-8 p-4 bg-white/80 backdrop-blur rounded-2xl border border-slate-200">
                    <p className="text-slate-900 font-bold text-sm italic">Leigh Group, Windermere 2023</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8 p-10 bg-white border border-slate-200 rounded-[3rem] shadow-sm">
                    <h2 className="text-4xl font-bold text-slate-900 serif italic flex items-center gap-4">
                        <Shield className="text-[#ffcc00]" /> Safety
                    </h2>
                    <div className="space-y-4 text-slate-600 leading-relaxed">
                        <p>The safety of our researchers is paramount.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-800 font-bold text-sm">Valerie Bruyr</div>
                            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-800 font-bold text-sm">Daniel Tetlow</div>
                        </div>
                        <div className="pt-4">
                            <button className="flex items-center gap-3 bg-[#660099] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-purple-700 transition-all shadow-md">
                                <Lock size={14}/> Lab Manual Access
                            </button>
                        </div>
                    </div>
                </div>
                <div className="space-y-8 p-10 bg-[#660099] rounded-[3rem] shadow-lg text-white">
                    <h2 className="text-4xl font-bold text-white serif italic flex items-center gap-4">
                        <Heart className="text-[#ffcc00]" /> Annual Trip
                    </h2>
                    <p className="text-white/80 leading-relaxed">
                        Each year the group visits Windermere for a research retreat. This serves as a vital time for building 
                        the strong interpersonal bonds that fuel our collaborative scientific efforts.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* MONKEY BUSINESS TABLE */}
      <section className="container mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 serif italic">Monkey Business</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Lab Responsibilities</p>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-white">
            <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-[#660099] font-bold uppercase tracking-widest text-[10px] border-b border-slate-100">
                    <tr>
                        <th className="px-8 py-4">Responsibility</th>
                        <th className="px-8 py-4">Monkey</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-8 py-4 font-bold text-slate-900">Safety Champion</td>
                        <td className="px-8 py-4">Flavio</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-8 py-4 font-bold text-slate-900">IT & Webpage</td>
                        <td className="px-8 py-4">Maria</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-8 py-4 font-bold text-slate-900">NMR</td>
                        <td className="px-8 py-4">Emily, Patrycja, Alex</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>

      {/* OLD TRAFFORD */}
      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <h2 className="text-4xl font-bold text-slate-900 serif italic flex items-center gap-4">
                    <Ticket className="text-red-600" /> Old Trafford
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 text-sm">
                    <p>
                        The Leigh Group have the use of a pair of Season Tickets for Manchester United. Seats are in the <span className="text-slate-900 font-bold">Sir Alex Ferguson Stand</span>.
                    </p>
                    <div className="pt-6 flex gap-4">
                        <a href="#" className="flex items-center gap-2 text-[#660099] font-bold text-[10px] uppercase tracking-widest hover:text-[#ffcc00] transition-colors">
                            <MapPin size={14}/> Directions
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                    <img src="https://www.catenane.net/images/general/OldTraffordView.png" alt="Stadium View" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default GroupMattersView;