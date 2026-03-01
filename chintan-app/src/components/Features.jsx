import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Visual Components ---

const OSVisual = () => (
    <div style={{ position: 'relative', width: '280px', height: '320px', display: 'flex', gap: '20px' }}>
        <motion.div
            whileHover={{ y: -10 }}
            style={{
                flex: 1, height: '80%', background: 'rgba(255, 46, 46, 0.1)',
                border: '1px solid rgba(255, 46, 46, 0.2)', borderRadius: '16px',
                padding: '20px', backdropFilter: 'blur(5px)'
            }}
        >
            <span style={{ fontSize: '0.5rem', color: 'rgba(255, 46, 46, 0.5)', fontWeight: 700 }}>THE OPPPOSING VIEW</span>
            <p className="serif" style={{ fontSize: '0.85rem', marginTop: '10px', color: '#ffc8c8', fontStyle: 'italic' }}>
                "We must learn to embrace the complexity of the other..."
            </p>
        </motion.div>

        <motion.div
            whileHover={{ y: 10 }}
            style={{
                flex: 1, height: '80%', alignSelf: 'flex-end', background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px',
                padding: '20px'
            }}
        >
            <span style={{ fontSize: '0.5rem', color: 'rgba(255, 255, 255, 0.3)', fontWeight: 700 }}>YOUR CURRENT BUBBLE</span>
            <p className="serif" style={{ fontSize: '0.85rem', marginTop: '10px', color: '#aaa' }}>
                "Everything you already agree with and believe in..."
            </p>
        </motion.div>

        <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '1px', height: '100px', background: 'linear-gradient(to bottom, transparent, var(--red-primary), transparent)'
        }} />
        <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255, 46, 46, 0.2)',
            border: '1px solid var(--red-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'white' }} />
        </div>
    </div>
);

const TriptychVisual = () => (
    <div style={{ display: 'flex', width: '100%', height: '100%', gap: '4px' }}>
        {['Morning Breath', 'Mid-Day Pulse', 'Midnight Echo'].map((label, i) => (
            <motion.div
                key={label}
                whileHover={{ flex: 2 }}
                style={{
                    flex: 1, height: '100%', background: i === 0 ? '#1a0a0a' : i === 1 ? '#0a0a1a' : '#0a1a0a',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    cursor: 'default', transition: 'flex 0.6s cubic-bezier(0.16, 1, 0.3, 1)', position: 'relative',
                    overflow: 'hidden', border: '1px solid rgba(255,255,255,0.02)'
                }}
            >
                <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: i === 0 ? 'var(--red-primary)' : i === 1 ? '#3b82f6' : '#a855f7',
                    marginBottom: '15px', filter: 'blur(15px)', opacity: 0.5
                }} />
                <span style={{ fontSize: '0.9rem', color: 'white', letterSpacing: '0.05em' }}>{label}</span>
                <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', marginTop: '5px', textTransform: 'uppercase' }}>Available Daily</span>
            </motion.div>
        ))}
    </div>
);

const ChatVisual = () => (
    <div style={{ width: '220px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
            { text: "Help me understand the nuances of the new digital privacy bill.", side: 'u' },
            { text: "Certainly. Beyond the headlines, three specific clauses challenge the balance of...", side: 'b' },
            { text: "How does it compare to GDPR?", side: 'u' }
        ].map((m, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, x: m.side === 'u' ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 }}
                style={{
                    padding: '12px 16px', borderRadius: '14px', fontSize: '0.8rem',
                    background: m.side === 'u' ? 'rgba(255, 46, 46, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    color: m.side === 'u' ? '#ffc8c8' : '#ccc',
                    alignSelf: m.side === 'u' ? 'flex-end' : 'flex-start',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    maxWidth: '180px'
                }}
            >
                {m.text}
            </motion.div>
        ))}
    </div>
);

