import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    return (
        <motion.div
            className="card bg-dark border border-secondary border-opacity-25 rounded-4 overflow-hidden h-100 hover-lift glass text-white"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Link to={`/car/${car.id}`} className="position-relative d-block text-decoration-none" style={{ height: '200px', backgroundColor: '#1C1F22' }}>
                <img
                    src={car.image}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-100 h-100 object-fit-cover"
                    style={{ transition: 'all 0.3s', cursor: 'pointer' }}
                />
                <span className="badge bg-primary position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill">
                    Sh {car.price.toLocaleString()}
                </span>
            </Link>

            <div className="card-body p-4 d-flex flex-column">
                <p className="text-muted small fw-bold mb-1 tracking-wider text-uppercase">{car.year} • {car.make}</p>
                <h4 className="card-title fw-bold mb-3">{car.model}</h4>

                <div className="d-flex gap-3 mb-4 text-muted small">
                    <div className="d-flex align-items-center gap-1">
                        <i className="bi bi-speedometer2"></i> {car.mileage.toLocaleString()} mi
                    </div>
                    <div className="d-flex align-items-center gap-1">
                        <i className="bi bi-fuel-pump"></i> {car.fuelType}
                    </div>
                    <div className="d-flex align-items-center gap-1">
                        <i className="bi bi-gear"></i> {car.transmission}
                    </div>
                </div>

                <div className="mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                    <span className="text-muted small">Location: {car.location}</span>
                    <Link to={`/car/${car.id}`} className="btn btn-outline-light btn-sm rounded-pill px-4 hover-primary">View</Link>
                </div>
            </div>
        </motion.div>
    );
};

export default CarCard;
