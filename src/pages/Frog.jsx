
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FrogHero from '../components/FrogHero';
import FrogFeatures from '../components/FrogFeatures';
import FrogServices from '../components/FrogServices';
import FrogIVR from '../components/FrogIVR';
import FrogPricing from '../components/FrogPricing';
import FrogAppSection from '../components/FrogAppSection';
import FrogDevelopers from '../components/FrogDevelopers';
import FrogCTA from '../components/FrogCTA';
import Footer from '../components/Footer';

const Frog = () => {
    const location = useLocation();

    // Scroll to top or specific section on mount
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
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            <Navbar />
            <FrogHero />
            <FrogFeatures />
            <FrogServices />
            <FrogIVR />
            <FrogPricing />
            <FrogAppSection />
            <FrogDevelopers />
            <FrogCTA />
            <Footer />
        </div>
    );
};

export default Frog;
