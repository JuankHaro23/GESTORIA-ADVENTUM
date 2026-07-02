import React from 'react';
import { ScrollReveal } from '../../../core/ui/ScrollReveal';

export function CitaPage() {
  return (
    <div className="min-h-screen bg-adventum-crema py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          
          {/* Cabecera */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-adventum-noche mb-6 leading-tight">
              Tu primera reunión,<br />
              <span className="text-adventum-coral">el primer paso hacia tu éxito.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Elige un horario para contactarte con nuestros asesores de Ruta Valencia. Analizaremos tu perfil y resolveremos tus dudas en una sesión 1-a-1.
            </p>
          </div>
          
          {/* Formulario Premium */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
            
            {/* Detalle decorativo sutil */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-adventum-noche to-adventum-coral"></div>

            <form className="space-y-6 mt-2">
              
              {/* Nombre - Fila Completa */}
              <div>
                <label className="block text-sm font-bold text-adventum-noche mb-2 ml-1">
                  Nombre completo <span className="text-adventum-coral">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Ej. Juan Pérez" 
                  className="w-full p-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-adventum-coral focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" 
                  required
                />
              </div>

              {/* Correo y WhatsApp - Dos Columnas en Desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                    Correo electrónico <span className="text-slate-400 font-normal italic">(Opcional)</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="tucorreo@ejemplo.com" 
                    className="w-full p-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-adventum-coral focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                    WhatsApp <span className="text-slate-400 font-normal italic">(Opcional)</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+34 600 000 000" 
                    className="w-full p-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-adventum-coral focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" 
                  />
                </div>
              </div>

              {/* Motivo - Fila Completa */}
              <div>
                <label className="block text-sm font-bold text-adventum-noche mb-2 ml-1">
                  Motivo de tu consulta <span className="text-adventum-coral">*</span>
                </label>
                <textarea 
                  placeholder="Cuéntanos brevemente sobre tus planes o dudas para prepararnos para la reunión..." 
                  className="w-full p-4 border border-slate-200 rounded-2xl h-36 focus:ring-2 focus:ring-adventum-coral focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                  required
                ></textarea>
              </div>

              {/* Botón CTA */}
              <div className="pt-4">
                <button 
                  type="button" 
                  className="w-full bg-adventum-noche text-white font-bold py-5 rounded-2xl hover:bg-adventum-coral transition-colors duration-300 shadow-lg shadow-slate-200 uppercase tracking-widest text-sm"
                >
                  Agendar Asesoría
                </button>
              </div>
              
            </form>
          </div>
          
          {/* Mensaje de Confianza */}
          <div className="mt-10 p-8 bg-adventum-terracota/10 border border-adventum-terracota/20 rounded-[2rem] text-center">
            <p className="text-adventum-noche font-medium text-lg italic">
              "No eres un número más. En Ruta Valencia dedicamos el tiempo necesario a cada caso."
            </p>
          </div>

        </ScrollReveal>
      </div>
    </div>
  );
}