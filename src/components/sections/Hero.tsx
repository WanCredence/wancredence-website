import { SoftwareIcon } from '../ui/ServiceIcons'
import { ThreeDIcon } from '../ui/ThreeDIcon'

export function Hero() {
  return (
    <section id="hero" className="section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <ThreeDIcon>
              <SoftwareIcon className="h-6 w-6 text-white" />
            </ThreeDIcon>
          </div>
          <h1 id="hero-heading" className="heading-1 text-balance">
            Software That Solves Real Problems
          </h1>
          <p className="mt-6 body-lg text-neutral-600 text-balance">
            Websites, apps, custom software, and AI solutions built around your needs.
          </p>
          <div className="mt-10">
            <a
              href="mailto:wancredence@gmail.com?subject=Project inquiry"
              className="btn btn-primary"
            >
              Discuss a project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
