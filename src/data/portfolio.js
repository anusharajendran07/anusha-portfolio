// ─── PORTFOLIO DATA ───────────────────────────────────────
export const PROFILE = {
  name: 'Anusha R',
  role: 'Full Stack Developer',
  title: 'B.Tech IT Student',
  tagline: 'Building production-grade web applications with a growing passion for AI/ML',
  description: 'Pre-final year B.Tech IT student building production-grade web applications with a growing passion for AI/ML. I turn complex problems into elegant, scalable software.',
  location: 'Puducherry, India',
  email: 'anusha68899@gmail.com',
  github: 'https://github.com/anusharajendran07',
  linkedin: 'https://linkedin.com/in/anusha-rajendran7',
  cgpa: '8.82',
  status: 'Available for Internships & Entry-Level Roles',
};

export const ROLES = [
  'Full Stack Developer',
  'B.Tech IT Student @ SMVEC',
  'Python & FastAPI Enthusiast',
  'Spring Boot + React Builder',
  'AI/ML Explorer',
];

export const ABOUT = {
  summary: 'I\'m Anusha R, a pre-final year B.Tech Information Technology student at Sri Manakula Vinayagar Engineering College, specialising in Advanced Web Development.',
  highlights: [
    'Building full stack web applications that solve real-world problems — from enterprise IT incident management systems to AI-powered civic reporting tools',
    'Care about code quality, clean architecture, and impactful user experiences',
    'Currently expanding horizons into Artificial Intelligence and Machine Learning',
  ],
  stats: [
    { number: '3', label: 'Projects Built' },
    { number: '8.82', label: 'CGPA' },
    { number: '7+', label: 'Certifications' },
    { number: '3', label: 'Hackathons' },
  ],
  info: [
    { key: 'Status', value: 'Available for opportunities', highlight: true },
    { key: 'Location', value: 'Puducherry, India' },
    { key: 'Focus', value: 'Full Stack + AI/ML' },
    { key: 'CGPA', value: '8.82 / 10' },
  ],
};

