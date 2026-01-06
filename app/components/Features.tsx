"use client";

import {
  QrcodeOutlined,
  LineChartOutlined,
  InboxOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { ClientSafeIcon } from "./ClientSafeIcon";

const features = [
  {
    icon: QrcodeOutlined,
    title: "QR Code Generation",
    description:
      "Instantly generate unique QR codes for each jar. Print and stick them on your lids for quick identification.",
  },
  {
    icon: LineChartOutlined,
    title: "Usage Insights",
    description:
      "See what you preserve most and plan your next canning session accordingly.",
  },
  {
    icon: InboxOutlined,
    title: "Inventory Management",
    description:
      "See your entire pantry at a glance. Know exactly what you have and what you need to make next.",
  },
  {
    icon: SafetyCertificateOutlined,
    title: "Recipe Storage",
    description:
      "Store your canning recipes alongside your jars. Never forget which recipe made that delicious jam.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-card-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4 text-text-main">
            Everything You Need to Organize Your Pantry
          </h2>
          <p className="text-xl text-text-light">
            Powerful features designed specifically for home canners who take
            their preservation seriously.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-jar-orange hover:shadow-lg transition-all"
              >
                <div className="size-12 bg-jar-orange rounded-lg flex items-center justify-center mb-4">
                  <ClientSafeIcon
                    icon={feature.icon}
                    style={{ fontSize: "24px", color: "white" }}
                  />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
