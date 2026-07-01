// src/core/data/content.ts

export const SERVICES_TABS = [
  { id: 'estudios', title: 'ESTUDIOS' },
  { id: 'visados', title: 'VISADOS' },
  { id: 'residencias', title: 'PERMISOS DE RESIDENCIA' },
  { id: 'valencia-vip', title: 'VALENCIA VIP' }
];

export const ESTUDIOS_CONTENT = {
  header: "El Máster o Carrera ideal para ti, en la ciudad que elijas.",
  intro: "Sabemos que elegir entre cientos de universidades y opciones en toda España puede dar un poco de miedo. No te preocupes, analizamos tu perfil, tus metas y tu presupuesto para encontrar la opción perfecta para ti.",
  includes: [
    { title: "Asesoría personalizada", desc: "Evaluamos tus opciones académicas en cualquier provincia de España para garantizar que elijas con seguridad." },
    { title: "Gestión de postulación", desc: "Nos encargamos de todo el papeleo con la universidad, el envío de documentos y el seguimiento de tu plaza." },
    { title: "Revisión de requisitos", desc: "Te ayudamos con la cartas de motivación, currículum adaptado al sistema español y homologaciones necesarias." },
    { title: "Tu Carta de Aceptación", desc: "No paramos hasta que tengas en tus manos el documento oficial que te abre las puertas del país." }
  ]
};

