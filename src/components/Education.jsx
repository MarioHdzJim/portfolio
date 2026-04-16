import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Award, Globe, MapPin, BadgeCheck, ShieldCheck, Cpu } from 'lucide-react';

const Education = () => {
  const { t } = useTranslation();
  const diplomas = [
    { title: "Ethical Hacking Essentials (EHE)", issuer: "EC-Council", icon: <ShieldCheck size={20} className="text-red-500" /> },
    { title: "Foundations: Data, Data, Everywhere", issuer: "Google", icon: <BadgeCheck size={20} className="text-blue-500" /> },
    { title: "SAP Professional Fundamentals", issuer: "SAP", icon: <BadgeCheck size={20} className="text-blue-500" /> },
    { title: "Enterprise Design Thinking Co-Creator", issuer: "IBM", icon: <BadgeCheck size={20} className="text-blue-500" /> },
    { title: "Programming for Everybody (Python)", issuer: "University of Michigan", icon: <Cpu size={20} className="text-blue-500" /> },
    { title: "Sesenta años de Inteligencia Artificial", issuer: "UNAM", icon: <Cpu size={20} className="text-blue-500" /> },
    { title: "Big Data: Impacto de datos masivos", issuer: "U. Autónoma de Barcelona", icon: <BadgeCheck size={20} className="text-blue-500" /> },
    { title: "White Belt - Lean and Six Sigma", issuer: "Lean & Six Sigma", icon: <Award size={20} className="text-green-500" /> },
    { title: "Riesgos Ergonómicos (NOM 036)", issuer: "Safety Culture", icon: <Award size={20} className="text-green-500" /> },
    { title: "¿Qué hacen los buenos directivos?", issuer: "IESE Business School", icon: <BadgeCheck size={20} className="text-blue-500" /> },
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 border-b-4 border-blue-600 inline-block">
          {t('education.title')}
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Columna 1: Títulos Académicos Principales */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <GraduationCap /> {t('education.degreesHeading')}
            </h3>
            <div className="space-y-4">
              <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold">{t('education.degrees.master.title')}</h4>
                <p className="text-blue-600 text-sm italic">{t('education.degrees.master.issuer')}</p>
                <p className="text-xs text-slate-500 mt-1">{t('education.degrees.master.status')}</p>
              </div>
              <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold">{t('education.degrees.industrial.title')}</h4>
                <p className="text-slate-600 text-sm">{t('education.degrees.industrial.issuer')}</p>
                <p className="text-xs font-mono text-slate-500 mt-1">{t('education.degrees.industrial.license')}</p>
              </div>
              <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold">{t('education.degrees.systems.title')}</h4>
                <p className="text-slate-600 text-sm">{t('education.degrees.systems.issuer')}</p>
                <p className="text-xs font-mono text-slate-500 mt-1">{t('education.degrees.systems.status')}</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-600 text-white rounded-xl shadow-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Globe size={20} /> {t('education.languagesHeading')}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {Object.entries(t('education.languages', { returnObjects: true })).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-3 rounded-lg bg-blue-500/10 p-3">
                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna 2 y 3: Diplomas y Certificaciones (Grid interno) */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Award /> Certificaciones y Diplomas
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {diplomas.map((diploma, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100 hover:shadow-md transition">
                  <div className="mt-1">{diploma.icon}</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-tight">{diploma.title}</h4>
                    <p className="text-xs text-slate-500">{diploma.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;