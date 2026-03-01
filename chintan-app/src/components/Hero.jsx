import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroLogo } from '../assets/hero-logo';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '8rem 1.5rem',
            background: 'transparent',
            overflow: 'hidden'
        }}>
            {/* Background Gradients */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120vw',
                height: '120vh',
                background: 'radial-gradient(circle at 50% 50%, #2a0a0a 0%, transparent 50%)',
                opacity: 0.4,
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <motion.div style={{ y: y1, opacity, zIndex: 1, position: 'relative' }} variants={containerVariants} initial="hidden" animate="visible">

                {/* Orbital System */}
                <motion.div
                    className="logo-sys"
                    style={{
                        position: 'relative',
                        width: '240px',
                        height: '240px',
                        margin: '0 auto 4rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(255, 46, 46, 0.1) 0%, transparent 70%)',
                            pointerEvents: 'none'
                        }}
                    />

                    <motion.img
                        src={heroLogo}
                        alt="Chintan"
                        style={{
                            width: '100px',
                            height: '100px',
                            zIndex: 10,
                            filter: 'drop-shadow(0 0 30px rgba(255, 46, 46, 0.3))'
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Rings */}
                    {[160, 210, 260].map((size, i) => (
                        <motion.div
                            key={size}
                            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                            transition={{ duration: 30 + i * 15, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                width: size,
                                height: size,
                                borderRadius: '50%',
                                border: `1px solid ${i === 1 ? 'rgba(255,255,255,0.03)' : 'rgba(255, 46, 46, 0.1)'}`,
                                borderStyle: i === 1 ? 'dashed' : 'solid'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: -3,
                                left: '50%',
                                width: 6 - i,
                                height: 6 - i,
                                borderRadius: '50%',
                                background: i === 1 ? '#fff' : 'var(--red-primary)',
                                boxShadow: `0 0 10px ${i === 1 ? '#fff' : 'var(--red-primary)'}`
                            }} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Content */}
                <motion.div variants={itemVariants}>
                    <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'var(--red-primary)',
                        display: 'block',
                        marginBottom: '1.5rem'
                    }}>Thoughtful Reading</span>

                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                        fontWeight: 300,
                        lineHeight: 0.95,
                        marginBottom: '2rem',
                        letterSpacing: '-0.02em',
                        color: 'white'
                    }}>
                        Don't just <em className="serif" style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--red-primary)' }}>consume</em>.<br />
                        Contemplate.
                    </h1>
                </motion.div>

                <motion.p variants={itemVariants} style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    margin: '0 auto 3.5rem',
                    fontWeight: 400,
                    lineHeight: 1.7
                }}>
                    A refuge for the thoughtful reader. Escape the shallow stream of
                    information and rediscover the art of deep reflection.
                </motion.p>

                <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 46, 46, 0.4)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            padding: '1.1rem 2.8rem',
                            borderRadius: '100px',
                            border: 'none',
                            backgroundColor: '#ff2e2e',
                            color: 'white',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            cursor: 'pointer'
                        }}
                    >
                        Begin Your Journey
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '3rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '30px',
                    height: '50px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '8px'
                }}
            >
                <div style={{ width: '2px', height: '8px', background: 'var(--red-primary)', borderRadius: '2px' }} />
            </motion.div>
        </section>
    );
};

export default Hero;
