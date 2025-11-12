"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import FilterBar from "@/components/FilterBar";
import { projects, allCategories } from "@/data/projects";

export default function ProjectsPage() {
  const categories = useMemo(() => allCategories(), []);
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-white/80 dark:bg-gray-900/70 backdrop-blur ring-1 ring-gray-200/70 dark:ring-gray-800/80 px-8 py-10 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.85)]">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Projects</h1>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 max-w-3xl">
          Deep dives into Shopify ecosystems, WooCommerce scale-ups, WordPress transformations, full-stack products, automation backbones, and healthcare platforms. Each case outlines the goal, delivery approach, and measurable impact.
        </p>
      </div>
      <div className="rounded-full bg-white/80 dark:bg-gray-900/70 backdrop-blur ring-1 ring-gray-200/70 dark:ring-gray-800/80 px-4 py-3 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.8)]">
        <FilterBar categories={categories} active={active} onChange={setActive} />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}



