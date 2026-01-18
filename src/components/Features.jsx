
import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const featureData = [
    {
        id: 1,
        title: "Connect & Communicate",
        description: "Send SMS, Voice & Email instantly, reach your audience on any device, any network.",
        colorClass: "green",
        image: "/card-1.png"
    },
    {
        id: 2,
        title: "Interactive USSD",
        description: "Build mobile menus and real-time services that work on all phones, no app needed.",
        colorClass: "cyan",
        image: "/card-2.png"
    },
    {
        id: 3,
        title: "Accept Payments",
        description: "Collect mobile money and card payments securely, with real-time tracking.",
        colorClass: "red",
        image: "/card-3.png"
    },
    {
        id: 4,
        title: "Bulk Payouts",
        description: "Disburse funds to many recipients quickly and easily for payroll or payouts.",
        colorClass: "blue",
        image: "/card-4.png"
    }
];

const Features = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                {featureData.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        className={`feature-card ${feature.colorClass}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
