import { motion, useInView } from "motion/react";
import { useRef } from "react";

const strengths = [
  {
    icon: "🎬",
    title: "Cinematic Storytelling",
    desc: "Transforming raw footage into compelling narratives with a filmmaker's eye for composition and pacing.",
  },
  {
    icon: "📱",
    title: "Trend-Based Editing",
    desc: "Staying ahead of digital trends to create content that resonates with modern audiences across platforms.",
  },
  {
    icon: "👁",
    title: "Strong Visual Sense",
    desc: "An innate ability to compose, color-grade, and design visuals that communicate emotion instantly.",
  },
  {
    icon: "⚙️",
    title: "Detail-Oriented Workflow",
    desc: "Meticulous attention to every frame, cut, and transition — quality is non-negotiable.",
  },
  {
    icon: "⚡",
    title: "Fast & Creative Execution",
    desc: "Delivering high-quality results on tight deadlines without compromising on creative vision.",
  },
];

export default function StrengthsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="strengths"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.78 0.14 75 / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="nav-link text-xs tracking-[0.3em] mb-4"
            style={{ color: "oklch(0.82 0.15 75)" }}
          >
            WHAT I BRING
          </p>
          <h2
            className="section-title text-3xl md:text-4xl"
            style={{ color: "oklch(0.95 0.005 80)" }}
          >
            Core <span style={{ color: "oklch(0.82 0.15 75)" }}>Strengths</span>
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          data-ocid="strengths.list"
        >
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300 group"
              data-ocid={`strengths.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  background: "oklch(0.78 0.14 75 / 0.12)",
                  border: "1px solid oklch(0.78 0.14 75 / 0.2)",
                }}
              >
                {item.icon}
              </div>
              <h3
                className="font-serif text-base font-semibold"
                style={{ color: "oklch(0.95 0.005 80)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm"
                style={{ color: "oklch(0.60 0.007 240)", lineHeight: 1.6 }}
              >
                {item.desc}
              </p>
              {/* Gold bottom accent on hover */}
              <div
                className="mt-auto h-[2px] w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{ background: "oklch(0.78 0.14 75)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
