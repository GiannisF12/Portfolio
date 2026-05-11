import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Giannis Foras — Full-stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori (the renderer behind ImageResponse) requires every element with
// more than one child to have an explicit `display`. We use flex everywhere
// and avoid <br /> + mixed text/element siblings.
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
          <div style={{ display: "flex" }}>Giannis Foras</div>
        </div>

        {/* middle — headline + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* headline split into two stacked divs (no <br/>) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "108px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            <div style={{ display: "flex" }}>Full-stack</div>
            <div style={{ display: "flex" }}>developer.</div>
          </div>

          {/* tagline as a flex-wrap row so colored tech words sit next to plain text */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.35em",
              fontSize: "30px",
              color: "#888",
              maxWidth: "880px",
              lineHeight: 1.3,
            }}
          >
            <div style={{ display: "flex" }}>Computer Science graduate building with</div>
            <div style={{ display: "flex", color: "#00d4ff" }}>Java</div>
            <div style={{ display: "flex" }}>,</div>
            <div style={{ display: "flex", color: "#00d4ff" }}>Spring Boot</div>
            <div style={{ display: "flex" }}>, and</div>
            <div style={{ display: "flex", color: "#00d4ff" }}>Next.js</div>
            <div style={{ display: "flex" }}>.</div>
          </div>
        </div>

        {/* bottom — url + status */}
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
          <div style={{ display: "flex" }}>giannisf12.dev</div>
          <div style={{ display: "flex", color: "#00d4ff" }}>● open to work</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
