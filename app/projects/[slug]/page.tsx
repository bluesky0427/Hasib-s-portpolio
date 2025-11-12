import { notFound } from "next/navigation";
import { findProject } from "@/data/projects";
import ProjectMedia from "@/components/ProjectMedia";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = findProject(params.slug);
  if (!project) return notFound();

  return (
    <div className="space-y-12">
      <header className="rounded-3xl bg-gradient-to-r from-gray-900 via-brand-800 to-brand-600 text-white px-10 py-12 shadow-[0_30px_80px_-40px_rgba(12,25,64,0.9)]">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          <span>{project.category}</span>
          <span className="h-px w-8 bg-white/30" />
          <span>{project.timeline}</span>
          <span className="h-px w-8 bg-white/30" />
          <span>{project.industry}</span>
        </div>
        <h1 className="mt-6 text-3xl sm:text-4xl font-semibold leading-tight">{project.name}</h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">{project.summary}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-sm font-medium">
            <span className="text-white/90">Role</span>
            <span className="text-white">{project.role}</span>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-brand-700 px-5 py-2 text-sm font-semibold shadow-lg shadow-brand-900/10 transition hover:bg-white/90"
            >
              <span>Visit Live Site</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </header>

      <section className="grid lg:grid-cols-[1.6fr,1fr] gap-10">
        <div className="space-y-8">
          <ProjectMedia project={project} />
        </div>
        <aside className="space-y-8">
          <div className="rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-6 py-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">Goal</h2>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{project.goal}</p>
          </div>

          <div className="rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-6 py-6 space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">Approach</h2>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              {project.approach.map((item: string, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-6 py-6 space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">Technical Highlights</h2>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              {project.technicalHighlights.map((item: string, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-6 py-6 space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">Results</h2>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              {project.results.map((item: string, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-6 py-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">Core Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-gray-700 dark:text-gray-200 bg-gray-100/80 dark:bg-gray-800/70 px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}



