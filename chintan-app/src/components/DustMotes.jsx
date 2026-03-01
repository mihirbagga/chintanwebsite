import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DustMotes = () => {
  const [motes, setMotes] = useState([]);

  useEffect(() => {
    // Generate static mote data on mount
    const newMotes = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.4 + 0.1,
      isWarm: Math.random() > 0.85,
      path: [
        { x: 0, y: 0 },
        {
          x: (Math.random() - 0.5) * 80,
          y: (Math.random() - 0.5) * 80
        },
        {
          x: (Math.random() - 0.5) * 80,
          y: (Math.random() - 0.5) * 80
        },
        { x: 0, y: 0 }
      ]
    }));
    setMotes(newMotes);
  }, []);

  return (
    <div className="dust-layer" style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      {motes.map((mote) => (
        <motion.div
          key={mote.id}
          initial={{
            left: `${mote.x}%`,
            top: `${mote.y}%`,
            opacity: mote.opacity,
            width: mote.size,
            height: mote.size,
          }}
          animate={{
            x: mote.path.map(p => p.x),
            y: mote.path.map(p => p.y),
            opacity: [mote.opacity, mote.opacity * 1.5, mote.opacity * 0.7, mote.opacity]
          }}
          transition={{
            duration: mote.duration,
            repeat: Infinity,
            delay: mote.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: mote.isWarm ? 'var(--red)' : 'var(--sand)',
            filter: 'blur(1px)'
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
          mixBlendMode: 'overlay',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default DustMotes;
