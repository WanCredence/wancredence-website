import { services } from '../../data/services'
import { serviceIcons } from '../ui/serviceIcons'
import { ThreeDIcon } from '../ui/ThreeDIcon'

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
                className="h-full bg-white border border-neutral-200 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-shadow duration-300 hover:shadow-lg"
              >
                <ThreeDIcon className="mb-6">
                  {Icon ? <Icon className="h-6 w-6 text-white" /> : null}
                </ThreeDIcon>
                <h3 className="heading-3">{service.name}</h3>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
