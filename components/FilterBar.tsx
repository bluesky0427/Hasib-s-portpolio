export default function FilterBar({
  categories,
  active,
  onChange
}: {
  categories: string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {["All", ...categories].map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={[
              "px-4 py-1.5 rounded-full text-sm font-medium transition backdrop-blur border",
              isActive
                ? "bg-brand-600 text-white border-brand-500 shadow-[0_12px_30px_-18px_rgba(26,166,255,0.8)]"
                : "bg-white/40 text-gray-600 border-gray-200 hover:bg-white/70 dark:bg-gray-800/60 dark:text-gray-200 dark:border-gray-700/60 dark:hover:bg-gray-800"
            ].join(" ")}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}



