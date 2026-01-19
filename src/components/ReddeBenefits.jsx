import React from 'react';
import { motion } from 'framer-motion';
import './ReddeBenefits.css';

const ReddeBenefits = () => {
    const benefits = [
        {
            id: '01',
            text: 'Accept card, mobile money & bank transfers instantly'
        },
        {
            id: '02',
            text: 'Real-time dashboard to track all transactions'
        },
        {
            id: '03',
            text: 'Easy integration for developers with simple APIs'
        },
        {
            id: '04',
            text: 'Safe, PCI-DSS & ISO compliant security standards'
        }
    ];

    return (
        <section className="redde-benefits-section" id="redde-benefits">
            <div className="redde-benefits-container">
                <div className="redde-benefits-left">
                    <motion.h2
                        className="benefits-title"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        What are the <br /> <span>benefits</span>
                    </motion.h2>

                    <div className="benefits-list">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.id}
                                className="benefit-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <span className="benefit-number">{benefit.id}</span>
                                <p className="benefit-text">{benefit.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="redde-benefits-right"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="benefits-image-wrapper">
                        <img src="/redde-page-1.jpg" alt="Business Owner" className="benefits-image" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReddeBenefits;
