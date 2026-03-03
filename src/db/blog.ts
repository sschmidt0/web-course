import { BlogPostModel } from "@/common/model";

interface BlogContent {
  title: string;
  description: string;
  posts: BlogPostModel[];
}

export const BLOG_POSTS = {
  spanish: {
    title: "Mi Journey hacia AI Software Development",
    description:
      "Documentando mi transición de Frontend Developer a AI Software Developer a través del curso de IBM. Aquí encontrarás mis avances, aprendizajes y reflexiones.",
    posts: [
      {
        id: 1,
        title:
          "Iniciando mi camino en Inteligencia Artificial con 'Elementos de IA'",
        excerpt:
          "He comenzado el curso 𝐄𝐥𝐞𝐦𝐞𝐧𝐭𝐨𝐬 𝐝𝐞 𝐈𝐀 (Elements of AI). Una base sólida para entender cómo funciona realmente la inteligencia artificial más allá del hype.",
        content:
          "Después de más de 3 años como Frontend Developer, he decidido profundizar en los fundamentos de la Inteligencia Artificial. He comenzado el curso 'Elementos de IA', una introducción clara y estructurada a conceptos como machine learning, redes neuronales, probabilidad y ética en IA.\n\nMi objetivo no es solo usar herramientas de IA, sino comprender qué ocurre detrás de ellas para poder diseñar mejores productos y experiencias.\n\nEste curso representa el primer paso en mi transición hacia el desarrollo de aplicaciones con IA integrada y arquitecturas RAG y agentic workflows.\n\nComparto este proceso porque creo que aprender en público multiplica el crecimiento.",
        date: "31 de enero de 2026",
        tags: [
          "AI",
          "Elements of AI",
          "Machine Learning",
          "AI Foundations",
          "Algoritmos más usados",
          "Career Growth",
        ],
        linkedinUrl: "",
      },
      {
        id: 2,
        title:
          "Completado: CS50’s Introduction to Programming with Python (Harvard)",
        excerpt:
          "He completado el curso CS50’s Introduction to Programming with Python de Harvard, reforzando mis bases en programación con Python como paso clave hacia el desarrollo de aplicaciones con IA.",
        content:
          "He finalizado el curso 'CS50’s Introduction to Programming with Python' de Harvard. Aunque ya contaba con experiencia como Frontend Developer trabajando con JavaScript y React, quería consolidar una base sólida en Python, el lenguaje dominante en el ecosistema de inteligencia artificial.\n\nDurante el curso he reforzado conceptos fundamentales como estructuras de datos, programación orientada a objetos, manejo de archivos, testing y buenas prácticas de desarrollo.\n\nMás allá de aprender sintaxis, el valor real ha sido pensar en resolución de problemas desde otra perspectiva y preparar el terreno para trabajar con librerías de IA, sistemas RAG y agentes inteligentes.\n\nEste curso ha sido un paso estratégico dentro de mi transición hacia el desarrollo de aplicaciones con inteligencia artificial integrada.",
        date: "28 de febrero de 2026",
        tags: ["Python", "CS50", "Harvard", "AI Foundations", "Programming"],
        linkedinUrl: "",
      },
      {
        id: 3,
        title:
          "Implementé mi primer sistema RAG (Retrieval-Augmented Generation)",
        excerpt:
          "Implementé mi primer sistema RAG en Python, trabajando con un PDF propio, embeddings y Qdrant como base de datos vectorial.",
        content:
          "Implementé mi primer sistema RAG (Retrieval-Augmented Generation) en Python.\n\nEl proyecto está basado en un PDF que he creado específicamente como base de conocimiento. A partir de ese documento realicé:\n\n- Ingesta y chunking inteligente\n- Generación de embeddings\n- Almacenamiento de vectores en Qdrant como base de datos vectorial\n- Recuperación semántica optimizada\n- Prompt estructurado para reducir alucinaciones\n- Respuestas fundamentadas exclusivamente en el contexto\n\nAdemás, trabajé la integración con frontend y streaming para mejorar la experiencia de usuario.\n\nEste proyecto ha sido un paso clave en mi transición hacia el desarrollo de aplicaciones con IA integrada, combinando arquitectura backend, recuperación semántica y diseño orientado a producto.",
        date: "18 de febrero de 2026",
        tags: [
          "RAG",
          "Qdrant",
          "Embeddings",
          "LangChain",
          "Guardrails",
          "Python",
          "AI Applications",
        ],
        linkedinUrl: "",
      },
      {
        id: 4,
        title: "¡Iniciando mi aventura en AI con IBM!",
        excerpt:
          "He comenzado el curso de 𝐈𝐁𝐌 𝐑𝐀𝐆 𝐚𝐧𝐝 𝐀𝐠𝐞𝐧𝐭𝐢𝐜 𝐀𝐈 de IBM. Es emocionante dar este paso hacia la inteligencia artificial después de años como Frontend Developer.",
        content:
          "Después de más de 3 años como Frontend Developer, he decidido dar un paso hacia el futuro de la programación: la inteligencia artificial. He comenzado el curso de AI Software Developer de IBM y estoy emocionada de documentar este journey...",
        date: "15 de febrero de 2024",
        tags: ["IBM", "AI", "Career Transition", "Agentic AI", "LangChain"],
        linkedinUrl:
          "https://www.linkedin.com/feed/update/urn:li:activity:7433444413755867136/",
      },
    ],
  },
  english: {
    title: "My Journey towards AI Software Development",
    description:
      "Documenting my transition from Frontend Developer to AI Software Developer through IBM's course. Here you'll find my progress, learnings, and reflections.",
    posts: [
      {
        id: 1,
        title: "Starting my AI journey with 'Elements of AI'",
        excerpt:
          "I’ve started the 𝐄𝐥𝐞𝐦𝐞𝐧𝐭𝐬 𝐨𝐟 𝐀𝐈 course to build a strong foundation in artificial intelligence beyond just using AI tools.",
        content:
          "After more than 3 years working as a Frontend Developer, I’ve decided to deepen my understanding of Artificial Intelligence fundamentals. I’ve started the 'Elements of AI' course, which provides a structured introduction to machine learning, neural networks, probability, and AI ethics.\n\nMy goal is not just to use AI tools, but to truly understand what happens behind the scenes so I can design better AI-powered products and user experiences.\n\nThis marks the first step in my transition toward building AI-integrated applications, including RAG systems and agentic workflows.\n\nLearning in public helps me stay accountable and connect with others on a similar path.",
        date: "January 31, 2026",
        tags: [
          "AI",
          "Elements of AI",
          "Machine Learning",
          "AI Foundations",
          "Most used algorithms",
          "Career Transition",
        ],
        linkedinUrl: "",
      },
      {
        id: 2,
        title:
          "Completed: CS50’s Introduction to Programming with Python (Harvard)",
        excerpt:
          "I’ve completed Harvard’s CS50’s Introduction to Programming with Python, strengthening my Python foundations as a key step toward building AI-powered applications.",
        content:
          "I’ve successfully completed 'CS50’s Introduction to Programming with Python' from Harvard. Although I already have experience as a Frontend Developer working with JavaScript and React, I wanted to build a strong foundation in Python, the primary language in the AI ecosystem.\n\nThe course reinforced core concepts such as data structures, object-oriented programming, file handling, testing, and clean coding practices.\n\nBeyond syntax, the real value was developing structured problem-solving skills and preparing myself to work confidently with AI libraries, RAG systems, and intelligent agents.\n\nThis course represents a strategic step in my transition toward building AI-integrated applications.",
        date: "February 28, 2026",
        tags: [
          "Python",
          "CS50",
          "Harvard",
          "AI Foundations",
          "Software Development",
        ],
        linkedinUrl: "",
      },
      {
        id: 3,
        title: "Building my first RAG system (Retrieval-Augmented Generation)",
        excerpt:
          "I implemented my first RAG system in Python using a custom PDF, embeddings, and Qdrant as the vector database.",
        content:
          "I implemented my first RAG (Retrieval-Augmented Generation) system in Python.\n\nThe project is based on a PDF I created specifically as a knowledge base. From that document, I implemented:\n\n- Intelligent ingestion and chunking\n- Embedding generation\n- Vector storage using Qdrant as the vector database\n- Optimized semantic retrieval\n- Structured prompting to reduce hallucinations\n- Context-grounded responses\n\nI also integrated frontend streaming to improve the overall user experience.\n\nThis project marks an important milestone in my transition toward building AI-powered applications that combine backend architecture, semantic retrieval, and product-focused design.",
        date: "February 18, 2026",
        tags: [
          "RAG",
          "Qdrant",
          "Embeddings",
          "LangChain",
          "Guardrails",
          "Python",
          "AI Engineering",
        ],
        linkedinUrl: "",
      },
      {
        id: 3,
        title: "Starting my AI adventure with IBM!",
        excerpt:
          "I've started IBM's 𝐈𝐁𝐌 𝐑𝐀𝐆 𝐚𝐧𝐝 𝐀𝐠𝐞𝐧𝐭𝐢𝐜 𝐀𝐈 course. It's exciting to take this step towards artificial intelligence after years as a Frontend Developer.",
        content:
          "After more than 3 years as a Frontend Developer, I've decided to take a step towards the future of programming: artificial intelligence. I've started IBM's AI Software Developer course and I'm excited to document this journey...",
        date: "February 15, 2024",
        tags: ["IBM", "AI", "Career Transition", "Agentic AI", "LangChain"],
        linkedinUrl:
          "https://www.linkedin.com/feed/update/urn:li:activity:7433444413755867136/",
      },
    ],
  },
  catalan: {
    title: "El meu Journey cap al AI Software Development",
    description:
      "Documentant la meva transició de Frontend Developer a AI Software Developer a través del curs d'IBM. Aquí trobaràs els meus avenços, aprenentatges i reflexions.",
    posts: [
      {
        id: 1,
        title:
          "Començant el meu camí en Intel·ligència Artificial amb 'Elements of AI'",
        excerpt:
          "He començat el curs 𝐄𝐥𝐞𝐦𝐞𝐧𝐭𝐬 𝐨𝐟 𝐀𝐈 per construir una base sòlida en intel·ligència artificial més enllà d'utilitzar eines.",
        content:
          "Després de més de 3 anys com a Frontend Developer, he decidit aprofundir en els fonaments de la Intel·ligència Artificial. He començat el curs 'Elements of AI', que ofereix una introducció clara i estructurada a conceptes com el machine learning, les xarxes neuronals, la probabilitat i l’ètica en IA.\n\nEl meu objectiu no és només utilitzar eines d’IA, sinó entendre què hi ha al darrere per poder dissenyar millors productes i experiències amb IA integrada.\n\nAquest és el primer pas en la meva transició cap al desenvolupament d’aplicacions amb IA, sistemes RAG i workflows agentics.\n\nAprendre en públic m’ajuda a créixer i a connectar amb altres professionals que segueixen un camí similar.",
        date: "31 de gener de 2026",
        tags: [
          "IA",
          "Elements of AI",
          "Machine Learning",
          "Fonaments IA",
          "Algoritmes més usats",
          "Transició Professional",
        ],
        linkedinUrl: "",
      },
      {
        id: 2,
        title:
          "Completat: CS50’s Introduction to Programming with Python (Harvard)",
        excerpt:
          "He completat el curs CS50’s Introduction to Programming with Python de Harvard, reforçant les meves bases en Python com a pas clau cap al desenvolupament d’aplicacions amb IA.",
        content:
          "He finalitzat el curs 'CS50’s Introduction to Programming with Python' de Harvard. Tot i tenir experiència com a Frontend Developer treballant amb JavaScript i React, volia consolidar una base sòlida en Python, el llenguatge principal dins l’ecosistema d’intel·ligència artificial.\n\nDurant el curs he reforçat conceptes fonamentals com estructures de dades, programació orientada a objectes, gestió d’arxius, testing i bones pràctiques de desenvolupament.\n\nMés enllà de la sintaxi, el valor real ha estat treballar la resolució estructurada de problemes i preparar-me per desenvolupar sistemes RAG, agents intel·ligents i aplicacions amb IA integrada.\n\nAquest curs representa un pas estratègic dins la meva transició cap al desenvolupament d’aplicacions amb intel·ligència artificial.",
        date: "28 de febrer de 2026",
        tags: ["Python", "CS50", "Harvard", "Fonaments IA", "Programació"],
        linkedinUrl: "",
      },
      {
        id: 3,
        title:
          "Implementant el meu primer sistema RAG (Retrieval-Augmented Generation)",
        excerpt:
          "Vaig implementar el meu primer sistema RAG en Python, utilitzant un PDF propi, embeddings i Qdrant com a base de dades vectorial.",
        content:
          "Vaig implementar el meu primer sistema RAG (Retrieval-Augmented Generation) en Python.\n\nEl projecte es basa en un PDF que he creat específicament com a base de coneixement. A partir d’aquest document vaig implementar:\n\n- Ingesta i fragmentació intel·ligent\n- Generació d’embeddings\n- Emmagatzematge de vectors a Qdrant com a base de dades vectorial\n- Recuperació semàntica optimitzada\n- Prompts estructurats per reduir al·lucinacions\n- Respostes fonamentades exclusivament en el context\n\nTambé vaig integrar streaming al frontend per millorar l’experiència d’usuari.\n\nAquest projecte representa un pas important en la meva transició cap al desenvolupament d’aplicacions amb IA integrada, combinant arquitectura backend, recuperació semàntica i disseny orientat a producte.",
        date: "18 de febrer de 2026",
        tags: [
          "RAG",
          "Qdrant",
          "Embeddings",
          "LangChain",
          "Guardrails",
          "Python",
          "Enginyeria IA",
        ],
        linkedinUrl: "",
      },
      {
        id: 1,
        title: "Començant la meva aventura en AI amb IBM!",
        excerpt:
          "He començat el curs d'𝐈𝐁𝐌 𝐑𝐀𝐆 𝐚𝐧𝐝 𝐀𝐠𝐞𝐧𝐭𝐢𝐜 𝐀𝐈 d'IBM. És emocionant fer aquest pas cap a la intel·ligència artificial després d'anys com a Frontend Developer.",
        content:
          "Després de més de 3 anys com a Frontend Developer, he decidit fer un pas cap al futur de la programació: la intel·ligència artificial. He començat el curs d'AI Software Developer d'IBM i estic emocionada de documentar aquest journey...",
        date: "15 de febrer de 2024",
        tags: ["IBM", "AI", "Career Transition", "Agentic AI", "LangChain"],
        linkedinUrl:
          "https://www.linkedin.com/feed/update/urn:li:activity:7433444413755867136/",
      },
    ],
  },
} as const satisfies Record<string, BlogContent>;
