
import React from 'react';
import { motion } from 'framer-motion';
import './FrogFeatures.css';

const features = [
    {
        number: '01',
        description: 'Communicate via Bulk SMS, Voice SMS, IVR Messaging, Email, and USSD, giving your business flexible engagement options.'
    },
    {
        number: '02',
        description: 'Send messages instantly to all mobile networks in Ghana'
    },
    {
        number: '03',
        description: 'Integrate messaging, USSD, and voice into your own apps or platforms with simple, well-documented APIs.'
    },
    {
        number: '04',
        description: 'A dedicated in-house support and development team ensures stability, uptime, and speedy assistance whenever you need it.'
    }
];

const FrogFeatures = () => {
    return (
        <section className="frog-features-section">
            <div className="frog-features-container">
                <div className="frog-features-grid">
                    <motion.div
                        className="frog-features-image-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/klll.jpg" alt="Reliable Communication" className="frog-features-img" />
                    </motion.div>

                    <motion.div
                        className="frog-features-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="frog-features-title">Why Frog? — Reliable, Accessible & Effective Communications</h2>

                        <div className="features-list">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <span className="feature-number">{feature.number}</span>
                                    <p className="feature-desc">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FrogFeatures;
