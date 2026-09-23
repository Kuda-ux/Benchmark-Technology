import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #101b63 0%, #0c1450 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            borderRadius: 32,
            background: "#ffffff",
          }}
        >
          <span style={{ fontSize: 96, fontWeight: 800, color: "#101b63" }}>
            B
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
