import React from 'react';
import './Hero.css';
import { HeroImage } from '../assets/images';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <div className="badge">Welcome to Alpha Sites</div>
                    <h1>Crafting <span className="highlight">Modern</span> Web Experiences</h1>
                    <p>We build high-end, responsive websites tailored to your brand's unique needs.</p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="#contacts" className="btn-secondary">Contact Us</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="image-wrapper glass">
                        <img src={HeroImage} alt="Tech Visualization" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
