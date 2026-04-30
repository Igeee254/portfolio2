import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { paintJobsData } from '../data/paintJobs';

const Painting = () => {
    return (
        <div className="bg-dark text-white min-vh-100 d-flex flex-column" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar />

            {/* Paint Shop Hero */}
            <section className="position-relative d-flex align-items-center justify-content-center border-bottom border-primary border-opacity-50" style={{ height: '70vh', background: 'radial-gradient(circle at center, #111 0%, #000 100%)' }}>
                <div className="position-absolute w-100 h-100 top-0 start-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542661858-a5bbc50fcedc?q=80&w=1200&auto=format&fit=crop"
                        alt="Graffiti Background"
                        className="w-100 h-100 object-fit-cover opacity-25"
                        style={{ filter: 'grayscale(100%) contrast(1.5)' }}
                    />
                    <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))' }}></div>
                </div>

                <div className="container position-relative z-1 text-center mt-5 pt-5">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary small fw-bold text-uppercase tracking-wider mb-2"
                        style={{ letterSpacing: '4px' }}
                    >
                        The Art of Machinery
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="display-2 fw-bolder tracking-tighter mb-4"
                        style={{ textShadow: '0 0 40px rgba(var(--bs-primary-rgb), 0.5)' }}
                    >
                        Custom Paint <span className="text-outline">& Nganyas</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="lead fw-light text-muted mx-auto"
                        style={{ maxWidth: '800px', lineHeight: '1.8' }}
                    >
                        From standard commercial lorries to breathtaking Kenyan Nganya masterpieces.
                        We don't just paint heavy machinery—we give it a soul, an identity, and a roaring street presence.
                    </motion.p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-5 bg-black flex-grow-1">
                <div className="container py-5">
                    <div className="row mb-5 align-items-end">
                        <div className="col-lg-6">
                            <h2 className="display-5 fw-bold mb-0">Our Masterpieces</h2>
                            <p className="text-secondary mt-2 mb-0">Every brushstroke matters. No two designs are ever repeated.</p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {paintJobsData.map((item, index) => (
                            <motion.div
                                className="col-md-6 col-lg-4"
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link to={`/painting/${item.id}`} className="card bg-transparent border-0 h-100 overflow-hidden group text-decoration-none">
                                    <div className="position-relative overflow-hidden rounded-4" style={{ height: '350px' }}>
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                            src={item.image}
                                            alt={item.title}
                                            className="w-100 h-100 object-fit-cover"
                                            style={{ filter: 'contrast(1.1) saturate(1.2)', cursor: 'pointer' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                                            <span className="badge bg-primary text-dark fw-bold mb-2">{item.category}</span>
                                            <h4 className="fw-bold m-0 text-white shadow-sm">{item.title}</h4>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}

                        {/* Call to Action Box for Custom Orders */}
                        <motion.div
                            className="col-md-6 col-lg-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="card bg-dark border border-primary border-opacity-50 h-100 rounded-4 p-5 d-flex flex-column align-items-center justify-content-center text-center hover-lift" style={{ borderStyle: 'dashed !important' }}>
                                <i className="bi bi-brush display-3 text-primary mb-3"></i>
                                <h3 className="fw-bold text-white mb-2">Book Your Fleet</h3>
                                <p className="text-secondary small mb-4">Want your Lorry or Bus transformed into an absolute street legend?</p>
                                <button className="btn btn-primary rounded-pill px-4 fw-bold">Get a Quote</button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                .text-outline {
                    color: transparent;
                    -webkit-text-stroke: 1px var(--bs-primary);
                }
            `}</style>

            <Footer />
        </div>
    );
};

export default Painting;
