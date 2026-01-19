import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrivacyHero from '../components/PrivacyHero';
import SecurityContent from '../components/SecurityContent';

const Security = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <PrivacyHero /> {/* Reusing the same hero/header component as requested */}

            <SecurityContent />

            <Footer />
        </div>
    );
};

export default Security;
