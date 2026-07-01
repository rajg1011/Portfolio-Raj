export const projects = [
  {
    id: 1,
    name: 'NutriCal',
    description: 'AI-powered nutrition tracking. A background agent monitors your intake, generates personalised insights, and sends LLM crafted nudges, so the app works for you, even when you\'re not in it.',
    tags: ['React', 'Node.js', 'Supabase', 'GenAI', 'Agentic AI', 'AWS Lambda', 'Serverless'],
    url: 'https://nutri-cal.pages.dev',
  },
  {
    id: 2,
    name: 'Face Attendance',
    description: 'Face recognition attendance system powered by the buffalo_sc model. Detects, identifies, and logs presence in real time. No badges, no manual entry.',
    tags: ['Python', 'InsightFace', 'OpenCV', 'NumPy', 'Streamlit'],
    url: 'https://github.com/rajg1011/Face-Attendance-System',
  },
  {
    id: 3,
    name: 'We Care',
    description: 'Web platform showcasing 20+ physiotherapy techniques with dynamic content and smooth sliders.',
    tags: ['Node.js', 'MongoDB', 'EJS', 'JavaScript', 'Swiper.js'],
    url: 'https://github.com/rajg1011/We-Care-Web-Project',
  },
  {
    id: 4,
    name: 'Dental Clinic',
    description: 'Client website for a dental clinic. Built with Next.js for SEO, email-based appointment booking, and deployed on Cloudflare Workers.',
    tags: ['Next.js', 'Cloudflare Workers', 'Email', 'SEO'],
    url: 'https://www.completedentalcareclinic.com',
  },
]

export const skills = [
  { name: 'LLM Integration', category: 'AI' as const },
  { name: 'Agentic AI', category: 'AI' as const },
  { name: 'JavaScript', category: 'Language' as const },
  { name: 'TypeScript', category: 'Language' as const },
   { name: 'Java', category: 'Language' as const },
  { name: 'SQL', category: 'Language' as const },
  { name: 'React', category: 'Framework' as const },
  { name: 'Next.js', category: 'Framework' as const },
  { name: 'Node.js', category: 'Framework' as const },
  { name: 'Express', category: 'Framework' as const },
  { name: 'PostgreSQL', category: 'Database' as const },
  { name: 'MongoDB', category: 'Database' as const },
  { name: 'Docker', category: 'Tool' as const },
  { name: 'AWS (EC2, S3, Lambda)', category: 'Tool' as const },
  { name: 'Cloudflare Workers', category: 'Tool' as const }
]

export const bio = {
  paragraph: [
    'I build products where data, backend, and AI meet.',
    'Scalable systems, LLM-powered features, interfaces that feel easy and minimal.',
    'I care about all of it.',
  ],
  experience: [
    {
      role: 'Full-Stack Developer',
      company: 'Supplymint',
      period: '2025 - Present',
      detail: 'Building supply chain systems: Kafka pipelines, print workflows, and auth integrations that actually ship.',
    },
    {
      role: 'IT Intern',
      company: 'Kochar Infotech',
      period: '2024 - 2025',
      detail: 'Shipped content pipelines, email automation, and UI flows across ReactJS, NestJS, and Angular.',
    },
  ],
  education: 'B.Tech in CS - Chitkara University, 2025',
  offscreen: 'Books, chai, and long conversations.',
  currently: {
    status: 'Open to opportunities',
    location: 'India',
    experience: '1+ year',
  },
}

export const contact = {
  email: 'raj@rajg.dev',
  github: 'https://github.com/rajg1011',
  linkedin: 'https://www.linkedin.com/in/rajg1110',
}

export const siteTagline = 'Think deeply. Build simply.'
