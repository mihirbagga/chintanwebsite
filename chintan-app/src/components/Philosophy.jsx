import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="philosophy" style={{
            padding: '8rem 2rem',
            backgroundColor: 'var(--white)',
            borderTop: '1px solid var(--sand-pale)',
            borderBottom: '1px solid var(--sand-pale)'
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}
                >
                    {/* Item 1 */}
                    <motion.div variants={cardVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <span style={{
                            fontSize: '0.62rem',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--red)'
                        }}>01 / Intentionality</span>
                        <h2 style={{ fontFamily: 'var(--fd)', fontSize: '2.4rem', fontWeight: 300, lineHeight: 1.2 }}>
                            Algorithms build cages. We build <em>refuges</em>.
                        </h2>
                        <p style={{ color: 'var(--ink-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                            Social feeds are designed to keep you scrolling. Chintan is designed to help you stop. We curate for depth, not for clicks. Every piece is an invitation to stay a while.
                        </p>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div variants={cardVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <span style={{
                            fontSize: '0.62rem',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--red)'
                        }}>02 / Silence</span>
                        <h2 style={{ fontFamily: 'var(--fd)', fontSize: '2.4rem', fontWeight: 300, lineHeight: 1.2 }}>
                            The luxury of a <em>quiet</em> mind.
                        </h2>
                        <p style={{ color: 'var(--ink-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                            Our interface is stripped of distractions. No ads, no sidebars, no engagement bait. Just you and the text, in a space that respects your attention.
                        </p>
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div variants={cardVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <span style={{
                            fontSize: '0.62rem',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--red)'
                        }}>03 / Community</span>
                        <h2 style={{ fontFamily: 'var(--fd)', fontSize: '2.4rem', fontWeight: 300, lineHeight: 1.2 }}>
                            Dialogue over <em>dissent</em>.
                        </h2>
                        <p style={{ color: 'var(--ink-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                            Comments are for contemplation. We foster a community of curious minds who value nuance over noise. Connect with readers who share your thirst for understanding.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Philosophy;
