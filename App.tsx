
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './HomeView';
import ProfLeighView from './ProfLeighView';
import ResearchView from './ResearchView';
import ResearchProjectView from './ResearchProjectView';
import PeopleView from './PeopleView';
import PublicationsView from './PublicationsView';
import VirtualTourView from './VirtualTourView';
import GroupMattersView from './GroupMattersView';
import { NAV_ITEMS } from './constants';
import { Hexagon } from 'lucide-react';

const App: React.FC = () => {
  const getSlugFromHash = (hash: string) => {
    const parts = hash.replace(/^#\//, '').split('/');
    return {
      view: parts[0] || 'home',
      subSlug: parts[1] || null
    };
  };

  const [route, setRoute] = useState(() => getSlugFromHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = getSlugFromHash(window.location.hash);
      setRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    if (!window.location.hash || !window.location.hash.startsWith('#/')) {
      window.location.hash = '#/home';
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderView = () => {
    if (route.view === 'research' && route.subSlug) {
      return <ResearchProjectView slug={route.subSlug} />;
    }

    switch (route.view) {
      case 'prof': return <ProfLeighView />;
      case 'research': return <ResearchView />;
      case 'people': return <PeopleView />;
      case 'publications': return <PublicationsView />;
      case 'vtour': return <VirtualTourView />;
      case 'matters': return <GroupMattersView />;
      case 'home':
      default: return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-500 selection:text-white bg-purple-gradient text-slate-200">
      <Navbar currentSlug={route.view} />

      <main className="flex-grow">
        <section className="pt-28 pb-6 container mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
           <div className="flex gap-6 items-center flex-wrap">
             <a href="https://www.ucl.ac.uk/sustainable/take-action/staff-action/leaf-laboratory-efficiency-assessment-framework" target="_blank" rel="noreferrer">
               <img src="https://www.catenane.net/images/Leaflogo.jpg" alt="LEAF Logo" className="h-16 rounded-lg shadow-lg hover:scale-105 transition-transform" />
             </a>
             <a href="https://www.catenane.net/pages/video_CAMERA_motor.html" target="_blank" rel="noreferrer">
               <img src="https://www.catenane.net/images/CAMERA_banner.jpg" alt="CAMERA Banner" className="h-16 rounded-lg shadow-lg hover:scale-105 transition-transform" />
             </a>
             <div className="h-12 w-px bg-purple-500/20 hidden md:block"></div>
             <a href="http://www.chemistry.manchester.ac.uk/" target="_blank" rel="noreferrer">
               <img src="https://www.catenane.net/images/UoM_logo.png" alt="University of Manchester" className="h-14 brightness-0 invert opacity-80" />
             </a>
           </div>
           <div className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-xl shadow-yellow-400/10">
              Prof. Leigh: Royal Society Research Professor
           </div>
        </section>

        <div key={`${route.view}-${route.subSlug || 'index'}`}>
          {renderView()}
        </div>
      </main>

      <footer className="bg-slate-950 border-t border-purple-500/10 pt-32 pb-16 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#660099] rounded-2xl">
                  <Hexagon className="text-white w-8 h-8" />
                </div>
                <span className="text-white font-bold text-3xl tracking-tight serif italic">Leigh Group</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
                Synthesis of interlocked architectures and molecular-level machines. 
                Pushing the boundaries of molecular topology at the University of Manchester.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-widest text-yellow-400">Navigation</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                {NAV_ITEMS.map(n => {
                   const itemSlug = n.href.replace(/^#\//, '');
                   const isActive = route.view === itemSlug;
                   return (
                    <li key={n.label}>
                      <a href={n.href} className={`hover:text-white transition-colors ${isActive ? 'text-yellow-400 font-bold' : ''}`}>
                        {n.label}
                      </a>
                    </li>
                   )
                })}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-widest text-yellow-400">Location</h4>
              <div className="text-sm text-slate-500 leading-relaxed text-[11px] space-y-2">
                <p>Manchester Institute of Biotechnology</p>
                <p>The University of Manchester</p>
                <p>131 Princess Street</p>
                <p>Manchester, M1 7DN, UK</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-purple-500/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-700 uppercase tracking-[0.4em] font-bold">
            <div>© 2026 Leigh Research Group | University of Manchester</div>
            <div className="flex gap-8 opacity-50">
               <a href="https://www.catenane.net" target="_blank" className="hover:text-slate-200 transition-colors">Original Site</a>
               <a href="#" className="hover:text-slate-200 transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
