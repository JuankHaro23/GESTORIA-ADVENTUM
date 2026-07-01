import React from 'react';
import { ScrollReveal } from '../../../core/ui/ScrollReveal';

export function CitaPage() {
  return (
    <div className="min-h-screen bg-adventum-crema py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl font-extrabold text-adventum-noche mb-6">Tu primera reunión, el primer paso hacia tu éxito.</h1>
          <p className="text-lg text-slate-600 mb-12">Elige un horario para contactarte con nuestros asesores de Ruta Valencia. Analizaremos tu perfil y resolveremos tus dudas en una sesión 1-a-1.</p>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <form className="space-y-6">
              <input type="text" placeholder="Nombre completo" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-adventum-coral" />
              <input type="tel" placeholder="WhatsApp (con código de país)" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-adventum-coral" />
              <textarea placeholder="Motivo de tu consulta" className="w-full p-4 border border-slate-200 rounded-xl h-32 focus:ring-2 focus:ring-adventum-coral"></textarea>
              <button className="w-full bg-adventum-noche text-white font-bold py-4 rounded-xl hover:bg-slate-900 transition-colors">
                Agendar Asesoría
              </button>
            </form>
          </div>
          
          <div className="mt-10 p-6 bg-adventum-oro/10 border border-adventum-oro rounded-2xl text-center">
            <p className="text-adventum-noche font-semibold italic">"No eres un número más. En Consultoría Ruta Valencia dedicamos el tiempo necesario a cada caso."</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}