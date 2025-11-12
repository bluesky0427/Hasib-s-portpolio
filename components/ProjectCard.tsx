import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur ring-1 ring-gray-200/70 dark:ring-gray-800/70 shadow-[0_12px_40px_-24px_rgba(10,30,60,0.55)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_-20px_rgba(10,30,60,0.65)]"
    >
      <div className="p-4 pb-0">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-700/10 opacity-0 group-hover:opacity-100 transition" />
          <ImagePlaceholder file={project.coverImage.file} folder={project.coverImage.folder} />
        </div>
      </div>
      <div className="px-5 py-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-brand-600 dark:text-brand-300 bg-brand-50/70 dark:bg-brand-900/30 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-xs text-gray-500">{project.timeline}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug text-gray-900 dark:text-gray-100">
          {project.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{project.summary}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100/80 dark:bg-gray-800/70 px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}



