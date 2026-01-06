import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./styles/index.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "JarTracker - Smart Jar Organization",
    template: "%s | JarTracker",
  },
  description:
    "Transform your pantry organization with QR code tracking for home-canned goods. Never forget what's in your jars or when you made them.",
  keywords: [
    "jar tracking",
    "home canning",
    "QR code",
    "pantry organization",
    "food storage",
    "canning app",
    "preserve tracking",
  ],
  authors: [{ name: "VBDesigns" }],
  creator: "VBDesigns",
  publisher: "VBDesigns",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <GoogleAnalytics />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
