import ImageCarousel from "./ImageCarousel";
import AnimatedGallery from "./AnimatedGallery";
import MasonryGrid from "./MasonryGrid";
import ImagePlaceholder from "./ImagePlaceholder";

type VisualMode = "caseStudy" | "process" | "techStack" | "dataViz";

type GalleryImage = {
  file: string;
  folder?: string;
  title?: string;
  caption?: string;
  tag?: string;
  stage?: string;
};

type ProjectMediaProps = {
  project: {
    category: string;
    tech: string[];
    approach: string[];
    technicalHighlights: string[];
    results: string[];
    gallery?: GalleryImage[];
    coverImage: { file: string; folder?: string };
    visualMode?: VisualMode;
    timeline?: string;
    industry?: string;
    liveUrl?: string;
  };
};

const DEFAULT_MODE_BY_CATEGORY: Record<string, VisualMode> = {
  Shopify: "caseStudy",
  WooCommerce: "process",
  WordPress: "process",
  "Full Stack": "techStack",
  Automation: "dataViz",
  Healthcare: "caseStudy",
};

const SKILL_GROUPS: Record<string, string> = {
  // Frontend & UI
  React: "Frontend",
  "Next.js": "Frontend",
  Remix: "Frontend",
  Hydrogen: "Frontend",
  Tailwind: "Frontend",
  "Tailwind CSS": "Frontend",
  AlpineJS: "Frontend",
  "Three.js": "Frontend",
  "Gutenberg": "Frontend",
  "Sage Theme": "Frontend",

  // Backend & APIs
  "Node.js": "Backend",
  "Express": "Backend",
  "NestJS": "Backend",
  GraphQL: "Backend",
  REST: "Backend",
  "AWS Lambda": "Backend",
  "Cloudflare Workers": "Backend",
  "Azure Functions": "Backend",

  // CMS & Commerce
  Shopify: "Commerce & CMS",
  "Shopify Plus": "Commerce & CMS",
  WooCommerce: "Commerce & CMS",
  WordPress: "Commerce & CMS",
  "Sanity CMS": "Commerce & CMS",
  ACF: "Commerce & CMS",
  ElasticPress: "Commerce & CMS",
  "Shopify Markets": "Commerce & CMS",
  "Theme App Extensions": "Commerce & CMS",

  // Data & Automation
  "PostgreSQL": "Data & Automation",
  "TimescaleDB": "Data & Automation",
  Supabase: "Data & Automation",
  "Drizzle ORM": "Data & Automation",
  MongoDB: "Data & Automation",
  Kafka: "Data & Automation",
  Redis: "Data & Automation",
  Elasticsearch: "Data & Automation",
  Neo4j: "Data & Automation",
  DynamoDB: "Data & Automation",
  "Power BI": "Data & Automation",
  Segment: "Data & Automation",
  Zapier: "Data & Automation",
  Airtable: "Data & Automation",
  "Make (Integromat)": "Data & Automation",
  Workato: "Data & Automation",
  "Salesforce": "Data & Automation",
  "Google BigQuery": "Data & Automation",
  Looker: "Data & Automation",
  Firebase: "Data & Automation",
  WebRTC: "Data & Automation",

  // Cloud & DevOps
  AWS: "Cloud & DevOps",
  "AWS IoT Core": "Cloud & DevOps",
  "AWS SQS": "Cloud & DevOps",
  "CloudFront": "Cloud & DevOps",
  Vercel: "Cloud & DevOps",
  "Azure AD": "Cloud & DevOps",
};

const PROCESS_FALLBACK_STAGES = ["Discovery", "Build", "Launch", "Scale"];

export default function ProjectMedia({ project }: ProjectMediaProps) {
  const { coverImage, gallery = [] } = project;
  const allImages = gallery.length
    ? [{ ...coverImage }, ...gallery]
    : [{ ...coverImage }];

  const visualMode: VisualMode =
    project.visualMode ??
    DEFAULT_MODE_BY_CATEGORY[project.category] ??
    "caseStudy";

  switch (visualMode) {
    case "process":
      return (
        <ProcessMedia
          project={project}
          allImages={allImages}
          gallery={gallery}
        />
      );
    case "techStack":
      return (
        <TechStackMedia
          project={project}
          allImages={allImages}
          gallery={gallery}
        />
      );
    case "dataViz":
      return (
        <DataVizMedia
          project={project}
          allImages={allImages}
          gallery={gallery}
        />
      );
    case "caseStudy":
    default:
      return (
        <CaseStudyMedia
          project={project}
          allImages={allImages}
          gallery={gallery}
        />
      );
  }
}

