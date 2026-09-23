"use client";

import Link from "next/link";
import Image from "next/image";
import { Product, formatPrice } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { Button } from "@/components/ui/button";
import { Plus, Eye, Check } from "lucide-react";
import { useEnquiry } from "@/lib/enquiry-store";
import { useState } from "react";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useEnquiry();
  const [added, setAdded] = useState(false);

  const availabilityColor =
    product.availability === "In stock"
      ? "bg-green-100 text-green-700 border-green-200"
      : product.availability === "Low stock"
      ? "bg-amber-100 text-amber-700 border-amber-200"
      : "bg-slate-100 text-slate-700 border-slate-200";

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-navy/10">
      <Link href={`/shop/${product.id}`} className="relative aspect-square overflow-hidden bg-gradient-to-b from-slate/80 to-slate p-5">
        <div className="relative size-full transition-transform duration-500 group-hover:scale-105">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
            loading="lazy"
          />
        </div>
        <Badge
          variant="outline"
          className={`absolute left-4 top-4 rounded-full border px-2.5 py-1 text-xs font-medium shadow-sm ${availabilityColor}`}
        >
          {product.availability}
        </Badge>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent opacity-60" />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-red">
          {product.subcategory}
        </p>
        <h3 className="mt-1.5 text-base font-semibold leading-snug text-navy line-clamp-2">
          <Link href={`/shop/${product.id}`} className="hover:text-red transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <p className="mt-4 text-xl font-bold text-red">
          {formatPrice(product)}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <LinkButton
            href={`/shop/${product.id}`}
            variant="secondary"
            className="h-11 flex-1 gap-2 bg-navy text-sm font-semibold text-white hover:bg-navy-dark"
          >
            <Eye className="size-4" />
            View Product
          </LinkButton>
          <Button
            variant="outline"
            size="icon"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to enquiry list`}
            className={`h-11 w-11 shrink-0 rounded-xl border-navy/20 transition-all ${
              added
                ? "bg-green-600 text-white border-green-600 hover:bg-green-700"
                : "text-navy hover:bg-navy hover:text-white"
            }`}
          >
            {added ? <Check className="size-4" /> : <Plus className="size-4" />}
          </Button>
        </div>
      </div>
    </article>
  );
}
