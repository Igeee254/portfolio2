import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Sarah Atieno",
        handle: "@sarah_atieno",
        avatar: "https://i.pravatar.cc/150?img=44",
        quote: "Found my dream car in under a week! The experience was phenomenal — like buying from a top-tier dealership. I'll definitely be recommending this to everyone.",
        rating: 5,
        tag: "Bought Tesla Model S"
    },
    {
        id: 2,
        name: "@GlennJr",
        handle: "@GlennJr",
        avatar: "https://i.pravatar.cc/150?img=11",
        quote: "Was hesitant at first. Their staff was flexible, helpful, and their staff made it incredibly helpful throughout the listing process. Five stars.",
        rating: 5,
        tag: "Sold BMW M4"
    },
    {
        id: 3,
        name: "E. Danny",
        handle: "@DannyE",
        avatar: "https://i.pravatar.cc/150?img=5",
        quote: "Blown away by the professionalism and expertise of the staff at this place. They helped me find the perfect car for my requirements and budget. Five stars!",
        rating: 5,
        tag: "Bought Porsche 911"
    },
    {
        id: 4,
        name: "RobertJames",
        handle: "@RobertJames_K",
        avatar: "https://i.pravatar.cc/150?img=57",
        quote: "Had a remarkable experience shopping at AutoMarket. The team was incredibly knowledgeable, and genuinely cared about helping me find the right vehicle. Couldn't be happier!",
        rating: 5,
        tag: "Bought Range Rover SV"
    },
    {
        id: 5,
        name: "Wambua F.",
        handle: "@Wambua_F",
        avatar: "https://i.pravatar.cc/150?img=33",
        quote: "Initially had my doubts, but I'm so glad I tried AutoMarket. The selection was fantastic and the customer service was top-notch. 10/10 highly recommend!",
        rating: 5,
        tag: "Bought Mercedes AMG"
    },
    {
        id: 6,
        name: "@LauraWO",
        handle: "@LauraWO",
        avatar: "https://i.pravatar.cc/150?img=47",
        quote: "AutoMarket offers an unparalleled shopping experience. The team of dedicated professionals took the time to understand our needs, and made it feel incredibly luxurious as valued customers.",
        rating: 5,
        tag: "Bought Lamborghini"
    },
    {
        id: 7,
        name: "@MaryJerry",
        handle: "@MaryJerry",
        avatar: "https://i.pravatar.cc/150?img=9",
        quote: "Truly in awe by the level of service they provide. The buying process was easy, they went out of their way to make sure purchasing my dream car was a reality.",
        rating: 5,
        tag: "Bought Ferrari F8"
    },
    {
        id: 8,
        name: "Mark Omoyi",
        handle: "@MarkOmoyi",
        avatar: "https://i.pravatar.cc/150?img=60",
        quote: "I've had such a positive car-buying experience at AutoMarket. The team was incredibly helpful, and knew their stuff so well! Truly surprised at the customer quality. 5 stars!",
        rating: 5,
        tag: "Bought Audi RS e-tron"
    },
    {
        id: 9,
        name: "@OdInspects",
        handle: "@OdInspects",
        avatar: "https://i.pravatar.cc/150?img=15",
        quote: "I've had such a positive experience shopping at AutoMarket. The team was incredibly helpful, and was knowledgeable about every vehicle. I genuinely loved every step of the simple car buying process. I highly recommend!",
        rating: 5,
        tag: "Bought McLaren 720S"
    }
];

const StarRating = ({ count }) => (
    <div className="d-flex gap-1 mb-3">
        {Array.from({ length: count }).map((_, i) => (
            <i key={i} className="bi bi-star-fill text-warning" style={{ fontSize: '0.75rem' }}></i>
        ))}
    </div>
);

const Testimonials = () => {
    // Split into two rows for the staggered look
    const row1 = testimonials.slice(0, 5);
    const row2 = testimonials.slice(5, 9);

    return (
        <section className="py-5 position-relative" style={{ background: '#050505' }}>
            {/* Decorative quotes — clipped independently */}
            <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden" style={{ pointerEvents: 'none', zIndex: 0 }}>
                <div className="position-absolute text-secondary opacity-10" style={{ fontSize: '20rem', lineHeight: 1, top: '-2rem', left: '1rem', fontFamily: 'serif' }}>"</div>
                <div className="position-absolute text-secondary opacity-10" style={{ fontSize: '20rem', lineHeight: 1, bottom: '-5rem', right: '1rem', fontFamily: 'serif' }}>"</div>
            </div>

            <div className="py-5 position-relative" style={{ zIndex: 1 }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-muted small fw-bold text-uppercase mb-2"
                            style={{ letterSpacing: '4px' }}
                        >
                            What people are saying
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            viewport={{ once: true }}
                            className="display-4 fw-bolder text-white tracking-tighter"
                        >
                            TRUSTED BY MANY
                        </motion.h2>
                    </div>
                </div>

                {/* Row 1 — full width, scrollable */}
                <div
                    className="d-flex gap-3 mb-3 pb-2 px-4"
                    style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {row1.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 p-4 rounded-4 border border-secondary border-opacity-25"
                            style={{
                                width: '280px',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            {/* Profile */}
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="rounded-circle object-fit-cover flex-shrink-0"
                                    style={{ width: '44px', height: '44px', border: '2px solid rgba(var(--bs-primary-rgb),0.4)' }}
                                />
                                <div>
                                    <p className="fw-bold text-white mb-0 small">{t.name}</p>
                                    <p className="text-primary mb-0" style={{ fontSize: '0.72rem' }}>{t.handle}</p>
                                </div>
                            </div>

                            <StarRating count={t.rating} />
                            <p className="text-secondary mb-3" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>{t.quote}</p>
                            <span className="badge bg-primary bg-opacity-15 text-primary border border-primary border-opacity-25 small rounded-pill px-2 py-1">{t.tag}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Row 2 — offset right, full width, scrollable */}
                <div
                    className="d-flex gap-3 pb-2 px-4"
                    style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingLeft: '160px' }}
                >
                    {row2.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 p-4 rounded-4 border border-secondary border-opacity-25"
                            style={{
                                width: '280px',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="rounded-circle object-fit-cover flex-shrink-0"
                                    style={{ width: '44px', height: '44px', border: '2px solid rgba(var(--bs-primary-rgb),0.4)' }}
                                />
                                <div>
                                    <p className="fw-bold text-white mb-0 small">{t.name}</p>
                                    <p className="text-primary mb-0" style={{ fontSize: '0.72rem' }}>{t.handle}</p>
                                </div>
                            </div>

                            <StarRating count={t.rating} />
                            <p className="text-secondary mb-3" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>{t.quote}</p>
                            <span className="badge bg-primary bg-opacity-15 text-primary border border-primary border-opacity-25 small rounded-pill px-2 py-1">{t.tag}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
