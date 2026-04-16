import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      {/* Sección Hero - Presentación principal */}
      <section id="home" className="pt-32 pb-20 px-6 text-center lg:text-left max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            {t('hero.name')}
          </h1>
          <h2 className="text-2xl text-blue-600 font-semibold mb-6">
            {t('hero.role')}
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl text-justify">
            {t('hero.description')}
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">{t('hero.ctaProjects')}</a>
            <a href="#contact" className="border border-slate-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-100 transition">{t('hero.ctaContact')}</a>
          </div>
        </div>
        
        {/* Espacio para tu foto */}
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img src="/pp.jpg" alt="Mario Hernández" className="w-full h-full object-cover" />
        </div>
      </section>

      <Contact />

      <About />

      <Education />

      <Experience />

      <Projects />

      {/* Aquí irán las demás secciones que crearemos */}
    </div>
  );
}

export default App;