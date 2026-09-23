import { BRAND } from "@/lib/data";
import { Phone, Mail, MapPin } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden border-b border-border/60 bg-navy text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 text-slate-300">
          <MapPin className="size-3.5 text-red-light" />
          {BRAND.address.street}, {BRAND.address.city}, {BRAND.address.country}
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`tel:${BRAND.phones.landline.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
          >
            <Phone className="size-3.5 text-red-light" />
            {BRAND.phones.landline}
          </a>
          <a
            href={`mailto:${BRAND.email}`}
            className="flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
          >
            <Mail className="size-3.5 text-red-light" />
            {BRAND.email}
          </a>
        </div>
      </div>
    </div>
  );
}
