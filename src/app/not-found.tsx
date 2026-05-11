import Link from "next/link";

export const metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1200px] flex-col items-center justify-center px-5 text-center sm:px-7">
      <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--mute)]">
        404 · Not found
      </span>

      <h1
        className="mt-3 text-[clamp(48px,8vw,96px)] font-bold leading-none tracking-tighter"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Page not <span style={{ color: "var(--c)" }}>found</span>.
      </h1>

      <p className="mt-4 max-w-[42ch] text-sm text-[var(--mute)]">
        That URL doesn&apos;t exist — or it used to and doesn&apos;t anymore.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex h-9 items-center gap-1.5 rounded border px-4 font-mono text-[12px] tracking-wider transition-colors"
        style={{
          color: "var(--c)",
          borderColor: "rgba(0,212,255,0.35)",
          background: "var(--c3)",
        }}
      >
        ← Back home
      </Link>
    </div>
  );
}
