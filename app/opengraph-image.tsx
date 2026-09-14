import { ImageResponse } from "next/og";

export const alt = "From Signal to Scale — A Product Builder OS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        background: "#000",
        color: "#f5f7ff",
        fontFamily: "Arial, sans-serif",
        backgroundImage: "radial-gradient(circle at 75% 45%, #18235f 0%, #060817 24%, #000 58%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#949bb0", fontSize: 22 }}>
        <div style={{ display: "flex", width: 18, height: 18, background: "#6280ff" }} />
        A Product Builder OS
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 104, letterSpacing: "-7px", lineHeight: 0.92 }}>FROM SIGNAL</div>
        <div style={{ display: "flex", fontSize: 104, letterSpacing: "-7px", lineHeight: 0.92, color: "#dde5ff" }}>TO SCALE.</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", color: "#949bb0", fontSize: 20 }}>
        Research <span style={{ color: "#315cff" }}>—</span> Prototype <span style={{ color: "#315cff" }}>—</span> Ship <span style={{ color: "#315cff" }}>—</span> Learn
      </div>
    </div>,
    size,
  );
}
