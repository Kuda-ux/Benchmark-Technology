import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, getWhatsAppUrl } from "@/lib/data";
import { Breadcrumbs } from "@/components/shop/breadcrumbs";
import { ContactForm } from "@/components/contact/contact-form";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Benchmark Technology",
  description:
    "Contact Benchmark Technology in Masvingo, Zimbabwe. Phone, WhatsApp, email or visit our branches.",
};

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-red">
            Get in Touch
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Contact Benchmark Technology
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-charcoal/80">
            Visit our Masvingo office, call us, send an email or reach out on
            WhatsApp. We are here to help with product enquiries, corporate
            quotes and orders.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-navy">Contact details</h2>
              <ul className="mt-6 space-y-5 text-sm text-charcoal/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-red" />
                  <span>
                    <strong className="text-charcoal block">Masvingo Office</strong>
                    {BRAND.address.street}
                    <br />
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
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-red" />
                  <span>
                    <strong className="text-charcoal block">Business hours</strong>
                    Monday – Friday: 8:00 AM – 5:00 PM
                    <br />
                    Saturday: 8:00 AM – 1:00 PM
                  </span>
                </li>
              </ul>
            </div>

            <a
              href={getWhatsAppUrl("Hello Benchmark Technology, I would like to enquire about your products.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-13 w-full gap-2 rounded-xl bg-[#25D366] text-base font-bold text-white hover:bg-[#128C7E]">
                <MessageCircle className="size-5" />
                Chat on WhatsApp
              </Button>
            </a>

            <div className="rounded-3xl bg-navy p-6 text-white sm:p-8">
              <h3 className="text-lg font-bold">Our branches</h3>
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
              <Link
                href="/corporate"
                className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-red-light hover:text-white"
              >
                Corporate enquiries
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
            <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-slate shadow-sm">
              <iframe
                title="Benchmark Technology Masvingo location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.0!2d30.825!3d-20.067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA0JzAxLjIiUyAzMMKwNDknMzAuMCJF!5e0!3m2!1sen!2szw!4v1600000000000!5m2!1sen!2szw"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="bg-slate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
