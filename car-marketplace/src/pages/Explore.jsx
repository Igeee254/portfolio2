import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { carsData } from '../data/cars';

const categories = [
    { label: "All", icon: "bi-grid-fill" },
    { label: "Supercars", icon: "bi-lightning-fill" },
    { label: "Electric", icon: "bi-ev-station-fill" },
    { label: "SUVs & Off-Road", icon: "bi-truck" },
    { label: "Heavy Vehicles", icon: "bi-bus-front-fill" },
    { label: "Paint & Custom", icon: "bi-brush-fill" },
];

const featured = [
    {
        title: "The Future Is Electric",
        desc: "How the rise of EVs is reshaping roads across Kenya and the world.",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop",
        tag: "Trending",
        link: "/news"
    },
    {
        title: "Inside a Nganya Workshop",
        desc: "An immersive look into the artists and craftsmen who paint Nairobi's streets.",
        image: "https://images.unsplash.com/photo-1659468551193-aa438e032346?q=80&w=1200&auto=format&fit=crop",
        tag: "Community",
        link: "/painting"
    },
    {
        title: "Range Rover vs. Business Class",
        desc: "Can a luxury SUV truly rival the comfort of flight? We found out.",
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1200&auto=format&fit=crop",
        tag: "Feature",
        link: "/news"
    },
];

const testimonials = [
    {
        name: "James Mwangi",
        role: "Heavy Fleet Manager, Nairobi",
        avatar: "JM",
        quote: "Found my Scania R500 through this platform. Best investment I've made for my business."
    },
    {
        name: "Aisha Odhiambo",
        role: "Matatu Operator",
        avatar: "AO",
        quote: "The Paint Shop feature is incredible. Got a quote for our entire fleet in minutes."
    },
    {
        name: "Daniel Kariuki",
        role: "Car Enthusiast, Mombasa",
        avatar: "DK",
        quote: "Clicked on a Ferrari F8 just to explore. Ended up booking a test drive. This site is dangerous!"
    },
];

const trendingTopics = [
    { label: "Electric SUVs", count: "2.4K views" },
    { label: "Kenyan Nganyas", count: "1.8K views" },
    { label: "Ferrari Latest", count: "3.1K views" },
    { label: "Engine Upgrades", count: "1.2K views" },
    { label: "Flight Comfort", count: "980 views" },
];

