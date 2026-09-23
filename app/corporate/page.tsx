import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shop/breadcrumbs";
import { ContactForm } from "@/components/contact/contact-form";
import { Building2, Users, FileText, Truck, Phone, BadgeCheck, Calendar, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate & Bulk Enquiries",
  description:
    "Request a corporate quote for technology, office furniture, stationery and supplies from Benchmark Technology in Zimbabwe.",
};

export default function CorporatePage() {
  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Corporate Enquiries" }]} />

        <div className="mb-12 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-red">
              B2B Supply
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Equip Your Business With Confidence
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              Benchmark Technology supplies technology, office furniture,
              stationery and everyday essentials to businesses, schools, NGOs
              and organisations across Zimbabwe. We understand that every
              organisation has different needs, and we work with you to source
              the right products at the right scale.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <FileText className="size-5" />,
                  title: "Tailored Quotes",
                  description: "Itemised quotes based on your requirements.",
                },
                {
                  icon: <Truck className="size-5" />,
                  title: "Delivery Coordination",
                  description: "We help arrange delivery for larger orders.",
                },
                {
                  icon: <Users className="size-5" />,
                  title: "Dedicated Support",
                  description: "Personal service throughout your order.",
                },
                {
                  icon: <Building2 className="size-5" />,
                  title: "Organisation Friendly",
                  description: "Schools, NGOs, corporates and government.",
                },
                {
                  icon: <BadgeCheck className="size-5" />,
                  title: "Quality Assured",
                  description: "Trusted brands and reliable products.",
                },
                {
                  icon: <Calendar className="size-5" />,
                  title: "Flexible Timing",
                  description: "Quotes and orders that suit your schedule.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-navy/10 p-2.5 text-navy">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-1 items-center gap-4 rounded-2xl bg-navy p-5 text-white">
                <div className="flex size-12 items-center justify-center rounded-xl bg-red text-white">
                  <Phone className="size-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Speak to us directly</p>
                  <a
                    href="tel:0783943945"
                    className="text-xl font-bold hover:text-red-light"
                  >
                    078 394 3945
                  </a>
                </div>
              </div>
              <div className="flex flex-1 items-center gap-4 rounded-2xl border border-border bg-white p-5">
                <div className="flex size-12 items-center justify-center rounded-xl bg-slate text-navy">
                  <Headphones className="size-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email enquiries</p>
                  <a
                    href="mailto:benchmarktechnology@hotmail.com"
                    className="text-base font-bold text-navy hover:text-red"
                  >
                    benchmarktechnology@hotmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
