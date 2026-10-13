export function Hero() {
  return (
    <section id="hero" className="section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="hero-heading" className="heading-1 text-balance">
            We build software for businesses.
          </h1>
          <p className="mt-6 body-lg text-neutral-600 text-balance">
            Websites, web applications, and practical software solutions tailored to your needs.
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
