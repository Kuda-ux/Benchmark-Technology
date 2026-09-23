import Link from "next/link";
import { ProductCard } from "@/components/shop/product-card";
import { Product } from "@/lib/data";
import { SearchX, ArrowRight } from "lucide-react";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-white p-12 text-center shadow-sm sm:p-16">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-slate">
          <SearchX className="size-8 text-muted-foreground" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-navy">No products found</h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          Try a different search term or category. Contact us if you can&apos;t find
          what you need.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-red hover:text-red-dark"
        >
          Contact us
          <ArrowRight className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
