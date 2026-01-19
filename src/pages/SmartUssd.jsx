
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SmartUssdHero from '../components/SmartUssdHero';
import SmartUssdWhyChoose from '../components/SmartUssdWhyChoose';
import SmartUssdFeatures from '../components/SmartUssdFeatures';
import SmartUssdSupport from '../components/SmartUssdSupport';
import Footer from '../components/Footer';

const SmartUssd = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="smart-ussd-page" style={{ minHeight: '100vh', position: 'relative' }}>
            <Navbar />
            <SmartUssdHero />
            <SmartUssdWhyChoose />
            <SmartUssdFeatures />
            <SmartUssdSupport />
            <Footer />
        </div>
    );
};

export default SmartUssd;
