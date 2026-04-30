import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { paintJobsData } from '../data/paintJobs';
import { motion } from 'framer-motion';

const PaintDetails = () => {
    const { id } = useParams();
    const job = paintJobsData.find(j => j.id === parseInt(id));

    if (!job) {
        return (
            <div className="bg-dark text-white min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <h2>Project Not Found</h2>
                <Link to="/painting" className="btn btn-outline-light mt-4">Return to Paint Shop</Link>
            </div>
        );
    }

    return (
        <div className="bg-dark text-white min-vh-100 d-flex flex-column" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar />

            {/* Finished Masterpiece Hero */}
            <section className="position-relative" style={{ height: '70vh' }}>
                <img
                    src={job.image}
                    alt={job.title}
                    className="w-100 h-100 object-fit-cover opacity-75"
                />
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'linear-gradient(to top, #111 5%, transparent, rgba(0,0,0,0.5))' }}></div>

                <div className="position-absolute bottom-0 start-0 w-100 p-5">
                    <div className="container">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="badge bg-primary text-dark fs-6 mb-3 px-3 py-2 rounded-pill shadow-lg"
                        >
                            {job.category}
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="display-2 fw-bolder mb-2 text-white"
                            style={{ textShadow: '2px 2px 15px rgba(0,0,0,0.8)' }}
                        >
                            {job.title}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="d-flex gap-4 text-white"
                        >
                            <span className="fw-bold"><i className="bi bi-geo-alt-fill text-primary me-2"></i> {job.location}</span>
                            <span className="fw-bold"><i className="bi bi-clock-fill text-primary me-2"></i> {job.duration}</span>
                            <span className="fw-bold"><i className="bi bi-palette-fill text-primary me-2"></i> {job.style}</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-5 bg-black">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-primary fw-bold text-uppercase tracking-wider small mb-3">The Masterpiece</h3>
                                <h2 className="display-5 fw-bolder mb-4">Finished Product</h2>
                                <p className="lead text-muted" style={{ lineHeight: '1.8' }}>
                                    {job.description}
                                </p>
                            </motion.div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="rounded-4 overflow-hidden border border-secondary border-opacity-25 p-2 bg-dark shadow-lg"
                            >
                                <img src={job.image} className="w-100 rounded-3 object-fit-cover" style={{ height: '400px' }} alt="Finished" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - Garage/Streets */}
            <section className="py-5 bg-dark">
                <div className="container py-5">
                    <div className="row g-5 align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-warning fw-bold text-uppercase tracking-wider small mb-3">Behind the Scenes</h3>
                                <h2 className="display-5 fw-bolder mb-4">The Process</h2>
                                <p className="lead text-muted" style={{ lineHeight: '1.8' }}>
                                    {job.processDesc}
                                </p>
                                <div className="mt-4 p-4 border border-warning border-opacity-25 rounded-4" style={{ backgroundColor: 'rgba(255,193,7,0.05)' }}>
                                    <h5 className="fw-bold"><i className="bi bi-hammer text-warning me-2"></i> Fabrication Location</h5>
                                    <p className="text-muted mb-0">Custom masking, intense airbrushing, and hand-done street-art techniques applied directly at <strong>{job.location}</strong>.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="rounded-4 overflow-hidden position-relative shadow-lg border border-warning border-opacity-25"
                            >
                                <img src={job.processImage} className="w-100 object-fit-cover" style={{ height: '500px', filter: 'contrast(1.2)' }} alt="Process in Garage" />
                                <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                                    <span className="badge bg-warning text-dark fw-bold mb-2"><i className="bi bi-camera-fill me-1"></i> Documentation</span>
                                    <h5 className="mb-0 text-white fw-bold">Live Paint Session in Progress</h5>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-5 border-top border-secondary border-opacity-25 text-center bg-black">
                <div className="container py-5">
                    <h2 className="fw-bolder mb-3">Want your fleet to look like this?</h2>
                    <p className="text-muted lead mb-5">We transform heavy lorries, buses, and Nairobi Nganyas.</p>
                    <Link to="/painting" className="btn btn-outline-light rounded-pill px-5 py-3 text-uppercase tracking-wider fw-bold me-3">Back to Gallery</Link>
                    <button className="btn btn-primary rounded-pill px-5 py-3 text-uppercase tracking-wider fw-bold shadow-lg">Get a Quote</button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PaintDetails;
