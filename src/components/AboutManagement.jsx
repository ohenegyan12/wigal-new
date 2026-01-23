import React from 'react';
import { motion } from 'framer-motion';
import './AboutManagement.css';

const managers = [
    {
        name: "Lawrences Amoah",
        role: "Head, Operations",
        image: "/lawrence.png"
    },
    {
        name: "Michael Asare",
        role: "Head, Engineering",
        image: "/asare.png"
    },
    {
        name: "Garvin Asagi",
        role: "Head, Finance & Admin & HR",
        image: "/gavin.png"
    },
    {
        name: "Richard Ocran",
        role: "Head, Business Development & Marketing",
        image: "/ocran.png"
    }
];

const AboutManagement = () => {
    return (
        <section className="about-management">
            <div className="management-container">
                <h2 className="management-title">Management</h2>

                <div className="management-grid">
                    {managers.map((manager, index) => (
                        <motion.div
                            key={index}
                            className="manager-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="manager-image-border">
                                <div className="manager-image-wrapper">
                                    <img src={manager.image} alt={manager.name} className="manager-image" />
                                </div>
                            </div>
                            <h3 className="manager-name">{manager.name}</h3>
                            <p className="manager-role">{manager.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutManagement;
