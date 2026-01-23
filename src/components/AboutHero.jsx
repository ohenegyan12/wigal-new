import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './AboutHero.css';

const AboutHero = () => {
    return (
        <section className="about-hero">
            <div className="about-hero-container">
                <motion.div
                    className="about-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="about-hero-title">
                        Driving Africa’s digital future – making it easy for everyone to discover and pay for everyday essentials.
                    </h1>
                    <p className="about-hero-subtitle">
                        Our vision is to be Africa’s most useful company, building a platform where everyone can discover, pay, and participate in the digital economy with ease.
                    </p>

                    <motion.button
                        className="meet-team-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const teamSection = document.getElementById('team-section');
                            if (teamSection) {
                                teamSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <ArrowRight size={20} className="btn-icon" /> Meet The Team
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
