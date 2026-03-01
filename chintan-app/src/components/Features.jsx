import React from 'react';
import { motion } from 'framer-motion';

const FeatureRow = ({ num, label, title, desc, visual, reverse = false }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
            alignItems: 'center',
            marginBottom: '8rem'
        }}>
            <motion.div
                initial={{ x: reverse ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ order: reverse ? 2 : 1 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontFamily: 'var(--fd)', fontSize: '1.2rem', color: 'var(--sand)' }}>{num}</span>
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{label}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--fd)', fontSize: '2.8rem', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.1 }}>{title}</h3>
                <p style={{ color: 'var(--ink-muted)', lineHeight: 1.7, fontSize: '1rem' }}>{desc}</p>
            </motion.div>

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{
                    order: reverse ? 1 : 2,
                    backgroundColor: 'rgba(216, 195, 165, 0.05)',
                    borderRadius: '24px',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: 'inset 0 0 40px rgba(0,0,0,0.02)'
                }}
            >
                {visual}
            </motion.div>
        </div>
    );
};

const Features = () => {
    return (
        <section id="features" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Feature 1: Algorithms */}
                <FeatureRow
                    num="I"
                    label="The Anti-Algorithm"
                    title="Curated by humans, for humans."
                    desc="We don't use AI to guess what you like. We use intuition to find what you need. Our curators select stories that challenge your perspective rather than confirming your bias."
                    visual={(
                        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
                            <div style={{ flex: 1, borderRight: '1px solid rgba(0,0,0,0.05)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <span style={{ fontSize: '0.5rem', fontWeight: 700, opacity: 0.3 }}>ECHO CHAMBER</span>
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <motion.div key={i} style={{ height: '6px', borderRadius: '3px', background: 'rgba(0,0,0,0.05)', width: `${80 + Math.random() * 20}%` }} />
                                ))}
                            </div>
                            <div style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <span style={{ fontSize: '0.5rem', fontWeight: 700, color: 'var(--red)' }}>EXPANDED VIEW</span>
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        style={{ height: '6px', borderRadius: '3px', background: i % 3 === 0 ? 'var(--red)' : i % 2 === 0 ? 'var(--sand)' : 'var(--ink-light)', opacity: 0.4, width: `${60 + Math.random() * 40}%`, originX: 0 }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                />

                {/* Feature 2: Deep Reading */}
                <FeatureRow
                    reverse
                    num="II"
                    label="Immersive Focus"
                    title="Design that breathes."
                    desc="Every font choice, every pixel of margin is tuned for the biomechanics of reading. Experience a digital interface that feels as natural as the printed page."
                    visual={(
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{ padding: '3rem', background: 'white', width: '260px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', borderRadius: '4px' }}
                        >
                            <div style={{ height: '12px', width: '40%', background: 'var(--red)', marginBottom: '1rem', opacity: 0.1 }} />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <div key={i} style={{ height: '2px', width: '100%', background: 'var(--ink)', opacity: 0.08 }} />
                                ))}
                            </div>
                        </motion.div>
                    )}
                />
            </div>
        </section>
    );
};

export default Features;
