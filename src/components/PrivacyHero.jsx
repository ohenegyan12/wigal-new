import React from 'react';
import './PrivacyHero.css';

const PrivacyHero = () => {
    return (
        <section className="privacy-hero-section">
            <div className="container privacy-hero-container">
                <h1 className="privacy-hero-title">
                    Wigal’s Commitment to Data Protection and Privacy
                </h1>

                <div className="privacy-logos">
                    <img src="/pci-new.svg" alt="PCI DSS Compliant" className="compliance-logo pci-logo" />
                    <img src="/pecb.png" alt="PECB Management System" className="compliance-logo pecb-logo" />
                </div>
            </div>
        </section>
    );
};

export default PrivacyHero;
