import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section id="about" className="about container">
            <div className="about-grid">
                <div className="about-image glass">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h4>100%</h4>
                            <p>Dedication</p>
                        </div>
                        <div className="stat-card">
                            <h4>50+</h4>
                            <p>Projects Done</p>
                        </div>
                        <div className="stat-card">
                            <h4>24/7</h4>
                            <p>Support</p>
                        </div>
                        <div className="stat-card">
                            <h4>5⭐</h4>
                            <p>Rating</p>
                        </div>
                    </div>
                </div>
                <div className="about-text">
                    <div className="badge">About Us</div>
                    <h2>Our <span className="highlight">Dedication</span> to Excellence</h2>
                    <p>
                        At Alpha Sites, we are driven by a passion for perfection. Our team is dedicated to
                        providing top-tier web development services that not only meet but exceed our clients'
                        expectations.
                    </p>
                    <p>
                        We believe that every pixel matters. From the initial concept to the final deployment,
                        we ensure that every project we undertake is a masterpiece of design and functionality.
                    </p>
                    <div className="about-actions">
                        <button className="btn-primary">Learn More About Our Work</button>
                        <a href="tel:0746860965" className="about-phone">
                            <span className="phone-icon">📞</span> 0746860965
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
