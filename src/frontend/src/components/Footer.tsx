export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t"
      style={{
        borderColor: "oklch(0.22 0.009 240)",
        background: "oklch(0.085 0.006 240)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold"
            style={{
              background: "oklch(0.13 0.008 240)",
              border: "1px solid oklch(0.78 0.14 75 / 0.4)",
              color: "oklch(0.82 0.15 75)",
            }}
          >
            SN
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs" style={{ color: "oklch(0.60 0.007 240)" }}>
              &copy; {year} Shameer Nizar. All Rights Reserved.
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "oklch(0.45 0.005 240)" }}
            >
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "oklch(0.78 0.14 75)" }}
              >
                caffeine.ai
              </a>
            </p>
          </div>

          {/* Quick links */}
          <div className="flex gap-4">
            {["HOME", "PORTFOLIO", "CONTACT"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link text-[10px] transition-colors"
                style={{ color: "oklch(0.45 0.005 240)" }}
                data-ocid="nav.link"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
