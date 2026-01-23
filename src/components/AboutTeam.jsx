import React from 'react';
import { motion } from 'framer-motion';
import './AboutTeam.css';

const teamMembers = [
    {
        name: "Henry Miller",
        role: "Supervisor, Product Development",
        image: "/henry.5fa41483.png"
    },
    {
        name: "Ani Offei Emmanuel",
        role: "Supervisor, Payments & VAS Operations",
        image: "/emmanuel-ani.dab8e50a.png"
    },
    {
        name: "Nana Agyemang Duah",
        role: "Software Engineer",
        image: "/Nana-Agyeman-Dua.fd837e20.png"
    },
    {
        name: "Abdullah Clement A Shekur",
        role: "Software Engineer",
        image: "/shakur.c4aa71b3.png"
    },
    {
        name: "Andrew Kattenstroth Domadew",
        role: "Engineer, Payment & VAS Operations",
        image: "/andrew.0b7c0fb5.png"
    },
    {
        name: "Emmanuel Nii Lomotey",
        role: "Software Engineer",
        image: "/Nii-Lomotey.5b40358e.png"
    },
    {
        name: "Godfred Boateng",
        role: "Frontend Developer",
        image: "/godfred.80d3848c.png"
    },
    {
        name: "Ohene Gyan Katakyie",
        role: "UI/UX Engineer",
        image: "/Ohene.c14a570b.png"
    },
    {
        name: "Jennifer Harrison",
        role: "Engineer, Payment & VAS Operations",
        image: "/Jennifer.c652c135.png"
    },
    {
        name: "Simon Olobi",
        role: "Finance Accountant",
        image: "/simon.10e79f30.png"
    },
    {
        name: "Blessing Emefa Idemudia",
        role: "Admin Officer",
        image: "/blessing.6ab0c068.png"
    },
    {
        name: "Matilda Kesewaa",
        role: "Facility Management Officer",
        image: "/matilda.39d82cb4.png"
    },
    {
        name: "Vida Mamphey",
        role: "Supervisor, Customer Support",
        image: "/vida-memphey.dcc7cb1d.png"
    },
    {
        name: "Annette Adu-Agyei",
        role: "Sales And Marketing Executive - Customer Service",
        image: "/annette.47481e09.png"
    },
    {
        name: "Gift Amponsah Baah",
        role: "Sales and Marketing Executive",
        image: "/gifty-baah-removebg-preview.5fcaca80.png"
    }
];

const AboutTeam = () => {
    return (
        <section className="about-team">
            <div className="team-container">
                <h2 className="team-title">Team</h2>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-member-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="member-image-border">
                                <div className="member-image-wrapper">
                                    <img src={member.image} alt={member.name} className="member-image" />
                                </div>
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
