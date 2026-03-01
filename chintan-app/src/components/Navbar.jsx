import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { navbarLogo } from '../assets/navbar-logo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: isScrolled ? '0.8rem 3rem' : '1.5rem 3rem',
                backgroundColor: isScrolled ? 'rgba(250, 246, 240, 0.9)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(26, 23, 20, 0.05)' : '1px solid transparent',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
        >
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={navbarLogo}
                    alt="Chintan Logo"
                    style={{ height: '32px' }}
                />
            </a>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="#philosophy" style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--ink-muted)' }}>Philosophy</a>
                <a href="#features" style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--ink-muted)' }}>Features</a>
                <button className="btn-prime">Get Access</button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
