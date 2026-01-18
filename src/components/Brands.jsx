
import React from 'react';
import { motion } from 'framer-motion';
import './Brands.css';

const brands = [
    { name: 'Zenith Bank', logo: '/brands/zenith-bank.svg' },
    { name: 'Alliance Française', logo: '/brands/alliancefrancaise.svg' },
    { name: 'Perez Chapel', logo: '/brands/perez.svg' },
    { name: 'vvu', logo: '/brands/vvu.svg' },
    { name: 'Nova Wellness', logo: '/brands/nova.svg' },
    { name: 'BK Brands', logo: '/brands/bkbrands.svg' },
    { name: 'Great Commission', logo: '/brands/great-commission.svg' },
    { name: 'IPMC', logo: '/brands/ipmc.svg' },
    { name: 'Teachers Fund', logo: '/brands/teachers-fund.svg' },
    { name: 'Busy', logo: '/brands/busy.svg' },
    { name: 'Ecom', logo: '/brands/ecom.svg' },
    { name: 'Action Chapel', logo: '/brands/action-chappel.svg' }
];

const Brands = () => {
    // Duplicate brands to create seamless loop - increased duplication for smoothness
    const doubledBrands = [...brands, ...brands, ...brands, ...brands];

    return (
        <section className="brands-section">
            <div className="brands-container">
                <p className="brands-title">Trusted by businesses and developers across Ghana and beyond.</p>
                <div className="brands-grid">
                    <motion.div
                        className="brands-track"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 45, // SLower for better readability, adjust as needed
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {doubledBrands.map((brand, index) => (
                            <div key={index} className="brand-item">
                                <img src={brand.logo} alt={brand.name} className="brand-logo" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
