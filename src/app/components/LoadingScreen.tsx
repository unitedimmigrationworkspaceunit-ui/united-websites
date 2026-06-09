import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Logo } from './Logo';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-[#FAF7F2] via-[#F5EFE6] to-white flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mb-8 flex justify-center"
        >
          <Logo size="xl" variant="light" className="!h-28 !w-28" />
        </motion.div>

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-[#0B1F3A] mb-2"
        >
          United Immigration
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[#D4A24C] mb-8"
        >
          Services
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-[#F5EFE6] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D4A24C] to-[#0B1F3A]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-sm text-[#1E1E1E]/60 mt-4">
            Loading your journey...
          </p>
        </div>

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#D4A24C] rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: "50%",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
