import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        Alpha <span>Sites</span>
                    </div>
                    <p>Premium Web Development & Design Solutions.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Contact</h4>
                    <p>📞 <a href="tel:0746860965">0746860965</a></p>
                    <p>💬 <a href="https://wa.me/254746860965" target="_blank" rel="noopener noreferrer">WhatsApp Me</a></p>
                    <p>📧 <a href="mailto:mutethiaamstrong@gmail.com">Email Us</a></p>
                </div>

                <div className="footer-section">
                    <h4>Links</h4>
                    <ul className="footer-links">
                        <li><a href="#projects">Portfolio</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="copyright">&copy; {new Date().getFullYear()} Alpha Sites. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
