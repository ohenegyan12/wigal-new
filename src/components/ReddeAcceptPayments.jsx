import React from 'react';
import { motion } from 'framer-motion';
import './ReddeAcceptPayments.css';

const ReddeAcceptPayments = () => {
    const steps = [
        {
            id: '01',
            text: 'Sign up in minutes and verify your business details.'
        },
        {
            id: '02',
            text: 'Choose ready-made plugins for your site, or connect with our API.'
        },
        {
            id: '03',
            text: 'Enable card, mobile money or bank payments with a click.'
        },
        {
            id: '04',
            text: 'Start accepting secure payments instantly, no redirects, no complicated checkout.'
        }
    ];

    return (
        <section className="redde-accept-section">
            <div className="redde-accept-container">
                <header className="redde-accept-header">
                    <motion.h2
                        className="accept-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Start Accepting Payments in Minutes,<br />No Tech Stress
                    </motion.h2>
                    <motion.p
                        className="accept-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Getting set up with Redde is fast, simple, and designed for everyone,<br />whether you're a small seller or a growing online business
                    </motion.p>
                </header>

                <motion.div
                    className="accept-image-wrapper"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <img src="/business-owner-pos.jpg" alt="Business Owner with POS" className="accept-banner-image" />
                </motion.div>

                <div className="accept-steps-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="accept-step-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <span className="step-number">{step.id}</span>
                            <p className="step-text">{step.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReddeAcceptPayments;
