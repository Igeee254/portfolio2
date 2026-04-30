import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carAngle1 from '../assets/car_angle_1.png';

const CarViewer360 = () => {
    // We simulate 360 view with 4 states. 
    // State 0: Front 3/4 Left (Normal image)
    // State 1: Front (Simulated by slightly scaling/squishing)
    // State 2: Front 3/4 Right (Simulated by flipping horizontally: scaleX(-1))
    // State 3: Side Profile (Simulated by stretching slightly or reusing Front 3/4 with opacity/scale shifts)
    const [angleIndex, setAngleIndex] = useState(0);

    const angles = [
        { id: 0, transform: 'scaleX(1) scale(1)' },
        { id: 1, transform: 'scaleX(1) scale(1.05)' },
        { id: 2, transform: 'scaleX(-1) scale(1)' },
        { id: 3, transform: 'scaleX(-1) scale(1.05)' },
    ];

    const nextAngle = () => {
        setAngleIndex((prev) => (prev + 1) % angles.length);
    };

    const prevAngle = () => {
        setAngleIndex((prev) => (prev - 1 + angles.length) % angles.length);
    };

    return (
        <div className="position-relative w-100 d-flex flex-column align-items-center justify-content-center" style={{ height: '500px' }}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={angleIndex}
                    src={carAngle1}
                    alt={`Car Angle ${angleIndex}`}
                    className="img-fluid position-absolute dropdown-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transform: angles[angleIndex].transform }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ maxHeight: '100%', objectFit: 'contain' }}
                />
            </AnimatePresence>

            {/* Controls */}
            <div className="position-absolute bottom-0 w-100 d-flex justify-content-center gap-4 pb-4">
                <button
                    className="btn btn-outline-secondary rounded-circle p-3 d-flex align-items-center justify-content-center glass hover-primary"
                    onClick={prevAngle}
                    style={{ width: '60px', height: '60px' }}
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="d-flex align-items-center gap-2">
                    {angles.map((_, idx) => (
                        <div
                            key={idx}
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: idx === angleIndex ? 'var(--primary)' : 'rgba(255,255,255,0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                            onClick={() => setAngleIndex(idx)}
                        />
                    ))}
                </div>
                <button
                    className="btn btn-outline-secondary rounded-circle p-3 d-flex align-items-center justify-content-center glass hover-primary"
                    onClick={nextAngle}
                    style={{ width: '60px', height: '60px' }}
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="position-absolute top-0 start-50 translate-middle-x mt-4 text-center">
                <p className="text-primary fw-bold letter-spacing-2 small mb-1">INTERACTIVE</p>
                <h3 className="fw-bold">Drag or Click to Rotate</h3>
            </div>
        </div>
    );
};

export default CarViewer360;
