import "./globals.css";
import Link from "next/link";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

export const metadata = {
  title: "Hasibuzzaman — Portfolio",
  description:
    "Full Stack Engineer | CMS & Automation. Portfolio showcasing Shopify, WordPress, automation, full-stack, and healthcare projects.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={sora.variable}>
      <body className="min-h-screen bg-slate-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
            <div className="absolute top-1/3 -left-16 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />
            <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-brand-700/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pb-16">
            <header className="pt-10 pb-8 flex items-center justify-between">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Hasibuzzaman
              </Link>
              <nav className="flex items-center gap-2 rounded-full bg-white/80 dark:bg-gray-900/60 backdrop-blur px-1 py-1 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.9)] ring-1 ring-gray-200/60 dark:ring-gray-800/70">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition rounded-full dark:text-gray-200 dark:hover:text-brand-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </header>
            <main className="py-8">{children}</main>
            <footer className="mt-20 rounded-3xl bg-white/80 dark:bg-gray-900/70 backdrop-blur px-8 py-10 ring-1 ring-gray-200/70 dark:ring-gray-800/80 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.85)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Hasibuzzaman</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Full Stack Engineer crafting commerce, CMS, automation, and healthcare products.
                  </p>
                </div>
                <p className="text-xs text-gray-400">
                  © {new Date().getFullYear()} Hasibuzzaman. All work shown highlights engineering craft and outcomes.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}



