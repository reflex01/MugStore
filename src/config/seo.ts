// Page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: 'MugsStore - Premium Coffee Mugs & Drinkware Collection',
    description: 'Shop premium coffee mugs, tea cups, and drinkware with fast shipping. High-quality ceramic mugs, unique designs, and competitive prices.',
    canonical: '/',
    openGraph: {
      title: 'MugsStore - Premium Coffee Mugs & Drinkware',
      description: 'Shop premium coffee mugs, tea cups, and drinkware with fast shipping. High-quality ceramic mugs, unique designs, and competitive prices.',
      url: '/',
    },
  },
  shop: {
    title: 'Shop All Mugs & Drinkware',
    description: 'Browse our complete collection of premium mugs, coffee cups, and drinkware. All products come with fast shipping and quality guarantee.',
    canonical: '/shop-with-sidebar',
    openGraph: {
      title: 'Shop All Mugs & Drinkware - MugsStore',
      description: 'Browse our complete collection of premium mugs, coffee cups, and drinkware. All products come with fast shipping and quality guarantee.',
      url: '/shop-with-sidebar',
    },
  },
  productDetails: (productName: string, price: number, description: string) => ({
    title: `${productName} - Premium Mug`,
    description: `Buy ${productName} premium mug for $${price}. Fast shipping, high-quality ceramic, and satisfaction guarantee included.`,
    canonical: `/shop-details?name=${encodeURIComponent(productName)}`,
    openGraph: {
      title: `${productName} - Premium Mug | MugsStore`,
      description: `Buy ${productName} premium mug for $${price}. Fast shipping, high-quality ceramic, and satisfaction guarantee included.`,
      url: `/shop-details?name=${encodeURIComponent(productName)}`,
      type: 'product',
    },
  }),
};

// Structured data schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MugsStore',
  description: 'Premium coffee mugs and drinkware with fast shipping',
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
    'https://twitter.com/mugsstore',
    'https://facebook.com/mugsstore',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MugsStore',
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
  name: 'MugsStore',
  description: 'Premium mug store specializing in high-quality coffee mugs and drinkware',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/images/store-image.jpg`,
  priceRange: '$1 - $25',
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