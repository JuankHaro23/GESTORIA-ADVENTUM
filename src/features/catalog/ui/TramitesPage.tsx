import React from 'react';
import { ScrollReveal } from '../../../core/ui/ScrollReveal';

export function TramitesPage() {
  const tramites = [
    { title: "Empadronamiento", desc: "El primer paso esencial. Te guiamos para inscribirte en el padrón municipal de Valencia rápidamente." },
    { title: "Obtención del NIE", desc: "Tramitamos tu Número de Identidad de Extranjero, necesario para cualquier contrato o gestión en el país." },
    { title: "Canje de Licencia de Conducir", desc: "Convalidamos tu permiso de conducir ecuatoriano para que puedas circular legalmente en España sin contratiempos." },
    { title: "Apertura de Cuenta Bancaria", desc: "Te acompañamos a gestionar tu cuenta en bancos españoles, facilitando la justificación de solvencia." },
    { title: "Homologación de Títulos", desc: "Procesamos la validación académica de tus estudios de Ecuador para que tengan valor oficial en el sistema español." }
  ];

  return (
    <div className="min-h-screen bg-adventum-crema py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl font-extrabold text-adventum-noche mb-6">Tu éxito administrativo en España, garantizado.</h1>
          <p className="text-xl text-slate-600 mb-16">Gestionamos la burocracia para que tú te enfoques en tu crecimiento personal y profesional.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tramites.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-adventum-coral mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}