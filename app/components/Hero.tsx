"use client";

import { QrcodeOutlined } from "@ant-design/icons";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import { ClientSafeIcon } from "./ClientSafeIcon";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Hero() {
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
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#d5ded4] to-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl">
              Track Your Home Canning with ease
            </h1>

            <p className="text-xl text-gray-600">
              Your home-canned treasures deserve better than sticky notes. Never
              forget what&apos;s in your jars or when you made them. Scan,
              track, and organize your home-canned goods with Jar Tracker.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("cta")}
                className="bg-jar-orange hover:bg-jar-orange text-white px-8 py-4 rounded-lg transition-colors"
              >
                Join the waitlist
              </button>
              {/* <button className="border-2 border-gray-300 hover:border-jar-green text-gray-700 px-8 py-4 rounded-lg transition-colors">
                Watch Demo
              </button> */}
            </div>

            {/* Platform indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-gray-600">Coming soon for:</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <ClientSafeIcon icon={AppleOutlined} style={{ fontSize: '20px' }} />
                  <span>iOS</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <ClientSafeIcon icon={AndroidOutlined} style={{ fontSize: '20px' }} />
                  <span>Android</span>
                </div>
              </div>
            </div>

            {/* <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl text-primary">10k+</div>
                <div className="text-gray-600">Jars Tracked</div>
              </div>
              <div>
                <div className="text-3xl text-primary">2k+</div>
                <div className="text-gray-600">Happy Canners</div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-mason-jars.jpg"
                width={540}
                height={600}
                alt="Mason jars with preserved foods"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements
            <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
