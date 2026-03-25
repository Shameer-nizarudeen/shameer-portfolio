import { motion, useInView } from "motion/react";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Video Editing",
    icon: "🎬",
    skills: [
      { name: "Adobe Premiere Pro", level: 95 },
      { name: "Adobe After Effects", level: 90 },
      { name: "DaVinci Resolve", level: 85 },
      { name: "Final Cut Pro", level: 80 },
    ],
  },
  {
    category: "Graphic Design",
    icon: "🎨",
    skills: [
      { name: "Adobe Photoshop", level: 90 },
      { name: "Adobe Illustrator", level: 85 },
    ],
  },
];

const badges = [
  "Motion Graphics",
  "Color Grading",
  "Sound Syncing",
  "Cinematic Transitions",
];

function SkillBar({
  name,
  level,
  isInView,
  delay,
}: { name: string; level: number; isInView: boolean; delay: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-sm font-medium"
          style={{ color: "oklch(0.77 0.006 240)" }}
        >
          {name}
        </span>
        <span
          className="text-xs font-bold"
          style={{ color: "oklch(0.82 0.15 75)" }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "oklch(0.22 0.009 240)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.78 0.14 75), oklch(0.82 0.15 75))",
          }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${level}%` } : { width: "0%" }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 md:py-32"
      style={{ background: "oklch(0.10 0.007 240)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            WHAT I WORK WITH
          </p>
          <h2
            className="section-title text-3xl md:text-4xl"
            style={{ color: "oklch(0.95 0.005 80)" }}
          >
            Skills &{" "}
            <span style={{ color: "oklch(0.82 0.15 75)" }}>Expertise</span>
          </h2>
        </motion.div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: gi * 0.15 }}
              className="glass-card rounded-2xl p-8 hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3
                  className="font-serif text-lg font-semibold"
                  style={{ color: "oklch(0.95 0.005 80)" }}
                >
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  isInView={isInView}
                  delay={gi * 0.15 + si * 0.1 + 0.3}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide"
              style={{
                background: "oklch(0.78 0.14 75 / 0.12)",
                border: "1px solid oklch(0.78 0.14 75 / 0.35)",
                color: "oklch(0.82 0.15 75)",
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