export const VISADOS_CONTENT = {
  header: "Tu expediente en manos expertas. Tu tranquilidad es lo primero.",
  intro: "Presentar los papeles para el consulado suele generar mucha incertidumbre. Como nosotros ya pasamos por esto, revisamos cada detalle con un cuidado absoluto para que tu expediente vaya perfecto y sin errores.",
  alert: "Un error de forma en el Consulado puede retrasar tus planes un año entero. Asegura tu inversión.",
  includes: [
    { title: "Checklist personalizado", desc: "Te damos la lista exacta de documentos que necesitas conseguir en Ecuador, explicados de forma clara y sencilla." },
    { title: "Revisión y armado de expediente", desc: "Analizamos minuciosamente tus requisitos financieros, médicos y de estudios antes de la entrega formal." },
    { title: "Preparación para la cita", desc: "Te guiamos sobre cómo presentarte en el consulado y qué esperar ese día para que vayas con total confianza." },
    { title: "Seguimiento constante", desc: "Estamos contigo resolviendo cualquier duda hasta el día en que tu visado esté aprobado." }
  ],
  list: [
    {
      id: "visado-estudios",
      title: "VISADO DE ESTUDIOS",
      whatIsIt: "Es la autorización de residencia que permite a ciudadanos extranjeros permanecer en España por un período superior a 90 días para cursar estudios, maestrías, doctorados o formaciones de especialización en centros educativos autorizados.",
      rules: [
        "Duración inicial: Se otorga por el tiempo que dure el programa de estudios (generalmente 1 año académico o el ciclo completo de la maestría).",
        "¿Qué pasa si tus estudios duran más de 6 meses? Si el programa supera los 180 días, el visado estampado en el pasaporte solo sirve para entrar a España. Una vez en territorio español, es obligatorio tramitar la TIE (Tarjeta de Identidad de Extranjero) ante la Policía Nacional dentro de los primeros 30 días desde la llegada.",
        "¿Se puede trabajar? Sí, actualmente permite trabajar de forma automática hasta 30 horas semanales, siempre que las horas laborales no coincidan con el horario lectivo."
      ],
      risks: "El Consulado de España en Ecuador es sumamente estricto. La mayoría de denegaciones no ocurren por falta de documentos, sino por errores de forma: omitir cláusulas específicas en los seguros de salud, no justificar correctamente el origen de los fondos económicos o presentar cartas de admisión que no cumplen con los requisitos específicos de la normativa española. Una sola denegación mancha tu historial migratorio.",
      adventumDoes: [
        "Auditoría completa preliminar de tu perfil y el de tus patrocinadores.",
        "Revisión exhaustiva y validación del seguro médico y soportes financieros bajo estándares consulares actualizados.",
        "Preparación y blindaje del expediente final para asegurar una tasa de éxito máxima en la cita consular."
      ]
    },
    {
      id: "visado-acompanante",
      title: "VISADO ACOMPAÑANTE DE ESTUDIANTE",
      whatIsIt: "Es el derecho que tienen los familiares directos de un estudiante internacional (cónyuge, pareja de hecho legalmente constituida e hijos menores de 18 años) para residir legalmente en España de forma simultánea mientras dure la formación del estudiante principal.",
      rules: [
        "Duración inicial: Está vinculada estrictamente a la duración del visado del estudiante principal. Nace y expira al mismo tiempo.",
        "¿Qué pasa si la estancia es superior a 6 meses? Al igual que el estudiante, cada acompañante mayor de edad debe tramitar su propia TIE en España durante los primeros 30 días del viaje.",
        "¿Se puede trabajar? No. Por ley, el visado de familiar de estudiante otorga residencia legal pero no autoriza a trabajar por cuenta ajena ni propia en España."
      ],
      risks: "Este es uno de los visados más difíciles de conseguir. El Consulado asume que el estudiante va a estudiar, no a migrar con toda su familia por motivos económicos. Por ello, la exigencia financiera se multiplica exponencialmente por cada dependiente y los lazos que demuestren el retorno al país de origen deben estar perfectamente estructurados. Un error en el planteamiento familiar y negarán el visado a todo el grupo.",
      adventumDoes: [
        "Diseño de la estrategia de postulación familiar (evaluación de conveniencia: postulación conjunta o sucesiva).",
        "Optimización y cálculo preciso de los fondos económicos requeridos para el núcleo familiar.",
        "Estructuración del expediente de vínculos en origen para mitigar el riesgo de sospecha migratoria."
      ]
    },
    {
      id: "prorroga-estudios",
      title: "PRÓRROGA DE ESTANCIA POR ESTUDIOS",
      whatIsIt: "Es el procedimiento legal que permite a los estudiantes internacionales que ya se encuentran en territorio español extender su período de residencia legal. Este trámite es indispensable para quienes deciden continuar con sus estudios actuales o iniciar una nueva especialización sin necesidad de regresar a su país de origen.",
      rules: [
        "Duración de la prórroga: Se concede por el tiempo que dure el nuevo programa formativo presentado (normalmente 1 año académico adicional).",
        "Plazos legales estrictos: La solicitud debe presentarse obligatoriamente dentro de los 60 días naturales antes de la fecha de caducidad de la TIE actual.",
        "El requisito del 'Aprovechamiento Académico': Para que España apruebe la prórroga, es obligatorio demostrar jurídicamente que se han superado con éxito las materias, exámenes o el TFM del período anterior."
      ],
      risks: "Las Oficinas de Extranjería en España están denegando miles de prórrogas debido a la rigidez con la que evalúan los certificados de notas. Un informe mal redactado, una póliza de seguro médico con lagunas o un formato incorrecto al demostrar los fondos resulta en una denegación fulminante, dejando al estudiante en situación irregular de inmediato.",
      adventumDoes: [
        "Auditoría técnica de tus certificados de notas e informes de aprovechamiento.",
        "Revisión, cálculo y optimización de tus recursos financieros y pólizas sanitarias bajo las normativas vigentes.",
        "Presentación telemática oficial de tu expediente a través de plataformas gubernamentales prioritarias."
      ]
    },
    {
      id: "visado-schengen",
      title: "VISADO SCHENGEN",
      whatIsIt: "Es la autorización que permite viajar y transitar libremente por los 29 países del espacio Schengen (incluyendo España) por motivos de turismo, negocios, visitas familiares o la realización de cursos y formaciones cortas.",
      rules: [
        "Duración máxima: Permite una estancia de máximo 90 días dentro de cualquier período de 180 días.",
        "¿Qué pasa si requieres quedarte más de 90 días? Este visado no es prorrogable ni modificable desde dentro de España. Debes tramitar obligatoriamente un Visado Nacional de Larga Duración desde el Consulado de origen."
      ],
      risks: "Las denegaciones del Visado Schengen bajo la cláusula 'la información presentada no es fiable' han crecido exponencialmente. El Consulado rechaza carpetas enteras si el itinerario de vuelos no coincide perfectamente con las reservas de hotel, o si las cartas de invitación tienen defectos de redacción formal.",
      adventumDoes: [
        "Planificación y coherencia cronológica de tu itinerario de viaje y alojamiento.",
        "Verificación de la cobertura internacional del seguro de viaje obligatorio.",
        "Perfilamiento de la documentación laboral y financiera para demostrar el arraigo e intención de retorno a Ecuador."
      ]
    }
  ]
};

