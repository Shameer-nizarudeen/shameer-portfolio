import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      const ring = ringRef.current;
      if (ring) {
        ringPosRef.current.x +=
          (posRef.current.x - ringPosRef.current.x) * 0.12;
        ringPosRef.current.y +=
          (posRef.current.y - ringPosRef.current.y) * 0.12;
        ring.style.transform = `translate(${ringPosRef.current.x - 20}px, ${ringPosRef.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnterInteractive = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "50px";
        ringRef.current.style.height = "50px";
        ringRef.current.style.borderColor = "oklch(0.82 0.15 75)";
        ringRef.current.style.opacity = "0.8";
      }
    };

    const onLeaveInteractive = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "40px";
        ringRef.current.style.height = "40px";
        ringRef.current.style.borderColor = "oklch(0.78 0.14 75 / 0.5)";
        ringRef.current.style.opacity = "0.6";
      }
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    const bindInteractives = (root: Document | Element) => {
      const els = root.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, label",
      );
      for (const el of els) {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      }
    };

    bindInteractives(document);

    const observer = new MutationObserver(() => {
      bindInteractives(document);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "oklch(0.82 0.15 75)",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none hidden md:block"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1.5px solid oklch(0.78 0.14 75 / 0.5)",
          opacity: 0.6,
          willChange: "transform",
          transition:
            "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, opacity 0.2s ease",
        }}
      />
    </>
  );
}
