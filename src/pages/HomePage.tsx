import { Link } from 'react-router-dom'
import { SEO } from '../components/layout/SEO'
import { Card, CardContent } from '../components/ui/Card'
import { services } from '../data/services'
import { serviceIcons } from '../components/ui/serviceIcons'
import { getFeaturedProjects } from '../data/projects'

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn your business, goals, and constraints. No assumptions — just deep understanding.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We define scope, architecture, and timeline. You approve the plan before we write code.',
  },
  {
    number: '03',
    title: 'Delivery',
    description: 'We build in iterations with weekly demos. You see progress, we ship fast.',
  },
  {
    number: '04',
    title: 'Support',
    description: 'Launch is not the end. We provide maintenance, monitoring, and iteration support.',
  },
]

const trustSignals = [
  { label: 'Production-ready code', value: 'Always' },
  { label: 'Direct communication', value: 'No account managers' },
  { label: 'Transparent pricing', value: 'Fixed or milestone-based' },
  { label: 'On-time delivery', value: 'Track record' },
  { label: 'Post-launch support', value: 'Included' },
  { label: 'Code ownership', value: '100% yours' },
]

export function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <>
      <SEO
        title="Software & AI Development Company"
        description="WanCredence builds business websites, custom web/mobile applications, and AI automation. We deliver production-ready software that drives revenue."
      />

      {/* Hero Section */}
      <section className="section relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
              </span>
              Accepting new projects for Q1 2026
            </div>

            <h1 id="hero-heading" className="heading-1 text-balance animate-slide-up">
              Software & AI Development
              <br />
              <span className="text-brand-600">That Drives Revenue</span>
            </h1>

            <p className="mt-6 body-lg text-balance animate-slide-up" style={{ animationDelay: '100ms' }}>
              We build production-ready websites, custom applications, and AI automation.
              No templates, no junior devs, no surprises.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 shadow-sm hover:shadow-md">
                Start a project
              </Link>
              <Link to="/work" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-neutral-300 px-8 py-4 text-base font-semibold text-neutral-700 transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2">
                View our work
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Clean, maintainable code</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Direct senior-level communication</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>No vendor lock-in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-brand-50/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-brand-100/30 blur-3xl" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-neutral-50" aria-labelledby="services-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 id="services-heading" className="heading-2">
              Core Services
            </h2>
            <p className="mt-4 body-lg">
              Three focus areas. Deep expertise in each.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <article
                key={service.id}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={service.href} className="block">
                  <Card variant="bordered" hover padding="lg" className="h-full">
                    <CardContent>
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                        {(() => {
                          const Icon = serviceIcons[service.icon as keyof typeof serviceIcons]
                          return Icon ? <Icon className="h-7 w-7" /> : null
                        })()}
                      </div>
                      <h3 className="heading-4 group-hover:text-brand-600 transition-colors duration-200">
                        {service.name}
                      </h3>
                      <p className="mt-3 body text-neutral-600">
                        {service.shortDescription}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-600 group-hover:gap-3 transition-all duration-200">
                        <span>Learn more</span>
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-neutral-300 px-8 py-4 text-base font-semibold text-neutral-700 transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" aria-labelledby="process-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 id="process-heading" className="heading-2">
              How We Work
            </h2>
            <p className="mt-4 body-lg">
              A transparent, iterative process designed for clarity and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 text-xl font-bold">
                    {step.number}
                  </span>
                  <h3 className="heading-4">{step.title}</h3>
                </div>
                <p className="body text-neutral-600 pl-10 md:pl-0">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full h-[calc(100%_-_1.5rem)] w-px bg-neutral-200" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section bg-neutral-50" aria-labelledby="work-heading">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 id="work-heading" className="heading-2">
                Selected Work
              </h2>
              <p className="mt-2 body text-neutral-600">
                Real projects. Real results.
              </p>
            </div>
            <Link to="/work" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 mt-4 sm:mt-0">
              View all projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {featuredProjects.map((project, index) => (
              <article key={project.id} className="group" role="listitem" style={{ animationDelay: `${index * 100}ms` }}>
                <Link to={project.url || `/work/${project.id}`} className="block">
                  <Card variant="bordered" hover padding="none" className="overflow-hidden h-full">
                    <div className="aspect-video bg-neutral-100 relative overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-neutral-400">
                          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                          </svg>
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-neutral-700 capitalize">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <CardContent>
                      <h3 className="heading-4 group-hover:text-brand-600 transition-colors duration-200">
                        {project.name}
                      </h3>
                      <p className="mt-2 body-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section" aria-labelledby="trust-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 id="trust-heading" className="heading-2">
              Why Teams Choose WanCredence
            </h2>
            <p className="mt-4 body-lg">
              We operate differently than traditional agencies.
            </p>
          </div>

          <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" role="list">
            {trustSignals.map((signal, index) => (
              <div key={signal.label} className="text-center" style={{ animationDelay: `${index * 50}ms` }}>
                <dt className="text-3xl sm:text-4xl font-bold text-brand-600">{signal.value}</dt>
                <dd className="mt-1 body-sm font-medium text-neutral-600">{signal.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-950" aria-labelledby="cta-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="heading-2 text-white">
              Ready to Build Something That Matters?
            </h2>
            <p className="mt-4 body-lg text-neutral-300">
              Tell us about your project. We'll respond within 24 hours with initial thoughts and next steps.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-neutral-950 transition-all duration-200 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
                Start a conversation
              </Link>
              <a href="mailto:wancredence@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-neutral-700 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
                Email us directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}