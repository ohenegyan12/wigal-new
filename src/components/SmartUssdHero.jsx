import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './SmartUssdHero.css';

const SmartUssdHero = () => {
    return (
        <section className="smart-ussd-hero-section">
            <div className="smart-ussd-hero-container">
                <div className="smart-ussd-hero-content">
                    <motion.h1
                        className="smart-ussd-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Build Interactive USSD<br />Services for Your Users
                    </motion.h1>
                    <motion.p
                        className="smart-ussd-hero-description"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Smart USSD lets your business create fast, menu-driven mobile services that work on all
                        phones and all networks — with no app download or internet required. Users simply dial a
                        short code (like 8001#) to interact with your service instantly.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href="/contact" className="smart-ussd-hero-button">
                            <ArrowRight className="button-arrow-icon" size={20} color="white" style={{ marginRight: '8px' }} /> Contact Support
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="smart-ussd-hero-image-wrapper"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <div className="smart-ussd-hero-mockup">
                        <img src="/smart-ussd-mock.png" alt="Smart USSD Interface" className="smart-ussd-hero-img" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SmartUssdHero;