export const RESIDENCIAS_CONTENT = {
  header: "Tu talento merece quedarse en España. Construye tu futuro profesional con total seguridad legal.",
  intro: "El camino hacia el éxito en Europa no termina con las aulas; el verdadero crecimiento empieza cuando decides establecer tus raíces. Dar el salto de estudiante a residente, o tramitar tu derecho a trabajar en España, es una de las decisiones más importantes de tu vida. En RUTA VALENCIA transformamos la complejidad legal en un proceso claro, ágil y seguro.",
  alert: "La delgada línea entre la residencia legal y la irregularidad en España es un error de forma en tu expediente. No dejes tu futuro al azar.",
  includes: [
    { title: "Auditoría de Perfil Jurídico", desc: "Analizamos tu situación actual para determinar la vía legal más rápida y con mayor probabilidad de aprobación." },
    { title: "Gestión Documental Completa", desc: "Nos encargamos de verificar, corregir y estructurar cada requisito bajo las exigencias de la Oficina de Extranjería." },
    { title: "Presentación Telemática Prioritaria", desc: "Tramitamos tu expediente a través de plataformas oficiales exclusivas para profesionales, acelerando los tiempos de respuesta." },
    { title: "Seguimiento y Blindaje Legal", desc: "Monitoreamos tu caso en tiempo real y te preparamos para la toma de huellas y la obtención de tu TIE física." }
  ],
  list: [
    {
      id: "cuenta-propia",
      title: "RESIDENCIA TRABAJO POR CUENTA PROPIA",
      whatIsIt: "Es la autorización de residencia y trabajo que permite a ciudadanos extranjeros desarrollar una actividad económica por cuenta propia en España, ya sea abriendo un negocio físico, una empresa de servicios o ejerciendo como profesional autónomo (freelance).",
      rules: [
        "Duración inicial: Se concede generalmente por 1 año (Régimen General) o hasta 3 años (Ley de Emprendedores).",
        "El requisito del Plan de Viabilidad: Es obligatorio presentar un Plan de Negocio detallado avalado y certificado por organizaciones de autónomos oficiales (UPTA o ATA).",
        "Capacidad de generar empleo: La normativa valora que el proyecto demuestre el potencial de crear puestos de trabajo locales en el mediano plazo."
      ],
      risks: "El 80% de las solicitudes son denegadas debido a la mala estructuración del Plan de Viabilidad económica. Extranjería rechaza carpetas si los flujos de caja no son realistas, si no se demuestra la inversión inicial exacta o si la redacción no cumple con los tecnicismos exigidos.",
      adventumDoes: [
        "Estructuración, análisis y redacción técnica de tu Plan de Negocio bajo los estándares exigidos.",
        "Gestión y tramitación del certificado oficial de viabilidad ante las asociaciones autorizadas.",
        "Auditoría de tus recursos económicos propios para garantizar que cumples con la normativa."
      ]
    },
    {
      id: "cuenta-ajena",
      title: "RESIDENCIA TRABAJO POR CUENTA AJENA",
      whatIsIt: "Es la autorización que permite a un extranjero residir en España y trabajar legalmente para una empresa o empleador español que haya decidido contratarlo formalmente.",
      rules: [
        "Duración inicial: Habitualmente se otorga por 1 año (Régimen General) o hasta 3 años si se aplica como Profesional Altamente Cualificado (PAC).",
        "La Situación Nacional de Empleo: Si aplicas desde origen, la empresa debe demostrar que el puesto no pudo ser cubierto por un residente (salvo excepciones). Si modificas desde estudiante, esta limitación no aplica.",
        "Solvencia del Empleador: La empresa contratante debe demostrar una salud financiera impecable y estar al corriente con Hacienda y la Seguridad Social."
      ],
      risks: "El principal enemigo es el desconocimiento de las propias empresas españolas sobre extranjería. Redactan mal contratos u omiten cláusulas del convenio. Extranjería deniega el permiso si detecta que la empresa no tiene la solvencia para pagar tu salario a largo plazo.",
      adventumDoes: [
        "Auditoría técnica confidencial a la documentación de la empresa contratante.",
        "Revisión y adaptación del contrato de trabajo para que cumpla rigurosamente con los requisitos legales.",
        "Gestión integral del expediente en la plataforma telemática, evitando burocracia a la empresa."
      ]
    },
    {
      id: "busqueda-empleo",
      title: "RESIDENCIA PARA LA BÚSQUEDA DE EMPLEO",
      whatIsIt: "Es un permiso de residencia diseñado exclusivamente para estudiantes internacionales que han finalizado sus estudios de educación superior en España y desean quedarse en el país para buscar un empleo adecuado a su nivel de cualificación o poner en marcha un proyecto empresarial.",
      rules: [
        "Duración máxima: Se concede por un período máximo e improrrogable de 24 meses (2 años).",
        "Plazos de solicitud milimétricos: Debe solicitarse obligatoriamente dentro de los 60 días naturales anteriores a la fecha de caducidad de tu TIE o dentro de los 90 días naturales posteriores.",
        "Nivel Académico Exigido: Solo pueden optar estudiantes que hayan culminado estudios de Grado, Máster Oficial, Máster de Formación Permanente o Doctorado (Nivel 6, 7 u 8 MEC)."
      ],
      risks: "Extranjería evalúa la concesión con lupa. El motivo principal de denegación es el estatus de la institución educativa (no todos los títulos propios son válidos) y errores en la acreditación del seguro médico o cálculo de fondos económicos. Un error te deja fuera de plazo de inmediato.",
      adventumDoes: [
        "Verificación previa en el registro oficial del Ministerio para asegurar que tu titulación es 100% elegible.",
        "Control estricto del calendario legal para realizar la presentación telemática en el momento idóneo.",
        "Validación y optimización de los soportes financieros y la póliza de salud bajo los criterios específicos."
      ]
    }
  ]
};

