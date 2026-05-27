export type CareerSectionLink = {
    label: string
    anchor: string
}

export type CareerContent = {
    slug: string
    title: string
    sourceUrl: string
    summary: string
    focus: string
    shortLabel: string
    sectionLinks: CareerSectionLink[]
    mission: string
    vision: string
    objective: string
    profile: string[]
    titulation: string[]
    scope: string[]
    planNote: string
    planStats: string[]
    analyticSummary: string[]
}

export const careerSectionLinks: CareerSectionLink[] = [
    { label: 'Inicio', anchor: 'inicio' },
    { label: 'Perfil', anchor: 'perfil' },
    { label: 'Titulación', anchor: 'titulacion' },
    { label: 'Ámbito', anchor: 'ambito' },
    { label: 'Plan', anchor: 'plan' },
    { label: 'Analíticos', anchor: 'analiticos' },
]

export const careers: CareerContent[] = [
    {
        slug: 'administracion-de-empresas',
        title: 'Administración de Empresas',
        shortLabel: 'Gestión empresarial y liderazgo',
        sourceUrl: 'https://www.fce.umss.edu.bo/webpage/node/11',
        summary: 'Liderazgo, innovación, investigación y desarrollo sostenible con enfoque analítico y social.',
        focus: 'Gestión empresarial, toma de decisiones, investigación y desarrollo organizacional.',
        sectionLinks: careerSectionLinks,
        mission: 'Formar líderes empresariales íntegros, innovadores y con capacidad de adaptación tecnológica.',
        vision: 'Ser una carrera reconocida por su excelencia académica, investigación y aporte al desarrollo socioeconómico.',
        objective: 'Desarrollar profesionales con conocimientos, habilidades y destrezas para destacar en organizaciones y mercados cambiantes.',
        profile: [
            'Formación humana y técnica con conciencia social y crítica.',
            'Creatividad e iniciativa para resolver problemas de gestión.',
            'Capacidad para tomar decisiones y anticiparse a cambios organizacionales.',
            'Comprensión y transformación de la realidad de las organizaciones.',
            'Impulso al desarrollo sustentable y al trabajo en equipo.',
        ],
        titulation: [
            'Trabajo de investigación',
            'Proyecto de grado',
            'Plan de negocios',
            'Trabajo dirigido',
            'Trabajo de adscripción',
            'Excelencia académica',
            'Examen de grado',
        ],
        scope: [
            'Cargos operativos y ejecutivos en organizaciones públicas y privadas.',
            'Asesoría y consultoría técnico-administrativa.',
            'Investigación y docencia en educación superior.',
            'Organización y gestión de empresas de distinta magnitud.',
        ],
        planNote: 'El archivo base incluye 57 materias y un recorrido por nueve niveles, con materias troncales, administrativas, financieras y de investigación.',
        planStats: ['57 materias', '9 niveles', 'Talleres de titulación'],
        analyticSummary: [
            'Administración general y teoría organizacional',
            'Contabilidad, presupuestos y finanzas',
            'Mercadotecnia, personal y producción',
            'Sistemas administrativos e investigación operativa',
        ],
    },
    {
        slug: 'contaduria-publica',
        title: 'Contaduría Pública',
        shortLabel: 'Contabilidad, auditoría y tributación',
        sourceUrl: 'https://www.fce.umss.edu.bo/webpage/node/34',
        summary: 'Contabilidad, auditoría, tributación y finanzas con fuerte énfasis ético, tecnológico y normativo.',
        focus: 'Transparencia financiera, auditoría, control interno y gestión tributaria.',
        sectionLinks: careerSectionLinks,
        mission: 'Formar contadores públicos íntegros y competentes, con ética, responsabilidad social y dominio normativo.',
        vision: 'Ser reconocidos por formar profesionales competitivos, innovadores y comprometidos con la mejora continua.',
        objective: 'Formar contadores con competencias avanzadas para aplicar normativas nacionales e internacionales y herramientas tecnológicas.',
        profile: [
            'Analítico y crítico para evaluar información financiera y riesgos.',
            'Investigador e innovador con actualización permanente.',
            'Emprendedor, propositivo y orientado a soluciones estratégicas.',
            'Líder y comunicador en contextos públicos, privados y mixtos.',
            'Capaz de trabajar con software contable y automatización de procesos.',
        ],
        titulation: [
            'Trabajo de investigación',
            'Excelencia académica',
            'Trabajo dirigido',
            'Examen de grado',
            'Internado',
            'Adscripción',
        ],
        scope: [
            'Contabilidad general y de costos.',
            'Auditoría financiera, interna, operacional, forense, gubernamental y fiscal.',
            'Tributación, consultoría y control interno.',
            'Tesorería, crédito, cobranzas y gestión de riesgos.',
            'Dirección financiera y análisis de inversiones.',
        ],
        planNote: 'La malla base registra 50 materias, con formación en contabilidad, costos, auditoría, tributación y finanzas.',
        planStats: ['50 materias', 'Enfoque contable y fiscal', 'Taller de titulación'],
        analyticSummary: [
            'Contabilidad I, II y III',
            'Auditoría I, II y tributarias',
            'Costos, gabinete contable y contabilidad sectorial',
            'Administración financiera y presupuestos empresariales',
        ],
    },
    {
        slug: 'economia',
        title: 'Economía',
        shortLabel: 'Política pública y desarrollo',
        sourceUrl: 'https://economia.fce.umss.edu.bo/',
        summary: 'Formación económica crítica para comprender, explicar y proponer soluciones a problemas sociales y productivos.',
        focus: 'Políticas públicas, desarrollo, mercados, investigación y análisis económico.',
        sectionLinks: careerSectionLinks,
        mission: 'Formar economistas eficientes e innovadores, comprometidos con la sociedad y con rigor científico.',
        vision: 'Ser una carrera de prestigio por su actualización académica, producción de conocimiento y aporte al país.',
        objective: 'Formar profesionales con instrumental teórico y técnico, espíritu crítico y capacidad de aportar soluciones a problemas económicos y sociales.',
        profile: [
            'Versatilidad, creatividad, organización, eficiencia y ética profesional.',
            'Capacidad para comprender y explicar la realidad económica de forma crítica y objetiva.',
            'Habilidad para proponer soluciones para instituciones públicas y privadas.',
            'Interés en desarrollo local, microempresa, servicios básicos y ecología.',
            'Liderazgo y capacidad para planear, organizar o dirigir una empresa propia.',
        ],
        titulation: [
            'Trabajo de investigación',
            'Excelencia académica',
            'Trabajo dirigido',
            'Examen de grado',
            'Internado',
            'Adscripción',
        ],
        scope: [
            'Políticas y gestión pública.',
            'Economía internacional, integración y comercio.',
            'Formulación y evaluación de proyectos de inversión y sociales.',
            'Docencia e investigación económica.',
            'Consultoría, análisis y desarrollo local.',
        ],
        planNote: 'La malla base suma 72 materias, con 9 semestres, menciones de especialidad y una ruta amplia de formación económica.',
        planStats: ['72 materias', '9 semestres', 'Tres menciones de especialidad'],
        analyticSummary: [
            'Economía general, microeconomía y macroeconomía',
            'Estadística, econometría y muestreo',
            'Política económica, desarrollo y comercio internacional',
            'Economía financiera, monetaria e institucional',
        ],
    },
    {
        slug: 'ingenieria-comercial',
        title: 'Ingeniería Comercial',
        shortLabel: 'Marketing, dirección y competitividad',
        sourceUrl: 'https://www.fce.umss.edu.bo/webpage/index.php/node/48',
        summary: 'Gestión comercial, marketing, finanzas y dirección de negocios con enfoque en competitividad y decisión estratégica.',
        focus: 'Mercados, dirección empresarial, finanzas, comercio exterior y gestión de marcas.',
        sectionLinks: careerSectionLinks,
        mission: 'Desarrollar profesionales con liderazgo, razonamiento y herramientas para tomar decisiones en mercados cambiantes.',
        vision: 'Ser la carrera líder y de mayor demanda regional y nacional, con profesionales de alto prestigio y enfoque innovador.',
        objective: 'Formar profesionales capaces de aplicar herramientas cuantitativas, administrativas y comerciales para la solución de problemas empresariales.',
        profile: [
            'Maneja técnicas y modelos para decidir bajo riesgo e incertidumbre.',
            'Diseña estrategias de liderazgo y coordinación empresarial.',
            'Participa en grupos multidisciplinarios con ética y solvencia técnica.',
            'Usa instrumentos de inversión, gerencia y marketing para resolver problemas.',
        ],
        titulation: [
            'Trabajo de investigación',
            'Proyecto de grado',
            'Trabajo dirigido',
            'Trabajo de adscripción',
            'Excelencia académica',
        ],
        scope: [
            'Planificación, dirección, coordinación y control de unidades económicas.',
            'Creación, gestión y desarrollo de empresas.',
            'Áreas financieras, comerciales, de gerencia y relaciones humanas.',
            'Consultoría, investigación de mercados, publicidad y comercio exterior.',
        ],
        planNote: 'La malla base reúne 54 materias, con una ruta que mezcla administración, matemáticas, finanzas, marketing y práctica profesional.',
        planStats: ['54 materias', '10 niveles', 'Modalidades de titulación al final'],
        analyticSummary: [
            'Introducción a la ingeniería comercial y teoría organizacional',
            'Estadística, cálculo y econometría',
            'Gestión de la administración, recursos humanos y finanzas',
            'Mercadotecnia, comercio exterior y comportamiento del consumidor',
        ],
    },
    {
        slug: 'ingenieria-financiera',
        title: 'Ingeniería Financiera',
        shortLabel: 'Riesgo, valuación y mercados',
        sourceUrl: 'https://www.fce.umss.edu.bo/webpage/index.php/node/55',
        summary: 'Gestión de riesgo, mercados de capital, regulación y toma de decisiones financieras con fuerte base cuantitativa.',
        focus: 'Finanzas, valuación, simulación, mercado de valores y gestión de instituciones financieras.',
        sectionLinks: careerSectionLinks,
        mission: 'Formar profesionales capaces de integrar análisis financiero, mercados, tecnología y visión estratégica.',
        vision: 'Ser una carrera reconocida por su calidad académica en gestión financiera, innovación y solución de problemas complejos.',
        objective: 'Desarrollar competencias para administrar riesgos, valorar activos, estructurar decisiones financieras y responder a entornos cambiantes.',
        profile: [
            'Analiza información financiera y escenarios de riesgo.',
            'Gestiona créditos, tesorería, mercados y decisiones de inversión.',
            'Aplica herramientas cuantitativas y tecnológicas en finanzas.',
            'Interpreta normativa financiera, regulación y desempeño institucional.',
            'Trabaja con enfoque estratégico en banca, empresa y consultoría.',
        ],
        titulation: [
            'Trabajo de investigación',
            'Excelencia académica',
            'Trabajo dirigido',
            'Examen de grado',
            'Adscripción',
        ],
        scope: [
            'Administración financiera y gestión de créditos.',
            'Mercado de valores, finanzas internacionales y simulación.',
            'Valuación económica de empresas y decisión de inversión.',
            'Sistemas de regulación financiera e instituciones financieras.',
        ],
        planNote: 'La carrera se organiza por semestres con foco en ingeniería financiera, mercado de valores, regulación, simulación y finanzas internacionales.',
        planStats: ['Semestres progresivos', 'Mercado de valores', 'Valuación y regulación'],
        analyticSummary: [
            'Contabilidad financiera y matemáticas financieras',
            'Ingeniería de costos, econometría y teoría monetaria',
            'Administración de créditos, tesorería y gerencia financiera',
            'Mercado de valores, finanzas internacionales y valoración de empresas',
        ],
    },
]

export function getCareerBySlug(slug: string) {
    return careers.find((career) => career.slug === slug)
}
