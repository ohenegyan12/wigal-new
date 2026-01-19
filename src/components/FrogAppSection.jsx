
import React from 'react';
import { motion } from 'framer-motion';
import './FrogAppSection.css';

const FrogAppSection = () => {
    return (
        <section className="frog-app-section">
            <div className="frog-app-container">
                <div className="frog-app-card">
                    <div className="frog-app-content">
                        <motion.h2
                            className="frog-app-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Download the Frog App
                        </motion.h2>
                        <motion.p
                            className="frog-app-desc"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Get the Frog mobile app and stay connected on the go — send SMS, manage campaigns, and track engagement right from your phone. Available soon on the App Store & Google Play.
                        </motion.p>

                        <motion.div
                            className="app-badges"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <a href="#" className="app-badge">
                                <img src="/App-store-badge.svg" alt="Download on the App Store" />
                            </a>
                            <a href="#" className="app-badge">
                                <img src="/Google-play-badge.svg" alt="Get it on Google Play" />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        className="frog-app-image-wrapper"
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <img src="/frog-app-image.png" alt="Frog App Mockup" className="frog-phone-img" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FrogAppSection;
