import { GraduationCap } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function EducationSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 md:py-32"
      style={{ background: "oklch(0.10 0.007 240)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p
            className="nav-link text-xs tracking-[0.3em] mb-4"
            style={{ color: "oklch(0.82 0.15 75)" }}
          >
            BACKGROUND
          </p>
          <h2
            className="section-title text-3xl md:text-4xl"
            style={{ color: "oklch(0.95 0.005 80)" }}
          >
            Education &{" "}
            <span style={{ color: "oklch(0.82 0.15 75)" }}>Languages</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Degree */}
            <div className="flex-1">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "oklch(0.78 0.14 75 / 0.12)",
                  border: "1px solid oklch(0.78 0.14 75 / 0.25)",
                  color: "oklch(0.82 0.15 75)",
                }}
              >
                <GraduationCap size={26} />
              </div>
              <p
                className="nav-link text-xs tracking-wider mb-2"
                style={{ color: "oklch(0.82 0.15 75)" }}
              >
                DEGREE
              </p>
              <h3
                className="font-serif text-xl font-semibold mb-1"
                style={{ color: "oklch(0.95 0.005 80)" }}
              >
                B.Tech — Computer Science & Engineering
              </h3>
              <p className="text-sm" style={{ color: "oklch(0.60 0.007 240)" }}>
                Combining technical knowledge with creative expertise to build
                future-ready multimedia experiences.
              </p>
            </div>

            {/* Divider */}
            <div
              className="hidden md:block w-[1px] self-stretch"
              style={{ background: "oklch(0.22 0.009 240)" }}
            />

            {/* Languages */}
            <div className="md:w-64">
              <p
                className="nav-link text-xs tracking-wider mb-4"
                style={{ color: "oklch(0.82 0.15 75)" }}
              >
                LANGUAGES
              </p>
              <div className="flex flex-col gap-3">
                {["English", "Malayalam", "Hindi"].map((lang) => (
                  <div key={lang} className="flex items-center gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "oklch(0.78 0.14 75)" }}
                    />
                    <span
                      className="px-4 py-1.5 rounded-full text-sm font-medium"
                      style={{
                        background: "oklch(0.78 0.14 75 / 0.1)",
                        border: "1px solid oklch(0.78 0.14 75 / 0.2)",
                        color: "oklch(0.82 0.15 75)",
                      }}
                    >
                      {lang}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "oklch(0.60 0.007 240)" }}
                    >
                      Fluent
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
