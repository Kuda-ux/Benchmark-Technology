import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, PRODUCTS, formatPrice, getWhatsAppUrl, CATEGORIES } from "@/lib/data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.benchmarktechnology.co.zw";
import { Breadcrumbs } from "@/components/shop/breadcrumbs";
import { ProductGrid } from "@/components/shop/product-grid";
import { AddToEnquiryButton } from "@/components/enquiry/add-to-enquiry-button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, CheckCircle, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | ${product.subcategory}`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.slug === product.category);
  const availabilityColor =
    product.availability === "In stock"
      ? "bg-green-100 text-green-700 border-green-200"
      : product.availability === "Low stock"
      ? "bg-amber-100 text-amber-700 border-amber-200"
      : "bg-slate-100 text-slate-700 border-slate-200";

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.specifications.Brand || "Benchmark Technology",
    },
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/shop/${product.id}`,
      priceCurrency: product.currency,
      availability:
        product.availability === "In stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
    },
  };

  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Shop", href: "/shop" },
            {
              label: category?.name || product.category,
              href: `/shop?category=${product.category}`,
            },
            { label: product.name },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl border border-border bg-gradient-to-b from-slate/60 to-white p-6 shadow-sm sm:p-10">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain p-6"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            {product.gallery.length > 1 && (
              <div className="mt-5 grid grid-cols-4 gap-3">
                {product.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square overflow-hidden rounded-xl border border-border bg-white"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} image ${idx + 1}`}
                      fill
                      className="object-contain p-2"
                      sizes="100px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <Badge
              variant="outline"
              className={`mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${availabilityColor}`}
            >
              {product.availability}
            </Badge>
            <p className="text-sm font-bold uppercase tracking-wider text-red">
              {product.subcategory}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/80">
              {product.description}
            </p>
            <p className="mt-6 text-3xl font-bold text-red sm:text-4xl">
              {formatPrice(product)}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <AddToEnquiryButton product={product} size="lg" />
              <a
                href={getWhatsAppUrl(
                  `Hello Benchmark Technology, I am interested in ${product.name}. Can you please provide more information?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-navy/20 bg-white px-6 text-base font-semibold text-navy shadow-sm transition-all hover:bg-navy hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MessageCircle className="size-5" />
                Ask on WhatsApp
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-navy">
                Need help deciding?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Send us a WhatsApp message or call us for product advice and
                stock confirmation.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-red hover:text-red-dark"
              >
                Contact us
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <Accordion defaultValue={["description"]}>
            <AccordionItem value="description">
              <AccordionTrigger className="text-base font-semibold text-navy">
                Description
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed text-charcoal/80">
                  {product.description}
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="features">
              <AccordionTrigger className="text-base font-semibold text-navy">
                Features
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-border bg-slate/50 p-3"
                    >
                      <CheckCircle className="mt-0.5 size-5 shrink-0 text-green-600" />
                      <span className="text-sm text-charcoal/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="specifications">
              <AccordionTrigger className="text-base font-semibold text-navy">
                Specifications
              </AccordionTrigger>
              <AccordionContent>
                <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-xl border border-border bg-slate/50 px-4 py-3"
                    >
                      <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {key}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-charcoal">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <Separator className="mb-10" />
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-navy">
              Related Products
            </h2>
            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>
    </div>
  );
}
