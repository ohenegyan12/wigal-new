import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ReddeCTA.css';

const ReddeCTA = () => {
    return (
        <section className="redde-cta-section">
            <div className="redde-cta-container">
                <div className="redde-cta-card">
                    <div className="redde-cta-content">
                        <motion.h2
                            className="cta-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Start Accepting<br />Payments
                        </motion.h2>
                        <motion.p
                            className="cta-description"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Begin accepting secure online payments from cards, mobile money, and bank transfers — fast setup, simple tools, and reliable processing
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <a
                                href="https://app.reddeonline.com/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-get-started-btn"
                            >
                                <ArrowRight size={24} color="#A81F25" strokeWidth={2.5} style={{ marginRight: '12px' }} />
                                Get Started
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        className="redde-cta-image"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="cta-mockup-wrapper">
                            <img src="/redde-mock.png" alt="Redde Dashboard" className="cta-mockup-img" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default ReddeCTA;
