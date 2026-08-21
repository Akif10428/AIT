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

export type PackageId = (typeof packages)[number]['id']

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
  },
  {
    title: '3 MONTHS',
    description: 'Enhancement Period',
  },
  {
    title: 'LIFETIME',
    description: 'Support',
  },
]
