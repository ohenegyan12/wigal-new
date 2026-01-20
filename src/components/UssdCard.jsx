import React from 'react';
import { motion } from 'framer-motion';
import './UssdCard.css';

const UssdCard = () => {
    return (
        <section className="ussd-section">
            <motion.div
                className="ussd-card-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="ussd-content">
                    <h2 className="ussd-title">Quick Access<br />with USSD</h2>
                    <p className="ussd-description">
                        Dial in & interact — no internet needed! Smart USSD lets users tap a menu by dialing a short code and instantly get info or take actions right from their phone.
                    </p>
                    <div className="ussd-buttons">
                        <a href="/smart-ussd" className="ussd-btn learn-more">
                            Learn More
                        </a>
                        <a href="/contact" className="ussd-btn contact-support">
                            Contact Support <img src="/logo-arrow.svg" alt="" className="ussd-btn-icon" />
                        </a>
                    </div>
                </div>

                <div className="ussd-image-container">
                    <motion.img
                        src="/ussd-phone.png"
                        alt="USSD Interface on Phone"
                        className="ussd-phone-img"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default UssdCard;
