import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ScrollReveal } from '../../../core/ui/ScrollReveal';
import { 
  SERVICES_TABS, 
  ESTUDIOS_CONTENT, 
  VISADOS_CONTENT, 
  RESIDENCIAS_CONTENT, 
  VALENCIA_VIP_CONTENT 
} from '../../../core/data/content';

export function ServiciosPage() {
  const [activeTab, setActiveTab] = useState('estudios');
  const location = useLocation();

  // Efecto para cambiar la pestaña automáticamente si venimos de un enlace con hash (ej: /servicios#visados)
  useEffect(() => {
    if (location.hash) {
      const tabId = location.hash.replace('#', '');
      if (SERVICES_TABS.some(tab => tab.id === tabId)) {
        setActiveTab(tabId);
      }
    }
  }, [location]);

  return (
    <div className="w-full bg-adventum-crema min-h-screen pb-20">
      
      {/* Cabecera de Servicios */}
      <div className="bg-adventum-noche py-20 border-b border-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%"><defs><pattern id="dots2" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="currentColor"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#dots2)"></rect></svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Nuestros <span className="text-adventum-oro">Servicios</span>
            </h1>
            <p className="text-xl text-blue-200 mt-4 max-w-2xl mx-auto font-light">
              Soluciones integrales de extranjería diseñadas para proteger tu inversión y asegurar tu éxito en España.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Navegación de Pestañas (Sticky para que siempre esté visible al hacer scroll) */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex overflow-x-auto hide-scrollbar py-2 justify-start md:justify-center space-x-2 md:space-x-8">
            {SERVICES_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-4 border-b-4 font-bold text-sm md:text-base transition-colors ${
                  activeTab === tab.id
                    ? 'border-adventum-coral text-adventum-coral'
                    : 'border-transparent text-slate-500 hover:text-adventum-noche hover:border-slate-300'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Contenedor Principal de Contenido */}
      <div className="max-w-5xl mx-auto px-6 pt-16">
        
        {/* =========================================
            PESTAÑA: ESTUDIOS
        ========================================= */}
        {activeTab === 'estudios' && (
          <div className="animate-fadeIn">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-extrabold text-adventum-noche mb-6 leading-tight">
                {ESTUDIOS_CONTENT.header}
              </h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                {ESTUDIOS_CONTENT.intro}
              </p>
              
              <h3 className="text-2xl font-bold text-adventum-noche mb-8">¿Qué incluye nuestro acompañamiento?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {ESTUDIOS_CONTENT.includes.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                    <div className="text-adventum-coral mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        )}

        {/* =========================================
            PESTAÑAS: VISADOS Y RESIDENCIAS (Usan la misma estructura base)
        ========================================= */}
        {(activeTab === 'visados' || activeTab === 'residencias') && (() => {
          const content = activeTab === 'visados' ? VISADOS_CONTENT : RESIDENCIAS_CONTENT;
          return (
            <div className="animate-fadeIn">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-extrabold text-adventum-noche mb-6 leading-tight">
                  {content.header}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {content.intro}
                </p>
                
                {/* Banner de Alerta Pre-Botón */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl mb-12">
                  <p className="text-red-800 font-medium italic">
                    "{content.alert}"
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-adventum-noche mb-8">Qué incluye nuestro acompañamiento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {content.includes.map((item, index) => (
                    <div key={index} className="flex gap-4">
                       <div className="text-adventum-oro mt-1">★</div>
                       <div>
                         <strong className="text-slate-900">{item.title}:</strong> <span className="text-slate-600">{item.desc}</span>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="h-px w-full bg-slate-200 mb-16"></div>

                <h3 className="text-3xl font-extrabold text-adventum-noche mb-10 text-center">
                  Tipos de {activeTab === 'visados' ? 'Visados' : 'Residencias'}
                </h3>
                
                {/* Listado de Visados/Residencias */}
                <div className="space-y-12">
                  {content.list.map((item, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 md:p-10 shadow-lg shadow-slate-200/50 border border-slate-100">
                      <h4 className="text-2xl font-bold text-adventum-coral mb-6 uppercase tracking-wide">{item.title}</h4>
                      
                      <div className="space-y-6">
                        <div>
                          <h5 className="font-bold text-adventum-noche text-lg mb-2">¿De qué trata?</h5>
                          <p className="text-slate-600">{item.whatIsIt}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-bold text-adventum-noche text-lg mb-2">Normativa clave</h5>
                          <ul className="list-disc pl-5 text-slate-600 space-y-2">
                            {item.rules.map((rule, idx) => (
                              <li key={idx}>
                                {/* Resaltamos la primera frase antes de los dos puntos para que se vea como en tu texto original */}
                                <strong>{rule.split(':')[0]}:</strong>{rule.split(':')[1]}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                          <h5 className="font-bold text-red-600 text-lg mb-2">El riesgo de tramitarlo por cuenta propia</h5>
                          <p className="text-slate-600 text-sm">{item.risks}</p>
                        </div>

                        <div>
                          <h5 className="font-bold text-adventum-noche text-lg mb-3">Lo que ADVENTUM hace por ti</h5>
                          <ul className="space-y-3">
                            {item.adventumDoes.map((action, idx) => (
                              <li key={idx} className="flex gap-3 text-slate-600">
                                <span className="text-green-500 font-bold">✓</span> {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          );
        })()}

        {/* =========================================
            PESTAÑA: VALENCIA VIP
        ========================================= */}
        {activeTab === 'valencia-vip' && (
          <div className="animate-fadeIn">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-extrabold text-adventum-noche mb-6 leading-tight">
                {VALENCIA_VIP_CONTENT.header}
              </h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                {VALENCIA_VIP_CONTENT.intro}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {VALENCIA_VIP_CONTENT.stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <h4 className="font-bold text-adventum-noche mb-2">{stat.title}</h4>
                    <p className="text-sm text-slate-500">{stat.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-adventum-noche mb-8">¿Por qué Valencia y no Madrid o Barcelona?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {VALENCIA_VIP_CONTENT.reasons.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-adventum-coral mt-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{reason.title}</h4>
                      <p className="text-slate-600">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-adventum-terracota/20 border border-adventum-terracota p-8 rounded-3xl text-center mb-8">
                <p className="text-adventum-noche font-bold text-lg mb-6">
                  {VALENCIA_VIP_CONTENT.alert}
                </p>
                <Link to="/cita" className="inline-block bg-adventum-coral text-white font-bold py-4 px-8 rounded-full shadow-lg hover:opacity-90 transition-opacity">
                  Quiero coordinar mi llegada a Valencia con ADVENTUM
                </Link>
              </div>
            </ScrollReveal>
          </div>
        )}

      </div>
    </div>
  );
}