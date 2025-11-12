import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const highlights = [
  { label: "Shopify Launches", value: "35+" },
  { label: "Automation Hours Saved", value: "2,400+" },
  { label: "Industries Served", value: "12" }
];

export default function HomePage() {
  const featured = projects.slice(0, 6);
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-gray-900 text-white px-8 py-14 shadow-[0_30px_80px_-40px_rgba(17,89,146,0.9)]">
        <div className="absolute inset-y-0 right-0 w-2/5 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_55%)] opacity-70" />
        <div className="relative grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide">
              Hasibuzzaman · Full Stack Engineer
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Modern commerce, CMS, and automation engineered for measurable outcomes.
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-xl">
              I partner with founders and product teams to build resilient Shopify ecosystems, headless WordPress experiences, automation backbones, and healthcare platforms that feel reliable and refined.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 px-5 py-4">
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="text-sm text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -translate-x-6 -translate-y-6 rounded-3xl border border-white/20" />
            <ImagePlaceholder file="hasib-portrait.png" folder="brand" aspectRatio="3/4" />
          </div>
        </div>
        <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Featured builds</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
              A snapshot of recent Shopify, WordPress, full-stack, automation, and healthcare collaborations with deep technical ownership.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-medium text-brand-600 hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
          >
            Explore all projects →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

