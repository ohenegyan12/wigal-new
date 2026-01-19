import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './AsapHero.css';

const AsapHero = () => {
    return (
        <section className="asap-hero-section">
            <div className="asap-hero-container">
                <div className="asap-hero-content">
                    <motion.h1
                        className="asap-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Make Bulk Payments<br />Instantly — From One<br />Dashboard
                    </motion.h1>
                    <motion.p
                        className="asap-hero-description"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        ASAP lets you send mass payments to mobile money and bank accounts quickly, cutting down manual work and saving time.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href="https://asap.wigal.com.gh/login" target="_blank" rel="noopener noreferrer" className="asap-hero-button">
                            <ArrowRight className="button-arrow-icon" size={20} style={{ marginRight: '8px' }} /> Get Started
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="asap-hero-image-wrapper"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <div className="asap-hero-mockup">
                        <img src="/bulk-pay-hero.jpg" alt="ASAP Interface" className="asap-hero-img" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AsapHero;
