import { assetUrl } from '../lib/assets'

export const site = {
  name: 'AIT',
  role: 'We Build | You Grow',
  tagline: '15 years in the global IT industry — building websites and apps that turn Facebook traffic into customers.',
  email: 'akifratul@gmail.com',
  /** Bangladesh mobile with country code for wa.me */
  whatsapp: '8801622670612',
  whatsappDisplay: '01622-670612',
  address: '1179 Sohag Tower, Nurercala Bazar Road, Vatara 1212, Dhaka, Bangladesh',
  /** Meta Pixel ID (Akif Hossain's Pixel) — public in page source; env can override */
  metaPixelId: '3393551357410244',
  /**
   * Personal Facebook profile username (from facebook.com/USERNAME).
   * Messenger chat uses m.me — works for profiles with messaging enabled.
   */
  facebookProfileUsername: 'akifratul',
  /** Optional full Messenger URL override, e.g. https://m.me/username */
  facebookMessengerHref: 'https://m.me/akifratul',
  /** Google reCAPTCHA v2 site key (public) */
  recaptchaSiteKey: '6Ldo5WotAAAAANh1J9enRhPCplKSiHb3QSRbtNHo',
}

export const travelPhotos = [
  {
    src: assetUrl('images/travel-lake.jpg'),
    alt: 'Misty mountain lake and village — landscape by Akif Hossen',
  },
  {
    src: assetUrl('images/landscape-river.jpg'),
    alt: 'River winding through green hills — landscape by Akif Hossen',
  },
  {
    src: assetUrl('images/landscape-beach.jpg'),
    alt: 'Turquoise sea and limestone cliffs — landscape by Akif Hossen',
  },
  {
    src: assetUrl('images/landscape-sea.jpg'),
    alt: 'Traditional boat on open water — landscape by Akif Hossen',
  },
  {
    src: assetUrl('images/landscape-temple.jpg'),
    alt: 'Temple complex under blue sky — travel landscape by Akif Hossen',
  },
]

export const services = [
  {
    title: 'Business website',
    description:
      'A clear, fast site that explains what you sell and how to reach you — built for phones first.',
  },
  {
    title: 'Mobile apps',
    description:
      'Android and iOS apps that extend your website, so customers can reach you from their phone.',
  },
  {
    title: 'Contact & WhatsApp',
    description:
      'Easy ways for customers to message you — form, call, or WhatsApp — without friction.',
  },
  {
    title: 'Meta Pixel & analytics',
    description:
      'Pixel setup, mobile layout, SEO foundations, and analytics so your Facebook ads reach real buyers.',
  },
]

/** Packages for Facebook ads — Order Now captures lead (email + phone). */
export const packages = [
  {
    id: 'basic-website',
    number: '01',
    name: 'Basic Website',
    priceLabel: 'Start from 35,000 Taka',
    priceAmount: '35,000',
    accent: 'blue',
    blurb: 'Professional business website ready for Facebook ads & Meta Pixel.',
  },
  {
    id: 'basic-portfolio',
    number: '02',
    name: 'Basic Portfolio',
    priceLabel: 'Start from 25,000 Taka',
    priceAmount: '25,000',
    accent: 'green',
    blurb: 'Clean portfolio site to showcase your work and get inquiries.',
  },
  {
    id: 'website-android',
    number: '03',
    name: 'Website + Android App',
    priceLabel: 'Start from 50,000 Taka',
    priceAmount: '50,000',
    accent: 'orange',
    blurb: 'Website plus Android app so customers can reach you on mobile.',
  },
  {
    id: 'website-android-ios',
    number: '04',
    name: 'Website + Android + iOS',
    priceLabel: 'Start from 75,000 Taka',
    priceAmount: '75,000',
    accent: 'purple',
    blurb: 'Full package — website with Android and iOS app support.',
  },
] as const

export const packageFeatures = [
  'মডার্ন ও প্রফেশনাল ডিজাইন',
  'মোবাইল রেসপনসিভ (সকল ডিভাইসে সাপোর্ট)',
  'SEO ফ্রেন্ডলি স্ট্রাকচার',
  'দ্রুত লোডিং এবং পারফরম্যান্স অপ্টিমাইজড',
  'সিকিউর এবং ইউজার ফ্রেন্ডলি',
  'সাপোর্ট এবং মেইনটেন্যান্স সুবিধা',
]

export const whyUs = [
  {
    title: 'Quality mindset',
    description:
      'Fifteen years in software quality means we care about details, deadlines, and things that actually work.',
  },
  {
    title: 'Global IT experience',
    description:
      '15 years of experience in the global IT industry — delivering reliable digital solutions with international quality standards.',
  },
  {
    title: 'Built for real businesses',
    description:
      'No bloated agency package. A practical site that helps your Facebook audience become customers.',
  },
]

