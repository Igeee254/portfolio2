import React from 'react';
// No icons
import { Globe, Mail, Phone, Share2, Car } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-5 border-top border-secondary border-opacity-10 mt-auto">
            <div className="container">
                <div className="row g-4 justify-content-between">
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center gap-2 mb-4">
                            <Car size={32} className="text-primary" />
                            <span className="fw-bold fs-4 tracking-tighter text-uppercase">Tesla<span className="text-primary">X</span></span>
                        </div>
                        <p className="text-muted text-balance mb-4">
                            Accelerating the world's transition to sustainable energy through high-performance electric vehicles.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2 border-opacity-25 hover-primary"><Share2 size={18} /></a>
                            <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2 border-opacity-25 hover-primary"><Globe size={18} /></a>
                            <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2 border-opacity-25 hover-primary"><Mail size={18} /></a>
                            <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2 border-opacity-25 hover-primary"><Phone size={18} /></a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-2">
                        <h6 className="fw-bold text-uppercase mb-4">Model</h6>
                        <ul className="list-unstyled d-grid gap-2 small text-muted">
                            <li><a href="#" className="text-reset text-decoration-none hover-primary">Model S</a></li>
                            <li><a href="#" className="text-reset text-decoration-none hover-primary">Model 3</a></li>
                            <li><a href="#" className="text-reset text-decoration-none hover-primary">Model X</a></li>
                            <li><a href="#" className="text-reset text-decoration-none hover-primary">Model Y</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-lg-2">
                        <h6 className="fw-bold text-uppercase mb-4">Resources</h6>
                        <ul className="list-unstyled d-grid gap-2 small text-muted">
                            <li><a href="#" className="text-reset text-decoration-none hover-primary">Charging</a></li>
                            <li><a href="#" className="text-reset text-decoration-none hover-primary">Inventory</a></li>
                            <li><a href="#" className="text-reset text-decoration-none hover-primary">Test Drive</a></li>
                            <li><a href="#" className="text-reset text-decoration-none hover-primary">Fleet</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3">
                        <h6 className="fw-bold text-uppercase mb-4">Newsletter</h6>
                        <p className="small text-muted mb-3">Subscribe for the latest news and updates.</p>
                        <div className="input-group">
                            <input type="email" className="form-control bg-transparent border-secondary border-opacity-25 text-white" placeholder="Email" />
                            <button className="btn btn-primary px-3 fw-bold">JOIN</button>
                        </div>
                    </div>
                </div>

                <div className="mt-5 pt-4 border-top border-secondary border-opacity-10 text-center text-muted small">
                    <p className="mb-0">© {new Date().getFullYear()} TESLAX ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
