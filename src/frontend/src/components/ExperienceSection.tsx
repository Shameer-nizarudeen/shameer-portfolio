import { motion, useInView } from "motion/react";
import { useRef } from "react";

const experiences = [
  {
    id: "frame-to-frame-2024",
    year: "2024",
    title: "Frame-to-Frame Short Film Fest",
    role: "Participant",
    company: "Lyca Productions",
    desc: "Participated in the prestigious Frame-to-Frame short film festival organized by Lyca Productions, showcasing cinematic storytelling skills.",
    link: "https://drive.google.com/file/d/17nnJM9eUM2kbvO5fGdmqZxfAHGKrRx7y/view?usp=sharing",
  },
  {
    id: "street-magazine-2023",
    year: "2023",
    title: '"Street Magazine" Short Film',
    role: "Writer, Director & Editor",
    company: "Independent",
    desc: "Conceptualized, wrote, directed and edited this short film — a full creative endeavor demonstrating end-to-end production capability.",
    link: "https://youtube.com/playlist?list=PLgP-Rxuowuwvtf0czdlcazeeaw8T2w1uB&si=7PmxY4bqA7rLwVB2",
  },
  {
    id: "instagram-content-2023",
    year: "2023",
    title: "Instagram Content Editor",
    role: "Content Editor",
    company: "Freelance",
    desc: "Produced trend-based, high-engagement short-form video content for social media influencers, adapting to platform-specific formats.",
    link: "https://www.instagram.com/shameer__nizar?igsh=ejh1YW9udjQ4emw3&utm_source=qr",
  },
  {
    id: "trailer-cuts-2022",
    year: "2022",
    title: "Cinematic Trailer Cuts",
    role: "Trailer Editor",
    company: "Freelance",
    desc: "Created dramatic movie trailer edits with precision timing, motion graphics, and emotional sound design to captivate audiences.",
    link: "https://youtube.com/playlist?list=PLgP-RxuowuwvTYP2pSl1GsSUNdXNqxRbi&si=4ULrXCfCAWJAyvx5",
  },
  {
    id: "wedding-media-2022",
    year: "2022",
    title: "Wedding Photography & Videography",
    role: "Photographer & Videographer",
    company: "Freelance",
    desc: "Delivered full-service wedding media — from on-site shooting to complete post-production, crafting timeless wedding films.",
    link: "",
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 80% 40%, oklch(0.78 0.14 75 / 0.04) 0%, transparent 60%)",
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
            TIMELINE
          </p>
          <h2
            className="section-title text-3xl md:text-4xl"
            style={{ color: "oklch(0.95 0.005 80)" }}
          >
            My <span style={{ color: "oklch(0.82 0.15 75)" }}>Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, oklch(0.78 0.14 75 / 0.3), transparent)",
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const CardWrapper = exp.link
                ? ({ children }: { children: React.ReactNode }) => (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {children}
                    </a>
                  )
                : ({ children }: { children: React.ReactNode }) => (
                    <div>{children}</div>
                  );
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className={`relative flex ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start gap-0 md:gap-8`}
                >
                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] pl-10 md:pl-0 ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <CardWrapper>
                      <div
                        className={`glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                          exp.link
                            ? "cursor-pointer hover:border-[oklch(0.78_0.14_75_/_0.5)] hover:shadow-[0_0_20px_oklch(0.78_0.14_75_/_0.15)]"
                            : ""
                        }`}
                      >
                        <div
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                          style={{
                            background: "oklch(0.78 0.14 75 / 0.15)",
                            color: "oklch(0.82 0.15 75)",
                          }}
                        >
                          {exp.year}
                        </div>
                        <h3
                          className="font-serif text-lg font-semibold mb-1"
                          style={{ color: "oklch(0.95 0.005 80)" }}
                        >
                          {exp.title}
                          {exp.link && (
                            <span
                              className="ml-2 text-xs align-middle"
                              style={{ color: "oklch(0.82 0.15 75)" }}
                            >
                              ↗
                            </span>
                          )}
                        </h3>
                        <p
                          className="text-xs font-semibold tracking-wide mb-3"
                          style={{ color: "oklch(0.82 0.15 75)" }}
                        >
                          {exp.role} · {exp.company}
                        </p>
                        <p className="text-sm text-body">{exp.desc}</p>
                      </div>
                    </CardWrapper>
                  </div>

                  <div
                    className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full -translate-x-1/2 animate-pulse-glow z-10"
                    style={{
                      background: "oklch(0.78 0.14 75)",
                      boxShadow: "0 0 12px oklch(0.78 0.14 75 / 0.5)",
                    }}
                  />

                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
