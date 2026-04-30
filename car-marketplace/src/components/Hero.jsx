import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import teslaHero from '../assets/tesla_style_hero_1775154304167.png';

const Hero = () => {
    return (
        <section className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden">
            {/* Cinematic Background */}
            <div className="position-absolute w-100 h-100 top-0 start-0 z-0">
                <img
                    src={teslaHero}
                    alt="Premium Automotive"
                    className="w-100 h-100 object-fit-cover"
                    style={{ filter: 'brightness(0.3) contrast(1.1) saturate(1.2)' }}
                />
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, #0F1113 100%)' }}></div>
            </div>

            <div className="container position-relative z-1 text-center pt-5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h1 className="fw-light text-white mb-3" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', letterSpacing: '-0.04em' }}>
                        Welcome to <span className="fw-light" style={{ color: 'var(--primary)' }}>Auto</span>Market
                    </h1>

                    <p className="text-white text-uppercase small fw-bold mb-5 mx-auto" style={{ letterSpacing: '0.2em', opacity: 0.8, maxWidth: '600px' }}>
                        The smartest and most flexible automotive marketplace you've ever seen
                    </p>

                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-4 mt-4">
                        <Link to="/sell-car" className="btn btn-premium rounded-pill px-5 py-3 fw-bold shadow-lg text-uppercase" style={{ minWidth: '240px', letterSpacing: '0.1em' }}>
                            List Your Car
                        </Link>
                        <Link to="/inventory" className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold text-uppercase glass" style={{ minWidth: '240px', letterSpacing: '0.1em' }}>
                            Start The Journey
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
