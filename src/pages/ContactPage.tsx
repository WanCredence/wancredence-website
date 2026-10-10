import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/layout/SEO'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card'

interface FormData {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  projectType?: string
  message?: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
}

const projectTypes = [
  { value: 'website', label: 'Business Website' },
  { value: 'application', label: 'Custom Web/Mobile Application' },
  { value: 'ai-automation', label: 'AI Automation & Integrations' },
  { value: 'other', label: 'Other / Not Sure' },
]

const budgetRanges = [
  { value: 'under-25k', label: 'Under $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: '100k-250k', label: '$100,000 - $250,000' },
  { value: '250k+', label: '$250,000+' },
  { value: 'not-sure', label: 'Not Sure Yet' },
]

const timelines = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-2-months', label: '1-2 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: '6+months', label: '6+ Months' },
  { value: 'exploring', label: 'Just Exploring' },
]

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project'
    } else if (formData.message.trim().length < 50) {
      newErrors.message = 'Please provide more details (at least 50 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setSubmitStatus('submitting')

    // Create mailto link with form data
    const subject = encodeURIComponent(`New Project Inquiry: ${projectTypes.find(p => p.value === formData.projectType)?.label || 'General'}`)
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Project Type: ${projectTypes.find(p => p.value === formData.projectType)?.label || formData.projectType}
Budget Range: ${budgetRanges.find(b => b.value === formData.budget)?.label || formData.budget || 'Not specified'}
Timeline: ${timelines.find(t => t.value === formData.timeline)?.label || formData.timeline || 'Not specified'}

Project Details:
${formData.message}
    `.trim())

    const mailtoLink = `mailto:wancredence@gmail.com?subject=${subject}&body=${body}`

    // Small delay to show submitting state
    setTimeout(() => {
      window.location.href = mailtoLink
      setSubmitStatus('success')
      setSubmitMessage('Your email client should open now. If it does not, please email us directly at wancredence@gmail.com')
      setFormData(initialFormData)
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Start a conversation with WanCredence. Tell us about your project — we'll respond within 24 hours with initial thoughts and next steps."
        path="/contact"
      />

      {/* Hero */}
      <section className="section-sm bg-neutral-50 border-b border-neutral-200" aria-labelledby="contact-hero-heading">
        <div className="container">
          <div className="max-w-3xl">
            <h1 id="contact-hero-heading" className="heading-1">Start a Project</h1>
            <p className="mt-4 body-lg text-neutral-600">
              Tell us what you are building. We will respond within 24 hours with initial thoughts and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section" aria-labelledby="form-heading">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <Card variant="bordered" padding="lg">
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                  <CardDescription>Help us understand what you need</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="John Doe"
                        required
                        autoComplete="name"
                      />
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="john@company.com"
                        required
                        autoComplete="email"
                      />
                    </div>

                    <Input
                      label="Company (Optional)"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      autoComplete="organization"
                    />

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-2">
                        Project Type <span className="text-brand-500" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`input ${errors.projectType ? 'border-red-500' : ''}`}
                        aria-invalid={errors.projectType ? 'true' : 'false'}
                        aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                        required
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p id="projectType-error" className="mt-1.5 text-sm text-red-600" role="alert">{errors.projectType}</p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range.value} value={range.value}>{range.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((t) => (
                            <option key={t.value} value={t.value}>{t.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <Textarea
                      label="Project Description"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      placeholder="Describe your project, goals, technical requirements, and any existing systems we should know about. The more detail, the better we can help."
                      required
                      rows={6}
                    />

                    <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                      <svg className="flex-shrink-0 mt-0.5 h-5 w-5 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      <div className="text-sm text-neutral-700">
                        <p className="font-medium">What happens next?</p>
                        <p className="mt-1">We review every inquiry personally. If we are a good fit, we will schedule a 30-minute call to discuss scope, timeline, and approach. No sales pressure — just an honest conversation.</p>
                      </div>
                    </div>

                    <Button type="submit" size="lg" variant="primary" loading={submitStatus === 'submitting'} className="w-full sm:w-auto" disabled={submitStatus === 'submitting'}>
                      {submitStatus === 'submitting' ? 'Opening email...' : 'Send Inquiry'}
                    </Button>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg" role="status">
                        <div className="flex items-start gap-3">
                          <svg className="flex-shrink-0 h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <p className="text-sm text-green-800">{submitMessage}</p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                        <div className="flex items-start gap-3">
                          <svg className="flex-shrink-0 h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                          </svg>
                          <p className="text-sm text-red-800">{submitMessage}</p>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card variant="bordered" padding="lg" className="sticky top-24">
                <CardHeader>
                  <CardTitle>Other Ways to Reach Us</CardTitle>
                  <CardDescription>Prefer a direct conversation?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-neutral-900">Email</h3>
                    <p className="mt-1 body-sm text-neutral-600">Best for detailed inquiries</p>
                    <a href="mailto:wancredence@gmail.com" className="mt-3 w-full block inline-flex items-center justify-start gap-2 rounded-lg border-2 border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2">
                      wancredence@gmail.com
                    </a>
                  </div>

                  <div className="pt-6 border-t border-neutral-200">
                    <h3 className="font-semibold text-neutral-900">Response Time</h3>
                    <p className="mt-1 body-sm text-neutral-600">We respond to all inquiries within 24 hours on business days.</p>
                  </div>

                  <div className="pt-6 border-t border-neutral-200">
                    <h3 className="font-semibold text-neutral-900">What to Expect</h3>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-600" role="list">
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        We review your inquiry personally
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        If a fit, we schedule a 30-min call
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        We send a proposal within 2-3 days
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        You decide — no pressure
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-neutral-200">
                    <h3 className="font-semibold text-neutral-900">Not Ready Yet?</h3>
                    <p className="mt-1 body-sm text-neutral-600">Browse our services or work to learn more about what we do.</p>
                    <div className="mt-4 flex flex-col gap-2">
                      <Link to="/services" className="inline-flex items-center justify-start gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400">
                        View Services →
                      </Link>
                      <Link to="/work" className="inline-flex items-center justify-start gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400">
                        View Work →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Email CTA */}
      <section className="section bg-brand-600" aria-labelledby="direct-email-heading">
        <div className="container text-center">
          <h2 id="direct-email-heading" className="heading-2 text-white">Prefer Email Directly?</h2>
          <p className="mt-4 body-lg text-brand-100 max-w-2xl mx-auto">
            Skip the form. Send us an email at wancredence@gmail.com with your project details and we will get back to you.
          </p>
          <div className="mt-8">
            <a href="mailto:wancredence@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-600 transition-all duration-200 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600">
              Email Us →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}