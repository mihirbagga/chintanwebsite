import React from 'react';
import { motion } from 'framer-motion';

const AuroraBackground = () => {
    const auroras = [
        {
            color: 'rgba(255, 46, 46, 0.15)',
            width: '60vw',
            height: '60vh',
            top: '-10%',
            left: '-10%',
            duration: 20
        },
        {
            color: 'rgba(139, 26, 26, 0.1)',
            width: '70vw',
            height: '50vh',
            bottom: '-10%',
            right: '-10%',
            duration: 25
        },
        {
            color: 'rgba(255, 46, 46, 0.08)',
            width: '50vw',
            height: '80vh',
            top: '20%',
            left: '30%',
            duration: 30
        }
    ];

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            backgroundColor: '#050505',
            overflow: 'hidden',
            pointerEvents: 'none'
        }}>
            {auroras.map((aurora, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -30, 30, 0],
                        scale: [1, 1.1, 0.9, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: aurora.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        top: aurora.top,
                        left: aurora.left,
                        right: aurora.right,
                        bottom: aurora.bottom,
                        width: aurora.width,
                        height: aurora.height,
                        background: `radial-gradient(circle, ${aurora.color} 0%, transparent 70%)`,
                        filter: 'blur(80px)',
                        borderRadius: '50%'
                    }}
                />
            ))}

            {/* Dark Overlay for Depth */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)'
            }} />
        </div>
    );
};

export default AuroraBackground;
