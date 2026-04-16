import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, BriefcaseBusiness, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const contactData = [
    {
      icon: <Phone className="text-blue-500" />, 
      label: t('contact.labels.phone'),
      value: "833-430-4505",
      href: "tel:8334304505"
    },
    {
      icon: <Mail className="text-blue-500" />, 
      label: t('contact.labels.email'),
      value: "mario.hernandez02@iest.edu.mx",
      href: "mailto:mario.hernandez02@iest.edu.mx"
    },
    {
      icon: <BriefcaseBusiness className="text-blue-500" />,
      label: t('contact.labels.linkedin'),
      value: "Mario Hernández",
      href: "https://www.linkedin.com/in/mario-hernandez20/"
    },
    {
      icon: <MapPin className="text-blue-500" />, 
      label: t('contact.labels.location'),
      value: "Altamira, Tamaulipas.",
      href: "https://maps.app.goo.gl/4uvi4jzEiAWpVhg8A"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">{t('contact.title')}</h2>
        <p className="text-slate-600 mb-12">
          {t('contact.description')}
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {contactData.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              target={item.label === "LinkedIn" ? "_blank" : "_self"}
              rel="noreferrer"
              className="flex items-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-500 hover:shadow-md transition-all group"
            >
              <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <p className="text-slate-900 font-semibold">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;