function CaseStudyMedia({
  project,
  allImages,
  gallery,
}: {
  project: ProjectMediaProps["project"];
  allImages: GalleryImage[];
  gallery: GalleryImage[];
}) {
  const breakthroughs = project.technicalHighlights.slice(0, 4);

  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-white/60 dark:bg-gray-900/40 backdrop-blur border border-gray-200/70 dark:border-gray-800/70 shadow-xl shadow-brand-900/5">
        <ImageCarousel images={allImages} />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        {gallery.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Experience Highlights
              </h3>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Case Study
              </span>
            </div>
            <AnimatedGallery images={gallery} columns={3} />
          </div>
        )}

        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/80 dark:bg-gray-900/70 p-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
              Engineering Breakthroughs
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-gray-700 dark:text-gray-300">
              {breakthroughs.map((item, index) => (
                <li
                  key={index}
                  className="relative rounded-xl border border-gray-200/60 dark:border-gray-800/70 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-3 shadow-sm"
                >
                  <div className="absolute -left-3 top-4 h-6 w-6 rounded-full bg-brand-500 text-white text-xs font-semibold flex items-center justify-center shadow-lg shadow-brand-500/40">
                    {index + 1}
                  </div>
                  <div className="ml-6">
                    <p>{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <SkillStack project={project} />
        </div>
      </div>
    </div>
  );
}

function ProcessMedia({
  project,
  allImages,
  gallery,
}: {
  project: ProjectMediaProps["project"];
  allImages: GalleryImage[];
  gallery: GalleryImage[];
}) {
  const steps = project.approach.map((step, index) => {
    const imageSource =
      gallery.length > 0
        ? gallery[index % gallery.length]
        : allImages[index % allImages.length];
    const image = imageSource ?? allImages[0];
    const stage =
      gallery[index]?.stage ??
      PROCESS_FALLBACK_STAGES[index] ??
      `Phase ${index + 1}`;

    return {
      stage,
      description: step,
      image,
    };
  });

  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-gradient-to-br from-brand-900/90 via-brand-800/70 to-brand-600/60 p-[1px] shadow-xl shadow-brand-900/30">
        <div className="rounded-[calc(theme(borderRadius.3xl)_-_1px)] bg-white/80 dark:bg-gray-950/70 backdrop-blur">
          <ImageCarousel images={allImages} />
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Execution Flow
          </h3>
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            Delivery Blueprint
          </span>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid gap-6 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 bg-white/80 dark:bg-gray-900/60 p-6 lg:grid-cols-[1.1fr,1fr]"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-300">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  {step.stage}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
              <div className="overflow-hidden rounded-xl bg-gray-100/70 dark:bg-gray-800/60">
                <ImagePlaceholder
                  file={step.image.file}
                  folder={step.image.folder}
                  aspectRatio="4/3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechStackMedia({
  project,
  allImages,
  gallery,
}: {
  project: ProjectMediaProps["project"];
  allImages: GalleryImage[];
  gallery: GalleryImage[];
}) {
  const stacks = groupTechByDiscipline(project.tech);

  return (
    <div className="space-y-10">
      <div className="space-y-6 rounded-3xl border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-900/60 p-6">
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Technology Architecture
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              How the full stack comes together across layers.
            </p>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            Tech Stack
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(stacks).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-gray-200/70 dark:border-gray-800/70 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 p-5 shadow-sm"
            >
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {group}
              </h4>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-brand-600 dark:text-brand-300">
                Core Skills
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-brand-900/90 via-brand-800/70 to-brand-600/60 p-[1px] shadow-xl shadow-brand-900/30">
        <div className="rounded-[calc(theme(borderRadius.3xl)_-_1px)] bg-white/80 dark:bg-gray-950/70 backdrop-blur">
          <ImageCarousel images={allImages} />
        </div>
      </div>

      {project.technicalHighlights.length > 0 && (
        <div className="rounded-3xl border border-gray-200/70 dark:border-gray-800/70 bg-white/80 dark:bg-gray-900/70 p-6 space-y-4 shadow-lg shadow-brand-900/10">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Engineering Focus Areas
            </h3>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
              Build Details
            </span>
          </div>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            {project.technicalHighlights.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {gallery.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            System Interfaces
          </h3>
          <AnimatedGallery images={gallery} columns={3} />
        </div>
      )}
    </div>
  );
}

function DataVizMedia({
  project,
  allImages,
  gallery,
}: {
  project: ProjectMediaProps["project"];
  allImages: GalleryImage[];
  gallery: GalleryImage[];
}) {
  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-gradient-to-br from-brand-900/90 via-brand-700/70 to-brand-500/60 p-[1px] shadow-xl shadow-brand-900/30">
        <div className="rounded-[calc(theme(borderRadius.3xl)_-_1px)] bg-gray-950 text-white">
          <ImageCarousel images={allImages} />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
        <div className="space-y-6">
          {gallery.length > 0 && (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Data Stories
                </h3>
                <span className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                  Analytics & Insights
                </span>
              </div>
              <MasonryGrid images={gallery} />
            </>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200/70 dark:border-gray-800/70 bg-white/80 dark:bg-gray-900/70 p-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
              Impact Metrics
            </h4>
            <ul className="mt-4 space-y-4">
              {project.results.map((result, index) => (
                <li
                  key={index}
                  className="rounded-xl border border-brand-500/20 bg-brand-500/10 px-4 py-3 text-sm font-medium text-brand-700 dark:text-brand-200"
                >
                  {result}
                </li>
              ))}
            </ul>
          </div>

          <SkillStack project={project} />
        </div>
      </div>
    </div>
  );
}

function SkillStack({ project }: { project: ProjectMediaProps["project"] }) {
  const stacks = groupTechByDiscipline(project.tech);

  return (
    <div className="rounded-2xl border border-gray-200/70 dark:border-gray-800/70 bg-white/80 dark:bg-gray-900/70 p-6">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
        Skill Stack
      </h4>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {Object.entries(stacks).map(([group, items]) => (
          <div key={group} className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
              {group}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-100/80 dark:bg-gray-800/60 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function groupTechByDiscipline(tech: string[]) {
  return tech.reduce<Record<string, string[]>>((acc, item) => {
    const group = SKILL_GROUPS[item] ?? "Additional Expertise";
    const current = acc[group] ?? [];
    if (!current.includes(item)) {
      current.push(item);
    }
    acc[group] = current;
    return acc;
  }, {});
}


