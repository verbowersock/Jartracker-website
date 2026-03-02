"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { ClientSafeIcon } from "./ClientSafeIcon";

export function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (mounted && typeof window !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card-bg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="size-8 bg-jar-green rounded-lg flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Jar Tracker Logo"
                width={32}
                height={32}
                className="rounded-xl"
              />
            </div>

            <span className="text-xl text-text-main">Jar Tracker</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-text-light hover:text-jar-green transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-text-light hover:text-jar-green transition-colors"
            >
              How It Works
            </button>
            {/* <a
              href="#pricing"
              className="text-text-light hover:text-jar-green transition-colors"
            >
              Join the Waitlist
            </a> */}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.veronikab.jartracker&hl=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 bg-jar-orange hover:bg-jar-orange text-white px-3 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
            >
              <ClientSafeIcon
                icon={AndroidOutlined}
                style={{ fontSize: "16px" }}
              />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={() => scrollToSection("cta")}
              className="flex items-center gap-1 sm:gap-2 bg-jar-green hover:bg-jar-green-dark text-text-on-green px-3 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
            >
              <ClientSafeIcon
                icon={AppleOutlined}
                style={{ fontSize: "16px" }}
              />
              <span className="hidden sm:inline">Join the Waitlist</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
