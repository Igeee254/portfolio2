import React, { useState, useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';
import './Navbar.css';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="navbar glass">
            <div className="container nav-content">
                <div className="logo">
                    Alpha <span className="highlight">Sites</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About Us</a></li>
                </ul>
                <div className="nav-actions">
                    <WhatsAppButton isNavbar={true} />
                    <button onClick={toggleTheme} className="theme-toggle" title="Toggle Theme">
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
