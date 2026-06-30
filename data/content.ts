export const roleStrings = [
  'Software Engineer',
  'Problem Solver',
  'Data Engineer',
  'Full Stack Developer',
]

export const projects = [
  {
    id: 1,
    name: 'DataPulse',
    description: 'Real-time analytics dashboard for streaming event data with sub-second latency.',
    tags: ['Python', 'Kafka', 'PostgreSQL', 'React'],
    url: 'https://github.com/rajg1011/datapulse',
  },
  {
    id: 2,
    name: 'PipelineForge',
    description: 'Declarative ETL pipeline builder that compiles YAML definitions into Airflow DAGs.',
    tags: ['Python', 'Apache Airflow', 'dbt', 'Docker'],
    url: 'https://github.com/rajg1011/pipelineforge',
  },
  {
    id: 3,
    name: 'QueryKit',
    description: 'Lightweight SQL query builder for TypeScript with type-safe result inference.',
    tags: ['TypeScript', 'PostgreSQL', 'Node.js'],
    url: 'https://github.com/rajg1011/querykit',
  },
]

export const skills = [
  { name: 'Python', category: 'Language' as const },
  { name: 'TypeScript', category: 'Language' as const },
  { name: 'SQL', category: 'Language' as const },
  { name: 'Next.js', category: 'Framework' as const },
  { name: 'React', category: 'Framework' as const },
  { name: 'FastAPI', category: 'Framework' as const },
  { name: 'PostgreSQL', category: 'Database' as const },
  { name: 'Supabase', category: 'Database' as const },
  { name: 'Apache Kafka', category: 'Tool' as const },
  { name: 'Docker', category: 'Tool' as const },
  { name: 'Apache Airflow', category: 'Tool' as const },
  { name: 'dbt', category: 'Tool' as const },
  { name: 'Tailwind CSS', category: 'UI' as const },
  { name: 'Data Modeling', category: 'Concept' as const },
  { name: 'Stream Processing', category: 'Concept' as const },
]

export const bio = {
  paragraph:
    'Software engineer focused on data systems and web products. I build tools that turn raw data into decisions and interfaces that make those decisions accessible.',
  currently: {
    status: 'Open to opportunities',
    location: 'India',
    experience: '3+ years',
  },
}

export const contact = {
  email: 'raj@example.com',
  github: 'https://github.com/rajg1011',
  linkedin: 'https://linkedin.com/in/rajg1011',
}

export const siteTagline = 'Building with intent.'
