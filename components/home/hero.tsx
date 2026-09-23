"use client";

import Image from "next/image";
import { LinkButton } from "@/components/ui/link-button";
import { BRAND, getWhatsAppUrl } from "@/lib/data";
import { ArrowRight, ShoppingBag, MessageCircle, ShieldCheck, MapPin } from "lucide-react";

const heroProducts = [
  { src: "/images/canon-multifunction-printer.jpg", alt: "Canon multifunction printer" },
  { src: "/images/tp-link-router.jpg", alt: "TP-Link wireless router" },
  { src: "/images/canon-maintenance-cartridge.jpg", alt: "Canon maintenance cartridge" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red/5 via-transparent to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#101b63 1px, transparent 1px), linear-gradient(90deg, #101b63 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy shadow-sm backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-red opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-red" />
              </span>
              Trusted Technology Supplier in Zimbabwe
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Technology. Office.{" "}
              <span className="text-red">Everything You Need.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              {BRAND.fullTagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LinkButton
                href="/shop"
                size="lg"
                className="h-12 gap-2 bg-red px-6 text-base font-semibold text-white shadow-lg shadow-red/20 hover:bg-red-dark hover:shadow-red/30 focus-visible:ring-red"
              >
                <ShoppingBag className="size-5" />
                Shop Products
                <ArrowRight className="size-4" />
              </LinkButton>
              <a
                href={getWhatsAppUrl("Hello Benchmark Technology, I would like to enquire about your products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-navy/20 bg-white px-6 text-base font-semibold text-navy shadow-sm transition-all hover:bg-navy hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MessageCircle className="size-5" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-green-600" />
                Quality guaranteed
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="size-5 text-red" />
                Masvingo based
              </span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-navy/10 via-transparent to-red/10 blur-3xl" />

            <div className="relative mx-auto max-w-lg">
              <div className="absolute -left-6 top-12 w-56 rounded-2xl border border-border bg-white p-4 shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-slate">
                  <Image
                    src={heroProducts[0].src}
                    alt={heroProducts[0].alt}
                    fill
                    className="object-contain p-4"
                    sizes="224px"
                    priority
                  />
                </div>
              </div>

              <div className="relative z-10 ml-auto w-60 rounded-2xl border border-border bg-white p-4 shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-slate">
                  <Image
                    src={heroProducts[1].src}
                    alt={heroProducts[1].alt}
                    fill
                    className="object-contain p-4"
                    sizes="240px"
                    priority
                  />
                </div>
              </div>

              <div className="absolute -right-4 bottom-4 w-52 rounded-2xl border border-border bg-white p-4 shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-slate">
                  <Image
                    src={heroProducts[2].src}
                    alt={heroProducts[2].alt}
                    fill
                    className="object-contain p-4"
                    sizes="208px"
                    priority
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 left-8 rounded-2xl bg-navy p-5 text-white shadow-xl">
                <p className="text-xs font-medium text-slate-300">Get in touch</p>
                <a
                  href={`tel:${BRAND.phones.mobile1.replace(/\s/g, "")}`}
                  className="mt-1 block text-2xl font-bold tracking-tight hover:text-red-light"
                >
                  {BRAND.phones.mobile1}
                </a>
                <p className="mt-2 text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="size-3" />
                  {BRAND.address.city}, Zimbabwe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
