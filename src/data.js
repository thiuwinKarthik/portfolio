export const profile = {
  name: 'Thiruwin Karthik',
  role: 'Software Engineer in progress',
  tagline: 'Building useful software at the intersection of product, backend systems, and applied AI.',
  intro: 'I am a Computer Science engineering student who enjoys turning complicated workflows into clear, dependable products. My work spans full-stack applications, REST APIs, retrieval systems, and practical developer tooling.',
  email: 'thiruwinkarthik4@gmail.com',
  github: 'https://github.com/thiuwinKarthik',
  linkedin: 'https://linkedin.com/in/thiruwin-karthik',
};

export const projects = [
  {
    name: 'Enterprise Hybrid RAG',
    label: 'AI systems / platform',
    description: 'A multi-service document intelligence platform that combines dense vector search, BM25 retrieval, rank fusion, reranking, citations, and confidence signals for grounded answers.',
    tags: ['Python', 'FastAPI', 'Qdrant', 'BM25', 'PostgreSQL', 'React'],
    github: 'https://github.com/thiuwinKarthik/Hybrid_RAG_Service',
    demo: null,
    accent: 'teal',
    number: '01',
  },
  {
    name: 'Loan Maker',
    label: 'Full-stack application',
    description: 'A loan application and management platform with role-based workflows, JWT security, AI-assisted recommendations, retrieval-backed guidance, and an admin review surface.',
    tags: ['React', 'Spring Boot', 'FastAPI', 'MySQL', 'JWT', 'Docker'],
    github: 'https://github.com/thiuwinKarthik/Loan-Maker',
    demo: 'https://loan-maker.vercel.app',
    accent: 'coral',
    number: '02',
  },
  {
    name: 'Domain Analyzer',
    label: 'Local AI / data product',
    description: 'A local company intelligence system that extracts structured profiles from offline HTML, classifies industries with SIC mappings, and renders connected company knowledge graphs.',
    tags: ['Python', 'FastAPI', 'Ollama', 'React', 'NetworkX', 'pandas'],
    github: 'https://github.com/thiuwinKarthik/DomainAnalyzer',
    demo: null,
    accent: 'gold',
    number: '03',
  },
];

export const skills = [
  { title: 'Languages', items: ['Java', 'Python', 'JavaScript', 'C'] },
  { title: 'Frontend', items: ['React', 'Vite', 'React Router', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Spring Boot', 'FastAPI', 'Node.js', 'Express'] },
  { title: 'Data & AI', items: ['MySQL', 'PostgreSQL', 'Qdrant', 'Redis', 'RAG'] },
  { title: 'DevOps', items: ['Docker', 'Docker Compose', 'Maven', 'npm'] },
  { title: 'Engineering', items: ['REST APIs', 'JWT', 'Git', 'Testing', 'System design'] },
];

export const experience = [
  {
    role: 'Web Development Intern',
    company: 'Neha Solutions · Pollachi',
    period: 'June 2025',
    detail: 'Worked on the development of web-based applications and strengthened practical frontend and backend development skills.',
    stack: ['Web development', 'Collaboration', 'Delivery'],
  },
  {
    role: 'Computer Science Engineering Student',
    company: 'Dr. Mahalingam College of Engineering and Technology',
    period: '2023 — present',
    detail: 'Building a practical foundation in software engineering through product projects, coding events, AI experiments, and full-stack systems.',
    stack: ['Computer science', 'Problem solving', 'Applied AI'],
  },
];
