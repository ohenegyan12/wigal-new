import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ReddeDevelopers.css';

const ReddeDevelopers = () => {
    return (
        <section className="redde-developers-section" id="redde-developers">
            <div className="redde-developers-container">
                <div className="redde-developers-card">
                    <div className="redde-developers-content">
                        <motion.h2
                            className="redde-developers-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            For Developers — Build With Redde API
                        </motion.h2>
                        <motion.p
                            className="redde-developers-desc"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Redde provides a powerful, developer-first API that makes accepting payments online simpler than ever.
                            Integrate mobile money and card payments into your websites or apps in minutes with our well-documented
                            SDKs and plugins.
                        </motion.p>

                        <motion.a
                            href="https://developers.reddeonline.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="redde-developers-btn"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <ArrowRight size={20} color="#A81F25" strokeWidth={2} style={{ marginRight: '8px' }} /> View Docs
                        </motion.a>
                    </div>

                    <div className="redde-developers-image-wrapper">
                        <img
                            src="/developer-2.jpg"
                            alt="Developer Coding"
                            className="redde-developers-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReddeDevelopers;
