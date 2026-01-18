import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <motion.div
                className="cta-container"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="cta-content">
                    <h2 className="cta-title">Let's Build Your<br />Product Together</h2>
                    <p className="cta-description">
                        Ready to build your next digital product or service? Talk to our experts and let's plan your project from idea to launch
                    </p>
                    <a href="mailto:support@wigal.com.gh" className="cta-btn">
                        <img src="/logo-arrow.svg" alt="" className="cta-btn-icon" /> Get Started Now
                    </a>
                </div>

                <div className="cta-image-wrapper">
                    <img src="/cta-image.png" alt="Team working together" className="cta-image" />
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
