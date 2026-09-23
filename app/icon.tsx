import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "6px",
        }}
      >
        <span style={{ fontSize: 22, fontWeight: 800, color: "#ffffff" }}>
          B
        </span>
      </div>
    ),
    { ...size }
  );
}
