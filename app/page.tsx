import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { CategoryGrid } from "@/components/home/category-grid";
import { TrustSection } from "@/components/home/trust-section";
import { CorporateCTA } from "@/components/home/corporate-cta";
import { BranchSection } from "@/components/home/branch-section";
import { ProductGrid } from "@/components/shop/product-grid";
import { PRODUCTS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benchmark Technology | Technology & Office Supplies in Zimbabwe",
  description:
    "Suppliers of stationery, computers, cell phones, printers, office furniture, cartridges and detergents in Masvingo, Zimbabwe.",
};

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <>
      <Hero />
      <CategoryGrid />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red">
                Featured Products
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Popular Right Now
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              Browse all products
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <TrustSection />
      <CorporateCTA />
      <BranchSection />
    </>
  );
}
