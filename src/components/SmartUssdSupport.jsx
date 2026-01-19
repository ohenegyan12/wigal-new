import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './SmartUssdSupport.css';

const SmartUssdSupport = () => {
    return (
        <section className="smart-ussd-support-section" id="support">
            <div className="smart-ussd-support-container">
                <motion.div
                    className="smart-ussd-support-content"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="smart-ussd-support-title">
                        Need Help Setting Up Your USSD Service?
                    </h2>
                    <p className="smart-ussd-support-description">
                        If you need assistance launching or customizing your Smart USSD solution, our support team is ready to guide you — from setup to live deployment.
                    </p>
                    <a href="mailto:support@wigal.com.gh" className="smart-ussd-support-btn">
                        <ArrowRight size={20} color="#03140C" strokeWidth={2} style={{ marginRight: '4px' }} /> Contact Support
                    </a>
                </motion.div>

                <motion.div
                    className="smart-ussd-support-image-wrapper"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/ussd support.jpg" alt="Support Team" className="smart-ussd-support-img" />
                </motion.div>
            </div>
        </section>
    );
};

export default SmartUssdSupport;
