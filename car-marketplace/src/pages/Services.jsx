import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Wind, ShieldCheck, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import suvHero from '../assets/suv_rugged_hero_1775154449392.png';
import interior from '../assets/car_interior_premium_1775154493400.png';

const Services = () => {
    return (
        <div className="bg-dark text-white min-vh-100 d-flex flex-column">
            <Navbar />
            <main className="flex-grow-1">
                {/* SUV Hero Section */}
                <section className="min-vh-100 position-relative d-flex align-items-center" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${suvHero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <p className="text-primary fw-bold text-uppercase letter-spacing-2 mb-3">Extreme Adventure</p>
                                    <h1 className="display-1 fw-bold mb-4">COMMAND<br />EVERY <span className="text-primary">TERRAIN</span></h1>
                                    <p className="lead mb-5 col-lg-10 text-white-50">
                                        Engineered for the bold. The Model X Rugged Edition combines luxury
                                        with raw power to take you where others fear to tread.
                                    </p>
                                    <button className="btn btn-premium rounded-pill px-5 py-3">Explore Specs</button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Highlights */}
                <section className="section-padding bg-black">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <motion.img
                                    src={interior}
                                    alt="Car Interior"
                                    className="img-fluid rounded-4 shadow-lg"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="display-5 fw-bold mb-5">Crafted for <span className="text-primary">Comfort</span></h2>
                                <div className="d-grid gap-4">
                                    <div className="d-flex gap-4">
                                        <div className="bg-primary p-3 rounded-circle h-fit-content"><Mountain size={32} /></div>
                                        <div>
                                            <h5>Off-Road Optimization</h5>
                                            <p className="text-muted">Adaptive suspension system that adjusts 1,000 times per second.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-4">
                                        <div className="bg-primary p-3 rounded-circle h-fit-content"><Wind size={32} /></div>
                                        <div>
                                            <h5>HEPA Filtration</h5>
                                            <p className="text-muted">Bioweapon Defense Mode removes 99.97% of airborne particles.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-4">
                                        <div className="bg-primary p-3 rounded-circle h-fit-content"><ShieldCheck size={32} /></div>
                                        <div>
                                            <h5>Iron Guard Chassis</h5>
                                            <p className="text-muted">High-strength boron steel frame for maximum impact resistance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Services;
