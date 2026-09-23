import { LinkButton } from "@/components/ui/link-button";
import { Building2, ArrowRight, FileText, Truck, Users, ShieldCheck } from "lucide-react";

export function CorporateCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-navy-dark px-6 py-14 text-white shadow-2xl sm:px-12 sm:py-20 lg:px-16">
          <div className="absolute -right-16 -top-16 size-80 rounded-full bg-red/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 size-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute right-0 top-0 size-full opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                <Building2 className="size-4 text-red-light" />
                Corporate & Bulk Supply
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Equip Your Business With Confidence
              </h2>
              <p className="mt-5 max-w-xl text-lg text-slate-300">
                Benchmark Technology supplies technology, office furniture,
                stationery and business essentials to organisations across
                Zimbabwe. We prepare tailored quotes for schools, NGOs,
                corporate offices and government departments.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton
                  href="/corporate"
                  size="lg"
                  className="h-12 gap-2 bg-red px-6 text-base font-semibold text-white shadow-lg shadow-red/25 hover:bg-red-dark"
                >
                  <FileText className="size-5" />
                  Request a Corporate Quote
                  <ArrowRight className="size-4" />
                </LinkButton>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <ShieldCheck className="size-5" />,
                  title: "Bulk pricing",
                  description: "Competitive rates for larger orders.",
                },
                {
                  icon: <Users className="size-5" />,
                  title: "Dedicated support",
                  description: "Personal service from enquiry to delivery.",
                },
                {
                  icon: <Truck className="size-5" />,
                  title: "Delivery coordination",
                  description: "We help arrange delivery for your order.",
                },
                {
                  icon: <FileText className="size-5" />,
                  title: "Invoice-friendly orders",
                  description: "Documentation suited to organisations.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <span className="mb-3 flex size-10 items-center justify-center rounded-xl bg-red text-white shadow-lg shadow-red/20">
                    {item.icon}
                  </span>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
