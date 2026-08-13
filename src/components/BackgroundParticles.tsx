import Image from "next/image";
import { motion } from "framer-motion";

export function BackgroundParticles() {
  const particles = [
    { type: "flower", top: "15%", left: "15%", size: 48, delay: 0, duration: 7, src: "/flower.svg" },
    { type: "pad", top: "45%", left: "80%", size: 75, delay: 2, duration: 8, src: "/pad.webp" },
    { type: "flower", top: "75%", left: "20%", size: 40, delay: 1, duration: 6.5, src: "/flower.svg" },
    { type: "pad", top: "25%", left: "70%", size: 70, delay: 3, duration: 9, src: "/pad.webp" },
    { type: "flower", top: "20%", left: "85%", size: 48, delay: 0.5, duration: 7.5, src: "/flower.svg" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: p.top, left: p.left }}
          initial={{ opacity: 0.5, y: 0, rotate: 0 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            y: [-12, 12, -12],
            x: [-8, 8, -8],
            rotate: [-12, 12, -12],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        >
          <Image
            src={p.src} 
            alt={p.type} 
            width={p.size}
            height={p.size}
            sizes={`${p.size}px`}
            loading="lazy"
            className="object-contain drop-shadow-lg w-auto h-auto"
          />
        </motion.div>
      ))}
    </div>
  );
}
