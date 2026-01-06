import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 bg-jar-green rounded-lg flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Jar Tracker Logo"
                  width={32}
                  height={32}
                  className="rounded-xl"
                />
              </div>
              <span className="text-xl text-white">Jar Tracker</span>
            </div>
            <p className="text-sm text-gray-400">
              Smart organization for home canners everywhere.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-emerald-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Join the Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://vbdesigns.dev/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Jar Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
