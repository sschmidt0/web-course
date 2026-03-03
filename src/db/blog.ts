import { BlogPostModel } from "@/common/model";

interface BlogContent {
  title: string;
  description: string;
  posts: BlogPostModel[];
}

export const BLOG_POSTS = {
  spanish: {
    title: "Mi Journey hacia AI Software Development",
    description: "Documentando mi transición de Frontend Developer a AI Software Developer a través del curso de IBM. Aquí encontrarás mis avances, aprendizajes y reflexiones.",
    posts: [
      {
        id: 1,
        title: "¡Iniciando mi aventura en AI con IBM!",
        excerpt: "He comenzado el curso de AI Software Developer de IBM. Es emocionante dar este paso hacia la inteligencia artificial después de años como Frontend Developer.",
        content: "Después de más de 3 años como Frontend Developer, he decidido dar un paso hacia el futuro de la programación: la inteligencia artificial. He comenzado el curso de AI Software Developer de IBM y estoy emocionada de documentar este journey...",
        date: "15 de febrero de 2024",
        tags: ["IBM", "AI", "Career Transition", "Machine Learning"],
        linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7433444413755867136/",
      },
      {
        id: 2,
        title: "Primeros pasos con Python para AI",
        excerpt: "Profundizando en Python y sus librerías específicas para inteligencia artificial. NumPy, Pandas y Matplotlib se están convirtiendo en mis nuevos mejores amigos.",
        content: "Esta semana me he sumergido en el ecosistema de Python para AI. Como vengo de JavaScript y React, es fascinante ver las similitudes y diferencias...",
        date: "22 de febrero de 2024",
        tags: ["Python", "NumPy", "Pandas", "Data Science"],
      },
      {
        id: 3,
        title: "Machine Learning: Conceptos fundamentales",
        excerpt: "Explorando los conceptos base del Machine Learning: supervised learning, unsupervised learning y reinforcement learning. ¡Mi mente explota de emoción!",
        content: "El Machine Learning no es solo código, es una nueva forma de pensar y resolver problemas. Esta semana he estado aprendiendo sobre los diferentes tipos de aprendizaje automático...",
        date: "1 de marzo de 2024",
        tags: ["Machine Learning", "Supervised Learning", "Unsupervised Learning"],
      },
      {
        id: 4,
        title: "Construyendo mi primer modelo de AI",
        excerpt: "¡He creado mi primer modelo de machine learning! Un clasificador de imágenes simple pero funcional. Los errores fueron muchos, pero el aprendizaje, invaluable.",
        content: "Nada se compara con la sensación de ver tu primer modelo de AI funcionando. Aunque sea simple, crear un clasificador de imágenes desde cero ha sido increíble...",
        date: "8 de marzo de 2024",
        tags: ["Deep Learning", "CNN", "Image Classification", "TensorFlow"],
      },
    ],
  },
  english: {
    title: "My Journey towards AI Software Development",
    description: "Documenting my transition from Frontend Developer to AI Software Developer through IBM's course. Here you'll find my progress, learnings, and reflections.",
    posts: [
      {
        id: 1,
        title: "Starting my AI adventure with IBM!",
        excerpt: "I've started IBM's AI Software Developer course. It's exciting to take this step towards artificial intelligence after years as a Frontend Developer.",
        content: "After more than 3 years as a Frontend Developer, I've decided to take a step towards the future of programming: artificial intelligence. I've started IBM's AI Software Developer course and I'm excited to document this journey...",
        date: "February 15, 2024",
        tags: ["IBM", "AI", "Career Transition", "Machine Learning"],
        linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7433444413755867136/",
      },
      {
        id: 2,
        title: "First steps with Python for AI",
        excerpt: "Diving deep into Python and its specific libraries for artificial intelligence. NumPy, Pandas, and Matplotlib are becoming my new best friends.",
        content: "This week I've immersed myself in Python's AI ecosystem. Coming from JavaScript and React, it's fascinating to see the similarities and differences...",
        date: "February 22, 2024",
        tags: ["Python", "NumPy", "Pandas", "Data Science"],
      },
      {
        id: 3,
        title: "Machine Learning: Fundamental concepts",
        excerpt: "Exploring the basic concepts of Machine Learning: supervised learning, unsupervised learning, and reinforcement learning. My mind is exploding with excitement!",
        content: "Machine Learning isn't just code, it's a new way of thinking and solving problems. This week I've been learning about different types of machine learning...",
        date: "March 1, 2024",
        tags: ["Machine Learning", "Supervised Learning", "Unsupervised Learning"],
      },
      {
        id: 4,
        title: "Building my first AI model",
        excerpt: "I've created my first machine learning model! A simple but functional image classifier. The errors were many, but the learning was invaluable.",
        content: "Nothing compares to the feeling of seeing your first AI model working. Even though it's simple, creating an image classifier from scratch has been incredible...",
        date: "March 8, 2024",
        tags: ["Deep Learning", "CNN", "Image Classification", "TensorFlow"],
      },
    ],
  },
  catalan: {
    title: "El meu Journey cap al AI Software Development",
    description: "Documentant la meva transició de Frontend Developer a AI Software Developer a través del curs d'IBM. Aquí trobaràs els meus avenços, aprenentatges i reflexions.",
    posts: [
      {
        id: 1,
        title: "Començant la meva aventura en AI amb IBM!",
        excerpt: "He començat el curs d'AI Software Developer d'IBM. És emocionant fer aquest pas cap a la intel·ligència artificial després d'anys com a Frontend Developer.",
        content: "Després de més de 3 anys com a Frontend Developer, he decidit fer un pas cap al futur de la programació: la intel·ligència artificial. He començat el curs d'AI Software Developer d'IBM i estic emocionada de documentar aquest journey...",
        date: "15 de febrer de 2024",
        tags: ["IBM", "AI", "Career Transition", "Machine Learning"],
        linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7433444413755867136/",
      },
      {
        id: 2,
        title: "Primers passos amb Python per a AI",
        excerpt: "Aprofundint en Python i les seves llibreries específiques per a intel·ligència artificial. NumPy, Pandas i Matplotlib s'estan convertint en els meus nous millors amics.",
        content: "Aquesta setmana m'he submergit en l'ecosistema de Python per a AI. Com vinc de JavaScript i React, és fascinant veure les similituds i diferències...",
        date: "22 de febrer de 2024",
        tags: ["Python", "NumPy", "Pandas", "Data Science"],
      },
      {
        id: 3,
        title: "Machine Learning: Conceptes fonamentals",
        excerpt: "Explorant els conceptes base del Machine Learning: supervised learning, unsupervised learning i reinforcement learning. La meva ment explota d'emoció!",
        content: "El Machine Learning no és només codi, és una nova manera de pensar i resoldre problemes. Aquesta setmana he estat aprenent sobre els diferents tipus d'aprenentatge automàtic...",
        date: "1 de març de 2024",
        tags: ["Machine Learning", "Supervised Learning", "Unsupervised Learning"],
      },
      {
        id: 4,
        title: "Construint el meu primer model d'AI",
        excerpt: "He creat el meu primer model de machine learning! Un classificador d'imatges simple però funcional. Els errors van ser molts, però l'aprenentatge, invaluable.",
        content: "Res es compara amb la sensació de veure el teu primer model d'AI funcionant. Encara que sigui simple, crear un classificador d'imatges des de zero ha estat increïble...",
        date: "8 de març de 2024",
        tags: ["Deep Learning", "CNN", "Image Classification", "TensorFlow"],
      },
    ],
  },
} as const satisfies Record<string, BlogContent>;