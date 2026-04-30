import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Route-change scroll utility (keeps original behaviour)
const RouteScrollReset = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [edgeHover, setEdgeHover] = useState(false);

    // Show button after scrolling down 300px
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Detect mouse near right/bottom edges (within 80px)
    useEffect(() => {
        const onMouseMove = (e) => {
            const nearRight = e.clientX > window.innerWidth - 80;
            const nearBottom = e.clientY > window.innerHeight - 80;
            setEdgeHover(nearRight || nearBottom);
        };
        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // Determine button colour state
    const isActive = hovered || edgeHover;

    return (
        <>
            <RouteScrollReset />

            <AnimatePresence>
                {visible && (
                    <motion.button
                        key="scroll-btn"
                        initial={{ opacity: 0, scale: 0.6, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.6, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                        onClick={scrollUp}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        title="Scroll to top"
                        style={{
                            position: 'fixed',
                            bottom: '28px',
                            right: '28px',
                            zIndex: 9999,
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            outline: 'none',
                            boxShadow: isActive
                                ? '0 0 24px rgba(13,110,253,0.7), 0 4px 20px rgba(0,0,0,0.5)'
                                : '0 4px 16px rgba(0,0,0,0.4)',
                            background: isActive
                                ? 'linear-gradient(135deg, #0d6efd, #6610f2)'
                                : 'rgba(20,20,20,0.85)',
                            backdropFilter: 'blur(12px)',
                            transition: 'background 0.3s ease, box-shadow 0.3s ease',
                        }}
                    >
                        <motion.i
                            className="bi bi-chevron-up text-white"
                            animate={{
                                y: isActive ? -2 : 0,
                                scale: isActive ? 1.2 : 1,
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            style={{ fontSize: '1.1rem', pointerEvents: 'none' }}
                        />

                        {/* Pulsing ring when edge-hovered */}
                        {edgeHover && !hovered && (
                            <motion.span
                                key="pulse"
                                initial={{ opacity: 0.6, scale: 1 }}
                                animate={{ opacity: 0, scale: 2 }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                style={{
                                    position: 'absolute',
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    border: '2px solid #0d6efd',
                                    pointerEvents: 'none',
                                }}
                            />
                        )}
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollToTop;
