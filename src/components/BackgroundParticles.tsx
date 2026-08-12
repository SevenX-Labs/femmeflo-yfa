import { motion } from "framer-motion";

export function BackgroundParticles() {
  const particles = [
    { type: "flower", top: "15%", left: "15%", size: 48, delay: 0, duration: 7, src: "/flower.svg" },
    { type: "pad", top: "45%", left: "80%", size: 80, delay: 2, duration: 8, src: "/pad.webp" },
    { type: "flower", top: "75%", left: "20%", size: 40, delay: 1, duration: 6.5, src: "/flower.svg" },
    { type: "pad", top: "25%", left: "70%", size: 75, delay: 3, duration: 9, src: "/pad.webp" },
    { type: "flower", top: "20%", left: "85%", size: 52, delay: 0.5, duration: 7.5, src: "/flower.svg" },
    { type: "pad", top: "60%", left: "10%", size: 85, delay: 2.5, duration: 8.5, src: "/pad.webp" },
    { type: "flower", top: "80%", left: "75%", size: 45, delay: 1.5, duration: 7, src: "/flower.svg" },
    { type: "pad", top: "10%", left: "40%", size: 80, delay: 3.5, duration: 9.5, src: "/pad.webp" },
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
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            rotate: [-15, 15, -15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        >
          <img 
            src={p.src} 
            alt={p.type} 
            style={{ width: p.size, height: "auto" }} 
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  );
}
