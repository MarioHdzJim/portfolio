import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); // 't' para traducir el menú, 'i18n' para cambiar el idioma

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t('navbar.links.home'), href: '#home' },
    { name: t('navbar.links.contact'), href: '#contact' },
    { name: t('navbar.links.about'), href: '#about' },
    { name: t('navbar.links.education'), href: '#education' },
    { name: t('navbar.links.experience'), href: '#experience' },
    { name: t('navbar.links.projects'), href: '#projects' },
  ];

  return (
    <nav className="fixed w-full bg-slate-900/95 text-white z-50 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-wider">
            {t('navbar.brand')}<span className="text-blue-500">{t('navbar.brandAccent')}</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              <Globe size={18} className="text-blue-400" />
              <select 
                value={i18n.language || 'es'}
                className="bg-slate-800 text-white outline-none text-sm cursor-pointer appearance-none pr-4"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
                <option value="de">DE</option>
                <option value="ja">JA</option>
              </select>
            </div>
          </div>

          {/* Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-3 pt-3 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-700">
                {link.name}
              </a>
            ))}
            <div className="px-3 py-3 bg-slate-800 rounded-xl border border-slate-700">
              <div className="text-sm text-blue-400 font-semibold mb-2">{t('navbar.mobileLanguage')}</div>
              <select
                value={i18n.language || 'es'}
                className="w-full bg-slate-800 text-white outline-none text-sm cursor-pointer appearance-none pr-4"
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  setIsOpen(false);
                }}
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
                <option value="de">DE</option>
                <option value="ja">JA</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;