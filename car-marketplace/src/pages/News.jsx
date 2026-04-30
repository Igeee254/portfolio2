import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const articles = [
    {
        id: 1,
        category: "Latest Releases",
        tag: "🚀 Just Launched",
        tagColor: "bg-primary",
        date: "April 2, 2026",
        readTime: "5 min read",
        title: "2026 Fleet Unveiled: From Supercars to Kenyan Nganyas",
        subtitle: "The world's most anticipated vehicle launches of the year have arrived — and they aren't just sports cars.",
        body: [
            "This year marks a historic convergence in the automotive world. While Ferrari and Lamborghini are making headlines with their latest V8 and V10 powerplants, the most culturally significant launches have come from the streets of East Africa.",
            "The all-new Scania R 500 Ultra — designed specifically for East African routes — debuted at the Nairobi Motor Show with a reinforced chassis, adaptive hill-descent control, and a fully revamped driver cabin with panoramic glass.",
            "Alongside it, a new generation of Kenyan Nganya (custom matatu buses) has emerged from the workshops of Eastleigh and Kariobangi. Featuring 4K in-cabin displays, audiophile sound systems, and bespoke hand-painted murals, these are no longer just transit — they are rolling art galleries."
        ],
        heroImage: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=1400&auto=format&fit=crop",
        sidePic: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
        quote: "\"It is the buses and lorries of Nairobi that are truly changing automotive culture — one mural at a time.\" — East Africa Auto Review"
    },
    {
        id: 2,
        category: "Engine Upgrades",
        tag: "⚙️ Under the Hood",
        tagColor: "bg-warning text-dark",
        date: "March 28, 2026",
        readTime: "7 min read",
        title: "The Engine Revolution: Biturbo V8s, Quad-Motor EVs & Hybrid Lorries",
        subtitle: "A deep dive into the most significant engine technologies rewiring the automotive landscape — from hyper-performance supercars to commercial fleet machinery.",
        body: [
            "The year 2026 has witnessed the most dramatic powerplant evolution since the invention of the internal combustion engine itself. Mercedes-AMG's new 4.0L Biturbo V8 — now producing over 800 horsepower in its 'Black Series' configuration — has reset the benchmark for raw performance.",
            "But the real story lies in heavy machinery. The new Volvo FH Aero electric lorry delivers a staggering 490 kW of continuous power with an integrated regenerative braking system that captures 35% of energy normally lost on long highway descents — a technology now being adapted for Kenyan-spec lorries on the Mombasa-Nairobi corridor.",
            "On the supercar front, Lamborghini's V10 Huracan EVO has received a plug-in hybrid conversion rated at 850hp, while maintaining its iconic naturally-aspirated soundtrack. Ferrari's F8 Tributo now ships with telemetry-assisted torque vectoring that adapts to road conditions in real-time."
        ],
        heroImage: "https://images.unsplash.com/photo-1565708649986-d4f6b0c4b6bd?q=80&w=1400&auto=format&fit=crop",
        sidePic: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop",
        quote: "\"The hybrid lorry isn't a compromise — it's the future of long-haul freight, globally.\" — Transport Engineering Weekly"
    },
    {
        id: 3,
        category: "Luxury & Comfort",
        tag: "✈️ Flight-Class Comfort",
        tagColor: "bg-success",
        date: "March 20, 2026",
        readTime: "6 min read",
        title: "Cabin Wars: How Luxury Vehicles Are Beating First-Class Flights",
        subtitle: "From Range Rover SV to custom Nganya coaches — the interior comfort revolution is making the journey as memorable as the destination.",
        body: [
            "For years, business class on a long-haul flight was considered the pinnacle of travel comfort. In 2026, that title is being seriously challenged — by what you drive.",
            "The Range Rover SV's 'Signature Suite' rear seats recline to a fully flat 180-degree position. They feature active massage, heated/cooled cushioning, and a retractable privacy screen — all orchestrated by a 13.7-inch touchscreen on the back of the headrest. Rolls-Royce's Spectre EV takes it further with hand-stitched cashmere headliners and a 'Starlight Roof' — 1,340 individually lit fiber-optic strands mimicking clear night constellations.",
            "Perhaps most surprisingly, Kenya's premium long-haul coaches are now rivaling this standard. New Nganya intercity coaches on the Nairobi-Mombasa route now offer reclining leather seats with USB-C hubs, surround-sound entertainment systems, climate-zone controls, and in some cases — onboard espresso stations. The journey has become the destination."
        ],
        heroImage: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1400&auto=format&fit=crop",
        sidePic: "https://images.unsplash.com/photo-1548021682-1720ed403a5b?q=80&w=800&auto=format&fit=crop",
        quote: "\"For the price of a business-class ticket, you could instead own comfort that follows you everywhere.\" — Luxe Mobility Journal"
    }
];

