import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import CarCard from '../components/CarCard';
import { carsData } from '../data/cars';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-dark text-white min-vh-100 d-flex flex-column">
            <Navbar />
            <main className="flex-grow-1">
                <Hero />
                <Features />

                {/* Featured Inventory Section */}
                <section className="py-5 bg-black">
                    <div className="container py-5 mt-5">
                        <div className="text-center mb-5">
                            <h2 className="display-4 fw-bold mb-3 tracking-tight">Featured Arrivals</h2>
                            <p className="text-muted lead">Discover a handpicked selection of our latest premium vehicles.</p>
                        </div>
                        <div className="row g-4 mb-5">
                            {carsData.slice(4, 7).map(car => (
                                <div className="col-md-4" key={car.id}>
                                    <CarCard car={car} />
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-5">
                            <Link to="/inventory" className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold text-uppercase tracking-wider hover-primary shadow-lg border-opacity-50">
                                See Full Inventory
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Paint Shop Promo */}
                <section className="py-5" style={{ background: 'linear-gradient(135deg, #111, #000)' }}>
                    <div className="container py-5 text-center border border-primary border-opacity-25 rounded-5 p-5 glass position-relative overflow-hidden hover-lift">
                        <div className="position-absolute w-100 h-100 top-0 start-0 opacity-10" style={{ background: 'url(https://images.unsplash.com/photo-1542661858-a5bbc50fcedc?q=80&w=1200&auto=format&fit=crop) center/cover' }}></div>
                        <div className="position-relative z-1">
                            <h2 className="display-4 fw-bolder mb-3 text-white">Custom Nganya & Heavy Machinery Paint</h2>
                            <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '700px' }}>Looking to turn your commercial fleet or bus into a rolling masterpiece? Explore our dedicated custom paint shop.</p>
                            <Link to="/painting" className="btn btn-primary rounded-pill px-5 py-3 fw-bold text-uppercase tracking-wider hover-lift shadow-lg">
                                Visit the Paint Shop
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 🇰🇪 Popular in Kenya Section */}
                <section className="py-5" style={{ background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)' }}>
                    <div className="container py-5">
                        <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3">
                            <div>
                                <p className="text-primary small fw-bold text-uppercase mb-1" style={{ letterSpacing: '4px' }}>🇰🇪 Top Picks</p>
                                <h2 className="display-4 fw-bolder mb-0 text-white">Popular in Kenya</h2>
                                <p className="text-muted mt-2">The most trusted and sought-after vehicles on Kenyan roads.</p>
                            </div>
                            <Link to="/inventory" className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold">View All 38 →</Link>
                        </div>
                        <div className="d-flex gap-2 flex-wrap mb-5">
                            {['Family Wagons', 'Workhorses', 'Executive Sedans', 'Luxury SUVs'].map(cat => (
                                <span key={cat} className="badge rounded-pill border border-secondary border-opacity-25 text-secondary px-3 py-2 small fw-bold" style={{ background: 'rgba(255,255,255,0.04)' }}>
                                    {cat}
                                </span>
                            ))}
                        </div>
                        <div className="row g-4">
                            {carsData.filter(c => [24, 25, 26, 28, 29, 37].includes(c.id)).map(car => (
                                <div className="col-md-6 col-xl-4" key={car.id}>
                                    <CarCard car={car} />
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-5">
                            <Link to="/inventory" className="btn btn-primary rounded-pill px-5 py-3 fw-bold text-uppercase tracking-wider shadow-lg">
                                Browse Full Marketplace
                            </Link>
                        </div>
                    </div>
                </section>

                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
