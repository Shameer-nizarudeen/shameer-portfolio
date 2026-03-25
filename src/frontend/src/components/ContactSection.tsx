import { Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle = {
    background: "oklch(0.13 0.008 240)",
    border: "1px solid oklch(0.22 0.009 240)",
    color: "oklch(0.95 0.005 80)",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "0.5rem",
    color: "oklch(0.60 0.007 240)",
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 30% 80%, oklch(0.78 0.14 75 / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p
            className="nav-link text-xs tracking-[0.3em] mb-4"
            style={{ color: "oklch(0.82 0.15 75)" }}
          >
            GET IN TOUCH
          </p>
          <h2
            className="section-title text-3xl md:text-4xl"
            style={{ color: "oklch(0.95 0.005 80)" }}
          >
            Let&apos;s Create{" "}
            <span style={{ color: "oklch(0.82 0.15 75)" }}>Together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <p className="text-body">
              Ready to bring your vision to life? Whether it&apos;s a short
              film, social media content, trailer cut, or wedding film —
              let&apos;s talk.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+918593878116"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                data-ocid="contact.link"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "oklch(0.78 0.14 75 / 0.12)",
                    border: "1px solid oklch(0.78 0.14 75 / 0.2)",
                    color: "oklch(0.82 0.15 75)",
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.60 0.007 240)" }}
                  >
                    Phone
                  </p>
                  <p
                    className="font-medium"
                    style={{ color: "oklch(0.95 0.005 80)" }}
                  >
                    +91 8593878116
                  </p>
                </div>
              </a>

              <a
                href="mailto:shameermuhammed674@gmail.com"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                data-ocid="contact.link"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "oklch(0.78 0.14 75 / 0.12)",
                    border: "1px solid oklch(0.78 0.14 75 / 0.2)",
                    color: "oklch(0.82 0.15 75)",
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.60 0.007 240)" }}
                  >
                    Email
                  </p>
                  <p
                    className="font-medium text-sm"
                    style={{ color: "oklch(0.95 0.005 80)" }}
                  >
                    shameermuhammed674@gmail.com
                  </p>
                </div>
              </a>
            </div>

            <div>
              <p
                className="text-xs font-semibold tracking-wider mb-3"
                style={{ color: "oklch(0.60 0.007 240)" }}
              >
                CONNECT
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: <Instagram size={18} />,
                    href: "https://instagram.com",
                    label: "Instagram",
                  },
                  {
                    icon: <Youtube size={18} />,
                    href: "https://youtube.com",
                    label: "YouTube",
                  },
                  {
                    icon: <Linkedin size={18} />,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                  },
                  {
                    icon: <SiWhatsapp size={18} />,
                    href: "https://wa.me/918593878116",
                    label: "WhatsApp",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-gold"
                    style={{
                      background: "oklch(0.13 0.008 240)",
                      border: "1px solid oklch(0.22 0.009 240)",
                      color: "oklch(0.60 0.007 240)",
                    }}
                    data-ocid="contact.link"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 mt-2">
              <p
                className="font-serif text-lg italic"
                style={{ color: "oklch(0.82 0.15 75)" }}
              >
                &ldquo;Every frame tells a story. Let&apos;s tell yours.&rdquo;
              </p>
              <p
                className="text-xs mt-2"
                style={{ color: "oklch(0.60 0.007 240)" }}
              >
                — Shameer Nizar
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 flex flex-col gap-5"
              data-ocid="contact.modal"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your full name"
                    style={inputStyle}
                    required
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    style={inputStyle}
                    required
                    data-ocid="contact.input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" style={labelStyle}>
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Project type / inquiry"
                  style={inputStyle}
                  data-ocid="contact.input"
                />
              </div>

              <div>
                <label htmlFor="contact-message" style={labelStyle}>
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: "none" }}
                  data-ocid="contact.textarea"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-wider transition-all duration-200 hover:shadow-gold hover:-translate-y-0.5"
                style={{
                  background: "oklch(0.78 0.14 75)",
                  color: "oklch(0.085 0.006 240)",
                  border: "none",
                  cursor: "pointer",
                }}
                data-ocid="contact.submit_button"
              >
                {submitted ? "MESSAGE SENT ✦" : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
