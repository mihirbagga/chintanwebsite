import React from 'react';
import { motion } from 'framer-motion';
import { heroLogo } from '../assets/hero-logo';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const wordVariants = {
        hidden: { y: "110%" },
        visible: {
            y: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="hero" style={{
            padding: '10rem 2rem 6rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden'
        }}>
            {/* Orbital Logo System */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="logo-sys"
                style={{
                    position: 'relative',
                    width: '200px',
                    height: '200px',
                    marginBottom: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <motion.img
                    src={heroLogo}
                    alt="Chintan"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    style={{
                        width: '96px',
                        height: '96px',
                        zIndex: 3,
                        filter: 'drop-shadow(0 0 25px rgba(194, 59, 34, 0.06))'
                    }}
                />

                {/* Orbital Rings */}
                <div className="lr lr1" style={{
                    position: 'absolute',
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    border: '1px solid rgba(194, 59, 34, 0.15)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--red)',
                            top: '-3px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            boxShadow: '0 0 12px rgba(194, 59, 34, 0.5)'
                        }} />
                    </motion.div>
                </div>

                <div className="lr lr2" style={{
                    position: 'absolute',
                    width: '175px',
                    height: '175px',
                    borderRadius: '50%',
                    border: '1px dashed rgba(216, 195, 165, 0.15)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--sand)',
                            bottom: '-2px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            boxShadow: '0 0 8px rgba(216, 195, 165, 0.4)'
                        }} />
                    </motion.div>
                </div>

                <div className="lr lr3" style={{
                    position: 'absolute',
                    width: '198px',
                    height: '198px',
                    borderRadius: '50%',
                    border: '1px solid rgba(194, 59, 34, 0.05)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 56, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            width: '3px',
                            height: '3px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(194, 59, 34, 0.4)',
                            right: '-1.5px',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }} />
                    </motion.div>
                </div>

                {/* Inner Glow */}
                <motion.div
                    animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.04, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(194, 59, 34, 0.05) 0%, transparent 70%)',
                        zIndex: 1
                    }}
                />
            </motion.div>

            {/* Hero Text Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ maxWidth: '800px', zIndex: 2 }}
            >
                <h1 style={{
                    fontFamily: 'var(--fd)',
                    fontSize: 'clamp(3.2rem, 7.5vw, 5.8rem)',
                    fontWeight: 300,
                    lineHeight: 1.06,
                    color: 'var(--ink)',
                    marginBottom: '1.5rem',
                    perspective: '1000px'
                }}>
                    {["Don't", "just", "consume.", "Contemplate."].map((word, i) => (
                        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: '0.3em' }}>
                            <motion.span
                                variants={wordVariants}
                                style={{ display: 'inline-block' }}
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                <motion.p
                    variants={itemVariants}
                    style={{
                        fontFamily: 'var(--fb)',
                        fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                        color: 'var(--ink-muted)',
                        lineHeight: 1.6,
                        marginBottom: '3rem',
                        maxWidth: '540px',
                        marginInline: 'auto'
                    }}
                >
                    A refuge for the thoughtful reader. Escape the shallow stream of information and re-discover the art of deep reading and reflection.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center' }}
                >
                    <button className="btn-prime">Request an Invite</button>
                    <button style={{
                        background: 'none',
                        border: 'none',
                        fontFamily: 'var(--fb)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-muted)',
                        cursor: 'pointer',
                        padding: '0.85rem 1.6rem',
                        borderBottom: '1px solid rgba(107, 99, 88, 0.2)',
                        transition: 'all 0.3s var(--es)'
                    }}>Our Philosophy</button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
