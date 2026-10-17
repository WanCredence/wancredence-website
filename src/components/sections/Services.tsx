import { services } from '../../data/services'
import { serviceIcons } from '../ui/serviceIcons'

export function Services() {
  return (
    <section id="services" className="section bg-neutral-50" aria-labelledby="services-heading">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 id="services-heading" className="heading-2">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <article
                key={service.id}
                className="h-full bg-white border border-neutral-200 rounded-xl p-8 text-center"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 mb-6">
                  {Icon ? <Icon className="h-6 w-6" /> : null}
                </div>
                <h3 className="heading-3 mb-3">{service.name}</h3>
                <p className="body text-neutral-600">{service.shortDescription}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
