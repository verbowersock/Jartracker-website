import Image from "next/image";
const steps = [
  {
    number: "01",
    title: "Create a Batch Entry",
    description:
      "Add details about your canned goods - what's inside, when you made it, and which recipe you used.",
  },
  {
    number: "02",
    title: "Generate QR Code",
    description:
      "Our app creates a unique QR code for each jar. Print it out or save it to your phone.",
  },
  {
    number: "03",
    title: "Attach to Jar",
    description:
      "Stick the QR code label on your jar lid or side. Use waterproof labels for best results.",
  },
  {
    number: "04",
    title: "Scan & Track",
    description:
      "Scan any jar to see all its details instantly. Mark jars as used by scanning the code or manually updating the status.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Organize your pantry in four simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 size-16 bg-jar-orange text-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/how-it-works-image.jpg"
                alt="Home canning vegetables"
                width={540}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