/** Custom e-commerce package details (reference build: aatprohor.com). */
export const ecommerce = {
  eyebrow: 'Custom E-Commerce Website',
  heading: 'Everything Your Online Shop Needs',
  summary:
    'A complete, ready-to-launch e-commerce platform built for Bangladeshi businesses — bilingual storefront, cash-on-delivery checkout, courier integration, ad-pixel tracking, and a full admin dashboard.',
  stats: [
    { value: '27', label: 'Basic features' },
    { value: '33', label: 'Special features' },
    { value: '20', label: 'Premium features' },
    { value: '80', label: 'Total features' },
  ],
  tiers: [
    {
      id: 'ecom-basic',
      name: 'Basic',
      accent: 'green',
      priceLabel: 'Custom quote',
      blurb: 'Everything a store needs to open and start taking orders.',
      features: [
        'Homepage, product catalogue & category browsing',
        'Product detail pages with multiple photos',
        'Shopping cart & simple checkout (name, phone, address)',
        'Customer registration, login & password reset',
        'My Account with order history',
        'Full admin dashboard with order & sales totals',
        'Add/edit products, categories & subcategories',
        'Order list with status tracking (Received → Delivered)',
        'Customer list & internal stock management',
        'About, FAQ & contact/social links',
        'Fully mobile-friendly design',
      ],
    },
    {
      id: 'ecom-special',
      name: 'Special',
      accent: 'orange',
      priceLabel: 'Custom quote',
      blurb: 'What makes this shop work perfectly for Bangladesh.',
      features: [
        'Full English + Bangla language toggle',
        'Cash on Delivery (COD) — no card needed',
        'Bangladesh delivery zones & area-based charges',
        'Guest order tracking by ID + phone',
        'Wishlist & one-tap product sharing',
        'Color / size options with photo-linked variants',
        'Coupons, campaigns & homepage banners',
        'Hide/show products without losing order history',
        'WhatsApp order-status message templates',
        'Customer segmentation (New/Repeat/Inactive)',
        'Low-stock alerts & sales snapshot dashboard',
        'Bulk actions, CSV order export & safe-delete logic',
      ],
    },
    {
      id: 'ecom-premium',
      name: 'Premium',
      accent: 'purple',
      priceLabel: 'Custom quote',
      blurb: 'Advanced integrations that scale your business.',
      features: [
        'Google & Facebook social login',
        'Referral program — reward both sides',
        'Steadfast Courier API — auto consignment & tracking',
        'Meta Pixel + Conversions API for FB/IG ads',
        'Google Analytics & AdSense integration',
        'reCAPTCHA bot protection',
        'Gmail SMTP transactional email',
        'SEO-ready sitemap & product URLs',
        'Custom domain (yourshop.com)',
        'Sideloadable Android apps — customer & admin',
        'Role-based staff access (Super Admin)',
        'SSLCommerz online payment',
      ],
      comingSoon: ['SSLCommerz online payment'],
    },
  ],
  demo: {
    title: 'Powered by AIT',
    subtitle: 'Web Development & Digital Marketing — built for Bangladeshi businesses',
    siteLabel: 'Live example',
    siteHref: 'https://aatprohor.com',
    siteText: 'aatprohor.com',
  },
  note:
    'Reference build shown above (Aatprohor). Your website will be customized with your own branding, products, and domain.',
} as const

export type PackageId = (typeof packages)[number]['id'] | (typeof ecommerce.tiers)[number]['id']

export function findOrderable(id: string | null) {
  if (!id) return null
  const fromList = packages.find((pkg) => pkg.id === id)
  if (fromList) return fromList
  const fromEcom = ecommerce.tiers.find((tier) => tier.id === id)
  if (!fromEcom) return null
  return {
    id: fromEcom.id,
    name: `E-Commerce ${fromEcom.name}`,
    priceLabel: fromEcom.priceLabel,
  }
}

export const heroStats = [
  { value: '15+', label: 'Years in global IT' },
  { value: 'Web + App', label: 'Android & iOS support' },
  { value: 'Lifetime', label: 'Support included' },
]

export const workSamples = [
  {
    title: 'AAT Prohor',
    description: 'Live client website — visit aatprohor.com',
    href: 'https://aatprohor.com/',
  },
]

export const supportTerms = [
  {
    title: '1 MONTH',
    description: 'Warranty Period',
    caution: '*Conditions apply',
  },
  {
    title: '3 MONTHS',
    description: 'Enhancement Period',
    caution: '*Conditions apply',
  },
  {
    title: 'LIFETIME',
    description: 'Support',
    caution: '*Conditions apply',
  },
]
