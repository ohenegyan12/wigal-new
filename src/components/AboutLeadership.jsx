import React from 'react';
import { motion } from 'framer-motion';
import './AboutLeadership.css';

const AboutLeadership = () => {
    return (
        <section className="about-leadership" id="team-section">
            <div className="leadership-container">
                <div className="section-title-wrapper">
                    <h2 className="leadership-main-title">Leadership</h2>
                </div>

                <div className="leadership-content">
                    {/* Left Column - CEO Image */}
                    <motion.div
                        className="leadership-image-col"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-dashed-border">
                            <div className="image-wrapper">
                                <img src="/ceo.png" alt="Stephen Adjei-Kyei - CEO" className="ceo-image" />
                            </div>
                        </div>
                        <div className="ceo-info">
                            <h3 className="ceo-name">Stephen Adjei-Kyei</h3>
                            <p className="ceo-role">Chief Executive Officer</p>
                        </div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <motion.div
                        className="leadership-text-col"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="why-choose-title">
                            Why companies like yours are choosing Wigal over other top development agencies in Ghana?
                        </h3>

                        <div className="leadership-point">
                            <h4 className="point-title">Products that have a lasting impact,</h4>
                            <p className="point-desc">
                                Our focus is deeper than the surface. Here at Wigal, our goal is to help your product or site make a long-lasting impact by building a rock-solid foundation, one that's prepared to take on the future storms, roadblocks and help your organization grow.
                            </p>
                        </div>

                        <div className="leadership-point">
                            <h4 className="point-title">We are transparent</h4>
                            <p className="point-desc">
                                You know your product better than anyone that is why we work alongside you to understand your business, your goals, and keep you involved every step of the way. You can expect frequent progress updates, check-ins, and guidance, for the most transparent mobile app and software development process from the Wigal team.
                            </p>
                        </div>

                        <div className="leadership-point">
                            <h4 className="point-title">We solve business problems</h4>
                            <p className="point-desc">
                                Wigal is here to help you create a net positive Return on Investment (ROI). That's why our focus is far beyond just building you something that functions. Your business trajectory is our core goal. We specialize in helping non-technical entities find success and reduce risk when creating technical things—far beyond building custom mobile apps to assist in the growth of your business.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutLeadership;
