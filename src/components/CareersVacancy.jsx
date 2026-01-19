import React from 'react';
import './CareersVacancy.css';
import { motion } from 'framer-motion';

const CareersVacancy = () => {
    return (
        <div className="careers-vacancy-section">
            <div className="container vacancy-container">
                <div className="vacancy-header">
                    <span className="vacancy-tag">Join Wigal</span>
                    <h2 className="vacancy-title">Available Positions</h2>
                    <p className="vacancy-subtitle">Find your role</p>
                </div>

                <motion.div
                    className="vacancy-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="vacancy-image-wrapper">
                        <img src="/vacancy-closed.svg" alt="No open positions" className="vacancy-image" />
                    </div>

                    <h3 className="vacancy-status">We're Not Hiring Right Now</h3>
                    <p className="vacancy-description">
                        There are currently no open positions, but we'll be adding new opportunities as our team grows — check back soon!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default CareersVacancy;
