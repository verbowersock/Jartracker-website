import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Features } from "@/app/components/Features";
import { HowItWorks } from "@/app/components/HowItWorks";
import { CTA } from "@/app/components/CTA";
import { Footer } from "@/app/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
