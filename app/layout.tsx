import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { EnquiryProvider } from "@/lib/enquiry-store";
import { EnquiryBar } from "@/components/enquiry/enquiry-bar";
import { BRAND } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Benchmark Technology | Technology & Office Supplies in Zimbabwe",
    template: "%s | Benchmark Technology",
  },
  description:
    "Suppliers of stationery, computers, cell phones, printers, office furniture, cartridges and detergents in Masvingo, Zimbabwe. Quality technology and business essentials from Benchmark Technology.",
  keywords: [
    "computers Zimbabwe",
    "printers Zimbabwe",
    "computer accessories Zimbabwe",
    "stationery Masvingo",
    "cellphones Masvingo",
    "office furniture Zimbabwe",
    "printer cartridges Zimbabwe",
    "technology shop Masvingo",
    "Benchmark Technology",
    "office supplies Zimbabwe",
  ],
  authors: [{ name: "Benchmark Technology" }],
  creator: "Benchmark Technology",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.benchmarktechnology.co.zw"),
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.benchmarktechnology.co.zw",
    siteName: "Benchmark Technology",
    title: "Benchmark Technology | Technology & Office Supplies in Zimbabwe",
    description:
      "Suppliers of stationery, computers, cell phones, printers, office furniture, cartridges and detergents in Masvingo, Zimbabwe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benchmark Technology | Technology & Office Supplies in Zimbabwe",
    description:
      "Suppliers of stationery, computers, cell phones, printers, office furniture, cartridges and detergents in Masvingo, Zimbabwe.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://www.benchmarktechnology.co.zw",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BRAND.name,
  image: "https://www.benchmarktechnology.co.zw/logo.png",
  url: "https://www.benchmarktechnology.co.zw",
  telephone: BRAND.phones.mobile1.replace(/\s/g, ""),
  email: BRAND.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.address.street,
    addressLocality: BRAND.address.city,
    addressCountry: BRAND.address.country,
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col">
        <EnquiryProvider>
          <TopBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFab />
          <EnquiryBar />
        </EnquiryProvider>
      </body>
    </html>
  );
}
