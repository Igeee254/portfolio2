import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';
import { carsData as mockInventory } from '../data/cars';

const Inventory = () => {
    const [filter, setFilter] = useState('All');
    const [makeFilter, setMakeFilter] = useState('Any');

    const allMakes = ['Any', ...Array.from(new Set(mockInventory.map(c => c.make))).sort()];

    const filteredCars = mockInventory.filter(car => {
        const fuelMatch = filter === 'All' || car.fuelType === filter;
        const makeMatch = makeFilter === 'Any' || car.make === makeFilter;
        return fuelMatch && makeMatch;
    });

    return (
        <div className="bg-dark text-white min-vh-100 d-flex flex-column">
            <Navbar />

            <main className="flex-grow-1" style={{ paddingTop: '100px' }}>
                <div className="container-fluid px-4 px-lg-5 py-5">

                    {/* Header & Search */}
                    <div className="row mb-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold mb-2">Marketplace</h1>
                            <p className="text-muted lead">Find your next premium vehicle from verified sellers.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex glass rounded-pill p-2 mt-4 mt-lg-0">
                                <input type="text" className="form-control bg-transparent border-0 text-white shadow-none ps-4" placeholder="Search make, model, or year..." />
                                <button className="btn btn-primary rounded-pill px-4 fw-bold">Search</button>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Filter Sidebar */}
                        <div className="col-lg-3">
                            <div className="glass p-4 rounded-4 sticky-top" style={{ top: '100px' }}>
                                <h5 className="fw-bold mb-4">Filters</h5>

                                <div className="mb-4">
                                    <label className="fw-bold mb-2 small text-muted text-uppercase">Fuel Type</label>
                                    <div className="d-flex flex-column gap-2">
                                        {['All', 'Petrol', 'Hybrid', 'Electric', 'Diesel'].map(type => (
                                            <div className="form-check" key={type}>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="fuelType"
                                                    id={type}
                                                    checked={filter === type}
                                                    onChange={() => setFilter(type)}
                                                />
                                                <label className="form-check-label" htmlFor={type}>
                                                    {type}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="fw-bold mb-2 small text-muted text-uppercase">Make</label>
                                    <select
                                        className="form-select bg-dark text-white border-secondary border-opacity-50 shadow-none"
                                        value={makeFilter}
                                        onChange={e => setMakeFilter(e.target.value)}
                                    >
                                        {allMakes.map(make => (
                                            <option key={make} className="text-white bg-dark">{make}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="fw-bold mb-2 small text-muted text-uppercase">Max Price</label>
                                    <input type="range" className="form-range" min="500000" max="200000000" step="500000" />
                                    <div className="d-flex justify-content-between text-muted small mt-1">
                                        <span>Sh 500K</span>
                                        <span>Sh 200M+</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Inventory Grid */}
                        <div className="col-lg-9">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <span className="text-muted">{filteredCars.length} vehicles found</span>
                                <select className="form-select bg-transparent text-white border-0 w-auto shadow-none">
                                    <option className="text-dark">Sort by: Recommended</option>
                                    <option className="text-dark">Price: Low to High</option>
                                    <option className="text-dark">Price: High to Low</option>
                                    <option className="text-dark">Year: Newest</option>
                                </select>
                            </div>

                            <div className="row g-4">
                                {filteredCars.map(car => (
                                    <div className="col-md-6 col-xl-4" key={car.id}>
                                        <CarCard car={car} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Inventory;