export const SKILLS = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    category: 'Web Technologies',
    skills: [
      { name: 'React', level: 80 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 78 },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Spring Boot', level: 78 },
      { name: 'FastAPI', level: 70 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      { name: 'MySQL', level: 75 },
      { name: 'Spring Security / JWT', level: 72 },
      { name: 'NLP (Python)', level: 60 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    number: '01',
    title: 'IncidentIQ',
    description: 'A role-based IT helpdesk and incident management system for raising, tracking, and resolving support tickets. Built for enterprise-scale operations with full RBAC.',
    features: [
      'JWT-based auth with Employee, Support Agent & Admin roles',
      'RESTful APIs for ticket creation, assignment & escalation',
      'SLA-based auto-escalation via Spring Boot scheduled tasks',
      'Backend services tested with JUnit & Mockito',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'MySQL', 'REST API'],
    github: 'https://github.com/anusharajendran07',
    demo: null,
  },
  {
    id: 2,
    number: '02',
    title: 'ResolveItAI',
    description: 'A crowdsourced civic issue reporting system built for SIH 2025. Automates complaint tracking and streamlines citizen-to-authority communication using AI.',
    features: [
      'Multi-modal reporting: text, image & location-based',
      'NLP integration for automated issue categorisation',
      'Reduced manual follow-ups between citizens & municipalities',
      'FastAPI backend for high-performance async processing',
    ],
    tech: ['Python', 'FastAPI', 'NLP'],
    github: 'https://github.com/anusharajendran07',
    demo: null,
    event: 'SIH 2025',
  },
  {
    id: 3,
    number: '03',
    title: 'PassKraft',
    description: 'A web-based password generator and real-time strength checker. Helps users create secure, criteria-based passwords with instant visual feedback on strength.',
    features: [
      'Generate passwords by user-defined criteria (length, symbols, etc.)',
      'Real-time strength classification: Weak / Medium / Strong',
      'Clean, responsive UI with instant feedback',
      'Zero-dependency pure frontend implementation',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/anusharajendran07',
    demo: null,
  },
];

export const TIMELINE = [
  {
    date: '2023 – Present',
    title: 'B.Tech Information Technology',
    subtitle: 'Sri Manakula Vinayagar Engineering College, Puducherry',
    description: 'Honours in Advanced Web Development. CGPA: 8.82. Building production-grade full stack applications and exploring AI/ML.',
  },
  {
    date: '2024',
    title: 'AI/ML Virtual Internship',
    subtitle: 'AICTE Eduskills',
    description: 'Completed a structured AI/ML virtual internship programme, gaining hands-on exposure to machine learning workflows and model building.',
  },
  {
    date: '2025',
    title: 'Smart India Hackathon 2025',
    subtitle: 'ResolveItAI — Civic Issue Reporting System',
    description: 'Developed a prototype AI-powered civic issue management system. Integrated NLP, image, and location-based reporting to automate complaint tracking.',
  },
  {
    date: '2024',
    title: 'MathWorks Cody Challenge',
    subtitle: 'Final Round Participant',
    description: 'Advanced to the final round of MathWorks\' Cody coding challenge — a competitive algorithmic problem-solving event.',
  },
  {
    date: '2024',
    title: 'Flipkart GRiD 6.0',
    subtitle: 'Software Development Track — Level 1',
    description: 'Participated in Flipkart\'s prestigious GRiD engineering challenge in the Software Development track.',
  },
  {
    date: '2022 – 2023',
    title: 'Higher Secondary (Class XII)',
    subtitle: 'St. Joseph of Cluny Higher Secondary School, Puducherry',
    description: 'Scored 86.83% — strong academic foundation leading into engineering.',
  },
];

export const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'MathWorks Cody Challenge — Final Round',
    description: 'Qualified for the final round of MathWorks\' competitive coding challenge, demonstrating strong algorithmic problem-solving skills.',
  },
  {
    icon: '🛒',
    title: 'Flipkart GRiD 6.0 — Level 1',
    description: 'Participated in Flipkart\'s nationally recognised engineering challenge in the Software Development Track.',
  },
  {
    icon: '⚡',
    title: 'MITILENCE Code Debugging',
    description: 'Earned Certificate of Participation in the MITILENCE Code Debugging Event, showcasing sharp debugging and analytical skills.',
  },
  {
    icon: '🇫🇷',
    title: 'DELF A2 — French Language',
    description: 'Certified in French by the Diplôme d\'études en langue française (DELF) at A2 level — demonstrating multilingual communication ability.',
  },
];

export const CERTIFICATIONS = [
  {
    icon: '☁️',
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services Academy',
  },
  {
    icon: '🤖',
    title: 'AWS Generative AI Foundations',
    issuer: 'Amazon Web Services Academy',
  },
  {
    icon: '🔐',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
  },
  {
    icon: '🐍',
    title: 'Python for Data Science',
    issuer: 'NPTEL',
  },
  {
    icon: '🧪',
    title: 'Software Testing',
    issuer: 'NPTEL',
  },
  {
    icon: '🧠',
    title: 'AI/ML Virtual Internship',
    issuer: 'AICTE Eduskills',
  },
  {
    icon: '🇫🇷',
    title: 'DELF A2 — French',
    issuer: 'Diplôme d\'études en langue française',
  },
];

export const LANGUAGES = [
  {
    name: 'English',
    level: 'Professional Working Proficiency',
  },
  {
    name: 'Tamil',
    level: 'Native / Bilingual',
  },
  {
    name: 'French',
    level: 'Limited Working Proficiency',
  },
];

// EmailJS Configuration (Update with your keys from emailjs.com)
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',  // Replace with your EmailJS public key
  SERVICE_ID: 'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
};
