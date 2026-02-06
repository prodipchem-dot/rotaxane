
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
        {/* PARTNER LOGOS SECTION */}
        <section className="pt-24 md:pt-28 pb-4 container mx-auto px-4 md:px-6">
           <div className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8">
             <div className="flex gap-4 md:gap-6 items-center flex-wrap justify-center lg:justify-start">
               <a href="https://www.ucl.ac.uk/sustainable/take-action/staff-action/leaf-laboratory-efficiency-assessment-framework" target="_blank" rel="noreferrer">
                 <img src="https://www.catenane.net/images/Leaflogo.jpg" alt="LEAF Logo" className="h-12 md:h-16 rounded-lg shadow-lg hover:scale-105 transition-transform" />
               </a>
               <a href="https://www.catenane.net/pages/video_CAMERA_motor.html" target="_blank" rel="noreferrer">
                 <img src="https://www.catenane.net/images/CAMERA_banner.jpg" alt="CAMERA Banner" className="h-12 md:h-16 rounded-lg shadow-lg hover:scale-105 transition-transform" />
               </a>
               <div className="h-10 w-px bg-purple-500/20 hidden sm:block"></div>
               <a href="http://www.chemistry.manchester.ac.uk/" target="_blank" rel="noreferrer">
                 <img src="https://www.catenane.net/images/UoM_logo.png" alt="University of Manchester" className="h-10 md:h-14 brightness-0 invert opacity-80" />
               </a>
             </div>
           </div>
        </section>

        <div key={`${route.view}-${route.subSlug || 'index'}`} className="animate-in fade-in duration-700">
          {renderView()}
        </div>
      </main>

      <footer className="bg-slate-950 border-t border-purple-500/10 pt-20 md:pt-32 pb-16 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <img 
                  src="https://www.catenane.net/images/UoM_logo.png" 
                  alt="Manchester Brand" 
                  className="h-10 w-auto brightness-0 invert opacity-100" 
                />
                <div className="h-8 w-px bg-white/10 mx-2"></div>
                <span className="text-white font-bold text-3xl tracking-tighter font-century uppercase italic">Leigh Group</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
                Synthesis of interlocked architectures and molecular-level machines. 
                Pushing the boundaries of molecular topology at the University of Manchester.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest text-yellow-400">Navigation</h4>
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
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest text-yellow-400">Location</h4>
              <div className="text-sm text-slate-500 leading-relaxed text-[11px] space-y-2">
                <p className="font-bold text-slate-300">Manchester Institute of Biotechnology</p>
                <p>The University of Manchester</p>
                <p>131 Princess Street</p>
                <p>Manchester, M1 7DN, UK</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-purple-500/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-700 uppercase tracking-[0.4em] font-bold">
            <div className="text-center md:text-left">© 2026 Leigh Research Group | University of Manchester</div>
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
