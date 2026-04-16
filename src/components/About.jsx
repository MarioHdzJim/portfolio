import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 border-b-4 border-blue-600 inline-block">
          {t('about.title')}
        </h2>
        
        <div className="space-y-12 text-lg text-slate-700 leading-relaxed text-justify">
          {/* Bloque 1: Inicios */}
          <div className="relative pl-8 border-l-2 border-blue-100">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-2"></div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('about.blocks.start.title')}</h3>
            <p>
              {t('about.blocks.start.text')}
            </p>
          </div>

          {/* Bloque 2: Swift y OOP */}
          <div className="relative pl-8 border-l-2 border-blue-100">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-2"></div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('about.blocks.evolution.title')}</h3>
            <p>
              {t('about.blocks.evolution.text')}
            </p>
          </div>

          {/* Bloque 3: Pensamiento Industrial */}
          <div className="relative pl-8 border-l-2 border-blue-100">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-2"></div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('about.blocks.industrial.title')}</h3>
            <p>
              {t('about.blocks.industrial.text')}
            </p>
          </div>

          {/* Bloque 4: Consolidación y Ciberseguridad */}
          <div className="relative pl-8 border-l-2 border-blue-100">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-2"></div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('about.blocks.consolidation.title')}</h3>
            <p>
              {t('about.blocks.consolidation.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;