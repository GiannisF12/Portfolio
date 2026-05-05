"use client";

import { useEffect, useRef } from "react";

export default function CursorFx() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const cur = cursorRef.current;
    const glow = glowRef.current;
    if (!cur || !glow) return;

    const onMove = (e: MouseEvent) => {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    const addHover = () => document.body.classList.add("hovering");
    const removeHover = () => document.body.classList.remove("hovering");

    document.addEventListener("mousemove", onMove);

    // Delegate hover detection — interactive elements
    const interactiveSelector = "a, button, [data-interactive]";
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest(interactiveSelector)) addHover();
    };
    const onOut = (e: Event) => {
      const t = e.target as HTMLElement;
      const related = (e as MouseEvent).relatedTarget as HTMLElement | null;
      if (
        t.closest(interactiveSelector) &&
        !(related && related.closest(interactiveSelector))
      ) {
        removeHover();
      }
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
          transform: "translate(-50%,-50%)",
          left: -999,
          top: -999,
          transition: "opacity 300ms ease",
        }}
      />
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "var(--c)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%,-50%)",
          left: -999,
          top: -999,
          boxShadow: "0 0 8px var(--c), 0 0 16px rgba(0,212,255,0.35)",
          transition:
            "width 200ms ease, height 200ms ease, background 200ms ease, box-shadow 200ms ease",
        }}
        className="cursor-dot"
      />
      <style>{`
        body.hovering .cursor-dot {
          width: 16px !important;
          height: 16px !important;
          box-shadow: 0 0 12px var(--c), 0 0 24px rgba(0,212,255,0.5) !important;
        }
      `}</style>
    </>
  );
}
