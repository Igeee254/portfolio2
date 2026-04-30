import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home', icon: 'bi-house-fill' },
  { to: '/inventory', label: 'Inventory', icon: 'bi-car-front-fill' },
  { to: '/explore', label: 'Explore', icon: 'bi-compass-fill' },
  { to: '/news', label: 'News', icon: 'bi-newspaper' },
  { to: '/services', label: 'Services', icon: 'bi-tools' },
  { to: '/painting', label: 'Paint Shop', icon: 'bi-brush-fill', highlight: true },
  { to: '/sell-car', label: 'Sell My Car', icon: 'bi-tag-fill' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <>
      {/* Toggle Button — always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn d-flex align-items-center justify-content-center position-fixed z-3 border border-secondary border-opacity-25 glass shadow"
        style={{
          top: '20px',
          left: isOpen ? '264px' : '16px',
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          transition: 'left 0.3s ease',
          zIndex: 1050,
          backgroundColor: 'rgba(10,10,10,0.85)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
      </button>

      {/* Overlay backdrop on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="d-lg-none position-fixed w-100 h-100 top-0 start-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1040 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="position-fixed top-0 start-0 h-100 d-flex flex-column"
        style={{
          width: '260px',
          zIndex: 1045,
          background: 'linear-gradient(180deg, #0a0a0a 0%, #111 100%)',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '4px 0 30px rgba(0,0,0,0.6)',
          overflowY: 'auto',
        }}
      >
        {/* Branding */}
        <div className="p-4 pt-5 mt-3 border-bottom border-secondary border-opacity-25">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-decoration-none d-flex align-items-center gap-2">
            <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
              <Car size={20} className="text-dark fw-bold" />
            </div>
            <span className="fw-bolder fs-5 text-white tracking-tighter">AUTOMARKET<span className="text-primary">.</span></span>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex-grow-1 py-3 px-2">
          <p className="text-muted px-3 mb-2 small fw-bold text-uppercase" style={{ letterSpacing: '2px', fontSize: '0.65rem' }}>Menu</p>
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`d-flex align-items-center gap-3 px-3 py-2 mb-1 rounded-3 text-decoration-none fw-semibold small transition ${active
                  ? 'bg-primary text-dark'
                  : link.highlight
                    ? 'text-warning'
                    : 'text-secondary'
                  }`}
                style={{ transition: 'all 0.2s' }}
              >
                <i className={`bi ${link.icon}`} style={{ width: '20px', textAlign: 'center' }}></i>
                <span className="flex-grow-1">{link.label}</span>
                {active && <ChevronRight size={14} />}
              </Link>
            );
          })}
        </nav>

      </motion.aside>

      {/* Content offset wrapper (applied to body via global CSS) */}
    </>
  );
};

export default Navbar;
