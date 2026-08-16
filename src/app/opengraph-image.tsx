import { ImageResponse } from "next/og";
import { referenceRigArtwork } from "../lib/brand/referenceRigArtwork";

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
            background: "radial-gradient(circle, rgba(209,180,106,.24), rgba(209,180,106,0) 70%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", width: 720, zIndex: 2 }}>
          <div style={{ fontSize: 25, letterSpacing: 3, textTransform: "uppercase", color: "#D1B46A", marginBottom: 28 }}>
            Reserve Investment Group, Inc.
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.04, fontWeight: 500, letterSpacing: -2, marginBottom: 26 }}>
            Clarity for the decisions that matter.
          </div>
          <div style={{ fontSize: 25, lineHeight: 1.5, color: "rgba(247,245,240,.72)" }}>
            Financial planning information, educational resources, and ways to connect with our team.
          </div>
        </div>
        <div style={{ width: 320, height: 320, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
          <img src={referenceRigArtwork} width="320" height="300" style={{ objectFit: "contain" }} />
        </div>
      </div>
    ),
    size,
  );
}
