
import React from 'react';
import { motion } from 'framer-motion';
import './ReddeHero.css';

const ReddeHero = () => {
    return (
        <section className="redde-hero-section">
            <div className="redde-hero-container">
                <motion.div
                    className="redde-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="redde-hero-title">
                        Reliable Online Payments <br /> for Your Business
                    </h1>
                    <p className="redde-hero-description">
                        Redde gives merchants and developers the tools they need to collect, manage, and track payments, without complexity
                    </p>
                    <a
                        href="https://app.reddeonline.com/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="redde-hero-button"
                    >
                        <img src="/logo-arrow.svg" alt="" className="button-arrow" /> Get Started With Redde
                    </a>
                </motion.div>

                <motion.div
                    className="redde-hero-image-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="redde-hero-mockup">
                        <img src="/redde-mock.png" alt="Redde Dashboard" className="redde-hero-img" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReddeHero;
