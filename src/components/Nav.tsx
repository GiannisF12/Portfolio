export default function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#clients", label: "Clients" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#080808]/70 px-2 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl">
        <a
          href="#about"
          className="gradient-text cursor-pointer px-4 text-sm font-bold tracking-tight"
        >
          GF
        </a>
        <div className="mx-1 h-3.5 w-px bg-white/10" />
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="cursor-pointer rounded-full px-4 py-1.5 text-sm text-[#666] transition-all duration-200 hover:bg-white/[0.06] hover:text-[#ededed]"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
