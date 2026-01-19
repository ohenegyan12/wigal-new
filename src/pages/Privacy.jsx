import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrivacyHero from '../components/PrivacyHero';
import PrivacyContent from '../components/PrivacyContent';

const Privacy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <PrivacyHero />

            <PrivacyContent />

            <Footer />
        </div>
    );
};

export default Privacy;
