import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/data";

function ComputerIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="size-full" aria-hidden="true">
      <rect x="20" y="20" width="120" height="80" rx="6" fill="#e2e8f0" />
      <rect x="28" y="28" width="104" height="64" rx="2" fill="#f8fafc" />
      <rect x="60" y="105" width="40" height="8" rx="2" fill="#cbd5e1" />
      <rect x="45" y="115" width="70" height="6" rx="3" fill="#e2e8f0" />
      <circle cx="170" cy="95" r="18" fill="#101b63" />
      <rect x="158" y="85" width="24" height="20" rx="3" fill="#e21b23" />
    </svg>
  );
}

function CellphoneIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="size-full" aria-hidden="true">
      <rect x="75" y="15" width="50" height="100" rx="10" fill="#101b63" />
      <rect x="80" y="25" width="40" height="75" rx="4" fill="#f8fafc" />
      <circle cx="100" cy="110" r="5" fill="#f8fafc" />
      <rect x="140" y="50" width="35" height="60" rx="8" fill="#e21b23" opacity="0.9" />
      <rect x="145" y="58" width="25" height="44" rx="3" fill="#f8fafc" opacity="0.9" />
    </svg>
  );
}

function FurnitureIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="size-full" aria-hidden="true">
      <rect x="30" y="60" width="80" height="70" rx="4" fill="#e2e8f0" />
      <rect x="35" y="65" width="70" height="55" rx="2" fill="#f8fafc" />
      <rect x="30" y="55" width="80" height="8" rx="2" fill="#101b63" />
      <rect x="40" y="130" width="8" height="12" rx="2" fill="#cbd5e1" />
      <rect x="92" y="130" width="8" height="12" rx="2" fill="#cbd5e1" />
      <path d="M130 130 L150 70 L170 130 Z" fill="#e21b23" opacity="0.9" />
      <rect x="140" y="85" width="20" height="45" rx="2" fill="#f8fafc" />
    </svg>
  );
}

function DetergentsIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="size-full" aria-hidden="true">
      <rect x="55" y="40" width="40" height="90" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
      <rect x="62" y="30" width="26" height="12" rx="2" fill="#101b63" />
      <rect x="60" y="50" width="30" height="8" rx="2" fill="#e21b23" opacity="0.9" />
      <circle cx="75" cy="75" r="10" fill="#e2e8f0" />
      <rect x="110" y="60" width="35" height="70" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
      <rect x="118" y="50" width="20" height="12" rx="2" fill="#101b63" />
      <circle cx="127" cy="95" r="8" fill="#e21b23" opacity="0.9" />
    </svg>
  );
}

const ILLUSTRATIONS: Record<string, React.ReactNode> = {
  computers: <ComputerIllustration />,
  cellphones: <CellphoneIllustration />,
  furniture: <FurnitureIllustration />,
  detergents: <DetergentsIllustration />,
};

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-red">
              Browse by Category
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Everything Your Business Needs
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-sm font-semibold text-navy underline-offset-4 hover:underline"
          >
            View all products
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => {
            const isPhoto = category.image.startsWith("/images/WhatsApp");
            return (
              <Link
                key={category.id}
                href={`/shop?category=${category.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate via-white to-slate">
                  {isPhoto ? (
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
                      <div className="size-32 opacity-90">
                        {ILLUSTRATIONS[category.id] || null}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/60 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-navy group-hover:text-red">
                    {category.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-red">
                    Shop now
                    <svg
                      className="ml-1 size-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