export const VALENCIA_VIP_CONTENT = {
  header: "Aterriza con la tranquilidad de tener a alguien esperándote.",
  intro: "Valencia es una ciudad maravillosa para vivir, pero llegar sin conocer a nadie ni saber dónde dormir puede ser difícil. Queremos ser tu familia de este lado del mundo. Nos encargamos de que tu transición sea bonita, segura y muy feliz.",
  alert: "La demanda de alojamiento para estudiantes en Valencia es una de las más altas de España. No dejes tu llegada a la aventura; asegura tu espacio con profesionales en el destino.",
  includes: [
    { title: "Búsqueda de tu nuevo hogar", desc: "Buscamos y verificamos opciones de pisos o habitaciones en zonas universitarias seguras antes de que viajes, evitándote estafas a la distancia." },
    { title: "Bienvenida en el aeropuerto", desc: "Te recogemos personalmente cuando aterrices en Valencia para llevarte directo a tu nuevo hogar. ¡Cero pérdidas!" },
    { title: "Tus primeras llaves", desc: "Te entregamos tu habitación o piso listo para entrar a vivir, con todo en orden para tu comodidad." },
    { title: "Trámites locales", desc: "Te guiamos paso a paso para sacar tu tarjeta de transporte, tu línea móvil y tus citas de registro legal en la ciudad (empadronamiento)." }
  ],
  stats: [
    { icon: "☀️", title: "+300 días de sol al año", desc: "Olvídate del invierno gris. Valencia goza de una temperatura media anual de 19°C. La vida se hace al aire libre." },
    { icon: "🎓", title: "Capital Universitaria", desc: "Más de 100.000 estudiantes llenan de vida la ciudad. Es uno de los destinos líderes en Europa para estudiantes internacionales." },
    { icon: "🌊", title: "Playas Urbanas", desc: "A diferencia de otras ciudades, las playas están integradas. Llegarás en tranvía o bici en menos de 20 minutos desde el campus." },
    { icon: "🌳", title: "El Jardín del Turia", desc: "Un antiguo río convertido en un oasis verde de 9 km. La 'autopista verde' para ir a clases a pie o en patinete." }
  ],
  reasons: [
    { title: "Coste de vida un 30% más accesible", desc: "Valencia es notablemente más económica que Madrid o Barcelona. Tu presupuesto rendirá muchísimo más." },
    { title: "Vivienda Estudiantil", desc: "El coste de las habitaciones en pisos compartidos sigue estando muy por debajo de los precios prohibitivos de las grandes capitales." },
    { title: "Distancias humanas", desc: "Es una ciudad plana y compacta. Todo está a un paseo de distancia o a unos minutos en una red de transporte público moderna." },
    { title: "Seguridad Absoluta", desc: "Valencia es una de las ciudades más seguras de toda Europa. Puedes caminar de noche por sus calles con total tranquilidad." }
  ]
};

