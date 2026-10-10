import { SEO } from '../components/layout/SEO'
import { services } from '../data/services'
import { serviceIcons } from '../components/ui/serviceIcons'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card'
import { Link } from 'react-router-dom'

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="WanCredence offers business websites, custom web/mobile applications, and AI automation & integrations. Production-ready software delivered by senior engineers."
        path="/services"
      />

      {/* Hero */}
      <section className="section-sm bg-neutral-50 border-b border-neutral-200" aria-labelledby="services-hero-heading">
        <div className="container">
          <div className="max-w-3xl">
            <h1 id="services-hero-heading" className="heading-1">
              Our Services
            </h1>
            <p className="mt-4 body-lg text-neutral-600">
              Three focus areas. Deep expertise in each. We only take projects where we can deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section" aria-label="Service details">
        <div className="container">
          <div className="space-y-20 lg:space-y-24">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 lg:w-1/2 lg:pl-8">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-6">
                    {(() => {
                      const Icon = serviceIcons[service.icon as keyof typeof serviceIcons]
                      return Icon ? <Icon className="h-7 w-7" /> : null
                    })()}
                  </div>
                  <h2 className="heading-2 mb-4">{service.name}</h2>
                  <p className="body-lg text-neutral-600 mb-8">{service.fullDescription}</p>

                  <div className="space-y-3" role="list" aria-label={`${service.name} features`}>
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3" role="listitem">
                        <svg className="flex-shrink-0 mt-0.5 h-5 w-5 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="body text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-neutral-300 px-8 py-4 text-base font-semibold text-neutral-700 transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2">
                      Discuss a project →
                    </Link>
                  </div>
                </div>

                <div className="flex-1 lg:w-1/2">
                  <Card variant="bordered" padding="lg" className="h-full">
                    <CardHeader>
                      <CardTitle>What You Get</CardTitle>
                      <CardDescription>Deliverables included in every engagement</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4" role="list">
                        {[
                          'Clean, documented, production-ready code',
                          'Automated testing & CI/CD pipeline',
                          'Deployment & infrastructure setup',
                          'Performance optimization (90+ Lighthouse)',
                          'Accessibility compliance (WCAG 2.1 AA)',
                          'SEO foundation & structured data',
                          '30-day post-launch support',
                          'Full code ownership & transfer',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <svg className="flex-shrink-0 mt-0.5 h-5 w-5 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span className="body text-neutral-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section bg-neutral-50" aria-labelledby="engagement-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 id="engagement-heading" className="heading-2">Engagement Models</h2>
            <p className="mt-4 body-lg text-neutral-600">Flexible structures that align with your needs and budget</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" role="list">
            {[
              {
                name: 'Fixed Scope',
                description: 'Clear requirements, defined deliverables, fixed price. Best for well-defined projects.',
                features: ['Defined timeline & budget', 'Weekly progress demos', '2 revision rounds included', '30-day warranty'],
                cta: 'Get a quote',
              },
              {
                name: 'Time & Materials',
                description: 'Flexible scope, pay for hours worked. Best for evolving products & ongoing work.',
                features: ['Weekly billing & reports', 'Priority scheduling', 'Scale team up/down', 'No long-term commitment'],
                cta: 'Start now',
              },
              {
                name: 'Retainer',
                description: 'Reserved capacity each month. Best for continuous development & maintenance.',
                features: ['Guaranteed availability', 'Discounted hourly rate', 'Strategic advisory included', 'Roll-over hours (up to 20%)'],
                cta: 'Reserve capacity',
              },
            ].map((model) => (
              <article key={model.name} className="card" role="listitem">
                <div className="p-6 sm:p-8">
                  <h3 className="heading-4">{model.name}</h3>
                  <p className="mt-3 body text-neutral-600">{model.description}</p>
                  <ul className="mt-6 space-y-3" role="list" aria-label={`${model.name} features`}>
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="flex-shrink-0 mt-0.5 h-5 w-5 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="body-sm text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-6 w-full block text-center inline-flex items-center justify-center gap-2 rounded-lg border-2 border-neutral-300 px-8 py-4 text-base font-semibold text-neutral-700 transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2">
                    {model.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section" aria-labelledby="tech-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 id="tech-heading" className="heading-2">Technologies We Use</h2>
            <p className="mt-4 body-lg text-neutral-600">Modern, proven tools. We choose the right tool for the job.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6" role="list">
            {[
              { name: 'React', category: 'Frontend' },
              { name: 'TypeScript', category: 'Language' },
              { name: 'Node.js', category: 'Backend' },
              { name: 'PostgreSQL', category: 'Database' },
              { name: 'Next.js', category: 'Framework' },
              { name: 'Tailwind CSS', category: 'Styling' },
              { name: 'Python', category: 'AI/ML' },
              { name: 'OpenAI API', category: 'AI/ML' },
              { name: 'LangChain', category: 'AI/ML' },
              { name: 'Docker', category: 'DevOps' },
              { name: 'Cloudflare', category: 'Cloud' },
              { name: 'GitHub Actions', category: 'CI/CD' },
            ].map((tech) => (
              <div key={tech.name} className="card p-4 text-center" role="listitem">
                <div className="font-medium text-neutral-900">{tech.name}</div>
                <div className="text-xs text-neutral-500 capitalize">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-600" aria-labelledby="contact-cta-heading">
        <div className="container text-center">
          <h2 id="contact-cta-heading" className="heading-2 text-white">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 body-lg text-brand-100 max-w-2xl mx-auto">
            Let's discuss your goals and how we can help. No pressure, just a honest conversation.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-600 transition-all duration-200 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}