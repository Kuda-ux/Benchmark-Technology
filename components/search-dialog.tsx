"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { searchProducts, CATEGORIES, Product, formatPrice } from "@/lib/data";
import { Search, X, ArrowRight, TrendingUp, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUGGESTIONS = [
  "HP printer",
  "laptop",
  "iPhone",
  "toner",
  "office chair",
  "router",
  "stapler",
  "paper",
];

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return query.length > 1 ? searchProducts(query).slice(0, 8) : [];
  }, [query]);

  function handleOpenChange(newOpen: boolean) {
    if (!newOpen) setQuery("");
    onOpenChange(newOpen);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 gap-0 overflow-hidden rounded-2xl">
        <DialogTitle className="sr-only">Search products</DialogTitle>
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <Search className="size-5 text-muted-foreground" />
          <Input
            autoFocus
            placeholder="Search products, categories, brands..."
            className="h-11 flex-1 border-0 bg-transparent px-0 text-base focus-visible:ring-0"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              <X className="size-4" />
            </Button>
          )}
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
          {query.length <= 1 ? (
            <div className="space-y-7">
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <TrendingUp className="size-3.5" />
                  Popular searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => setQuery(s)}
                      className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground transition-all hover:border-navy/30 hover:bg-accent hover:text-navy"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <LayoutGrid className="size-3.5" />
                  Browse categories
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/shop?category=${cat.slug}`}
                      onClick={() => onOpenChange(false)}
                      className="flex items-center justify-between rounded-xl border border-border bg-white p-3 text-sm font-medium transition-all hover:border-navy/30 hover:bg-accent hover:text-navy"
                    >
                      {cat.name}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-muted-foreground">
                No products found for &quot;{query}&quot;.
              </p>
              <Link
                href={`/shop?q=${encodeURIComponent(query)}`}
                onClick={() => onOpenChange(false)}
                className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-red hover:text-red-dark"
              >
                Browse all products
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              {results.map((product: Product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  onClick={() => onOpenChange(false)}
                  className="flex items-center gap-4 rounded-xl p-2.5 transition-all hover:bg-accent"
                >
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-xl border border-border bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-1.5"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-foreground">
                      {product.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {product.subcategory} · {formatPrice(product)}
                    </p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                </Link>
              ))}
              <Link
                href={`/shop?q=${encodeURIComponent(query)}`}
                onClick={() => onOpenChange(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-dark"
              >
                View all results
                <ArrowRight className="size-4" />
              </Link>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
