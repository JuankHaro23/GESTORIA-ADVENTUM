import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../../core/ui/ScrollReveal';

export function QuienesSomosPage() {
  return (
    <div className="bg-adventum-crema min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Encabezado */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-adventum-coral font-bold tracking-[0.2em] uppercase text-xs">Conócenos</span>
            <h1 className="text-5xl font-extrabold text-adventum-noche mt-4">Nuestra Historia</h1>
          </div>
        </ScrollReveal>

        {/* Contenido Unificado */}
        <ScrollReveal delay={200}>
          <div className="space-y-12">
            
            {/* Bloque 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-adventum-noche border-l-4 border-adventum-coral pl-4">
                Nuestra Historia: Estuvimos exactamente en tus zapatos
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Detrás de Ruta Valencia no hay una corporación fría; hay una historia real de dos ingenieros ecuatorianos que, al igual que tú hoy, se atrevieron a soñar en grande.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Nosotros somos una pareja de esposos. María, graduada en Ingeniería en Contabilidad y Auditoría CPA en la ESPOCH; Juan, graduado en Ingeniería en Telecomunicaciones en la UNACH. Teníamos una vida estable en Ecuador, pero siempre compartimos un mismo anhelo profunda: cruzar el mapa para estudiar una maestría en España. Teníamos el destino clarísimo, queríamos que fuera **Valencia**, pero lo que no teníamos era un mapa para llegar.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Cuando empezamos, nos sentimos completamente perdidos. No sabíamos qué universidades elegir, si los másteres eran oficiales o propios, ni cómo calcular los precios de los créditos o entender las fechas de matrícula. Era un laberinto de información académica donde nadie nos daba certezas.
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="space-y-4 pt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-adventum-noche border-l-4 border-adventum-coral pl-4">
                Un camino a ciegas que decidimos cambiar
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Si la universidad fue un reto, el proceso del visado fue aún más difícil. Contratamos un asesor buscando paz, pero la experiencia fue frustrante. Sentíamos que avanzábamos a ciegas, con el corazón en la mano, rogando que todo saliera bien.
              </p>
              <div className="bg-adventum-terracota/10 p-6 rounded-2xl border-l-4 border-adventum-terracota">
                <p className="italic text-lg text-adventum-noche font-medium">
                  "Vamos a aprender a dominar este sistema a la perfección, y cuando lo logremos, ayudaremos a otros para que nadie tenga que pasar por el mal rato y la soledad que pasamos nosotros."
                </p>
              </div>
            </div>

            {/* Bloque 3: Cierre Motivador */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-adventum-noche border-l-4 border-adventum-coral pl-4 mb-8">
                Bienvenidos a tu nueva etapa: Bienvenidos a Ruta Valencia
              </h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-10">
                Hoy, la tormenta ya pasó. Terminamos con éxito nuestros estudios y decidimos quedarnos a vivir en esta maravillosa ciudad. Logramos nuestra meta, pero nunca olvidamos el vértigo de los primeros pasos.
              </p>

              {/* Sección CTA Senior */}
              <div className="bg-white border border-adventum-terracota/20 rounded-3xl p-8 md:p-12 shadow-sm text-center transform transition-all hover:shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-adventum-noche mb-6 leading-tight">
                  Ya hemos trazado la ruta<br />
                  <span className="text-adventum-coral">Ahora, permítenos guiarte a construir la tuya</span>
                </h3>
                <Link 
                  to="/contactanos" 
                  className="inline-block bg-adventum-noche text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-adventum-coral transition-colors duration-300"
                >
                  Comenzar mi aventura
                </Link>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}