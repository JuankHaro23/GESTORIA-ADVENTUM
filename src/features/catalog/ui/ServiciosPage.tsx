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
      
      {/* Cabecera de Servicios (AQUÍ SE AÑADIÓ EL BOTÓN DE CTA) */}
      <div className="bg-adventum-noche py-20 border-b border-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%"><defs><pattern id="dots2" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="currentColor"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#dots2)"></rect></svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Nuestros <span className="text-adventum-oro">Servicios</span>
            </h1>
            <p className="text-xl text-blue-200 mt-4 mb-10 max-w-2xl mx-auto font-light">
              Soluciones integrales de extranjería diseñadas para proteger tu inversión y asegurar tu éxito en España.
            </p>
            {/* CTA Añadido al Inicio */}
            <Link 
              to="/contactanos" 
              className="inline-block bg-adventum-coral text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-adventum-coral/30 hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 tracking-widest uppercase text-sm"
            >
              Agendar Asesoría Gratuita
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* Navegación de Pestañas */}
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
      <div className="max-w-7xl mx-auto px-6 pt-16">
        
        {/* =========================================
            PESTAÑA: ESTUDIOS
        ========================================= */}
        {activeTab === 'estudios' && (
          <div className="animate-fadeIn max-w-5xl mx-auto">
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
            PESTAÑAS: VISADOS Y RESIDENCIAS
        ========================================= */}
        {(activeTab === 'visados' || activeTab === 'residencias') && (() => {
          const content = activeTab === 'visados' ? VISADOS_CONTENT : RESIDENCIAS_CONTENT;
          return (
            <div className="animate-fadeIn">
              <ScrollReveal>
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-adventum-noche mb-6 leading-tight">
                    {content.header}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {content.intro}
                  </p>
                  
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
                </div>
                
                {/* LISTADO EN FORMATO GRID (Uno al lado del otro) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {content.list.map((item, index) => (
                    <div key={index} className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-lg shadow-slate-200/50 border border-slate-100 h-full flex flex-col">
                      <h4 className="text-2xl font-bold text-adventum-coral mb-6 uppercase tracking-wide border-b border-slate-100 pb-4">{item.title}</h4>
                      
                      <div className="space-y-8 flex-grow">
                        <div>
                          <h5 className="font-bold text-adventum-noche text-lg mb-2">¿De qué trata?</h5>
                          <p className="text-slate-600 leading-relaxed">{item.whatIsIt}</p>
                        </div>
                        
                        {/* NORMATIVA CON DISEÑO MODERNO Y SALTO DE LÍNEA */}
                        <div>
                          <h5 className="font-bold text-adventum-noche text-lg mb-4">Normativa clave</h5>
                          <ul className="space-y-4">
                            {item.rules.map((rule, idx) => (
                              <li key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <span className="block font-bold text-adventum-noche mb-1">{rule.title}</span>
                                <span className="block text-slate-700 leading-relaxed text-sm">{rule.desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                          <h5 className="font-bold text-red-700 text-lg mb-2">El riesgo de tramitarlo por cuenta propia</h5>
                          <p className="text-slate-700 text-sm leading-relaxed">{item.risks}</p>
                        </div>

                        <div>
                          <h5 className="font-bold text-adventum-noche text-lg mb-4">Lo que Ruta Valencia hace por ti</h5>
                          <ul className="space-y-3 bg-green-50/50 p-6 rounded-2xl border border-green-100">
                            {item.adventumDoes.map((action, idx) => (
                              <li key={idx} className="flex gap-3 text-slate-700 text-sm font-medium">
                                <span className="text-green-600 font-bold">✓</span> 
                                <span className="leading-relaxed">{action}</span>
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
            PESTAÑA: VALENCIA VIP (Diseño Limpio)
        ========================================= */}
        {activeTab === 'valencia-vip' && (
          <div className="animate-fadeIn max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-adventum-noche mb-6 leading-tight">
                  {VALENCIA_VIP_CONTENT.header}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {VALENCIA_VIP_CONTENT.intro}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-12">
                <h3 className="text-2xl font-bold text-adventum-noche mb-8 border-l-4 border-adventum-coral pl-4">
                  ¿Qué incluye nuestro acompañamiento exclusivo?
                </h3>
                <div className="space-y-6">
                  {VALENCIA_VIP_CONTENT.includes.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                      <div className="text-adventum-coral mt-1">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-adventum-noche text-lg mb-1">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Final Valencia VIP */}
              <div className="text-center">
                <Link to="/contactanos" className="inline-block bg-adventum-noche text-white font-bold py-5 px-12 rounded-full shadow-lg hover:bg-adventum-coral transition-colors duration-300 tracking-widest uppercase text-sm">
                  Quiero mi llegada VIP en Valencia
                </Link>
              </div>
            </ScrollReveal>
          </div>
        )}

      </div>
    </div>
  );
}