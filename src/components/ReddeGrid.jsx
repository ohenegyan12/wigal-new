import React from 'react';
import { motion } from 'framer-motion';
import './ReddeGrid.css';

const ReddeGrid = () => {
    return (
        <section className="redde-section">
            <div className="redde-header">
                <span className="redde-tag">REDDE ONLINE</span>
                <h2 className="redde-title">Easy Online Payments</h2>
                <p className="redde-subtitle">Collect money online with confidence — secure, simple, and built for merchants and developers in Ghana. Redde makes receiving and managing payments a breeze.</p>
            </div>

            <div className="redde-grid">
                {/* Main Large Card (Red) */}
                <motion.div
                    className="redde-card redde-card-large"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="redde-card-title">Get Paid Online with Redde</h3>
                    <p className="redde-card-desc">Redde is a secure payment platform that lets you collect payments for goods and services online, fast, safe, and with real-time transaction tracking.</p>
                    <a href="#" className="redde-btn redde-btn-white">
                        <img src="/logo-arrow.svg" alt="" className="redde-button-icon" /> Know More
                    </a>
                    <img src="/redde-mock.png" alt="Redde Dashboard Mockup" className="redde-mockup-large" />
                </motion.div>

                {/* Cream Card */}
                <motion.div
                    className="redde-card redde-card-cream"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="redde-card-title">Accept Payments Easily</h3>
                    <p className="redde-card-desc">Collect payments via mobile money, bank transfers, and cards directly to your dashboard.</p>
                </motion.div>

                {/* Mint Card */}
                <motion.div
                    className="redde-card redde-card-mint"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="redde-card-title">Track Everything At Once</h3>
                    <p className="redde-card-desc">Instantly view and monitor your transactions with a clean, intuitive dashboard — check who paid, when, and where your funds are going.</p>
                    <img src="/redde-illustration.svg" alt="Person celebrating" className="redde-illustration-mint" />
                </motion.div>

                {/* Blue Card */}
                <motion.div
                    className="redde-card redde-card-blue"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="redde-card-title">Build with Redde API</h3>
                    <p className="redde-card-desc">Integrate Redde into your app or website using simple APIs. Developers can add secure payment collection wherever it's needed with clear guides and support.</p>
                    <a href="https://developers.reddeonline.com/" target="_blank" rel="noopener noreferrer" className="redde-btn redde-btn-white">
                        <img src="/logo-arrow.svg" alt="" className="redde-button-icon" /> View Documentation
                    </a>
                    <img src="/redde-api-ill.png" alt="API Integration Illustration" className="redde-api-illustration" />
                </motion.div>

                {/* Grey Action Card */}
                <motion.div
                    className="redde-card redde-card-grey"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="redde-card-title">Start Collecting Payments</h3>
                    <p className="redde-card-desc">Sign in to manage your payments, or create an account now to get secure online payment tools and APIs — all set up in minutes.</p>
                    <a href="https://app.reddeonline.com/login" target="_blank" rel="noopener noreferrer" className="redde-btn redde-btn-red">
                        <img src="/logo-arrow.svg" alt="" className="redde-button-icon" style={{ filter: 'brightness(0) invert(1)' }} /> Continue To Redde
                    </a>
                    <img src="/collect-payment.png" alt="Happy customer with phone and cash" className="redde-person-image" />
                </motion.div>
            </div>
        </section>
    );
};

export default ReddeGrid;
