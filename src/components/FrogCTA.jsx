
import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import './FrogCTA.css';

const FrogCTA = () => {
    return (
        <section className="frog-cta-section">
            <div className="frog-cta-container">
                <div className="frog-cta-header">
                    <h2 className="frog-cta-main-title">Business Messaging Made Simple</h2>
                    <p className="frog-cta-main-subtitle">
                        Connect with your audience instantly — via SMS, Voice, or USSD — with
                        unmatched speed and reliability. Frog lets businesses manage campaigns,
                        alerts, and customer engagement in one click, saving time and driving results.
                    </p>
                </div>

                <div className="cta-grid">
                    {/* Left Card - Green */}
                    <motion.div
                        className="cta-card cta-green"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="cta-card-content">
                            <h3 className="cta-card-title">Get Started with Frog</h3>
                            <p className="cta-card-desc">Sign up and start sending smarter, reliable messages — Bulk SMS, Voice, IVR & USSD — in minutes.</p>
                            <a href="https://frog.wigal.com.gh/" target="_blank" rel="noopener noreferrer" className="cta-button">
                                <img src="/logo-arrow.svg" alt="" className="button-arrow" /> Get Started Now
                            </a>
                        </div>
                        <div className="cta-laptop-wrapper">
                            <img src="/FROG-MOC-1.png" alt="Frog Dashboard Mockup" className="cta-laptop-img" />
                        </div>
                    </motion.div>

                    {/* Right Card - Black */}
                    <motion.div
                        className="cta-card cta-black"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="cta-card-flex">
                            <div className="cta-card-content">
                                <h3 className="cta-card-title">Need Help or Support?</h3>
                                <p className="cta-card-desc">Our team is here for you — whether it's setup, troubleshooting, or questions about your account.</p>
                                <a href="/contact" className="cta-button">
                                    <img src="/logo-arrow.svg" alt="" className="button-arrow" /> Contact Support
                                </a>
                            </div>
                            <div className="cta-person-wrapper">
                                <img src="/female-shopkeeper-smiling-camera.png" alt="Support Team Member" className="cta-person-img" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FrogCTA;
