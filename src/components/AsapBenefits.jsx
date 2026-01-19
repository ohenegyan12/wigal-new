import React from 'react';
import { motion } from 'framer-motion';
import './AsapBenefits.css';

const AsapBenefits = () => {
    const benefits = [
        {
            title: "Save Time on Payments",
            desc: "Send many payouts at once with just one upload — no need for individual transfers, saving hours of manual work.",
            image: "/asap-1.jpg"
        },
        {
            title: "Reduce Manual Errors",
            desc: "Automated batch processing helps eliminate mistakes that happen with individual data entry, improving accuracy.",
            image: "/asap-2.jpg"
        },
        {
            title: "Improve Cash Flow Control",
            desc: "Schedule and track your payouts easily, giving you better visibility and planning for your company's cash flow.",
            image: "/asap-3.jpg"
        },
        {
            title: "Strengthen Vendor & Employee Trust",
            desc: "Make consistent, on-time payments to suppliers, partners, and staff — boosting satisfaction and reliability.",
            image: "/asap-4.jpg"
        },
        {
            title: "Cost-Effective Processing",
            desc: "Consolidating payments into one batch can lower transaction fees and reduce administrative overhead.",
            image: "/asap-5.jpg"
        },
        {
            title: "Scalable for Growth",
            desc: "Whether you're paying dozens or thousands of recipients, bulk payment tools like ASAP scale with your business needs.",
            image: "/asap-6.jpg"
        }
    ];

    return (
        <section className="asap-benefits-section">
            <div className="asap-benefits-header">
                <h2 className="asap-benefits-title">Benefits of Using ASAP</h2>
            </div>

            <div className="asap-benefits-grid">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        className="asap-benefit-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="asap-benefit-image-container">
                            <img src={benefit.image} alt={benefit.title} className="asap-benefit-img" />
                        </div>
                        <h3 className="asap-benefit-title">{benefit.title}</h3>
                        <p className="asap-benefit-description">{benefit.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AsapBenefits;
