
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
            <h2 className="text-4xl md:text-5xl font-bold text-white serif italic">Academic Career</h2>
            <div className="h-1 w-20 bg-yellow-400"></div>
          </div>
          
          <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
            <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8 md:p-10 space-y-6 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-900/20 flex items-center justify-center text-purple-400 shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">Education</p>
                  <p className="text-slate-400">B.Sc. (1984); Ph. D. (1987) University of Sheffield</p>
                </div>
              </div>

              <div className="space-y-6 border-l-2 border-purple-500/20 pl-8 ml-6 py-2">
                {[
                  { range: "1987-89", role: "Postdoctoral Research Associate, National Research Council of Canada (Ottawa)" },
                  { range: "1989-95", role: "Lecturer in Organic Chemistry, UMIST" },
                  { range: "1996-98", role: "Reader in Organic Chemistry, UMIST" },
                  { range: "1998-2001", role: "Chair of Synthetic Chemistry, University of Warwick" },
                  { range: "1998-2003", role: "EPSRC Advanced Research Fellow" },
                  { range: "2001-12", role: "Forbes Chair of Organic Chemistry, University of Edinburgh" },
                  { range: "2012-13", role: "Professor of Organic Chemistry, University of Manchester" },
                  { range: "2014-Present", role: "Sir Samuel Hall Chair of Chemistry, University of Manchester" }
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[35px] top-2 w-3 h-3 rounded-full bg-purple-500/30 group-hover:bg-purple-500 transition-colors border border-slate-900"></div>
                    <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">{item.range}</p>
                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR: DOCUMENTS & CONTACT */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-900 border border-purple-500/10 rounded-[3rem] p-10 overflow-hidden relative group">
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8">Official Files</h3>
            <div className="space-y-3">
              {[
                { label: 'Full CV', url: 'https://www.catenane.net/images/Prof/CV.pdf' },
                { label: 'Narrative Biosketch', url: 'https://www.catenane.net/images/Prof/Sketch.pdf' },
                { label: 'Research Statement', url: 'https://www.catenane.net/images/Prof/ResStatement.pdf' },
                { label: 'Top-25 Publications', url: 'https://www.catenane.net/images/Prof/Top25Papers.pdf' },
                { label: 'Full List of Publications', url: 'https://www.catenane.net/images/Prof/Publications.pdf' }
              ].map(doc => (
                <a key={doc.label} href={doc.url} target="_blank" className="flex items-center justify-between p-4 bg-slate-950 rounded-2xl border border-white/5 hover:border-yellow-400/30 hover:bg-slate-900 transition-all group/item">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover/item:text-white transition-colors">{doc.label}</span>
                  <FileText size={16} className="text-purple-500 group-hover/item:text-yellow-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-950/50 border border-white/5 rounded-[3rem] p-10 space-y-6 shadow-xl">
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-3">
              <MapPin size={14} className="text-yellow-400" /> Correspondence
            </h3>
            <div className="space-y-6 text-[11px] text-slate-400 leading-relaxed uppercase tracking-widest font-bold">
              <div className="space-y-1">
                <p className="text-white">Manchester, UK</p>
                <p>The University of Manchester</p>
                <p>Oxford Road, M13 9PL</p>
              </div>
              <div className="space-y-1">
                <p className="text-white">Shanghai, China</p>
                <p>East China Normal University</p>
                <p>200062, SHANGHAI</p>
              </div>
              <div className="pt-4 border-t border-white/5 space-y-3">
                <a href="mailto:david.leigh@manchester.ac.uk" className="flex items-center gap-3 text-yellow-400 hover:text-white transition-colors">
                  <Mail size={14}/> david.leigh@manchester.ac.uk
                </a>
                <a href="https://twitter.com/profdaveleigh" target="_blank" className="flex items-center gap-3 text-yellow-400 hover:text-white transition-colors">
                  <Twitter size={14}/> @ProfDaveLeigh
                </a>
                <div className="flex flex-wrap gap-4 pt-2 opacity-60">
                  <a href="http://orcid.org/0000-0002-1202-4507" target="_blank" className="hover:text-white underline decoration-purple-500/50">ORCID</a>
                  <a href="http://www.researcherid.com/rid/K-5965-2015" target="_blank" className="hover:text-white underline decoration-purple-500/50">ResearcherID</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HONOURS & AWARDS - EXHAUSTIVE LIST */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold text-white serif italic">Honours & Awards</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em]">Chronicle of Distinction</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 h-[600px] overflow-y-auto pr-6 scrollbar-hide group/awards hover:scrollbar-default">
          {[
            { year: "2026", title: "ACS Ronald Breslow Award for Achievement in Biomimetic Chemistry" },
            { year: "2024", title: "GDCh August Wilhelm von Hofmann Medal" },
            { year: "2024", title: "Stoddart Prize" },
            { year: "2024", title: "Fellow of the American Academy of Arts and Sciences (International Honorary Member)" },
            { year: "2023", title: "RSC Horizon Prize: Perkin Prize in Physical Organic Chemistry" },
            { year: "2021", title: "Royal Medal, Royal Society of Edinburgh" },
            { year: "2020", title: "Top Influential Chemists 2010-2020 (Academic Influence)" },
            { year: "2019", title: "Honorary Membership, Israel Chemical Society" },
            { year: "2019", title: "ISNSCE Nanoscience Prize" },
            { year: "2018", title: "Web of Science Highly-Cited Researcher" },
            { year: "2018", title: "ERC Advanced Grant (MolMacIP)" },
            { year: "2017", title: "RSC Perkin Prize for Organic Chemistry" },
            { year: "2016-26", title: "Royal Society Research Professor" },
            { year: "2015", title: "Elected to the Academia Europaea" },
            { year: "2014", title: "RSC Pedler Award" },
            { year: "2013", title: "Royal Society Bakerian Medal" },
            { year: "2013", title: "ERC Advanced Grant (Molfactory)" },
            { year: "2010", title: "RSC Tilden Prize" },
            { year: "2009", title: "Fellow of the Royal Society (London)" },
            { year: "2009", title: "RSC Merck Award" },
            { year: "2008", title: "ERC Advanced Grant (WALKINGMOLS)" },
            { year: "2007", title: "Descartes Prize for Research" },
            { year: "2007", title: "Feynman Prize for Nanotechnology" },
            { year: "2007", title: "Chancellor's Award for Research" },
            { year: "2007", title: "International Izatt-Christensen Award" },
            { year: "2007", title: "RSC-RSEQ Prize for Chemistry" },
            { year: "2005", title: "Fellow of the Royal Society of Edinburgh" },
            { year: "2005", title: "RSC Award for Nanotechnology" },
            { year: "2005", title: "Institute of Chemistry of Ireland Award" },
            { year: "2005", title: "Swiss Chemical Society Troisième Conferencier" },
            { year: "2005", title: "Royal Society-Wolfson Research Merit Award" },
            { year: "2004", title: "RSC Interdisciplinary Award" },
            { year: "2003", title: "RSC Award for Supramolecular Chemistry" }
          ].map((award, i) => (
            <div key={i} className="bg-slate-900/20 border-l border-white/5 p-4 rounded-r-2xl group/award hover:bg-slate-900/40 transition-all flex items-start gap-4">
              <span className="text-yellow-400 text-[10px] font-black uppercase tracking-widest bg-slate-950 px-3 py-1 rounded-lg shrink-0 border border-white/5">{award.year}</span>
              <p className="text-slate-300 text-[13px] font-medium leading-relaxed group-hover/award:text-white transition-colors">{award.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LECTURES - EXHAUSTIVE LIST */}
      <section className="space-y-16">
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white serif italic">Prize & Named Lectures</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em]">Invited Scientific Contributions</p>
          </div>
          <div className="hidden md:block">
             <Zap className="text-purple-500/50" size={64} />
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-6 text-[11px] text-slate-400 h-[600px] overflow-y-auto pr-6 scrollbar-hide hover:scrollbar-default">
          {[
            { year: "2025", title: "Organic Syntheses Lecture, University of Toronto" },
            { year: "2025", title: "Stoddart Memorial Lecture, ISMSC Kyoto" },
            { year: "2025", title: "'After-Hour Conversation' Lecture Series, Shanghai Jiao Tong" },
            { year: "2024", title: "Donald J. Cram Lecture, UCLA" },
            { year: "2024", title: "Bristol Myers Squibb Lecture, Scripps Research" },
            { year: "2024", title: "Klemm Lecture, University of Oregon" },
            { year: "2023", title: "Newlands Lecture, Imperial College London" },
            { year: "2023", title: "Werdelmann Lecture, Duisburg-Essen" },
            { year: "2022", title: "Lansdowne Lecturer, Victoria" },
            { year: "2022", title: "Joshua Jortner Distinguished Lectures, Tel Aviv" },
            { year: "2021", title: "Stranks Memorial Lecture, RACI Chem. Ed. Group" },
            { year: "2020", title: "Timothy J. O’Leary Distinguished Scientist Lectures, Gonzaga" },
            { year: "2019", title: "Wenkui Forum Lecture, Lanzhou University" },
            { year: "2019", title: "Zhou Huijiu Forum Lecture, Xi’an Jiaotong" },
            { year: "2019", title: "Qujiang Forum Lecture, Shangxi Normal University" },
            { year: "2019", title: "Zhongjian Yang Lecture, Xi'an Northwest" },
            { year: "2019", title: "Lu Jiaxi Lectureship, Xiamen University" },
            { year: "2019", title: "SUSTech Science Lecture, Shenzhen" },
            { year: "2019", title: "World Distinguished Scholar Forum, Sun Yat-sen Uni" },
            { year: "2019", title: "Pollak Lectures, Technion University" },
            { year: "2019", title: "Daedalus Lecture, University of Newcastle" },
            { year: "2018", title: "Peiyang Lecture, Tianjin University" },
            { year: "2018", title: "Xingda Lecture, Peking University" },
            { year: "2018", title: "Molecular Science Forum Lecture, CAS Beijing" },
            { year: "2018", title: "Xuetang Lecture, Tsinghua University" },
            { year: "2017", title: "Dalton Lecture, RSC NW Section" },
            { year: "2017", title: "Tarrant Distinguished Professorship, Florida" },
            { year: "2016", title: "Haworth Lecture, Birmingham" },
            { year: "2016", title: "Sir Robert Robinson Lectures, Oxford" },
            { year: "2016", title: "Hugh and Ethel Kelly Lecture, Virginia Tech" },
            { year: "2016", title: "Anslyn-Iverson-Sessler Lecture, UT Austin" },
            { year: "2016", title: "Dean’s Podium Lecture, Ben Gurion University" },
            { year: "2015", title: "Dewar Lecture, QMUL" },
            { year: "2014", title: "TGH Jones Memorial Lecture, Queensland" },
            { year: "2014", title: "Institute of Creativity Distinguished Visitor, Hong Kong" },
            { year: "2014", title: "Sir Gareth Roberts Memorial Lecture, Durham" },
            { year: "2013", title: "Bakerian Lecture, Royal Society" },
            { year: "2013", title: "Robert W. Taft Memorial Lecture, UC-Irvine" },
            { year: "2012", title: "Sir Robert Robinson Distinguished Lectureship, Liverpool" },
            { year: "2012", title: "H. Dudley Wright Colloquia, Geneva" },
            { year: "2012", title: "Inaugural EPS Christmas Lecture, Heriot-Watt" },
            { year: "2011", title: "Alex Hopkins Lecture, Cambridge" },
            { year: "2010", title: "Francqui Chair Lectures, Louvain" },
            { year: "2009", title: "E Gordon Young Memorial Lectureship, McGill" },
            { year: "2008", title: "Daniell Lecture, KCL" },
            { year: "2008", title: "Musher Lecture, Jerusalem" }
          ].map((lecture, i) => (
            <div key={i} className="break-inside-avoid pb-4 border-b border-white/5 group/lecture hover:border-yellow-400/20 transition-all">
              <span className="text-purple-400 font-black mr-2 uppercase tracking-tighter">{lecture.year}</span>
              <span className="group-hover/lecture:text-slate-200 transition-colors">{lecture.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MEMBERSHIPS & ADVISORY ROLES */}
      <section className="bg-slate-900/50 border border-white/5 rounded-[4rem] p-12 md:p-16 grid lg:grid-cols-2 gap-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full"></div>
        
        <div className="space-y-10 relative z-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white serif italic">Scientific Societies</h2>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Professional Affiliations</p>
          </div>
          
          <div className="prose prose-invert prose-purple text-sm text-slate-400 leading-relaxed">
            <ul className="space-y-4 list-none p-0">
              {[
                "Fellow of the Royal Society (FRS)",
                "Fellow of the Royal Society of Edinburgh (FRSE)",
                "Fellow of the Royal Society of Chemistry (FRSC)",
                "Member of the American Chemical Society & AAAS",
                "Honorary Member of the Israel Chemical Society",
                "Member of the Academia Europaea (MAE)",
                "Member of the International Guild of Knot Tyers",
                "Member of the Manchester Circle of Magicians"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 group/li">
                  <ShieldCheck size={18} className="text-yellow-400 shrink-0 mt-1 group-hover/li:scale-110 transition-transform" />
                  <span className="group-hover/li:text-slate-200 transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-10 relative z-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white serif italic">Advisory & Editorial</h2>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Global Stewardship</p>
          </div>
          
          <div className="prose prose-invert prose-purple text-sm text-slate-400 leading-relaxed">
            <ul className="space-y-4 list-none p-0">
              {[
                "Associate Editor, Chemical Science (2010-2018)",
                "Advisory Board, Angewandte Chemie (2014-2021)",
                "Editorial Advisory Board, ACS Central Science",
                "Governor, Withington Girls’ School"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 group/li">
                  <BookOpen size={18} className="text-purple-400 shrink-0 mt-1" />
                  <span className="group-hover/li:text-slate-200 transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-6 pt-6 flex-wrap justify-center lg:justify-start">
            <img src="https://www.catenane.net/images/general/HCR_Badge.jpg" alt="Highly Cited" className="h-16 rounded-xl hover:scale-105 transition-transform" />
            <img src="https://www.catenane.net/images/general/guinness_record_holder.png" alt="Guinness Record" className="h-16 rounded-xl bg-white p-2 hover:scale-105 transition-transform" />
            <img src="https://www.catenane.net/images/general/igkt_icon.gif" alt="IGKT" className="h-16 rounded-xl hover:scale-105 transition-transform" />
          </div>
        </div>
      </section>

      {/* 5. MEDIA & INTERVIEWS */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white serif italic">Interviews & Profiles</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em]">In the Public Eye</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { year: "2018", title: "Nanobots & Creativity", source: "A Capella Science", url: "https://youtu.be/ymC5KkVy8zc", type: "Video" },
            { year: "2017", title: "In Situ with David Leigh", source: "Chemistry World", url: "https://www.chemistryworld.com/opinion/in-situ-with-david-leigh/3007438.article", type: "Article" },
            { year: "2017", title: "Rotaxanes Podcast", source: "Chemistry World", url: "https://www.chemistryworld.com/podcasts/rotaxanes/3007468.article", type: "Audio" },
            { year: "2017", title: "It Looks Like Magic", source: "The Spinoff NZ", url: "http://thespinoff.co.nz/science/amn8-2017-science/24-01-2017/it-looks-like-magic-david-leigh-on-the-gobsmacking-potential-of-molecular-motors/", type: "Article" },
            { year: "2017", title: "Molecular Machines' Promise", source: "RNZ Interview", url: "http://www.radionz.co.nz/national/programmes/saturday/audio/201832839/professor-david-leigh-molecular-machines'-promise-for-humanity", type: "Audio" },
            { year: "2012", title: "Angewandte Chemie Profile", source: "Angew. Chem.", url: "https://www.catenane.net/pdfs/DAL/DAL%20profile%20Angew%20Chem%202012.pdf", type: "PDF" }
          ].map((media, i) => (
            <a key={i} href={media.url} target="_blank" className="group bg-slate-900 border border-white/5 p-8 rounded-[2.5rem] hover:border-purple-500/40 transition-all flex flex-col justify-between shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  {media.type === "Video" ? <Play size={40} /> : <Quote size={40} />}
               </div>
               <div className="space-y-4 relative z-10">
                  <span className="text-yellow-400 text-[9px] font-black uppercase tracking-widest">{media.year} | {media.type}</span>
                  <h4 className="text-white font-bold text-lg serif italic leading-tight group-hover:text-yellow-400 transition-colors">{media.title}</h4>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{media.source}</p>
               </div>
               <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-purple-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Access Content</span>
                  <ExternalLink size={14} className="text-slate-700 group-hover:text-purple-400 transition-colors" />
               </div>
            </a>
          ))}
        </div>
      </section>

      {/* 6. MOLECULAR MAGIC - VIDEOS */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white serif italic">Molecular Magic</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em]">Visual Storytelling & Lectures</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            { title: "Angewandte FestSymposium Abstract", year: "2017", ytId: "jI_0bIRxhN4", caption: "Visual Abstract for Prof Leigh’s Lecture" },
            { title: "GDCh von Hofmann Medal Interview", year: "2024", ytId: "6i9e8R_oEEQ", caption: "Creating Chemistry with a Touch of Magic" }
          ].map((vid, i) => (
            <div key={i} className="space-y-6">
              <div className="aspect-video rounded-[3rem] overflow-hidden border border-purple-500/30 shadow-2xl relative group bg-slate-900">
                <iframe 
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                  src={`https://www.youtube.com/embed/${vid.ytId}?rel=0`} 
                  title={vid.title}
                  frameBorder="0" 
                  allow="autoplay; encrypted-media" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="px-8 space-y-2">
                <h4 className="text-white font-bold serif italic text-xl">{vid.title}</h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{vid.year} | {vid.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-950/80 border border-white/5 rounded-[4rem] p-12 text-center space-y-10 relative group">
          <Sparkles className="text-yellow-400 mx-auto animate-pulse" size={32} />
          <h3 className="text-2xl text-white serif italic">"Chemistry is like Magic, just with real results."</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.youtube.com/watch?v=qacYZ7t4uIE" target="_blank" className="bg-slate-900 text-slate-400 px-8 py-3 rounded-2xl border border-white/5 hover:text-white hover:border-purple-500 transition-all font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
              Angewandte Closing Lecture <ExternalLink size={12} />
            </a>
            <a href="#/vtour" className="bg-[#660099] text-white px-8 py-3 rounded-2xl hover:bg-purple-500 transition-all font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
              Virtual Lab Tour <Zap size={12} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfBio;
