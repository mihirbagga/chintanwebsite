import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const philContent = [
        {
            num: "01",
            title: "Intentionality",
            headline: "Algorithms build cages. We build refuges.",
            body: "Social feeds are designed to keep you scrolling. Chintan is designed to help you stop. We curate for depth, not for clicks. Every piece is an invitation to stay a while."
        },
        {
            num: "02",
            title: "Silence",
            headline: "The luxury of a quiet mind.",
            body: "Our interface is stripped of distractions. No ads, no sidebars, no engagement bait. Just you and the text, in a space that respects your attention."
        },
        {
            num: "03",
            title: "Community",
            headline: "Dialogue over dissent.",
            body: "Comments are for contemplation. We foster a community of curious minds who value nuance over noise. Connect with readers who share your thirst for understanding."
        }
    ];

    return (
        <section id="philosophy" style={{
            padding: '10rem 1.5rem',
            background: 'transparent',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Top Divider */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '10%',
                right: '10%',
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(255, 46, 46, 0.2), transparent)'
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                    {philContent.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            style={{
                                padding: '3.5rem 2.5rem',
                                borderRadius: '24px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem'
                            }}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: 'rgba(255, 46, 46, 0.03)',
                                borderColor: 'rgba(255, 46, 46, 0.15)'
                            }}
                        >
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: 'var(--red-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <span style={{ opacity: 0.3 }}>{item.num}</span>
                                <span>{item.title}</span>
                            </span>

                            <h3 className="serif" style={{
                                fontSize: '2.2rem',
                                fontWeight: 300,
                                lineHeight: 1.1,
                                color: 'white'
                            }}>
                                {item.headline}
                            </h3>

                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1rem',
                                lineHeight: 1.7,
                                margin: 0
                            }}>
                                {item.body}
                            </p>

                            {/* Accent Glow on Hover can be added via CSS but we use Framer for simplicity */}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats or Highlight line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        marginTop: '6rem',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <div style={{
                        width: '80px',
                        height: '1px',
                        background: 'var(--red-primary)',
                        marginBottom: '2rem'
                    }} />
                    <p className="serif" style={{
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        color: 'var(--text-secondary)',
                        maxWidth: '700px'
                    }}>
                        "The ability to read for depth is being traded for the ability to scan for relevance."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Philosophy;
