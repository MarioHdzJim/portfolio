import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const items = t('projects.items', { returnObjects: true });
  const projectsData = Array.isArray(items) ? items : [
    {
      title: "Salud Manager",
      desc: "Gestión médica integral con React y Spring Boot.",
      tech: ["React", "Spring Boot", "Docker"],
      category: "Web"
    },
    {
      title: "Checador Facial AI",
      desc: "Plataforma de RH usando MediaPipe y AWS Lambda.",
      tech: ["Python", "AWS", "AI"],
      category: "Sistemas"
    },
    {
      title: "Sistema de Facturación C.A.M.",
      desc: "Sistemas asincrónicos en Java con persistencia offline.",
      tech: ["Java", "SQL", "Desktop"],
      category: "Escritorio"
    }
  ];

  const categoriesObj = t('projects.categories', { returnObjects: true });
  const categories = typeof categoriesObj === 'object' ? categoriesObj : { all: 'Todos', web: 'Web', systems: 'Sistemas', desktop: 'Escritorio', mobile: 'Mobile' };

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === categories[filter]);

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">{t('projects.title')}</h2>
      
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.keys(categories).map(catKey => {
          const cat = categories[catKey];
          return (
            <button
              key={catKey}
              onClick={() => setFilter(catKey)}
              className={`px-6 py-2 rounded-full transition ${
                filter === catKey ? 'bg-blue-600 text-white' : 'bg-slate-200 hover:bg-slate-300'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid de Proyectos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-slate-600 mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;