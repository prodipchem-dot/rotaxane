
import React from 'react';
import { Award, BookOpen, Mail, Twitter, FileText, Globe, MapPin, Play, Star, ExternalLink } from 'lucide-react';

const ProfBio: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* HEADER SECTION */}
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-white serif italic">Academic Career & Honours</h2>
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em]">Professor David A Leigh FRS FRSE FRSC MAE</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 text-slate-300 text-sm leading-relaxed">
            <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                    <Star className="text-purple-400" size={14}/> Appointments
                </h4>
                <p className="border-l-2 border-purple-500/30 pl-6 space-y-2">
                    <span className="block italic text-slate-400">2014-</span> Sir Samuel Hall Chair, Manchester<br/>
                    <span className="block italic text-slate-400">2016-26</span> Royal Society Research Professor<br/>
                    <span className="block italic text-slate-400">2018-</span> Distinguished Professor, ECNU Shanghai<br/>
                    <span className="block italic text-slate-400">2001-12</span> Forbes Chair, Edinburgh<br/>
                    <span className="block italic text-slate-400">1998-01</span> Chair of Synthetic Chemistry, Warwick
                </p>
            </div>
            <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                    <Award className="text-yellow-400" size={14}/> Education
                </h4>
                <p className="border-l-2 border-yellow-500/30 pl-6">
                    B.Sc. (1984); Ph. D. (1987) University of Sheffield<br/>
                    1987-89 Postdoc, NRC Canada
                </p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <Award className="text-yellow-400" size={16} /> Major Recognitions & Awards
            </h4>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-[13px] text-slate-400">
                <ul className="space-y-3">
                    <li><span className="text-white">2026</span> ACS Ronald Breslow Award</li>
                    <li><span className="text-white">2024</span> August Wilhelm von Hofmann Medal</li>
                    <li><span className="text-white">2024</span> Stoddart Prize</li>
                    <li><span className="text-white">2023</span> RSC Horizon Prize</li>
                    <li><span className="text-white">2021</span> Royal Medal, RSE</li>
                    <li><span className="text-white">2019</span> ISNSCE Nanoscience Prize</li>
                    <li><span className="text-white">2017</span> RSC Perkin Prize for Organic Chemistry</li>
                    <li><span className="text-white">2013</span> Royal Society Bakerian Medal</li>
                    <li><span className="text-white">2009</span> Fellow of the Royal Society (London)</li>
                </ul>
                <ul className="space-y-3">
                    <li><span className="text-white">2008</span> ERC Advanced Grant (Inaugural)</li>
                    <li><span className="text-white">2007</span> Feynman Prize for Nanotechnology</li>
                    <li><span className="text-white">2007</span> Descartes Prize for Research</li>
                    <li><span className="text-white">2007</span> Chancellor's Award for Research</li>
                    <li><span className="text-white">2005</span> Elected Fellow, Royal Society of Edinburgh</li>
                    <li><span className="text-white">2004</span> RSC Interdisciplinary Award</li>
                    <li><span className="text-white">2003</span> RSC Award for Supramolecular Chemistry</li>
                </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-900/50 border border-purple-500/20 rounded-3xl p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest">Digital Resources</h3>
              <div className="h-0.5 w-12 bg-yellow-400"></div>
            </div>
            
            <div className="space-y-4">
              <a href="https://www.catenane.net/images/Prof/CV.pdf" target="_blank" className="flex items-center justify-between p-4 bg-slate-950 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all group">
                <span className="text-sm font-medium text-slate-300">Download CV</span>
                <FileText size={18} className="text-purple-400 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://scholar.google.co.uk/citations?user=jLubszkAAAAJ" target="_blank" className="flex items-center justify-between p-4 bg-slate-950 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all group">
                <span className="text-sm font-medium text-slate-300">Google Scholar</span>
                <Globe size={18} className="text-purple-400 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com/profdaveleigh" target="_blank" className="flex items-center justify-between p-4 bg-slate-950 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all group">
                <span className="text-sm font-medium text-slate-300">@ProfDaveLeigh</span>
                <Twitter size={18} className="text-purple-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="p-8 border border-white/5 rounded-3xl space-y-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <MapPin size={14} className="text-yellow-400" /> Office Locations
            </h3>
            <div className="text-[12px] text-slate-400 leading-relaxed">
              <p className="text-white font-bold">Manchester, UK</p>
              MIB, 131 Princess Street, M1 7DN
            </div>
            <div className="text-[12px] text-slate-400 leading-relaxed">
              <p className="text-white font-bold">Shanghai, China</p>
              East China Normal University, 200062
            </div>
          </div>
        </div>
      </div>

      {/* LECTURES SECTION */}
      <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white serif italic">Prize & Named Lectures</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-[12px] text-slate-400">
              <div className="space-y-2">
                  <p><span className="text-white font-bold">2025</span> Stoddart Memorial Lecture, Kyoto</p>
                  <p><span className="text-white font-bold">2025</span> Organic Syntheses Lecture, Toronto</p>
                  <p><span className="text-white font-bold">2024</span> Donald J. Cram Lecture, UCLA</p>
                  <p><span className="text-white font-bold">2023</span> Newlands Lecture, Imperial College</p>
                  <p><span className="text-white font-bold">2022</span> Joshua Jortner Lectures, Tel Aviv</p>
              </div>
              <div className="space-y-2">
                  <p><span className="text-white font-bold">2019</span> Pollak Lectures, Technion Israel</p>
                  <p><span className="text-white font-bold">2019</span> Lu Jiaxi Lectureship, Xiamen</p>
                  <p><span className="text-white font-bold">2018</span> Xingda Lecture, Peking University</p>
                  <p><span className="text-white font-bold">2017</span> Dalton Lecture, RSC NW Section</p>
                  <p><span className="text-white font-bold">2016</span> Sir Robert Robinson Lectures, Oxford</p>
              </div>
              <div className="space-y-2">
                  <p><span className="text-white font-bold">2013</span> Bakerian Lecture, Royal Society</p>
                  <p><span className="text-white font-bold">2012</span> Sir Robert Robinson Lecture, Liverpool</p>
                  <p><span className="text-white font-bold">2010</span> Francqui Chair Lectures, Louvain</p>
                  <p><span className="text-white font-bold">2009</span> E Gordon Young Memorial, McGill</p>
                  <p><span className="text-white font-bold">2008</span> Daniell Lecture, KCL</p>
              </div>
          </div>
      </div>

      {/* INTERVIEWS & MAGIC SECTION */}
      <div className="pt-12 border-t border-white/5">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-bold text-white serif italic mb-2">Molecular Magic & Profiles</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Public Engagement & Profiles</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6 group">
            <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/5 relative">
              <iframe 
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all"
                src="https://www.youtube.com/embed/ymC5KkVy8zc" 
                title="Nanobots & Creativity"
                frameBorder="0" allowFullScreen
              ></iframe>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Nanobots & Creativity</h4>
              <p className="text-slate-500 text-xs italic">A Capella Science Profile, 2018</p>
            </div>
          </div>

          <div className="space-y-6 group">
            <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/5 relative">
              <iframe 
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all"
                src="https://www.youtube.com/embed/jI_0bIRxhN4" 
                title="Angewandte Lecture Abstract"
                frameBorder="0" allowFullScreen
              ></iframe>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Lecture Video Abstract</h4>
              <p className="text-slate-500 text-xs italic">Angewandte FestSymposium 2017</p>
            </div>
          </div>

          <div className="space-y-6 group">
            <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/5 relative flex items-center justify-center p-8 bg-gradient-to-br from-purple-900/20 to-slate-900">
                <a href="https://www.chemistryworld.com/opinion/in-situ-with-david-leigh/3007438.article" target="_blank" className="flex flex-col items-center gap-4">
                  <Play className="text-yellow-400 animate-pulse" size={32} />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Chemistry World Interview</span>
                </a>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">‘In Situ’ with David Leigh</h4>
              <p className="text-slate-500 text-xs italic">Chem World Profile, 2017</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfBio;
