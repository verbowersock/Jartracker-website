"use client";

import { QrcodeOutlined } from "@ant-design/icons";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import { ClientSafeIcon } from "./ClientSafeIcon";
import Image from "next/image";
import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<"android" | "ios" | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform) {
      setStatus("error");
      return;
    }
    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, platform }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setPlatform(null);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-jar-green to-jar-green-dark text-text-on-green relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <ClientSafeIcon icon={QrcodeOutlined} style={{ fontSize: "128px" }} />
        </div>
        <div className="absolute bottom-10 right-10">
          <ClientSafeIcon icon={QrcodeOutlined} style={{ fontSize: "128px" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-[rgba(0,0,0,0)]">
          <div>
            <h2 className="text-4xl lg:text-5xl mb-6">
              Ready to Organize Your Canning Collection?
            </h2>
            <p className="text-xl mb-8 text-white">
              Be among the first to transform your pantry organization with
              revolutionary QR code technology.
            </p>
            <p className="text-lg mb-8 text-white">
              PS. We hate spam too! No useless emails, just notifications about
              the app launch.
            </p>

            {/* Platform Selection */}
            <div className="mb-6">
              <p className="text-lg mb-4 text-white">Choose your platform:</p>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setPlatform("ios")}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg border-2 transition-colors ${
                    platform === "ios"
                      ? "bg-white text-jar-green border-white"
                      : "border-white text-white hover:bg-white/10"
                  }`}
                >
                  <ClientSafeIcon
                    icon={AppleOutlined}
                    style={{ fontSize: "24px" }}
                  />
                  iOS
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform("android")}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg border-2 transition-colors ${
                    platform === "android"
                      ? "bg-white text-jar-green border-white"
                      : "border-white text-white hover:bg-white/10"
                  }`}
                >
                  <ClientSafeIcon
                    icon={AndroidOutlined}
                    style={{ fontSize: "24px" }}
                  />
                  Android
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="px-6 py-4 rounded-lg text-gray-900 flex-1 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={
                    status === "loading" || status === "success" || !platform
                  }
                  className="bg-jar-orange text-white px-8 py-4 rounded-lg hover:bg-jar-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading"
                    ? "Joining..."
                    : status === "success"
                    ? "✓ Joined!"
                    : `Join ${platform ? platform.toUpperCase() : ""} waitlist`}
                </button>
              </div>
            </form>

            {status === "error" && (
              <p className="text-red-300 text-sm mb-4">
                {!platform
                  ? "Please select a platform first."
                  : "Something went wrong. Please try again."}
              </p>
            )}

            {status === "success" && (
              <p className="text-green-300 text-sm mb-4">
                Thanks! We&apos;ll notify you when JarTracker for{" "}
                {platform?.toUpperCase()} is ready.
              </p>
            )}

            <p className="text-sm text-white">
              No credit card required • Free forever plan available
            </p>
          </div>

          <div className="relative lg:block hidden">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/cta-qr-scan.png"
                alt="QR code scanning"
                width={540}
                height={360}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