export const CONOCENOS_CONTENT = {
  historia: "Detrás de Consultoría Ruta Valencia no hay una corporación fría; hay una historia real de dos ingenieros ecuatorianos que, al igual que tú hoy, se atrevieron a soñar en grande. Nosotros somos una pareja de esposos. María y Juan. Teníamos una vida estable en Ecuador, pero siempre compartimos un anhelo profundo: cruzar el mapa para estudiar una maestría en España. Teníamos el destino clarísimo: Valencia, pero lo que no teníamos era un mapa para llegar.",
  elReto: "Cuando empezamos, nos sentimos completamente perdidos. No sabíamos qué universidades elegir, si los másteres eran oficiales o propios, ni cómo calcular los precios o entender las fechas. Si la universidad fue un reto, el proceso del visado fue aún más difícil. Decidimos contratar a un asesor buscando paz mental, pero la experiencia fue frustrante. El golpe final llegó al buscar alojamiento desde la distancia: caímos en una estafa inmobiliaria y perdimos dinero. En ese momento nos hicimos una promesa: 'Vamos a aprender a dominar este sistema a la perfección, y cuando lo logremos, ayudaremos a otros para que nadie tenga que pasar por la soledad que pasamos nosotros.'",
  adventum: "Hoy, la tormenta ya pasó. Terminamos con éxito nuestros estudios y decidimos quedarnos a vivir legalmente en esta maravillosa ciudad. Logramos nuestra meta, pero nunca olvidamos el vértigo de los primeros pasos. Por eso creamos Consultoría Ruta Valencia. No queremos ser tu agencia de trámites; queremos ser tu equipo aliado, tu guía y tu familia de este lado del mundo. Diseñamos este espacio para cuidarte, para proteger tu inversión y tus ilusiones."
};