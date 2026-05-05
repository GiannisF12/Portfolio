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

        <span style={{ color: "var(--c)" }}>Computer Science graduate.</span>{" "} Looking for
        entry-level work.
      </p>
    </header>
  );
}
