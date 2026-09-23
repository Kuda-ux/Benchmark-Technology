import type { Metadata } from "next";
import Link from "next/link";
import { ProductGrid } from "@/components/shop/product-grid";
import { ProductFilters } from "@/components/shop/product-filters";
import { Breadcrumbs } from "@/components/shop/breadcrumbs";
import {
  PRODUCTS,
  CATEGORIES,
  searchProducts,
  type Product,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop | Computers, Printers, Stationery & Office Supplies",
  description:
    "Browse technology, office supplies, printers, stationery, furniture and accessories from Benchmark Technology in Zimbabwe.",
};

export const dynamic = "force-dynamic";

function filterProducts(
  searchParams: { [key: string]: string | string[] | undefined }
): { products: Product[]; heading: string; count: number; searchQuery: string } {
  let products = [...PRODUCTS];
  let heading = "All Products";

  const q = typeof searchParams.q === "string" ? searchParams.q : "";
  const category =
    typeof searchParams.category === "string" ? searchParams.category : "";
  const availability =
    typeof searchParams.availability === "string"
      ? searchParams.availability
      : "";
  const sort =
    typeof searchParams.sort === "string" ? searchParams.sort : "featured";

  if (q) {
    products = searchProducts(q);
    heading = `Search results for "${q}"`;
  }

  if (category) {
    products = products.filter((p) => p.category === category);
    const categoryName =
      CATEGORIES.find((c) => c.slug === category)?.name || category;
    heading = q ? `${heading} in ${categoryName}` : categoryName;
  }

  if (availability) {
    products = products.filter((p) => p.availability === availability);
  }

  if (sort === "name-asc") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "name-desc") {
    products.sort((a, b) => b.name.localeCompare(a.name));
  }

  return { products, heading, count: products.length, searchQuery: q };
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const { products, heading, count, searchQuery } = filterProducts(params);

  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Shop", href: "/shop" },
            { label: heading },
          ]}
        />
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {heading}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {count} product{count !== 1 ? "s" : ""} available
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-6">
              <ProductFilters />
            </div>
          </aside>
          <div className="lg:col-span-3">
            {searchQuery && products.length === 0 && (
              <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                Try browsing{" "}
                <Link
                  href="/shop"
                  className="font-bold underline"
                >
                  all products
                </Link>{" "}
                or contact us for special orders.
              </div>
            )}
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
