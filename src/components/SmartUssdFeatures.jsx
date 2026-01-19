import React from 'react';
import { motion } from 'framer-motion';
import './SmartUssdFeatures.css';

const SmartUssdFeatures = () => {
    const features = [
        {
            title: "Boost Accessibility Across All Users",
            description: "Smart USSD brings your services directly to every phone — no app, no data, no internet required. By enabling interactive USSD menus, you make it easy for your customers to connect, transact, and access information anytime, anywhere — increasing reach and eliminating barriers to access.",
            image: "/ussd-section-1.jpg"
        },
        {
            title: "Drive Engagement & Revenue Growth",
            description: "Make it faster for users to complete transactions, check balances, submit requests, or access key services right from their phones. With intuitive USSD menus, you improve user experience, reduce drop-offs, and open more opportunities for engagement — helping you grow usage and revenue.",
            image: "/ussd-section-2.jpg"
        },
        {
            title: "Transform How You Serve Customers",
            description: "Replace manual processes and phone calls with automated USSD flows that guide users step by step. Streamline operations, reduce support costs, and improve customer satisfaction by giving people a simple, consistent way to interact with your organization.",
            image: "/ussd-section-3.jpg"
        },
        {
            title: "Empower Communities & Improve Access",
            description: "Smart USSD can help bridge the digital divide by giving citizens and customers instant access to essential services without internet. From payments and surveys to notifications and data collection, it enhances inclusion, supports economic activity, and makes everyday tasks easier for everyone.",
            image: "/ussd-section-4.jpg"
        }
    ];

    return (
        <section className="smart-ussd-features-section" id="ussd-features">
            <div className="smart-ussd-features-container">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className={`smart-ussd-feature-row ${index % 2 !== 0 ? 'reverse' : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="smart-ussd-feature-content">
                            <h3 className="smart-ussd-feature-title">{feature.title}</h3>
                            <p className="smart-ussd-feature-description">{feature.description}</p>
                        </div>
                        <div className="smart-ussd-feature-image-wrapper">
                            <img src={feature.image} alt={feature.title} className="smart-ussd-feature-img" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SmartUssdFeatures;
