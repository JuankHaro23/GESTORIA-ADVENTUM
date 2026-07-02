import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../../core/ui/ScrollReveal';

// Importamos tu imagen panorámica directamente
import destinoValenciaImg from '../../../core/assets/images/DestinoValencia.jpeg';

export function DestinoValenciaPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. SECCIÓN PANORÁMICA/FUTURO SECCION CARRUSEL (Por ahora esta el Efecto Desplazamiento Animado) */}
      <section className="h-[50vh] md:h-[65vh] w-full overflow-hidden relative bg-adventum-noche">
        {/* Inyectamos la animación CSS de paneo */}
        <style>
          {`
            @keyframes pan-panoramic {
              0% { background-position: 0% 50%; }
              100% { background-position: 100% 50%; }
            }
            .animate-pan {
              /* 60s hace que el movimiento sea súper suave y elegante. "alternate" hace que vaya y vuelva */
              animation: pan-panoramic 60s linear infinite alternate;
            }
          `}
        </style>
        
        {/* Contenedor de la imagen */}
        <div 
          className="absolute inset-0 w-full h-full animate-pan"
          style={{
            backgroundImage: `url(${destinoValenciaImg})`,
            backgroundSize: 'cover', // Asegura que cubra todo el alto y ancho
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Gradiente sutil en la parte inferior para fusionarlo con el fondo blanco de la siguiente sección */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* 2. INTRODUCCIÓN */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <h1 className="text-5xl font-extrabold text-adventum-noche mb-8">Bienvenidos a la mejor ciudad del mundo para vivir</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            (No lo decimos nosotros, lo dicen los rankings internacionales).<br/><br/>
            Imagina despertar con el sol brillando casi todos los días del año, ir a la universidad en bicicleta cruzando un majestuoso parque lineal de 9 kilómetros y terminar tu jornada repasando apuntes frente al mar Mediterráneo. Eso no es un sueño de vacaciones; eso es un día cualquiera en Valencia.<br/><br/>
            Elegida consecutivamente por InterNations como la mejor ciudad del mundo para extranjeros, combina la vibrante energía de una metrópolis europea con la calma, la seguridad y el sabor de la costa mediterránea.
          </p>
        </ScrollReveal>
      </section>

      {/* 3. ESTADÍSTICAS (Diseño Senior con Iconos SVG y Flex Centrado para 5 items) */}
      <section className="py-24 bg-adventum-crema px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-adventum-noche">Valencia en Cifras:<br/><span className="text-adventum-coral font-light">El imán del talento joven</span></h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { 
                title: '+300 días de sol', 
                desc: 'Olvídate del invierno gris. Temperatura media de 19°C. La vida se hace al aire libre.',
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
              },
              { 
                title: 'Capital Universitaria', 
                desc: 'Más de 100.000 estudiantes. Un ambiente joven, multicultural y global en cada esquina.',
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
              },
              { 
                title: 'Playas urbanas', 
                desc: 'Totalmente integradas en la ciudad. Llega en tranvía o bici en 20 minutos desde tu campus.',
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15.75L5.25 12 9 15.75l3.75-3.75 3.75 3.75 3-3.75M3 20.25l2.25-3.75 3.75 3.75 3.75-3.75 3.75 3.75 3-3.75" /></svg>
              },
              { 
                title: 'El Jardín del Turia', 
                desc: 'Un parque urbano de 9km de largo. La "autopista verde" para moverte sin contaminación.',
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.66 2.25c.34 1.34 1.33 2.5 2.52 3.25C15.82 6.55 18 8.1 18 10.5c0 2.28-1.57 4.38-3.72 5.09-1.28.43-2.67.75-4.14.93V21h-2v-4.48c-1.47-.18-2.86-.5-4.14-.93C1.57 14.88 0 12.78 0 10.5c0-2.4 2.18-3.95 3.82-5 1.19-.75 2.18-1.91 2.52-3.25h5.32z" /></svg>
              },
              { 
                title: 'Historia y Vanguardia', 
                desc: 'Desde las imponentes Torres de Serranos y el casco histórico, hasta la futurista Ciudad de las Artes y las Ciencias. Un contraste arquitectónico único en Europa.',
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M8.25 21v-8.25M15.75 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
              }
            ].map((item, i) => (
              <div key={i} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-adventum-coral/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-slate-50 text-adventum-coral rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="font-bold text-adventum-noche text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARATIVA: ¿POR QUÉ VALENCIA? */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <span className="text-adventum-coral font-bold tracking-[0.2em] uppercase text-xs">Análisis de Destino</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-adventum-noche mt-4 mb-6">
                ¿Por qué Valencia y no Madrid o Barcelona?
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Si bien las dos grandes capitales españolas tienen su encanto, para un estudiante internacional Valencia es una opción infinitamente más inteligente por una razón clave: <strong className="text-adventum-noche">la calidad de vida por euro invertido.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-2xl hover:border-adventum-coral/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-adventum-coral mb-8 group-hover:scale-110 transition-transform border border-slate-100">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-adventum-noche mb-4">Coste de vida un 30% más accesible</h3>
                <p className="text-slate-600 leading-relaxed">
                  Valencia es notablemente más económica. El presupuesto mensual para comida, transporte, ocio y canasta básica rinde muchísimo más, permitiéndote disfrutar de tu experiencia en Europa sin vivir al límite.
                </p>
              </div>

              <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-2xl hover:border-adventum-coral/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-adventum-coral mb-8 group-hover:scale-110 transition-transform border border-slate-100">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-adventum-noche mb-4">Vivienda y Alquiler Realista</h3>
                <p className="text-slate-600 leading-relaxed">
                  Aunque el mercado es competitivo, en Valencia el coste de habitaciones o estudios sigue estando muy por debajo de los precios prohibitivos de Madrid o Barcelona, con el beneficio extra de vivir a minutos del mar.
                </p>
              </div>

              <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-2xl hover:border-adventum-coral/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-adventum-coral mb-8 group-hover:scale-110 transition-transform border border-slate-100">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-adventum-noche mb-4">Distancias humanas</h3>
                <p className="text-slate-600 leading-relaxed">
                  Valencia es una ciudad plana y compacta. Aquí no perderás dos horas al día metido en un metro subterráneo abarrotado. Todo está a un paseo de distancia o a unos minutos en una red de transporte moderna y económica.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. SEGURIDAD (Bloque Premium Oscuro) */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="bg-adventum-noche rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-adventum-oro opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 bg-white/5 rounded-[2rem] flex items-center justify-center border border-white/10 backdrop-blur-sm transform rotate-3">
                    <svg className="w-16 h-16 text-adventum-oro" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                    Seguridad y Bienestar:<br/>
                    <span className="text-adventum-oro font-light">Tu tranquilidad y la de tu familia</span>
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Para los estudiantes de Latinoamérica (y especialmente para sus padres en origen), este es el dato más importante: Valencia es una de las ciudades más seguras de toda Europa. Puedes caminar de noche por sus calles iluminadas con total tranquilidad, utilizar tu laptop en una cafetería o viajar en el transporte público sin la ansiedad de la inseguridad. Es una ciudad diseñada para vivir sin miedo.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. RELOCACIÓN VIP Y CTA FINAL */}
      <section className="py-24 bg-adventum-crema px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-adventum-noche mb-8 leading-tight">
                El secreto para llegar sin estrés:<br/>
                <span className="text-adventum-coral">Tu Relocación VIP con Ruta Valencia</span>
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-slate-700 leading-relaxed mb-16 text-center">
              <p>
                Enamorarse de Valencia es fácil, pero conseguir un piso adecuado desde la distancia, entender las zonas (saber cuál es el barrio universitario y cuál debes evitar), negociar contratos de alquiler en España sin nómina local y tramitar el empadronamiento obligatorio puede convertirse en una pesadilla burocrática si lo haces solo.
              </p>
              <p className="font-bold text-adventum-noche text-xl mt-8">
                En Ruta Valencia no solo te ayudamos a llegar; nos aseguramos de que aterrices de pie.
              </p>
              <p>
                Mientras tú preparas tus maletas en Ecuador, nuestro equipo en Valencia busca, verifica y asegura tu alojamiento ideal, te recibe en la estación y te acompaña a realizar tus primeros trámites obligatorios en la ciudad.
              </p>
            </div>

            {/* Warning Banner Alta Conversión */}
            <div className="bg-red-50 border border-red-200 rounded-[2rem] p-8 md:p-10 mb-12 shadow-sm text-center transform transition-transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-red-900 mb-4">Asegura tu espacio con profesionales en el destino</h4>
              <p className="text-red-800 text-lg">
                La demanda de alojamiento para estudiantes en Valencia es una de las más altas de España. No dejes tu llegada a la aventura o al riesgo de estafas en internet.
              </p>
            </div>

            {/* CTA Master Button */}
            <div className="text-center">
              <Link 
                to="/contactanos" 
                className="inline-flex justify-center items-center bg-adventum-noche text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-adventum-coral transition-all duration-300 shadow-xl hover:shadow-adventum-coral/40 transform hover:scale-105 w-full md:w-auto"
              >
                Quiero coordinar mi llegada a Valencia con Ruta Valencia
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}