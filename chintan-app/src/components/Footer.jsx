import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="cta-section" style={{
            padding: '12rem 1.5rem',
            backgroundColor: 'transparent',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, #ff2e2e 0%, transparent 60%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.4em',
                    color: 'var(--red-primary)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '2rem'
                }}>The Sanctuary</span>

                <h2 className="serif" style={{
                    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                    fontWeight: 300,
                    marginBottom: '2rem',
                    lineHeight: 1,
                    color: 'white'
                }}>
                    Begin your <em style={{ fontStyle: 'italic', color: 'var(--red-primary)', fontWeight: 400 }}>contemplation</em>.
                </h2>

                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.15rem',
                    marginBottom: '4rem',
                    maxWidth: '520px',
                    marginInline: 'auto',
                    lineHeight: 1.6
                }}>
                    Join a global community of readers dedicated to depth over speed.
                    Early access is currently by invitation only.
                </p>

                <form style={{
                    display: 'flex',
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '6px',
                    borderRadius: '100px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    maxWidth: '480px',
                    marginInline: 'auto',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                    transition: 'border-color 0.3s ease'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255, 46, 46, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                >
                    <input
                        type="email"
                        placeholder="yourname@reflection.com"
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            padding: '0 1.8rem',
                            color: 'white',
                            fontSize: '0.95rem',
                            fontFamily: 'var(--font-sans)',
                            outline: 'none'
                        }}
                    />
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            padding: '1rem 2rem',
                            borderRadius: '100px',
                            border: 'none',
                            backgroundColor: '#ff2e2e',
                            color: 'white',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            boxShadow: '0 8px 20px rgba(255, 46, 46, 0.2)'
                        }}
                    >
                        Request Access
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer style={{
            padding: '6rem 3rem 4rem',
            backgroundColor: '#050505',
            borderTop: '1px solid rgba(255, 255, 255, 0.03)',
            color: 'var(--text-muted)',
            fontSize: '0.75rem',
            letterSpacing: '0.05em'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem' }}>
                    <div style={{ maxWidth: '300px' }}>
                        <h4 className="serif" style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>Chintan</h4>
                        <p style={{ lineHeight: 1.8 }}>
                            A sanctuary for deep thought. We believe the future of reading is non-algorithmic,
                            human-centered, and profoundly slow.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <span style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.2em' }}>Platform</span>
                            <a href="#" className="footer-link">Philosophy</a>
                            <a href="#" className="footer-link">Features</a>
                            <a href="#" className="footer-link">Curators</a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <span style={{ color: 'white', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.2em' }}>Legal</span>
                            <a href="#" className="footer-link">Privacy</a>
                            <a href="#" className="footer-link">Terms</a>
                            <a href="#" className="footer-link">Contact</a>
                        </div>
                    </div>
                </div>

                <div style={{
                    marginTop: '6rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.02)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>© 2024 Chintan. Built for depth.</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" className="footer-link">Twitter / X</a>
                        <a href="#" className="footer-link">Instagram</a>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-link {
                    color: inherit;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                .footer-link:hover {
                    color: white;
                }
            `}</style>
        </footer>
    );
};

export { CTA, Footer };