const Explore = () => {
    return (
        <div className="bg-dark text-white min-vh-100 d-flex flex-column" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar />

            {/* News Hero */}
            <section className="py-5 border-bottom border-secondary border-opacity-25" style={{ paddingTop: '100px', background: 'radial-gradient(ellipse at top, #1a1a2e, #000)' }}>
                <div className="container py-5 mt-4">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary small fw-bold text-uppercase mb-2"
                        style={{ letterSpacing: '4px' }}
                    >
                        Editorial
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="display-2 fw-bolder mb-4"
                    >
                        Latest From the <span className="text-primary">Road</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="lead text-muted"
                        style={{ maxWidth: '700px' }}
                    >
                        Breaking automotive news, engine deep-dives, and the most comprehensive look at what's driving the world in 2026.
                    </motion.p>
                </div>
            </section>

            {/* Articles */}
            <section className="py-5 flex-grow-1 bg-black">
                <div className="container py-5">
                    {articles.map((article, idx) => (
                        <motion.article
                            key={article.id}
                            className={`mb-5 pb-5 ${idx < articles.length - 1 ? 'border-bottom border-secondary border-opacity-25' : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Article Header */}
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <span className={`badge ${article.tagColor} fw-bold px-3 py-2 rounded-pill`}>{article.tag}</span>
                                <span className="text-muted small">{article.date}</span>
                                <span className="text-muted small">· {article.readTime}</span>
                            </div>

                            {/* Hero Image */}
                            <div className="rounded-4 overflow-hidden mb-4 position-relative" style={{ height: '450px' }}>
                                <img
                                    src={article.heroImage}
                                    alt={article.title}
                                    className="w-100 h-100 object-fit-cover"
                                    style={{ filter: 'brightness(0.85) contrast(1.1)' }}
                                />
                                <div
                                    className="position-absolute bottom-0 start-0 w-100 p-4"
                                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)' }}
                                >
                                    <span className="badge bg-dark bg-opacity-75 border border-secondary border-opacity-50 text-muted small mb-2">{article.category}</span>
                                    <h2 className="display-5 fw-bolder text-white mb-0">{article.title}</h2>
                                </div>
                            </div>

                            {/* Article Body */}
                            <div className="row g-5 mt-1">
                                <div className="col-lg-7">
                                    <p className="lead text-secondary mb-4" style={{ lineHeight: '1.7' }}>{article.subtitle}</p>
                                    {article.body.map((para, i) => (
                                        <p key={i} className="text-secondary mb-4" style={{ lineHeight: '1.9', fontSize: '1.05rem' }}>{para}</p>
                                    ))}
                                    <blockquote className="border-start border-primary border-3 ps-4 mt-4 mb-4">
                                        <p className="text-muted fst-italic mb-0">{article.quote}</p>
                                    </blockquote>
                                </div>
                                <div className="col-lg-5">
                                    <div className="rounded-4 overflow-hidden mb-4 shadow" style={{ height: '320px' }}>
                                        <img
                                            src={article.sidePic}
                                            alt="Supporting Visual"
                                            className="w-100 h-100 object-fit-cover"
                                            style={{ filter: 'contrast(1.1) saturate(1.1)' }}
                                        />
                                    </div>
                                    <div className="p-4 rounded-4 border border-primary border-opacity-25 glass">
                                        <h5 className="fw-bolder text-white mb-3"><i className="bi bi-newspaper me-2 text-primary"></i>Key Takeaways</h5>
                                        <ul className="text-muted mb-0 ps-3" style={{ lineHeight: '2' }}>
                                            {article.body.slice(0, 2).map((_, i) => (
                                                <li key={i}>{article.body[i].split('.')[0]}.</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}

                    {/* CTA to Inventory */}
                    <div className="text-center py-5">
                        <h3 className="fw-bolder mb-3">Inspired to get behind the wheel?</h3>
                        <p className="text-muted mb-4">Browse our full catalogue of premium and custom vehicles.</p>
                        <Link to="/inventory" className="btn btn-primary rounded-pill px-5 py-3 fw-bold text-uppercase tracking-wider shadow-lg me-3">Browse Inventory</Link>
                        <Link to="/painting" className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold text-uppercase tracking-wider">Visit Paint Shop</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Explore;
