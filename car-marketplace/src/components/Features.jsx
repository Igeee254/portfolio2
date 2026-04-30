import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Map, Settings, Battery } from 'lucide-react';

const features = [
    {
        icon: <Shield className="text-primary" size={32} />,
        title: "Safety First",
        desc: "Engineered for maximum protection with advanced collision avoidance."
    },
    {
        icon: <Zap className="text-primary" size={32} />,
        title: "Instant Torque",
        desc: "Unmatched acceleration from standstill to highway speeds in seconds."
    },
    {
        icon: <Cpu className="text-primary" size={32} />,
        title: "AI Autopilot",
        desc: "Full self-driving capabilities powered by neural networks."
    },
    {
        icon: <Battery className="text-primary" size={32} />,
        title: "Long Range",
        desc: "Travel over 400 miles on a single charge with efficient batteries."
    },
    {
        icon: <Map className="text-primary" size={32} />,
        title: "Navigation",
        desc: "Smart routing with real-time traffic and charging stop planning."
    },
    {
        icon: <Settings className="text-primary" size={32} />,
        title: "OTA Updates",
        desc: "Your car gets better over time with wireless software updates."
    }
];

const Features = () => {
    return (
        <section className="section-padding bg-dark">
            <div className="container">
                <div className="text-center mb-5 pb-lg-4">
                    <motion.p
                        className="text-primary fw-bold text-uppercase letter-spacing-2 small mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Capabilities
                    </motion.p>
                    <motion.h2
                        className="display-4 fw-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Engineering <span className="text-gradient">Excellence</span>
                    </motion.h2>
                </div>

                <div className="row g-4">
                    {features.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <motion.div
                                className="p-5 h-100 rounded-4 glass border-0 hover-lift shadow-sm"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                            >
                                <div className="mb-4 bg-dark rounded-3 d-inline-flex p-3 border border-secondary border-opacity-10">
                                    {item.icon}
                                </div>
                                <h4 className="h5 mb-3">{item.title}</h4>
                                <p className="text-muted mb-0">{item.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
