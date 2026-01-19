import React from 'react';
import { motion } from 'framer-motion';
import './FrogIVR.css';

const steps = [
    {
        number: '01',
        text: 'Calls run 24/7, so customers can interact anytime.'
    },
    {
        number: '02',
        text: 'Give clients clear directions and fast access to key services without waiting.'
    },
    {
        number: '03',
        text: 'Use text-to-speech, upload your audio, or record your own message.'
    }
];

const FrogIVR = () => {
    return (
        <section className="frog-ivr-section" id="ivr">
            <div className="frog-ivr-container">
                <div className="frog-ivr-header">
                    <motion.h2
                        className="frog-ivr-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Automated Calls That Work for You
                    </motion.h2>
                    <motion.p
                        className="frog-ivr-desc"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        IVR lets your business send automated voice calls that guide customers through a menu of options — all without a live agent.
                        Customers listen to a recorded message and respond using their phone keypad to get information or take action.
                    </motion.p>
                </div>

                <div className="frog-ivr-steps">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="frog-ivr-step"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                        >
                            <span className="frog-ivr-step-number">{step.number}</span>
                            <p className="frog-ivr-step-text">{step.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="frog-ivr-image-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/IVR.jpg" alt="IVR Illustration" className="frog-ivr-img" />
                </motion.div>
            </div>
        </section>
    );
};

export default FrogIVR;
