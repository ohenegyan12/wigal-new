import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './AsapWhyMatters.css';

const AsapWhyMatters = () => {
    const listItems = [
        "Fast & Efficient",
        "Supports Mobile Money & Banks",
        "Reduce Accounting Burden",
        "Clear Transaction Reports"
    ];

    return (
        <section className="asap-why-matters-section">
            <div className="asap-why-header">
                <h2 className="asap-why-title">Why ASAP Matters</h2>
            </div>

            <div className="asap-why-content-wrapper">
                <motion.div
                    className="asap-why-image-container"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/why-asap.jpg" alt="Why ASAP Matters" className="asap-why-img" />
                </motion.div>

                <div className="asap-why-list">
                    {listItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="asap-why-item"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="asap-check-icon">
                                <Check size={14} strokeWidth={3} />
                            </div>
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AsapWhyMatters;
