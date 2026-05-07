import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Giannis Foras — Full-stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background:
            "radial-gradient(ellipse 70% 60% at 20% 30%, rgba(0,212,255,0.18), transparent 60%), #000",
          color: "#f0f0f0",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* top — brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#00d4ff",
              boxShadow: "0 0 20px rgba(0,212,255,0.7)",
            }}
          />
          Giannis Foras
        </div>

        {/* middle — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "108px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              maxWidth: "900px",
            }}
          >
            Full-stack
            <br />
            developer.
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#888",
              maxWidth: "800px",
              lineHeight: 1.3,
            }}
          >
            Computer Science graduate building with{" "}
            <span style={{ color: "#00d4ff" }}>Java</span>,{" "}
            <span style={{ color: "#00d4ff" }}>Spring Boot</span>, and{" "}
            <span style={{ color: "#00d4ff" }}>Next.js</span>.
          </div>
        </div>

        {/* bottom — url */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "#666",
            fontFamily: "ui-monospace, monospace",
            letterSpacing: "0.04em",
          }}
        >
          <span>giannisf12.dev</span>
          <span style={{ color: "#00d4ff" }}>● open to work</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
