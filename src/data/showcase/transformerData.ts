const CURRENT_MODULE = "showcase"; // enforce user rule

export const transformerData = {
  totalFrames: 42,
  imageFolder: '/images/sequence/',
  scrollLength: '500vh',
  phases: {
    hero: {
      title: "DINESH V",
      subtitle: "FULL STACK DEVELOPER",
      range: [0, 0.3]
    },
    transformation: {
      systemText: "SYSTEM: INITIALIZING",
      statusText: "LOADING PROJECTS...",
      range: [0.3, 0.75]
    },
    arrival: {
      finalText: "PORTFOLIO UNLOCKED",
      signature: "ACCESS GRANTED",
      range: [0.75, 1.0]
    }
  }
};

export const portfolioData = {
  personal: {
    name: "Dinesh V",
    role: "Full Stack Developer",
    experience: "2+ Years",
    tagline: "Skilled and passionate Full Stack Developer with hands-on experience in building scalable and performant web applications.",
    about: "Transitioned from a Production Engineering role at Ashok Leyland to Full Stack Development. Passionate about web development and currently exploring Generative AI and LLM-based integrations (RAG) to build smarter, more interactive applications."
  },
  contact: {
    email: "dineshviyasar@gmail.com",
    phone: "+91 9487080432",
    linkedin: "https://www.linkedin.com/in/dinesh-vbb318a199",
    github: "https://github.com/Dineshvd"
  },
  skills: [
    { category: "Frontend", items: ["Next.js", "React.js", "Redux", "Tailwind CSS", "Vite.js", "Mantine", "MUI"] },
    { category: "Backend & Database", items: ["Express.js", "Node.js", "MySQL", "MongoDB", "Redis", "Prisma"] },
    { category: "Tools & DevOps", items: ["GitHub", "Postman", "Swagger", "Google Tag Manager"] },
    { category: "Additional", items: ["React Query", "Razorpay Integration", "Meta WhatsApp API", "SEO Optimization", "RAG / LLMs"] }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Hyper ready Technologies",
      duration: "Oct 2024 – Present",
      description: "Supporting the BookWedGo platform, a leading venue booking system. Built robust backend features using Express.js and Prisma with MySQL."
    },
    {
      role: "Full Stack Developer Intern",
      company: "InnoSols IT Solutions",
      duration: "Mar 2024 – Jul 2024",
      description: "Assisted in developing scalable web applications and enhancing UI/UX components."
    },
    {
      role: "Production Engineer",
      company: "Ashok Leyland Ltd",
      duration: "Sep 2020 – Mar 2022",
      description: "Ensured high standards in daily production and quality management."
    }
  ],
  projects: [
    {
      name: "SiviAI",
      type: "AI/ML",
      description: "A secure RAG (Retrieval-Augmented Generation) application built with React.js, Tailwind, Express.js, FastAPI, Gemini embedding API, and MongoDB."
    },
    {
      name: "BookWedGo",
      type: "Web Development",
      description: "A comprehensive, SEO-optimized venue booking marketplace featuring Razorpay integration and optimized search rankings."
    },
    {
      name: "BookWedGo Admin Dashboard",
      type: "Dashboard",
      description: "A full-featured management system for controlling content, venue listings, booking reports, and CRM analytics."
    }
  ],
  education: [
    "Fullstack Development: NXT Wave Disruptive Technologies (2022 – 2023)",
    "B.E. Automobile Engineering: Karpagam College of Engineering (2017 – 2020)",
    "Diploma in Automobile Engineering: NPA Centenary Polytechnic College (2014 – 2017)"
  ]
};
