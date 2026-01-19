
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './FrogHero.css';

const FrogHero = () => {
    return (
        <section className="frog-hero-section">
            <div className="frog-hero-container">
                <motion.div
                    className="frog-hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="frog-hero-title">Smarter Messaging & Communication Solutions</h1>
                    <p className="frog-hero-description">
                        Transform how your business communicates, engages, and interacts with customers, without limits.
                    </p>
                    <a
                        href="https://frog.wigal.com.gh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="frog-hero-button"
                    >
                        <ArrowRight size={20} color="#218350" strokeWidth={2.5} style={{ marginRight: '12px' }} /> Go to FROG
                    </a>
                </motion.div>

                <motion.div
                    className="frog-hero-image-card-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="frog-hero-image-card">
                        <img src="/frog-hero-image.jpg" alt="Frog Messaging" className="frog-hero-card-img" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FrogHero;
