"use client";

import Link from "next/link";
import {
  ArrowLeftOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { ClientSafeIcon } from "../components/ClientSafeIcon";

export default function PrivacyPage() {
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
            <span className="text-xl text-text-main">Privacy Policy</span>
            <div></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="size-16 bg-jar-green rounded-full flex items-center justify-center mx-auto mb-6">
              <ClientSafeIcon
                icon={SafetyCertificateOutlined}
                style={{ fontSize: "32px", color: "white" }}
              />
            </div>
            <h1 className="text-4xl text-text-main mb-4">
              Privacy Policy for Jar Tracker
            </h1>
            <p className="text-xl text-text-light">
              Effective Date: December 13, 2025
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              This Privacy Policy outlines how we handle and protect user data
              within the app Jar Tracker. Please read this document carefully to
              understand our practices.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600">
                Jar Tracker does not collect or transmit any user data. All data
                generated or entered by the user within the app is stored
                locally on the user's device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                2. Data Storage
              </h2>
              <p className="text-gray-600">
                All user data is stored exclusively on the user's device. We do
                not maintain servers or external databases to store any
                information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                3. Data Security
              </h2>
              <p className="text-gray-600">
                We take reasonable measures to secure the data stored on the
                device. However, it is important for users to implement device
                security measures, such as passcodes or biometric
                authentication, to further protect their data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                4. Backup Option
              </h2>
              <p className="text-gray-600">
                Jar Tracker provides users with the option to back up their data
                and save it to a cloud storage. If users choose to use this
                feature, it is important to note that the backup will be stored
                on the user's selected cloud storage provider. Users should
                refer to the privacy policy of their chosen cloud storage
                provider for information on how their data is handled and
                secured.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                5. Google Play Installation
              </h2>
              <p className="text-gray-600">
                If you installed Jar Tracker through Google Play, your use of
                the app is also subject to Google's privacy policy. Please refer
                to Google Play's privacy policy for information on how Google
                collects, uses, and protects your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                6. Changes to the Privacy Policy
              </h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. Any changes will be effective immediately
                upon posting the updated Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                7. Data Loss Disclaimer
              </h2>
              <p className="text-gray-600">
                Jar Tracker is not responsible for any data loss or damage that
                may occur, including but not limited to accidental deletion,
                device malfunction, or any other unforeseen circumstances. Users
                are encouraged to regularly back up their data and take
                necessary precautions to prevent data loss.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                8. Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at{" "}
                <a
                  href="mailto:vbdesignapps@gmail.com"
                  className="text-jar-green hover:underline"
                >
                  vbdesignapps@gmail.com
                </a>
                .
              </p>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-gray-600 text-center">
                <strong>
                  By using Jar Tracker, you agree to the terms outlined in this
                  Privacy Policy.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
