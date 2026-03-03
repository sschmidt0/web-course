interface ChatbotResponse {
  keywords: string[];
  response: string;
}

interface ChatbotContent {
  title: string;
  subtitle: string;
  welcomeMessage: string;
  defaultResponse: string;
  responses: ChatbotResponse[];
}

export const CHATBOT_RESPONSES = {
  spanish: {
    title: "Chat con Sarah",
    subtitle: "¡Pregúntame cualquier cosa!",
    welcomeMessage: "¡Hola! 👋 Soy el asistente virtual de Sarah. Puedo responder preguntas sobre su experiencia, skills, proyectos y trayectoria profesional. ¿En qué te puedo ayudar?",
    defaultResponse: "Esa es una pregunta interesante. Te recomiendo contactar directamente con Sarah para obtener más información específica. ¿Hay algo más sobre su experiencia profesional o skills en lo que te pueda ayudar?",
    responses: [
      {
        keywords: ["experiencia", "años", "trabajar", "trabajo", "profesional"],
        response: "Sarah tiene más de 3 años de experiencia como Frontend Developer. Ha trabajado en empresas como adesso Spain, Volkswagen Digital Hub, Seat:Code y Flykube. Además, cuenta con más de 10 años de experiencia como profesora de idiomas, incluyendo 6.5 años en la Universidad de Barcelona."
      },
      {
        keywords: ["tecnologías", "skills", "programación", "lenguajes", "tech", "stack"],
        response: "Sarah domina HTML5, CSS3, JavaScript, React, TypeScript, NextJS y React Native. Actualmente está ampliando sus conocimientos hacia AI con Python, TensorFlow y Machine Learning como parte de su transición hacia AI Software Developer en el programa de IBM."
      },
      {
        keywords: ["ai", "inteligencia artificial", "machine learning", "ibm", "curso y transicion"],
        response: "¡Exacto! Sarah está en proceso de transición de Frontend Developer a AI Software Developer. Está cursando el programa de AI Software Developer de IBM, donde está aprendiendo Python, TensorFlow, Machine Learning y Data Science. Puedes seguir su progreso en la sección de Blog de esta web."
      },
      {
        keywords: ["educación", "estudios", "universidad", "formación", "títulos"],
        response: "Sarah tiene una sólida formación académica: Licenciatura en Filología Hispánica e Inglesa, Doctorado en Filología Hispánica, Máster en Aplicaciones Multimedia, y certificaciones en desarrollo web. También posee el examen estatal alemán para enseñanza (1. Staatsexamen)."
      },
      {
        keywords: ["contacto", "contactar", "email", "linkedin", "github", "redes"],
        response: "Puedes contactar con Sarah a través de la sección 'Contacto' de esta web, o conectar con ella en LinkedIn (/in/sschmidt0/) y GitHub (/sschmidt0/). ¡Estará encantada de conversar contigo sobre desarrollo web, AI o oportunidades profesionales!"
      },
      {
        keywords: ["proyectos", "portfolio", "trabajos", "ejemplos"],
        response: "Sarah ha trabajado en diversos proyectos frontend en empresas tecnológicas importantes. También imparte cursos de desarrollo web, como el que puedes encontrar en la sección 'Curso Web' de esta página. Para ver ejemplos específicos de su trabajo, te recomiendo contactarla directamente."
      },
      {
        keywords: ["enseñanza", "profesora", "cursos", "enseñar", "docencia"],
        response: "Sarah combina desarrollo con enseñanza. Ha sido profesora de alemán durante 6.5 años en la Universidad de Barcelona y actualmente enseña desarrollo web. Su experiencia educativa le permite explicar conceptos técnicos complejos de manera clara y estructurada."
      },
      {
        keywords: ["frontend", "react", "javascript", "css", "html", "web"],
        response: "Como Frontend Developer, Sarah se especializa en crear interfaces de usuario modernas y funcionionales usando React, TypeScript y NextJS. Su enfoque combina buenas prácticas de desarrollo con una atención especial a la experiencia de usuario y accesibilidad."
      },
      {
        keywords: ["idiomas", "inglés", "alemán", "español", "catalán", "languages"],
        response: "Sarah es políglota: domina español, inglés, alemán y catalán. Esta habilidad multilingüe es una ventaja tanto en su trabajo de desarrollo (documentación, equipos internacionales) como en su experiencia docente previa."
      },
      {
        keywords: ["barcelona", "españa", "ubicación", "donde", "location"],
        response: "Sarah está basada en Barcelona, España. Ha trabajado tanto de forma presencial como remota con equipos diversos, y tiene experiencia colaborando con empresas españolas e internacionales."
      },
      {
        keywords: ["futuro", "objetivos", "planes", "goals", "siguiente"],
        response: "Sarah está enfocada en su transición hacia AI Software Developer, combinando su experiencia en frontend con conocimientos de inteligencia artificial. Su objetivo es estar en la vanguardia del desarrollo de aplicaciones web potenciadas por AI."
      },
      {
        keywords: ["hola", "hi", "hello", "buenos días", "buenas tardes"],
        response: "¡Hola! 😊 ¡Qué gusto que estés aquí! Soy el asistente de Sarah y estoy aquí para contarte todo sobre su experiencia y skills. ¿Qué te gustaría saber sobre ella?"
      },
      {
        keywords: ["blog", "actualizaciones", "linkedin", "posts", "IBM"],
        response: "En la sección Blog de esta web, Sarah documenta su journey hacia AI Software Development con IBM. Publica actualizaciones regulares sobre su progreso, aprendizajes en Python, Machine Learning y Data Science. ¡Es muy inspirador seguir su transición profesional!"
      }
    ]
  },
  english: {
    title: "Chat with Sarah",
    subtitle: "Ask me anything!",
    welcomeMessage: "Hello! 👋 I'm Sarah's virtual assistant. I can answer questions about her experience, skills, projects, and professional journey. How can I help you?",
    defaultResponse: "That's an interesting question. I recommend contacting Sarah directly for more specific information. Is there anything else about her professional experience or skills I can help you with?",
    responses: [
      {
        keywords: ["experience", "years", "work", "professional", "career"],
        response: "Sarah has over 3 years of experience as a Frontend Developer. She has worked at companies like adesso Spain, Volkswagen Digital Hub, Seat:Code, and Flykube. Additionally, she has over 10 years of experience as a language teacher, including 6.5 years at the University of Barcelona."
      },
      {
        keywords: ["technologies", "skills", "programming", "languages", "tech", "stack"],
        response: "Sarah masters HTML5, CSS3, JavaScript, React, TypeScript, NextJS, and React Native. Currently, she's expanding her knowledge towards AI with Python, TensorFlow, and Machine Learning as part of her transition to AI Software Developer through IBM's program."
      },
      {
        keywords: ["ai", "artificial intelligence", "machine learning", "ibm", "course", "transition"],
        response: "Exactly! Sarah is transitioning from Frontend Developer to AI Software Developer. She's enrolled in IBM's AI Software Developer program, where she's learning Python, TensorFlow, Machine Learning, and Data Science. You can follow her progress in the Blog section of this website."
      },
      {
        keywords: ["education", "studies", "university", "training", "degrees"],
        response: "Sarah has solid academic training: degrees in Spanish and English Philology, PhD in Spanish Philology, Master's in Multimedia Applications, and web development certifications. She also holds the German state teaching exam (1. Staatsexamen)."
      },
      {
        keywords: ["contact", "email", "linkedin", "github", "social"],
        response: "You can contact Sarah through the 'Contact' section of this website, or connect with her on LinkedIn (/in/sschmidt0/) and GitHub (/sschmidt0/). She'd be happy to chat about web development, AI, or professional opportunities!"
      },
      {
        keywords: ["projects", "portfolio", "work", "examples"],
        response: "Sarah has worked on various frontend projects at important tech companies. She also teaches web development courses, like the one you can find in the 'Web Course' section of this page. For specific examples of her work, I recommend contacting her directly."
      },
      {
        keywords: ["teaching", "teacher", "courses", "education", "instructor"],
        response: "Sarah combines development with teaching. She was a German teacher for 6.5 years at the University of Barcelona and currently teaches web development. Her educational experience allows her to explain complex technical concepts clearly and structured."
      },
      {
        keywords: ["frontend", "react", "javascript", "css", "html", "web"],
        response: "As a Frontend Developer, Sarah specializes in creating modern and functional user interfaces using React, TypeScript, and NextJS. Her approach combines development best practices with special attention to user experience and accessibility."
      },
      {
        keywords: ["languages", "english", "german", "spanish", "catalan", "multilingual"],
        response: "Sarah is multilingual: she's fluent in Spanish, English, German, and Catalan. This multilingual ability is an advantage both in her development work (documentation, international teams) and her previous teaching experience."
      },
      {
        keywords: ["barcelona", "spain", "location", "where", "based"],
        response: "Sarah is based in Barcelona, Spain. She has worked both on-site and remotely with diverse teams, and has experience collaborating with Spanish and international companies."
      },
      {
        keywords: ["future", "goals", "plans", "objectives", "next"],
        response: "Sarah is focused on her transition towards AI Software Developer, combining her frontend experience with artificial intelligence knowledge. Her goal is to be at the forefront of AI-powered web application development."
      },
      {
        keywords: ["hello", "hi", "good morning", "good afternoon"],
        response: "Hello! 😊 Great to have you here! I'm Sarah's assistant and I'm here to tell you all about her experience and skills. What would you like to know about her?"
      },
      {
        keywords: ["blog", "updates", "linkedin", "posts", "IBM"],
        response: "In the Blog section of this website, Sarah documents her journey towards AI Software Development with IBM. She publishes regular updates about her progress, learnings in Python, Machine Learning, and Data Science. It's very inspiring to follow her professional transition!"
      }
    ]
  },
  catalan: {
    title: "Xat amb la Sarah",
    subtitle: "Pregunta'm el que vulguis!",
    welcomeMessage: "Hola! 👋 Sóc l'assistant virtual de la Sarah. Puc respondre preguntes sobre la seva experiència, skills, projectes i trajectòria professional. En què et puc ajudar?",
    defaultResponse: "Aquesta és una pregunta interessant. Et recomano contactar directament amb la Sarah per obtenir més informació específica. Hi ha alguna cosa més sobre la seva experiència professional o skills en què et pugui ajudar?",
    responses: [
      {
        keywords: ["experiència", "anys", "treballar", "treball", "professional"],
        response: "La Sarah té més de 3 anys d'experiència com a Frontend Developer. Ha treballat a empreses com adesso Spain, Volkswagen Digital Hub, Seat:Code i Flykube. A més, compta amb més de 10 anys d'experiència com a professora d'idiomes, incloent 6.5 anys a la Universitat de Barcelona."
      },
      {
        keywords: ["tecnologies", "skills", "programació", "llenguatges", "tech", "stack"],
        response: "La Sarah domina HTML5, CSS3, JavaScript, React, TypeScript, NextJS i React Native. Actualment està ampliant els seus coneixements cap a AI amb Python, TensorFlow i Machine Learning com a part de la seva transició cap a AI Software Developer al programa d'IBM."
      },
      {
        keywords: ["ai", "intel·ligència artificial", "machine learning", "ibm", "curs", "transició"],
        response: "Exacte! La Sarah està en procés de transició de Frontend Developer a AI Software Developer. Està cursant el programa d'AI Software Developer d'IBM, on està aprenent Python, TensorFlow, Machine Learning i Data Science. Pots seguir el seu progrés a la secció de Blog d'aquesta web."
      },
      {
        keywords: ["educació", "estudis", "universitat", "formació", "títols"],
        response: "La Sarah té una sòlida formació acadèmica: Llicenciatura en Filologia Hispànica i Anglesa, Doctorat en Filologia Hispànica, Màster en Aplicacions Multimèdia, i certificacions en desenvolupament web. També posseeix l'examen estatal alemany per a ensenyament (1. Staatsexamen)."
      },
      {
        keywords: ["contacte", "contactar", "email", "linkedin", "github", "xarxes"],
        response: "Pots contactar amb la Sarah a través de la secció 'Contacte' d'aquesta web, o connectar amb ella a LinkedIn (/in/sschmidt0/) i GitHub (/sschmidt0/). Estarà encantada de conversar amb tu sobre desenvolupament web, AI u oportunitats professionals!"
      },
      {
        keywords: ["projectes", "portfolio", "treballs", "exemples"],
        response: "La Sarah ha treballat en diversos projectes frontend a empreses tecnològiques importants. També imparteix cursos de desenvolupament web, com el que pots trobar a la secció 'Curs Web' d'aquesta pàgina. Per veure exemples específics del seu treball, et recomano contactar-la directament."
      },
      {
        keywords: ["ensenyament", "professora", "cursos", "ensenyar", "docència"],
        response: "La Sarah combina desenvolupament amb ensenyament. Ha estat professora d'alemany durant 6.5 anys a la Universitat de Barcelona i actualment ensenya desenvolupament web. La seva experiència educativa li permet explicar conceptes tècnics complexos de manera clara i estructurada."
      },
      {
        keywords: ["frontend", "react", "javascript", "css", "html", "web"],
        response: "Com a Frontend Developer, la Sarah s'especialitza en crear interfícies d'usuari modernes i funcionals usant React, TypeScript i NextJS. El seu enfocament combina bones pràctiques de desenvolupament amb una atenció especial a l'experiència d'usuari i accessibilitat."
      },
      {
        keywords: ["idiomes", "anglès", "alemany", "espanyol", "català", "llengües"],
        response: "La Sarah és poliglota: domina espanyol, anglès, alemany i català. Aquesta habilitat multilingüe és un avantatge tant en el seu treball de desenvolupament (documentació, equips internacionals) com en la seva experiència docent prèvia."
      },
      {
        keywords: ["barcelona", "espanya", "ubicació", "on", "localització"],
        response: "La Sarah està basada a Barcelona, Espanya. Ha treballat tant de forma presencial com remota amb equips diversos, i té experiència col·laborant amb empreses espanyoles i internacionals."
      },
      {
        keywords: ["futur", "objectius", "plans", "metes", "següent"],
        response: "La Sarah està enfocada en la seva transició cap a AI Software Developer, combinant la seva experiència en frontend amb coneixements d'intel·ligència artificial. El seu objectiu és estar a la vanguardia del desenvolupament d'aplicacions web potenciades per AI."
      },
      {
        keywords: ["hola", "bon dia", "bona tarda"],
        response: "Hola! 😊 Quin gust que siguis aquí! Sóc l'assistent de la Sarah i estic aquí per explicar-te tot sobre la seva experiència i skills. Què t'agradaria saber sobre ella?"
      },
      {
        keywords: ["blog", "actualitzacions", "linkedin", "posts", "IBM"],
        response: "A la secció Blog d'aquesta web, la Sarah documenta el seu journey cap a AI Software Development amb IBM. Publica actualitzacions regulars sobre el seu progrés, aprenentatges en Python, Machine Learning i Data Science. És molt inspirador seguir la seva transició professional!"
      }
    ]
  }
} as const satisfies Record<string, ChatbotContent>;