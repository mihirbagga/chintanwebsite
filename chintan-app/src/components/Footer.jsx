import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="cta-section" style={{
            padding: '10rem 2rem',
            backgroundColor: 'var(--ink)',
            color: 'var(--cream)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    Ready for a <em>deeper</em> conversation?
                </h2>
                <p style={{ color: 'var(--ink-faint)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '480px', marginInline: 'auto' }}>
                    Join 40,000+ readers who receive our weekly curated essays on life, technology, and philosophy.
                </p>

                <form style={{
                    display: 'flex',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '4px',
                    borderRadius: '100px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    maxWidth: '440px',
                    marginInline: 'auto'
                }}>
                    <input
                        type="email"
                        placeholder="Your email address"
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            padding: '0 1.5rem',
                            color: 'var(--cream)',
                            fontFamily: 'var(--fb)',
                            outline: 'none'
                        }}
                    />
                    <button className="btn-prime">Join Chintan</button>
                </form>
            </div>

            {/* Decorative pulse background */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, var(--red) 0%, transparent 70%)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            />
        </section>
    );
};

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 3rem',
            backgroundColor: 'var(--ink)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'var(--ink-muted)',
            fontSize: '0.8rem'
        }}>
            <div>© 2024 Chintan. Built for depth.</div>
            <div style={{ display: 'flex', gap: '3rem' }}>
                <a href="#" style={{ transition: 'color 0.3s' }}>Privacy Policy</a>
                <a href="#" style={{ transition: 'color 0.3s' }}>Terms of Service</a>
                <a href="#" style={{ transition: 'color 0.3s' }}>Twitter</a>
            </div>
        </footer>
    );
};

export { CTA, Footer };
