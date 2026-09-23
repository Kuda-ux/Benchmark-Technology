"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/data";
import { Filter, X } from "lucide-react";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Name A–Z", value: "name-asc" },
  { label: "Name Z–A", value: "name-desc" },
];

export function ProductFilters() {
  const router = useRouter();
  const params = useSearchParams();
  const q = params.get("q") || "";
  const currentCategory = params.get("category") || "";
  const currentAvailability = params.get("availability") || "";
  const currentSort = params.get("sort") || "featured";
  const hasFilters = currentCategory || currentAvailability || currentSort !== "featured" || q;

  function updateParam(key: string, value: string) {
    const search = new URLSearchParams(params.toString());
    if (value) {
      search.set(key, value);
    } else {
      search.delete(key);
    }
    router.push(`/shop?${search.toString()}`, { scroll: false });
  }

  function clearFilters() {
    const search = new URLSearchParams();
    if (q) search.set("q", q);
    router.push(`/shop?${search.toString()}`, { scroll: false });
  }

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base font-bold text-navy">
          <Filter className="size-4" />
          Filters
        </h3>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-xs font-semibold text-red hover:text-red-dark"
          >
            <X className="size-3.5" />
            Clear
          </button>
        )}
      </div>

      {q && (
        <div className="rounded-xl bg-navy/5 p-3 text-sm">
          <span className="text-muted-foreground">Searching:</span>{" "}
          <span className="font-semibold text-navy">&quot;{q}&quot;</span>
        </div>
      )}

      <div>
        <h4 className="mb-3 text-sm font-bold text-navy">Category</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => updateParam("category", "")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              currentCategory === ""
                ? "bg-navy text-white shadow-md shadow-navy/20"
                : "border border-border bg-white text-charcoal hover:border-navy/30 hover:bg-accent"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateParam("category", cat.slug)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                currentCategory === cat.slug
                  ? "bg-navy text-white shadow-md shadow-navy/20"
                  : "border border-border bg-white text-charcoal hover:border-navy/30 hover:bg-accent"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-bold text-navy">Availability</h4>
        <div className="flex flex-wrap gap-2">
          {[
            { value: "", label: "All" },
            { value: "In stock", label: "In stock" },
            { value: "Enquire", label: "Enquire" },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => updateParam("availability", option.value)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                currentAvailability === option.value
                  ? "bg-red text-white shadow-md shadow-red/20"
                  : "border border-border bg-white text-charcoal hover:border-red/30 hover:bg-red/5"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-bold text-navy">Sort</h4>
        <select
          value={currentSort}
          onChange={(e) => updateParam("sort", e.target.value)}
          className="h-10 w-full rounded-xl border border-border bg-white px-3 text-sm text-charcoal outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
