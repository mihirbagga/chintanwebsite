import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const cards = [
        {
            num: "01",
            title: "Tell us what matters",
            desc: "Choose your interests — politics, tech, culture, business, sports, global affairs. Chintan starts building your world from day one."
        },
        {
            num: "02",
            title: "Receive curated intelligence",
            desc: "AI assembles your briefs with context, multiple perspectives, and the questions mainstream outlets won't ask."
        },
        {
            num: "03",
            title: "Do Chintan",
            desc: "Engage with polls, explore The Other Side, challenge assumptions with AI. Over time, you become a sharper thinker."
        }
    ];

    return (
        <section id="how" style={{ padding: '10rem 1.5rem', background: 'transparent' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.4em', color: 'var(--red-primary)', textTransform: 'uppercase' }}>The Process</span>
                    <h2 className="serif" style={{ fontSize: '4rem', fontWeight: 300, marginTop: '1rem', color: 'white' }}>
                        Three steps to a <em style={{ fontStyle: 'italic', color: 'var(--red-primary)', fontWeight: 400 }}>clearer</em> worldview.
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 1 }}
                            viewport={{ once: true }}
                            className="how-card"
                            style={{
                                padding: '4rem 3rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '32px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            whileHover={{ y: -10, backgroundColor: 'rgba(255, 46, 46, 0.02)', borderColor: 'rgba(255, 46, 46, 0.15)' }}
                        >
                            <div className="serif" style={{
                                fontSize: '6rem',
                                fontWeight: 300,
                                color: 'transparent',
                                WebkitTextStroke: '1px rgba(255, 46, 46, 0.2)',
                                lineHeight: 1,
                                marginBottom: '2rem'
                            }}>
                                {card.num}
                            </div>
                            <h3 className="serif" style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>{card.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>{card.desc}</p>

                            {/* Decorative Line */}
                            <motion.div
                                style={{
                                    position: 'absolute', top: 0, left: '10%', right: '10%', height: '2px',
                                    background: 'linear-gradient(to right, transparent, var(--red-primary), transparent)',
                                    scaleX: 0, transformOrigin: 'left'
                                }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
