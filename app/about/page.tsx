import ImagePlaceholder from "@/components/ImagePlaceholder";

const focusAreas = [
  "Shopify ecosystems (Liquid, Hydrogen, Theme App Extensions, embedded apps)",
  "WordPress & WooCommerce (headless, multisite, performance, editorial workflows)",
  "Next.js and Node products with data-rich dashboards and real-time collaboration",
  "Automation spanning Zapier, Make, Workato, custom integrations, and analytics pipelines",
  "Healthcare platforms with compliance-minded architectures and measurable outcomes"
];

const principles = [
  {
    title: "Architected for change",
    detail: "Design systems, structured content, and modular codebases keep teams shipping quickly without regressions."
  },
  {
    title: "Outcome-driven builds",
    detail: "Every engagement starts with metrics—conversion, retention, time saved—and ends with instrumentation to prove it."
  },
  {
    title: "Craft in the details",
    detail: "Micro-interactions, accessible experiences, and fast performance transform products into experiences people trust."
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
        <div className="glass-card p-10 space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">About Hasibuzzaman</h1>
          <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
            I'm a full stack engineer who gravitates toward complex commerce, CMS, automation, and healthcare initiatives.
            Over the last decade I've partnered with founders, agencies, and product teams to ship systems that scale, feel effortless, and deliver measurable business results.
          </p>
          <div className="rounded-2xl bg-slate-100/80 dark:bg-gray-800/70 px-6 py-5 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Focus</h2>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {focusAreas.map((area) => (
                <li key={area} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl border border-brand-200/40 dark:border-brand-900/40" />
          <ImagePlaceholder file="hasib-portrait.png" folder="brand" aspectRatio="3/4" />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {principles.map((principle) => (
          <article key={principle.title} className="glass-card p-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{principle.title}</h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{principle.detail}</p>
          </article>
        ))}
      </section>
    </div>
  );
}



