import { motion } from 'framer-motion';
import './CareersHero.css';

const CareersHero = () => {
    return (
        <div className="careers-hero-container">
            <div className="container">
                <div className="careers-content">
                    <motion.h1
                        className="careers-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Join Wigal – Where Innovation Meets Impact
                    </motion.h1>
                    <motion.p
                        className="careers-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        At Wigal, we connect businesses and communities with powerful messaging, fintech, and telecom solutions — from bulk SMS and USSD to e-payment and digital platforms that empower organisations across the continent
                    </motion.p>
                    <motion.button
                        className="careers-cta-btn"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Explore Roles
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33334 8H12.6667" stroke="#21438D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="#21438D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.button>
                </div>

                <div className="careers-gallery">
                    <motion.div
                        className="gallery-item-wrapper left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="gallery-item">
                            <img src="/office-team.jpg" alt="Team Collaboration" />
                        </div>
                        <div className="dashed-border"></div>
                    </motion.div>

                    <motion.div
                        className="gallery-item-wrapper center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <div className="gallery-item">
                            <img src="/developer.jpg" alt="Wigal Culture" />
                        </div>
                        <div className="dashed-border"></div>
                    </motion.div>

                    <motion.div
                        className="gallery-item-wrapper right"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="gallery-item">
                            <img src="/developer-2.jpg" alt="Remote Work" />
                        </div>
                        <div className="dashed-border"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CareersHero;
