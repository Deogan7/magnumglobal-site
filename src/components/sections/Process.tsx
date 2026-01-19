const steps = [
  {
    number: "01",
    title: "Inquiry",
    description:
      "Submit your requirements through our contact form. Specify product types, grades, quantities, and destination.",
  },
  {
    number: "02",
    title: "Quotation",
    description:
      "Receive a detailed quote with pricing, availability, and shipping estimates tailored to your needs.",
  },
  {
    number: "03",
    title: "Confirmation",
    description:
      "Review and confirm your order. Payment terms and logistics are finalized at this stage.",
  },
  {
    number: "04",
    title: "Processing",
    description:
      "Your order is prepared, quality-checked, and packaged according to specifications.",
  },
  {
    number: "05",
    title: "Shipping",
    description:
      "Container loaded and dispatched with full documentation for customs clearance at destination.",
  },
  {
    number: "06",
    title: "Delivery",
    description:
      "Track your shipment to arrival. Our team remains available for any post-delivery support.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 lg:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A straightforward process from initial inquiry to delivery at your
            destination.
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-sky-600 to-emerald-500 text-sm font-semibold text-white shadow-lg shadow-sky-500/30">
                      {step.number}
                    </span>
                    {index < 3 && (
                      <span
                        className="mt-3 h-10 w-0.5 bg-linear-to-b from-sky-500/80 via-emerald-400/70 to-transparent animate-step-trail"
                        style={{ animationDelay: `${index * 0.3}s` }}
                      />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:mt-16 bg-linear-to-r from-sky-600 to-emerald-500 rounded-2xl p-8 lg:p-12 shadow-lg shadow-sky-500/25">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Ready to get started?
              </h3>
              <p className="mt-2 text-white/85">
                Contact us today with your requirements and receive a quote
                within 24-48 hours.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-white transition-colors whitespace-nowrap"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
