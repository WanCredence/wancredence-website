export interface Service {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  features: string[]
  icon: string
  href: string
}

export const services: Service[] = [
  {
    id: 'websites',
    name: 'Business Websites',
    shortDescription: 'High-performance websites that convert visitors into customers.',
    fullDescription: 'We build fast, accessible, and SEO-optimized websites that serve as your hardest-working sales asset. From marketing sites to complex web platforms, every project is crafted with modern technology and conversion-focused design.',
    features: [
      'Custom design aligned with your brand',
      'Performance-optimized (90+ Lighthouse scores)',
      'SEO-ready with semantic HTML and structured data',
      'WCAG 2.1 AA accessibility compliance',
      'CMS integration (Contentful, Sanity, WordPress)',
      'Analytics & conversion tracking setup',
      'Ongoing maintenance & support plans',
    ],
    icon: 'website',
    href: '/services#websites',
  },
  {
    id: 'applications',
    name: 'Custom Web & Mobile Applications',
    shortDescription: 'Scalable applications tailored to your business processes.',
    fullDescription: 'We develop custom web and mobile applications that solve real business problems. Whether you need a customer portal, internal tool, SaaS product, or mobile app, we deliver production-ready code with clean architecture that scales.',
    features: [
      'Full-stack development (React, Node.js, TypeScript)',
      'Native & cross-platform mobile (React Native, Expo)',
      'Database design & API development',
      'Authentication & authorization systems',
      'Real-time features (WebSockets, Server-Sent Events)',
      'Payment integration (Stripe, Paddle)',
      'Automated testing & CI/CD pipelines',
      'Cloud deployment (AWS, GCP, Cloudflare)',
    ],
    icon: 'application',
    href: '/services#applications',
  },
  {
    id: 'ai-automation',
    name: 'AI Automation & Integrations',
    shortDescription: 'Intelligent workflows that reduce manual work and unlock new capabilities.',
    fullDescription: 'We integrate AI into your existing systems and build custom automation workflows. From document processing and customer support automation to custom LLM applications and RAG systems, we help you leverage AI where it delivers measurable ROI.',
    features: [
      'LLM integration (OpenAI, Anthropic, open-source)',
      'RAG systems for knowledge retrieval',
      'Document parsing & data extraction',
      'Workflow automation (n8n, custom)',
      'AI-powered chatbots & agents',
      'Prompt engineering & evaluation',
      'Vector databases & embeddings',
      'Cost optimization & monitoring',
    ],
    icon: 'ai',
    href: '/services#ai-automation',
  },
]