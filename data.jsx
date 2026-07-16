const skills = {
  frontend: {
    proficient: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"],
    intermediate: ["Vite", "Frontend Security"],
    tools: ["Netlify"]
  },
  backend: {
    proficient: ["Python", "Django", "PostgreSQL"],
    intermediate: ["REST APIs", "Authentication"],
    tools: ["Render"]
  },
  mobile: {
    proficient: ["Android Development"],
    intermediate: ["AI Integration", "App Architecture"]
  },
  ai_ml: {
    proficient: ["Machine Learning"],
    intermediate: ["Artificial Intelligence", "AI Services"]
  },
  other: {
    proficient: ["C++", "Full-Stack Development"],
    tools: ["Git", "Command Line"]
  }
};
const aboutMyself = 'A self-taught developer who began the programming journey in 2022, building foundational skills in C++ before transitioning to frontend development with HTML, CSS, and JavaScript. Over the years, I expanded into full-stack development using React, Django, and PostgreSQL, deployed multiple projects on Netlify and Render, and later ventured into AI/ML and Android development. Currently, I am honing my expertise in building AI-powered applications, including an AI phone assistant for Android, while continuously diversifying my skills across web, mobile, and emerging technologies.'
  // Projects Data

  const journey = [
  {
    date: "2022-01",
    description: "Began programming journey after completing high school. Acquired foundational skills in computer package (basic computer literacy and office tools)"
  },
  {
    date: "2022-12",
    description: "Developed a strong interest in C++ programming language. Started building projects in C++ purely for leisure and fun, exploring its capabilities"
  },
  {
    date: "2023-04",
    description: "Completed the C++ exploration phase after several months of building projects for enjoyment"
  },
  {
    date: "2023-07",
    description: "Introduced to frontend development by my high school teacher. Started learning HTML from scratch"
  },
  {
    date: "2023-07",
    description: "Progressed to learning CSS after completing HTML fundamentals"
  },
  {
    date: "2023-08",
    description: "Began learning JavaScript. This phase took approximately 2 months to complete"
  },
  {
    date: "2023-09",
    description: "Completed JavaScript learning. Developed projects specifically to strengthen and solidify understanding of web development concepts"
  },
  {
    date: "2023-08",
    description: "Got exposed to roadmaps.sh platform which opened up the world of frameworks. Chose React as the primary framework to learn, aiming to absorb as much knowledge as possible"
  },
  {
    date: "2023-08",
    description: "Learned TailwindCSS for styling, Vite for build tooling, and studied CSS best practices. Also explored frontend security practices to build safer applications"
  },
  {
    date: "2024-01",
    description: "Started learning Python programming language at the beginning of the year"
  },
  {
    date: "2024-01",
    description: "Dived into Django framework together with PostgreSQL database. This learning phase continued for about 4 months"
  },
  {
    date: "2024-05",
    description: "Completed Django and PostgreSQL learning journey"
  },
  {
    date: "2024-06",
    description: "Proceeded to build more full-stack websites. Focused on expanding practical understanding in full-stack development through hands-on projects"
  },
  {
    date: "2024-12",
    description: "Developed multiple projects throughout the year. Successfully deployed them on Netlify (frontend) and Render (backend/full-stack)"
  },
  {
    date: "2025-01",
    description: "Took a new direction and chose to learn about AI. Goal was to build full-stack AI web applications integrating artificial intelligence"
  },
  {
    date: "2025-01",
    description: "Gained comprehensive understanding of Machine Learning (ML) and AI services. This learning continued for the entire year"
  },
  {
    date: "2025-09",
    description: "Three months before end of 2025, developed interest in Android development. Started learning how Android applications work, their architecture and components"
  },
  {
    date: "2025-12",
    description: "Completed foundational Android development learning phase"
  },
  {
    date: "2026-01",
    description: "Proceeded with building an AI phone assistant for Android that could mimic SIRI AI capabilities"
  },
  {
    date: "2026-06",
    description: "First version of the AI phone assistant was released after 6 months of intensive development work"
  },
  {
    date: "2026-07",
    description: "From the 7th month of 2026 to present: Focused on expanding and strengthening understanding across software development. Diversifying skills and deepening knowledge in multiple areas including web, AI, mobile, and full-stack development"
  }
];

  const projects = [
     {
      'E-soie',
      'e-commerce website',
       "React • Django • PostgreSQL",
       ' a website for selling wigs with complete jwt auth system and secure payment sytem and complete backend',
      url: 'https://e-soie.netlify.app/',
      githug : 'https://github.com/001kenji/soie-frontend',
      tech  ['React', 'Django', 'PostgreSQL', 'Tailwind']

    },
    {
      'AI-Video-Creator',
      'About
A cutting-edge tool that transforms your audio or images into stunning, professional-quality videos with rich editing features. BY USE OF AI',
      tech  ['React', 'Django', 'PostgreSQL', 'Tailwind'],
       "React • Django • PostgreSQL",
       github : 'https://github.com/001kenji/AI-Video-Creator',

    },
    {
      'Ni-know',
      'a numerology webiste',
      'Discover your complete Pythagorean numerology chart — your soul, personality, life path, lucky numbers, love matches, and the hidden power of your name.',
      url : 'https://ni-know.netlify.app/',
      gitub : 'https://github.com/001kenji/Numerology',
      tech : ['react','3djs','tailwindcss']
    }
    {
      title: "EduLearn Pro",
      category: "Learning Platform",
      techSummary: "React • Django • PostgreSQL",
      description: "Modern online learning platform with document-based courses, progress tracking, and interactive learning tools.",
      image: EduLearnImg,
      tech: ['React', 'Django', 'PostgreSQL', 'Redis', 'Tailwind'],
      github: "https://github.com/001kenji/E-Learning-platform.git",
      live: "https://e-leraning-platform.netlify.app/"
    },
    {
      title: "Kenji Assistant",
      category: "AI Android App",
      techSummary: "Kotlin • Jetpack Compose • AI",
      description: "Intelligent voice assistant for Android with voice-controlled device interaction and natural language processing.",
      image: KenjiAssistantImg,
      tech: ['Kotlin', 'Jetpack Compose', 'TensorFlow', 'Android'],
      github: "https://github.com/001kenji/Assistant-AI-Code",
      live: "https://github.com/001kenji/Assistant-AI-Code/releases/download/v1.0/base.apk"
    },
    {
      title: "Document Translator AI",
      category: "AI Translation Tool",
      techSummary: "Python • OCR • ML",
      description: "AI-powered document translation tool that converts text from images/PDFs into multiple languages with high accuracy.",
      image: DocTranslatorImg,
      tech: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
      github: "https://github.com/001kenji/document-translator-ai",
      live: "https://document-ai-translator.netlify.app/"
    },
    {
      title: "KCSE Topic Predictor AI",
      category: "Educational AI",
      techSummary: "Python • ML • Data Analysis",
      description: "Analyzes 20+ years of KCSE past papers to predict likely exam topics using machine learning patterns.",
      image: KCSEPredictorImg,
      tech: ['Python', 'Scikit-learn', 'Pandas', 'FastAPI'],
      github: "https://github.com/001kenji/KCSE-predictor.git",
      live: null
    },
    {
      title: "Collaborative Whiteboard",
      category: "Real-time Collaboration",
      techSummary: "React • Fabric.js • WebSockets",
      description: "Real-time collaborative whiteboard with drawing tools, object manipulation, and multi-user synchronization.",
      image: WhiteboardImg,
      tech: ['React', 'Fabric.js', 'WebSockets', 'Node.js'],
      github: "https://github.com/001kenji/Collaborative-whiteboard.git",
      live: "https://whiteboard-meet.netlify.app/"
    },
   
  ];
  const email = 'briannjuguna694@gmail.com'
  const number = "+254723700284"
  const github = "https://github.com/001kenji"
   const socialplatforms = [
    {
      name  :'instagram',
      url : 'https://www.instagram.com/001kenji/'
    },
    {
      name : "linked-in",
      url : 'https://www.linkedin.com/in/brian-njuguna-096895260/',
    },
    {
      name : 'facebook',
      url : 'https://web.facebook.com/profile.php?id=61554162522919'
    }
   ]

  // Contact Info
  const contactInfo = [
    { 
      icon: FaGithub, 
      label: "GitHub", 
      link: "https://github.com/001kenji",
      color: "hover:text-purple-400"
    },
    { 
      icon: FaEnvelope, 
      label: "Email", 
      link: "mailto:briannjuguna694@gmail.com",
      color: "hover:text-red-400"
    },
    { 
      icon: FaFacebookF, 
      label: "Facebook", 
      link: "https://www.facebook.com/profile.php?id=61554162522919",
      color: "hover:text-blue-400"
    },
    { 
      icon: FaPhone, 
      label: "Phone", 
      link: "tel:+254723700284",
      color: "hover:text-green-400"
    }
  ];