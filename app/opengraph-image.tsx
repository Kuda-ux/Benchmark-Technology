import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Benchmark Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoPath = join(process.cwd(), "public", "logo.png");
  const logoBuffer = readFileSync(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #101b63 0%, #0c1450 100%)",
          padding: 64,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Benchmark Technology"
          width={400}
          height={120}
          style={{
            objectFit: "contain",
            marginBottom: 32,
            filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.25))",
          }}
        />
        <p
          style={{
            fontSize: 28,
            color: "#cbd5e1",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Technology, Office Supplies & Business Essentials — Masvingo,
          Zimbabwe
        </p>
      </div>
    ),
    { ...size }
  );
}
