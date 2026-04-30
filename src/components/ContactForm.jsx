import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        requestCallback: false
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus(formData.requestCallback
                    ? '✅ Message sent! We will call you back shortly.'
                    : '✅ Message sent successfully!');
                setFormData({ name: '', email: '', phone: '', message: '', requestCallback: false });
            } else {
                setStatus('❌ Failed to send message.');
            }
        } catch (error) {
            setStatus('❌ Error sending message.');
        }
    };

    return (
        <section id="contacts" className="contact-section container">
            <div className="glass contact-card">
                <div className="badge">Contact Us</div>
                <h2>Get in <span className="highlight">Touch</span></h2>
                <p>Have a project in mind? Let's discuss how we can help you.</p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="📞 Phone Number (e.g. 0712345678)"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <label className="callback-label">
                        <div className={`callback-toggle ${formData.requestCallback ? 'active' : ''}`}>
                            <input
                                type="checkbox"
                                name="requestCallback"
                                checked={formData.requestCallback}
                                onChange={handleChange}
                            />
                            <span className="toggle-slider"></span>
                        </div>
                        <span>
                            📞 Request a Callback
                            {formData.requestCallback && <span className="callback-hint"> — We'll call you on the number above!</span>}
                        </span>
                    </label>

                    <button type="submit" className="btn-primary">
                        {formData.requestCallback ? '📞 Send & Request Callback' : 'Send Message'}
                    </button>
                    {status && <p className="status-msg">{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;

