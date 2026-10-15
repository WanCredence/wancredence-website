export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="contact-heading" className="heading-2">
            Contact
          </h2>
          <p className="mt-4 body-lg text-neutral-600 text-balance">
            Have a project in mind? Email WanCredence to discuss it.
          </p>
          <div className="mt-8">
            <a
              href="mailto:wancredence@gmail.com"
              className="inline-block text-2xl sm:text-3xl font-medium text-brand-500 break-all hover:text-brand-600 transition-colors"
              aria-label="Email wancredence at gmail dot com"
            >
              wancredence@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
