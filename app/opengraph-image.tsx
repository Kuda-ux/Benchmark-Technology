import { ImageResponse } from "next/og";

export const alt = "Benchmark Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 24,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 80, fontWeight: 800, color: "#101b63" }}>
              B
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: -1,
              }}
            >
              Benchmark
            </span>
            <span
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: "#e21b23",
                letterSpacing: -1,
              }}
            >
              Technology
            </span>
          </div>
        </div>
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
