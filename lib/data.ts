export const BRAND = {
  name: "Benchmark Technology",
  tagline: "Suppliers of Stationery, Computers, Cell phones & Accessories",
  fullTagline:
    "Reliable technology, office equipment, stationery and everyday business essentials — all from one trusted supplier.",
  domain: "www.benchmarktechnology.co.zw",
  email: "benchmarktechnology@hotmail.com",
  phones: {
    landline: "039 2266 757",
    mobile1: "078 394 3945",
    mobile2: "071 533 0838",
  },
  whatsapp: "+263783943945",
  address: {
    street: "Office No. 1B, Old Mutual Building",
    city: "Masvingo",
    country: "Zimbabwe",
  },
  branches: [
    {
      name: "Masvingo",
      address: "Office No. 1B, Old Mutual Building, Masvingo, Zimbabwe",
      phone: "039 2266 757",
    },
    {
      name: "Chivi Branch",
      address: "Contact us for branch details",
      phone: "078 394 3945",
    },
    {
      name: "Zvishavane Branch",
      address: "Contact us for branch details",
      phone: "078 394 3945",
    },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Computers", href: "/shop?category=computers" },
  { label: "Cellphones", href: "/shop?category=cellphones" },
  { label: "Printers", href: "/shop?category=printers" },
  { label: "Accessories", href: "/shop?category=accessories" },
  { label: "Stationery", href: "/shop?category=stationery" },
  { label: "Office Furniture", href: "/shop?category=furniture" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const CATEGORIES = [
  {
    id: "computers",
    name: "Computers",
    description: "Laptops, desktops, monitors and computer accessories.",
    slug: "computers",
    subcategories: ["Laptops", "Desktops", "Monitors", "Computer accessories"],
    image: "/images/hero-computers.jpg",
    icon: "Monitor",
  },
  {
    id: "cellphones",
    name: "Cellphones",
    description: "Smartphones, feature phones, chargers, cases and accessories.",
    slug: "cellphones",
    subcategories: ["Smartphones", "Feature phones", "Chargers", "Cases", "Accessories"],
    image: "/images/hero-cellphones.jpg",
    icon: "Smartphone",
  },
  {
    id: "printers",
    name: "Printers",
    description: "Inkjet, laser and multifunction printers for office and home.",
    slug: "printers",
    subcategories: ["Inkjet printers", "Laser printers", "Multifunction printers", "Printer accessories"],
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.54 (1).jpeg",
    icon: "Printer",
  },
  {
    id: "stationery",
    name: "Stationery",
    description: "Pens, books, files, paper and everyday office supplies.",
    slug: "stationery",
    subcategories: ["Pens", "Books", "Files", "Paper", "Office supplies"],
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.57.jpeg",
    icon: "Pencil",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Keyboards, mice, USB drives, cables, chargers, headsets and networking accessories.",
    slug: "accessories",
    subcategories: ["Keyboards", "Mouse", "USB drives", "Cables", "Chargers", "Headsets", "Networking accessories"],
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.54.jpeg",
    icon: "Headphones",
  },
  {
    id: "furniture",
    name: "Office Furniture",
    description: "Desks, chairs, storage and office equipment.",
    slug: "furniture",
    subcategories: ["Desks", "Chairs", "Storage", "Office equipment"],
    image: "/images/hero-furniture.jpg",
    icon: "Armchair",
  },
  {
    id: "cartridges",
    name: "Cartridges",
    description: "Printer cartridges, toners and consumables.",
    slug: "cartridges",
    subcategories: ["Printer cartridges", "Toners", "Consumables"],
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.57 (1).jpeg",
    icon: "Droplet",
  },
  {
    id: "detergents",
    name: "Detergents",
    description: "Office cleaning products and general cleaning supplies.",
    slug: "detergents",
    subcategories: ["Office cleaning products", "General cleaning supplies"],
    image: "/images/hero-detergents.jpg",
    icon: "Sparkles",
  },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  price: number | null;
  currency: string;
  availability: "In stock" | "Low stock" | "Enquire";
  image: string;
  gallery: string[];
  features: string[];
  specifications: Record<string, string>;
};

export const PRODUCTS: Product[] = [
  {
    id: "canon-multifunction-printer",
    name: "Canon Multifunction Printer",
    category: "printers",
    subcategory: "Multifunction printers",
    description:
      "Reliable Canon multifunction printer for everyday office printing, scanning and copying. Suitable for home offices and small businesses in Zimbabwe.",
    price: null,
    currency: "USD",
    availability: "Enquire",
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.54 (1).jpeg",
    gallery: ["/images/WhatsApp Image 2026-09-22 at 12.45.54 (1).jpeg"],
    features: [
      "Print, scan and copy in one device",
      "Compact office-friendly design",
      "Easy setup and operation",
      "Ideal for small business and home office use",
    ],
    specifications: {
      Brand: "Canon",
      Type: "Multifunction",
      Functions: "Print, Scan, Copy",
      Connectivity: "USB",
    },
  },
  {
    id: "rj45-network-crimping-tool",
    name: "RJ45 Network Crimping Tool",
    category: "accessories",
    subcategory: "Networking accessories",
    description:
      "Professional RJ45 crimping tool with cable stripper for network installation and maintenance.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.54.jpeg",
    gallery: ["/images/WhatsApp Image 2026-09-22 at 12.45.54.jpeg"],
    features: [
      "Crimp RJ45 connectors with ease",
      "Includes cable stripper",
      "Durable construction",
      "Essential for networking jobs",
    ],
    specifications: {
      Type: "Crimping tool",
      Use: "RJ45 / network cables",
      Includes: "Stripper",
    },
  },
  {
    id: "tp-link-wireless-router",
    name: "TP-Link 300Mbps Wireless N Router",
    category: "accessories",
    subcategory: "Networking accessories",
    description:
      "TP-Link TL-WR840N 300Mbps Wireless N Router for home and small office internet connectivity.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.55 (1).jpeg",
    gallery: ["/images/WhatsApp Image 2026-09-22 at 12.45.55 (1).jpeg"],
    features: [
      "300Mbps wireless speed",
      "Two external antennas",
      "Easy setup via web interface",
      "Compact and reliable",
    ],
    specifications: {
      Brand: "TP-Link",
      Model: "TL-WR840N",
      Speed: "300Mbps",
      Antennas: "2 external",
    },
  },
  {
    id: "desktop-stapler",
    name: "Desktop Stapler with Staples",
    category: "stationery",
    subcategory: "Office supplies",
    description:
      "Standard desktop stapler with staples for everyday office and school paperwork.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.56 (1).jpeg",
    gallery: ["/images/WhatsApp Image 2026-09-22 at 12.45.56 (1).jpeg"],
    features: [
      "Comfortable desktop size",
      "Includes staples",
      "Reliable for daily use",
      "Suitable for office and school",
    ],
    specifications: {
      Type: "Desktop stapler",
      Includes: "Staples",
      Use: "Office / school",
    },
  },
  {
    id: "a4-laminating-pouches",
    name: "A4 Laminating Pouches",
    category: "stationery",
    subcategory: "Office supplies",
    description:
      "M&G A4 laminating pouches for protecting documents, certificates and presentations.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.56.jpeg",
    gallery: ["/images/WhatsApp Image 2026-09-22 at 12.45.56.jpeg"],
    features: [
      "No bubble finish",
      "High transparency",
      "Waterproof protection",
      "Long-term document storage",
    ],
    specifications: {
      Brand: "M&G",
      Size: "A4",
      Quantity: "100 pouches",
      Thickness: "125 microns",
    },
  },
  {
    id: "canon-maintenance-cartridge",
    name: "Canon MC-G04 Maintenance Cartridge",
    category: "cartridges",
    subcategory: "Printer cartridges",
    description:
      "Genuine Canon MC-G04 maintenance cartridge for select Canon inkjet printers.",
    price: null,
    currency: "USD",
    availability: "Enquire",
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.57 (1).jpeg",
    gallery: ["/images/WhatsApp Image 2026-09-22 at 12.45.57 (1).jpeg"],
    features: [
      "Genuine Canon consumable",
      "Maintains print quality",
      "Easy to install",
      "Compatible with select Canon models",
    ],
    specifications: {
      Brand: "Canon",
      Model: "MC-G04",
      Type: "Maintenance cartridge",
    },
  },
  {
    id: "office-stationery-set",
    name: "Office Stationery Set",
    category: "stationery",
    subcategory: "Office supplies",
    description:
      "Essential office stationery set including scissors, pencils, calculator, hole punch, paper clips and more.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.57 (2).jpeg",
    gallery: ["/images/WhatsApp Image 2026-09-22 at 12.45.57 (2).jpeg"],
    features: [
      "Complete everyday office essentials",
      "Includes calculator and hole punch",
      "Pencils, scissors and paper clips included",
      "Great for schools and offices",
    ],
    specifications: {
      Type: "Stationery set",
      Use: "Office / school",
      Contents: "Assorted stationery",
    },
  },
  {
    id: "rotatrim-a4-paper",
    name: "Rotatrim A4 Printing Paper",
    category: "stationery",
    subcategory: "Paper",
    description:
      "Mondi Rotatrim A4 printing paper for high-quality documents, reports and everyday office printing.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.57 (3).jpeg",
    gallery: ["/images/WhatsApp Image 2026-09-22 at 12.45.57 (3).jpeg"],
    features: [
      "Smooth surface for crisp printing",
      "Reliable everyday performance",
      "Suitable for laser and inkjet printers",
      "Ideal for offices and schools",
    ],
    specifications: {
      Brand: "Mondi Rotatrim",
      Size: "A4",
      Type: "Printing paper",
    },
  },
  {
    id: "sakky-counter-books",
    name: "Sakky A4 Counter Books",
    category: "stationery",
    subcategory: "Books",
    description:
      "Sakky A4 counter books with guava pages, available in 1 quire and 2 quire sizes for school and office use.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.57.jpeg",
    gallery: ["/images/WhatsApp Image 2026-09-22 at 12.45.57.jpeg"],
    features: [
      "A4 size with guava pages",
      "Durable counter book format",
      "Name, subject and grade labels",
      "Ideal for students and professionals",
    ],
    specifications: {
      Brand: "Sakky",
      Size: "A4",
      Options: "1 Quire / 2 Quire",
      Pages: "96 / 192 lined pages",
    },
  },
  {
    id: "coloured-a4-paper",
    name: "Coloured A4 Paper Pack",
    category: "stationery",
    subcategory: "Paper",
    description:
      "Vibrant coloured A4 paper pack for art, craft, printing and classroom activities.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/WhatsApp Image 2026-09-22 at 12.45.58 (1).jpeg",
    gallery: ["/images/WhatsApp Image 2026-09-22 at 12.45.58 (1).jpeg"],
    features: [
      "Multiple bright colours",
      "A4 size sheets",
      "Great for school projects",
      "Suitable for printing and crafts",
    ],
    specifications: {
      Size: "A4",
      Type: "Coloured paper",
      Use: "Printing / crafts / school",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.category === categorySlug);
}

export function searchProducts(query: string): Product[] {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return PRODUCTS;
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(normalized) ||
      p.description.toLowerCase().includes(normalized) ||
      p.subcategory.toLowerCase().includes(normalized) ||
      p.category.toLowerCase().includes(normalized)
  );
}

export function formatPrice(product: Product): string {
  if (product.price === null) return "Price on request";
  return `${product.currency} ${product.price.toFixed(2)}`;
}

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}?text=${encoded}`;
}
