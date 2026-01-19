import React from 'react';
import { motion } from 'framer-motion';
import './SmartUssdWhyChoose.css';

const SmartUssdWhyChoose = () => {
    const reasons = [
        {
            image: '/smart-ussd-1.jpg',
            text: 'Works on any phone and network without internet'
        },
        {
            image: '/smart-ussd-2.jpg',
            text: 'Fast response times and reliable service for your audience.'
        },
        {
            image: '/smart-ussd-3.jpg',
            text: 'Useful for customer engagement'
        }
    ];

    return (
        <section className="smart-ussd-why-section" id="why-choose">
            <div className="smart-ussd-why-container">
                <motion.h2
                    className="smart-ussd-why-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Why Choose Smart USSD
                </motion.h2>

                <div className="smart-ussd-why-grid">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            className="smart-ussd-why-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="smart-ussd-why-image-wrapper">
                                <img src={item.image} alt={item.text} className="smart-ussd-why-img" />
                            </div>
                            <p className="smart-ussd-why-description">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SmartUssdWhyChoose;
