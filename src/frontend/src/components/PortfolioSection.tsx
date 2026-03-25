import { Play } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

const categories = [
  "All",
  "Short Films",
  "Trailer Edits",
  "Social Media Content",
  "Wedding Projects",
];

const projects = [
  {
    id: "street-magazine-film",
    title: "Street Magazine — Short Film",
    category: "Short Films",
    image: "/assets/generated/portfolio-short-film.dim_600x400.jpg",
    gradient:
      "linear-gradient(135deg, oklch(0.25 0.05 250) 0%, oklch(0.15 0.03 300) 100%)",
  },
  {
    id: "frame-to-frame-fest",
    title: "Frame-to-Frame Fest Entry",
    category: "Short Films",
    image: null,
    gradient:
      "linear-gradient(135deg, oklch(0.20 0.04 240) 0%, oklch(0.12 0.02 260) 100%)",
  },
  {
    id: "epic-movie-trailer",
    title: "Epic Movie Trailer Cut",
    category: "Trailer Edits",
    image: "/assets/generated/portfolio-trailer.dim_600x400.jpg",
    gradient:
      "linear-gradient(135deg, oklch(0.18 0.03 30) 0%, oklch(0.10 0.02 20) 100%)",
  },
  {
    id: "action-thriller-trailer",
    title: "Action Thriller Trailer",
    category: "Trailer Edits",
    image: null,
    gradient:
      "linear-gradient(135deg, oklch(0.25 0.06 40) 0%, oklch(0.15 0.04 50) 100%)",
  },
  {
    id: "influencer-reel-lifestyle",
    title: "Influencer Reel — Lifestyle",
    category: "Social Media Content",
    image: "/assets/generated/portfolio-social.dim_600x400.jpg",
    gradient:
      "linear-gradient(135deg, oklch(0.22 0.05 300) 0%, oklch(0.13 0.03 320) 100%)",
  },
  {
    id: "trending-dance-edit",
    title: "Trending Dance Edit",
    category: "Social Media Content",
    image: null,
    gradient:
      "linear-gradient(135deg, oklch(0.18 0.04 280) 0%, oklch(0.10 0.02 290) 100%)",
  },
  {
    id: "royal-wedding-film-2023",
    title: "Royal Wedding Film 2023",
    category: "Wedding Projects",
    image: "/assets/generated/portfolio-wedding.dim_600x400.jpg",
    gradient:
      "linear-gradient(135deg, oklch(0.30 0.07 70) 0%, oklch(0.18 0.04 60) 100%)",
  },
  {
    id: "destination-wedding-highlights",
    title: "Destination Wedding Highlights",
    category: "Wedding Projects",
    image: null,
    gradient:
      "linear-gradient(135deg, oklch(0.25 0.06 65) 0%, oklch(0.15 0.03 55) 100%)",
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef<HTMLElement>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-24 md:py-32"
      style={{ background: "oklch(0.10 0.007 240)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p
            className="nav-link text-xs tracking-[0.3em] mb-4"
            style={{ color: "oklch(0.82 0.15 75)" }}
          >
            SHOWCASE
          </p>
          <h2
            className="section-title text-3xl md:text-4xl"
            style={{ color: "oklch(0.95 0.005 80)" }}
          >
            Work <span style={{ color: "oklch(0.82 0.15 75)" }}>Portfolio</span>
          </h2>
        </motion.div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          data-ocid="portfolio.tab"
        >
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
              style={{
                background:
                  activeFilter === cat
                    ? "oklch(0.78 0.14 75)"
                    : "oklch(0.13 0.008 240)",
                color:
                  activeFilter === cat
                    ? "oklch(0.085 0.006 240)"
                    : "oklch(0.60 0.007 240)",
                border:
                  activeFilter === cat
                    ? "1px solid oklch(0.78 0.14 75)"
                    : "1px solid oklch(0.22 0.009 240)",
                cursor: "pointer",
              }}
              data-ocid="portfolio.tab"
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-ocid="portfolio.list"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: "4/3" }}
                data-ocid={`portfolio.item.${i + 1}`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{ background: project.gradient }}
                  />
                )}

                <div
                  className="absolute inset-0"
                  style={{ background: "oklch(0 0 0 / 0.35)" }}
                />

                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "oklch(0.085 0.006 240 / 0.75)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "oklch(0.78 0.14 75)",
                      color: "oklch(0.085 0.006 240)",
                    }}
                  >
                    <Play size={20} fill="currentColor" />
                  </div>
                  <p
                    className="font-serif text-sm font-semibold text-center px-4"
                    style={{ color: "oklch(0.95 0.005 80)" }}
                  >
                    {project.title}
                  </p>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-semibold"
                    style={{
                      background: "oklch(0.78 0.14 75 / 0.2)",
                      border: "1px solid oklch(0.78 0.14 75 / 0.4)",
                      color: "oklch(0.82 0.15 75)",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 p-3"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0 0 0 / 0.8), transparent)",
                  }}
                >
                  <p
                    className="text-xs font-medium truncate"
                    style={{ color: "oklch(0.95 0.005 80)" }}
                  >
                    {project.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p
          className="text-center mt-8 text-xs"
          style={{ color: "oklch(0.60 0.007 240)" }}
        >
          ✦ YouTube &amp; Instagram links can be updated anytime
        </p>
      </div>
    </section>
  );
}
