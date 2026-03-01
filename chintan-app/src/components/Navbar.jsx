import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isScrolled ? '0.8rem 2rem' : '1.5rem 3rem',
        backgroundColor: isScrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 46, 46, 0.15)' : '1px solid transparent',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={navStyle}
        >
            <motion.a
                href="#"
                className="nav-logo"
                whileHover={{ scale: 1.02 }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    color: 'white'
                }}
            >
                <div style={{ position: 'relative', width: '32px', height: '32px' }}>
                    <motion.img
                        src={navbarLogo}
                        alt="Chintan Logo"
                        style={{
                            width: '100%',
                            height: '100%',
                            filter: 'drop-shadow(0 0 10px rgba(255, 46, 46, 0.4))'
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    />
                </div>
                <span className="serif" style={{
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    color: 'white'
                }}>Chintan</span>
            </motion.a>

            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                <a href="#philosophy" className="nav-link">Philosophy</a>
                <a href="#features" className="nav-link">Features</a>
                <motion.button
                    className="nav-btn"
                    whileHover={{ scale: 1.05, backgroundColor: '#ff2e2e', color: 'white' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '0.6rem 1.4rem',
                        borderRadius: '100px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: 'white',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        transition: 'all 0.4s var(--ease-out)'
                    }}
                >
                    Early Access
                </motion.button>
            </div>

            <style>{`
                .nav-link {
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.6);
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    transition: color 0.3s ease;
                    position: relative;
                }
                .nav-link:hover {
                    color: #ff2e2e;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -6px;
                    left: 50%;
                    width: 0;
                    height: 1px;
                    background: #ff2e2e;
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                }
                .nav-link:hover::after {
                    width: 20px;
                }
                @media (max-width: 768px) {
                    nav {
                        padding: 1rem 1.5rem !important;
                    }
                    .nav-link {
                        display: none;
                    }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
