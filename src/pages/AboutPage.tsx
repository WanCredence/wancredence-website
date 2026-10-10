import { SEO } from '../components/layout/SEO'
import { Card, CardContent } from '../components/ui/Card'
import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Senior Engineers Only',
    description: 'No juniors learning on your dime. Every line of code is written by engineers with 8+ years of production experience.',
  },
  {
    title: 'Direct Communication',
    description: 'You talk to the people building your product. No account managers, no project managers, no broken telephone.',
  },
  {
    title: 'Production-First Mindset',
    description: 'We build for the real world: monitoring, error tracking, CI/CD, scaling, and security from day one.',
  },
  {
    title: 'No Vendor Lock-in',
    description: 'Your code, your infrastructure, your data. We use standard tools and hand over everything with documentation.',
  },
  {
    title: 'Transparent Pricing',
    description: 'Fixed-price or time-and-materials. No hidden fees, no surprise invoices. You approve every change.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We stick around after launch. Maintenance, iterations, and strategic advice — we are invested in your success.',
  },
]

const principles = [
  'Ship working software every week',
  'Automate everything that repeats',
  'Write code humans can read',
  'Measure what matters',
  'Default to boring technology',
  'Own the outcome, not just the output',
]

export function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="WanCredence is a software & AI development company. Senior engineers building production-ready websites, applications, and AI automation. No juniors, no account managers, no lock-in."
        path="/about"
      />

      {/* Hero */}
      <section className="section bg-neutral-50 border-b border-neutral-200" aria-labelledby="about-hero-heading">
        <div className="container">
          <div className="max-w-3xl">
            <h1 id="about-hero-heading" className="heading-1">About WanCredence</h1>
            <p className="mt-6 body-lg text-neutral-600 max-w-2xl">
              We are a lean team of senior software engineers who believe the best results come from small, experienced teams working directly with clients. No bureaucracy. No junior developers learning on your project. Just clean, production-ready code delivered on time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 id="values-heading" className="heading-2">How We Operate</h2>
            <p className="mt-4 body-lg text-neutral-600">Six principles that guide every engagement</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <article key={value.title} className="card" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="h-full">
                  <h3 className="heading-4">{value.title}</h3>
                  <p className="mt-3 body text-neutral-600">{value.description}</p>
                </CardContent>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="section bg-neutral-50" aria-labelledby="principles-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 id="principles-heading" className="heading-2">Engineering Principles</h2>
            <p className="mt-4 body-lg text-neutral-600">The standards we hold ourselves to on every project</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <div key={principle} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-neutral-200" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="body-sm text-neutral-700 font-medium">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="section" aria-labelledby="not-do-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 id="not-do-heading" className="heading-2">What We Don't Do</h2>
            <p className="mt-4 body-lg text-neutral-600">We are opinionated about how software should be built</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'No junior developers', desc: 'Your project is not a training ground. Every engineer has 8+ years production experience.' },
              { title: 'No account managers', desc: 'You communicate directly with the engineers building your product.' },
              { title: 'No fixed templates', desc: 'Every solution is custom-built for your specific requirements.' },
              { title: 'No vendor lock-in', desc: 'Standard tools, your infrastructure, your code ownership from day one.' },
              { title: 'No surprise invoices', desc: 'Transparent pricing. You approve scope changes before work begins.' },
              { title: 'No disappearing after launch', desc: '30-day warranty included. Ongoing support available.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <h3 className="heading-4 text-red-600 flex items-center gap-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  {item.title}
                </h3>
                <p className="mt-2 body-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Founder */}
      <section className="section bg-neutral-950" aria-labelledby="founder-heading">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 id="founder-heading" className="heading-2 text-white">Built by Engineers, for Engineers</h2>
                <p className="mt-4 body-lg text-neutral-300">
                  WanCredence was founded on a simple premise: clients deserve senior-level engineering without the agency markup and bureaucracy.
                </p>
                <p className="mt-4 body text-neutral-400">
                  We've built systems that handle millions of users, processed billions in transactions, and deployed AI models in production. We bring that experience to every project — whether it's a marketing website or a complex AI pipeline.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                  {[
                    { value: '8+', label: 'Years Experience' },
                    { value: '50+', label: 'Projects Delivered' },
                    { value: '100%', label: 'Code Ownership' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-neutral-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Card variant="bordered" className="border-neutral-800 bg-neutral-900/50 p-8">
                  <div className="font-mono text-sm text-brand-400 mb-4">// Our stack</div>
                  <pre className="text-neutral-300 text-sm leading-relaxed whitespace-pre-wrap"><code>{`const wancredence = {
  philosophy: "Senior engineers only",
  communication: "Direct, no intermediaries",
  delivery: "Weekly working software",
  ownership: "100% client-owned",
  warranty: "30 days included",
  stack: {
    frontend: ["React", "TypeScript", "Next.js"],
    backend: ["Node.js", "Python", "PostgreSQL"],
    ai: ["OpenAI", "Anthropic", "LangChain"],
    cloud: ["Cloudflare", "AWS", "Docker"],
  },
  principles: [
    "Ship weekly",
    "Automate repetition",
    "Code for humans",
    "Measure outcomes",
    "Boring > clever",
  ],
}`}</code></pre>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-labelledby="about-cta-heading">
        <div className="container text-center">
          <h2 id="about-cta-heading" className="heading-2">Let's Work Together</h2>
          <p className="mt-4 body-lg text-neutral-600 max-w-2xl mx-auto">
            We are selective about the projects we take. If we are not the right fit, we will tell you honestly and refer you to someone who is.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 shadow-sm hover:shadow-md">
              Start a project
            </Link>
            <a href="mailto:wancredence@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-neutral-300 px-8 py-4 text-base font-semibold text-neutral-700 transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2">
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}