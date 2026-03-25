import { motion } from "motion/react";
import { useRef } from "react";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: `particle-${i}`,
  left: `${(i * 5.3) % 100}%`,
  top: `${(i * 7.1) % 100}%`,
  size: (i % 3) + 1,
  duration: (i % 8) + 6,
  delay: i % 4,
}));

const collageItems = [
  {
    key: "collage-deep-blue",
    gradient:
      "linear-gradient(135deg, oklch(0.25 0.05 250) 0%, oklch(0.15 0.03 260) 100%)",
    rotate: "-3deg",
    top: "0%",
    left: "0%",
    width: "65%",
    height: "55%",
    zIndex: 1,
    showImage: true,
  },
  {
    key: "collage-purple",
    gradient:
      "linear-gradient(135deg, oklch(0.35 0.08 280) 0%, oklch(0.20 0.04 300) 100%)",
    rotate: "2deg",
    top: "10%",
    left: "35%",
    width: "60%",
    height: "50%",
    zIndex: 2,
    showImage: false,
  },
  {
    key: "collage-gold",
    gradient:
      "linear-gradient(135deg, oklch(0.45 0.1 70) 0%, oklch(0.30 0.08 60) 100%)",
    rotate: "-1deg",
    top: "45%",
    left: "5%",
    width: "50%",
    height: "50%",
    zIndex: 3,
    showImage: false,
  },
  {
    key: "collage-dark-blue",
    gradient:
      "linear-gradient(135deg, oklch(0.20 0.04 240) 0%, oklch(0.15 0.03 250) 100%)",
    rotate: "3deg",
    top: "50%",
    left: "45%",
    width: "52%",
    height: "48%",
    zIndex: 1,
    showImage: false,
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay: 0.3 + i * 0.15,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden film-grain"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, oklch(0.13 0.008 240) 0%, oklch(0.085 0.006 240) 60%, oklch(0.05 0.003 240) 100%)",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-10%",
          top: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, oklch(0.78 0.14 75 / 0.08) 0%, transparent 70%)",
        }}
      />

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "oklch(0.82 0.15 75)",
            opacity: 0.3,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Cinematic collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[360px] md:h-[460px] order-2 lg:order-1"
          >
            {collageItems.map((item, i) => (
              <motion.div
                key={item.key}
                className="absolute rounded-xl"
                style={{
                  background: item.gradient,
                  rotate: item.rotate,
                  top: item.top,
                  left: item.left,
                  width: item.width,
                  height: item.height,
                  zIndex: item.zIndex,
                  border: "1px solid oklch(0.78 0.14 75 / 0.15)",
                  boxShadow: "0 8px 32px oklch(0 0 0 / 0.5)",
                  overflow: "hidden",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, transparent, transparent 20px, oklch(1 0 0 / 0.05) 20px, oklch(1 0 0 / 0.05) 22px)",
                  }}
                />
                {item.showImage && (
                  <img
                    src="/assets/generated/hero-collage-1.dim_600x400.jpg"
                    alt="Cinematic visual"
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                  />
                )}
              </motion.div>
            ))}

            <motion.div
              className="absolute z-20 glass-card rounded-full px-4 py-2 flex items-center gap-2"
              style={{ bottom: "5%", right: "5%" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse-glow"
                style={{ background: "oklch(0.82 0.15 75)" }}
              />
              <span
                className="text-xs font-semibold tracking-wider"
                style={{ color: "oklch(0.82 0.15 75)" }}
              >
                AVAILABLE FOR WORK
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2 flex flex-col gap-5">
            <motion.span
              {...stagger(0)}
              className="nav-link text-xs tracking-[0.3em]"
              style={{ color: "oklch(0.82 0.15 75)" }}
            >
              MULTIMEDIA EDITOR & VISUAL STORYTELLER
            </motion.span>

            <motion.h1
              {...stagger(1)}
              className="font-serif font-bold leading-[1.08] tracking-tight"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                color: "oklch(0.95 0.005 80)",
              }}
            >
              Shameer
              <br />
              <span style={{ color: "oklch(0.82 0.15 75)" }}>Nizar</span>
            </motion.h1>

            <motion.p
              {...stagger(2)}
              className="text-body text-base md:text-lg max-w-md"
            >
              Crafting cinematic visuals, engaging edits, and powerful stories
              through the lens of creativity and modern digital trends.
            </motion.p>

            <motion.div {...stagger(3)} className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() =>
                  document
                    .querySelector("#portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-gold hover:-translate-y-0.5"
                style={{
                  background: "oklch(0.78 0.14 75)",
                  color: "oklch(0.085 0.006 240)",
                  border: "none",
                  cursor: "pointer",
                }}
                data-ocid="hero.primary_button"
              >
                VIEW MY WORK
              </button>
              <a
                href="/assets/uploads/shameer_ns_resume-019d2619-b12d-76e8-9559-661d6ad29203-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Shameer_Nizar_CV.pdf"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 no-underline"
                style={{
                  border: "1.5px solid oklch(0.78 0.14 75 / 0.5)",
                  color: "oklch(0.82 0.15 75)",
                  background: "transparent",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                data-ocid="hero.secondary_button"
              >
                DOWNLOAD CV
              </a>
            </motion.div>

            <motion.div {...stagger(4)} className="flex gap-8 pt-4">
              {[
                { value: "5+", label: "Projects" },
                { value: "3+", label: "Years" },
                { value: "100%", label: "Passion" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-serif text-2xl font-bold"
                    style={{ color: "oklch(0.82 0.15 75)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.60 0.007 240)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <span
          className="text-xs nav-link tracking-widest"
          style={{ color: "oklch(0.60 0.007 240)" }}
        >
          SCROLL
        </span>
        <div
          className="w-[1px] h-8"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.78 0.14 75), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