const AlgoVisual = () => (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        <div style={{ flex: 1, padding: '30px', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.2)', fontWeight: 700, marginBottom: '10px' }}>ALGORITHMIC FEED</span>
            {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} style={{ height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.05)', width: `${80 + Math.random() * 20}%` }} />
            ))}
        </div>
        <div style={{ flex: 1, padding: '30px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '0.5rem', color: 'var(--red-primary)', fontWeight: 700, marginBottom: '10px' }}>CHINTAN SELECTION</span>
            {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.8 }}
                    style={{
                        height: '6px', borderRadius: '3px',
                        background: i % 4 === 0 ? 'var(--red-primary)' : 'rgba(255, 46, 46, 0.2)',
                        width: `${50 + Math.random() * 50}%`, originX: 0
                    }}
                />
            ))}
        </div>
    </div>
);

const CommentVisual = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {[
            { n: 'AL', c: 'This point about attention being a finite resource changed how I view my mornings.', color: 'var(--red-primary)' },
            { n: 'SK', c: 'It resonates with Cal Newports deep work philosophy, but with a different emphasis on content.', color: '#333' }
        ].map((u, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
            >
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: u.color, flexShrink: 0 }} />
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '12px', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontWeight: 700, marginBottom: '4px', color: 'white' }}>{u.n}</div>
                    <div style={{ color: '#999' }}>{u.c}</div>
                </div>
            </motion.div>
        ))}
    </div>
);

// --- Main Components ---

const FeatureRow = ({ num, label, title, desc, visual, reverse = false }) => (
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '6rem',
        alignItems: 'center',
        marginBottom: '10rem'
    }}>
        <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: 'var(--ease-out)' }}
            style={{ order: reverse ? 1 : 0 }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <span className="serif" style={{ fontSize: '4rem', fontWeight: 300, color: 'transparent', WebkitTextStroke: '1px rgba(255, 46, 46, 0.3)' }}>
                    {num}
                </span>
                <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red-primary)' }}>{label}</span>
                </div>
            </div>
            <h3 className="serif" style={{ fontSize: '3rem', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem', color: 'white' }}>
                {title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                {desc}
            </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{
                height: '420px',
                borderRadius: '24px',
                background: 'linear-gradient(145deg, #0a0a0a, #050505)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            {visual}
            {/* Corner Accent */}
            <div style={{
                position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px',
                background: 'radial-gradient(circle, rgba(255, 46, 46, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />
        </motion.div>
    </div>
);

const Features = () => {
    return (
        <section id="features" style={{ padding: '10rem 1.5rem', background: 'transparent' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.4em', color: 'var(--red-primary)', textTransform: 'uppercase' }}>Artifacts of Insight</span>
                    <h2 className="serif" style={{ fontSize: '4rem', fontWeight: 300, marginTop: '1rem', color: 'white' }}>
                        Tools for the <em style={{ fontStyle: 'italic', color: 'var(--red-primary)', fontWeight: 400 }}>Contemplative</em> Mind
                    </h2>
                </div>

                <FeatureRow
                    num="01"
                    label="Nuance"
                    title="Engage with the Other Side."
                    desc="Escape the echo chamber. Chintan algorithmically ensures you encounter credible perspectives that challenge your existing views, fostering true understanding."
                    visual={<OSVisual />}
                />

                <FeatureRow
                    reverse
                    num="02"
                    label="Rhythm"
                    title="The Briefs Triptych."
                    desc="Stay informed without the overwhelm. Three curated editions daily—Morning Breath, Mid-Day Pulse, and Midnight Echo—design for different energy levels of your day."
                    visual={<TriptychVisual />}
                />

                <FeatureRow
                    num="03"
                    label="Inquiry"
                    title="AI as a Reading Companion."
                    desc="Don't just read—dialogue. Our integrated AI helps you unpack complex concepts, summarizes lengthy research, and cross-references data in real-time."
                    visual={<ChatVisual />}
                />

                <FeatureRow
                    reverse
                    num="04"
                    label="Curation"
                    title="Deep human selection."
                    desc="We believe in the power of human intuition. Every primary feature on Chintan is hand-picked by domain experts, ensuring quality that machines can't replicate."
                    visual={<AlgoVisual />}
                />

                <FeatureRow
                    num="05"
                    label="Dialogue"
                    title="Constructive Commenting."
                    desc="Join a community of thoughtful peers. Our threading and reputation systems prioritize nuance and evidence-based discussion over inflammatory reactions."
                    visual={<CommentVisual />}
                />

            </div>
        </section>
    );
};

export default Features;
