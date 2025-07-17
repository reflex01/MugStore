// Page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: 'Premium Software Store - Genuine Microsoft Products & Digital Licenses',
    description: 'Shop genuine Microsoft Windows, Office, and premium software with instant delivery. 100% authentic licenses, lifetime support, and competitive prices.',
    canonical: '/',
    openGraph: {
      title: 'Premium Software Store - Genuine Microsoft Products',
      description: 'Shop genuine Microsoft Windows, Office, and premium software with instant delivery. 100% authentic licenses, lifetime support, and competitive prices.',
      url: '/',
    },
  },
  shop: {
    title: 'Shop All Software Products',
    description: 'Browse our complete collection of genuine Microsoft products, digital licenses, and premium software. All products come with instant delivery and lifetime support.',
    canonical: '/shop-with-sidebar',
    openGraph: {
      title: 'Shop All Software Products - Premium Software Store',
      description: 'Browse our complete collection of genuine Microsoft products, digital licenses, and premium software. All products come with instant delivery and lifetime support.',
      url: '/shop-with-sidebar',
    },
  },
  productDetails: (productName: string, price: number, description: string) => ({
    title: `${productName} - Digital License`,
    description: `Buy ${productName} digital license for $${price}. Instant delivery, genuine product key, and lifetime support included.`,
    canonical: `/shop-details?name=${encodeURIComponent(productName)}`,
    openGraph: {
      title: `${productName} - Digital License | Premium Software Store`,
      description: `Buy ${productName} digital license for $${price}. Instant delivery, genuine product key, and lifetime support included.`,
      url: `/shop-details?name=${encodeURIComponent(productName)}`,
      type: 'product',
    },
  }),
};

// Structured data schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Premium Software Store',
  description: 'Genuine Microsoft products and digital licenses with instant delivery',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  logo: {
    '@type': 'ImageObject',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/images/logo.png`,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://twitter.com/premiumsoftware',
    'https://facebook.com/premiumsoftware',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Premium Software Store',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const storeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Premium Software Store',
  description: 'Digital software store specializing in genuine Microsoft products',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/images/store-image.jpg`,
  priceRange: '$19 - $499',
  paymentAccepted: ['Credit Card', 'PayPal', 'Bitcoin'],
  currenciesAccepted: 'USD',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday', 
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '00:00',
    closes: '23:59',
  },
};