import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SellCar = () => {
    return (
        <div className="bg-dark text-white min-vh-100 d-flex flex-column">
            <Navbar />

            <main className="flex-grow-1" style={{ paddingTop: '100px' }}>
                <div className="container py-5">

                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bold mb-3">Sell Your Car</h1>
                        <p className="text-muted lead">List your premium vehicle on the world's fastest growing AutoMarket in minutes.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form className="glass p-4 p-md-5 rounded-4 border border-secondary border-opacity-25">

                                <h4 className="fw-bold mb-4 border-bottom border-secondary border-opacity-25 pb-3">Vehicle Details</h4>

                                <div className="row g-4 mb-5">
                                    <div className="col-md-6">
                                        <label className="form-label text-muted small fw-bold text-uppercase">Make</label>
                                        <select className="form-select bg-dark text-white border-secondary shadow-none py-3">
                                            <option>Select Make...</option>
                                            <option>Tesla</option>
                                            <option>Porsche</option>
                                            <option>BMW</option>
                                            <option>Mercedes-Benz</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-muted small fw-bold text-uppercase">Model</label>
                                        <input type="text" className="form-control bg-dark text-white border-secondary shadow-none py-3" placeholder="e.g. Model S Plaid" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label text-muted small fw-bold text-uppercase">Year</label>
                                        <input type="number" className="form-control bg-dark text-white border-secondary shadow-none py-3" placeholder="2024" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label text-muted small fw-bold text-uppercase">Mileage</label>
                                        <input type="number" className="form-control bg-dark text-white border-secondary shadow-none py-3" placeholder="12,000" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label text-muted small fw-bold text-uppercase">Fuel Type</label>
                                        <select className="form-select bg-dark text-white border-secondary shadow-none py-3">
                                            <option>Electric</option>
                                            <option>Petrol</option>
                                            <option>Hybrid</option>
                                        </select>
                                    </div>
                                </div>

                                <h4 className="fw-bold mb-4 border-bottom border-secondary border-opacity-25 pb-3">Pricing & Media</h4>

                                <div className="row g-4 mb-5">
                                    <div className="col-md-6">
                                        <label className="form-label text-muted small fw-bold text-uppercase">Asking Price (Sh)</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark border-secondary text-muted">Sh</span>
                                            <input type="number" className="form-control bg-dark text-white border-secondary shadow-none py-3" placeholder="85,000" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label text-muted small fw-bold text-uppercase">Description</label>
                                        <textarea className="form-control bg-dark text-white border-secondary shadow-none" rows="4" placeholder="Describe the condition, features, and history of your vehicle..."></textarea>
                                    </div>
                                    <div className="col-12">
                                        <div className="border border-secondary border-opacity-50 border-dashed rounded-4 p-5 text-center bg-dark bg-opacity-50" style={{ borderStyle: 'dashed' }}>
                                            <i className="bi bi-cloud-arrow-up display-4 text-muted mb-3 d-block"></i>
                                            <h5>Upload Photos</h5>
                                            <p className="text-muted small mb-0">Drag & drop high-quality images here, or click to browse.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid gap-2">
                                    <button type="button" className="btn btn-primary btn-lg rounded-pill fw-bold py-3">Publish Listing to Marketplace</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SellCar;