const Explore = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className="bg-dark text-white min-vh-100 d-flex flex-column" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar />

            {/* Hero */}
            <section className="py-5 position-relative overflow-hidden" style={{ paddingTop: '120px', background: 'radial-gradient(ellipse at 30% top, #0d1b2a, #000)' }}>
                <div className="container py-5 mt-3">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="badge bg-primary px-3 py-2 rounded-pill mb-3 small fw-bold text-uppercase"
                                style={{ letterSpacing: '3px' }}
                            >
                                Discovery Hub
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="display-2 fw-bolder lh-1 mb-4"
                            >
                                Explore the <br /><span className="text-primary">World of Motion</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="lead text-muted mb-4"
                                style={{ maxWidth: '500px' }}
                            >
                                Discover featured content, browse by category, read community stories, and find your next vehicle obsession.
                            </motion.p>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="d-flex gap-3 flex-wrap">
                                <Link to="/inventory" className="btn btn-primary rounded-pill px-4 py-2 fw-bold">Browse Inventory</Link>
                                <Link to="/news" className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold">Read News</Link>
                            </motion.div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="d-flex flex-column gap-3"
                            >
                                {trendingTopics.map((t, i) => (
                                    <div key={i} className="d-flex align-items-center justify-content-between p-3 rounded-3 glass border border-secondary border-opacity-25">
                                        <span className="fw-semibold">{t.label}</span>
                                        <span className="text-primary small fw-bold">{t.count}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-4 border-bottom border-top border-secondary border-opacity-25" style={{ background: '#0a0a0a' }}>
                <div className="container">
                    <div className="d-flex gap-3 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat.label}
                                onClick={() => setActiveCategory(cat.label)}
                                className={`btn rounded-pill px-4 py-2 small fw-bold border ${activeCategory === cat.label ? 'btn-primary border-primary' : 'btn-dark border-secondary border-opacity-25 text-muted'}`}
                            >
                                <i className={`bi ${cat.icon} me-2`}></i>{cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Content */}
            <section className="py-5 bg-black">
                <div className="container py-4">
                    <h2 className="fw-bolder mb-2">Featured Content</h2>
                    <p className="text-muted mb-5">The very best of what's happening on AUTOMARKET right now.</p>
                    <div className="row g-4">
                        {featured.map((item, i) => (
                            <motion.div
                                className={i === 0 ? "col-lg-6" : "col-lg-3"}
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link to={item.link} className="text-decoration-none d-block h-100">
                                    <motion.div whileHover={{ y: -4 }} className="position-relative rounded-4 overflow-hidden h-100" style={{ minHeight: i === 0 ? '400px' : '300px' }}>
                                        <img src={item.image} alt={item.title} className="w-100 h-100 object-fit-cover" style={{ position: 'absolute', top: 0, left: 0 }} />
                                        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 20%, transparent)' }}></div>
                                        <div className="position-absolute bottom-0 start-0 p-4 w-100">
                                            <span className="badge bg-primary text-dark fw-bold mb-2">{item.tag}</span>
                                            <h4 className="fw-bolder text-white mb-1">{item.title}</h4>
                                            <p className="text-secondary small mb-0">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recommended Vehicles */}
            <section className="py-5" style={{ background: '#0a0a0a' }}>
                <div className="container py-4">
                    <div className="d-flex justify-content-between align-items-end mb-5">
                        <div>
                            <h2 className="fw-bolder mb-1">You Might Also Like…</h2>
                            <p className="text-muted mb-0">Handpicked recommendations from our latest arrivals.</p>
                        </div>
                        <Link to="/inventory" className="btn btn-outline-light btn-sm rounded-pill px-4 d-none d-md-block">See All →</Link>
                    </div>
                    <div className="row g-4">
                        {carsData.slice(0, 3).map((car, i) => (
                            <motion.div
                                className="col-md-4"
                                key={car.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link to={`/car/${car.id}`} className="text-decoration-none">
                                    <motion.div whileHover={{ y: -5 }} className="card bg-dark border border-secondary border-opacity-25 rounded-4 overflow-hidden h-100 text-white">
                                        <div style={{ height: '200px', overflow: 'hidden' }}>
                                            <img src={car.image} alt={car.model} className="w-100 h-100 object-fit-cover" style={{ transition: 'transform 0.3s' }} />
                                        </div>
                                        <div className="card-body p-4">
                                            <p className="text-muted small fw-bold mb-1 text-uppercase">{car.year} · {car.make}</p>
                                            <h5 className="fw-bold mb-2">{car.model}</h5>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="text-primary fw-bolder">Sh {car.price.toLocaleString()}</span>
                                                <span className="text-muted small">View Details →</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community & User Stories */}
            <section className="py-5 bg-black">
                <div className="container py-4">
                    <h2 className="fw-bolder mb-2">Community Stories</h2>
                    <p className="text-muted mb-5">Real voices from our buyers, sellers, and enthusiasts across Kenya.</p>
                    <div className="row g-4">
                        {testimonials.map((t, i) => (
                            <motion.div
                                className="col-md-4"
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-4 rounded-4 h-100 border border-secondary border-opacity-25 glass">
                                    <p className="text-muted fst-italic mb-4" style={{ lineHeight: '1.7' }}>"{t.quote}"</p>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center fw-bolder" style={{ width: '48px', height: '48px', fontSize: '0.85rem' }}>{t.avatar}</div>
                                        <div>
                                            <p className="fw-bold mb-0 text-white">{t.name}</p>
                                            <p className="text-muted small mb-0">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending + CTA Row */}
            <section className="py-5 border-top border-secondary border-opacity-25" style={{ background: '#0a0a0a' }}>
                <div className="container py-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-8 mx-auto">
                            <h2 className="fw-bolder mb-2 text-center">Trending Now</h2>
                            <p className="text-muted mb-5 text-center">What the AUTOMARKET community is buzzing about this week.</p>
                            <div className="d-flex flex-column gap-3">
                                {trendingTopics.map((t, i) => (
                                    <div key={i} className="d-flex align-items-center justify-content-between border-bottom border-secondary border-opacity-25 pb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <span className="text-primary fw-bolder" style={{ fontSize: '1.3rem' }}>0{i + 1}</span>
                                            <span className="fw-semibold">{t.label}</span>
                                        </div>
                                        <span className="badge bg-dark border border-secondary border-opacity-50 text-muted">{t.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Explore;
