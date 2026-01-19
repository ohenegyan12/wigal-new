import React from 'react';
import { motion } from 'framer-motion';
import './ReddeFeatures.css';

const ReddeFeatures = () => {
    const featureCards = [
        {
            title: 'Security First',
            description: 'We use industry-leading safeguards to protect your data.',
            image: '/business-security.jpg'
        },
        {
            title: 'Smooth Experience',
            description: 'Payments that just work — fast and hassle-free.',
            image: '/fast-payment.jpg'
        },
        {
            title: 'For Everyone',
            description: 'From startups to established merchants.',
            image: '/for-everyone.jpg'
        }
    ];

    return (
        <section className="redde-features-section" id="redde-features">
            <div className="redde-features-container">
                <motion.h2
                    className="redde-features-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Built For Growth — Simple, Secure & Scalable
                </motion.h2>

                <div className="features-cards-grid">
                    {featureCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="feature-card-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="feature-card-image-wrapper">
                                <img src={card.image} alt={card.title} className="feature-card-image" />
                            </div>
                            <h3 className="feature-card-title">{card.title}</h3>
                            <p className="feature-card-description">{card.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="redde-features-action"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="https://app.reddeonline.com/login" target="_blank" rel="noopener noreferrer" className="continue-redde-btn">
                        <img src="/logo-arrow.svg" alt="" className="btn-arrow" /> Continue To Redde
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ReddeFeatures;
