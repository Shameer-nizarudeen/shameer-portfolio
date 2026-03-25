import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[oklch(0.085_0.006_240)] overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 40%, oklch(0.04 0 0) 100%)",
          }}
        />

        {/* Shimmer bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] shimmer-gold"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Profile image */}
        <div className="relative flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.78 0.14 75 / 0.3) 0%, transparent 70%)",
                transform: "scale(2)",
              }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div
              className="w-28 h-28 rounded-full overflow-hidden relative z-10"
              style={{
                border: "2px solid oklch(0.78 0.14 75 / 0.5)",
                boxShadow: "0 0 40px oklch(0.78 0.14 75 / 0.2)",
              }}
            >
              <img
                src="/assets/uploads/img_5467-019d2592-310a-729c-bc4e-ccf3297b0634-1.jpg"
                alt="Shameer Nizar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p
              className="nav-link text-xs tracking-[0.3em]"
              style={{ color: "oklch(0.60 0.007 240)" }}
            >
              LOADING PORTFOLIO
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
