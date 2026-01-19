import React from 'react';
import { motion } from 'framer-motion';
import './ReddeSolutions.css';

const ReddeSolutions = () => {
    const features = [
        'Online Payments',
        'Developer Friendly',
        'Mobile Money & USSD',
        'Dashboard & Reports',
        'Card & Bank Transfers',
        'Payouts & Settlements'
    ];

    return (
        <section className="redde-solutions-section">
            <div className="redde-solutions-container">
                <motion.div
                    className="redde-solutions-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="solutions-image-wrapper">
                        <img src="/BUSINESSES.jpg" alt="All-In-One Solutions" className="solutions-image" />
                    </div>
                </motion.div>

                <div className="redde-solutions-right">
                    <motion.h2
                        className="solutions-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        All-In-One Payment Solutions <br /> That Work For You
                    </motion.h2>

                    <motion.p
                        className="solutions-description"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Redde gives merchants and developers the tools they need to collect, manage, and track payments — without complexity. Our platform supports your business at every step, from payment acceptance to seamless payout into your bank account.
                    </motion.p>

                    <motion.div
                        className="redde-solutions-features-list"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="features-label">FEATURES</h3>
                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-pill">
                                    <div className="check-circle">
                                        <svg className="check-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="#A81F25" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ReddeSolutions;
