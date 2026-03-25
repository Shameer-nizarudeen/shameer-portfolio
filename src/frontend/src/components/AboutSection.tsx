import { motion, useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Passion & Dedication" },
];

const reelSegments = [
  "reel-a",
  "reel-b",
  "reel-c",
  "reel-d",
  "reel-e",
  "reel-f",
  "reel-g",
  "reel-h",
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 20% 50%, oklch(0.78 0.14 75 / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute -left-4 top-0 bottom-0 flex items-center pointer-events-none select-none"
              aria-hidden="true"
            >
              <span
                className="font-serif font-black text-[6rem] md:text-[8rem] leading-none tracking-widest"
                style={{
                  color: "oklch(0.13 0.008 240)",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  letterSpacing: "0.05em",
                }}
              >
                ABOUT
              </span>
            </div>

            <div className="glass-card rounded-2xl p-8 ml-12 relative z-10 w-full">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{
                  background: "oklch(0.78 0.14 75 / 0.12)",
                  border: "1px solid oklch(0.78 0.14 75 / 0.3)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "oklch(0.82 0.15 75)" }}
                />
                <span
                  className="text-xs font-semibold tracking-wider"
                  style={{ color: "oklch(0.82 0.15 75)" }}
                >
                  WHO I AM
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center py-4 rounded-xl"
                    style={{ background: "oklch(0.085 0.006 240 / 0.5)" }}
                  >
                    <div
                      className="font-serif text-2xl font-bold"
                      style={{ color: "oklch(0.82 0.15 75)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[10px] font-medium tracking-wide mt-1"
                      style={{ color: "oklch(0.60 0.007 240)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 opacity-30">
                {reelSegments.map((seg, i) => (
                  <div
                    key={seg}
                    className="flex-1 h-1 rounded-full"
                    style={{
                      background:
                        i % 2 === 0
                          ? "oklch(0.78 0.14 75)"
                          : "oklch(0.22 0.009 240)",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="nav-link text-xs tracking-[0.25em] mb-4"
              style={{ color: "oklch(0.82 0.15 75)" }}
            >
              ABOUT ME
            </p>
            <h2
              className="section-title text-3xl md:text-4xl mb-6"
              style={{ color: "oklch(0.95 0.005 80)" }}
            >
              Crafting Stories
              <br />
              <span style={{ color: "oklch(0.82 0.15 75)" }}>
                Frame by Frame
              </span>
            </h2>

            <p className="text-body mb-6">
              Shameer Nizar is a creative and detail-oriented Multimedia Editor
              specializing in video editing and graphic design. With hands-on
              experience in short films, social media content, trailer cuts, and
              wedding media, he brings stories to life through compelling
              visuals.
            </p>
            <p className="text-body mb-8">
              Passionate about storytelling, he focuses on quality, creativity,
              and modern digital trends — transforming raw footage into
              cinematic experiences that resonate, engage, and leave a lasting
              impression.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Video Editing",
                "Graphic Design",
                "Storytelling",
                "Color Grading",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider"
                  style={{
                    background: "oklch(0.78 0.14 75 / 0.1)",
                    border: "1px solid oklch(0.78 0.14 75 / 0.25)",
                    color: "oklch(0.82 0.15 75)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
