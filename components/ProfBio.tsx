
import React from 'react';
import { 
  Award, Mail, Twitter, FileText, MapPin, Play, 
  ExternalLink, GraduationCap, ShieldCheck, Zap, 
  Microscope, Star, BookOpen, Quote, Sparkles
} from 'lucide-react';

const ProfBio: React.FC = () => {
  return (
    <div className="space-y-32">
      {/* 1. CAREER & EDUCATION */}
      <section className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 serif italic">Academic Career</h2>
            <div className="h-1 w-20 bg-[#ffcc00]"></div>
          </div>
          
          <div className="space-y-8 text-slate-600 text-sm leading-relaxed">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 space-y-6 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-[#660099] shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg mb-1">Education</p>
                  <p className="text-slate-500">B.Sc. (1984); Ph. D. (1987) University of Sheffield</p>
                </div>
              </div>

              <div className="space-y-6 border-l-2 border-slate-100 pl-8 ml-6 py-2">
                {[
                  { range: "1987-89", role: "Postdoctoral Research Associate, NRC Canada" },
                  { range: "1989-95", role: "Lecturer in Organic Chemistry, UMIST" },
                  { range: "1996-98", role: "Reader in Organic Chemistry, UMIST" },
                  { range: "1998-2001", role: "Chair of Synthetic Chemistry, Warwick" },
                  { range: "2001-12", role: "Forbes Chair, University of Edinburgh" },
                  { range: "2014-Present", role: "Sir Samuel Hall Chair, Manchester" }
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[35px] top-2 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-[#660099] transition-colors border border-white"></div>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">{item.range}</p>
                    <p className="text-slate-700 group-hover:text-slate-900 transition-colors">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#660099] rounded-[3rem] p-10 overflow-hidden relative group shadow-lg">
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8">Official Files</h3>
            <div className="space-y-3">
              {[
                { label: 'Full CV', url: 'https://www.catenane.net/images/Prof/CV.pdf' },
                { label: 'Narrative Biosketch', url: 'https://www.catenane.net/images/Prof/Sketch.pdf' },
                { label: 'Top-25 Publications', url: 'https://www.catenane.net/images/Prof/Top25Papers.pdf' }
              ].map(doc => (
                <a key={doc.label} href={doc.url} target="_blank" className="flex items-center justify-between p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white hover:border-white transition-all group/item">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/80 group-hover/item:text-[#660099] transition-colors">{doc.label}</span>
                  <FileText size={16} className="text-white/40 group-hover/item:text-[#660099] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[3rem] p-10 space-y-6 shadow-lg">
            <h3 className="text-slate-900 font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-3">
              <MapPin size={14} className="text-[#ffcc00]" /> Correspondence
            </h3>
            <div className="space-y-6 text-[11px] text-slate-500 leading-relaxed uppercase tracking-widest font-bold">
              <div className="space-y-1">
                <p className="text-slate-900">Manchester, UK</p>
                <p>The University of Manchester</p>
                <p>Oxford Road, M13 9PL</p>
              </div>
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <a href="mailto:david.leigh@manchester.ac.uk" className="flex items-center gap-3 text-[#660099] hover:text-[#ffcc00] transition-colors">
                  <Mail size={14}/> Leigh Group Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HONOURS & AWARDS */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold text-slate-900 serif italic">Honours & Awards</h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.4em]">Chronicle of Distinction</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { year: "2026", title: "ACS Ronald Breslow Award" },
            { year: "2024", title: "GDCh August Wilhelm von Hofmann Medal" },
            { year: "2024", title: "Stoddart Prize" },
            { year: "2023", title: "RSC Horizon Prize" },
            { year: "2021", title: "Royal Medal, RSE" },
            { year: "2009", title: "Fellow of the Royal Society" }
          ].map((award, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-3xl group hover:border-[#ffcc00] transition-all shadow-sm">
              <span className="text-[#660099] text-[10px] font-black uppercase tracking-widest block mb-2">{award.year}</span>
              <p className="text-slate-700 text-sm font-medium leading-relaxed group-hover:text-slate-900 transition-colors">{award.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MEMBERSHIPS */}
      <section className="bg-white border border-slate-200 rounded-[4rem] p-12 md:p-16 grid lg:grid-cols-2 gap-16 shadow-xl">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 serif italic">Memberships</h2>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Professional Affiliations</p>
          </div>
          
          <ul className="space-y-4 list-none p-0 text-slate-600 text-sm">
            <li className="flex gap-4 group/li">
              <ShieldCheck size={18} className="text-[#ffcc00] shrink-0 mt-1" />
              <span>Fellow of the Royal Society (FRS)</span>
            </li>
            <li className="flex gap-4 group/li">
              <ShieldCheck size={18} className="text-[#ffcc00] shrink-0 mt-1" />
              <span>Fellow of the Royal Society of Chemistry (FRSC)</span>
            </li>
            <li className="flex gap-4 group/li">
              <ShieldCheck size={18} className="text-[#ffcc00] shrink-0 mt-1" />
              <span className="italic">Manchester Circle of Magicians</span>
            </li>
          </ul>
        </div>

        <div className="flex gap-6 flex-wrap items-center justify-center lg:justify-start">
          <img src="https://www.catenane.net/images/general/HCR_Badge.jpg" alt="Highly Cited" className="h-16 grayscale hover:grayscale-0 transition-all" />
          <img src="https://www.catenane.net/images/general/guinness_record_holder.png" alt="Guinness Record" className="h-16 bg-slate-50 p-2 rounded-lg" />
          <img src="https://www.catenane.net/images/general/igkt_icon.gif" alt="IGKT" className="h-16 opacity-60" />
        </div>
      </section>
    </div>
  );
};

export default ProfBio;