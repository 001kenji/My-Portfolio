// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = {
  frontend: {
    label: 'Frontend',
    color: '#2563EB',
    proficient: ['React', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS'],
    intermediate: ['Vite', 'Frontend Security'],
    tools: ['Netlify'],
  },
  backend: {
    label: 'Backend',
    color: '#06B6D4',
    proficient: ['Python', 'Django', 'PostgreSQL'],
    intermediate: ['REST APIs', 'Authentication'],
    tools: ['Render'],
  },
  mobile: {
    label: 'Mobile',
    color: '#10B981',
    proficient: ['Android Development'],
    intermediate: ['AI Integration', 'App Architecture'],
    tools: [],
  },
  ai_ml: {
    label: 'AI / ML',
    color: '#F59E0B',
    proficient: ['Machine Learning'],
    intermediate: ['Artificial Intelligence', 'AI Services'],
    tools: [],
  },
  other: {
    label: 'Other',
    color: '#EF4444',
    proficient: ['C++', 'Full-Stack Development'],
    tools: ['Git', 'Command Line'],
  },
};

// ─── Bio ──────────────────────────────────────────────────────────────────────
export const about = {
  name: 'Brian Njuguna',
  tagline: 'Full-Stack Developer  ·  AI Engineer  ·  Android Builder',
  bio: `A self-taught developer who began the programming journey in 2022, building foundational skills in C++ before transitioning to frontend development with HTML, CSS, and JavaScript. Over the years, I expanded into full-stack development using React, Django, and PostgreSQL, deployed multiple projects on Netlify and Render, and later ventured into AI/ML and Android development. Currently, I am honing my expertise in building AI-powered applications, including an AI phone assistant for Android, while continuously diversifying my skills across web, mobile, and emerging technologies.`,
  // PHOTO: Place your photo at /public/photo.jpg and this path will resolve automatically
  photo: '/photo.jpg',
  highlights: [
    { icon: '🚀', label: 'Started Coding', value: '2022' },
    { icon: '🌐', label: 'Apps Deployed', value: '31+' },
    { icon: '🤖', label: 'AI Projects', value: '11+' },
    { icon: '📱', label: 'Android Apps', value: '2+' },
  ],
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'E-Soie',
    category: 'E-Commerce Platform',
    techSummary: 'React · Django · PostgreSQL',
    description:
      'A full-featured wig e-commerce website with complete JWT authentication, secure payment system, and a robust Django backend.',
    url: 'https://e-soie.netlify.app/',
    github: 'https://github.com/001kenji/soie-frontend',
    tech: ['React', 'Django', 'PostgreSQL', 'TailwindCSS', 'JWT'],
    color: '#2563EB',
  },
  {
    id: 2,
    title: 'AI Video Creator',
    category: 'AI Tool',
    techSummary: 'React · Django · PostgreSQL',
    description:
      'A cutting-edge tool that transforms audio or images into professional-quality videos with rich editing features powered by AI.',
    url: null,
    github: 'https://github.com/001kenji/AI-Video-Creator',
    tech: ['React', 'Django', 'PostgreSQL', 'TailwindCSS', 'AI Services'],
    color: '#06B6D4',
  },
  {
    id: 3,
    title: 'Ni-Know',
    category: 'Numerology Web App',
    techSummary: 'React · Three.js · TailwindCSS',
    description:
      'Discover your complete Pythagorean numerology chart — soul, personality, life path, lucky numbers, love matches, and the hidden power of your name.',
    url: 'https://ni-know.netlify.app/',
    github: 'https://github.com/001kenji/Numerology',
    tech: ['React', 'Three.js', 'TailwindCSS'],
    color: '#10B981',
  },
  {
    id: 4,
    title: 'EduLearn Pro',
    category: 'Learning Platform',
    techSummary: 'React · Django · PostgreSQL',
    description:
      'Modern online learning platform with document-based courses, progress tracking, and interactive learning tools.',
    url: 'https://e-leraning-platform.netlify.app/',
    github: 'https://github.com/001kenji/E-Learning-platform.git',
    tech: ['React', 'Django', 'PostgreSQL', 'Redis', 'TailwindCSS'],
    color: '#F59E0B',
  },
  {
    id: 5,
    title: 'Kenji Assistant',
    category: 'AI Android App',
    techSummary: 'Kotlin · Jetpack Compose · AI',
    description:
      'Intelligent voice assistant for Android with voice-controlled device interaction and natural language processing — think SIRI, built from scratch.',
    url: 'https://github.com/001kenji/Assistant-AI-Code/releases/download/v1.0/base.apk',
    github: 'https://github.com/001kenji/Assistant-AI-Code',
    tech: ['Kotlin', 'Jetpack Compose', 'TensorFlow', 'Android'],
    color: '#EF4444',
  },
  {
    id: 6,
    title: 'Document Translator AI',
    category: 'AI Translation Tool',
    techSummary: 'Python · OCR · ML',
    description:
      'AI-powered tool that converts text from images and PDFs into multiple languages with high accuracy using computer vision.',
    url: 'https://document-ai-translator.netlify.app/',
    github: 'https://github.com/001kenji/document-translator-ai',
    tech: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
    color: '#60A5FA',
  },
  {
    id: 7,
    title: 'KCSE Topic Predictor',
    category: 'Educational AI',
    techSummary: 'Python · ML · Data Analysis',
    description:
      'Analyzes 20+ years of KCSE past papers to predict likely exam topics using machine learning pattern recognition.',
    url: null,
    github: 'https://github.com/001kenji/KCSE-predictor.git',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'FastAPI'],
    color: '#67E8F9',
  },
  {
    id: 8,
    title: 'Collaborative Whiteboard',
    category: 'Real-time Collaboration',
    techSummary: 'React · Fabric.js · WebSockets',
    description:
      'Real-time collaborative whiteboard with drawing tools, object manipulation, and multi-user synchronization via WebSockets.',
    url: 'https://whiteboard-meet.netlify.app/',
    github: 'https://github.com/001kenji/Collaborative-whiteboard.git',
    tech: ['React', 'Fabric.js', 'WebSockets', 'Node.js'],
    color: '#F97316',
  },
];

