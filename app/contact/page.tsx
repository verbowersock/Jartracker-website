"use client";

import { useState } from "react";
import { MailOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { ClientSafeIcon } from "../components/ClientSafeIcon";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-page-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card-bg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <ClientSafeIcon
                icon={ArrowLeftOutlined}
                style={{ fontSize: "20px" }}
              />
              <span>Back to Home</span>
            </Link>
            <span className="text-xl text-text-main">Contact Us</span>
            <div></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <div className="size-16 bg-jar-green rounded-full flex items-center justify-center mx-auto mb-6">
              <ClientSafeIcon
                icon={MailOutlined}
                style={{ fontSize: "32px", color: "white" }}
              />
            </div>
            <h1 className="text-4xl text-text-main mb-4">Get in Touch</h1>
            <p className="text-xl text-text-light">
              Have questions about JarTracker? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            {status === "success" && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800">
                  Thanks for reaching out! We'll get back to you soon.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800">
                  Something went wrong. Please try again or email us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jar-green focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jar-green focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jar-green focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jar-green focus:border-transparent"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-jar-green hover:bg-jar-green-dark text-white py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                You can also email us directly at{" "}
                <a
                  href="mailto:vbdesignapps@gmail.com"
                  className="text-jar-green hover:underline"
                >
                  vbdesignapps@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
