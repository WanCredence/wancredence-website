import { useState } from 'react'
import { SEO } from '../components/layout/SEO'
import { projects } from '../data/projects'
import { Card, CardContent } from '../components/ui/Card'

const categories = ['All', 'Website', 'Application', 'AI'] as const
type Category = typeof categories[number]

export function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory.toLowerCase())

  return (
    <>
      <SEO
        title="Work"
        description="Explore WanCredence's portfolio of business websites, custom applications, and AI automation projects. Real work with measurable results."
        path="/work"
      />

      {/* Hero */}
      <section className="section-sm bg-neutral-50 border-b border-neutral-200" aria-labelledby="work-hero-heading">
        <div className="container">
          <div className="max-w-3xl">
            <h1 id="work-hero-heading" className="heading-1">Our Work</h1>
            <p className="mt-4 body-lg text-neutral-600">
              Real projects delivered for real businesses. Each engagement is unique — these represent the breadth of what we do.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-sm border-b border-neutral-200" aria-label="Filter projects by category">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls={`panel-${category.toLowerCase()}`}
                id={`tab-${category.toLowerCase()}`}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section" aria-labelledby="projects-heading">
        <div className="container">
          <div id="projects-heading" className="sr-only">Projects</div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="body text-neutral-600">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label={`${activeCategory} projects`}>
              {filteredProjects.map((project, index) => (
                <article key={project.id} className="group" role="listitem" style={{ animationDelay: `${index * 50}ms` }}>
                  <a href={project.url || `#${project.id}`} className="block" target={project.url ? '_blank' : undefined} rel={project.url ? 'noopener noreferrer' : undefined}>
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
                          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                            project.category === 'website' ? 'bg-blue-50 text-blue-700' :
                            project.category === 'application' ? 'bg-green-50 text-green-700' :
                            'bg-purple-50 text-purple-700'
                          } capitalize`}>
                            {project.category}
                          </span>
                        </div>
                        {project.featured && (
                          <div className="absolute top-3 left-3">
                            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-neutral-700">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                      <CardContent>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="heading-4 group-hover:text-brand-600 transition-colors duration-200 flex-1">
                            {project.name}
                          </h3>
                        </div>
                        <p className="body-sm line-clamp-2 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
                          {project.tags.slice(0, 5).map((tag) => (
                            <span key={tag} className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 5 && (
                            <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500">
                              +{project.tags.length - 5}
                            </span>
                          )}
                        </div>
                        {project.outcomes && project.outcomes.length > 0 && (
                          <div className="pt-4 border-t border-neutral-100">
                            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Results</p>
                            <ul className="space-y-1.5" role="list">
                              {project.outcomes.map((outcome) => (
                                <li key={outcome} className="flex items-start gap-2 text-sm text-neutral-600">
                                  <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
{(project.url || project.github) && (
                          <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center gap-3">
                            {project.url && (
                              <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                Live Site
                              </a>
                            )}
                            {project.github && (
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                Code
                              </a>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-950" aria-labelledby="work-cta-heading">
        <div className="container text-center">
          <h2 id="work-cta-heading" className="heading-2 text-white">Have a Project Like These?</h2>
          <p className="mt-4 body-lg text-neutral-300 max-w-2xl mx-auto">
            We'd love to hear about what you're building. Let's see if we're a good fit.
          </p>
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-600 transition-all duration-200 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
              Start a conversation →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}