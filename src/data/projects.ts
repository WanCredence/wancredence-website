export interface Project {
  id: string
  name: string
  description: string
  longDescription?: string
  category: 'website' | 'application' | 'ai'
  tags: string[]
  image?: string
  url?: string
  github?: string
  featured: boolean
  outcomes?: string[]
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    name: 'E-commerce Platform',
    description: 'Full-stack marketplace with multi-vendor support, real-time inventory, and automated payouts.',
    longDescription: 'Built a complete e-commerce platform supporting multiple vendors with independent storefronts, real-time inventory synchronization, automated commission calculation, and Stripe Connect payouts. Includes admin dashboard, vendor portal, and customer-facing marketplace.',
    category: 'application',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    image: '/projects/ecommerce.jpg',
    url: 'https://example.com',
    featured: true,
    outcomes: [
      'Processed $2M+ GMV in first 6 months',
      '99.9% uptime with auto-scaling infrastructure',
      'Sub-200ms API response times globally',
    ],
  },
  {
    id: 'saas-dashboard',
    name: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics platform with custom report builder and automated insights.',
    longDescription: 'Developed a B2B SaaS analytics platform featuring real-time data visualization, drag-and-drop report builder, scheduled email reports, and AI-powered anomaly detection. Handles 10M+ events/day with sub-second query performance.',
    category: 'application',
    tags: ['React', 'TypeScript', 'ClickHouse', 'Python', 'FastAPI', 'AWS'],
    image: '/projects/saas-dashboard.jpg',
    featured: true,
    outcomes: [
      'Reduced reporting time from hours to minutes',
      'Processes 10M+ events daily',
      '99.99% query success rate',
    ],
  },
  {
    id: 'ai-document-processing',
    name: 'AI Document Processing Pipeline',
    description: 'Automated invoice and contract processing with 95%+ accuracy using LLMs.',
    longDescription: 'Built an end-to-end document processing system that extracts structured data from invoices, contracts, and receipts using GPT-4 Vision and custom fine-tuned models. Includes human-in-the-loop review interface and ERP integration.',
    category: 'ai',
    tags: ['Python', 'GPT-4', 'LangChain', 'PostgreSQL', 'Vector DB', 'FastAPI'],
    image: '/projects/ai-docs.jpg',
    featured: true,
    outcomes: [
      '95%+ extraction accuracy',
      '80% reduction in manual processing time',
      'Processes 10K+ documents/month',
    ],
  },
  {
    id: 'marketing-website',
    name: 'High-Conversion Marketing Site',
    description: 'Performance-optimized marketing website with A/B testing framework and personalization.',
    longDescription: 'Designed and developed a conversion-focused marketing website with dynamic content personalization, integrated A/B testing, lead scoring, and marketing automation integration. Achieves 95+ Lighthouse scores across all metrics.',
    category: 'website',
    tags: ['Next.js', 'Tailwind', 'Contentful', 'Vercel', 'GA4', 'Segment'],
    image: '/projects/marketing-site.jpg',
    url: 'https://example.com',
    featured: true,
    outcomes: [
      '40% increase in demo requests',
      '95+ Lighthouse performance score',
      'Sub-1s Time to Interactive',
    ],
  },
  {
    id: 'mobile-app',
    name: 'Cross-Platform Mobile App',
    description: 'React Native app with offline-first architecture and real-time sync.',
    longDescription: 'Built a cross-platform mobile application for field teams with offline-first data synchronization, GPS tracking, photo capture with annotations, and push notifications. Syncs seamlessly when connectivity is restored.',
    category: 'application',
    tags: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Supabase', 'FCM'],
    image: '/projects/mobile-app.jpg',
    featured: false,
    outcomes: [
      '4.8★ App Store rating',
      '99.5% crash-free sessions',
      'Works fully offline',
    ],
  },
  {
    id: 'ai-support-agent',
    name: 'AI Customer Support Agent',
    description: 'Intelligent support agent resolving 60% of tickets without human intervention.',
    longDescription: 'Developed an AI-powered customer support agent using RAG over knowledge base, conversation history, and product documentation. Integrates with Intercom and Zendesk, escalates complex issues with full context to human agents.',
    category: 'ai',
    tags: ['Python', 'OpenAI', 'LangGraph', 'Pinecone', 'Intercom API', 'FastAPI'],
    image: '/projects/ai-support.jpg',
    featured: false,
    outcomes: [
      '60% ticket deflection rate',
      '92% customer satisfaction score',
      '24/7 instant response capability',
    ],
  },
]

export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getProjectsByCategory = (category: Project['category']) => projects.filter(p => p.category === category)