export interface Service {
  id: string
  name: string
  shortDescription: string
  icon: 'website' | 'application' | 'ai' | 'mobile'
}

export const services: Service[] = [
  {
    id: 'websites',
    name: 'Business Websites',
    shortDescription: 'Professional websites that showcase your business and help customers find and contact you.',
    icon: 'website',
  },
  {
    id: 'applications',
    name: 'Web Applications',
    shortDescription: 'Custom web applications that simplify workflows and solve specific business problems.',
    icon: 'application',
  },
  {
    id: 'mobile-apps',
    name: 'Mobile App Development',
    shortDescription: 'Mobile apps designed to help businesses serve customers and deliver useful services.',
    icon: 'mobile',
  },
  {
    id: 'ai-automation',
    name: 'AI Integration & Automation',
    shortDescription: 'Practical AI integrations and workflow automation.',
    icon: 'ai',
  },
]
