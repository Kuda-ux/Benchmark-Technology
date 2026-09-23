import {
  Monitor,
  Printer,
  Pencil,
  Armchair,
  Headphones,
  Building2,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: <Monitor className="size-6" />,
    title: "Technology",
    description: "Computers, laptops, monitors and essential tech accessories.",
  },
  {
    icon: <Pencil className="size-6" />,
    title: "Office Supplies",
    description: "Stationery, books, files, paper and daily office essentials.",
  },
  {
    icon: <Printer className="size-6" />,
    title: "Printing",
    description: "Printers, cartridges, toners and printing consumables.",
  },
  {
    icon: <Headphones className="size-6" />,
    title: "Accessories",
    description: "Cables, chargers, headsets, networking and mobile accessories.",
  },
  {
    icon: <Armchair className="size-6" />,
    title: "Furniture",
    description: "Desks, chairs, storage and office equipment for your workspace.",
  },
  {
    icon: <Building2 className="size-6" />,
    title: "Corporate Supply",
    description: "Tailored quotes, bulk pricing and delivery for organisations.",
  },
];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #e21b23 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1e2d7a 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-light">
            Why Benchmark Technology
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            One Supplier. Multiple Business Needs.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            From technology and printing to stationery and furniture, we bring
            together the essentials that keep your business, school or
            organisation running.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-red to-red-dark p-3.5 text-white shadow-lg shadow-red/20 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
