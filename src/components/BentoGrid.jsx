
import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import './BentoGrid.css';

const BentoGrid = () => {
    return (
        <section className="bento-section">
            <div className="bento-header">
                <span className="bento-tag">FROG Messaging</span>
                <h2 className="bento-title">Reach Every Customer</h2>
                <p className="bento-subtitle">Reach your customers with texts, voice calls, and easy integrations, all with FROG.</p>
            </div>

            <div className="bento-grid">
                {/* Main Large Card */}
                <motion.div
                    className="bento-card card-large"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="bento-card-title">Say Hello to FROG</h3>
                    <p className="bento-card-desc">FROG is your all-in-one messaging buddy! Whether it's text, voice, or email, you can send messages that get noticed, at great rates and with simple tools that anyone can use.</p>
                    <a href="#" className="bento-btn btn-white">
                        <img src="/logo-arrow.svg" alt="" className="button-icon" /> Learn More
                    </a>
                    <img src="/FROG-MOC-1.png" alt="FROG Dashboard Mockup" className="bento-mockup-large" />
                </motion.div>

                {/* Lime Card */}
                <motion.div
                    className="bento-card card-lime"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="bento-card-title">Big Messages, Small Effort</h3>
                    <p className="bento-card-desc">Blast personalized SMS to groups in a snap at unbeatable prices—perfect for promos, reminders, and greetings.</p>
                    <img src="/big-sms.png" alt="Big SMS" className="bento-sms-image" />
                </motion.div>

                {/* Pale Card */}
                <motion.div
                    className="bento-card card-pale"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="bento-card-title">Talk the Talk</h3>
                    <p className="bento-card-desc">Want your message to speak? FROG's voice calls can deliver recordings, use text-to-speech, or play your audio files.</p>
                    <img src="/voice-frog.svg" alt="FROG Voice" className="bento-voice-image" />
                </motion.div>

                {/* Wide Blue Card */}
                <motion.div
                    className="bento-card card-blue"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="bento-card-title">Build Fun Stuff with Our API</h3>
                    <p className="bento-card-desc">Developers, plug FROG into your apps! Use the easy-to-understand API to send SMS, voice calls, check delivery, schedule campaigns, and more. There are examples and docs to get you coding quickly.</p>
                    <a href="https://frogdocs.wigal.com.gh/" target="_blank" rel="noopener noreferrer" className="bento-btn btn-white">
                        <img src="/logo-arrow.svg" alt="" className="button-icon" /> View Documentation
                    </a>
                    <img src="/developer.svg" alt="API Illustration" className="bento-api-image" />
                </motion.div>

                {/* White Action Card */}
                <motion.div
                    className="bento-card card-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="bento-card-title">Jump In & Start Sending</h3>
                    <p className="bento-card-desc">Ready to go? Sign in to your account or create one in minutes to start sending messages, grabbing your API keys, managing campaigns, and exploring features!</p>
                    <a href="https://frog.wigal.com.gh/login" target="_blank" rel="noopener noreferrer" className="bento-btn btn-green">
                        <img src="/logo-arrow.svg" alt="" className="button-icon" style={{ filter: 'brightness(0) invert(1)' }} /> Get Started With Frog
                    </a>
                    <img src="/brands/frog-get-started.png" alt="Happy customer using Frog" className="bento-person-image" />
                </motion.div>
            </div>
        </section>
    );
};

export default BentoGrid;
