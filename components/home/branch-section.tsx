import { BRAND } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function BranchSection() {
  return (
    <section id="branches" className="bg-slate py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-red">
            Find Us
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Our Branches
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Visit us in Masvingo, or contact our Chivi and Zvishavane branches
            for more details.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BRAND.branches.map((branch, idx) => {
            const isMain = idx === 0;
            return (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
                  isMain
                    ? "border-navy/20 bg-white"
                    : "border-border bg-white"
                }`}
              >
                {isMain && (
                  <div className="absolute right-0 top-0 rounded-bl-2xl bg-red px-3 py-1 text-xs font-bold text-white">
                    Main Branch
                  </div>
                )}
                <div
                  className={`mb-5 inline-flex rounded-2xl p-3.5 ${
                    isMain ? "bg-navy text-white" : "bg-navy/10 text-navy"
                  }`}
                >
                  <MapPin className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-navy">{branch.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {branch.address}
                </p>
                <div className="mt-5 space-y-2.5 text-sm">
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 font-semibold text-red hover:text-red-dark"
                  >
                    <Phone className="size-4" />
                    {branch.phone}
                  </a>
                  {isMain && (
                    <>
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-navy"
                      >
                        <Mail className="size-4" />
                        {BRAND.email}
                      </a>
                      <span className="flex items-start gap-2 text-muted-foreground">
                        <Clock className="size-4 shrink-0" />
                        Mon – Fri: 8AM – 5PM
                        <br />
                        Sat: 8AM – 1PM
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
