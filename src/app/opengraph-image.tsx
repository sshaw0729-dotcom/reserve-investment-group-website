import { ImageResponse } from "next/og";

export const alt = "Reserve Investment Group, Inc. — Clarity for the decisions that matter.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 86px",
          background: "#0A1424",
          color: "#F7F5F0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 999,
            right: -130,
            top: -120,
            background: "#182743",
            opacity: .7,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", width: 790, zIndex: 2 }}>
          <div style={{ fontSize: 25, letterSpacing: 3, textTransform: "uppercase", color: "#D1B46A", marginBottom: 28 }}>
            Reserve Investment Group, Inc.
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.04, fontWeight: 500, letterSpacing: -2, marginBottom: 26 }}>
            Clarity for the decisions that matter.
          </div>
          <div style={{ fontSize: 25, lineHeight: 1.5, color: "#C7C5C0" }}>
            Financial planning information, educational resources, and ways to connect with our team.
          </div>
        </div>
        <div style={{ width: 180, height: 180, borderRadius: 999, border: "2px solid #B9964D", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 92, height: 2, background: "#D1B46A" }} />
        </div>
      </div>
    ),
    size,
  );
}
