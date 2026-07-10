export const runtime = 'nodejs';
import { ImageResponse } from "next/og";


export const alt = "JLA Link — Connecting Global Business with China";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0A2540 0%, #123a5c 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#00C4B4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
              color: "#0A2540",
            }}
          >
            JLA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "36px", fontWeight: 700 }}>JLA Link</span>
            <span style={{ fontSize: "24px", color: "#00C4B4" }}>捷联</span>
          </div>
        </div>
        <p style={{ fontSize: "52px", fontWeight: 700, lineHeight: 1.2, maxWidth: "900px" }}>
          Connecting Global Business with China
        </p>
        <p style={{ fontSize: "28px", color: "rgba(255,255,255,0.75)", marginTop: "24px" }}>
          Guangzhou, China · Sourcing · Factory Visits · Trade Shows
        </p>
      </div>
    ),
    { ...size }
  );
}
