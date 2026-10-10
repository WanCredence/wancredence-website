import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  noFollow?: boolean
}

const siteConfig = {
  name: 'WanCredence',
  url: 'https://wancredence.com',
  defaultTitle: 'WanCredence — Software & AI Development Company',
  defaultDescription: 'WanCredence builds business websites, custom web/mobile applications, and AI automation. We deliver production-ready software that drives revenue.',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@wancredence',
}

export function SEO({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  noIndex = false,
  noFollow = false,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle
  const fullDescription = description || siteConfig.defaultDescription
  const fullUrl = `${siteConfig.url}${path}`
  const fullImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.defaultImage}`

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#7e22ce" />

      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
      {noIndex || noFollow ? null : <meta name="robots" content="index, follow" />}

      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />

      <link rel="alternate" hrefLang="en" href={fullUrl} />
      <link rel="sitemap" href={`${siteConfig.url}/sitemap.xml`} />
    </Helmet>
  )
}

export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Helmet>
  )
}