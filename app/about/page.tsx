import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/data";
import { Breadcrumbs } from "@/components/shop/breadcrumbs";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Benchmark Technology",
  description:
    "Benchmark Technology supplies stationery, computers, cell phones, printers, office furniture, cartridges and detergents in Masvingo, Zimbabwe.",
};

const SUPPLY_AREAS = [
  "Computers & accessories",
  "Cell phones & accessories",
  "Printers & cartridges",
  "Stationery & office supplies",
  "Office furniture",
  "Cleaning detergents",
];

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About" }]} />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-red">
              About Us
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Reliable Technology & Office Supplies for Zimbabwe
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              Benchmark Technology is a technology and office-supplies business
              based in Masvingo, Zimbabwe. We provide businesses, schools,
              organisations and individuals with the products they need to stay
              productive — from computers and printers to stationery, office
              furniture and cleaning supplies.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              With branches in Masvingo, Chivi and Zvishavane, we are committed
              to making quality technology and office essentials accessible
              across the region. Our focus is on dependable products, honest
              service and lasting relationships with every customer.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {SUPPLY_AREAS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm"
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-red text-white">
                    <CheckCircle className="size-4" />
                  </span>
                  <span className="text-sm font-semibold text-charcoal">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red/20 transition-colors hover:bg-red-dark"
            >
              Browse Products
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-navy">Get in touch</h2>
              <ul className="mt-6 space-y-5 text-sm text-charcoal/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-red" />
                  <span>
                    <strong className="text-charcoal block">{BRAND.address.street}</strong>
                    {BRAND.address.city}, {BRAND.address.country}
                  </span>
                </li>
                <li>
                  <a
                    href={`tel:${BRAND.phones.landline.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 font-semibold hover:text-navy"
                  >
                    <Phone className="size-5 shrink-0 text-red" />
                    {BRAND.phones.landline}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${BRAND.phones.mobile1.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 font-semibold hover:text-navy"
                  >
                    <Phone className="size-5 shrink-0 text-red" />
                    {BRAND.phones.mobile1}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${BRAND.phones.mobile2.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 font-semibold hover:text-navy"
                  >
                    <Phone className="size-5 shrink-0 text-red" />
                    {BRAND.phones.mobile2}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-3 hover:text-navy"
                  >
                    <Mail className="size-5 shrink-0 text-red" />
                    {BRAND.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-navy p-6 text-white sm:p-8">
              <h3 className="text-xl font-bold">Visit our branches</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-300">
                {BRAND.branches.map((branch, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-red-light" />
                    <span>
                      <strong className="text-white block">{branch.name}</strong>
                      {branch.address}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
