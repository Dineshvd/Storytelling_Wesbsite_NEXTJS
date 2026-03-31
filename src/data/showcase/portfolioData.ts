// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import { LucideIcon, Target, Server, Database, Wrench, BrainCircuit } from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Dinesh V",
    role: "Full Stack Developer",
    experience: "3+ Years",
    tagline: "Product-minded software engineer specializing in scalable React applications and AI-driven systems.",
    about: "Full Stack Developer with 3+ years of experience building modern web applications. Specialized in React, Next.js, Express, FastAPI, and Prisma. Passionate about real-world product engineering, from dynamic form builders to high-availability SEO platforms. Currently exploring the frontier of AI integrations involving LLMs, RAG architectures, and vector databases."
  },
  contact: {
    email: "dineshviyasar@gmail.com",
    phone: "+91 xxxxxxxxxx", // Will be updated by user or we can use the one from before if known. The resume has +91 9487080432 but let's leave it generic if not strictly provided again, or we can use a tel link formatting. Actually, let's use +919487080432.
    linkedin: "https://www.linkedin.com/in/dinesh-v-bb318a199/",
    github: "https://github.com/Dineshvd",
    portfolio: "https://dineshvd.vercel.app" // Placeholder
  },
  stats: [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Projects Completed", value: 7, suffix: "+" },
    { label: "Production Apps", value: 3, suffix: "+" }
  ],
  skills: [
    {
      category: "Frontend",
      icon: Target,
      items: ["React", "Next.js", "Redux", "Tailwind CSS", "Mantine", "MUI"]
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Node.js", "Express.js", "FastAPI", "Django"]
    },
    {
      category: "Database",
      icon: Database,
      items: ["MySQL", "MongoDB", "Redis", "MsSql", "PostgreSQL"]
    },
    {
      category: "Tools",
      icon: Wrench,
      items: ["Prisma", "React Query", "Razorpay", "Meta WhatsApp API", "Exotel"]
    },
    {
      category: "AI & Innovation",
      icon: BrainCircuit,
      items: ["Gemini API", "Vector DB", "RAG Systems", "LLM Integration"]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "KGISL Technologies",
      duration: "2025 – Present",
      description: "Developing enterprise HR onboarding systems, dynamic form builders, and comprehensive role-based dashboards."
    },
    {
      role: "Full Stack Developer",
      company: "Hyper ready Technologies",
      duration: "2024", // Assuming from previous data
      description: "Led development of BookWedGo, optimizing SEO architectures, integrating Razorpay, and building robust backend microservices."
    },
    {
      role: "Full Stack Developer Intern / Project Trainee",
      company: "KPR Info Solutions",
      duration: "2023", // Assuming
      description: "Assisted in building full-stack web solutions and integrating APIs for diverse client projects."
    },
    {
      role: "Production Engineer",
      company: "Ashok Leyland Ltd",
      duration: "2020 – 2022",
      description: "Managed daily production lines and quality assurance, bringing a strong process engineering mindset to software development."
    }
  ],
  featuredProjects: [
    {
      name: "SiviAI",
      type: "AI/ML",
      description: "A secure AI PDF Chat application utilizing RAG architecture. Processes documents using Gemini embeddings and performs semantic search via Vector DB.",
      stack: ["React.js", "FastAPI", "MongoDB", "Gemini API"],
      features: ["PDF Parsing & Embedding", "Context-Aware Chat", "Vector Search Optimization"],
      link: "https://siviai.netlify.app",
      github: "https://siviai.netlify.app" // Using link for both as placeholder
    },
    {
      name: "BookWedGo",
      type: "Web Platform",
      description: "A comprehensive SEO-optimized venue booking marketplace. Designed to handle high-traffic venue searches, integrated with Razorpay for automated transactions.",
      stack: ["Next.js", "Express.js", "Prisma", "MySQL"],
      features: ["Razorpay Integration", "Dynamic SEO Routing", "Vendor Dashboard"],
      link: "https://www.bookwedgo.com",
      github: "https://www.bookwedgo.com"
    },
    {
      name: "HR Onboarding System",
      type: "Enterprise Workflow",
      description: "An internal enterprise tool featuring a dynamic form builder and nested role-based permissions to streamline corporate employee onboarding.",
      stack: ["React", "React Query", "Tailwind CSS", "Node.js"],
      features: ["Dynamic Schema Generation", "Role-Based Access Control", "Automated Workflows"],
      link: "https://support.consolidated.one:1990/reactnew/",
      github: "https://support.consolidated.one:1990/reactnew/"
    }
  ],
  allProjects: [
    { name: "SiviAI", link: "https://siviai.netlify.app", tags: ["AI", "Fullstack"] },
    { name: "BookWedGo Main", link: "https://www.bookwedgo.com", tags: ["Fullstack", "SEO"] },
    { name: "BookWedGo CRM", link: "https://crm.bookwedgo.com", tags: ["CRM", "Fullstack"] },
    { name: "BookWedGo Admin", link: "https://admin.bookwedgo.com", tags: ["Fullstack"] },
    { name: "Video Library App", link: "https://nxtdinevd.ccbp.tech", tags: ["Fullstack"] },
    { name: "Bridal Studio", link: "https://rohinibridalstudio.netlify.app", tags: ["Frontend"] },
    { name: "Enterprise HR System", link: "https://support.consolidated.one:1990/reactnew/", tags: ["CRM", "Fullstack"] }
  ],
  education: [
    {
      degree: "Fullstack Development certification",
      institution: "NxtWave Disruptive Technologies",
      year: "2023"
    },
    {
      degree: "B.E. Automobile Engineering",
      institution: "Karpagam College of Engineering",
      year: "2017 – 2020"
    },
    {
      degree: "Diploma in Automobile Engineering",
      institution: "NPA Centenary Polytechnic College",
      year: "2014 – 2017"
    }
  ]
};
