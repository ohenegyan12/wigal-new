import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './FrogDevelopers.css';

const FrogDevelopers = () => {
    return (
        <section className="frog-developers-section" id="developers">
            <div className="frog-developers-container">
                <div className="frog-developers-card">
                    <div className="frog-developers-content">
                        <motion.h2
                            className="frog-developers-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            For Developers — Build With Frog Messaging API
                        </motion.h2>
                        <motion.p
                            className="frog-developers-desc"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Frog gives developers a unified, scalable messaging platform with SMS, voice calls, bulk messaging,
                            and IVR — all accessible through a simple, RESTful API so you can build alerts, notifications, OTPs,
                            surveys, and more without heavy setup.
                        </motion.p>

                        <motion.a
                            href="https://developer.wigal.com.gh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="frog-developers-btn"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <ArrowRight size={20} color="#218350" strokeWidth={2} style={{ marginRight: '8px' }} /> View Docs
                        </motion.a>
                    </div>

                    <div className="frog-developers-image-wrapper">
                        <img
                            src="/developer.jpg"
                            alt="Developer Coding"
                            className="frog-developers-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrogDevelopers;
