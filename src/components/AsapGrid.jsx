import React from 'react';
import { motion } from 'framer-motion';
import './AsapGrid.css';

const AsapGrid = () => {
    return (
        <section className="asap-section">
            <div className="asap-header">
                <span className="asap-tag">ASAP BULK PAYMENT</span>
                <h2 className="asap-title">Bulk Payments Made Easy</h2>
                <p className="asap-subtitle">Send money to many accounts at once — mobile wallets or bank accounts — with speed and simplicity. ASAP lets businesses handle payrolls, suppliers, and payouts in one click, saving time and effort.</p>
            </div>

            <div className="asap-grid">
                {/* Blue Card */}
                <motion.div
                    className="asap-card asap-card-blue"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="asap-card-title">Instant Bulk Pay</h3>
                    <p className="asap-card-desc">Send money to lots of accounts at once — mobile wallets or bank accounts — with just one click. Perfect for payroll, supplier payouts, and contractor payments without the manual hassle.</p>
                    <img src="/illustraton-bulk.png" alt="Instant Bulk Pay Illustration" className="asap-bulk-illustration" />
                </motion.div>

                {/* Dark Card */}
                <motion.div
                    className="asap-card asap-card-dark"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="asap-card-title">Access ASAP Payments</h3>
                    <p className="asap-card-desc">Log in or create an account to start sending bulk payments instantly. Manage payouts, track transactions, and make money moves in minutes!</p>
                    <a href="https://asap.wigal.com.gh/login" target="_blank" rel="noopener noreferrer" className="asap-btn btn-white-blue">
                        <img src="/logo-arrow.svg" alt="" className="asap-btn-icon" /> Continue To ASAP
                    </a>
                    <img src="/access-payment-asap.png" alt="Happy customer" className="asap-access-illustration" />
                </motion.div>
            </div>
        </section>
    );
};

export default AsapGrid;
