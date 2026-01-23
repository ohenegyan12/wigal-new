
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const featureData = [
    {
        id: 1,
        title: "Connect & Communicate",
        description: "Send SMS, Voice & Email instantly, reach your audience on any device, any network.",
        detailedInfo: "Reach your audience effectively with our robust messaging platform. Whether it's promotional campaigns or transactional alerts, we ensure delivery.",
        colorClass: "green",
        image: "/card-1.webp"
    },
    {
        id: 2,
        title: "Interactive USSD",
        description: "Build mobile menus and real-time services that work on all phones, no app needed.",
        detailedInfo: "Create engaging USSD sessions for voting, banking, or information services. Works offline and on any device.",
        colorClass: "cyan",
        image: "/card-2.webp"
    },
    {
        id: 3,
        title: "Accept Payments",
        description: "Collect mobile money and card payments securely, with real-time tracking.",
        detailedInfo: "Seamlessly integrate mobile money payments into your business. Safe, secure, and instant transactions.",
        colorClass: "red",
        image: "/card-3.webp"
    },
    {
        id: 4,
        title: "Bulk Payouts",
        description: "Disburse funds to many recipients quickly and easily for payroll or payouts.",
        detailedInfo: "Streamline your salary and vendor payments. Send money to multiple wallets instantly with our bulk disbursement tools.",
        colorClass: "blue",
        image: "/card-4.webp"
    }
];

const Features = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (id) => {
        // Toggle: if clicking the same card, close it. If clicking a new one, open it.
        setActiveCard(activeCard === id ? null : id);
    };
    return (
        <section className="features-section">
            <div className="features-container">
                {featureData.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        className={`feature-card ${feature.colorClass} ${activeCard === feature.id ? 'active' : ''}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        onClick={() => handleCardClick(feature.id)}
                    >
                        <div className="feature-text-content">
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>

                        {feature.image && (
                            <div className="feature-image-wrapper">
                                <img src={feature.image} alt={feature.title} className="feature-card-image" />
                            </div>
                        )}

                        <div className={`feature-overlay ${activeCard === feature.id ? 'visible' : ''}`}>
                            <div className="feature-overlay-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.detailedInfo}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
