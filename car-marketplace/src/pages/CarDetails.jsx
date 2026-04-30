import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { carsData } from '../data/cars';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CarDetails = () => {
    const { id } = useParams();
    const car = carsData.find(c => c.id === parseInt(id));

    if (!car) {
        return (
            <div className="min-vh-100 bg-dark text-white d-flex flex-column align-items-center justify-content-center">
                <h2>Vehicle Not Found</h2>
                <Link to="/inventory" className="btn btn-outline-light mt-4">Return to Inventory</Link>
            </div>
        );
    }

    const { details } = car;

    return (
        <div className="bg-black text-white min-vh-100 overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar />

            {/* SECTION 1: Hero Showcase */}
            <section className="position-relative min-vh-100 d-flex flex-column justify-content-center pt-5">
                <div className="container position-relative z-1 pt-5 mt-5">
                    <div className="row justify-content-between align-items-center mb-4">
                        <div className="col-lg-7">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="display-2 fw-bold tracking-tighter"
                                style={{ letterSpacing: '-0.04em' }}
                            >
                                {details.tagline}
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="display-4 fw-light text-muted tracking-tight"
                            >
                                {details.sub_tagline}
                            </motion.h2>
                        </div>
                        <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                <p className="small text-muted">{details.description}</p>
                                <button className="btn btn-outline-light rounded-pill px-5 py-2 mt-3 text-uppercase tracking-wider small fw-bold hover-primary">
                                    Try It Now
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="position-relative w-100 mt-5 pt-5 flex-grow-1 d-flex align-items-end">
                    <motion.img
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={car.image}
                        className="w-100 object-fit-cover"
                        style={{ height: '60vh', filter: 'brightness(0.7) contrast(1.2)', maskImage: 'linear-gradient(to top, black 50%, transparent 100%)' }}
                        alt={car.model}
                    />
                    {/* Floating Model Text behind car */}
                    <div className="position-absolute w-100 text-center top-0 start-0 z-n1" style={{ opacity: 0.05 }}>
                        <h1 className="fw-bolder m-0" style={{ fontSize: '15vw', whiteSpace: 'nowrap' }}>{car.make.toUpperCase()}</h1>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Technical Specs */}
            <section className="py-5 border-top border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111 100%)' }}>
                <div className="container py-5">
                    <div className="row text-center text-lg-start g-4">
                        <div className="col-6 col-lg-3">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                                <p className="text-muted small text-uppercase tracking-wider mb-2">Battery / Engine</p>
                                <h4 className="fw-light">{details.specs.battery}</h4>
                            </motion.div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                                <p className="text-muted small text-uppercase tracking-wider mb-2">Powertrain</p>
                                <h4 className="fw-light">{details.specs.motor}</h4>
                            </motion.div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                                <p className="text-muted small text-uppercase tracking-wider mb-2">Top Speed</p>
                                <h4 className="fw-light">{details.specs.topSpeed}</h4>
                            </motion.div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
                                <p className="text-muted small text-uppercase tracking-wider mb-2">Weight</p>
                                <h4 className="fw-light">{details.specs.weight}</h4>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Interior Command Hub */}
            <section className="py-5 position-relative overflow-hidden" style={{ minHeight: '80vh' }}>
                <div className="position-absolute w-100 h-100 top-0 start-0">
                    <img src={details.interiorImg} alt="Interior" className="w-100 h-100 object-fit-cover opacity-50" />
                    <div className="position-absolute w-100 h-100 top-0 start-0 bg-black opacity-50"></div>
                </div>

                <div className="container position-relative z-1 h-100 d-flex flex-column justify-content-center py-5">
                    <div className="row mt-5 pt-5">
                        <div className="col-lg-6 mb-5">
                            <p className="lead fw-light opacity-75 pe-lg-5 mb-5" style={{ lineHeight: '1.8' }}>
                                Effortlessly manage your car's operations with a glance, ensuring a smooth and intuitive driving experience. Comfort meets absolute technological superiority.
                            </p>
                            <button className="btn btn-outline-light px-5 py-2 rounded-pill small fw-bold tracking-wider text-uppercase border-opacity-50">
                                Learn More
                            </button>
                        </div>
                        <div className="col-lg-6 text-end d-flex flex-column justify-content-end pb-5">
                            <h2 className="display-4 fw-light text-primary" style={{ textShadow: '0 0 20px rgba(var(--bs-primary-rgb), 0.5)' }}>Seamless</h2>
                            <h1 className="display-2 fw-bold tracking-tighter" style={{ color: 'var(--primary)', letterSpacing: '-0.04em' }}>Command Hub</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Milestones & Sustainability */}
            <section className="py-5 border-top border-secondary border-opacity-25 bg-black">
                <div className="container py-5">
                    <div className="row mb-5 align-items-center">
                        <div className="col-lg-7">
                            <h1 className="fw-bold m-0" style={{ fontSize: '10vw', opacity: 0.05, whiteSpace: 'nowrap', marginLeft: '-5%' }}>EVOLUTION</h1>
                        </div>
                        <div className="col-lg-5">
                            <p className="text-muted fw-light" style={{ lineHeight: '1.8' }}>
                                {details.sustainability}
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 text-center mt-4">
                        <div className="col-md-4">
                            <h1 className="display-1 fw-bold text-primary mb-0">{details.stats.types}</h1>
                            <p className="text-uppercase tracking-wider small fw-bold text-muted">Types of car</p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="display-1 fw-bold text-primary mb-0">{details.stats.awards}</h1>
                            <p className="text-uppercase tracking-wider small fw-bold text-muted">Industry Awards</p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="display-1 fw-bold text-primary mb-0">{details.stats.partners}</h1>
                            <p className="text-uppercase tracking-wider small fw-bold text-muted">Partnerships</p>
                        </div>
                    </div>

                    {/* Bottom Call to Action */}
                    <div className="row mt-5 pt-5 border-top border-secondary border-opacity-10">
                        <div className="col-12 text-center py-4">
                            <h3 className="fw-light mb-4 text-white">Ready to experience the {car.make} {car.model}?</h3>
                            <button className="btn btn-outline-light rounded-pill px-5 py-3 text-uppercase fw-bold hover-primary" style={{ letterSpacing: '2px', transition: 'all 0.3s' }}>
                                Try It Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CarDetails;
