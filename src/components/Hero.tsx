export default function Hero() {
  return (
    <header className="relative z-10 border-b border-[var(--line)] py-10 sm:py-12">
      <h1
        className="text-[clamp(26px,3.4vw,40px)] font-bold leading-[1.1] tracking-tight"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Entry-Level Developer.
      </h1>

      <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-[var(--mute)]">
        Computer Science graduate. I build with{" "}
        <span style={{ color: "var(--c)" }}>Java</span>,{" "}
        <span style={{ color: "var(--c)" }}>Spring Boot</span>, and{" "}
        <span style={{ color: "var(--c)" }}>Next.js</span>. Looking for
        entry-level work.
      </p>
    </header>
  );
}
