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
    image: "/images/hp-laptop.jpg",
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
    image: "/images/canon-multifunction-printer.jpg",
    icon: "Printer",
  },
  {
    id: "stationery",
    name: "Stationery",
    description: "Pens, books, files, paper and everyday office supplies.",
    slug: "stationery",
    subcategories: ["Pens", "Books", "Files", "Paper", "Office supplies"],
    image: "/images/sakky-counter-books.jpg",
    icon: "Pencil",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Keyboards, mice, USB drives, cables, chargers, headsets and networking accessories.",
    slug: "accessories",
    subcategories: ["Keyboards", "Mouse", "USB drives", "Cables", "Chargers", "Headsets", "Networking accessories"],
    image: "/images/rj45-crimping-tool.jpg",
    icon: "Headphones",
  },
  {
    id: "furniture",
    name: "Office Furniture",
    description: "Desks, chairs, storage and office equipment.",
    slug: "furniture",
    subcategories: ["Desks", "Chairs", "Storage", "Office equipment"],
    image: "/images/red-petty-cash-box.jpg",
    icon: "Armchair",
  },
  {
    id: "cartridges",
    name: "Cartridges",
    description: "Printer cartridges, toners and consumables.",
    slug: "cartridges",
    subcategories: ["Printer cartridges", "Toners", "Consumables"],
    image: "/images/canon-maintenance-cartridge.jpg",
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
    image: "/images/canon-multifunction-printer.jpg",
    gallery: ["/images/canon-multifunction-printer.jpg"],
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
    image: "/images/rj45-crimping-tool.jpg",
    gallery: ["/images/rj45-crimping-tool.jpg"],
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
    image: "/images/tp-link-router.jpg",
    gallery: ["/images/tp-link-router.jpg"],
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
    image: "/images/desktop-stapler.jpg",
    gallery: ["/images/desktop-stapler.jpg"],
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
    name: "M&G A4 Laminating Pouches",
    category: "stationery",
    subcategory: "Office supplies",
    description:
      "M&G A4 laminating pouches for protecting documents, certificates and presentations.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/a4-laminating-pouches.jpg",
    gallery: ["/images/a4-laminating-pouches.jpg"],
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
    image: "/images/canon-maintenance-cartridge.jpg",
    gallery: ["/images/canon-maintenance-cartridge.jpg"],
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
    image: "/images/office-stationery-set.jpg",
    gallery: ["/images/office-stationery-set.jpg"],
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
    name: "Mondi Rotatrim A4 Printing Paper",
    category: "stationery",
    subcategory: "Paper",
    description:
      "Mondi Rotatrim A4 printing paper for high-quality documents, reports and everyday office printing.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/rotatrim-a4-paper.jpg",
    gallery: ["/images/rotatrim-a4-paper.jpg"],
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
    image: "/images/sakky-counter-books.jpg",
    gallery: ["/images/sakky-counter-books.jpg"],
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
    image: "/images/coloured-a4-paper.jpg",
    gallery: ["/images/coloured-a4-paper.jpg"],
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
  {
    id: "coloured-a4-foam-sheets",
    name: "Coloured A4 Foam Sheets",
    category: "stationery",
    subcategory: "Office supplies",
    description:
      "Bright coloured A4 foam sheets perfect for art, craft projects, classroom activities and displays.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/coloured-a4-foam-sheets.jpg",
    gallery: ["/images/coloured-a4-foam-sheets.jpg"],
    features: [
      "Soft craft foam in multiple colours",
      "A4 size sheets",
      "Easy to cut and shape",
      "Ideal for schools and creative projects",
    ],
    specifications: {
      Size: "A4",
      Material: "Foam",
      Use: "Crafts / school projects",
    },
  },
  {
    id: "chalk-white-100-pcs",
    name: "White Chalk 100 Pieces",
    category: "stationery",
    subcategory: "Office supplies",
    description:
      "Box of 100 white chalk sticks for blackboard writing in classrooms, offices and training rooms.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/white-chalk-100pcs.jpg",
    gallery: ["/images/white-chalk-100pcs.jpg"],
    features: [
      "100 pieces per box",
      "Smooth writing on chalkboards",
      "Low dust formula",
      "Ideal for schools and offices",
    ],
    specifications: {
      Quantity: "100 pieces",
      Colour: "White",
      Use: "Chalkboards / blackboards",
    },
  },
  {
    id: "pantum-m6552nw-printer",
    name: "Pantum M6552NW Multifunction Printer",
    category: "printers",
    subcategory: "Multifunction printers",
    description:
      "Pantum M6552NW monochrome laser multifunction printer with wireless connectivity for office printing, copying and scanning.",
    price: null,
    currency: "USD",
    availability: "Enquire",
    image: "/images/pantum-m6552nw-printer.jpg",
    gallery: ["/images/pantum-m6552nw-printer.jpg"],
    features: [
      "Print, copy and scan",
      "Wireless network connectivity",
      "Fast monochrome laser output",
      "Compact office design",
    ],
    specifications: {
      Brand: "Pantum",
      Model: "M6552NW",
      Type: "Laser multifunction",
      Functions: "Print, Copy, Scan",
      Connectivity: "Wi-Fi / USB / Network",
    },
  },
  {
    id: "pantum-bm5100fdw-printer",
    name: "Pantum BM5100FDW Multifunction Printer",
    category: "printers",
    subcategory: "Multifunction printers",
    description:
      "Pantum BM5100FDW monochrome laser multifunction printer with automatic document feeder, duplex printing and wireless connectivity.",
    price: null,
    currency: "USD",
    availability: "Enquire",
    image: "/images/pantum-bm5100fdw-printer.jpg",
    gallery: ["/images/pantum-bm5100fdw-printer.jpg"],
    features: [
      "Automatic duplex printing",
      "Automatic document feeder",
      "Wireless and network ready",
      "High-volume office performance",
    ],
    specifications: {
      Brand: "Pantum",
      Model: "BM5100FDW",
      Type: "Laser multifunction",
      Functions: "Print, Copy, Scan, Fax",
      Connectivity: "Wi-Fi / Ethernet / USB",
    },
  },
  {
    id: "hp-laptop",
    name: "HP Laptop",
    category: "computers",
    subcategory: "Laptops",
    description:
      "HP laptop computer for everyday productivity, business tasks, online learning and office work.",
    price: null,
    currency: "USD",
    availability: "Enquire",
    image: "/images/hp-laptop.jpg",
    gallery: ["/images/hp-laptop.jpg"],
    features: [
      "Reliable performance for everyday tasks",
      "Slim and portable design",
      "Full-size keyboard",
      "Ideal for business, school and home use",
    ],
    specifications: {
      Brand: "HP",
      Type: "Laptop",
      Use: "Business / education / home",
      Display: "Standard laptop display",
    },
  },
  {
    id: "mg-whiteboard-markers",
    name: "M&G Whiteboard Markers",
    category: "stationery",
    subcategory: "Office supplies",
    description:
      "M&G whiteboard markers with vivid ink for clear writing on whiteboards in offices, classrooms and meeting rooms.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/mg-whiteboard-markers.jpg",
    gallery: ["/images/mg-whiteboard-markers.jpg"],
    features: [
      "Bright, easy-to-read colours",
      "Dry-erase ink wipes clean",
      "Consistent flow",
      "Suitable for whiteboards and flip charts",
    ],
    specifications: {
      Brand: "M&G",
      Type: "Whiteboard markers",
      Tip: "Bullet tip",
      Use: "Whiteboards / flip charts",
    },
  },
  {
    id: "desktop-hole-punch",
    name: "Desktop Hole Punch",
    category: "stationery",
    subcategory: "Office supplies",
    description:
      "Desktop hole punch for creating clean holes in paper for filing and binding documents.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/desktop-hole-punch.jpg",
    gallery: ["/images/desktop-hole-punch.jpg"],
    features: [
      "Clean, precise punching",
      "Comfortable handle",
      "Standard hole spacing",
      "Suitable for office and school use",
    ],
    specifications: {
      Type: "Desktop hole punch",
      Capacity: "Standard sheets",
      Use: "Filing / binding",
    },
  },
  {
    id: "guava-2-quire-counter-book",
    name: "Guava 2 Quire A4 Counter Book",
    category: "stationery",
    subcategory: "Books",
    description:
      "Guava A4 counter book with 2 quire capacity for school notes, record keeping and office documentation.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/guava-2-quire-counter-book.jpg",
    gallery: ["/images/guava-2-quire-counter-book.jpg"],
    features: [
      "A4 size with guava pages",
      "2 quire capacity",
      "Durable hard cover",
      "Ideal for students and office records",
    ],
    specifications: {
      Brand: "Guava",
      Size: "A4",
      Capacity: "2 Quire",
      Use: "School / office records",
    },
  },
  {
    id: "olanas-a4-carbon-paper",
    name: "Olanas A4 Carbon Paper",
    category: "stationery",
    subcategory: "Office supplies",
    description:
      "Olanas A4 carbon paper for creating duplicate handwritten copies of invoices, receipts and documents.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/olanas-a4-carbon-paper.jpg",
    gallery: ["/images/olanas-a4-carbon-paper.jpg"],
    features: [
      "A4 size sheets",
      "Creates clean duplicate copies",
      "Suitable for handwriting and typewriting",
      "Ideal for receipts and invoices",
    ],
    specifications: {
      Brand: "Olanas",
      Size: "A4",
      Type: "Carbon paper",
      Use: "Duplicate copies",
    },
  },
  {
    id: "chalk-box-classroom",
    name: "Classroom Chalk Box",
    category: "stationery",
    subcategory: "Office supplies",
    description:
      "Box of white chalk sticks for classroom blackboards, training rooms and educational use.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/classroom-chalk-box.jpg",
    gallery: ["/images/classroom-chalk-box.jpg"],
    features: [
      "Boxed for classroom convenience",
      "Smooth writing on blackboards",
      "Low dust",
      "Essential for schools",
    ],
    specifications: {
      Type: "White chalk",
      Use: "Classroom / blackboards",
      Packaging: "Box",
    },
  },
  {
    id: "wireless-rgb-mouse",
    name: "Wireless RGB Rechargeable Mouse",
    category: "accessories",
    subcategory: "Mouse",
    description:
      "Slim wireless RGB rechargeable mouse with USB receiver and Type-C adapter for laptops and desktops.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/wireless-rgb-mouse.jpg",
    gallery: ["/images/wireless-rgb-mouse.jpg"],
    features: [
      "Wireless 2.4GHz connection",
      "Rechargeable battery",
      "Colourful RGB lighting",
      "Includes USB receiver and Type-C adapter",
    ],
    specifications: {
      Type: "Wireless mouse",
      Connectivity: "2.4GHz USB",
      Power: "Rechargeable",
      Lighting: "RGB",
    },
  },
  {
    id: "tp-link-8-port-switch",
    name: "TP-Link 8-Port Gigabit Desktop Switch",
    category: "accessories",
    subcategory: "Networking accessories",
    description:
      "TP-Link TL-SG108S 8-port gigabit desktop switch for fast and reliable wired network expansion.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/tp-link-8-port-switch.jpg",
    gallery: ["/images/tp-link-8-port-switch.jpg"],
    features: [
      "8 gigabit Ethernet ports",
      "Plug and play setup",
      "Durable metal casing",
      "Ideal for offices and small businesses",
    ],
    specifications: {
      Brand: "TP-Link",
      Model: "TL-SG108S",
      Ports: "8 x Gigabit RJ45",
      Type: "Desktop switch",
    },
  },
  {
    id: "canon-kp108in-photo-paper",
    name: "Canon KP-108IN Photo Paper & Ink Set",
    category: "cartridges",
    subcategory: "Printer cartridges",
    description:
      "Canon KP-108IN colour ink and paper set for select Canon Selphy photo printers, producing durable lab-quality prints.",
    price: null,
    currency: "USD",
    availability: "Enquire",
    image: "/images/canon-kp108in-photo-paper.jpg",
    gallery: ["/images/canon-kp108in-photo-paper.jpg"],
    features: [
      "Includes ink cartridge and photo paper",
      "Produces 108 postcard-size prints",
      "Water and fingerprint resistant",
      "Genuine Canon consumable",
    ],
    specifications: {
      Brand: "Canon",
      Model: "KP-108IN",
      Compatible: "Canon Selphy printers",
      Output: "108 prints",
    },
  },
  {
    id: "static-control-laser-toner",
    name: "Static Control MPT-250B-HD Laser Toner",
    category: "cartridges",
    subcategory: "Toners",
    description:
      "Static Control MPT-250B-HD replacement multi-purpose laser toner powder for refilling compatible laser cartridges.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/static-control-laser-toner.jpg",
    gallery: ["/images/static-control-laser-toner.jpg"],
    features: [
      "Multi-purpose laser toner powder",
      "250g bottle",
      "Compatible with various laser printers",
      "Economical refill solution",
    ],
    specifications: {
      Brand: "Static Control",
      Model: "MPT-250B-HD",
      Type: "Laser toner powder",
      Weight: "250g",
    },
  },
  {
    id: "red-petty-cash-box",
    name: "Red Petty Cash Box",
    category: "furniture",
    subcategory: "Office equipment",
    description:
      "Red metal petty cash box with lock and key for secure storage of cash, coins and small valuables in offices and shops.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/red-petty-cash-box.jpg",
    gallery: ["/images/red-petty-cash-box.jpg"],
    features: [
      "Sturdy metal construction",
      "Lockable with two keys",
      "Removable coin tray",
      "Compact for counter or desk use",
    ],
    specifications: {
      Type: "Petty cash box",
      Colour: "Red",
      Lock: "Key lock with 2 keys",
      Use: "Cash / coins / valuables",
    },
  },
  {
    id: "hp-652-ink-cartridges",
    name: "HP 652 Ink Cartridges",
    category: "cartridges",
    subcategory: "Printer cartridges",
    description:
      "HP 652 ink advantage tri-colour and black ink cartridges for compatible HP DeskJet and Ink Advantage printers.",
    price: null,
    currency: "USD",
    availability: "Enquire",
    image: "/images/hp-652-ink-cartridges.jpg",
    gallery: ["/images/hp-652-ink-cartridges.jpg"],
    features: [
      "Genuine HP ink cartridges",
      "Includes tri-colour and black",
      "Reliable print quality",
      "Easy installation",
    ],
    specifications: {
      Brand: "HP",
      Model: "652",
      Colours: "Black / Tri-colour",
      Type: "Ink cartridge set",
    },
  },
  {
    id: "thermal-paper-rolls",
    name: "80mm x 80mm Thermal Paper Rolls",
    category: "stationery",
    subcategory: "Paper",
    description:
      "Box of 80mm x 80mm thermal paper rolls for receipt printers, POS systems and billing machines.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/thermal-paper-rolls.jpg",
    gallery: ["/images/thermal-paper-rolls.jpg"],
    features: [
      "Standard 80mm x 80mm size",
      "50 rolls per carton",
      "High-quality thermal coating",
      "Compatible with most receipt printers",
    ],
    specifications: {
      Size: "80mm x 80mm",
      Quantity: "50 rolls per carton",
      Type: "Thermal paper",
      Use: "Receipt / POS printers",
    },
  },
  {
    id: "epson-ecotank-printer",
    name: "Epson EcoTank Printer",
    category: "printers",
    subcategory: "Inkjet printers",
    description:
      "Epson EcoTank inkjet printer with refillable ink tanks for high-volume, low-cost colour printing at home or in the office.",
    price: null,
    currency: "USD",
    availability: "Enquire",
    image: "/images/epson-ecotank-printer.jpg",
    gallery: ["/images/epson-ecotank-printer.jpg"],
    features: [
      "Refillable ink tank system",
      "Low cost per page",
      "High-volume colour printing",
      "Compact and reliable design",
    ],
    specifications: {
      Brand: "Epson",
      Type: "EcoTank inkjet",
      Ink: "Refillable tanks",
      Use: "Home / office",
    },
  },
  {
    id: "rongta-receipt-printer",
    name: "Rongta Thermal Receipt Printer",
    category: "printers",
    subcategory: "Printer accessories",
    description:
      "Rongta 80mm thermal receipt printer for retail POS, hospitality and billing systems with fast, quiet printing.",
    price: null,
    currency: "USD",
    availability: "Enquire",
    image: "/images/rongta-receipt-printer.jpg",
    gallery: ["/images/rongta-receipt-printer.jpg"],
    features: [
      "80mm thermal printing width",
      "Fast and quiet operation",
      "USB and serial connectivity options",
      "Ideal for shops, restaurants and POS systems",
    ],
    specifications: {
      Brand: "Rongta",
      Type: "Thermal receipt printer",
      Width: "80mm",
      Use: "POS / retail / hospitality",
    },
  },
  {
    id: "duck-tape",
    name: "Duck Tape",
    category: "stationery",
    subcategory: "Office supplies",
    description:
      "Original Duck Tape brand duct tape for repairs, crafting, packaging and general-purpose adhesive tasks.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/duck-tape.jpg",
    gallery: ["/images/duck-tape.jpg"],
    features: [
      "Strong and durable adhesive",
      "Tears easily by hand",
      "Multiple uses around the office and home",
      "Reliable Duck Tape brand quality",
    ],
    specifications: {
      Brand: "Duck Tape",
      Size: "48mm x 18.2m",
      Type: "Duct tape",
      Use: "Repairs / crafts / packaging",
    },
  },
  {
    id: "jobo-a4-photo-paper",
    name: "Jobo A4 Waterproof Glossy Photo Paper",
    category: "stationery",
    subcategory: "Paper",
    description:
      "Jobo A4 waterproof glossy photo paper for high-quality inkjet photo printing, presentations and professional documents.",
    price: null,
    currency: "USD",
    availability: "In stock",
    image: "/images/jobo-a4-photo-paper.jpg",
    gallery: ["/images/jobo-a4-photo-paper.jpg"],
    features: [
      "200gsm glossy photo paper",
      "Two-sided printable",
      "Waterproof coating",
      "20 sheets per pack",
    ],
    specifications: {
      Brand: "Jobo",
      Size: "A4",
      Weight: "200gsm",
      Finish: "Glossy",
      Quantity: "20 sheets",
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
