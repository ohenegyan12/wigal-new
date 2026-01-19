
import React from 'react';
import { motion } from 'framer-motion';
import './FrogServices.css';

const services = [
    {
        number: '01',
        title: 'Bulk SMS',
        description: 'Send mass text messages to all major networks in Ghana with high deliverability and competitive pricing. Perfect for promotions, alerts, and notifications that don’t require internet access.'
    },
    {
        number: '02',
        title: 'Voice SMS',
        description: 'Deliver audio messages via text-to-speech, uploaded recordings, or call-record features — ideal for reaching audiences regardless of literacy or device type'
    },
    {
        number: '03',
        title: 'IVR Messaging',
        description: 'Automate caller interactions through customizable voice menus that guide users and collect feedback without human intervention.'
    },
    {
        number: '04',
        title: 'Interactive USSD Services',
        description: 'Build real-time, session-based applications that work on any mobile phone without data, enabling everything from self-service menus to customer surveys.'
    }
];

const FrogServices = () => {
    return (
        <section className="frog-services-section" id="frog-services">
            <div className="frog-services-container">
                <div className="frog-services-header">
                    <h2 className="frog-services-title">Key Frog Services</h2>
                    <p className="frog-services-subtitle">
                        A unified suite of messaging and engagement tools designed to help businesses reach
                        customers instantly and reliably across all networks and devices.
                    </p>
                </div>

                <div className="frog-services-grid">
                    <motion.div
                        className="frog-services-image-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/office-team.jpg" alt="Key Frog Services" className="frog-services-img" />
                    </motion.div>

                    <div className="services-list">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-item"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <span className="service-number">{service.number}</span>
                                <div className="service-content">
                                    <h3 className="service-item-title">{service.title}</h3>
                                    <p className="service-item-desc">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrogServices;
