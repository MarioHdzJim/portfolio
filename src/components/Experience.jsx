import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar, CheckCircle2, Bot, Lock, GraduationCap } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();
  
  // Obtenemos los trabajos directamente del JSON
  const jobsKeys = ['cam', 'exertus', 'caritas'];
  
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 border-b-4 border-blue-600 inline-block">
          {t('experience.title')}
        </h2>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0">
          {jobsKeys.map((key) => {
            const job = t(`experience.jobs.${key}`, { returnObjects: true });
            return (
              <div key={key} className="mb-20 ml-8 relative">
                <div className="absolute w-10 h-10 bg-blue-600 rounded-full -left-[52px] top-0 flex items-center justify-center text-white shadow-lg">
                  <Briefcase size={20} />
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">{job.company}</h3>
                  <span className="flex items-center gap-2 text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full text-sm">
                    <Calendar size={16} /> {job.period}
                  </span>
                </div>
                <h4 className="text-xl text-slate-700 font-medium mb-4">{job.role}</h4>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{job.description}</p>

                <ul className="space-y-2 mb-6">
                  {job.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={14} />
                      {ach}
                    </li>
                  ))}
                </ul>

                {job.projects && job.projects.length > 0 && (
                  <div className="mt-6 space-y-4">
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                      {t('experience.projectHeading')}
                    </h5>
                    <div className="grid gap-4">
                      {job.projects.map((proj, i) => (
                        <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 border-l-4 border-l-blue-500">
                          <span className="font-bold text-slate-800 block mb-1">{proj.title}</span>
                          <p className="text-sm text-slate-600 leading-relaxed">{proj.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;