// ─── Journey ──────────────────────────────────────────────────────────────────
export const journey = [
  {
    date: '2022-01',
    title: 'The Beginning',
    description:
      'Began the programming journey after completing high school. Acquired foundational skills in computer literacy and office tools.',
    icon: '🌱',
  },
  {
    date: '2022-12',
    title: 'C++ Explorer',
    description:
      'Developed a strong interest in C++. Started building projects purely for leisure — exploring algorithms, data structures, and the language\'s raw power.',
    icon: '⚡',
  },
  {
    date: '2023-04',
    title: 'C++ Chapter Closes',
    description:
      'Completed the C++ exploration phase after several months of building projects for enjoyment.',
    icon: '✅',
  },
  {
    date: '2023-07',
    title: 'Frontend Awakening',
    description:
      'Introduced to frontend development by my high school teacher. Started learning HTML from scratch, then progressed to CSS.',
    icon: '🎨',
  },
  {
    date: '2023-08',
    title: 'JavaScript Unlocked',
    description:
      'Began learning JavaScript — a 2-month deep dive that unlocked the real power of the web. Completed it by September.',
    icon: '🔓',
  },
  {
    date: '2023-08',
    title: 'React & the Ecosystem',
    description:
      'Discovered roadmap.sh, chose React as my primary framework. Also learned TailwindCSS, Vite, CSS best practices, and frontend security.',
    icon: '⚛️',
  },
  {
    date: '2024-01',
    title: 'Python & Full-Stack',
    description:
      'Started Python, then immediately dove into Django and PostgreSQL — a 4-month journey that made me a full-stack developer.',
    icon: '🐍',
  },
  {
    date: '2024-06',
    title: 'Building & Deploying',
    description:
      'Spent the rest of the year building full-stack projects and deploying them on Netlify and Render.',
    icon: '🚀',
  },
  {
    date: '2025-01',
    title: 'AI / ML Journey',
    description:
      'Took a bold new direction into Artificial Intelligence and Machine Learning. Spent the year gaining deep understanding of AI services and ML concepts.',
    icon: '🤖',
  },
  {
    date: '2025-09',
    title: 'Android Development',
    description:
      'Developed interest in Android development — started learning app architecture, Jetpack Compose, and Android components.',
    icon: '📱',
  },
  {
    date: '2026-01',
    title: 'AI Phone Assistant',
    description:
      'Started building an AI phone assistant for Android that mimics SIRI capabilities using Kotlin, Jetpack Compose, and AI services.',
    icon: '🎙️',
  },
  {
    date: '2026-06',
    title: 'First Release',
    description:
      'Version 1.0 of the Kenji Assistant was released after 6 months of intensive development — a milestone moment.',
    icon: '🏆',
  },
  {
    date: '2026-07',
    title: 'Expanding Horizons',
    description:
      'Now focused on expanding skills across web, AI, mobile, and full-stack development — continuously growing, always building.',
    icon: '🌍',
  },
];

// ─── Social Platforms ─────────────────────────────────────────────────────────
export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/001kenji',
    icon: 'FaGithub',
    color: '#60A5FA',
    description: 'See my code & projects',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/brian-njuguna-096895260/',
    icon: 'FaLinkedin',
    color: '#0A66C2',
    description: 'Connect professionally',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/001kenji/',
    icon: 'FaInstagram',
    color: '#E1306C',
    description: 'Follow my journey',
  },
  {
    name: 'Facebook',
    url: 'https://web.facebook.com/profile.php?id=61554162522919',
    icon: 'FaFacebook',
    color: '#1877F2',
    description: 'Find me on Facebook',
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────
export const contact = {
  whatsapp: '+254723700284',
  phone: '+254723700284',
  email: 'briannjuguna694@gmail.com',
};
