const services = [
  {
    title: "Shopify Studio",
    description:
      "High-converting storefronts, subscription flows, and B2B tooling crafted with Liquid, Hydrogen, and custom apps.",
    playbooks: [
      "Theme systems & storytelling modules",
      "Subscriptions, checkout experiments",
      "Markets, localization, and B2B dashboards"
    ],
    outcomes: ["Conversion optimization", "Retention programs", "Operational visibility"],
  },
  {
    title: "WordPress & WooCommerce Systems",
    description:
      "Composable content hubs and commerce experiences powered by Gutenberg, ACF, headless architectures, and performance-first engineering.",
    playbooks: [
      "Headless and hybrid builds",
      "Editorial workflows and governance",
      "Scale, caching, and observability"
    ],
    outcomes: ["Faster publishing", "Accessible design systems", "Resilient infrastructure"],
  },
  {
    title: "Full-stack Product Engineering",
    description:
      "Next.js and Node-based products with data-rich dashboards, real-time collaboration, and reliable APIs.",
    playbooks: [
      "Product strategy and architecture",
      "Design system-led implementation",
      "CI/CD, quality gates, and telemetry"
    ],
    outcomes: ["Velocity without regression", "Measurable product KPIs", "Maintainable codebases"],
  },
  {
    title: "Automation & Operations",
    description:
      "Workflows that connect Shopify, CRMs, finance, and analytics stacks using Zapier, Make, Workato, and custom integrations.",
    playbooks: [
      "Operational dashboards & alerts",
      "Finance reconciliation & reporting",
      "Partner and lifecycle orchestration"
    ],
    outcomes: ["Hours saved weekly", "Fewer manual errors", "Aligned cross-team data"],
  },
  {
    title: "Healthcare Platforms",
    description:
      "Patient, provider, and operations tooling built with compliance-first architectures and measured outcomes.",
    playbooks: [
      "Telemedicine experiences",
      "Care coordination and RPM",
      "Data interoperability and analytics"
    ],
    outcomes: ["Improved care metrics", "Regulatory readiness", "Trustworthy patient journeys"],
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-br from-gray-900 via-brand-800 to-brand-600 text-white px-8 py-12 shadow-[0_30px_90px_-50px_rgba(12,25,64,0.92)]">
        <h1 className="text-3xl font-semibold">Service Playbooks</h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80">
          Every engagement combines architecture, execution, and measurable outcomes. Here are the playbooks I run most
          often with founders, product teams, and operators.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="glass-card p-8 hover:-translate-y-1 transition"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{service.title}</h2>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Playbooks</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {service.playbooks.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Outcomes</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100/80 text-gray-700 dark:bg-gray-800/70 dark:text-gray-200"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}



