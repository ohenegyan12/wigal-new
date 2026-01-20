import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './AsapCTA.css';

const AsapCTA = () => {
    return (
        <section className="asap-cta-section">
            <div className="asap-cta-container">
                <motion.div
                    className="asap-cta-content"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="asap-cta-title">
                        Need Help Setting Up or Customizing<br />ASAP?
                    </h2>
                    <p className="asap-cta-description">
                        Our support team can guide you through setup, scheduling, and API integration so you can start paying instantly.
                    </p>
                    <a href="/contact" className="asap-cta-button">
                        <ArrowRight size={20} /> Contact Support
                    </a>
                </motion.div>

                <motion.div
                    className="asap-cta-image-wrapper"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img src="/ussd support.jpg" alt="ASAP Support Team" className="asap-cta-img" />
                </motion.div>
            </div>
        </section>
    );
};

export default AsapCTA;
