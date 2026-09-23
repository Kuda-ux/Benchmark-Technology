import Link from "next/link";
import { Logo } from "@/components/logo";
import { BRAND } from "@/lib/data";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const SHOP_LINKS = [
  { label: "Computers", href: "/shop?category=computers" },
  { label: "Cellphones", href: "/shop?category=cellphones" },
  { label: "Printers", href: "/shop?category=printers" },
  { label: "Accessories", href: "/shop?category=accessories" },
  { label: "Stationery", href: "/shop?category=stationery" },
  { label: "Furniture", href: "/shop?category=furniture" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Branches", href: "/#branches" },
  { label: "Corporate Enquiries", href: "/corporate" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo className="h-10 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-slate-300">
              Suppliers of Stationery, Computers, Cell phones & Accessories.
              Reliable technology and office essentials for businesses, schools
              and individuals across Zimbabwe.
            </p>
            <p className="text-xs text-slate-400">{BRAND.domain}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {SHOP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={`tel:${BRAND.phones.landline.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Phone className="size-4 text-red-light" />
                  {BRAND.phones.landline}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phones.mobile1.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Phone className="size-4 text-red-light" />
                  {BRAND.phones.mobile1}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phones.mobile2.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Phone className="size-4 text-red-light" />
                  {BRAND.phones.mobile2}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Mail className="size-4 text-red-light" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 shrink-0 text-red-light" />
                {BRAND.address.street}, {BRAND.address.city}
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Clock className="size-4 shrink-0" />
                Mon – Fri: 8AM – 5PM
                <br />
                Sat: 8AM – 1PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-400 sm:text-left sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Benchmark Technology. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Technology & Office Supplies in Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
}
