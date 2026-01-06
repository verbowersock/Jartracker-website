export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JarTracker",
  description:
    "Smart jar organization with QR code tracking for home-canned goods",
  url: "https://jartracker.vbdesigns.dev",
  logo: "https://jartracker.vbdesigns.dev/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "vbdesignapps@gmail.com",
    contactType: "customer service",
  },
  sameAs: [
    // Add your social media links here when you have them
    // "https://twitter.com/jartracker",
    // "https://facebook.com/jartracker"
  ],
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JarTracker",
  description:
    "Transform your pantry organization with QR code tracking for home-canned goods. Never forget what's in your jars or when you made them.",
  applicationCategory: "LifestyleApplication",
  operatingSystem: ["iOS", "Android"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free forever plan available",
  },
  author: {
    "@type": "Organization",
    name: "VBDesigns",
  },
  downloadUrl: [
    // Add these when your app is published
    // "https://apps.apple.com/app/jartracker",
    // "https://play.google.com/store/apps/details?id=com.jartracker"
  ],
};
