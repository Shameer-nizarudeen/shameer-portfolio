import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-60px 0px -60px 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    }
    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "oklch(0.085 0.006 240 / 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid oklch(0.78 0.14 75 / 0.08)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2"
              data-ocid="nav.link"
              aria-label="Go to top"
            >
              <div
                className="w-10 h-10 rounded-full overflow-hidden"
                style={{
                  border: "1px solid oklch(0.78 0.14 75 / 0.4)",
                  boxShadow: "0 0 12px oklch(0.78 0.14 75 / 0.15)",
                }}
              >
                <img
                  src="/assets/uploads/img_5467-019d2592-310a-729c-bc4e-ccf3297b0634-1.jpg"
                  alt="Shameer Nizar"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link transition-colors duration-200 relative"
                  style={{
                    color:
                      activeSection === link.href.slice(1)
                        ? "oklch(0.82 0.15 75)"
                        : "oklch(0.60 0.007 240)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  data-ocid="nav.link"
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px]"
                      style={{ background: "oklch(0.82 0.15 75)" }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="hidden md:inline-flex items-center px-5 py-2 rounded-full nav-link text-[0.7rem] font-semibold transition-all duration-200 hover:shadow-gold"
                style={{
                  background: "oklch(0.78 0.14 75)",
                  color: "oklch(0.085 0.006 240)",
                  border: "none",
                  cursor: "pointer",
                }}
                data-ocid="nav.primary_button"
              >
                GET IN TOUCH
              </button>

              <button
                type="button"
                className="md:hidden p-2 rounded-md"
                onClick={() => setMobileOpen((p) => !p)}
                aria-label="Toggle menu"
                data-ocid="nav.toggle"
                style={{
                  color: "oklch(0.82 0.15 75)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: "oklch(0.085 0.006 240 / 0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid oklch(0.78 0.14 75 / 0.15)",
            }}
            data-ocid="nav.panel"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link, i) => (
                <motion.button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="px-6 py-3 nav-link text-sm transition-colors text-left"
                  style={{
                    color:
                      activeSection === link.href.slice(1)
                        ? "oklch(0.82 0.15 75)"
                        : "oklch(0.60 0.007 240)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="px-6 py-3">
                <button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="inline-flex items-center px-5 py-2 rounded-full nav-link text-[0.7rem] font-semibold"
                  style={{
                    background: "oklch(0.78 0.14 75)",
                    color: "oklch(0.085 0.006 240)",
                    border: "none",
                    cursor: "pointer",
                  }}
                  data-ocid="nav.primary_button"
                >
                  GET IN TOUCH
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
