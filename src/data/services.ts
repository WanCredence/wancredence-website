export interface Service {
  id: string
  name: string
  shortDescription: string
  icon: 'website' | 'application' | 'ai'
}

export const services: Service[] = [
  {
    id: 'websites',
    name: 'Business Websites',
    shortDescription: 'Professional websites designed around business needs.',
    icon: 'website',
  },
  {
    id: 'applications',
    name: 'Web Applications',
    shortDescription: 'Web-based tools built to solve specific problems.',
    icon: 'application',
  },
  {
    id: 'ai-automation',
    name: 'AI Integration & Automation',
    shortDescription: 'Practical AI integrations and workflow automation.',
    icon: 'ai',
  },
]
