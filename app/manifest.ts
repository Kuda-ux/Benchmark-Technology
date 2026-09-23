import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Benchmark Technology",
    short_name: "Benchmark",
    description:
      "Technology, office supplies and business essentials in Zimbabwe.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#101b63",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
