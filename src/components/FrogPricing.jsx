
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './FrogPricing.css';

const plans = [
    {
        title: 'Basic Plan(₵)',
        voiceSms: [
            'GH₵ 5 for 32 minutes',
            'GH₵ 10 for 63 minutes',
            'GH₵ 20 for 125 minutes',
            'GH₵ 50 for 312.5 minutes'
        ],
        bulkSms: [
            'GH₵ 5 @0.029940 for 30 Days, with 175 SMS',
            'GH₵ 10 @0.029155 for 30 Days, with 350 SMS',
            'GH₵ 20 @0.028557 for 30 Days, with 700 SMS',
            'GH₵ 50 @0.028430 for 30 Days, with 1759 SMS'
        ],
        highlight: false
    },
    {
        title: 'Standard (₵)',
        voiceSms: [
            'GH₵ 100 for 625 minutes',
            'GH₵ 200 for 1,250 minutes',
            'GH₵ 300 for 1,875 minutes',
            'GH₵ 500 for 3,125 minutes'
        ],
        bulkSms: [
            'GH₵ 100 @0.028305 for 30 Days, with 3533 SMS',
            'GH₵ 200 @0.028168 for 30 Days, with 7100 SMS',
            'GH₵ 300 @0.028037 for 30 Days, with 10,700 SMS',
            'GH₵ 500 @0.027906 valid for 30 Days, with 17,917 SMS'
        ],
        highlight: true
    },
    {
        title: 'Premium (₵)',
        voiceSms: [
            'GH₵ 1000 for 6,250 minutes',
            'GH₵ 2000 for 12,500 minutes'
        ],
        bulkSms: [
            'GH₵ 1,000 @0.027523 for 30 Days, with 36,333 SMS',
            'GH₵ 2,000 @0.027273 for 30 Days, with 73,334 SMS',
            'GH₵ 3,000 @0.026786 for 30 Days, with 112,000 SMS',
            'To buy more than GH 3,000, please call +233553019529'
        ],
        highlight: false
    }
];

const FrogPricing = () => {
    return (
        <section className="frog-pricing-section" id="pricing">
            <div className="frog-pricing-container">
                <div className="frog-pricing-header">
                    <h2 className="pricing-top-label">Our SMS Packages</h2>
                    <h3 className="pricing-main-title">Simple and flexible SMS pricing</h3>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`pricing-card ${plan.highlight ? 'highlighted' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="card-header">
                                <h4 className="plan-title">{plan.title}</h4>
                            </div>

                            <div className="voice-section">
                                <span className="section-label">VOICE SMS</span>
                                <div className="features-list">
                                    {plan.voiceSms.map((feature, idx) => (
                                        <div key={idx} className="feature-item">
                                            <Check className="check-icon" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bulk-section">
                                <span className="section-label">BULK SMS</span>
                                <div className="features-list">
                                    {plan.bulkSms.map((feature, idx) => (
                                        <div key={idx} className="feature-item">
                                            <Check className="check-icon" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card-footer">
                                <a href="https://frog.wigal.com.gh/login" target="_blank" rel="noopener noreferrer" className="purchase-btn" style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}>
                                    PURCHASE NOW
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FrogPricing;
