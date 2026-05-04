export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      {/* Dot grid texture */}
      <div className="dot-grid absolute inset-0 animate-fade-in delay-0" />

      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[700px] w-[700px] rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(190,242,100,0.10), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(103,232,249,0.08), transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 pb-32 pt-40">
        {/* Available badge */}
        <div className="animate-fade-up delay-0 mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-[#666]">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse"
            aria-hidden="true"
          />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="animate-fade-up delay-1 gradient-text mb-6 text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-[7rem]">
          Giannis
          <br />
          Foras
        </h1>

        {/* Role & pitch */}
        <p className="animate-fade-up delay-2 mb-3 text-xl font-medium text-[#ededed] sm:text-2xl">
          Full-stack Developer
        </p>
        <p className="animate-fade-up delay-2 mb-10 max-w-md text-base leading-relaxed text-[#555]">
          Building clean, fast web applications. Comfortable from database to
          UI — passionate about code that ships.
        </p>

        {/* Contact links */}
        <div className="animate-fade-up delay-3 flex flex-wrap gap-3">
          <a
            href="mailto:giannis.foras@gmail.com"
            className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm text-[#888] transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-[#ededed]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email
          </a>

          <a
            href="https://github.com/GiannisF12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm text-[#888] transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-[#ededed]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/giannis-foras/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm text-[#888] transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-[#ededed]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="/cv.pdf"
            download
            className="flex h-10 cursor-pointer items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-black transition-all duration-200 hover:shadow-[0_0_24px_rgba(190,242,100,0.4)] hover:brightness-110"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-up delay-5 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#333]">
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <svg className="animate-bounce" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
